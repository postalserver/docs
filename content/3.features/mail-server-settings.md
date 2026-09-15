---
title: Mail Server Settings
description: 'Modes, limits, retention, held messages, the suppression list and other per-server settings.'
category: Features
---

Each mail server within an organization has its own settings, found under **Settings** in the server menu. Some settings are only visible to [global administrators](/features/users-and-permissions) under **Advanced Settings**.

## Server settings

| Setting | Description |
|---|---|
| **Name** | A display name, unique within the organization. |
| **Permalink** | A short identifier (letters, digits and hyphens) used in SMTP usernames (`org-permalink/server-permalink`) and URLs. It cannot be changed after the server is created. |
| **Mode** | `Live` or `Development`. See below. |
| **IP pool** | Only shown when [IP pools](/features/ip-pools) are enabled. The pool that outgoing mail from this server is sent from unless an IP pool rule matches. |
| **Postmaster** | The contact address included in bounce messages Postal generates when an incoming message cannot be delivered. Defaults to `postmaster@` the message's domain. |

### Live and Development mode

In **Live** mode all mail is routed normally. In **Development** mode every outgoing and incoming message is placed in the held queue with the note "Server is in development mode." instead of being delivered to recipients or endpoints. Messages are still parsed, inspected and visible in the web interface, and count towards the server's send limit. Individual held messages can be released manually from the web interface, which delivers them despite the mode.

If you only want to hold messages from a particular application or environment rather than the whole server, set the **hold** option on that application's [credential](/features/smtp-authentication#holding-messages-from-a-credential) instead.

## Spam

The **Spam threshold** and **Spam failure threshold** for incoming mail are set here. See [Spam & Virus Checking](/features/spam-and-virus-checking#classifying-spam).

## Retention

Each server has three retention settings which are shown on the **Retention** page and can be changed by a global administrator under **Advanced Settings**. They are enforced by a background task which runs once a day at 03:00 (server time, normally UTC).

| Setting | Default | Description |
|---|---|---|
| **Raw message retention days** | 30 | How many days the raw content of messages (headers, bodies and attachments) is kept. Raw data is stored in one table per day, and whole days are removed once they are older than this. After removal the message still appears in lists and searches but its content and attachments can no longer be viewed, and a queued message whose raw data has been removed will fail with "Raw message has been removed". |
| **Raw message retention size** | 2048 MB | The total disk space raw message data may use. When exceeded, whole days are removed starting with the oldest until usage is under the limit. |
| **Message retention days** | 60 | How many days message metadata (the message record itself, its deliveries, clicks, loads and spam checks) is kept. Older messages are deleted entirely. |

Leaving any of these blank disables that limit ("Indefinitely" / "No limit"). The **Retention** page also shows the current total size of the server's message database.

## Send limit

A global administrator can set a **Send limit** for a server under **Advanced Settings**. This is the maximum number of outgoing messages accepted in a rolling 60 minute window; the current usage is shown on the **Send Limit** page. Incoming messages are counted but not limited.

* When the volume reaches **90%** of the limit, the server is marked as *approaching* its limit.
* When the volume reaches the limit, every further outgoing message is held with the note "Message held because send limit (N) has been reached." until the volume drops. Releasing a held message while the server is still over the limit holds it again.

Once a minute Postal checks for servers that have recently approached or exceeded their limit and, at most once per hour for each state, e-mails every user in the organization and triggers the `SendLimitApproaching` / `SendLimitExceeded` [webhook events](/developer/webhooks#send-limit-events). The e-mails are sent using the `smtp` section of your Postal configuration.

## Held messages

Messages that are held are not delivered but remain visible under **Messages &rarr; Held** where they can be released (re-queued for delivery) or the hold cancelled. Each held message triggers a `MessageHeld` webhook. A message may be held for any of the following reasons:

| Reason | Details recorded | Can be released manually? |
|---|---|---|
| Server is in Development mode | "Server is in development mode." | Yes |
| Credential is set to hold | "Credential is configured to hold all messages authenticated by it." | Yes |
| Recipient is on the suppression list | "Recipient (…) is on the suppression list (reason: …)" | Yes |
| Send limit reached | "Message held because send limit (…) has been reached." | Only once the volume has dropped below the limit |
| Server or organization is suspended | "Mail server has been suspended…" | No - it will be held again until unsuspended |
| Incoming spam on a route set to Quarantine | "Message placed into quarantine." | Yes |
| Incoming mail on a route set to Hold | "Message has been accepted but not sent to any endpoints." | Yes (marked as Processed) |

Held messages expire after the number of days set by `postal.default_maximum_hold_expiry_days` (default **7**). An hourly task cancels the hold on expired messages, recording a `HoldCancelled` delivery with the note "The hold on this message has been removed without action." The message is not delivered.

## Suppression list

Each server maintains a suppression list of recipient addresses that Postal will not deliver to, viewable under **Messages &rarr; Suppressions**. Addresses are added automatically when Postal is sending **outgoing** mail:

* **Too many hard fails** - a permanent (`5xx`) rejection from the recipient's mail server when there has already been at least one other hard fail to the same address in the previous 24 hours.
* **Too many soft fails** - the message has been retried the maximum number of times (`postal.default_maximum_delivery_attempts`, default 18) without success.

Incoming bounce messages do **not** add addresses to the list.

While an address is on the list, new messages to it are held (see above) rather than attempted. Releasing such a message manually bypasses the list, and if the delivery then succeeds the address is removed from the list. Entries are otherwise removed automatically after `postal.default_suppression_list_automatic_removal_days` (default **30**) days.

## Advanced settings (administrators only)

| Setting | Description |
|---|---|
| **Send limit** | See above. |
| **Allow sender header** | Permits any `From` address as long as a `Sender` header contains an address on one of the server's verified domains. See [From/Sender validation](/features/smtp-authentication#fromsender-validation). Applies to SMTP and the API. |
| **Privacy mode** | When enabled, the `Received` header Postal adds to submitted messages omits the submitting client's IP address, reverse DNS hostname and HELO name, leaving only `by {hostname} with SMTP/HTTP; {date}`. |
| **Log SMTP data** | Log the full content of messages submitted using this server's credentials in the SMTP server log. Debugging only. See [Logging](/features/logging#smtp-server-logging). |
| **Outbound spam threshold** | Enables spam scanning of outgoing messages; messages scoring at or above this are failed. Blank disables outbound scanning. See [Spam & Virus Checking](/features/spam-and-virus-checking). |
| **Message retention days**, **Raw message retention days**, **Raw message retention size** | See [Retention](#retention). |

### Suspending a server

An administrator can **suspend** a server from **Advanced Settings** by entering a reason. While suspended:

* Every message processed for the server (incoming and outgoing) is held with the reason "Mail server has been suspended".
* The SMTP server rejects `RCPT TO` for the server's routes and credentials with `535 Mail server has been suspended`.
* API requests using the server's credentials return the `ServerSuspended` error.
* All users in the organization are e-mailed about the suspension.

Organizations also carry a suspension flag which suspends all of their servers at once; there is no interface for this, but it can be set from `postal console` (`Organization.find_by(permalink: "my-org").update(suspended_at: Time.now)`). Use **Unsuspend server** to restore normal operation; held messages must then be released manually.

## Deleting a server

Deleting a server (**Settings &rarr; Delete**, which requires typing the server's name to confirm) marks it as deleted immediately and hides it from the interface. The server's message database is dropped by an hourly background task shortly afterwards. This cannot be undone.
