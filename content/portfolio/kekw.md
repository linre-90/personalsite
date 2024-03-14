---
title: "KekwVR"
name: "kekw"
excerpt: "KekwVR, which stands for Kauhean Edistynyt Koulusimulaattori - World of Virtual, despite its humorous name, is indeed a genuine client project. We completed the project..."
thumbnail: "kekw/kekwthumb.webp"
tech: 
    - "Unity"
    - "URP"
    - "VR"
    - "Video"
date: 2023-05-10T12:00:00+02:00
draft: false
---
# KekwVR

-   Unity
-   URP
-   VR
-   Video

"KekwVR," which stands for "Kauhean Edistynyt Koulusimulaattori - World of Virtual," despite its humorous name, is indeed a genuine client project. We completed the project as a team of four. None of us had any prior experience in developing VR games, but we were familiar with Unity and Blender. The game serves as a well-documented foundation for future school years, allowing for the expansion and addition of various educational fields to the game. The project is version-controlled using GIT, and we accumulated well over 1000 commits in the end.


{{< videolink imgSrc="/kekw/kekwvid.webp" videoSrc="https://youtu.be/xm9viDpLztc" >}}


The game runs on a PC and natively on the Oculus Quest 2 device as an Android build. Performance was one of the biggest technical challenges in the project. We had to implement LOD (Level of Detail), occlusion, and limit object rendering distances. Textures were atlased together, and the game reused many objects using pooling. Shaders in the project were also optimized.

The project took approximately 10 weeks to complete. There is still a significant amount of polishing and fine-tuning left to be done. Due to time constraints, aspects such as sound, 3D sound, and their fading still require refinement. Additionally, now that the project is "finished," I would say that I wouldn't use the same textures again but would simplify the look considerably. I would also completely forgo Git and opt for either Perforce or Apache Subversion.


