---
title: Configuration
description: ''
category: Installation
---
Postal can be configured through its configuration file or environment variables. There are a fair number of areas which can be configured.

You can review all the available configuration options.

* [Full Postal Configuration file](https://github.com/postalserver/postal/blob/main/doc/config/yaml.yml) - this is an example configuration file that contains all the configuration options along with their defaults and a description. This file would usually exist in `/opt/postal/config/postal.yml`.

* [All environment variables](https://github.com/postalserver/postal/blob/main/doc/config/environment-variables.md) - this page lists all the environment variables. All configuration that can be set in the config file can also be set by an environment variable.

::callout
Note: If you change any configuration, you should be sure to restart Postal
::

## Ports and bind addresses

The web & SMTP server listen on ports and addresses. The defaults for these can be set through configuration however, if you're running multiple instances of these on a single host you will need to specify different ports for each one.

You can use the `PORT` and `BIND_ADDRESS` environment variables to provide instance-specific values for these processes.

## Legacy configuration

The current version for the Postal configuration file is `2`. This is shown by the `version: 2` in the configuration file itself.

Postal still supports the version 1 (or legacy) configuration format from Postal v2 and earlier. If you are using this config file, you will receive a warning in the logs when starting Postal. We recommend changing your configuration to follow the new v2 format which is documented above.

The key differences between v1 and v2 configuration is shown below.

* `web.host` changes to `postal.web_hostname`
* `web.protocol` changes to `postal.web_protocol`
* `web_server.port` changes to `web_server.default_port`
* `web_server.bind_address` changes to `web_server.default_bind_address`
* `smtp_server.port` changes to `smtp_server.default_port`
* `smtp_server.bind_address` changes to `smtp_server.default_bind_address`
* `dns.return_path` changes to `dns.return_path_domain`
* `dns.smtp_server_hostname` changes to `postal.smtp_hostname`
* `general.use_ip_pools` changes to `postal.use_ip_pools`
* `general.*` changes to various new names under the `postal.` namespace
* `smtp_relays` changes to `postal.smtp_relays` and now uses an array of strings which should be in the format of `smtp://{host}:{port}?ssl_mode={mode}`
* `logging.graylog.*` changes to `gelf.*`
