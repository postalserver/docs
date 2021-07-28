---
title: Click & Open Tracking
description: ''
position: 3.1
category: Features
---
Postal supports tracking opens & clicks from e-mails. There are a number of additional steps required to configure this.

<alert type="warning">
By default, this functionality is disabled.
</alert>

## How it works

Once enabled, Postal will automatically scan your outgoing messages and replace any links with a new link that goes via your Postal web server. When the link is clicked, Postal will log the click and redirect to the user to the original URL automatically. The links that are included in the e-mail should be on the same domain as the sender and therefore you need to configure a subdomain like `click.yourdomain.com` and point it to your Postal server.

## The tracking web server

To facilitate the logging & redirection, Postal runs a separate web server process that listens on ports 5010 (for HTTP) and 5011 (for HTTPS). This web server is designed to respond quickly to requests and is able to support TLS using Let's Encrypt automatically. Postal will handle the generation of certificates for any "tracking domains" that you add.

## Setup Let's Encrypt

Postal includes Let's Encrypt support for generating certificates automatically for tracking domains. You need to register your LE private key before you can use this. Do this by providing your e-mail address to the `register-lets-encrypt` method. By doing this you are agreeing to the Let's Encrypt terms.

```
postal register-lets-encrypt youremail@example.comn
```

## Enable the fast server

You'll need to enable this by enabling the fast server in the configuration. 

To avoid conflict with your management interface, you will need another static IP address that has ports 80 and 443 available. You should add something like this to your `postal.yml` configuration file. Replacing the bind address with the second IP address that you wish to use for the tracking server.

```yaml
fast_server:
  enabled: true
  bind_address: 192.168.0.4
```

You will need to make sure that your `nginx` server isn't already listening on this IP address. This can be configured in `/etc/nginx/sites-enabled/default`. You should update the `listen` lines as appropriate.

## Once enabled...

### Disable tracking on a per e-mail basis

If you don't wish to track anything in an email you can add a header to your e-mails before sending it.

```text
X-AMP: skip
```

### Disabling tracking for certain link domains

If there are certain domains you don't wish to track links, you can define these on the tracking domain settings page. For example, if you list `yourdomain.com` no links to this domain will be tracked.

### Disabling tracking on a per link basis

If you wish to disable tracking for a particular link, you can do so by inserting `+notrack` as shown below:

* `https+notrack://atech.media`
* `http+notrack://appmail.io/documentation`