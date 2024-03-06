---
title: Logging
description: ''
category: Features
---

All Postal processes log to STDOUT and STDERR which means their logs are managed by whatever engine is used to run the container. In the default case, this is Docker. 

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
