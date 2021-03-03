---
title: Data and infrastructure
description: Information about Flat's hosting infrastructure
nav: general
pid: data-infra
copyright: true
permalink: en/general/data-infrastructure.html
---

Our platform uses multiple cloud providers and subprocessors to run Flat. To provide the best performances, security, and service, these providers and datacenters are located in multiple countries. We also replicate data across multiple countries.

## Domain names

If you're using restrictive firewall or proxy server settings, you or your network admin will need to allow (whitelist) certain domains to ensure Flat and related services work as expected.

Allow these domains for Flat and related services:

```
https://*.flat.io
https://*.flat-cdn.com
https://*.flat-embed.com
```

## Infrastructure providers

Flat uses the following providers for its production infrastructure:

| Provider & Entity Country | Hosting Country |
|:--------------------------|:-----------------------|
| Amazon Web Services Inc. (US) | US |
| DigitalOcean LLC. (US) | US, NL |
| OVH UK Ltd. (UK) | CA, FR |
| Wasabi Technologies, Inc. (US) | US, NL |

We also use some additional CDN providers to serve our static app content (which doesn't contain any User Information or User Content).

## Subprocessors

In order to provide our service in the best conditions, we use the following sub-processors. You can find for each of them, the service provided a short explanation about what we do provide through them.

| Subprocessor Name | Service | Usage and Country |
| ------------------|:--------|:------|
| Amazon Web Services Inc. | IaaS provider | We use Amazon Web Services for their data storage and email service (in the US). |
| DigitalOcean LLC. | IaaS provider | We use Digital Ocean for their compute and data storage (in the US and the Netherlands). |
| OVH UK Ltd. | IaaS provider | We use OVH for their data storage (in France and Canada). |
| Wasabi Technologies, Inc. | IaaS provivder | We use Wasabi for their data storage (in the US and the Netherlands). | 
| Google LLC. | PaaS/SaaS provider | We use Google for G Suite, Google Cloud, Firebase, Fabric and Google Analytics. |
| FrontApp, Inc. | SaaS provider | We use FrontApp for our support tool. |
| Stripe, Inc. | Payment provider | We use Stripe to process payments on the platform. |
| PayPal Holdings, Inc. | Payment Provider | We use Paypal to process payments on the platform. |
| Xero (UK) Ltd. | SaaS provider | We use Xero for the accounting and invoicing of our company. |
| Twilio Inc. | PaaS Provider | We use Twilio to send accounts verification SMS to organization admins. |
