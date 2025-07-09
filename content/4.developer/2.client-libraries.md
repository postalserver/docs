---
title: Client Libraries
description: ''

---

There are a number of client libraries available to help send e-mail using the Postal platform. These aren't all developed by the Postal team.

* [Ruby](https://github.com/postalserver/postal-ruby)
* [Rails](https://github.com/postalserver/postal-rails)
* [Ruby (mail gem)](https://github.com/postalserver/postal-mailgem)
* [PHP](https://github.com/postalserver/postal-php)
* [Node](https://github.com/postalserver/postal-node)
* [Java](https://github.com/matthewmgamble/postal-java)
* [.Net](https://github.com/KingdomFirst/PostalServer-DotNet-Framework)
* [.NET Core](https://github.com/mDev86/PostalApiClient)
* [Go](https://github.com/Pacerino/postal-go)
* [Elixir (via Swoosh)](https://hexdocs.pm/swoosh/Swoosh.Adapters.Postal.html)
* [Drupal](https://www.drupal.org/project/postal_mail)
* [Python](https://github.com/regenara/postal_py)

All of these libraries will make use of the API rather than using any SMTP protocol - this is considered to be best approach for delivering your messages.

If your framework makes use of SMTP, you do not need a client library however you will also miss out on some of Postals functionality.
