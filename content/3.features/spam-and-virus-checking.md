---
title: Spam & Virus Checking
description: 'Integrate SpamAssassin, rspamd and ClamAV to scan messages passing through your mail servers.'
category: Features
---
Postal can integrate with SpamAssassin, rspamd and ClamAV to automatically scan incoming and outgoing messages that pass through mail servers.

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
This functionality is disabled by default.
::

## How it works

When a message is inspected, Postal sends it to each enabled inspector and collects the results:

* **Spam checking** is performed by either rspamd or SpamAssassin. Each check returns a list of rules that matched along with a score for each; the message's spam score is the sum of these. If both `rspamd` and `spamd` are enabled, **only rspamd is used**.
* **Virus checking** is performed by ClamAV. This sets a "threat" flag on the message (and records the name of the threat) but does **not** contribute to the spam score. A detected threat does not, on its own, cause a message to be held or failed - it is exposed to you through the `X-Postal-Threat` header, the web interface and the API so that your application can decide what to do.

Inspection results are shown on the **Spam Checks** tab of each message in the web interface.

**Incoming messages** are always inspected when at least one inspector is enabled.

**Outgoing messages** are only inspected when an administrator has set an **Outbound spam threshold** for the server (found under the server's **Advanced Settings**). If the score is greater than or equal to this threshold, the message is failed with the details "Message is likely spam". Leave this blank to disable outgoing inspection entirely.

## Setting up rspamd

rspamd is the recommended spam checker. Postal communicates with rspamd's HTTP worker (normally on port 11334) using the `/checkv2` endpoint. Install and configure rspamd following [its own documentation](https://rspamd.com/doc/), then enable it in your `postal.yml` and restart Postal.

```yaml
rspamd:
  enabled: true
  host: 127.0.0.1
  port: 11334
  # Use HTTPS when connecting to rspamd
  ssl: false
  # If your rspamd controller requires a password
  password:
  # Any flags to pass in the Flags header (see the rspamd documentation)
  flags:
```

When scanning outgoing messages, Postal tells rspamd that the message is outbound so that checks which are not relevant to locally submitted mail are skipped.

## Setting up SpamAssassin

By default, Postal will talk to SpamAssassin's `spamd` using a TCP socket connection (port 783). You'll need to install SpamAssassin on your server and then enable it within Postal.

### Installing SpamAssassin

```
sudo apt install spamassassin
```

#### Systemd systems
On systems that use systemd (e.g. Debian Bookworm), you will need to enable the SpamAssassin timer. It is used to update the spam rules (which can be done manually using `sa-update`).

```shell
systemctl enable --now spamassassin-maintenance.timer
```

#### Other systems
On other systems, you will need to open up `/etc/default/spamassassin` and change `ENABLED` to `1` and `CRON` to `1`. On some systems (such as Ubuntu 20.04 or newer), you might need to enable the SpamAssassin daemon with the following command.

```bash
update-rc.d spamassassin enable
```

Then you should restart SpamAssassin.

```
sudo systemctl restart spamassassin
```

### Enabling in Postal

To enable spam checking, you'll need to add the following to your `postal.yml` configuration file and restart. If you have installed SpamAssassin on a different host to your Postal installation you can change the host here but be sure to ensure that `spamd` is listening on your external interfaces.

```yaml
spamd:
  enabled: true
  host: 127.0.0.1
  port: 783
```

```
postal stop
postal start
```

When scanning outgoing messages, the `NO_RECEIVED`, `NO_RELAYS`, `ALL_TRUSTED`, `FREEMAIL_FORGED_REPLYTO`, `RDNS_DYNAMIC` and `CK_HELO_GENERIC` rules are ignored as they are not meaningful for locally submitted mail.

## Setting up ClamAV

Postal connects to the `clamd` daemon over TCP (using the `INSTREAM` command). Install ClamAV and ensure `clamd` is configured with a `TCPSocket` (the port is `3310` in most distributions' default configuration - note that Postal's default is `2000`, so set the port to match your `clamd.conf`).

```yaml
clamav:
  enabled: true
  host: 127.0.0.1
  port: 3310
```

## Classifying spam

The spam system is based on a numeric scoring system and different scores are assigned to different issues which may appear in a message. Each mail server has two thresholds which can be changed from the **Settings &rarr; Spam** page for the server. The defaults for new servers are set by the `postal.default_spam_threshold` (default `5`) and `postal.default_spam_failure_threshold` (default `20`) configuration options.

* **Spam threshold** - a message with a score **greater than** this is treated as spam. We recommend starting at 5 and updating this once you've seen how your incoming messages are classified.
* **Spam failure threshold** - a message with a score **greater than or equal to** this is failed immediately and will not be delivered to any route or endpoint. This happens before the route is considered.

The following headers are appended to every inspected incoming message so that your application can make its own decisions:

```text
X-Postal-Spam: yes
X-Postal-Spam-Threshold: 5.0
X-Postal-Spam-Score: 7.3
X-Postal-Threat: no
```

You then have three options which can be configured on a per-route basis which define how messages identified as spam (over the spam threshold but under the failure threshold) are treated:

* **Mark** - messages will be sent through to your endpoint but the spam information will be made available to you in the headers above and the `spam_status` field of HTTP payloads and webhooks.
* **Quarantine** - the message will be placed into your held queue and you'll need to release it if you wish it to be passed to your endpoint. Held messages expire after the number of days set by `postal.default_maximum_hold_expiry_days` (default 7).
* **Fail** - the message will be marked as failed and will only be recorded in your message history without being sent.
