---
title: "Catquiz"
name: "catquiz"
excerpt: "Catquiz is an interactive addition to the catsopinion blog...."
thumbnail: "catquizindex.webp"
tech: 
    - "React"
    - "Typescript"
    - "Firebase"
    - "Python"
date: 2022-03-10T12:00:00+02:00
draft: false
---
# Catquiz

Catquiz is an interactive addition to the catsopinion blog.

- React
- Typescript
- Realtime database
- Firebase
- Python

[Try the game here!](https://catquiz-843f1.web.app/)

> Frontpage
![Image from the catquiz front page](/content/images/catquizindex.webp "Image from the catquiz front page")

## Technical implementation

I've stored the Catquiz questions in Firebase's Realtime Database. The questions are prepared in both English and Finnish using Excel sheets. After creating the sheets, I exported them to CSV format. To populate the database, I used a simple Python script to read the CSV data.

[Python script Github](https://github.com/linre-90/catquiz-db-fill)
[Front end Github.](https://github.com/linre-90/catquiz)

The front-end was built using React and Typescript, with styles authored in plain CSS. It was my first project with Typescript.

> Catquiz is a typecal question/answer game
![Game running](/content/images/catquizgameplay.webp "Game running")

>Questions were based on scientific studies and players receive feedback about their answers with some additional information
![Feedback screen](/content/images/catquizend.webp "Feedback screen")

