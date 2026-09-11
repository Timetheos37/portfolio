---
title: Minesweeper on FPGA
draft: false
publishDate: 2026-07-03 00:00:00
img: /assets/demineur-final.JPEG
img_alt: View of the project during the final presentation
gallery:
  - src: /assets/demineur-illustration.png
    alt: Mockup of the minesweeper project
  - src: /assets/demineur-play.PNG
    alt: Minesweeper game in progress
description: |
  As part of a mini capstone project for the digital systems course, we built (as a team of two) a minesweeper game playable on an RGB LED matrix with an analog joystick.
tags:
  - Embedded
  - FPGA
  - VHDL
  - C/C++
---

##### Objective

The main objective of the project is to combine hardware programming (FPGA part using the **VHDL** language) and software programming (processor part using the **C++** language).

#### Hardware vs Software Programming: The Difference

Hardware programming is used to design the drivers for the physical components of our project: the LED matrix and the 7-segment displays.

Software programming is used to code all the game logic, as well as communication with the analog signal converter coming from the joystick.

#### Advantages of Hardware Programming
While it's possible to code drivers using software programming, hardware programming offers certain advantages. Notably, a speed gain and a much lower latency. The principle behind this type of programming is to design silicon cores dedicated to a specific use or type of computation.

This same optimization logic is found in graphics cards (GPUs): to maximize performance, they integrate specialized hardware cores (or _IP cores_) dedicated to very specific computations, thereby freeing up the main processor. Developing in VHDL on FPGA lets us apply this same philosophy at our own scale: we design our own custom _IP cores_ to drive our physical components (LED matrix, displays), ensuring a level of parallelism and efficiency that would be impossible to achieve with software alone.

#### Hardware Development Process
To design a driver through hardware programming with the **VHDL** language, we start by studying the component's documentation. It's important to understand the protocols used and how the component interprets the signals received as input, as well as how the output signals are generated.

Next, we model the driver using various design tools such as state machines to represent the driver's behavior, and block diagrams to represent the driver's architecture.