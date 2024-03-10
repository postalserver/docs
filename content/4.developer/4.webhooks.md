---
title: Webhooks
description: ''

---

Postal supports sending webhooks over HTTP when various events occur during the lifecycle of a message.

This page lists all the different types of event along with an example JSON payload that you'll receive. In many cases, only a small amount of information will be sent, if you require more information you should use the API to obtain it.

## Message Status Events

These events are triggered on various events in an e-mail's lifecycle. The payload format is identical for all messages however the `status` attribute may change. The following statuses may be delivered.

* `MessageSent` - when a message is successfully delivered to a recipient/endpoint.
* `MessageDelayed` - when a message's delivery has been delayed. This will be sent each time Postal attempts a delivery and a message is delayed further.
* `MessageDeliveryFailed` - when a message cannot be delivered.
* `MessageHeld` - when a message is held.

```javascript
{
  "status":"Sent",
  "details":"Message sent by SMTP to aspmx.l.google.com (2a00:1450:400c:c0b::1b) (from 2a00:67a0:a:15::2)",
  "output":"250 2.0.0 OK 1477944899 ly2si31746747wjb.95 - gsmtp",
  "time":0.22,
  "sent_with_ssl":true,
  "timestamp":1477945177.12994,
  "message":{
    "id":12345,
    "token":"abcdef123",
    "direction":"outgoing",
    "message_id":"5817a64332f44_4ec93ff59e79d154565eb@app34.mail",
    "to":"test@example.com",
    "from":"sales@awesomeapp.com",
    "subject":"Welcome to AwesomeApp",
    "timestamp":1477945177.12994,
    "spam_status":"NotSpam",
    "tag":"welcome"
  }
}
```

## Message Bounces

If Postal receives a bounce message for a message that was previously accepted, you'll receive the `MessageBounced` event.

```javascript
{
  "original_message":{
    "id":12345,
    "token":"abcdef123",
    "direction":"outgoing",
    "message_id":"5817a64332f44_4ec93ff59e79d154565eb@app34.mail",
    "to":"test@example.com",
    "from":"sales@awesomeapp.com",
    "subject":"Welcome to AwesomeApp",
    "timestamp":1477945177.12994,
    "spam_status":"NotSpam",
    "tag":"welcome"
  },
  "bounce":{
    "id":12347,
    "token":"abcdef124",
    "direction":"incoming",
    "message_id":"5817a64332f44_4ec93ff59e79d154565eb@someserver.com",
    "to":"abcde@psrp.postal.yourdomain.com",
    "from":"postmaster@someserver.com",
    "subject":"Delivery Error",
    "timestamp":1477945179.12994,
    "spam_status":"NotSpam",
    "tag":null
  }
}
```

## Message Click Event

If you have click tracking enabled, the `MessageLinkClicked` event will tell you that a user has clicked on a link in one of your e-mails.

```javascript
{
  "url":"https://atech.media",
  "token":"VJzsFA0S",
  "ip_address":"185.22.208.2",
  "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36",
  "message":{
    "id":12345,
    "token":"abcdef123",
    "direction":"outgoing",
    "message_id":"5817a64332f44_4ec93ff59e79d154565eb@app34.mail",
    "to":"test@example.com",
    "from":"sales@awesomeapp.com",
    "subject":"Welcome to AwesomeApp",
    "timestamp":1477945177.12994,
    "spam_status":"NotSpam",
    "tag":"welcome"
  }
}
```

## Message Loaded/Opened Event

If you have open tracking enabled, the `MessageLoaded` event will tell you that a user has opened your e-mail (or, at least, have viewed the tracking pixel embedded within it.)

```javascript
{
  "ip_address":"185.22.208.2",
  "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36",
  "message":{
    "id":12345,
    "token":"abcdef123",
    "direction":"outgoing",
    "message_id":"5817a64332f44_4ec93ff59e79d154565eb@app34.mail",
    "to":"test@example.com",
    "from":"sales@awesomeapp.com",
    "subject":"Welcome to AwesomeApp",
    "timestamp":1477945177.12994,
    "spam_status":"NotSpam",
    "tag":"welcome"
  }
}
```

## DNS Error Event

Postal regularly monitors domains it knows about to ensure that your SPF/DKIM/MX records are correct. If you'd like to be notified when the checks fail, you can subscribe to the `DomainDNSError` event.

```javascript
{
  "domain":"example.com",
  "uuid":"820b47a4-4dfd-42e4-ae6a-1e5bed5a33fd",
  "dns_checked_at":1477945711.5502,
  "spf_status":"OK",
  "spf_error":null,
  "dkim_status":"Invalid",
  "dkim_error":"The DKIM record at example.com does not match the record we have provided. Please check it has been copied correctly.",
  "mx_status":"Missing",
  "mx_error":null,
  "return_path_status":"OK",
  "return_path_error":null,
  "server":{
    "uuid":"54529725-8807-4069-ab29-a3746c1bbd98",
    "name":"AwesomeApp Mail Server",
    "permalink":"awesomeapp",
    "organization":"atech"
  },
}
```
