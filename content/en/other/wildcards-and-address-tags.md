---
title: Wildcards & Address Tags
description: ''
position: 5.1
category: 'Other Notes'
---
Postal supports the use of wildcards and address tags in routes.

## Using a wildcard

Wildcards will allow you to receive all e-mail for every address on a domain. However, for most use cases, this isn't recommended because it means that large volumes of spam may be processed by your mail server that would otherwise have been rejected by Postal without troubling you.

Just enter `*` in the name box to create a route for this.

## Using address tags

Postal supports the use of "tags" on e-mail addresses which means you can add a single route but still receive from multiple addresses. For example, if you add a route for `email` you will also receive messages for `email+anything@yourdomain.com` without any additional configuration.
