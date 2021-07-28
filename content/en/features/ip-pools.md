---
title: IP Pools
description: ''
position: 3.2
category: Features
---
Postal supports sending messages from different IP addresses. This allows you to configure certain sets of IPs for different mail servers or send from different IPs based on the sender or recipient addresess.

By default, this functionality is disabled and Postal will send from any system IP.

## Enabling IP pools

To begin, you'll need to enable IP pools. You can do this by setting the following in your `postal.yml` configuration file.

```yaml
general:
  use_ip_pools: true
```

## Configuring IP pools

Once you have enabled IP pools, you'll need to set them up within the web interface. You'll see an **IP Pools** link in the top right of the interface. From here you can add pools and then add IP addresses within them.

Once an IP pool has been added, you'll need to assign it any organization that should be permitted to use it. Open up the organization and choose **IPs** and then tick the pools you want to allocate.

Once allocated to an organization, you can assign the IP pool to servers from the server's **Settings** page. You can also use the IP pool to configure IP rules for the organization or server.

## Configuring IPs on server

It's important to make sure that the IP addresses you add in the web interface are actually configured on your Postal servers. If the IPs don't exist on the server, message delivery may fail or messages will not be dequeued correctly.