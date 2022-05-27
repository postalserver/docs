---
title: Debugging
description: ''
position: 5.4
category: 'Other Notes'
---

This page contains information on how to identify problems with your installation.

## DNS

Whilst Postal can verify DNS records on its own, it can be useful to check what the rest of the internet is seeing.

You can make use of [Whats My DNS](https://whatsmydns.net) for a quick global check or the `dig` command if you have it on a terminal, i.e. `dig txt yourdomain.com` or `dig a yourdomain.com`.

## SMTP

The quickest way to ensure the internet can connect to your Postal SMTP is with `telnet postal.yourdomain.com 25`. You can proceed to attempt sending a message manually if you are familiar with the raw SMTP commands to further verify your Postal installation is working correctly.

### SMTP SSL

If you aren't sure about whether the SSL certificate you have provided to Postal is set up correctly you can use `openssl s_client -connect postal.yourdomain.com:25 -starttls smtp` to get some information about your certificate from the point of view of SMTP.
