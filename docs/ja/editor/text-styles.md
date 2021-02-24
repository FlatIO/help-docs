---
title: Text styles
nav: editor
pid: text-styles
permalink: en/music-notation-software/text-styles.html

action.setTextFont: true
action.setAllTextFonts: true
---

Flat lets you customize the styles of the different text elements in your scores. To customize the text styles used in your score, **open the Layout Settings, next to the print button**.

On our desktop web app, this is usually located on the right of your screen, or in the "Document" toolbar. On our mobile app, click on the edit button on the top of your screen.

![Layout settings button](/help/assets/img/editor/toolbar-print-layout.png)

## Changing the default font family

In the *Layout settings*, scroll to *Text styles*. From there, you can set the default font family used for all the texts in your score.

![Changing the default text font](/help/assets/img/editor/text-font.gif)

## Adjusting specific texts styles

You can also change the **font family for specific text types** (e.g. only the title of the score), and also adjust the **weight** (i.e. bold), **style** (i.e. italic) and the **size** of the font.

![List of text types](/help/assets/img/editor/text-font-specific-list.png)

For every specific text type, you can adjust the settings:

![List of text types](/help/assets/img/editor/text-font-specific-config.png){:.noBorder}

## About font sizes

The **sizes** of the different texts can be set in two different units: **points** and **staff space**:

* **Points (pt)** is an **absolute unit** that you usually find in text editors. By default, we use this unit for text elements like the *title* and the *subtitle* that are not directly linked to your staves.
* **Staff space (sp)** is a **relative unit** to your music staves, literally the space between two lines of the stave. By default, we use this unit for text elements that are linked to the staves, like *lyrics* and *chords*.

## Fonts Library

Most of the fonts provided on Flat are Open Source fonts that are directly served by [Google Fonts](https://fonts.google.com/).

We also provided the following Open Source fonts on Flat. Some of them are alternatives and metric-compatible fonts from proprietary fonts.

| Font Family | License | Alternative to |
|:------------|:--------|:--------------|
| Nimbus Roman | [SIL Open Font License](/help/licenses/fonts-URW-Core35.txt) | Times New Roman |
| Nimbus Sans | [SIL Open Font License](/help/licenses/fonts-URW-Core35.txt) | Helvetica |
| Nimbus Mono | [SIL Open Font License](/help/licenses/fonts-URW-Core35.txt) | Courier/Courier New |
| URW Gothic | [SIL Open Font License](/help/licenses/fonts-URW-Core35.txt) | Century Gothic | 
| URW Century Schoolbook L | [GNU GPL v2](/help/licenses/fonts-URW-Century.txt) | Century Schoolbook |
| Petaluma Script | [SIL Open Font License](/help/licenses/fonts-Petaluma.txt) | - |

## Implementation notes: Default fonts

Before March 2018, the default font was [**Noto Serif**](https://fonts.google.com/specimen/Noto+Serif). This default font has been changed on March 2018, and the new one is now **URW Century Schoolbook L** (licensed under GNU GPL v2). The Noto Serif font remains available in the list of font families.

When using [the music font **Petaluma**](/help/en/music-notation-software/music-font-smufl.html), the default font will automatically be set to **Petaluma Script**.
