---
title: Hide instruments where they are not playing
nav: editor
pid: hide-non-playing-instruments
permalink: en/music-notation-software/hide-non-playing-instruments.html

action.setHideEmptyPartsPolicy: true
---

When you have a score with several instruments, sometimes you might want to hide instruments on systems where they are 
not playing. This can be a way to save vertical space, and make the score look tidier. 

To do so, **open the Layout Settings, next to the print button**.
Go to the section **Hide non-playing instruments**. 

![Hiding non playing instrumetns after the first system](/help/assets/img/editor/example-hide-non-playing-instruments.gif)

Here you can decide to hide instruments, either after the first system, or on all systems. 

![Available policies](/help/assets/img/editor/hide-non-playing-instruments-policies.png)

We designed this feature to make it easy to insert notes on empty systems: 
- When a system doesn't hold any notes for any instruments, we will display all the 
instruments. We will only hide instruments if at least another instrument is holding content. 
- Likewise, we will not hide an instrument on a system where it was previously displayed: removing the last note 
on a system will not cause the instrument to be hidden. You will need to reload the page for it to be hidden. 

Despite this, we recommend to only enable this option when you are done writing notes, as it can make it harder if you 
add notes for instruments on systems where they are hidden. 
