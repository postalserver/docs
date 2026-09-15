---
title: SMTP Authentication
description: 'How clients authenticate to the Postal SMTP server to send outgoing mail.'
category: Features
---

For sending outgoing emails through the Postal SMTP server you will need to generate a **credential** through the Postal web interface (**Credentials** in the server menu, choose the **SMTP** type). This credential is associated with a server and allows you to send mail from any verified domain associated with that server (or the organization that owns the server).

The connection details you need are shown on the server's **Help &rarr; Sending e-mail** page in the web interface:

* **Server address** - the value of `postal.smtp_hostname` in your configuration.
* **Port** - the value of `smtp_server.default_port` (default `25`). The SMTP server supports STARTTLS when [SMTP TLS](/features/smtp-tls) is enabled.
* **Username** - `organization-permalink/server-permalink` (this is only checked for `CRAM-MD5`, see below).
* **Password** - the key of your SMTP credential.

## Authentication types

The SMTP server advertises `AUTH CRAM-MD5 PLAIN LOGIN` in response to `EHLO`. There are three supported authentication types.

* `PLAIN` - the credentials are passed in plain text (Base64-encoded) to the server. When using this, you can provide any string as the username (e.g. `x`) and the password should contain your credential key.
* `LOGIN` - the username and password are prompted for in turn, each Base64-encoded. As above, the username is ignored and the password should contain the credential key.
* `CRAM-MD5` - this is a challenge-response mechanism based on the HMAC-MD5 algorithm. Unlike the above two mechanisms, the username does matter and should contain the organization and server permalinks separated by a `/` or `_` character (for example `my-org/my-server`). The shared secret is the credential key. Postal will try every SMTP credential on the named server until one produces the correct response.

On success the server responds with `235 Granted for {organization}/{server}`. Every successful authentication updates the credential's **last used** time shown in the web interface.

## From/Sender validation

When sending outgoing email through the SMTP server, it is important that the `From` header contains a domain that has been added and verified on the server or its organization. If it does not, the message will be rejected at the end of `DATA` with `530 From/Sender name is not valid`.

The check works as follows:

1. Every address in the `From` header is checked. If all of them belong to verified domains, the message is accepted.
2. If that fails and the server has **Allow sender header** enabled (in the server's **Advanced Settings**, administrators only), the `Sender` header is checked in the same way. This allows you to send with any `From` address provided you include a `Sender` header containing an address on one of your domains.
3. An administrator can also mark one server-owned domain as usable for any address; if none of the above match, that domain is used.

Only the domain part of the address is compared, and it must match exactly (subdomains of a verified domain are not accepted).

## IP-based authentication

Postal has the option to authenticate clients based on their IP address. To use this, you need to create a credential with the type **SMTP-IP** and enter the IP address or CIDR network (IPv4 or IPv6) you wish to allow in the **Network** field. Use this carefully to avoid creating an open relay.

No `AUTH` command is needed. When an unauthenticated client sends a `RCPT TO` that does not match any incoming route, Postal looks for an SMTP-IP credential whose network contains the client's IP address. If several match, the most specific network (longest prefix) wins. Once matched, the connection is treated exactly as if it had authenticated with that credential, including From/Sender validation.

Unlike other credential types, the network of an SMTP-IP credential can be edited after it has been created.

## Holding messages from a credential

Any credential can be set to **Hold messages from this credential**. All messages submitted using that credential will be placed in the server's held queue rather than being delivered, which is useful for development environments. Held messages can be released from the web interface. See [Mail server settings](/features/mail-server-settings#held-messages).

## SMTP responses

The following are the most common responses you may receive from the Postal SMTP server.

| Response | Meaning |
|---|---|
| `235 Granted for org/server` | Authentication succeeded. |
| `535 Invalid credential` | `PLAIN`/`LOGIN`: the password did not match any SMTP credential. |
| `535 Denied` | `CRAM-MD5`: the username did not match a server, or no credential produced the expected response. |
| `535 Authenticated failed - protocol error` | `PLAIN`: the Base64 payload did not contain both a username and a password. |
| `535 Mail server has been suspended` | The server (or its organization) that the recipient or credential belongs to has been suspended. |
| `530 Authentication required` | The recipient does not match any route on this installation and the client has not authenticated. |
| `530 From/Sender name is not valid` | See [From/Sender validation](#fromsender-validation). |
| `503 EHLO/HELO first please` | `MAIL FROM` was sent before `EHLO`/`HELO`. |
| `501 Invalid RCPT TO` | The recipient address has no domain part. |
| `550 Invalid server token` / `550 Invalid route token` | Mail to the return path or route domain used an unknown token. |
| `550 Route does not accept incoming messages` | The matching route is set to **Reject**. |
| `550 Loop detected` | The message has already passed through this Postal server more than four times. |
| `552 Message too large (maximum size NMB)` | The message exceeds `smtp_server.max_message_size` (default 14 MB). The size is checked when the whole message has been received. |
| `502 TLS not available` | `STARTTLS` was requested but `smtp_server.tls_enabled` is false. |

## Line endings

Postal only accepts the RFC-compliant `<CR><LF>.<CR><LF>` sequence as the end of message data (to prevent SMTP smuggling). Clients that send bare `<LF>` line endings will find that their messages never complete. A warning is logged when a line without `<CR>` is received.
