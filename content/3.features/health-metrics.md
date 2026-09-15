---
title: Health & Metrics
description: 'Monitor the health of Postal processes and scrape Prometheus metrics.'
category: Features
---

The Postal worker and SMTP server processes come with additional functionality that allows you to monitor the health of the process as well as look at live metrics about their performance.

The web server does not run a health server; use your web proxy or an HTTP check against the login page for that process.

## Port numbers

By default, the health server listens on `127.0.0.1` on a different port for each type of process.

* Worker - listens on port `9090` (`worker.default_health_server_port` / `worker.default_health_server_bind_address`)
* SMTP server - listens on port `9091` (`smtp_server.default_health_server_port` / `smtp_server.default_health_server_bind_address`)

Unlike other services, if these ports are in use when the process starts, the health server will simply not start but the rest of the process will run as normal. This will be shown in the logs.

To override these for an individual process (for example when running several workers on one host) you can set the `HEALTH_SERVER_PORT` and `HEALTH_SERVER_BIND_ADDRESS` environment variables.

## Endpoints

| Path | Response |
|---|---|
| `/health` | `OK` when the process is running. This can be used for health check monitoring. |
| `/metrics` | Metrics in the standard Prometheus text exposition format. |
| `/` | The process name, PID and hostname, e.g. `worker (pid: 12, host: postal1)`. |

## Metrics

The metrics are exposed at `/metrics` and are in a standard Prometheus exporter format. This means they can be scraped by any tool that can ingest Prometheus metrics.

### SMTP server

| Metric | Type | Labels | Description |
|---|---|---|---|
| `postal_smtp_server_connections_total` | counter | | The number of connections made to the SMTP server. |
| `postal_smtp_server_tls_connections_total` | counter | | The number of successful TLS (STARTTLS) connections established. |
| `postal_smtp_server_exceptions_total` | counter | `type`, `error` | The number of server exceptions encountered. `type` is `client-accept` or `data`; `error` is the exception class. |
| `postal_smtp_server_commands_total` | counter | `command` | The number of key commands received (`EHLO`, `HELO`, `RSET`, `AUTH PLAIN`, `AUTH LOGIN`, `AUTH CRAM-MD5`, `STARTLS`, `PROXY`). |
| `postal_smtp_server_client_errors` | counter | `error` | The number of error responses sent to clients, for example `invalid-credentials`, `authentication-required`, `message-too-large`, `from-name-invalid`, `route-rejected`, `server-suspended`, `loop-detected`. |
| `postal_smtp_server_messages_total` | counter | `type`, `tls` | The number of messages accepted. `type` is `outgoing`, `incoming` or `bounce`; `tls` is `yes` or `no`. |

### Worker

| Metric | Type | Labels | Description |
|---|---|---|---|
| `postal_worker_job_executions` | counter | `thread`, `job` | The number of jobs worked where work was completed. `job` is `ProcessQueuedMessagesJob` or `ProcessWebhookRequestsJob`. |
| `postal_worker_job_runtime` | histogram | `thread`, `job` | The time taken to process jobs (in seconds). |
| `postal_worker_errors` | counter | `error` | The number of errors encountered while processing jobs, labelled by exception class. |
| `postal_worker_task_runtime` | histogram | `task` | The time taken to run each [scheduled task](/other/workers-and-background-tasks#scheduled-tasks) (in seconds). |
| `postal_message_queue_latency` | histogram | | The length of time between a message being queued and being dequeued (in seconds). A rising value indicates you need more worker capacity. |
