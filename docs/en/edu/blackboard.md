---
title: Using Blackboard with Flat for Education
ptitle: Using Flat with Blackboard Learn to create music notation assignments
description: Discover how to use Flat in Blackboard Learn to create seamless assignments from music theory to music compsition in your favorite LMS.
nav: edu
pid: blackboard
permalink: en/education/blackboard
---

<div class="fll" style="margin: 15px 15px 15px 0"><img src="/help/assets/img/edu/logo-blackboard-learn.png" alt="Flat with Blackboard" style="height:48px;border:0"></div>
Using Blackboard Learn for your music courses? [Flat for Education](https://flat.io/edu) is the best solution to **create any music notation activity in Blackboard**. Flat provides you seamless integration with Blackboard: SSO (Single Sign-in) and rostering and assignments with Flat.

<div class="btn-cta-wrapper"><a href="https://flat.io/edu/signup?ref=help-blackboard" class="btn-cta-site">Sign up to Flat for Education</a></div>

On this help page you will discover how to:

* [Setup your Blackboard Integration](#setup-your-blackboard-learn-integration)
* [Activities with Flat for Education in Blackboard Learn](#activities-with-flat-for-education-in-blackboard-learn)

*If you need any help to configure or use Blackboard with Flat for Education, please contact us at [edu@flat.io](mailto:edu@flat.io).*

## Setup your Blackboard Learn Integration

It only takes a couple of seconds to set up Blackboard for your [Flat for Education account](https://flat.io/edu).

1) Go to your **[Account Settings > Integrations > LTI](https://flat.io/class?eduSetup=lti)** and copy the **Consumer Key** and **Shared Secret**. Keep these details private, they will allow Blackboard Learn to access to your Flat for Education school account.

2) **As a Blackboard Learn admin**, open your Blackboard website, then go to your "**System admin**, under "**Integrations**", click on "**LTI Tool Providers**", then "**Register Provider Domain**".

![System admin > Integrations > LTI Tools Providers](/help/assets/img/edu/blackboard-admin-integ-lti.png)


![Register provider domain](/help/assets/img/edu/blackboard-admin-lti-register-domain-tab.png)

3) Register the following provider domain [*(see a screenshot of the full page)*](/help/assets/img/edu/blackboard-register-provider-domain-full-page.png):

* Provider domain status:
  * **Provider domain**: `flat.io`
  * **Provider Domain Status**: `Approved`
* Default Configuration:
  * **Default Configuration**: `Set globally`
  * **Tool Provider Key** and **Tool Provider Secret**: Your credentials from step 1)
* Institution policies:
  * **Send User Data**: `Send user data only over SSL`
  * **User Fields to Send**: You can choose here which data and PII your LMS will send to our servers. The minimum required information is `Role in Course`. Optionally, you can send a `Name` and `Email Address` if you want to have them displayed in our apps, otherwise Flat for Education can work without any PII.

Then click on "**Submit**" to save the domain configuration.

4) To create a **Course Content Tool placement**, click on the arrow next to our domain and choose "**Manage placements**", then click on the **Create placement** button:

![Manage placements](/help/assets/img/edu/blackboard-admin-go-to-placements.png)


![Create placement](/help/assets/img/edu/blackboard-admin-placements-create-button.png)


* Placement Information:
  * **Label**: `Flat for Education`
  * **Handle**: `flat-edu-course-content` (that can be whatever you want)
  * **Availability**: `Yes`
  * **Type**: `Course content tool` with `Allows grading`.
  * **Launch in New Window**: We recommend to enabled this option. Flat for Education will be opened in a full tab, which is a good idea to have a better experience, especially on a small screens.

* Tool provider information
  * **Tool Provider URL**: `https://flat.io/lti/launch`
  * **Tool Provider Key** and **Tool Provider Secret** will be already set from your global settings.

Then click on "**Submit**" to save the course content tool configuration.

## Activities with Flat for Education in Blackboard Learn

To create a new activity using Flat for Education in your Blackboard Learn instance, open a course and turn the **Edit mode** on.

![Turn editing mode on](/help/assets/img/edu/blackboard-course-edit-mode-on.png)

Under the **Content** page, click on **Build content** and choose **Flat for Education**.

![Build content](/help/assets/img/edu/blackboard-course-content-build-button.png)

On the Blackboard content creation page, you can add at least a **Name** for the activity. Optionally you can enable **Grading** to have your grades automatically pushed to Flat for Education. Click on **Submit** to sabe the assignment on Backboard.

Once your content is created on your Blackboard site, open it to complete the Flat for Education configuration. Choose if you want to create a **[Score assignment](/help/en/education/assignments-activities.html#1-name-your-assignment)** or a **Worksheet assignment** and the different settings. Make sure you click on **Publish** to make the assignment available to your students.

![Assignment type](/help/assets/img/edu/blackboard-course-choose-assignment-type.png)

That's all, your assignment is ready! As soon as your student open the assignment from your Blackboard course, you will see their names listed on the Flat for Education assignment page, [have access to their work and be able to give them live feedback](/help/en/education/review-assignments-activities.html).