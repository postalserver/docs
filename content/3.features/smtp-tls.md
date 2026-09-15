---
title: SMTP TLS
description: 'Enable STARTTLS on the Postal SMTP server.'
category: Features
---

By default, Postal's SMTP server is not TLS enabled however you can enable it by generating and providing a suitable certificate. We recommend that you use a certificate issued by a recognised certificate authority, but this isn't essential to use this feature.

::callout{icon="i-heroicons-information-circle"}
Postal supports opportunistic TLS using the <code>STARTTLS</code> command on its normal port. It does not provide an implicit TLS ("SMTPS", port 465) listener. If you need implicit TLS you will need to terminate it with a separate proxy in front of Postal.
::

## Key & certificate locations

Certificates should be placed in your `/opt/postal/config` directory (which is mounted at `/config` inside the containers). By default Postal looks for:

* `/opt/postal/config/smtp.key` - the private key in PEM format
* `/opt/postal/config/smtp.cert` - the certificate in PEM format

The certificate file may contain a full chain: the first certificate in the file is used as the server certificate and any further certificates are sent as the intermediate chain.

### Generating a self signed certificate

You can use the command below to generate a self-signed certificate.

```bash
openssl req -x509 -newkey rsa:4096 -keyout /opt/postal/config/smtp.key -out /opt/postal/config/smtp.cert -sha256 -days 365 -nodes
```

## Configuration

Once you have a key and certificate you will need to enable TLS in the configuration file (`/opt/postal/config/postal.yml`). Additional options are available too.

```yaml
smtp_server:
  # ...
  tls_enabled: true
  # Paths are relative to the container. $config-file-root expands to the
  # directory containing postal.yml (/config in the standard installation).
  # tls_certificate_path: $config-file-root/smtp.cert
  # tls_private_key_path: $config-file-root/smtp.key
  # An OpenSSL cipher list to restrict the ciphers offered
  # tls_ciphers:
  # The OpenSSL SSL/TLS version to use (SSLv23 negotiates the best available)
  # ssl_version: SSLv23
```

Once enabled, the SMTP server advertises `STARTTLS` in its `EHLO` response and clients can upgrade the connection. Whether a message was received over TLS is recorded on the message (`received_with_ssl`) and in the `postal_smtp_server_tls_connections_total` [metric](/features/health-metrics).

The certificate and key are read once when the SMTP server starts, so you will need to run `postal restart` if you change the configuration or renew your key/certificate.

## Verifying

You can check your certificate from the outside with:

```bash
openssl s_client -connect postal.yourdomain.com:25 -starttls smtp
```
