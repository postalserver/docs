---
title: Upgrading from 1.x
description: ""
position: 2.4
category: Installation
---

In July 2021, we changed the way that Postal is installed. The only supported method for installing Postal is now using a container that we provide. You can follow these instructions to upgrade your 1.x installation to use containers.

## How do I know if I'm using Postal v1?

There are a few changes between the two versions which should help identify your version.

- The Postal web interface now has a footer on all pages (except the login page) which show the current version. If you have no footer, you're not using Postal v2.
- If you installed Postal without using containers, you are most likely using Postal v1.
- If you run `ps aux | grep procodile` and get any results, you are using Postal v1.
- If you run `docker ps` and get no results, you are using Postal v1.
- If you installed Postal before July 2021, you are using Postal v1.
- If you have an `/opt/postal/app` directory you are using Postal v1 (or you have already upgraded to Postal v2 but not tidied up).

## Assumptions

For the purposes of this guide, we're going to make some assumptions about your installation. If any of these assumptions are not true, you will need to determine the appropriate route for you to upgrade.

- You have Postal installed on a single server.
- Your server has a MariaDB (or MySQL) database server running on it and listening port 3306.
- Your server has a RabbitMQ server running on it and listening on port 5672.
- Your current installation is located at `/opt/postal` and your configuration is in `/opt/postal/config`.
- You use a web proxy (such as nginx, Caddy or Apache) in front of the Postal web server.

<alert>
Performing this upgrade will mean that your Postal services will be unavailable for a short period of time. We recommend scheduling some maintenance and performing the upgrade when traffic is low.
</alert>

## Preparation

There are a few extra system dependencies that you need to install.

- [Docker](https://docs.docker.com/get-docker/)
- [docker-compose](https://docs.docker.com/compose/install/)

<alert type="warning">
<b>Important:</b> use the latest versions of these rather than simply just installing the latest package available from your operating system vendor's repositories. Instructions are linked above.
</alert>

If you're running an old or unsupported version of your operating system, you may wish to use this as an opportunity to upgrade. The method for doing so is outside of the scope of this documentation.

## Stopping Postal

Start by stopping the Postal processes using `postal stop`.

## Configuring web proxy for open/click tracking

In Postal 2.x onwards, we no longer provide a dedicated server process for serving requests for open & click tracking. If you don't use this, you can skip to the next section. However, if you do, you need to add some configuration to your web proxy and issue some SSL certificates.

For all the **Tracking Domains** that you have configured (for example `track.yourdomain.com`) you will need to do the following:

1. Configure a virtual host in your web proxy to route all requests for each tracking domain to the Postal web server (on port 5000).
2. Ensure that all requests going through the proxy have the `X-Postal-Track-Host: 1` header.
3. Issue an SSL certificate for all these hosts.
4. Ensure that your web proxy is listening on the IP address that you previously used for the Postal `fast_server`.
5. As there is no longer a requirement for Postal to have two IP addresses, you can update all your DNS records that reference your secondary IP to point to the main IP that you use for Postal.

## Checking configuration

Your existing configuration for Postal can remain in the same place as it was before at `/opt/postal/config`. If you have referenced any other files in your `postal.yml`, you will need to ensure that these files are within the `/opt/postal/config` folder and you replace the path with `/config`. For example, if you have this:

```yaml
smtp_server:
  tls_enabled: true
  tls_certificate_path: /opt/postal/config/smtp.crt
  tls_private_key_path: /opt/postal/config/smtp.key
```

You will need to update `/opt/postal/config` to `/config` as follows:

```yaml
smtp_server:
  tls_enabled: true
  tls_certificate_path: /config/smtp.crt
  tls_private_key_path: /config/smtp.key
```

<alert type="warning">
<b>Important:</b> if you have referenced files in other parts of your operating system (such as in <code>/etc</code>), you must ensure these are now within the `/opt/postal/config` directory otherwise they won't be available within the container that Postal runs within.
</alert>

## Removing the old Postal helper script

Run the following command to backup the old Postal helper script.

```
mv /usr/bin/postal /usr/bin/postal.v1
```

## Installing Postal v2

The next thing to do is to download the new Postal installation helpers repo and set up the new `postal` command.

```
git clone https://postalserver.io/start/install /opt/postal/install
sudo ln -s /opt/postal/install/bin/postal /usr/bin/postal
```

Next, run a normal upgrade using the new Postal command line helper. This will run a new image to upgrade your database schema to that required for Postal v2.

```
postal upgrade
```

Finally, you can start the Postal components.

```
postal start
```

You should now find that Postal is running again and working as normal. Confirm that all process types are running using `postal status`. Your output should look like this:

```
      Name                     Command               State   Ports
------------------------------------------------------------------
postal_cron_1       /docker-entrypoint.sh post ...   Up
postal_requeuer_1   /docker-entrypoint.sh post ...   Up
postal_smtp_1       /docker-entrypoint.sh post ...   Up
postal_web_1        /docker-entrypoint.sh post ...   Up
postal_worker_1     /docker-entrypoint.sh post ...   Up
```

## A note about SMTP ports

If you were previously running the Postal SMTP server on any port other than 25, you can revert this configuration and have Postal listen on this port directly. To do this, you can remove any `iptables` rules you might have and update your `postal.yml` with the new port number.

## Rolling back

If something goes wrong and you need to rollback to the previous version you can still do that by reverting the `postal` helper and starting it again.

```
postal stop
unlink /usr/bin/postal
mv /usr/bin/postal.v1 /usr/bin/postal
postal start
```

## Tidying up

When you're happy that everything is running nicely, there are some final things you should do:

- Remove `/opt/postal/app`. This is where the application itself lived and is no longer required.
- Remove `/opt/postal/log`. Logs are no longer stored here.
- Remove `/opt/postal/vendor`. This is no longer used.
- Remove the backup Postal helper tool from `/usr/bin/postal.v1`.
- If you changed any tracking domains to use your main IP address, you can remove the additional IP from the server after checking that all DNS updates have applied.

## Installing on a new server with existing data

If you want to simply install Postal on a new server and copy your data over, you can do so by following these instructions.

1. Create your new server and follow the instructions for installing Postal. You should have a working installation at this point.
2. On your old server, stop Postal using `postal stop`. Make sure it has fully stopped before continuing using `postal status`.
3. On your new server, stop Postal using `postal stop`.
4. Use whatever tool takes your fancy (`mysqldump`, `Mariabackup` etc...) to copy your databases to your new server. Make sure you copy the `postal` database as well as all other databases prefixed with `postal` (or whatever you have configured your prefix to be in the `message_db` part of your configuration).
5. On the new server, run `docker exec -t postal-web-1 bin/rails db:migrate` to update the copied database with the changed table structures
6. Ensure that your `postal.yml` is merged appropriately. For example, make sure your `dns` section is correct. There is no need to copy the `rails.secret` - a new secret on the new host won't be a problem.
7. If you stopped Postal cleanly before beginning, there is no need to copy any persisted data from RabbitMQ.
8. Shutdown your old Postal server.
9. Move the IP address(es) from the old server to the new one (if both old and new servers are with the same provider).
10. Start Postal on the new server using `postal start`.
