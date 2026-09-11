---
title: Network infrastructure
draft: false
publishDate: 2026-02-08 00:00:00
img: /assets/vue-global-reseau-greensoft.png
img_alt: Global view of GreenSoft network
gallery:
  - src: /assets/vue-archi-reseau-greensoft.png
    alt: GreenSoft network architecture view
description: |
  In the context the forth semester project: We created (in a team of four) a complete network architecture design according to the specifications of a fictional company, GreenSoft.
tags:
  - Network
  - Architecture
  - Deployment
---

### Approach

We were tasked with creating a corporate network infrastructure based on specifications outlining the needs of a fictional company named GreenSoft.

We used the specifications to understand the client's needs in order to present a concrete **solutions analysis** document. Analyzing the various solutions on the market allows us to stay up-to-date with the **constant evolution of technologies** and to present **alternatives** if needed.

Here is a non-exhaustive list to illustrate this phase with some examples:

| Needs | Solution(s) |
| --- | --- |
| Connection of the Dublin site (_IPv6 Only_) to the Internet (_Dual Stack_) | NAT64 + DNS64 protocols |
| Private virtual link between Dublin and the main headquarters in Fribourg | VPN protocols: GRE or GMAT |
| Private tunnel connection from the Lausanne site to the main headquarters in Fribourg | VXLAN or L2TP protocols |
| Stability and security | Additional equipment (_Firewall_ + _Router_) with VRRP or HSRP protocols |

### Architecture and deployment

Once the analysis is complete and the choice of solutions is defined, the next step is to _design_ the network architecture. This is a crucial step in which we _design_ two representations of the network: the **logical** and **physical** diagrams. 

These diagrams support the deployment phase and are essential for the smooth progression of the work. 
It is at the end of this stage that a deployment plan is written to define the order in which the different services must be installed.