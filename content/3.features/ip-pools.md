---
title: IP Pools
description: 'Send messages from different IP addresses based on server, sender or recipient.'
category: Features
---
Postal supports sending messages from different IP addresses. This allows you to configure certain sets of IPs for different mail servers or send from different IPs based on the sender or recipient addresses.

## Enabling IP pools

By default, IP pools are disabled and all email is sent from whichever address the host's routing table selects. To use IP pools, you'll need to enable them in the configuration file. You can do this by setting the following in your `postal.yml` configuration file. You'll then need to restart Postal using `postal stop` and `postal start`.

```yaml
postal:
  use_ip_pools: true
```

::callout{icon="i-heroicons-information-circle"}
The worker binds outgoing SMTP connections to the exact IP addresses you configure, and it discovers which addresses it can use by inspecting the network interfaces of the host (or container) it runs in. This means the addresses must be configured on the worker's own network interfaces - in Docker terms, workers must run with host networking (which the standard installation does).
::

## Configuring IP pools

Once you have enabled IP pools, you'll need to set them up within the web interface as a global administrator. You'll see an **IP Pools** link in the top right of the interface. From here you can add pools and then add IP addresses within them.

### IP addresses

Each IP address in a pool has the following attributes:

* **IPv4 address** - required and unique across all pools.
* **IPv6 address** - optional. If a recipient's mail server is only reachable over IPv6 and the selected address has no IPv6 address, that mail server will be skipped.
* **Hostname** - required. This is used as the `HELO`/`EHLO` hostname when Postal connects to remote mail servers from this address. It should match the reverse DNS (PTR) record for the address - Postal does not manage PTR records for you.
* **Priority** - an integer from 0 to 100 (default 100) which weights how often this address is chosen relative to others in the same pool. For example, with three addresses at priorities 1, 50 and 100, the priority 1 address receives a tiny percentage of mail, priority 50 roughly a third and priority 100 roughly two thirds. An address with priority 0 is never selected.

### Assigning pools to organizations and servers

Once an IP pool has been added, you'll need to assign it to any organization that should be permitted to use it. Open up the organization and choose **IPs** and then tick the pools you want to allocate. A pool marked as the **default** pool is automatically allocated to every newly created organization.

Once allocated to an organization, you can assign the IP pool to servers from the server's **Settings** page. All outgoing mail from that server will use the pool unless an IP pool rule says otherwise.

### IP pool rules

Rules allow individual messages to be sent from a different pool based on their sender or recipient. Rules can be created at the organization level (**IP Rules** in the organization menu) or on a specific server (**IP Rules** in the server settings). Each rule has:

* **To addresses** - a list (one per line) of addresses or domains matched against the recipient (`RCPT TO`) of the message.
* **From addresses** - a list of addresses or domains matched against the `From` header of the message.
* The **IP pool** to use when the rule matches.

A rule matches if *any* entry in either list matches. An entry containing `@` must match the full address exactly (any `+tag` in the recipient's address is ignored). An entry without `@` must match the domain of the address exactly. Wildcards and subdomain matching are not supported.

Rules are evaluated in this order and the first match wins:

1. The server's own rules, newest first.
2. The organization's rules, newest first.
3. The server's assigned IP pool.

If none of these produce a pool the message is sent without a fixed source address.

## How addresses are allocated

When a message is queued, Postal selects an IP address from the resulting pool using the priorities above and stores it against the queued message. All retries for that message use the same address. When several queued messages to the same destination domain are batched together they must also share the same address.

Each worker process only picks up queued messages whose allocated address is configured on the host it is running on (or messages with no allocated address).

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
It's <b>very important</b> to make sure that the IP addresses you add in the web interface are actually configured on a host running a Postal worker. If an address is not present on any worker host, messages allocated to it will sit in the queue indefinitely and never be processed. Likewise, removing an address from a host (or from Postal) while messages are queued for it will leave those messages stranded.
::

Removing an IP pool is only possible once it has no addresses and no servers assigned to it.
