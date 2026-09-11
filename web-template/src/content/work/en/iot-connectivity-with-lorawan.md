---
title: IoT connectivity with LoRaWAN
draft: false
publishDate: 2026-07-03 00:00:00
img: /assets/img-TP-LoRa.JPEG
img_alt: Embedded system board with LoRa antenna
gallery:
  - src: /assets/img-TP-LoRa-2.JPEG
    alt: Temperature view in the dashboard
description: |
  In the context of a laboratory work, we created (in a team of two) a mini weather station communicating via the LoRa (Long Range) radio protocol.
tags:
  - Embedded
  - Development
  - C/C++
  - FreeRTOS
  - LoRa/LoRaWAN
---

## IoT Connectivity with LoRaWAN

The goal of this project was to learn how the _LoRa/LoRaWAN_ protocol works and how to use it through a simple use case: a weather station.

The overall system overview is as follows: the station collects temperature and humidity data, then transmits it via radio using the _LoRa/LoRaWAN_ protocol to our data server. The data is then formatted for the user in a _dashboard_. 

#### LoRa vs LoRaWAN

_LoRa_ is the radio protocol used by the electronic component on the board. It allows transmitting messages to other embedded systems capable of receiving them. The advantage of this protocol is its very low energy consumption and its ability to send messages over a distance of about 15km, making it one of the best wireless communication protocols for field embedded systems.

_LoRaWAN_ is the technology used to bridge the communication of LoRa systems to the internet. This works through gateway modules connected to official or community servers.

#### Development Approach

The _C++_ programming language allows for an object-oriented approach to the program. Each electronic component is represented by a _C++_ class, which is then instantiated in the main program. 

Each of these components must work simultaneously, which is why we used the _FreeRTOS_ operating system. It allowed us to associate each component's action with a specific task. Once the system is running, _FreeRTOS_ automatically manages the scheduling of tasks so they run in parallel. 

