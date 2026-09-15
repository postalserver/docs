---
title: Users & Permissions
description: 'Global administrators, organization members and what each can do.'
category: Features
---

Postal has a simple permission model with two kinds of user.

## Global administrators

Administrators have full access to every organization, server and setting in the installation. They are the only users who can:

* See and manage **all** organizations (non-admins only see organizations they have been added to).
* Create and delete organizations.
* Manage users (**Users** in the top navigation): create users, edit their details, grant or revoke admin status and choose which organizations a non-admin user belongs to. An administrator cannot remove their own admin status or delete their own user.
* Manage [IP pools](/features/ip-pools), IP addresses and organization pool assignments.
* Change a server's **Advanced Settings** (send limit, allow sender header, privacy mode, SMTP data logging, outbound spam threshold and retention) and suspend or unsuspend servers. See [Mail server settings](/features/mail-server-settings#advanced-settings-administrators-only).
* Add domains without verifying them - domains added by an administrator are marked as verified immediately.

The first administrator is created from the command line during installation with:

```bash
postal make-user
```

This prompts for an e-mail address, first name, last name and password, and always creates an administrator. Run it again at any time to create additional administrators, for example if you have locked yourself out.

## Organization users

Everyone else is an ordinary user who belongs to one or more organizations. Within an organization they have full access to *all* of its mail servers and domains - there is no per-server or read-only access. This includes creating and deleting servers, managing domains, routes, endpoints, credentials, webhooks and the non-admin server settings, and viewing every message.

Organizations record which user created them as the **owner**, but this does not currently grant any additional permissions.

Users are added to organizations by an administrator from the **Users** page: edit the user and tick the organizations they should be able to access. Removing the last organization from a non-admin user leaves them able to log in but with nothing to see.

## Accounts and passwords

* Users log in with their e-mail address and password. Passwords must be at least 8 characters long.
* Password resets are available from the login page and are sent using the `smtp` section of the Postal configuration, so make sure that is set up (you can test it with `postal test-app-smtp`).
* From **My Settings** a user can change their name, e-mail address, time zone and (after confirming their current password) their password. Times throughout the interface are shown in the user's time zone, which defaults to UTC.
* After logging in you are asked whether you would like to stay logged in. Choosing **Remember me** keeps the session alive across browser restarts; otherwise it ends when the browser is closed.

If [OpenID Connect](/features/oidc) is enabled, users can be created without a password and are linked to their identity provider account on first login. Local logins can be disabled entirely with `oidc.local_authentication_enabled: false`.
