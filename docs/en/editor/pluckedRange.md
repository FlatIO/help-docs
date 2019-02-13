---
title: Palm Mute & Let Ring
permalink: en/music-notation-software/plucked-ranges.html
description: Add palm mute and let ring with Flat editor.
nav: editor
pid: plucked-ranges

pluckedRange.title: Plucked Ranges
toggleBelowPalmMute.title: Palm mute (below)
toggleBelowPalmMute.shortDescription: Add or remove a palm mute at the cursor location, below the staff
toggleBelowPalmMute.purpose: Palm mutes means that we make a muted sound by having the side of the hand close to the string.
toggleAbovePalmMute.title: Palm mute (above)
toggleAbovePalmMute.shortDescription: Add or remove a palm mute at the cursor location, above the staff
toggleAbovePalmMute.purpose: Palm mutes means that we make a muted sound by having the side of the hand close to the string.

toggleBelowLetRing.title: Let ring (below)
toggleBelowLetRing.shortDescription: Add or remove a let ring at the cursor location, below the staff
toggleBelowLetRing.purpose: Let rings are meant to let the string ring, without muting it.

toggleAboveLetRing.title: Let ring (above)
toggleAboveLetRing.shortDescription: Add or remove a let ring at the cursor location, above the staff
toggleAboveLetRing.purpose: Let rings are meant to let the string ring, without muting it.
---

## Summary

| Feature | Toolbar | Icon |
|:--------|:--------|:-----|
| Let ring | **Articulation** | ![Let ring](https://prod.flat-cdn.com/img/icons/editorActions/letRing.svg){:.tb} |
| Palm mute  | **Articulation** | ![Palm mute](https://prod.flat-cdn.com/img/icons/editorActions/palmMute.svg){:.tb} |
{:.feat}

## What is a palm mute?

A palm mute is a guitar technique that consist in placing the hand on the strings, just above the bridge, so the sound get muted. 

## What is a let ring?

The let ring consists in letting the strings ring without muting it. It is similar to the pedal notation for Piano. 

## How to use let ring and palm mute on Flat?

Let ring and palm mutes are available in the *Articulation* menu and are manipulated in the same way than most ranges tools.

Once clicked, the desired marking will be added from the cursor location to the end of the measure.
Like others *range* markings on Flat, let ring and palm mute have the ability to be moved horizontally along the part through drag and drop.

They can also be shrunk or expanded using one of the two round handles on both extremities of the marking.

To remove let rings and palm mutes, you can either click on the P.M./let ring button while the cursor is located in the range of the marking, or you can directly select the marking and press the "Delete" shortcut on your keyboard or use the "Remove an element" button in the *Articulation* menu.

![Palm mute example](/help/assets/img/editor/palmMute.gif)

## Implementation notes

Please note that let rings and palm mute aren't supported by the playback engine yet.
We expect to release an implementation in 2019.