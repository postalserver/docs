---
title: Auto-Responders & Bounces
description: ''
position: 5.0
category: 'Other Notes'
---
When you send an email you may be automatically be sent a bounce message or an auto responder by the destination mail server. These are handled slightly differently to normal incoming e-mail and it's worth understanding how these work.

Messages like these aren't usually sent to the e-mail address that sent the message but are sent to the **return path** address. This is an address which Postal assigns to your mail server and is provided to the destination mail server for the purpose of sending this type of message. The return to address will be something like `abcdef@psrp.yourdomain.com`.

If you wish to route mail which is sent to your return path address to your application, you can set up a **return path route**. This is the same as a normal route except you should enter the name as `__returnpath__` and leave the domain field blank. You can only choose HTTP endpoints for this type of route. Once added, messages sent to your return path that aren't detected as bounces will be sent to HTTP endpoint you choose.

## A note about bounces

Messages that Postal detects as being bounces for a message you have already sent will not be delivered to your return path route. The original message will be updated and a `MessageBounced` webhook event will be triggered.
