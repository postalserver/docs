---
title: Processes
description: ''
position: 2.4
category: Installation
---
Postal runs a number of processes. It is helpful to understand what these all do when deploying Postal.

## The processes

### `web`
This is a web server that is used for the management interface and the HTTP API. By default it listens on port 5000. It is best practice to put an nginx proxy in front of this which will listen on port 80 and 443 and handle SSL for yoiu.

### `smtp`
This is the main SMTP server. By default it listens on port `25`. 

### `worker`
This is what does most of the work. The worker connects to a queue and pulls jobs from it to process. The primary job it performs is handling an new message from the queue. It does not listen on any ports and you can run as many workers as you wish (depending on mail volume).

### `cron`
This automatically queues scheduled tasks for the worker. Only one of these should be running per installation. It does not listen on any ports.

### `requeuer`
This process handles the requeueing of messages that fail to be delivered immediately. Only one of these should be running per installation. It does not listen on any ports.

### `fast`
This is also a web server and it handles requests related to click & open tracking. It's job is to serve redirects & tracking images and log whenever they are accessed. Unlike the `web` process, it handles SSL because Postal supports Let's Encrypt for mail server tracking domains. It listens on port `80` (HTTP) and `443` (HTTPS). This will need its own IP address so it can be run alongside your `web` process. See [Click-&-Open-Tracking](/features/click-and-open-tracking) for more details.

## Process management

All of these processes will be started/stopped automatically by [Procodile](https://github.com/adamcooke/procodile) so you don't need to worry too much about them individually. 

You can find their log files in the `log` directory. You'll also find information in the `log/procodile.log` which may be useful too.
