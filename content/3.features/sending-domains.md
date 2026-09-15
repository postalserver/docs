---
title: Sending Domains
description: 'Adding and verifying the domains you send mail from, and the DNS records Postal checks.'
category: Features
---

Before a mail server can send mail from an address, the address's domain must be added to Postal and **verified**. Postal then checks the domain's SPF, DKIM, MX and return path DNS records and shows the results in the web interface so that you can ensure your mail is delivered reliably.

::callout{icon="i-heroicons-information-circle"}
This page covers the DNS records for domains <em>you send from</em>. The records that your Postal installation itself needs (the return path domain, SPF include, MX hostnames and so on) are described under <a href="/getting-started/dns-configuration">DNS configuration</a>.
::

## Organization and server domains

Domains can be added in two places:

* **Organization domains** (organization menu &rarr; **Domains**) are available to every mail server in the organization.
* **Server domains** (server menu &rarr; **Domains**) are only available to that server.

The same domain name may be added at both levels or to several servers, each with its own DKIM key and verification. When an outgoing message is authenticated, Postal looks for a verified domain matching the `From` address's domain, preferring a server-level domain over an organization-level one.

Only the exact domain is matched - to send from `news.yourdomain.com` you need to add `news.yourdomain.com` as well as `yourdomain.com`.

## Verifying a domain

When you add a domain you must prove that you control it. Global administrators skip this step and their domains are verified immediately. Other users choose one of two methods:

**DNS** - add a TXT record at the domain itself (the apex, `@`) with the value shown, which is `postal-verification {token}` (the prefix is set by `dns.domain_verify_prefix`). Then click **Verify TXT record**. The token is a 32 character random string.

**E-Mail** - Postal sends a 6 digit code to one of `webmaster@`, `postmaster@`, `admin@`, `administrator@` or `hostmaster@` at the domain (or any of its parent domains). Enter the code to complete verification. This requires the `smtp` section of Postal's configuration to be working.

Unverified domains cannot be used for sending, in routes, or for tracking domains.

## DNS checks

Once verified, open the domain (the **DNS Setup** page) to see the records you need to add. Postal checks these records immediately when you press **Check my records are correct**, and re-checks every domain automatically once an hour. The results are shown as ticks and crosses in the domain list.

By default Postal queries the domain's own authoritative nameservers so that changes are seen without waiting for caches to expire. Set `postal.use_local_ns_for_domain_verification: true` to use the resolvers from `dns.resolv_conf_path` instead.

### SPF

A TXT record at the apex of the domain beginning `v=spf1` which includes your installation's SPF include, e.g.

```text
v=spf1 a mx include:spf.postal.example.com ~all
```

| Status | Meaning |
|---|---|
| `OK` | A `v=spf1` record containing `include:{dns.spf_include}` was found. |
| `Missing` | No `v=spf1` record exists. |
| `Invalid` | An SPF record exists but does not include your Postal SPF include. If you already have an SPF record for another service, add `include:spf.postal.example.com` to it rather than creating a second record. |

### DKIM

Postal generates a 1024-bit RSA key pair for each domain when it is added. Publish the public key in a TXT record named `{selector}._domainkey.yourdomain.com`, where the selector is `{dns.dkim_identifier}-{6 random letters}` (for example `postal-KJHDSA._domainkey`). The exact name and value are shown on the DNS Setup page and look like:

```text
v=DKIM1; t=s; h=sha256; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQ...;
```

| Status | Meaning |
|---|---|
| `OK` | Exactly one TXT record exists and its value matches. |
| `Missing` | No TXT record was returned for the name. |
| `Invalid` | Either more than one TXT record exists at the name, or the value does not match the one provided. Check it has been copied exactly. |

Outgoing messages from a domain whose DKIM status is `OK` are signed with the domain's key (`d=yourdomain.com`). If the DKIM record is not `OK`, messages are still sent but are signed with the installation's key using `d={dns.return_path_domain}` instead - which is why you must also publish the record from `postal default-dkim-record` at `postal._domainkey.{return path domain}` (see [DNS configuration](/getting-started/dns-configuration#return-path)).

Signatures use `rsa-sha256` with relaxed canonicalisation and cover the `From`, `Sender`, `Reply-To`, `Subject`, `Date`, `Message-ID`, `To`, `Cc`, `MIME-Version`, `Content-Type`, `Content-Transfer-Encoding`, `Resent-*`, `In-Reply-To`, `References` and `List-*` (including `List-Unsubscribe-Post`) headers where present.

### Return path

The **return path** is the SMTP envelope sender (`MAIL FROM`) used for outgoing mail, and it is where bounces are sent. By default it is `{server token}@{dns.return_path_domain}`, a hostname belonging to your Postal installation. This is fine, but because the envelope domain differs from your `From` domain it will not give SPF **alignment** for DMARC.

To fix this, add a CNAME record at `psrp.yourdomain.com` (the prefix is set by `dns.custom_return_path_prefix`) pointing to your installation's return path domain, e.g.

```text
psrp.yourdomain.com.  CNAME  rp.postal.example.com.
```

Once the check passes, Postal uses `{server token}@psrp.yourdomain.com` as the envelope sender for mail from this domain. Because it is a CNAME, the SPF and DKIM records you published for the return path domain during installation apply automatically, and Postal's SMTP server accepts bounces for any domain beginning with the custom return path prefix.

| Status | Meaning |
|---|---|
| `OK` | A single CNAME pointing at `{dns.return_path_domain}` was found. Postal will use the custom return path. |
| `Missing` | No record exists. Postal uses the default return path. This is acceptable but not recommended. |
| `Invalid` | A record exists but does not point at the right hostname. |

### MX

MX records are only needed if you want to **receive** mail for the domain through Postal (see [Routing incoming e-mail](/features/routing-incoming-email)). Postal checks that every hostname listed in `dns.mx_records` appears among the domain's MX records (case-insensitively).

| Status | Meaning |
|---|---|
| `OK` | All of your Postal MX hostnames are present. |
| `Missing` | None are present. Incoming mail will not reach Postal, which is fine if you only send. |
| `Invalid` | Some but not all are present. |

### Overall status and notifications

A domain is considered fully configured when SPF and DKIM are `OK` and both MX and Return Path are either `OK` or `Missing`. If an automatic hourly check finds a **server-level** domain in any other state, a [`DomainDNSError` webhook](/developer/webhooks#dns-error-event) is triggered. Domains with problems are also highlighted at the top of the server's pages.

## Sending from any domain

A server-level domain can be flagged so that the server may send from **any** `From` address once the normal checks have failed. This is intended for trusted internal systems and is shown with an **Any** label in the domain list. There is no interface for setting this flag; an administrator can set it from `postal console`:

```ruby
org = Organization.find_by(permalink: "my-org")
org.servers.find_by(permalink: "my-server").domains.find_by(name: "yourdomain.com").update(use_for_any: true)
```

Messages sent this way are signed with that domain's DKIM key.
