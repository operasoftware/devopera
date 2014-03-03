---
title: Banking, the ActiveX Challenge
authors:
- zi-bin-cheah
tags:
- bank
- china
- activex
- ev
- npapi
- odin
license: cc-by-3.0
layout: post
---

<p>
I was invited to speak to a group of developers at the China Bank of Communications. It was an opportunity to get to know how the IT side of the banking sector works, and to ask them &quot;Why ActiveX?&quot;</p>

<p>First, some background - most if not all Chinese banks use ActiveX for their customer banking, so without ActiveX you can&#39;t do online banking in China. Similar issues are happening in South Korea and perhaps other places too. The ActiveX plugin is used to prevent the stealing of passwords by keylogger trojans.</p>

<p>After presenting, the discussion dived right into questions and answers; it was very stimulating and I learned a lot about the perspective of developers working with banks. During the discussion, the thousand dollar question was &quot;If not ActiveX, then what?&quot; I suggested three possible solutions:</p>

<ul>
<li>First, if your bank insists on using plugins, then use the <a href="http://dev.opera.com/articles/view/the-opera-plug-in-interface/">NPAPI</a> plugin interface. NPAPI is arguably more secure than ActiveX because it is solely an Internet plugin, while ActiveX can also tinker with your operating system (for example components in Office applications). Opera, Safari and Firefox all support the NPAPI plugin.</li>

<li>If ActiveX is used only to prevent keyloggers, then another solution might be to only allow users to type their login credentials using a virtual keyboard. This could however be a bane for accessibility.</li>

<li>The third option is to drop plugins altogether and use a one-time password generator. This crossed my mind with banks in Norway which I am provided with a calculator (I use Nordea Bank). A one-time password calculator will not have the spillover security concerns of ActiveX.</li>
</ul>
<p>
Options above are used to prevent password-snatching while a user is typing in the login credentials - before he or she clicks on the login button which sends the login credentials through a HTTPS secure channel.
</p>
<p>
On the HTTPS side of things, using <a href="http://en.wikipedia.org/wiki/Extended_Validation_Certificate">Extended Validation (EV)</a> certificates will give bank users better assurance since EV certificates goes through a much more rigorous process before it is given out. Browsers with EV support display more information for EV certificates than for previous SSL certificates. IE8, Firefox, Safari, Google Chrome and Opera support Extended Validation.
</p>
<p>During the discussion, I realized that many developers are sympathetic towards standards, including those implementing non-standard ActiveX. I used the word sympathetic because many developers I know are idealist and being idealists they want the world to be a better place. The world is a better place without non-standard code, but the reality is that developers earn their living through customers, and therefore maintaining the existing systems that they already use.</p>

<p>There is more than one way to solve the ActiveX dilemma in the banking industry. It&#39;s a legacy issue, for sure, but maybe the real problem is resistance to change?</p>

<p>Note: The PDF version of the presentation can be downloaded here, entitled <a href="http://people.opera.com/zibin/bankofcommunication_9thNov.pdf"> Web 2.0 and Web Standards</a>.</p>
