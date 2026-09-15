---
title: OpenID Connect
description: 'Delegate authentication to an external OpenID Connect identity provider.'
category: Features
---

Postal supports OpenID Connect (OIDC) allowing you to delegate authentication to an external service. When enabled, there are various changes:

* You are not required to enter a password when you add new users.
* When a user logs in with OIDC, Postal first looks for a local user that has previously been linked to the identity provided (matched on the unique identifier from the OIDC issuer). If none is found, it looks for a local user with a matching e-mail address that has **not** yet been linked to any OIDC identity.
* When a user is matched, their local account is linked to the OIDC identity. Their e-mail address and name are updated from the identity provider and **any local password is removed**.
* If no matching user is found, login is refused with the message "No user was found matching your identity. Please contact your administrator." Postal does not create users automatically.
* Users without local passwords cannot reset their password through Postal.
* Users cannot change their local password once associated with an OIDC identity.
* Existing users that currently have a password will continue to be able to use that password until they log in with OIDC and are linked.

![Screenshot](/screenshots/oidc.png)

## Configuration

To get started, you'll need to find an OpenID Connect enabled provider. You should create your application within the provider in order to obtain an identifier (client ID) and a secret (client secret).

You may be prompted to provide a "redirect URI" during this process. You should enter `https://postal.yourdomain.com/auth/oidc/callback` (using your configured `postal.web_protocol` and `postal.web_hostname`).

Finally, you'll need to place your configuration in the Postal config file as normal and restart Postal.

```yaml
oidc:
  # Start by enabling OIDC for your installation.
  enabled: true

  # The name of the OIDC provider as shown in the UI. For example:
  # "Login with My Provider".
  name: My Provider

  # The OIDC issuer URL provided to you by your Identity provider.
  # The provider must support OIDC Discovery by hosting their configuration
  # at https://identity.example.com/.well-known/openid-configuration.
  issuer: https://identity.example.com

  # The client ID for OIDC
  identifier: abc1234567890

  # The client secret for OIDC
  secret: zyx0987654321

  # Scopes to request from the OIDC server. You'll need to find these from your
  # provider. You should ensure you request enough scopes to ensure the user's
  # email address is returned from the provider.
  scopes:
    - openid
    - email
```

### Field mapping

By default, Postal will look for the user's unique identifier in the `sub` field, their e-mail address in the `email` field and their name in the `name` field of the user info returned by the provider. These can be overridden if these values can be found elsewhere.

```yaml
oidc:
  # ...
  uid_field: sub
  email_address_field: email
  name_field: name
```

### Providers without discovery

If your identity provider does not support OpenID Connect discovery (which is enabled by default), you can disable discovery and configure each endpoint manually.

```yaml
oidc:
  # ...
  discovery: false
  authorization_endpoint: https://identity.example.com/oauth2/authorize
  token_endpoint: https://identity.example.com/oauth2/token
  userinfo_endpoint: https://identity.example.com/oauth2/userinfo
  jwks_uri: https://identity.example.com/oauth2/jwks
```

For the full list of options see the [configuration reference](/getting-started/configuration-reference#oidc).

## Logging in

Once enabled, you can log in by pressing the **Login with xxx** button on the login page. This will direct you to your chosen identity provider. Once authorised, you will be directed back to the application and matched to a local user as described above. If the identity provider reports an error, you will be returned to the login page with the message "An issue occurred while logging you in with OpenID".

## Debugging

Details about the user matching process are written to the web server logs when the callback from the identity provider happens. This includes the full set of claims received from the provider and which lookup (by UID or by e-mail address) succeeded or failed.

## Disabling local authentication

Once you have established your OpenID Connect set up, you can fully disable local authentication. This removes the e-mail/password form and the password reset link from the login page, and any attempt to log in or reset a password locally is refused with "Local authentication is not enabled".

```yaml
oidc:
  # ...
  local_authentication_enabled: false
```

## Using Google as an identity provider

Setting up Postal to authenticate with Google is fairly straight forward. You'll need to use the Google Cloud console to generate a client ID and secret ([see docs](https://developers.google.com/identity/openid-connect/openid-connect)). When prompted for a redirect URI, you should use `https://postal.yourdomain.com/auth/oidc/callback`. The following configuration can be used to enable this:

```yaml
oidc:
  enabled: true
  name: Google
  issuer: https://accounts.google.com
  identifier: # your client ID from Google
  secret: # your client secret from Google
  scopes: [openid, email]
```
