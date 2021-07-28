---
title: Upgrading
description: ''
position: 2.2
category: Installation
---
Once you have installed Postal, you can upgrade it by simply pulling the latest copy of the repository.

## Automatic upgrade

You can use the automatic upgrade script to attempt to upgrade your installation automatically. This will obtain a new copy of the application and then restart Postal.

```bash
# Upgrade using the stable channel
postal auto-upgrade

# Upgrade using the beta channel
postal auto-upgrade --channel beta

# Upgrade using the stable channel but stop postal before the upgrade
# and start it again afterwards rather than simply restarting.
postal auto-upgrade --safe
```

## Manual upgrade from packages

If you have installed Postal from a package (default behaviour), you can upgrade like this:

```bash
# Backup the old application
sudo -u postal rm -Rf /opt/postal/app.backup
sudo -u postal cp -R /opt/postal/app /opt/postal/app.backup
# Get the new application package and extract 
wget https://postal.atech.media/packages/stable/latest.tgz -O - | sudo -u postal tar zxpv -C /opt/postal/app
# Install new dependencies
postal bundle /opt/postal/vendor/bundle
# Upgrade database
postal upgrade
# Restart postal
postal restart
```

## Manual upgrade from repository

If you have installed Postal from a repository, you can upgrade it with this. With a manual upgrade you can achieve a zero downtime upgrade. 

```bash
# Update to the latest version of the repository
cd /opt/postal/app
sudo -u postal git pull
# Install new dependencies
postal bundle /opt/postal/vendor/bundle
# Upgrade database
postal upgrade
# Restart postal
postal restart
```