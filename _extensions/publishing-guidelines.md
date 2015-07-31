---
title: Publishing Guidelines
authors:
- andreas-bovens
license: cc-by-3.0
---

## Contents

1. [Create your extension](#create)
2. [Prepare your details before submission](#prepare)
	- [Pick a good name](#good-name)
	- [Choose a version number](#version-numbers)
	- [Create an extension support page (optional)](#support-webpage)
	- [Choose a category](#categories)
	- [Choose a license](#chooselicense)
	- [Write a good summary](#good-summary)
	- [Write a good description](#good-description)
	- [Test your extension](#testing)
	- [Create a good icon](#good-icons)
	- [Take good screenshots](#good-screenshots)
3. [Submit your extension for review](#submit)
	- [Acceptance criteria](#acceptance-criteria)
4. [Your extension is reviewed](#reviewed)
5. [When the extension satisfies all criteria, it will be published](#published)

## Introduction

<figure block="figure">
	<img elem="media" src="/static/images/publishing-process.png" alt="Overview of the publishing process — development, submission, testing, then publishing">
	<figcaption elem="caption">Figure 1: Overview of the publishing process — development, submission, testing, and publishing.</figcaption>
</figure>

This guide explains how to publish your extension, which is a multi-step process that begins when you [submit your extension for review](https://addons.opera.com/developer/upload/). The extension moderators then test the extension and publish it in our [Opera extensions catalog](https://addons.opera.com/addons/extensions/). In case there are issues, they reject the extension and send it back to the developer to work on it more and submit it again (see Figure 1).

We want published Opera extensions to be of a consistently high quality, so we have created this guide for you to follow.

## 1. Create your extension {#create}

See our [Getting started tutorial](/extensions/getting-started/) and the rest of the documentation to build your own extension.

## 2. Prepare your details before submission {#prepare}

Before you submit your extension, you should do the following to prepare, and get all the details you need together. The following sections contain many hints and tips for creating effective descriptions, screenshots, etc. If you have been through all these before and just need a checklist to check your details against, go straight to the [Submit your extension for review](#submit) section.

### Pick a good name {#good-name}

Think carefully about the name of your extension. It needs to be memorable, short and appropriate, so it is easy for users to find and remember.

### Choose a version number {#version-numbers}

The version number can consist of one to four dot-separated integers. Examples are `1`, `1.3`, `2.0.4`, and `3.5.8.98`. Note that non-zero integers cannot start with 0 — in other words, `064` is not allowed. For more details, see the [version documentation section](/extensions/manifest/#version).

### Create an extension support page (optional) {#support-webpage}

You should seriously consider creating a support page for your extension. We’d recommend you include news of new releases and updates, detailed usage instructions, a portfolio of your other work, and contact details in case anyone needs to contact you with queries.

The support webpage should be relevant to your extension. If it is not, your extension may be rejected.

### Choose a category {#categories}

Choose one of the following categories for your extension:

- Accessibility
- Appearance
- Entertainment
- Games
- Music
- News & Blogging
- Pictures
- Productivity
- Reference
- Shopping
- Social
- Travel
- Weather
- Web Development

### Choose a license {#chooselicense}

Choose the distribution license for your extension — the Opera Extensions site allows you to choose between two when uploading.

With the [Opera hosting license](https://addons.opera.com/developer/license/hosting/) you keep all content rights, but allow Opera to make the extension available free of charge to users worldwide. Opera can make changes to the extension, if required to make it work properly.

Alternatively, if you prefer an Open Source license that allows anyone to build on your work, you can choose the [Apache 2.0 license](http://www.apache.org/licenses/LICENSE-2.0.html).

### Write a good summary {#good-summary}

The summary should briefly explain what your extension does. This will be shown on the front page of the catalogue and in the extensions manager in the browser. Keep it short and sweet — try summarizing its purpose and functionality in one sentence.

#### Example:

> Video Downloader allows you to easily save all your favorite videos directly as MOV and AVI files, so they are ready to be watched on any device.

### Write a good description {#good-description}

The description provides more detail about your extension to supplement the summary. It shouldn’t just be a copy of the summary: it should aim to describe what your extension looks like, what its purpose is, and how you use it. You could also choose to write about the main features, the target audience, and what is coming in future versions.

#### Example:

> Video Downloader is the most advanced tool to keep hold of your favorite videos.
>
> With Video Downloader you can easily save all your favorite videos directly as MOV and AVI files, so they are ready to be watched on any device. Video Downloader also fetches subtitles for the video from different sources, and you can set it up to automatically download subtitles in any language. Video Downloader also lets you save a series of videos in bulk and turn them into a single file.
>
> Video uploader works especially well on low bandwidth connections as it compresses the files before sending them, increasing the download speed up to 60%.
>
> Simply click on the Video Downloader button when visiting the page that contains the video you want to download, then select advanced settings or just press “Continue” to download the single video file.

### Test your extension {#testing}

You should test your extension on Mac as well as Windows, and try it out in low and high bandwidth scenarios. Also make sure it doesn’t unnecessarily slow down the browser, or otherwise impacts the user experience in a negative way.

### Create a good icon {#good-icons}

You also need to have a good icon prepared for your extension. For more information on creating a good icon, along with icon templates, read [Creating effective Opera Extension icons](/extensions/effective-icons/).

### Take good screenshots {#good-screenshots}

You need to provide screenshots of your extension. We recommend one screenshot to show how the extension works and one to show how it looks in the browser. Your screenshots should be tidy and clearly illustrate the main features of your extension. They should appeal to your potential users.

You **should:**

- Have a screenshot size of 612 × 408 pixels. This is the preferable screenshot size. The maximum you go can go with it is 800 × 600 pixels (though we would recommend you stick with 612 × 408 pixels if possible).
- Take your screenshots with a white background.
- Disable other extensions you have installed, so that yours can take center stage.
- Make sure to include the relevant part of your functionality.
- Show the location of the extension in the browser UI. For example, if your extension has a button on the toolbar, focus the screenshot on this location. Make a screenshot of the extension in action. In an image editor, center the image and crop the screenshot, leaving some whitespace if necessary.
- Show how the extension interacts with a webpage, if this is the case. Make sure the screenshot highlights the functionality of your extension and not merely the webpage.
- Use the default UI of the browser (consider using a clean install.)

You **should not:**

- Make the screenshots larger than 800 × 600 pixels.
- Show any page or background tab that is not relevant to the extension.
- Include superfluous content.
- Show other extensions or other customizations.

## 3. Submit your extension for review {#submit}

To submit your extension, you need to head over to the [Opera extensions repository](https://addons.opera.com/addons/extensions/), make sure you are signed in, and then upload your extension and associated files and details using the [Upload Extensions form](https://addons.opera.com/developer/upload/). There are a quite a few options to look through in this multi-page process.

The final page gives you a chance to review all your choices before submitting your extension.

## 4. Your extension is reviewed {#reviewed}

When you submit your extension, we will evaluate it according to a set of acceptance criteria. If it doesn't satisfy all of them, the extension will be rejected. You can track the status of your submitted extensions at the [Submitted extensions](https://addons.opera.com/developer/) page.

### Acceptance criteria {#acceptance-criteria}

Your extension must satisfy the following acceptance criteria:

- It must perform as described.
- There should be no obvious bugs.
- Icons of all sizes should be similar in style.
- Icons should not just consist of one or more words on a colored background. Refer to our [icon guidelines](/extensions/effective-icons/) for tips on how to make good icons.
- The icons, screenshots and graphic design must be of acceptable quality. Anti-aliased PNGs with transparent backgrounds are preferred. Note that interlaced PNG-files are currently not supported, due to a [limitation of the image library](http://www.pythonware.com/library/pil/handbook/format-png.htm) we’re using. Avoid this effect in your screenshots.
- Icons inside the address bar (page actions) cannot have a padlock shape.
- If defined, the support webpage must be relevant to the extension.
- It must not collect private information without authorization from the user.
- It must not send private data to an external store, for example through XHR.
- It must not unlawfully incorporate third party information, code or graphics.
- It must not inclde “Opera” in the title or any other Opera branding that can indicate the extension was created by Opera Software.
- It must comply with the [Terms of Service](https://addons.opera.com/developer/terms/).
- No external JavaScript is allowed. All JavaScript code must be contained in the extension. External APIs are ok.
- Values in `manifest.json` must be sound and valid.
- Flash is not allowed.
- Ads in content scripts are not allowed.
- Speed Dial extensions cannot just be a static picture linking to a website. They must provide valuable functionality, such as e.g. real-time info.
- Extensions cannot just consist of a button linking to a website, or of a popup with some static links pointing to a website. Extensions must provide valuable functionality, such as e.g. a transformation applied on a page when a button is clicked, real-time info in a popup, etc.
- Content inside popups must be optimized for display in a popup. The content must match the popup's size, and vertical scrolling should only be used if really necessary. Avoid horizontal scrolling inside popups.
- While linking to your own or other sites from your extension is fine, such links should be relevant and have a clear function. Don't overload the extension with promotional links.
- We must be able to review the code in a reasonable manner. Therefor, the code shouldn’t be obfuscated. Binary code is not ok.
- The summary must answer the question: what does your extension do? It must be composed of grammatically correct and complete sentences.
- The description must answer: 1) How do you use the extension? 2) What does the extension look like?

If the above criteria are satisfied, your extension undergoes additional testing, to see that it works on all platforms (Windows, Mac and Linux).

An extension that does not satisfy the criteria or fails the testing will be rejected, and you will be given information on the [Submitted extensions](https://addons.opera.com/developer/) page. After you have fixed the problems, you can resubmit the extension by clicking the “Upgrade” button next to the package name.

## 5. When the extension satisfies all criteria, it will be published {#published}

If your extension is outstanding, it may be placed in the “[Recommended](https://addons.opera.com/en/extensions/)” section.
