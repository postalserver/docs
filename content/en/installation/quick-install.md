---
title: Quick Install
description: ''
position: 2.5
category: Installation
---
To get up and running quickly, you can follow these steps. You'll have a basic Postal installation ready to go in in less than 10 minutes.

1. Provision a new server running Ubuntu 16.04 LTS. This can be from any provider. We use [Digital Ocean](https://m.do.co/c/17696597a9ed) for testing.

2. Login to your new server as `root` and run the following command to install Postal:

```bash
curl https://raw.githubusercontent.com/atech/postal/master/script/install/ubuntu1604.sh | sh
```

3. Create a new user for you to login with:

```bash
postal make-user
```

4. Access your Postal installation in a web browser. You'll start with an SSL warning because the certificate isn't valid but you can fix that later.

5. You should also be able to access the SMTP server on port `25`.

## Next steps

Now your installation is active, there are a few things you can look at doing next.

1. Change your MySQL & RabbitMQ passwords. By default they are set to `p0stalpassw0rd` and the MySQL root password is blank.

2. Replace the self signed certificates in `/etc/nginx/ssl/postal.cert` with something proper. You can use something like CertBot to get you one for free through Let's Encrypt.

3. Set up your DNS appropriately, [see the guide](/installation/dns-configuration) for full details.

4. Configure spam & virus checking, [see the guide](/features/spam-and-virus-checking) for full details

5. Configure click/open tracking, [see the guide](/features/click-and-open-tracking) for full details.

6. Configure Postal to [start on boot](/installation/starting-on-boot)