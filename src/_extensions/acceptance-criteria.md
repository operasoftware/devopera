---
title: Acceptance Criteria
authors:
- tomasz-nowak
intro: 'This article provides acceptance criteria for extensions to be published in Opera Addons.'
license: cc-by-3.0
---

## Contents

- [Introduction](#intro)
- [One goal policy](#one-goal-policy)
- [Extension Metadata](#metadata)
- [Content](#content)
- [Development](#development)
- [Monetization and data processing](#monetization)

## Introduction {#intro}

Your extension must satisfy all the following acceptance criteria to be included in Opera Addons. When these criteria get more specific or restricted, authors of currently published extensions are required to upload updated packages.

All researchers and Opera users and are invited to report improper extensions by using the "Reported issues" functionality on respective addon pages.

## One goal policy {#one-goal-policy}

Your extension needs to have one, clearly stated purpose. Proper examples include:
- display a weather forecast after clicking a button
- show a popup if an item can be purchased in a better price somewhere else
- assist in downloading files from chosen websites

Examples of prohibited behaviours:
- additional bundling of "shopping assistants"

## Extension Metadata {#metadata}

- The summary must answer the question: what does your extension do? It must be composed of grammatically correct and complete sentences.
- The description must answer: 1) How do you use the extension? 2) What does the extension look like?
- The extension must perform as described.
- If the extension does something behind the scenes, then it must be described.
- If defined, the support webpage must be relevant to the extension.

## Content {#content}

- Icons of all sizes should be similar in style.
- Icons should not just consist of one or more words on a colored background. Refer to our [icon guidelines](/extensions/effective-icons/) for tips on how to make good icons.
- The icons, screenshots and graphic design must be of acceptable quality. Anti-aliased PNGs with transparent backgrounds are preferred. Note that interlaced PNG-files are currently not supported, due to a [limitation of the image library](http://effbot.org/imagingbook/format-png.htm) we’re using. Avoid this effect in your screenshots.
- Icons inside the address bar (page actions) cannot have a padlock shape.
- It must not unlawfully incorporate third party information, code or graphics.
- It must not include “Opera” in the title or any other Opera branding that can indicate the extension was created by Opera Software.
- It must comply with the [Terms of Service](https://addons.opera.com/developer/terms/).
- No external JavaScript is allowed. All JavaScript code must be contained in the extension. External APIs are ok.
- It must not specifically point to, or be related to, gambling or betting services. 
- Speed Dial extensions cannot just be a static picture linking to a website. They must provide valuable functionality, such as e.g. real-time info.
- Extensions cannot just consist of a button linking to a website, or of a popup with some static links pointing to a website. Extensions must provide valuable functionality, such as e.g. a transformation applied on a page when a button is clicked, real-time info in a popup, etc.
- Content inside popups must be optimized for display in a popup. The content must match the popup's size, and vertical scrolling should only be used if really necessary. Avoid horizontal scrolling inside popups.
- While linking to your own or other sites from your extension is fine, such links should be relevant and have a clear function. Don't overload the extension with promotional links.

## Development practices {#development}

- There should be no obvious bugs.
- Values in `manifest.json` must be sound and valid.
- Flash is not allowed.
- We must be able to review the code in a reasonable manner. Therefore, the code shouldn’t be obfuscated. Binary code is not ok.

## Monetization and data processing {#monetization}

- Ads in content scripts are not allowed.
- The extension must not change referral parameters, interfere with Opera monetization mechanisms or otherwise misappropriate traffic or revenues from other sources.
- The extension must not collect private information without authorization from the user.
- The extension must not send private data to an external store, for example through XHR.

If the above criteria are satisfied, your extension undergoes additional testing, to see that it works on all platforms (Windows, Mac and Linux).

An extension that does not satisfy the criteria or fails the testing will be rejected, and you will be given information on the [Submitted extensions](https://addons.opera.com/developer/) page. After you have fixed the problems, you can resubmit the extension by clicking the _Upgrade_ button next to the package name.
