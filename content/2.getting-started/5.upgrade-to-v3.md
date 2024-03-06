---
title: Upgrading to v3 
description: ""
position: 2.3
category: Installation
---

::callout{color="orange" icon="i-heroicons-exclamation-circle"}
If you are currently running a version of Postal less than 2.0.0, you should upgrade to v2 before v3.
::

Postal v3 was released in March 2024 and introduced some changes to way that Postal runs. The noteable changes between v2 and v3 are as follows:

* No need to use RabbitMQ.
* No need to run `cron` or `requeuer` processes. 
* Improved logging.
* Improve configuration management (including the ability to configure with environment variables or a config file).

## Database considerations

It is important that any pre-existing tables in your database are set up with the `DYNAMIC` row format. If not, you may receive errors during the database migrations. This has been the default since MariaDB 10.2.1. 

You can check the format of your tables using `SHOW TABLE STATUS FROM postal`. If you have tables which are incorrect, you can change them with the following:

```sql
ALTER TABLE `table_name` ROW_FORMAT=DYNAMIC;
```

## Upgrading

To upgrade, you can follow the same instructions as provided on the [upgrade page](/getting-started/upgrading)

## Configuration

Postal v3 introduces a new format for its configuration file. An example of the full, new, configuration file format [can be found in our repository](https://github.com/postalserver/postal/blob/main/doc/config/yaml.yml). 

While v3 is still compatible with configuration from earlier versions but you should change your configuration to the new format to ensure continued compatibility. Any newly added configuration options are not available in the v1 configuration format.

## RabbitMQ

Once you have upgraded to v3, you can remove any RabbitMQ services you have that solely support your Postal installation.

## Cron & Requeuer Processes

These processes are not required in Postal v3 and should not be running.
