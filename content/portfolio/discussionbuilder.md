---
title: "Dialogue builder"
name: "discussionbuilder"
excerpt: "Dialogue Builder is a helper software designed for generating conversation trees for game engines. It is written in C# and functions as a standalone Windows desktop program...."
thumbnail: "dbcommon.webp"
tech: 
    - "C#"
    - "Wpf"
date: 2024-01-10T12:00:00+02:00
draft: false
---
# Dialogue builder

-   C#
-   Wpf

Dialogue Builder is a helper software designed for generating conversation trees for game engines. It is written in C# and functions as a standalone Windows desktop program.

With the help of this program, I can develop conversations between player and NPC characters independently of the game engine. I don't have to create a separate conversation tool in Unreal, Unity, or Godot; instead, I can use this program. All the game project has to implement is reading the produced JSON or CSV files.

[Github!](https://github.com/linre-90/DialogueBuilder)

> Simple UI with a node graph (supports node dragging) on the left and node properties on the right.
![Main editing view](/content/images/dbcommon.webp "Main editing view")

## Main features
- Visual tree representation
- Easy property editing
- Complex conversation structure support
- Flag for invoke activity (play sound, launch another sequence etc...)
- Universal data extraction with CSV or JSON 
- Folder is the project

> Every graph has its own folder for data serialization.
![Simple structure](/content/images/dbprojectstruct.webp "Simple structure")

## Technical implementation

The program is written in C# and WPF. It stores its data in a named folder in JSON format, which can be utilized by engines supporting proper JSON serialization. The program maintains separate files for the node graph UI state and the created tree. Each conversation supports any number of children conversation options. Data can be exported in two different ways.

The project JSON file can be used as is or exported in two different CSV formats. First CSV format is specific to Unreal Engine, which automagically adds the first column name. Therefore, this column must remain unnamed in the CSV. Another CSV export option is the 'standard' CSV format. Commas in text are replaced with the ';' character, so this needs to be addressed when parsing data in the engine. The program generates two different CSV files: one for raw node data and another for relationships.

> Produced json file
![json format](/content/images/dbjson.webp "json format")

> Above the JSON file, in CSV format, the left side contains node data, and the right side contains relationship data. Relationship IDs are throwaway values because Unreal cannot handle the same values in the first column on multiple rows.
![csv format](/content/images/dbcsv.webp "csv format")

