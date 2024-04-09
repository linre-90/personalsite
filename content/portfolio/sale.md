---
title: "Automatic curtains"
name: "sale"
excerpt: "We worked as a team of three and participated in the OpiKoodia course, which focused on software and embedded device coding, design, and implementation. Coming from various background..."
thumbnail: "sale/sale_thumb.webp"
tech: 
    - "Python"
    - "Kotlin"
    - "Rasbperry pi"
    - "Android"
date: 2024-04-08T12:00:00+02:00
draft: false
---
# Automatic curtains

- Python
- Kotlin
- Rasbperry pi
- Android

[Curtain Github repo!](https://github.com/linre-90/salekaihtimet)
[Application Github repo!](https://github.com/linre-90/SalekaihtimetApp)

We worked as a team of three and participated in the OpiKoodia course, which focused on software and embedded device coding, design, and implementation. Coming from various backgrounds, we brought a wide range of software development experience to the table, spanning from none to multiple years. I took on a more experienced role within the group, handling higher-level tasks such as version control, designing and planning, electronics, bug identification, and providing coding support. Although I initially tried to avoid coding, I ended up implementing the more complex algorithms and supported and encouraged the other two members to gain more coding experience. I'm very pleased with the end result and the contributions of everyone involved, and most importantly, we all learned something new!

Our project aimed to create a prototype of a functioning automatic curtain. We utilized several key components:

- Raspberry Pi 4
- 28BYJ-48 stepper motor
- 4 buttons (setup, mode toggling, opening, closing)
- Light-sensitive resistor
- 1 mF capacitor for light resistor analog input

{{<videolink imgSrc="/sale/sale_thumb.webp" videoSrc="https://youtu.be/ZpScIzozeJU">}}


## High level idea
Our idea was to create a device that rotates an electric motor either automatically via sensors and/or settings, or through manual user input. The device operates in three different modes: manual, user settings, and automatic. Additionally, there is a pairing mode that allows the user to upload desired settings from a smartphone application.

**Manual mode** is operated solely by user input, allowing users to smoothly adjust the curtains to open, close, or any position in between.
\
\
**User mode** is operated solely by uploaded settings and requires no manual user adjustments. 
\
\
**Automatic** is a combination of user mode and light sensor adjustment. During the day, we utilize an LDR (light-dependent resistor) to detect brightness and adjust the motor accordingly. If we're limited by user settings or if the sun doesn't rise or set, the curtains operate in user mode. The automatic mode eliminates the need for manual user adjustments. The automatic mode also employs a complex algorithm to dynamically calculate sunrise and sunset times using only timestamp, latitude, and longitude.


## Pairing mode

When the device is set to pairing mode, other operations are halted. Both the Raspberry Pi and the phone need to be connected to the same Wi-Fi network. To transfer data between the phone and the device, the device initiates a standard web server that listens for POST requests. Once the user has inputted settings in the mobile app and presses the 'send' button, a normal HTTP request is made to transfer the data. Subsequently, the device parses and stores the new settings to disk, then loads them into the program's settings variables.

The mobile application itself gathers data from phone sensors. For instance, latitude and longitude are obtained from the GPS chip native to the phone.

> Device in pairing mode, led indicates device state
{{<assetimage imgAsset="/sale/sale_pairing.webp" imgAlt="Device in pairing mode" imgTitle="Device in pairing mode">}}

> Quick and dirty app was created to demonstrade connectivity over wifi.
{{<assetimage imgAsset="/sale/sale_app.webp" imgAlt="Upload application" imgTitle="Upload application">}}


## Self evaluation

The project was successful, and it provided us with valuable learning experiences in coding practices, Git usage, and teamwork. Reflecting on the codebase, I have several suggestions for improvement:

- Utilizing more classes to encapsulate individual data types, allowing for the passing of a single class object to functions instead of multiple parameters.
- Encapsulating global variables within classes, where initialization functions return the state or handle to the "module", which is a pointer to a class instance.
- Implementing better naming conventions for variables and functions to enhance readability, including tying function names to their respective modules.
- Rewriting unit tests to ensure comprehensive coverage and accuracy.
- Addressing memory usage optimizations to enhance efficiency.
- The Raspberry Pi might be overkill for this kind of product. The curtains really only need a simple microcontroller capable of rotating motor and data communication. The Raspberry Pi could serve as the central hub, acting as the brain that manages multiple curtains or other devices within the same product family.




