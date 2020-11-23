---
title: Authorize Flat in Microsoft 365
description: Documentation for Microsoft 365 and Microsoft Teams setup
nav: edu
pid: teams-setup-admin
permalink: en/education/microsoft-teams/admin-consent.html
---

Adding a Microsoft Teams class on Flat for Education will automatically provision or update your students' accounts into your private Flat for Education website, then enroll them in your Flat class. Discover on this page how to enable this feature for your Microsoft 365 domain.

## Grant admin consent

### Using our direct link

To synchronize one or multiple Teams class, Flat for Education needs some authorizations that only an admin can grant. As an admin, you can [use the following link to give consent to use Flat for Education](https://flat.io/auth/azure/admin-consent).

### From the Microsoft Azure Console

If someone from your school already signed in with their Microsoft Account, you will also have the app listed in your Microsoft Azure Console, under "[Enterprise applications](https://portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps)". Open this page, then go to Security > Permissions. You will see the existing granted authorizations and be able to grant additional permissions to use Flat with Teams. Click on "Grant admin consent" to authorize Flat for Education.

![Azure Admin console](/help/assets/img/edu/microsoft-azure-console-admin-consent.png)

## Permissions details

You are wondering why we request these permissions. Here is a detailed list for you:

* **User.ReadBasic.All**: We use it to display the pictures of the accounts on the Teacher's dashboard, as well as students' names, before the students sign in.
* **EduRoster.ReadBasic** (delegated) and **EduRoster.Read.All** (application) plus **Member.Read.Hidden**: We use this permission to fetch the classes list and memberships and create/update corresponding accounts on Flat for Education.
* **EduAssignments.ReadWrite** (delegated) and **EduAssignments.ReadWrite.All** (application): Read and write users' view of class assignments and their grades. We will use this permission for create Flat for Education assignments in the future in the Teams classes.

We only access and read information from the chosen classes [when you setup your Flat for Education account](/help/en/education/microsoft-teams/setup-course.html). Once Flat has been authorized, teachers will only be able to synchronize their own classes. We will never access information we do not need and that you did not consent.