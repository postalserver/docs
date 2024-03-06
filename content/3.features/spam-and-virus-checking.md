---
title: Spam & Virus Checking
description: ''
category: Features
---
Postal can integrate with SpamAssassin and ClamAV to automatically scan incoming and outgoing messages that pass through mail servers.

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
This functionality is disabled by default.
::

## Setting up SpamAssassin

By default, Postal will talk to SpamAssassin's `spamd` using an TCP socket connection (port 783). You'll need to install SpamAssassin on your server and then enable it within Postal.

### Installing SpamAssassin

```
sudo apt install spamassassin
```

Once you have installed this, you will need to open up `/etc/default/spamassassin` and change `ENABLED` to `1` and  `CRON` to `1`. On some systems (such as Ubuntu 20.04 or newer), you might need to enable the SpamAssassin daemon with the following command.

```bash
update-rc.d spamassassin enable 
```

Then you should restart SpamAssassin.

```
sudo systemctl restart spamassassin
```

### Enabling in Postal

To enable spam checking, you'll need to add the following to your `postal.yml` configuration file and restart. If you have installed SpamAssassin on a different host to your Postal installation you can change the host here but be sure to ensure that the `spamd` is listening on your external interfaces.

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

### Classifying Spam

The spam system is based on a numeric scoring system and different scores are assigned to different issues which may appear in a message. You can configure different thresholds which define when a message is treated as spam. We recommend starting at 5 and updating this once you've seen how your incoming messages are classified.

You have three options which can be configured on a per route basis which defines how spam messages are treated:

* **Mark** - messages will be sent through to your endpoint but the spam information will be made available to you.
* **Quarantine** - the message will placed into your hold queue and you'll need to release them if you wish them to be passed to your application. They will only remain here for 7 days,
* **Fail** - the message will be marked as failed and will only be recorded in your message history without being sent.
