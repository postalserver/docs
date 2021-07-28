---
title: Using the API
description: ''
position: 4.3
category: Developer
---
The HTTP API allows you to send messages to us using JSON over HTTP. You can either talk to the API using your current HTTP library or you can use one of the pre-built libraries.

[Full API documentation](https://postalserver.github.io/postal-api)

# General API Instructions

* You should sent POST requests to the URLs shown below.
* Parameters should be encoded in the body of the request and `application/json` should be set as the `Content-Type`.
* The response will always be provided as JSON. The status of a request can be determined from the `status` attribute in the payload you receive. It will be `success` or `error`. Further details can be found in the `data` attribute.

An example response body is shown below:

```javascript
{
  "status":"success",
  "time":0.02,
  "flags":{},
  "data":{"message_id":"xxxx"}
}
```

To authenticate to the API you'll need to create an API credential for your mail server through the web interface. This is a random string which is unique to your server.

To authenticate to the API, you need to pass us this key in the `X-Server-API-Key` HTTP header.

# Sending a message

There are two ways to send a message - you can either provide each attribute needed for the e-mail individually or you can craft your own RFC 2822 message and send this instead.

Full details about these two methods can be found in our API documentation:

* [Sending a message](https://postalserver.github.io/postal-api/controllers/send/message)
* [Sending an RFC 2822 message](https://postalserver.github.io/postal-api/controllers/send/raw)

For both these methods, the API will return the same information as the result. It will contain the `message_id` of the message that was sent plus a `messages` hash with the IDs of the messages that were sent by the server to each recipient.

```javascript
{
  "message_id":"abcabc@amrc.appmail.io",
  "messages":{
    "john@example.com":{"id":37171, "token":"a4udnay1"},
    "mary@example.com":{"id":37172, "token":"bsfhjsdfs"}
  }
}
```