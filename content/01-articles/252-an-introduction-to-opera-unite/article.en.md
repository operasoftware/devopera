Title: An introduction to Opera Unite
----
Date: 2009-06-16 07:01:41
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<h2>Introduction</h2>
<p>The time has come to raise the curtain on yet another exciting new Opera technology release. The drums are playing a low roll, which increases in intensity as the onlookers stare in antici … <em>pation</em>; the lights begin to come up, along with the curtain; the stage is all set for passion and the energy of today’s performance; the narrator spoils the mood by talking through it (that’s me…)</p>

<p>So what is Opera Unite? In a nutshell, Opera Unite is a collaborative technology that uses a compact server inside the Opera desktop browser to share data and services. You can write applications — in the form of <strong>Opera Unite Services</strong> — that use this server to serve content to other Web users.</p>

<p>Why is this exciting? Well, it allows you to interact with contacts, sharing data and services without the need for any third-party Web sites/applications to be involved at all. Think of the possibilities:</p>

<ul>
<li>You could play games and chat to your peers directly using the service</li>
<li>You could share photos and videos with peers, straight off your hard drive, without needing to use third-party Web applications</li>
<li>You can work collaboratively with others on files such as data and images (think wikis or drawing applications), and then work with those files offline if you wish, before sharing them again at a later date</li>
<li>You could even start creating some crazy hacks, like an application that controls a remote car across the Web (I’ve seen a rough prototype in action)</li>
</ul>

<p>Itching to know more? Good. In this article I first present a tour of Opera Unite, with details of how to activate it, how to install a Opera Unite service, and how to use those services to collaborate with your friends and colleagues. If you want to find out more about developing your own Opera Unite Services, read our <a href="http://dev.opera.com/articles/view/opera-unite-developer-primer/">Opera Unite developer&#39;s primer</a>.</p>

<h2>Getting Opera Unite up and running</h2>

<p>So, it’s time for you to get your hands dirty, and starting playing with some Opera Unite Services.

<h3>Installation</h3>

<p>The first thing you need to do, if you haven’t already, is download the <a href="http://www.opera.com/browser/">latest version of the Opera for desktop</a>. This is our regular browser so what’s different? Well, nothing immediately jumps out, but rest assured that you’ve got a lot of new power under the hood with Opera Unite Services.</p>

<p>As we mentioned before, with Opera Unite you can run Opera Unite Services in the browser and collaborate with your friends. So let&#39;s try this out, by installing a service from the <a href="http://unite.opera.com/">Opera Unite home page</a> — navigate to this page now, and click on one of the services at the bottom of the page to display more information about that service (see Figure 1). Click on the <em>Launch Service</em> button and it will either start to download — in which case you’ll see a progress box, or it will inform you that the service is already installed and give you instructions to access it from your browser, or reinstall it if you so wish.</p>

<div>
<img src="http://forum-test.oslo.osa/kirby/content/articles/252-an-introduction-to-opera-unite/figure1.jpg" alt="an Opera Unite service on the Opera Unite home page" />
<p class="comment">Figure 1: An Opera Unite service on the Opera Unite home page</p>
</div>


<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/252-an-introduction-to-opera-unite/figure2.jpg" alt="The Opera Unite icon in the browser UI" />
<p class="comment" style="width:170px;">Figure 2: The Opera Unite icon in the browser UI</p>
</div>


<p>Once the install has finished, you should be asked if you want to start Opera Unite. If not, you can start Opera Unite by selecting <em>Tools &gt; Opera Unite Server &gt; Enable Opera Unite</em>, or clicking the Opera Unite button in the bottom left corner of the browser (see Figure 2) and selecting <em>Enable Opera Unite</em>.
</p>

<h3 style="clear:both;">Logging in to Opera Unite</h3>

<p>Regardless of which of the three different ways mentioned above that you used to enable Opera Unite, you should now be looking at the first step of a wizard asking you to <em>Log in into your Opera account</em>, as seen in Figure 3.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/252-an-introduction-to-opera-unite/figure3.jpg" alt="The Opera Unite log in screen" />
<p class="comment">Figure 3: The Opera Unite log in screen</p>

<p>To use Opera Unite Services, you need to log into Opera. This is the same login that you use to log in to <a href="http://my.opera.com">My Opera</a>, <a href="http://dev.opera.com">Dev Opera</a>, or <a href="http://www.opera.com/link/">Opera Link</a>.</p>

<p>Go ahead and fill in your details now. If you haven’t got an Opera log-in already, you can create one by clicking the “I don’t have an account yet” button, and filling in a slightly longer — but still self-explanatory — form. Click <em>OK</em> to continue, and you should now be logged in to Opera Unite! You&#39;ll know you are logged in sucessfully when the icon shown in Figure 2 lights up.</p>

<h3>Choosing an Opera Unite name for your computer</h3>

<p>The next thing you should do is click on the Figure 2 icon and select the <em>Configure...</em> option. You’ll now be prompted to choose a name for your computer from a drop-down list, as shown in Figure 4 (you can also choose to disable Opera Unite from this screen; don&#39;t worry about the other option for now).</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/252-an-introduction-to-opera-unite/figure4.jpg" alt="choosing an Opera Unite identification name for your computer" />
<p class="comment">Figure 4: Choosing an Opera Unite identification name for your computer</p>

<p>This name is basically your computer’s identity on the Opera Unite system — this is the URL that your contacts can go to if they want to make use of your Opera Unite Services, and share them with you.</p>

<p class="note">The URL system used to involve a special protocol of <code>unite://</code> for the service owners, but this has since been changed to use simple <code>http://admin.</code>. So the URL pattern is still <code>http://mymac.chrismills.operaunite.com/opera_messenger/</code>, for example, for a service viewed by one of your contacts, or <code>http://admin.mymac.chrismills.operaunite.com/opera_messenger/</code> if you are viewing the service as an administrator, which will give you the service admin page.</p>

<p>Click Finish.</p>

<h2>Finding your way around Opera Unite</h2>

<p>The first place to go is the screen shown in Figure 5 — this is your Opera Unite homepage, and you can get to it by:</p>

<ul>
  <li>Clicking the Opera Unite icon in the bottom left hand corner of your browser (remember Figure 2) and selecting <em>My Opera Unite Page</em></li>
  <li>Selecting <em>Tools &gt; Opera Unite Server &gt; My Opera Unite Page</em></li>
</ul>

<img src="http://forum-test.oslo.osa/kirby/content/articles/252-an-introduction-to-opera-unite/figure5.jpg" alt="Opera Unite enabled and ready to use" />
<p class="comment">Figure 5: Opera Unite now enabled and ready to use</p>

<p class="note">Note that there are a few preinstalled services in the alpha build. We may or may not include preinstalled services in the final version but would like to hear your feedback on this point.</p>

<p>Your home page contains:</p>

<ul>
  <li>The URL that your friends can navigate to, to get to your services; as mentioned before, in my case it is <strong>http://mymac.chrismills.operaunite.com/)</strong>. This is in the top-right of the screen</li>
  <li>A link to the <a href="http://unite.opera.com">Opera Unite homepage</a>, where you can download more services and find more information — <em>Get more services</em> </li>
  <li>A list of the services you have running</li>
  <li>A list of the services some of your friends are running</li>
</ul>

<p>The next thing to know about is the <em>Opera Unite Services</em> panel — this appears on the left of your screen when you select the <em>Manage Services</em> option from the Opera Unite menu (see Figure 6). You can also get to it by clicking the Opera Unite icon in the icon tray on the very left of the browser window, or by selecting <em>Tools &gt; Opera Unite Server &gt; Manage Services</em>.</p>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/252-an-introduction-to-opera-unite/figure6.jpg" alt="Bottom left Opera Unite icon when enabled" />
<p class="comment">Figure 6: The bottom left-hand corner Opera Unite icon, when enabled</p>
</div>

<p>The Opera Unite Services panel looks like Figure 7. This panel has a link to your Opera Unite home page, plus an icon for each service you have installed. It also has a trash can icon for you to get rid of services you don’t want to run anymore — to get rid of a service, just drag its icon to the Trash.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/252-an-introduction-to-opera-unite/figure7.jpg" alt="The Opera Unite services panel" />
<p class="comment">Figure 7: The Opera Unite Services panel</p>


<h2>Let’s collaborate! using Opera Unite Services</h2>

<p>Now we’ve finished our Opera Unite tour, let’s start doing something interesting! To appreciate the power of Opera Unite Services, you need a friend, or friends, who are online and willing to collaborate with you. If you don’t have a friend, then you’ll have to settle for another computer in your house or office, or even another Web browser on the same computer. You need Opera Unite to actually host and run services, but, to merely consume them, all you need is a Web browser pointed at the Opera Unite home page of the person running the services — <strong>http://mymac.chrismills.operaunite.com/</strong>. Try it in Firefox, Safari, or Opera Mobile!</p>

<p>Before we can share anything with our friends, we need to run some services. Let’s do that now.</p>

<h3>Having a chat with your friends on Opera Unite</h3>

<p>On your Unite-enabled browser, double-click the Opera Unite <em>The Lounge</em> service to start it running. You’ll be greeted by the Lounge screen, as shown in Figure 8</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/252-an-introduction-to-opera-unite/figure8.jpg" alt="Logging in to the Opera Unite Lounge service" />
<p class="comment">Figure 8: Logging in to the Opera Unite Lounge service</p>

<p>Now get your friend to navigate to your Opera Unite homepage and double click your Lounge service. They will first be prompted to choose a name to be known by inside the lounge, then you should be able to start chatting away to one another, as shown in Figure 9.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/252-an-introduction-to-opera-unite/figure9a.jpg" alt="Having a good conversation in the Opera Unite Lounge with Opera" />
<img src="http://forum-test.oslo.osa/kirby/content/articles/252-an-introduction-to-opera-unite/figure9b.jpg" alt="Having a good conversation in the Opera Unite Lounge with Firefox" />
<p class="comment">Figure 9: Two friends having a good conversation in the Opera Unite Lounge — one using Opera, and one using Firefox</p>

<p>If you have more friends with the Opera Unite build running, get them to join in your chat as well, in the same way!</p>

<p>Although this only scratches the surface of what is possible with Opera Unite, you must admit that it is nice to be able to have a chat with your friends online without needing to involve any third-party Web sites, or download any messenger applications.</p>

<h3>Sharing some music with your friends</h3>

<p>Now let’s have a look at sharing some media with your friends. In the same manner as seen above, double-click the Opera Unite <em>Media Player</em> service. You will be greeted by a dialog box as seen in Figure 10.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/252-an-introduction-to-opera-unite/figure10.jpg" alt="choosing a folder to share files from" />
<p class="comment">Figure 10: Choosing a folder from which to share files</p>

<p>Here you need to do one simple thing - select the folder on your hard drive that you will select media from. Select a folder full of MP3s on your HDD (or create one and select it if you don&#39;t already have something handy lying around) and click OK.</p>

<p class="note">This is something important to note in Opera Unite — some services require you to specify a folder to share files from, and some don’t. It makes sense to create a special folder for each Opera Unite service you are using to share files, so you can easily control what you are sharing, and don’t give access to anything you’d rather not share.</p>

<p>When you click OK, you should be greeted by a screen like the one in Figure 11.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/252-an-introduction-to-opera-unite/figure11.jpg" alt="The media player service settings screen" />
<p class="comment">Figure 11: The Media Player service-settings screen</p>

<p>This has four interesting features:</p>

<ul>
  <li>It lists the files inside the folder you selected in the above step. You can click the play buttons to play the songs, or use the other controls to Autoplay, Shuffle, order, and search through the songs as you like. This is the main panel on the top left</li>
  <li>It gives you the URL you need to share with your friend(s) to allow them to access your music ’ this is at the top right</li>
  <li>It allows you to set 3 different security levels for your music:
    <ol>
      <li><strong>Public</strong>: Everyone can access it freely without a password</li>
      <li><strong>Limited</strong>: Your friends and colleagues can access it, as long as you give them the correct URL containing the password.</li>
      <li><strong>Private</strong>: Only you can access it.</li>
    </ol>
  </li>

  <li>It also lists other people running this service, and some of the other services your friends are running at that time</li>
</ul>

<p>Now send your friend(s) the URL listed in the top right of your Media Player screen (see Figure 11); if they access your service using this URL, it will bring up the screen shown in Figure 12.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/252-an-introduction-to-opera-unite/figure12.jpg" alt="your friend can use the Media Player to play your media live on their machine" />
<p class="comment">Figure 12: Your Friend can use the Media Player to play your media live on their machine</p>

<p>They can now double-click on the track names to hear them, straight from your hard drive. If they tried to access the Limited access service without being given the special password URL, for example <code>http://work.chrismills.operaunite.com/media_player/</code>, they would be directed to you to request access to your service, as shown in Figure 13.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/252-an-introduction-to-opera-unite/figure13.jpg" alt="if you try to access a limited access service without having the password url, you are directed to contact the service owner about it" />
<p class="comment">Figure 13: If you try to access a limited access service without having the password URL, you are directed to contact the service owner about it.</p>

<h2>Summary</h2>
<p>So that’s a wrap. I’ve introduced you to Opera Unite, given you a tour of the new property, and shown you how it works. If you are a developer wanting to write Opera Unite widgets, the best place to start is our <a href="http://dev.opera.com/articles/view/opera-unite-developer-primer/">Opera Unite developer’s primer</a>.</p>

<p>You might also want to read the <a href="http://labs.opera.com/news/2009/06/16/">latest labs.opera.com post on Unite</a>, to get more of an idea of the thinking behind it.</p>

<p>Now it’s up to you — we invite you to start playing with the available Opera Unite Services and let us know what you think.</p></p>
