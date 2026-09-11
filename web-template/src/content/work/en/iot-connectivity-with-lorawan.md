---
title: IoT Connectivity with LoRaWAN
draft: false
publishDate: 2026-07-03 00:00:00
img: /assets/img-TP-LoRa.JPEG
img_alt: embedded system board with LoRa antenna
gallery:
  - src: /assets/img-TP-LoRa-2.JPEG
    alt: temperature view in the dashboard

description: |
  As part of a lab assignment, we built (as a team of two) a mini weather station communicating over the LoRa (Long Range) radio protocol.
tags:
  - Embedded
  - Development
  - C/C++
  - FreeRTOS
  - LoRa/LoRaWAN

---

## IoT Connectivity with LoRaWAN

The goal of this project was to learn the workings and usage of the _LoRa/LoRaWAN_ protocol through a simple use case: a weather station.

The overall system works as follows: the station collects temperature and humidity data, then transmits it by radio using the _LoRa/LoRaWAN_ protocol to our data server. The data is then formatted for the user in a _dashboard_.

#### LoRa vs LoRaWAN

_LoRa_ is the radio protocol used by the electronic component on the board. It enables messages to be transmitted to other embedded systems capable of receiving them. The advantage of this protocol is that it uses very little power and can send messages over a distance of about 15 km in open areas. This makes it one of the best wireless communication protocols for field-deployed embedded systems, as it prioritizes low power consumption and long range at the cost of a low data rate.

_LoRaWAN_ is the technology used to route communication from LoRa systems over the Internet. This works through gateway modules connected to official or community servers. This protocol also defines standards for message format, security key management, and device classes.

#### Development Approach

The _C++_ programming language enables an object-oriented approach to the program. Each electronic component is then represented by a _C++_ class, which is instantiated in the main program.
Each of these components must operate simultaneously, which is why we used the _FreeRTOS_ operating system, which allowed us to associate each component's action with a task. Once the system is running, _FreeRTOS_ handles scheduling the tasks itself so they run in parallel.