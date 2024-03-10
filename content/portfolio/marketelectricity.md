---
title: "Market electricity"
name: "marketelectricity"
excerpt: "The Market Electricity application is programmed entirely in C. It retrieves new hourly price information from an open API. The response from the API is in JSON format, which is then p..."
thumbnail: "methumb.webp"
tech: 
    - "C"
    - "Cmake"
date: 2024-03-10
weight: 20
draft: false
---

# Market electricity
- C
- Cmake

The Market Electricity application is programmed entirely in C. It retrieves new hourly price information from an open API. The response from the API is in JSON format, which is then parsed into an array of structs. These structs hold the relevant data extracted from the JSON response. Finally, the parsed data is plotted onto a user interface using the Raylib library, providing users with a graphical representation of the electricity market prices.

[Repository is in github!](https://github.com/linre-90/marketElectricity)

> Interface is dead simple
![User interface](/content/images/methumb.webp "User interface.")


## Technology
The Market Electricity application is developed entirely in C for the Windows platform. It is compiled using Visual Studio and CMake. CMake is responsible for managing dependencies for the project, which include CURL for fetching data from the internet and Raylib for generating the graphical user interface (GUI).

Raylib is employed to create the GUI, enabling users to interact with the application visually. The program is designed to be self-sufficient; it tracks the current time and autonomously updates the GUI accordingly. Additionally, it fetches updates for price information autonomously based on the time of the day. This ensures that users receive real-time updates on electricity prices without requiring manual intervention.



