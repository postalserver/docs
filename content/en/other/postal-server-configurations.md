---
title: Postal Server Configurations
description: 'Full listing of items that can be configured in postal.yml'
position: 5.5
category: 'Other Notes'
---

This page contains information on which elements can be configured in the main `postal.yaml` server configuration. 

The default values can be found in https://github.com/postalserver/postal/blob/main/config/postal.defaults.yml 

## Web

This enables the configuration of which host is used for the web interface to configure your postal server.

```
web:
  host: postal.example.com
  protocol: https
```

## General

This section configures some core attributes of your postal installation.

```
general:
  use_ip_pools: false
  exception_url:
  maximum_delivery_attempts: 18
  maximum_hold_expiry_days: 7
  suppression_list_removal_delay: 30
  use_local_ns_for_domains: false
  default_spam_threshold: 5.0
  default_spam_failure_threshold: 20.0
  use_resent_sender_header: true
```

## Web server

This configures on which interface and port the web server is running.

```
web_server:
  bind_address: 127.0.0.1
  port: 5000
  max_threads: 5
```

## Databases - main

The credentials and configurations for the main database where the settings are stored. 

```
main_db:
  host: 127.0.0.1
  port: 3306
  username: postal
  password:
  database: postal
  pool_size: 5
```

## Logging 

Local logging configuration, as well as remote with [Graylog](https://graylog.org/)

```
logging:
  stdout: false
  root: # Automatically determined based on config root
  max_log_file_size: 20
  max_log_files: 10
  graylog:
    host:
    port: 12201
```

## Databases - messages

The credentials and configurations for the messages database where the emails and attachements are stored. 
This can be the same database as the main database configured above. 

```
message_db:
  host: 127.0.0.1
  port: 3306
  username: postal
  password:
  prefix: postal
```

## RabbitMQ

Configuration for postal to connect to RabbitMQ.

```
rabbitmq:
  host: 127.0.0.1
  port: 5672
  tls: false
  verify_peer: true
  tls_ca_certificates:
    - /etc/ssl/certs/ca-certificates.crt
  username: postal
  password:
  vhost: /postal
```

## Workers

Configuration for thread and number of workers used by postal server. This affects the number of docker instances
when running with docker-compose. 

```
workers:
  quantity: 1
  threads: 4
```

## SMTP server

Configuration for the SMTP server component of postal. 

```
smtp_server:
  port: 25
  bind_address: '::'
  tls_enabled: false
  tls_certificate_path: # Defaults to config/smtp.cert
  tls_private_key_path: # Defaults to config/smtp.key
  tls_ciphers:
  ssl_version: SSLv23
  proxy_protocol: false
  log_connect: true
  strip_received_headers: false
  max_message_size: 14 # size in Megabytes
```

## SMTP relays

SMTP relays for outgoing email. 

```
smtp_relays:
  -
    hostname:
    port: 25
    ssl_mode: Auto
```

## DNS

When using multiple subdomains, route domains, tracking domains, dkim, etc, you'll need
to configure those here.

```
dns:
  mx_records:
    - mx.postal.example.com
  smtp_server_hostname: postal.example.com
  spf_include: spf.postal.example.com
  return_path: rp.postal.example.com
  route_domain: routes.postal.example.com
  track_domain: track.postal.example.com
  helo_hostname: # By default, this will be the same as the `smtp_server_hostname`
  dkim_identifier: postal
  domain_verify_prefix: postal-verification
  custom_return_path_prefix: psrp
```

## SMTP settings

Once an "SMTP server" is configured via the Web interface, and credentials to use it are
created, you can configure this. 

```
smtp:
  host: 127.0.0.1
  port: 25
  username: # Complete when Postal is running and you can
  password: # generate the credentials within the interface.
  from_name: Postal
  from_address: postal@yourdomain.com
```

## Ruby on Rails configuration

[Ruby on Rails](https://rubyonrails.org/) framework configuration.

```
rails:
  environment: production
  secret_key:
```

## Spam

Configuration for optionnal antispam detection with either [rspamd](https://www.rspamd.com/) 
or [spamassasin (spamd)](https://spamassassin.apache.org/).

```
rspamd:
  enabled: false
  host: 127.0.0.1
  port: 11334
  ssl: false
  password: null
  flags: null

spamd:
  enabled: false
  host: 127.0.0.1
  port: 783
```

## Antivirus

Configuration for optionnal antivirus detection with [clamav](https://www.clamav.net/)

```
clamav:
  enabled: false
  host: 127.0.0.1
  port: 2000
```

## SMTP Client

Configuration for SMTP client for outgoing email. 

```
smtp_client:
  open_timeout: 30
  read_timeout: 60
```