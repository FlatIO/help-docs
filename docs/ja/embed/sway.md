---
title: Microsoft Swayに楽譜を埋め込む
ptitle: Microsoft Swayに再生可能な楽譜を埋め込む方法をご紹介します。
description: Microsoft SwayにFlatで作成した楽譜を埋め込む方法をご紹介します。埋め込んだ楽譜は再生することも出来ます。
nav: embed
pid: embed-sway
permalink: ja/music-notation-embed/microsoft-sway.html
---

[Microsoft Sway](https://sway.com/)には写真やビデオ、その他のマルチメディアに加えてFlatで作成したスコアも追加することが出来ます。
<br>プレゼンテーションで楽譜を利用したい場合にご利用ください。

<br>

## 1. Flatで楽譜を作成またはアップロードする

Microsoft SwayにFlatで作成した楽譜の埋め込みを行うには、[Flatへのアカウント登録が必要です](https://flat.io/auth/signup)。
<br>アカウントを作成したら、MusicXMLファイルやMIDIファイルで楽譜をアップロードするか、Flat上で楽譜の作成を行ってください。
<br>初めてFlatで楽譜を作成する場合は、基本的な操作の[チュートリアル](/help/ja/music-notation-software/step-by-step-tutorial.html)があるので確認してみましょう。

<br>

## 2. HTMLコードをコピーする

HTMLコードをコピーするには、「**MYライブラリ**」か楽譜の編集画面で「**シェアする**」をクリックして「**ウェブ上に埋め込む**」を選択します。
<br> 自動で[埋め込みジェネレーター](https://flat.io/developers/embed/generator)が表示されます。

![HTMLコードをコピーする](/help/assets/img/embed/share-embed-generator.gif)

<br>

## 3. 楽譜の最適サイズ

ジェネレーターでは、楽譜が最適に表示されるために下の画像のように**Embed width: 100%**、**Embed height: 100%**に設定することをお勧めします。
この調整をしておくことで、Swayへの埋め込み時に簡単に楽譜のサイズを調整することが出来ます。

![Height 100%](/help/assets/img/embed/generator-height-100.png)

ジェネレーターページの「**Copy HTML code**」をクリックして、コードをコピーします。

<br>

## 3. Swayに挿入する

Swayに楽譜を挿入するには、**+**をクリックして**メディア**を選択し、**埋め込み**をクリックします。

![Insert an embed in Microsoft Sway](/help/assets/img/embed/microsoft-sway-insert-embed.png)

<br>

ジェネレーターでコピーしたコードをペーストして、お好みのサイズに楽譜のサイズを調整します。

![Insert custom code](/help/assets/img/embed/microsoft-sway-paste-code.png)

<br>

これでSwayに楽譜が埋め込まれました。埋め込まれた楽譜は再生して音を聞くことが出来ます。

![Interactive sheet music in Microsoft Sway](/help/assets/img/embed/microsoft-sway-inserted.png)

