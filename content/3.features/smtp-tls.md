---
title: SMTP TLS
description: ''
category: Features
---

By default, Postal's SMTP server is not TLS enabled however you can enable it by generating and providing a suitable certificate. We recommend that you use a certificate issued by a recognised certificate authority, but this isn't essential to use this feature.

## Key & certificate locations

Certificates should be placed in your `/opt/postal/config` directory.

* `/opt/postal/config/smtp.key` - the private key in PEM format
* `/opt/postal/config/smtp.cert` - the certificate in PEM format

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
  # tls_certificate_path: other/path/to/cert/within/container
  # tls_private_key_path: other/path/to/cert/within/container
  # tls_ciphers:
  # ssl_version: SSLv23
```

You will need to run `postal restart` if you change the configuration or your key/certificate.
