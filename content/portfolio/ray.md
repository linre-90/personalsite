---
title: "Ray tracing"
name: "ray"
excerpt: "I created a Unity ray tracing and DLSS demo scene. I modeled a moderately heavy scene with many shiny surfaces and reflections using Blender. I also didn't hold back..."
thumbnail: "ray/ray.webp"
tech: 
    - "Unity"
    - "HDRP"
    - "Video"
date: 2022-05-25T12:00:00+02:00
draft: false
---
# Unity raytracing, dlss ja DX12

-   Unity
-   HDRP
-   Video


I created a Unity ray tracing and DLSS demo scene. I modeled a moderately heavy scene with many shiny surfaces and reflections using Blender. I also didn't hold back on VFX effects. The screen space reflection mode was set to ray traced. DLSS had a noticeable impact on the graphics card's performance. The video and game were recorded using an Nvidia RTX 2060 graphics card.


{{<videolink imgSrc="/ray/ray.webp" videoSrc="https://youtu.be/iFBjlztOsMU">}}


> Room with the fireplace
{{<assetimage imgAsset="/ray/rthumbnail.webp" imgAlt="Room with the fireplace" imgTitle="Room with the fireplace">}}

## My 2 cents

Unfortunately, YouTube compression compromised the video's image quality, but DLSS and dynamic resolution had a significant impact on small dust particles and minor animations. At its worst, DLSS completely removed the swinging animation of ceiling candles and the dust particles from view. On the other hand, DLSS and dynamic resolution nearly doubled the FPS.

> The fireplace had several VFX graphs running simultaneously. Additionally, you can spot a small easter egg in the image – there's always time for those.
{{<assetimage imgAsset="/ray/fireplace.webp" imgAlt="The fireplace" imgTitle="The fireplace">}}

> The hallway was filled with numerous particles and featured subtle animations.
{{<assetimage imgAsset="/ray/hallway.webp" imgAlt="The hallway was filled with numerous particles and featured subtle animations." imgTitle="The hallway was filled with numerous particles and featured subtle animations.">}}

