Title: Testing your app inside the Opera TV Store
----
Date: 2012-08-20 13:21:16
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>Introduction</h2>

<p>Before submitting an application to the Opera TV Store, developers need to ensure that it works as expected, to avoid a lengthy review process and potential delays.</p>

<p>Although the Opera TV Store uses the same core engine that is also found in the generic Opera Device SDK – used by many TV and set-top-box manufacturers as the basis for their own TV browser implementations – and in the Opera browser on desktop and mobile devices, there are still notable differences. The Opera TV Store provides additional functionality (such as its functional key handling) and specific restrictions. For this reason, it is advisable to test your applications inside the actual Opera TV Store environment itself.</p>

<p class="note">Note that you can access a <a href="http://my.opera.com/community/forums/topic.dml?id=1428782">list of TVs that the Opera TV store is already available on</a>, to find a suitable device for testing TV store apps.</p>

<p>Normally, the Opera TV Store does not provide end users with any browser-like interface elements – it only shows the user&#39;s chosen applications and the catalogue of already approved and published applications. However, as a developer you can set up your particular TV, set-top-box or <a href="http://www.opera.com/business/tv-emulator/">Opera TV Emulator</a> to be &quot;paired&quot; with your <a href="https://publish.tvstore.opera.com">Opera TV Store Submission portal</a> account. This gives you access to a simple URL entry application, making it possible to view and test any arbitrary web address, and the ability to launch any apps already saved in your account, even before they&#39;ve been submitted for final review.</p>

<p>To pair a device, you will need a device ID FOR DEVELOPERS. This can be found by opening the Opera TV Store on the device and viewing the About information (found under the MENU button at the top of the interface) under the My Apps tab. If you are using the <a href="http://www.opera.com/business/tv-emulator/">Opera TV Emulator</a>, simply navigate to Opera&#39;s demonstration store at <code>https://demo.tvstore.opera.com</code>.</p>

<p>
<img src="http://forum-test.oslo.osa/kirby/content/articles/729-testing-your-app-inside-the-opera-tv-store/opera-tv-store-emulator-my-apps-menu.jpg" alt="The Opera TV Store&#39;s &#39;My Apps&#39; screen, showing the dropdown menu containing the &#39;About&#39; option" />
</p>

<p>The About screen details the version number of the Opera TV Store, as well as a 64-character Device ID.</p>

<p>
<img src="http://forum-test.oslo.osa/kirby/content/articles/729-testing-your-app-inside-the-opera-tv-store/tv-store-device-id-2.jpg" alt="The Opera TV Store&#39;s &#39;About&#39; screen, showing the version number and the Device ID, plus an ID FOr DEVELOPERS button to generate a pairing ID" />
</p>


<p>Press the ID FOR DEVELOPERS button at the bottom right to generate a unique ID for pairing.</p>

<p>
<img src="http://forum-test.oslo.osa/kirby/content/articles/729-testing-your-app-inside-the-opera-tv-store/tv-store-device-id-3.jpg" alt="The Opera TV Store&#39;s &#39;About&#39; screen, showing the version number and the Device ID, plus a generated pairing ID" />
</p>

<p>Using your regular desktop browser, log in to your <a href="https://publish.tvstore.opera.com">Opera TV Store Submission portal</a> account and go to your <a href="https://publish.tvstore.opera.com/paired_devices/">Paired devices</a> page. Enter a friendly <cite>Custom name</cite> and the Pairing ID (labelled <cite>Device ID on the form</cite>), and your device will now be paired with your account.</p>

<p>
<img src="http://forum-test.oslo.osa/kirby/content/articles/729-testing-your-app-inside-the-opera-tv-store/tv-store-submission-portal.jpg" alt="The &#39;Paired devices&#39; page in the Opera TV Store Submission portal" />
</p>

<p>After that you should be prompted on your TV to accept pairing.</p>

<p>
<img src="http://forum-test.oslo.osa/kirby/content/articles/729-testing-your-app-inside-the-opera-tv-store/accept-pair-request-dialog.jpg" alt="A pairing request, appearing on the Opera TV browser" />
</p>

<p>Once you accept the pairing request, your account and device will be associated. You will see your device listed on the <a href="https://publish.tvstore.opera.com/paired_devices/">Paired devices</a> page, with its full 64-character DEVICE ID.</p>

<p>Please note that you should not leave the About page while pairing your device. Also note that the ID FOR DEVELOPERS will be valid only for 15 minutes. If you fail to enter the ID in the <a href="https://publish.tvstore.opera.com/paired_devices/">Paired devices</a> page in that time, you will have to generate a new one by pressing the ID FOR DEVELOPERS button again.</p>

<p>After a device has been paired, you will see a new Develop category under the Opera TV Store tab. This category contains all your saved, submitted and reviewed applications. This allows you to test exactly how an application that is still in development will look and behave in the store.</p>

<div class="note">
<p>If you are using the Opera TV Emulator, you can simply use your mouse to select the <cite>Device ID</cite> shown on screen, copy it to your clipboard, and paste it into the relevant form field in your desktop browsed.</p>

<p>If you&#39;re on a Mac, remember that the Opera TV Emulator is running Linux at its core, so you&#39;ll need to use <kbd>CTRL</kbd>+<kbd>C</kbd>, rather than <kbd>⌘/CMD</kbd>+<kbd>C</kbd>, to copy the text to the clipboard.</p>
</div>

<p>
<img src="http://forum-test.oslo.osa/kirby/content/articles/729-testing-your-app-inside-the-opera-tv-store/opera-tv-store-develop-category.jpg" alt="The &#39;Develop&#39; category in the Opera TV Store, showing the &#39;URL Loader&#39; app as well as &#39;My test app&#39;, which the developer has saved (but not submitted) in their Opera TV Store Submission portal page" width="665" height="392" />
</p>

<p>From here, you can launch the <cite>URL Loader</cite> – a simple utility to point the Opera TV Store client to any arbitrary web address where your in-development app is located. Additionally, if you already saved or submitted  applications in the <cite>My Apps</cite> section of the <a href="https://publish.tvstore.opera.com">Opera TV Store Submission portal</a>, these will also be shown in this category, ready to be tested.</p>

<p>
<img src="http://forum-test.oslo.osa/kirby/content/articles/729-testing-your-app-inside-the-opera-tv-store/opera-tv-store-test-app-info.jpg" alt="The information screen for &#39;My test app&#39;, showing the screenshot, description, support information – just as it would be shown if my app had already been submitted and approved" width="665" height="374" />
</p>

<p>The advantage of saving an application and starting it from the <cite>Develop</cite> category, rather than simply loading its address via the <cite>URL Loader</cite>, is that it allows you to check how the icon, screenshot and description will look within the context of the Opera TV Store. Additionally, when a saved app is launched, a valid <code>UID</code> will be passed along as a <code>GET</code> parameter, just as with fully published applications.</p>

<p class="note">The <code>UID</code> is both device and application specific (it&#39;s an encrypted combination of the <cite>Device ID</cite> and the identifier that&#39;s been assigned to the app in the Opera TV Store&#39;s systems), meaning that it can be used to identify return visits to an application from the same device, but it can&#39;t be used to track users across different devices, or across different applications on the same device.</p>
