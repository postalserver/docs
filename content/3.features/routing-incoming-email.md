---
title: Routing Incoming E-Mail
description: 'Routes, endpoints and what happens to mail that arrives at your Postal server.'
category: Features
---

As well as sending mail, each Postal mail server can receive mail for the domains you have added to it. Incoming mail is matched to a **route**, and each route decides what should happen to the message - most commonly delivering it to an **endpoint** such as your application's HTTP URL, another SMTP server or an ordinary e-mail address.

## Getting mail to Postal

There are two ways to get incoming mail into Postal.

**Point your MX records at Postal.** Add the MX records from your `dns.mx_records` configuration (for example `mx1.postal.example.com` and `mx2.postal.example.com`, both at priority 10) to the domain. Postal's [domain DNS checks](/features/sending-domains#dns-checks) will show a green tick once they are visible. All mail for addresses on that domain will then arrive at your Postal SMTP server.

**Forward mail from an existing mail server.** If the domain already has a mail server, you don't need to change any DNS. Every route has a unique forwarding address of the form `{token}@{route domain}` (e.g. `a1b2c3d4@routes.postal.example.com`), shown in the **Address** field when you edit the route. Forward mail from your existing server to this address and it will be treated exactly as if it had been sent to the route's real address. The route domain must have an MX record pointing at Postal - see [DNS configuration](/getting-started/dns-configuration#route-domain).

## Routes

Routes are managed under **Routing &rarr; Routes** in the server menu. A route consists of:

* **Name and domain** - the address to route, e.g. `support` @ `yourdomain.com`. The domain must be a verified domain belonging to the server or its organization. The name may be:
  * an ordinary local part (lower case letters, digits, `-` and `.`);
  * `*` to receive mail for every address on the domain ([wildcards](/other/wildcards-and-address-tags));
  * `__returnpath__` with no domain, to receive mail sent to the server's return path address ([return path routes](/other/auto-responders-and-bounces#return-path-routes)). Only one of these may exist per server and it must deliver to an HTTP endpoint.

  Mail to `name+anything@domain` also matches the route for `name@domain` ([address tags](/other/wildcards-and-address-tags)). A given name/domain combination can only be routed once across your whole installation.

* **Endpoint** - either one of the server's endpoints, or one of the special modes below.
* **Additional endpoints** - see below.
* **Spam mode** - `Mark`, `Quarantine` or `Fail`. See [Spam & Virus Checking](/features/spam-and-virus-checking#classifying-spam).

### Route modes

The **Endpoint** dropdown also offers four special modes in place of a real endpoint:

| Mode | At `RCPT TO` time | When processed |
|---|---|---|
| **Endpoint** (an HTTP, SMTP or address endpoint) | Accepted | Delivered to the endpoint. |
| **Accept** | Accepted | Recorded as **Processed** with no delivery. The message is stored and visible in the web interface. |
| **Hold** | Accepted | Placed in the held queue (status **Held**). You can release it from the web interface, after which it is marked **Processed**. Held messages expire after `postal.default_maximum_hold_expiry_days` (default 7). |
| **Bounce** | Accepted | Marked as **HardFail** and a bounce is sent back to the sender explaining the message was not delivered. |
| **Reject** | Rejected with `550 Route does not accept incoming messages` | Never stored. |

A message is only rejected at SMTP time by the **Reject** mode (and by a suspended server). Everything else is accepted, queued, and processed by a worker.

### Additional endpoints

A route with a real endpoint can also deliver the same message to any number of additional endpoints. A separate copy of the message (with its own ID and delivery history) is created for each endpoint. Additional endpoints on a wildcard (`*`) route must be HTTP endpoints. Additional endpoints cannot be used with the Accept, Hold, Bounce or Reject modes.

### Processing order

When a worker processes an incoming message it performs the following steps in order:

1. If the message is a bounce for something Postal sent, link it to the original message and stop ([bounces](/other/auto-responders-and-bounces)).
2. Run spam and virus inspection if enabled. If the score is at or above the server's **spam failure threshold**, hard fail.
3. If the server is in **Development** mode, hold the message.
4. Apply the route's spam mode if the message was marked as spam (Quarantine holds, Fail hard fails).
5. Apply the route mode (Accept, Hold, Bounce or deliver to the endpoint).
6. On a hard failure from an endpoint, send a bounce to the sender (unless the endpoint returned `429`).

## Endpoints

Endpoints are created under **Routing** in the server menu and can be shared by any number of routes on that server. Deleting an endpoint changes any routes using it to **Reject**.

### HTTP endpoints

Deliver the message to your application as an HTTP `POST`. All options and the payload formats are described on the [Receiving e-mail by HTTP](/developer/http-payloads) page.

### SMTP endpoints

Forward the message to another SMTP server.

| Field | Description |
|---|---|
| **Hostname** | The server to connect to. Postal connects directly to this host (no MX lookup is performed). |
| **Port** | Defaults to `25`. |
| **SSL mode** | `None` - never use TLS. `Auto` - use STARTTLS if the server offers it, without verifying the certificate, falling back to plain text if the TLS handshake fails. `TLS` - connect with implicit TLS (e.g. port 465) and verify the certificate. `STARTTLS` - see the note below. |

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
In Postal 3.3.7 the <code>STARTTLS</code> option on SMTP endpoints does not work as intended due to a mismatch in the source code (the endpoint stores <code>STARTTLS</code> but the SMTP client checks for <code>STARTLS</code>), so it currently behaves the same as <code>None</code>. Use <code>Auto</code> or <code>TLS</code> until this is fixed.
::

The message is forwarded with an envelope sender of `{server token}@{return path domain}` so that bounces come back to Postal, and a `Resent-Sender` header is added if `postal.use_resent_sender_header` is enabled. Connection timeouts are controlled by `smtp_client.open_timeout` and `smtp_client.read_timeout` (default 30 seconds each). Temporary (`4xx`) responses are retried; permanent (`5xx`) responses hard fail and cause a bounce.

### Address endpoints

Forward the message to an ordinary e-mail address. Postal looks up the MX records for the address's domain (or uses your configured `postal.smtp_relays` if any) and delivers it as it would an outgoing message, with the `RCPT TO` replaced by the target address. Each address may only be added once per server.

## Delivery, retries and bounces

Deliveries to endpoints follow the same rules as outgoing mail: temporary failures are retried with an exponential back-off (`5 minutes × 1.3ⁿ`) up to `postal.default_maximum_delivery_attempts` times (default 18, roughly 31 hours), after which the message is hard failed. A hard failure of an incoming message causes a bounce to be sent to the original sender. Each attempt is recorded on the message's **Activity** tab and triggers the corresponding [webhook](/developer/webhooks#message-status-events).

## Limits

The SMTP server accepts messages up to `smtp_server.max_message_size` (default 14 MB). Incoming volume is counted in the server's statistics but is not subject to the server's send limit.
