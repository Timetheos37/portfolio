---
title: Minesweeper on FPGA
draft: false
publishDate: 2026-07-03 00:00:00
img: /assets/demineur-final.JPEG
img_alt: View of the project during the final presentation
gallery:
  - src: /assets/demineur-illustration.png
    alt: Mockup of the Minesweeper project
  - src: /assets/demineur-play.PNG
    alt: Game of Minesweeper in progress
description: |
  As part of a mini project to conclude the digital systems course, we created (in a team of two) a Minesweeper game playable on an RGB LED matrix using an analog joystick.
tags:
  - Embedded
  - FPGA
  - VHDL
  - C/C++
---

##### Objective

The main objective of the project was to combine hardware programming (FPGA part using the **VHDL** language) and software programming (processor part using the **C++** language). 

#### Hardware vs Software Programming Differences

Hardware programming is used to design the drivers for the physical components of our project: the LED matrix and the 7-segment displays.

Software programming is used to code all the game logic as well as the communication with the analog stick using the _I2C_ protocol.

#### Advantages of Hardware Programming
Although it is possible to code drivers with software programming, hardware programming offers certain advantages. Notably, a gain in speed and significantly reduced latency. The principle of this type of programming is to design silicon cores for a dedicated use or type of calculation. 

This is the same principle used in graphics cards, for example. Graphics cards (or _GPUs_) are cores designed specifically for matrix calculation, optimized to execute the same instruction on a large amount of data simultaneously. 

#### Hardware Development Process
To design a driver through hardware programming using the **VHDL** language, we start by studying the component's documentation. It is important to understand the protocols used, how the component interprets the input signals it receives, and how the output signals are generated.

Next, we model the driver using various design tools, such as state machines to represent the driver's behavior and block diagrams to represent its architecture.