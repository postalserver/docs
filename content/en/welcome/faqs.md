---
title: FAQs
description: ''
position: 1
category: Welcome
---
This hasn't been around enough for anyone to have asked any question frequently enough for it to be considered an FAQ. We will update this page as soon as we have some questions to answer.

## Should I use this instead of [cloud provider]?

That's really up to you. There are advantages and disadvantages of both solutions and you should pick the one that suits each individual situation. Don't take running your own e-mail platform lightly though, there are many considerations that need to be taken into account to ensure you achieve good deliverability (including correct DNS configuration).

## E-Mails sent through Postal are going to spam.

* Check you've configured your DNS correctly. To start you need reverse DNS for your IPs, you need to configure DKIM & SPF, you need to make sure your rDNS matches the HELO given to the recipient's mail server.
* Ensure your sending IPs have reverse DNS (PTR) records configured.
* Check that the IP address you're sending mail from isn't on any blacklists.
* Check that your actual e-mail doesn't look like spam.
* New IPs sending large volumes of e-mail will likely not deliver well initially.

You can run your message through something like [Mail Tester](https://www.mail-tester.com) which will give you a good idea of the spammy-ness of your messages and ensure you have everything configured correctly.

## Can you add [mailing list feature]?

No. Postal is a mail transport agent and not a mailing list manager. We don't want to add features that a better suited in another application, for example, address books or handling the un-subscription of people from a database.

## Something doesn't work. Can you help?

Probably but you need to help us help you. You'll find logs in `/opt/postal/app/log`. You should look at these and include as much information as possible from them which you think looks relevant to your issue. 