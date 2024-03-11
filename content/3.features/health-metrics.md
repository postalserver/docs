---
title: Health & Metrics
description: ''
category: Features
---

The Postal worker and SMTP server processes come with additional functionality that allows you to monitor the health of the process as well as look at live metrics about their performance. 

## Port numbers

By default, the health server listens on a different port for each type of process.

* Worker - listens on port `9090`
* SMTP server - listens on port `9091`

Unlike other services, if these ports are in use when the process starts, the health server will simply not start but the rest of the process will run as normal. This will be shown in the logs.

To configure these ports you can set the `HEALTH_SERVER_PORT` and `HEALTH_SERVER_BIND_ADDRESS` environment variables.

## Metrics

The metrics are exposed at `/metrics` and are in a standard Prometheus exporter format. This means they can be scraped by any tool that can ingest Prometheus metrics. This will then allow them to be turned in to graphs as appropriate.

## Health checks

The `/health` endpoint will return "OK" when the process is running. This can be used for health check monitoring.
