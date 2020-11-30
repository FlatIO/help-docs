---
title: 管理者の同意
description: Microsoft 365並びにMicrosoft Teamsの設定について確認しましょう。
nav: edu
pid: teams-setup-admin
permalink: ja/education/microsoft-teams/管理者の同意.html
---

Microsoft TeamsクラスをFlat for Educationと同期させると、Flat上で生徒用アカウントが自動追加・更新されます。この機能を有効にする方法を確認してみましょう。

## 管理者の同意を付与する

### リンクから直接同意を付与する

Microsoft TeamsクラスとFlatを同期するには、管理者の同意をFlat for Educationへ付与する必要があります。管理者の方は[こちらのリンク](https://flat.io/auth/azure/admin-consent)からFlat for Educationへ同意付与を行って下さい。
<br>


### Microsoft Azureコンソールから同意を付与する

他の教員が既にMicrosoftアカウントを使ってFlatへログインしている場合、Microsoft Azureコンソールに「[エンタープライズアプリケーション](https://portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps)」としてFlatが表示されます。
Flatのページを開いて、「セキュリティ」の欄にある「**アクセス許可**」をクリックします。このアクセス許可のページで、FlatをMicrosoft Teamsで利用するためのアクセス許可を設定することができます。Flat for Educationへ同意を付与するには「管理者の同意を与えます」をクリックして下さい。

![Azure 管理者コンソール](/help/assets/img/edu-ja/microsoft-azure-console-admin-consent.png)
<br>

## アクセス許可の詳細

各アクセスが何のために必要なのか、こちらでご確認ください。

* **User.ReadBasic.All**…生徒がログインする前に、教員側に生徒のプロフィール写真と名前を表示するために必要なアクセスです。

* **EduRoster.ReadBasic** (delegated)、**EduRoster.Read.All** (application)、**Member.Read.Hidden**…Microsoft Teamsのクラス情報からFlat for Education上に生徒アカウントを追加・更新するために必要なアクセスです。

* **EduAssignments.ReadWrite** (delegated)、**EduAssignments.ReadWrite.All** (application)…ユーザーの課題や評価の閲覧と編集の許可です。課題作成や管理に必要なアクセスです。

Flatは、[Flat for Educationアカウント作成時](/help/ja/education/microsoft-teams/Flatにクラスを作成.html)に選択されたクラス以外のクラスの情報にアクセスすることはありません。
Flatに同意が付与されると、教員は担当クラスのみFlatと同期することができます。Flatが必要でない情報や同意されてない情報へアクセスすることはありません。