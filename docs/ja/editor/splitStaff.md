---
title: 譜表の分割
description: 譜表を2つに分割したり、2段に分割することができる機能です。この機能を利用すると、別々の声部に分割することができます。 
nav: editor
pid: splitStaff
permalink: ja/music-notation-software/split-staff.html
action.splitStaff: true
---

## 概要


| アイコン | ![Split Staff](https://prod.flat-cdn.com/img/icons/editorActions/splitStaff.svg){:.tb} |
{:.feat}


異なる楽器やパートに1つの譜表が与えられている場合、この機能を利用することで譜表を分割してそれぞれの楽器やパート用に譜表を作成することができます。

## 分割について

小節内に異なる声部が存在する場合、それぞれの声部ごとに譜表が作成されます。

![声部ごとに分割](/help/assets/img/editor-ja/splitStaff-voices.png)

<br>

小節内に和音が含まれる場合、和音は半分ずつ各譜表に分割されます。
<br>奇数の音符数で構成される和音の場合は、中間の音符が両方の譜表に表示されます。

![和音を分割]](/help/assets/img/editor-ja/splitStaff-chords.png)

<br>

## 使い方

まず、分割したい譜表にカーソルを合わせます。
<br>編集画面左上の「**声部**」ボタンをクリックして「**譜表を分割**」を選択します。

![譜表を分割ボタン]](/help/assets/img/editor-ja/splitStaff-button.png)

<br>
分割方法にはいくつかのオプションがあります。
<br>
* 「**もとの譜表を削除**」…これにチェックを入れると元々の譜表は削除され、分割後の2つの譜表のみが表示されます。
* 「**2譜表に分割**」…1つのパート内に2つの譜表を作成します。
* 「**2パートに分割**」…2つの異なるパートとして譜表を作成します。

![分割オプション](/help/assets/img/editor/splitStaff-options.png)
