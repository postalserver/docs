---
title: Receiving e-mail by HTTP
description: ''
position: 4.0
category: Developer
---

One of the most useful features in Postal is the ability to have incoming messages delivered to your own application as soon as they arrive. To receive incoming messages in Postal you can dispatch incoming messages to an HTTP URL of your choosing.

Each endpoint has an HTTP URL (we highly recommend https) as well as a set of rules which defines how data is sent to you.

* You can choose whether data is encoded as normal form data or whether we sent JSON in the body of the request.
* You can choose whether to receive the raw message (raw) or have it as a JSON dictionary (processed).
* You can choose whether you'd like replies & signatures to be separated from the plain body of the message.

Your server should accept our incoming message and reply within 5 seconds. It it takes longer than this, we will assume it has failed and the message will be retried. Your server should send a `200 OK` status to signal to us that you've received the message.

Messages will be tried up to 18 times with an exponential back-off until a successful response is seen except in the case of `5xx` statuses which will fail immediately.

When a message permanently fails to be delivered to your endpoint (i.e. the server returned a 5xx status code or it wasn't accepted after 18 attempts), the recipient will be sent a bounce message.

You can view the attempts (along with debugging information) on the message page in the web interface.

## The processed payload

When you chose to receive the message as JSON (processed), you'll receive a payload with the following attributes.

```javascript
{
  "id":12345,
  "rcpt_to":"sales@awesomeapp.com",
  "mail_from":"test@example.com",
  "token":"rtmuzogUauKN",
  "subject":"Re: Welcome to AwesomeApp",
  "message_id":"81026759-68fb-4872-8c97-6dd2901cb33a@amrp.appmail.io",
  "timestamp":1478169798.924355,
  "size":"822",
  "spam_status":"NotSpam",
  "bounce":false,
  "received_with_ssl":false,
  "to":"sales@awesomeapp.com",
  "cc":null,
  "from":"John Doe <test@example.com>",
  "date":"Thu, 03 Nov 2016 10:43:18 +0000",
  "in_reply_to":null,
  "references":null,
  "plain_body":"Hello there!",
  "html_body":"<p>Hello there!</p>",
  "auto_submitted":"auto-reply",
  "attachment_quantity":1,
  "attachments":[
    {
      "filename":"test.txt",
      "content_type":"text/plain",
      "size":12,
      "data":"SGVsbG8gd29ybGQh"
    }
  ]
}
```

* You will only have the `attachments` attribute if you have enabled it.
* The `data` attribute for each attachment is Base64 encoded.

## The raw message payload

When you choose to receive the full message, you will receive the following attributes.

```javascript
{
  "id":12345,
  "message":"REtJTS1TaWduYXR1cmU6IHY9MTsgYT1yc2Etc2hhMjU2Oy...",
  "base64":true,
  "size":859
}
```

* The `base64` attribute specifies whether or not the `message` attribute is encoded with Base64. This is likely to be true all the time.
