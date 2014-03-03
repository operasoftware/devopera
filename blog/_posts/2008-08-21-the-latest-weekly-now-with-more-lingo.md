---
title: The latest weekly, now with more lingo
authors:
- david-storey
tags:
- localisation
- localization
- dragonfly
license: cc-by-3.0
layout: post
---

<p>We’ve just put the latest build of Opera Dragonfly on the <a href="https://dragonfly.opera.com/app/weekly">weekly branch</a>.  New for this release is the infrastructure for localisation.  We have plans to release Opera Dragonfly in a number of languages, and this release is focused on testing the infrastructure we’ve put in place.  It is supplied with test localisations in Japanese and German.  These localisations are examples and not the finalised text for those languages. Opera Dragonfly will load the required language file, depending on the language of your browser.</p>

<p>After this release we are focusing on testing the features added to the new version of the Scope protocol, which will be included in Core-2.2.  We need to make sure these work and there are no major bugs before Core-2.2 goes into code freeze.  As such there will be no weeklies for a while, until that work has been carried out.  After this we can start working on the rest of the features planned for alpha 3, including DOM editing.</p>

<p>The next version of Scope should improve the user experience considerably as Opera Dragonfly will be able to detect the currently focused tab or window, which means there will be less steps to start up.  We hope to also allow the user to select an element n the page and have Opera Dragonfly go straight to that element in the DOM inspector. We will also have the basics of the HTTP inspector.</p>
