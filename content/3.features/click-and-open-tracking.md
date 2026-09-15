---
title: Click & Open Tracking
description: 'Track when recipients open your e-mails and click links within them.'
category: Features
---

Postal supports tracking opens and clicks from e-mails. This allows you to see when people open messages or they click links within them.

<img src="/screenshots/tracked-message.png" width="1280" alt=""/>

## How it works

Once enabled, Postal will automatically scan your outgoing messages and replace any links with new URLs that go via your Postal web server, and insert a tracking image into HTML messages. When the link is clicked, Postal will log the click and redirect the user to the original URL automatically. The links that are included in the e-mail should be on the same domain as the sender and therefore you need to configure a subdomain like `click.yourdomain.com` and point it to your Postal server.

For a message to be rewritten, all of the following must be true:

* The message is an outgoing message with an authenticated sending domain.
* The server has a **tracking domain** attached to that sending domain (e.g. `click.yourdomain.com` for messages from `yourdomain.com`).
* The tracking domain's DNS check has passed - its status must be **OK**. Postal checks for a CNAME record at the tracking domain pointing at the value of `dns.track_domain` in your configuration (`track.postal.example.com` in the [DNS configuration](/getting-started/dns-configuration) examples). Tracking domains are re-checked automatically every hour.
* The message does not have an `X-AMP: skip` header.

Tracking domains have three options which are all enabled by default:

* **SSL** - rewritten URLs use `https://`. You must have a valid certificate for the tracking domain on your web proxy. It is **highly** recommended to leave this enabled as anything else is likely to cause problems with reputation and user experience.
* **Track loads** - a 1&times;1 pixel image is inserted before the closing `</body>` tag of HTML parts. When loaded, a `MessageLoaded` webhook is sent.
* **Track clicks** - `http://` and `https://` URLs in plain text parts and `href` attributes in HTML parts are replaced with tracking URLs. When clicked, a `MessageLinkClicked` webhook is sent.

## Configuring your web server

To avoid messages being marked as spam, it's important that the subdomain that Postal uses in the re-written URLs is on the same domain as that sending the message. This means if you are sending mail from `yourdomain.com`, you'll need to set up `click.yourdomain.com` (or whatever you choose) to point to your Postal server.

There are two parts to this:

1. Add a CNAME record for `click.yourdomain.com` pointing to your configured `dns.track_domain` (e.g. `track.postal.example.com`). This is what Postal's DNS check looks for.
2. Configure your web proxy to send requests for `click.yourdomain.com` to the Postal web server with the `X-Postal-Track-Host: 1` header added. Postal uses this header (and nothing else - the `Host` header is not checked) to decide that a request is a tracking request.

### Additional Caddy configuration

If you used Caddy as the proxy for overall Postal traffic it is easy to add an additional proxy to its config `/opt/postal/config/Caddyfile`:

```
# ... previous content

click.yourdomain.com {
  reverse_proxy 127.0.0.1:5000 {
    header_up X-Postal-Track-Host "1"
  }
}
```

After saving this new configuration restart Caddy, for example if you're using docker, you may be able to `docker restart postal-caddy`.

After this you should see `Hello.` on `click.yourdomain.com` and SSL should work out of the box.

### Custom proxy on webserver

You'll need to add an appropriate virtual host on your web server that proxies traffic from that domain to the Postal web server. The web server must add the `X-Postal-Track-Host: 1` header so the Postal web server knows to treat requests as tracking requests.

Once you have configured this, you should be able to visit your chosen domain in a browser and see `Hello.` printed back to you. If you don't see this, review your configuration until you do. If you still don't see this and you enable the tracking, your messages will be sent with broken links and images.

### Setting up tracking domain

If you're happy things are working, you can enable tracking as follows:
1. Find the mail server you wish to enable tracking on in the Postal web interface
2. Go to the **Domains** item
3. Select **Tracking Domains**
4. Click **Add a tracking domain**
5. Enter the subdomain (a single label such as `click`) and select the sending domain it belongs to, then choose the options you want to use.

Postal will check the CNAME record immediately. You can re-run the check with the **Check DNS** button; tracking is only applied to messages once the status is **OK**.

## Requests served by the tracking host

| Path | Behaviour |
|---|---|
| `/img/{server-token}/{message-token}` | Records an open (once per request) and returns the 1&times;1 PNG. |
| `/{server-token}/{link-token}` | Records the click and responds with a `307` redirect to the original URL. Returns `404 Link not found` for an unknown token. |
| Anything else (including `/`) | Returns `200 Hello.` - useful for checking your proxy configuration. |

## Disabling tracking on a per e-mail basis

If you don't wish to track anything in an email you can add a header to your e-mails before sending it. No links or images will be rewritten.

```text
X-AMP: skip
```

## Disabling tracking for certain link domains

If there are certain domains you don't wish to track links from, you can define these on the tracking domain settings page (one per line). The host of each link is compared exactly against this list, so `yourdomain.com` excludes links to `https://yourdomain.com/...` but not `https://www.yourdomain.com/...` - list each host separately.

## Disabling tracking on a per link basis

If you wish to disable tracking for a particular link, you can do so by inserting `+notrack` as shown below. The `+notrack` will be removed leaving a plain link.

* `https+notrack://postalserver.io`
* `http+notrack://katapult.io/signup`
