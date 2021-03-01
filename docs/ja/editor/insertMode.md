---
title: 挿入モード
description: 挿入モードを利用して音符を入力すると、それ以降の音符は削除されずに全て右にずれます。挿入した音符を削除すると、それ以降の音符は全て左にずれます。音符や休符の挿入は、「音符」ツールバーの音符のアイコンをクリックしてください。
nav: editor
pid: insertmode
permalink: ja/music-notation-software/insert-mode.html

action.toggleInsertMode: true
---

| ツールバー | **音符** |
| アイコン | ![Insert Mode](https://prod.flat-cdn.com/img/icons/editorActions/insertMode.svg){:.tb} |
| ショートカット | <span class="kb-container"><span class="kb">I</span></span> |
{:.feat}


通常モードの場合、音符を入力するとそれ以降の音符に上書きされます。同じように、音符を削除するとその分の休符が小節内に追加されます。

![通常モード](/help/assets/img/editor-ja/replaceMode.gif)

挿入モードを利用すると、入力された音符の分だけそれ以降の内容が右にずれます。
<br>音符を削除するとそれ以降の内容は左にずれます。

![挿入モード](/help/assets/img/editor-ja/insertMode.gif)

挿入モードを利用中は、青く示されている音符や休符を変更することはできません。
<br>音の長さを変更すると、青い部分ではなく挿入される音符や休符の長さが変更されます。 

![挿入モードと音の長さ](/help/assets/img/editor-ja/insertMode-duration.gif)

同様に、臨時記号を設定すると挿入される音符に反映されます。 
![挿入モードと臨時記号](/help/assets/img/editor-ja/insertMode-accidental.gif)

音程のない楽器の楽譜を作成している場合も、挿入する音符の符頭を選択することができます。
![挿入モードと無音程楽器](/help/assets/img/editor-ja/insertMode-notehead.gif)

挿入モードを利用中は、[カーソルの位置に休符を追加](/help/ja/music-notation-software/insert-rest.html)することもできます。