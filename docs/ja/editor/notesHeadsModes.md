---
title: 符頭のモード設定
description: Flatでは符頭をカラフルにしたり、符頭に音名を表示させたりカスタマイズすることができます。自分だけの楽譜を作成してみましょう。
nav: editor
pid: nodesheads-modes
permalink: ja/music-notation-software/notes-heads-automatic-modes.html

action.setShapeDisplayMode: true
action.setColorDisplayMode: true
action.setPitchesNamesMode: true
action.setSolfegeTiDisplayMode: true
action.setSolfegeSiDisplayMode: true
action.setFixedDoDisplayMode: true
---

Flatでは符頭に様々なモードを設定することができます。
<br>モードを選択すると、**自動で全ての音符に適用されるので個々に設定する必要がありません**。 
<br>現時点で利用できるモードにはBoomwhackers（音ごとに色が割り振られます）、音名表示、符頭の形（Aiken）があります。

## 概要

| 機能 | ツールバー | アイコン |
|:--------|:--------|:-----|
| Boomwhackers | **レイアウト設定** > **符頭** | ![Layout](https://prod.flat-cdn.com/img/icons/editorActions/layout.svg){:.tb} |
| 音名 | **レイアウト設定** > **符頭** | ![Layout](https://prod.flat-cdn.com/img/icons/editorActions/layout.svg){:.tb} |
| ソルフェージュ (ti) | **レイアウト設定** > **符頭** | ![Layout](https://prod.flat-cdn.com/img/icons/editorActions/layout.svg){:.tb} |
| ソルフェージュ (si) | **レイアウト設定** > **符頭** | ![Layout](https://prod.flat-cdn.com/img/icons/editorActions/layout.svg){:.tb} |
| 図形音符(Aiken) | **レイアウト設定** > **符頭** | ![Layout](https://prod.flat-cdn.com/img/icons/editorActions/layout.svg){:.tb} |
{:.feat.index}

<br>

## 利用方法

符頭のモードを設定するには、編集画面右上の「**レイアウト設定**」をクリックします。
<br>「**レイアウトとスタイル**」のページが開くので「**符頭**」をクリックします。
<br>色や形など、お好みの設定を選択して最後に「**保存**」ボタンをクリックしてください。

![符頭のデザイン](/help/assets/img/editor-ja/notes-heads-modes.gif)

<br>

## モード紹介

選択できるモードをご紹介します。

<br>

### Boomwhackers（音ごとに色を付ける）

![Boomwhackers](https://prod.flat-cdn.com/img/icons/scoreEditor/notesheadsScaleBoomwhackers.svg){:.noBorder}

### 音名

![Notes names in the notes heads](https://prod.flat-cdn.com/img/icons/scoreEditor/notesheadsScaleNotesNames.svg){:.noBorder}

### ソルフェージュ（Ti）

![Solfege with ti in the notes heads](https://prod.flat-cdn.com/img/icons/scoreEditor/notesheadsScaleSolfegeTi.svg){:.noBorder}

### ソルフェージュ（Si）

![Solfege with ti in the notes heads](https://prod.flat-cdn.com/img/icons/scoreEditor/notesheadsScaleSolfegeSi.svg){:.noBorder}

### 図形音符：Aiken

![Shape note](https://prod.flat-cdn.com/img/icons/scoreEditor/notesheadsScaleShape.svg){:.noBorder}

### Do type

**固定ド**もしくは**移動ド**から選択できます。

#### 固定ド
固定ドを選択した場合、色と表示は音によって変化します。**ソ**の音は常に**So**と表示されます。

![Fixed do](https://prod.flat-cdn.com/img/icons/scoreEditor/notesheadsFixedDo.svg){:.noBorder}

#### 移動ド
移動ドを選択した場合、色と表示は音と調号の主音によって変化します。
**G メジャー**では**ソ**の音に**Do**と表示されます。

![Movable do](https://prod.flat-cdn.com/img/icons/scoreEditor/notesheadsMovableDo.svg){:.noBorder}

### 複合モード

色と音色のモードなど、複数のモードを選択することもできます。

![Combined modes](https://prod.flat-cdn.com/img/icons/scoreEditor/notesheadsScaleBoomwhackersNotesNames.svg){:.noBorder}
