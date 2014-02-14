---
title: Which phones are people using to browse the mobile Web?
authors:
- david-storey
tags:
- resolution
- opera-mobile
- dragonfly
- opera-mini
- mobile
layout: article
---
<p>Opera has just released its <a href="http://www.opera.com/smw/2010/03/">State of the Mobile Web</a> for the month of March. Part four of this report highlights the global rankings for phones used by Opera Mini users. While all the buzz about the mobile Web focuses on the sexy touch screen smart phone market, only <em>four</em> of the top twenty phones used by Opera Mini users are smart phones.  Only <em>one</em> of these have a touch screen. It is worth pointing out that Opera Mini is the leading global mobile browser by both <a href="http://gs.statcounter.com/#mobile_browser-ww-monthly-200903-201004">StatCounter (26%)</a> and <a href="http://marketshare.hitslink.com/operating-system-market-share.aspx?qprid=8">Net Applications (0.78% of the full Web market)</a>. Note: I’ve linked to the OS market share report for Net Applications. They only track iPhone as part of this metric. Opera Mini (excluding Opera Mini on iPhone) is tracked as Java ME. You can cross reference this is all Opera Mini as it matches up with their <a href="http://marketshare.hitslink.com/browser-market-share.aspx?qprid=0">browser market share</a> for Opera Mini.</p>

<p>As well as the importance of Opera Mini, it is also worth bearing in mind that <a href="http://gs.statcounter.com/#mobile_os-ww-monthly-200903-201004">two of the top three mobile operating systems</a> are primarily keypad or QWERTY based non-touch screen platforms. BlackBerry (top selling smart phone platform in the US) only has one touch screen model (the Storm), and most Symbian S60 devices (top selling platform smart phone in Europe) currently on the market today are keypad or BlackBerry-style portrait QWERTY phones. Touch screen phones get all the lust and press attention, but if you design your site for only those phones (or only iPhone and perhaps Android if it is luck), you are missing out on a large part of the market, and a lot of potential revenue. Not testing on feature phones or keypad/QWERTY based smart phones is like only caring about Ferrari, Maserati or BMW drivers, but forgetting about Fords, Renaults or Chevrolet drivers.</p>

<p>If you’ve decided it is important to test on a wide range of devices, which should you look into? A quick first step is to download the <a href="http://www.opera.com/developer/tools/">Opera Mobile emulator</a>. This will give you an idea of how your page will render in Opera Mobile. It isn&#39;t a substitute for testing on a real device, but it gives you a good first idea before taking it to the device for periodical and final testing. The default mode is touch screen, but you can change this from the command line with the <kbd>-notouch</kbd> flag.
The article <a href="http://dev.opera.com/articles/view/opera-mobile-10-widgets-mobile-emulator-desktop">Opera Mobile 10 and the Opera Widgets Mobile Emulator on your desktop</a> steps you through this and how to use it with <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a> for debugging your pages. Although Opera Mini uses the same Opera Presto rendering engine, there are some differences due to the client/server approach, so it is important to test for Opera Mini too. The following table shows the top twenty mobiles used by Opera Mini users, along with the important characteristics:</p>


<table>
            <caption>Opera Mini top 20 global handsets</caption>
    <thead>
        <tr><th>Model</th><th>Screen Resolution</th><th>Screen Size</th><th>Network</th><th>Input</th><th>OS</th></tr>
    </thead>
    <tbody>
        <tr><td>Nokia 5130 XpressMusic</td><td>240 x 320 pixels (QVGA)</td><td>2.0 inches</td><td>GPRS/EDGE</td><td>Keypad</td><td>S40 5th edition</td></tr>
        <tr><td>Nokia 6300</td><td>240 x 320 pixels (QVGA)</td><td>2.0 inches</td><td>GPRS/EDGE</td><td>Keypad</td><td>S40 3rd edition
</td></tr>
    <tr><td>Nokia 2700 classic</td><td>240 x 320 pixels (QVGA)</td><td>2.0 inches</td><td>GPRS/EDGE</td><td>Keypad</td><td>S40 5th edition</td></tr>
    <tr><td>Nokia N70</td><td>176 x 208 pixels</td><td>2.1 inches</td><td>3G 384 kbps</td><td>Keypad</td><td>S60 2nd edition</td></tr>
    <tr><td>Nokia 5310 XpressMusic</td><td>240 x 320 pixels (QVGA)</td><td>2.1 inches</td><td>GPRS/EDGE</td><td>Keypad</td><td>S40 5th edition</td></tr>
     <tr><td>Nokia 3110 classic</td><td>128 x 160 pixels</td><td>1.8 inches</td><td>GPRS/EDGE</td><td>Keypad</td><td>S40 3rd edition</td></tr>
 <tr><td>Nokia N73</td><td>240 x 320 pixels (QVGA)</td><td>2.4 inches</td><td>3G 384 kbps</td><td>Keypad</td><td>S60 3rd edition</td></tr>
     <tr><td>Nokia 2330 classic</td><td>128 x 160 pixels</td><td>1.8 inches</td><td>GPRS/EDGE</td><td>Keypad</td><td>S40 5th edition</td></tr>
     <tr><td>Nokia 5800 XpressMusic</td><td>360 x 640 pixels (nHD)</td><td>3.2 inches</td><td>3G 3.6 Mbps</td><td>Touch</td><td>S60 5th Edition
</td></tr>
      <tr><td>Nokia 6700 classic</td><td>240 x 320 pixels (QVGA)</td><td>2.2 inches</td><td>3G 10 Mbps</td><td>Keypad</td><td>S40 6th edition</td></tr>
     <tr><td>Nokia 3120 classic</td><td>240 x 320 pixels (QVGA)</td><td>2.0 inches</td><td>3G 384 kbps</td><td>Keypad</td><td>S40 5th edition</td></tr>
    <tr><td>Nokia E63</td><td>320 x 240 pixels (QVGA)</td><td>2.36 inches</td><td>3G 384 kbps</td><td>QWERTY</td><td>S60 3rd edition
</td></tr>
   <tr><td>Nokia 6233</td><td>240 x 320 pixels (QVGA)</td><td>2.0 inches</td><td>3G 384 kbps</td><td>Keypad</td><td>S40 3rd edition</td></tr>
     <tr><td>Sony Ericsson K750i</td><td>176 x 220 pixels</td><td>1.8 inches</td><td>GPRS</td><td>Keypad</td><td>Sony Ericsson JP-5</td></tr>
     <tr><td>Nokia 6120 classic</td><td>240 x 320 pixels (QVGA)</td><td>2.0 inches</td><td>3G 3.6 Mbps</td><td>Keypad</td><td>S60 3rd edition</td></tr>
     <tr><td>Nokia 6500 slide</td><td>240 x 320 pixels (QVGA)</td><td>2.2 inches</td><td>3G 384 kbps</td><td>Keypad</td><td>S40 4th edition</td></tr>
     <tr><td>Nokia E71</td><td>320 x 240 pixels (QVGA)</td><td>2.36 inches</td><td>3G 3.6 Mbps</td><td>QWERTY</td><td>S60 3rd edition</td></tr>
     <tr><td>Sony Ericsson K800i</td><td>240 x 320 pixels (QVGA)</td><td>2 inches</td><td>GPRS</td><td>Keypad</td><td>Sony Ericsson JP-7</td></tr>
      <tr><td>Nokia 5300</td><td>240 x 320 pixels (QVGA)</td><td>2.1 inches</td><td>GPRS/EDGE</td><td>Keypad</td><td>S40 3rd edition</td></tr>
      <tr><td>Sony Ericsson K550i</td><td>176 x 220 pixels</td><td>1.9 inches</td><td>GPRS/EDGE</td><td>Keypad</td><td>Sony Ericsson JP-7</td></tr>
    </tbody>
</table>


<p>The top 20 Opera Mini phones are dominated by QVGA (either in portrait 240 x 320 in the case of most S40 phones, or landscape 320 x 240 in the case of the E Series S60 phones) resolution phones. This is not just common on Nokia phones, but is also often found on many Sony Ericsson, LG and Samsung feature phones as well  the BlackBerry Curve (in landscape mode). The screen sizes vary from 2.0 to 2.4 inches. I&#39;d recommend having access to at least one QVGA phone – the screen size doesn&#39;t matter so much, as it is mainly the resolution you are interested in and the difference is small. Any in this list would be ok, but if you test on a 3G device, remember to also test with 3G disabled, as many phones (including the top 3, and top 6 feature phones) only have EDGE and GPRS. Many phones allow you to rotate the display, so you can test both portrait and landscape modes. It is the width of the screen you are generally interested in when designing web pages.</p>

<p>Other than QVGA phones, a number of Sony Ericsson phones and S60 1st and 2nd edition phones have 176 pixel wide screens. The Sony Ericssons are 176 x 220 while the S60s are 176 x 208. Their screens vary from 1.8 to 2.0 inches for the Sony Ericssons and a consistant 2.1 inches for the S60 phones. You should be able to pick up a model of each cheaply, but as the resolution width is the most important, you can get away with just testing one of these. A number of lower end Nokia and Samsung phones use 128 x 160 pixels, which is close to QQVGA. These vary from 1.8 to 2.0 inches and support GPRS or EDGE, so as with QVGA phones the difference isn&#39;t huge and any of these phones would be useful to use to test.</p>

<p>The one phone I haven&#39;t covered yet is the Nokia 5800 XpressMusic. This is the only touch screen phone, and has a 360 x 640 pixels nHD display. Although this is the only one with this resolution in the list, all S60 5th edition (and the only announced Symbian ^3) touch screen phones, whether they are from Nokia, Sony Ericsson or Samsung use this resolution screen. As these phones are starting to come on the market this year, it is worth testing your site at nHD resolution to future proof your site. Examples of nHD phones include the Nokia N8, Nokia X8, Samsung Omnia HD and the Sony Ericsson Vivaz. The Nokia 5800 XpressMusic has already shown that these phones have the potential to be popular.</p>

<p>In the US the situation is somewhat different. The top 10 list is dominated by BlackBerry phones, and Nokia is no where in sight. The QWERTY BlackBerry phones either use QVGA in landscape as I’ve already covered or 480 x 360 pixels for the newer BlackBerry phones. This seems to be a custom resolution to BlackBerry phones. The good news is it has the same width in the default landscape screen orientation as WVGA phones (such as the HTC HD2 or the Nexus 1) and the same width in portrait screen orientation as the S60 5th edition nHD phones. BlackBerry is big enough in the US that it is useful to have one of the 480 x 360 to test if you have a global or US site. BlackBerry also has a touch screen phone, which is the same resolution but the screen is in portrait in the default orientation. The Storm 2 is the 8th most popular phone in the US for Opera Mini.</p>

<p>As far as touch screen phones, I don&#39;t have too much data on these for Opera Mini,except for the BlackBerry and the nHD devices mentioned. There are a number of common resolutions, just as with keypad/QWERTY phones. Older and mid-range smart phones, such as the iPhone 3GS or the HTC Legend often use HVGA screens. These are 320 x 480 pixels, and many of you probably already test at this resolution. These range from 3.1 to 3.5 inches. The screen size matters a bit more on touch screens as you have to make sure the elements are big enough to touch comfortably with a finger. They generally have similar 7.2 Mbps 3G, Wi-Fi B/G and between 528 and 800 MHz processors. On the lower end you have the QVGA touch screens and the widescreen WQVA (240 x 400 pixels) versions.  The QVGA phones are mostly 2.8 inches except the Sony Ericsson XPERIA X10 mini at 2.55 inches, and WVGA vary between 3.0 to 3.2 inches.  Most have 7.2 or 3.6 Mbps 3G and B/G Wi-Fi.</p>

<p>On the high end you have the WVGA phones. These are 480 x 800 pixels or 480 x 854 pixels. Examples include the HTC HD2, HTC Nexus 1, and Motorola Droid/Milestone.  These vary anywhere between 3 and 4 inches, which makes quite a big difference for touch input. These generally have top of the range processors (such as the 1GHz Snapdragon) and fast 3G (up to 10.2 Mbps), but vary widely depending on price. It is worth having at least one of these phones in your testing arsenal if you can, or at worst case test in the Opera Mobile emulator at this resolution. These phones are Opera Mobile class devices, although only Opera Mini will be available for the iPhone platform, even when it reaches this resolution and processing power.</p>

<p>All together there are the following common resolutions that are worth testing for on real devices or the emulators in portrait and landscape:</p>

<ul>
  <li>240 x 320 pixels (QVGA) and 240 x 400 pixels (WQVGA) e.g. Nokia 5310 XpressMusic/Nokia E72</li>
  <li>176 x 220 pixels (Java Platform phones) and  176 x 208 pixels (S60 1st and 2nd edition) e.g. Nokia N70</li>
  <li>128 x 160 pixels (~QQVGA) e.g. Nokia 3110 classic </li>
  <li>360 x 640 pixels (nHD) e.g. Nokia 5800 XpressMusic</li>
  <li>480 x 360 pixels (newer BlackBerry) e.g. BlackBerry Bold</li>
  <li>320 x 480 pixels (HVGA) e.g. HTC Legend/Apple iPhone</li>
  <li>480 x 800/854 pixels (WVGA) e.g. HTC Desire/Motorola Droid</li>
</ul>

<p>Any phone that is capable of running Opera Mobile (currently Windows Mobile, S60 and Android) can also be debugged using the remote debugging feature of Opera Dragonfly.  If you have suggestions on recommended phones for testing then leave a comment, or send me a message @dstorey on Twitter.</p>
