---
title: Be Lazy, Stay Creative, Automate The Web
authors:
- karlcow
tags:
- operawatir
- quality-assurance
- web-automation
- testing
- user-scenario
- web-agency
license: cc-by-3.0
---

<p>The web helps us manage interactions and exchange messages. In many cases, these interactions happen from machine to machine. Sometimes we (humans) become the machine. If you have been working in a web agency, you know that. How many hours did you spend testing a website? Browsing each page one by one to check if everything was working accordingly to the notebook. How many times did you have to repeat the same process for checking the Web site for each release, each version of the back-end before pushing the site on production?</p>

<p>Today, <a href="https://dev.opera.com/author/47773442">Stuart Knightley</a> published an article on <a href="https://dev.opera.com/articles/view/opera-watir-tutorial/">how to use OperaWatir</a>. <a href="https://www.opera.com/developer/tools/operawatir/">OperaWatir</a> is a tool to control the Opera browser with <a href="http://www.ruby-lang.org/">Ruby</a> scripts. Opera has been using OperaWatir for <a href="http://my.opera.com/core/blog/2009/03/06/test-automation-with-operawatir">testing the implementation</a> of our browser engine on many different platforms. This tool can be used in other contexts.</p>

<p>Computers are good for repetitive tasks, let&#8217;s use them.</p>

<h3 id="web_agency_quality_assurance_team">Web Agency Quality Assurance Team</h3>

<p><strong>Use OperaWatir for testing all features of a Web site before deployment</strong></p>

<p>In my previous life, I worked for a web agency in Montréal called <a href="http://lab.pheromone.ca/">Pheromone</a>. To better serve their clients, the agency started to build a strict <abbr title="Quality Assurance">QA</abbr> process. A website&#39;s code is committed to a <a href="http://en.wikipedia.org/wiki/Revision_control">revision control system</a> on a development server, then branches are pushed to Quality Assurance for control. Once the Web site has been checked in QA, it is pushed on a staging server for final agreement of the client, before being pushed on the production server, the public release.</p>

<p>Many of these tasks involve repetitive human interactions. For example, when you design a social network site, you might want to test things like</p>

<ul>
<li>Log in/Log out</li>
<li>create account/delete account</li>
<li>fill the profile form</li>
<li>modify the profile</li>
<li>post/delete a message</li>
<li>create a group</li>
<li>etc.</li>
</ul>

<p>All these tasks are not interesting for a human being when done for each releases. They become boring and then they lead to mistakes. The employees in a company can do more creative stuff than just pushing buttons. They also take a lot of time which ends on your client billing and finally make the business less competitive than those with lower quality requirements. Pheromone used automated testing for some of these repetitive tasks.</p>

<h3 id="web_agency_deployment_team">Web Agency Deployment Team</h3>

<p><strong>Use OperaWatir for automating the creation of an environment</strong></p>

<p>This scenario is very similar to the QA one. In a deployment chain, some <abbr title="Content Management System">CMS</abbr> lack features to automate the process of making database backups, creating a clean install of a system with some specific parameters, etc. The developer or the operations engineer have to spend time in front of the browser pushing buttons in a Web UI to deploy the product. Once again, it is not a very interesting task and a loss of time. We have better things to do. All of these could be handled by controlling the browser with a few Ruby scripts using OperaWatir.</p>

<h3 id="api_less_web_sites">API-less Web sites</h3>

<p><strong>Use OperaWatir for grabbing web data automatically and recurrently</strong></p>

<p>There is always this cool website which has interesting data or content. Unfortunately, the site has no feeds, no API giving an access to data under a form which doesn&#8217;t require to go check on the Web site itself. Here are a few scenarios when web automation helps:</p>

<ul>
<li>You might want to check every day the price of a flight ticket and send an alert when it reaches a reasonable price.</li>
<li>Send the cinema schedule of a Web page by email every week or create a schedule of things you could do tonight with information collected every day on different sites.</li>
<li>Grab the main news of your favorite online newspapers and aggregates it in one document. </li>
</ul>

<p>These are often doable with website scraper going through the HTML code, but there are cases where the links and content are inaccessible because of scripting. OperaWatir offers a way to access what the browser sees. It becomes easier for someone to create a script to access this information.</p>

<h3 id="what_about_you">What about you?</h3>

<p>Tell us in the comments or on your blog about the way you are using or will use <a href="https://www.opera.com/developer/tools/operawatir/" title="OperaWatir | Opera Developer Tools">OperaWatir</a>. Be creative and do not lose time with repetitive tasks. </p>
