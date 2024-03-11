---
title: Logging
description: ''
category: Features
---

All Postal processes log to STDOUT and STDERR which means their logs are managed by whatever engine is used to run the container. In the default case, this is Docker. 

## Redirecting logs to the host syslog

If you want to send your log data to the host system's syslog then you can configure this. This is useful if you wish to use external tools like `fail2ban` to block users from accessing your system.

The quickest way to achieve this is to use a docker compose overide file in `/opt/postal/install/docker-compose.overide.yml`. The contents of this file, would contain the following:

```yaml
version: "3.9"
services:
  smtp:
    logging:
      driver: syslog
      options:
        tag: postal-smtp
```

If you wanted to put worker and web server logs there too, you can define those. The example above demonstrates using the `smtp` server process.

## Limiting the size of logs

Docker cam be configured to limit the size of the log files it stores. To avoid storing large numbers of log files, you should configure this appropriately. This can be achieved by setting a maximum size in your `/etc/docker/daemon.json` file.

```json
{
  "log-driver": "local",
  "log-opts": {
    "max-size": "100m"
  }
}
```

## Sending logs to Graylog

Postal includes support for sending log output to a central Graylog server over UDP. This can be configured using the following options:

```yaml
gelf:
  # GELF-capable host to send logs to
  host: 
  # GELF port to send logs to
  port: 12201
  # The facility name to add to all log entries sent to GELF
  facility: postal
```
