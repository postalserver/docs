---
title: Starting on boot
description: ''
position: 2.6
category: Installation
---
## /etc/rc.local

The most simple way to get Postal to start on boot is to add the following to your `/etc/rc.local` file. Make sure you insert it before any `exit` lines.

```bash
sudo -u postal postal start
```

This will start Postal on boot and you can continue to use the `start/stop/restart` commands provided by the `postal` command.

## systemd

If you'd like to configure Postal to be monitored using systemd, you can use this example file. You may need to make adjustments depending on the names of your other services but if you have followed our installation guides this will work.

```
[Unit]
Description=Postal Mail Platform
After=mysqld.service rabbitmq-server.service
Wants=mysqld.service rabbitmq-server.service

[Service]
ExecStart=/usr/bin/postal start
ExecStop=/usr/bin/postal stop
ExecReload=/usr/bin/postal restart
User=postal
Restart=on-failure
Type=forking

[Install]
WantedBy=mysqld.service rabbitmq-server.service
```

1. Start by stopping your existing Postal installation using `postal stop`.
2. Copy the above file into `/etc/systemd/system/postal.service`
3. Enable it with `systemctl enable postal`
4. Start it with `systemctl start postal`

Once you have started systemd, you should no longer manage the Postal process using the built-in `start/stop` commands. You should always start and stop through systemd otherwise it will get confused and unhappy.

You can continue to use `postal restart` when needed however `auto-upgrade` should be avoided because it uses the built-in start/stop commands.

Once enabled, Postal should start when your system boots.
