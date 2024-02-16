---
title: Prerequisites
description: ''
position: 2.0
category: Installation
---

There are some things you'll need to do before you can install Postal.

## Servers

We **strongly** recommend installing Postal on its own dedicated server (i.e. a server running no other software). The minimum specification for Postal is as follows:

* At least 4GB of RAM
* At least 2 CPU cores
* At least 100GB of disk space

Most people install Postal on virtual servers. There are lots of providers to choose from including [Digital Ocean](https://m.do.co/c/17696597a9ed) and [Linode](https://www.linode.com).

One thing to be aware of is you'll need to ensure that your provider does not block port 25 outbound. This is quite common and is used to prevent abuse from spammers.

It doesn't matter what operating system you choose as long as you are able to install Docker on it (see next section). Nothing in these instructions will make assumptions about your operating system.

## Docker

Postal runs entirely using containers which means to run Postal you'll need some software to run these containers. We recommend using Docker for this purpose but you can use whatever software you wish.

You'll need to install Docker on your server to begin with. [Follow the instructions on the Docker website](https://docs.docker.com/get-docker/) to install Docker.

In addition to Docker, you'll also need `docker-compose`. This is an extra utility which [can be found on the Docker website](https://docs.docker.com/compose/install/).

Before continuing ensure that you can run both `docker` and `docker-compose` from your prompt.

## System utilities

There are a few system utilities that you need to have installed before you'll be able to run some of the Postal commands.

On Ubuntu/Debian:

```
apt install git curl jq
```

On CentOS/RHEL:

```
yum install git curl jq
```

## Git & installation helper repository

You'll need to make sure you have `git` installed on your server. You'll then need to clone the Postal installation helper repository. This contains some bootstrapping config and other useful things which will speed along your installation.

```
git clone https://postalserver.io/start/install /opt/postal/install
sudo ln -s /opt/postal/install/bin/postal /usr/bin/postal
```

## MariaDB

Postal requires a database engine to store all email and other essential configuration data. You will need to provide credentials that allow full access to create and delete databases as well as having full access to any databases created. Postal will provision a database automatically for each mail server that you create.

You can run MariaDB in a container, assuming you have Docker, using this command:

```
docker run -d \
   --name postal-mariadb \
   -p 127.0.0.1:3306:3306 \
   --restart always \
   -e MARIADB_DATABASE=postal \
   -e MARIADB_ROOT_PASSWORD=postal \
   mariadb
```

* This will run a MariaDB instance and have it listen on port 3306.
* Be sure to choose a secure password. You'll need to put this in your Postal configuration when you install it so be sure to make a (secure) note of it.
* If you are unable or unwilling to grant root access, the database user you create separately needs all permissions on databases called `postal` and `postal-*` (this prefix can be configured in the `message_db` part of your configuration).

<alert>
Whilst you can configure the maximum message size however you wish, you will need to verify that MariaDB is configured with <code>innodb_log_file_size</code> to at least 10 times the biggest message you wish to send (150MB for 15MB email, 250MB for 25MB email, etc).<br><br>If you have a legacy v1 database you might also want to check that raw tables in the database have the type <code>LONGBLOB</code>.
</alert>

## RabbitMQ

RabbitMQ is responsible for dispatching messages between different processes - in our case, the workers. As with MariaDB, there are numerous ways for you to install this. For this guide, we're just going to run a single RabbitMQ worker.

```
docker run -d \
   --name postal-rabbitmq \
   -p 127.0.0.1:5672:5672 \
   --restart always \
   -e RABBITMQ_DEFAULT_USER=postal \
   -e RABBITMQ_DEFAULT_PASS=postal \
   -e RABBITMQ_DEFAULT_VHOST=postal \
   rabbitmq:3.8
```

* This will run a single RabbitMQ instance and have it listen on port 5672.
* Be sure to choose a secure password. You'll need to put this in your Postal configuration when you install it so be sure to make a (secure) note of it.
