---
title: Prerequisites
description: ''
position: 2.0
category: Installation
---
There are a couple of pre-reqs for running Postal. This page outlines how to quickly install the things needed on an Ubuntu 16.04 server.

## Install Ruby

```bash
sudo apt install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt update
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

## Install MySQL

```bash
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xF1656F24C74CD1D8
sudo add-apt-repository 'deb [arch=amd64,i386,ppc64el] http://mirrors.coreix.net/mariadb/repo/10.1/ubuntu xenial main'
sudo apt update
sudo apt install mariadb-server libmysqlclient-dev
```

Some additional configuration may be required to optimise your MySQL server. This is outside the scope of this documentation.

## Install RabbitMQ

```bash
curl -sL https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
sudo add-apt-repository 'deb http://www.rabbitmq.com/debian/ testing main'
sudo apt update
sudo apt install rabbitmq-server
```

## Install Node.js

```bash
sudo apt install nodejs
```

## Install Git

```bash
sudo apt install git
```