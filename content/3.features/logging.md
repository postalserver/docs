---
title: Logging
description: 'How Postal logs and how to configure where logs are sent.'
category: Features
---

All Postal processes log to STDOUT and STDERR which means their logs are managed by whatever engine is used to run the container. In the default case, this is Docker, so you can view logs with `postal logs` (or `postal logs smtp` for a single service).

## Log configuration options

The following options in the `logging` section of `postal.yml` control what is logged.

```yaml
logging:
  # Enable the Postal logger to log to STDOUT (default true). When false, Postal's
  # own log lines are discarded.
  enabled: true
  # Enable the standard Rails request logger for the web server (default false).
  rails_log_enabled: false
  # Enable ANSI colour highlighting of log lines (default false).
  highlighting_enabled: false
  # A DSN which should be used to report exceptions to Sentry. When set, exceptions
  # raised in any process are reported to Sentry.
  sentry_dsn:
```

Each log line includes the component that produced it (for example `smtp-server`, `worker`, `health-server`) and, where relevant, a `trace_id` which allows you to follow a single SMTP connection or message through the logs.

### SMTP server logging

The SMTP server logs every command it receives and every response it sends for each connection, identified by the connection's trace ID. Two further options in the `smtp_server` section can be used to tune this.

```yaml
smtp_server:
  # Log a line whenever a connection is opened or closed (default false).
  log_connections: false
  # A regular expression matched against the client IP address. Connections from
  # matching addresses are not logged at all. Useful for excluding load balancer
  # health checks, e.g. "^10\\.0\\.0\\."
  log_ip_address_exclusion_matcher:
```

By default, the SMTP server stops logging a connection's traffic once the `DATA` command is received so that message content is not written to the logs. A global administrator can enable **Log SMTP data** in a server's **Advanced Settings** to log the full message content for connections authenticated by that server's credentials. This is intended for debugging only.

## Redirecting logs to the host syslog

If you want to send your log data to the host system's syslog then you can configure this. This is useful if you wish to use external tools like `fail2ban` to block users from accessing your system.

The quickest way to achieve this is to use a docker compose override file in `/opt/postal/install/docker-compose.override.yml`. The contents of this file would contain the following:

```yaml
services:
  smtp:
    logging:
      driver: syslog
      options:
        tag: postal-smtp
```

If you wanted to put worker and web server logs there too, you can define those. The example above demonstrates using the `smtp` server process.

## Limiting the size of logs

Docker can be configured to limit the size of the log files it stores. To avoid storing large numbers of log files, you should configure this appropriately. This can be achieved by setting a maximum size in your `/etc/docker/daemon.json` file.

```json
{
  "log-driver": "local",
  "log-opts": {
    "max-size": "100m"
  }
}
```

## Sending logs to Graylog

Postal includes support for sending log output to a central Graylog (or any GELF-capable) server over UDP. This is enabled by setting a `gelf.host`; logs continue to be written to STDOUT as well.

```yaml
gelf:
  # GELF-capable host to send logs to
  host:
  # GELF port to send logs to
  port: 12201
  # The facility name to add to all log entries sent to GELF
  facility: postal
```
