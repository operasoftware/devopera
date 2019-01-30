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

All researchers and Opera users are invited to report improper extensions by using the "Reported issues" functionality on respective addon pages.

## One goal policy {#one-goal-policy}

Your extension needs to have one, clearly stated purpose. Proper examples include:

- Display a weather forecast after clicking a button.
- Show a pop-up if an item can be purchased for a better price somewhere else.
- Assist in downloading files from chosen websites.

Examples of prohibited behaviors:

- Additional bundling of "shopping assistants".
- A sidebar extension with a calculator includes a website blocker.

The [browser action button](https://developer.chrome.com/extensions/browserAction) should only serve as a shortcut to the extension's main functionality. For instance, if an extension's single purpose is for downloading videos, clicking the browser action icon should launch the download process and not another functionality.

## Extension Metadata {#metadata}

- The name cannot suggest it was created by a non-affiliated company. For example, instead of "X Improver", name it: "Improver for X™".
- The summary must answer the question: what does your extension do? It must be composed of grammatically correct and complete sentences.
- The description must answer: 1) How do you use the extension? 2) What does the extension look like?
- The extension must perform as described.
- If the extension performs background actions, then those actions must be described.
- If defined, the support webpage must be relevant to the extension.

## Content {#content}

- Icons of all sizes should be similar in style.
- Icons should not just consist of one or more words on a colored background. Refer to our [icon guidelines](/extensions/effective-icons/) for tips on how to make good icons.
- The icons, screenshots, and graphic design must be of acceptable quality. Anti-aliased PNGs with transparent backgrounds are preferred. Note that interlaced PNG-files are currently not supported due to a [limitation of the image library](http://effbot.org/imagingbook/format-png.htm) we're using. Please avoid interlaced effects in your screenshots.
- Icons inside the address bar (page actions) cannot have a padlock shape.
- It must not unlawfully incorporate third party information, code or graphics.
- It must not include "Opera" in the title or any other Opera branding that can indicate the extension was created by Opera Software.
- It must comply with the [Terms of Service](https://addons.opera.com/developer/terms/).
- No external JavaScript is allowed. All JavaScript code must be contained in the extension. External APIs are ok.
- It must not specifically point to, or be related to, gambling or betting services. 
- Extensions cannot replace Opera's default start page.
- Extensions cannot just consist of a button linking to a website, or of a pop-up with some static links pointing to a website. Extensions must provide valuable functionality, such as e.g. a transformation applied on a page when a button is clicked, real-time info in a pop-up, etc.
- Content inside pop-ups must be optimized for display in a pop-up. The content must match the pop-up's size, and vertical scrolling should only be used if really necessary. Avoid horizontal scrolling inside pop-ups.
- While linking to your own or other sites from your extension is fine, such links should be relevant and have a clear function. Don't overload the extension with promotional links.

## Development practices {#development}

- There should be no obvious bugs.
- Values in `manifest.json` must be sound and valid.
- Flash is not allowed.
- We must be able to review your code, so it can't be obfuscated or minified (this rule doesn't apply to third-party libraries - see other points below). If you do not want the code to be public, then please post a link where we can download the unobfuscated code, and please provide detailed instructions on how to produce the same obfuscated results. Please note that reviewing obfuscated code is more labor-intensive for us and your extension may be handled with a lower priority.
- There must be no unused files.
- There must be no redundant permissions requested or unnecessary manifest entries.
- Well-known third-party libraries must be in a genuine and in an unchanged form. They should be acquired from the vendor's official website or a CDN.
- These libraries must be regularly upgraded to their recent versions which contain no known security vulnerabilities.

## Monetization and data processing {#monetization}

- Ads in content scripts are not allowed.
- The extension must not change referral parameters, interfere with Opera monetization mechanisms or otherwise misappropriate traffic or revenues from other sources.
- The extension must not collect private information without authorization from the user.
- The extension must not send private data to an external store, for example through XHR.

If the above criteria are satisfied, your extension undergoes additional testing, to see that it works on all platforms (Windows, Mac and Linux).

An extension that does not satisfy the criteria or fails the testing will be rejected, and you will be given information on the [Submitted extensions](https://addons.opera.com/developer/) page. After you have fixed the problems, you can resubmit the extension by clicking the _Upgrade_ button next to the package name.
