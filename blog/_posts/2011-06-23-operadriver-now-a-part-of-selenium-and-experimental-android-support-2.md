---
title: OperaDriver Is Now a Part of Selenium and Has Experimental Android Support
authors:
- deniz-turkoglu
tags:
- operadriver
- coreblog
layout: post
---
<h3>A bit of background</h3>

<p>Back in early 2009, when I started working on OperaWatir, WebDriver was announced, and it looked very interesting with its really compact API. I started talking with <a href="http://twitter.com/#!/shs96c">Simon Stewart</a>, &quot;the WebDriver guy&quot; and decided it would be great if we could support both the (Ruby-based) Watir and (Java-based) WebDriver APIs. <a href="http://jruby.org/">JRuby</a>, a Java implementation of the Ruby programming language, allowed us to connect the two, using <a href="http://www.opera.com/developer/tools/operadriver/">OperaDriver</a> as the back-end for <a href="http://www.opera.com/developer/tools/operawatir/">OperaWatir</a>.</p>

<p>The work on the current codebase started in February 2009, and we had a first working prototype in March 2009, which we <a href="http://my.opera.com/core/blog/2009/03/06/test-automation-with-operawatir">announced on the Core blog</a>. Soon thereafter, we started using OperaDriver internally for testing our Opera Presto engine. A public release took a bit longer, as the Scope protocol got a big change from XML to protobuff and was mostly rewritten. In February of this year, we then <a href="http://www.opera.com/press/releases/2011/02/09/">released</a> OperaDriver and OperaWatir as open source projects.</p>

<h3>What is OperaDriver?</h3>

<p>OperaDriver is Opera&#39;s WebDriver implementation that follows the standard WebDriver API, which has recently become <a href="http://code.google.com/p/selenium/">Selenium 2</a>. It supports Opera browsers on desktop, mobile and even on devices. It uses a network protocol using protocol buffers and is a standalone package that you can directly use.</p>

<h3>Testing benefits</h3>

<p>Since we followed the WebDriver specifications, tests written for other browsers (such as Firefox, Chrome or Internet Explorer) should work out of the box with OperaDriver (to be correct, there are some exceptions involving browser specific APIs, but these are rather rare). Using OperaDriver you can automate the testing of your web application, run it through multiple browsers, and get back results with <a href="http://junit.sourceforge.net/">JUnit</a> or your choice of test framework.</p>

<h3>Ongoing testing framework standardization</h3>

<p>A while back, the WebDriver and Selenium projects merged, with Watir joining as <a href="https://github.com/jarib/watir-webdriver">watir-webdriver</a>. Similar to OperaWatir using OperaDriver as a back-end, watir-webdriver is using WebDriver to power browser driving. This ongoing standardization effort is going to make test automation of web applications and browsers a breeze, and we are very proud to have been a part of this effort from the start.</p>

<p>Worth noting in this context is that <a href="http://code.google.com/p/selenium/downloads/list">Selenium 2 RC3</a> came out on Monday, and it has built-in support for Opera!</p>

<h3>Driving Opera Mobile on Android</h3>

<p>As an added bonus, we&#39;re releasing our Android launcher, which is in its alpha stages. To use it, you need the <a href="http://developer.android.com/sdk/index.html">Android SDK</a>. Follow the instructions below to automate testing on Opera Mobile running on Android phones and tablets. The launcher allows you to start/stop Opera and also supports typing (note that there are some known bugs related to timing issues, especially in Android 3.0).</p>

<p>Below you can find instructions for Mac. Please replace USERNAME with your actual username.</p>

Preparation:
<ol><li>Download the Android SDK from <a href="http://developer.android.com/sdk/index.html" target="_blank">http://developer.android.com/sdk/index.html</a> and install it to e.g. /Developer</li><li>Download Eclipse (Classic is fine) from <a href="http://www.eclipse.org/downloads/" target="_blank">http://www.eclipse.org/downloads/</a> and install it.</li><li>Connect your Android phone with a USB cable to your computer and turn on USB debugging on the phone.</li><li>Make sure your phone and computer are connected to the same Wi-Fi network</li></ol>


Installing the shepherd-release.apk
<ol><li>Download <a href="http://files.myopera.com/deniz/files/release.zip" target="_blank">release.zip</a> to your desktop and unzip it to /Users/USERNAME/Desktop/release</li><li>Open Terminal and do /Developer/android-sdk-mac_x86/tools/adb install /Users/USERNAME/Desktop/release/shepherd-release.apk - confirm the installation is a success.</li></ol>

Eclipse
<ol><li>Start Eclipse</li><li>Go to File &gt; New &gt; Java Project, type in a name (e.g. TestProject) and click Finish</li><li>Right-click on TestProject and go to Properties</li><li>Select Java Build Path from the sidebar, go to the Libraries tab and click Add External JARs...</li><li>Navigate to /Users/USERNAME/Desktop/release/webdriver-opera , select all .jar files in that folder and click Open, then OK.</li><li>Right-click on TestProject, go to New &gt; Class</li><li>Type in AndroidTest and click Finish</li><li>Inside AndroidTest.java, replace the content with the following:

<pre>
import com.opera.core.systems.OperaDriver;
import com.opera.core.systems.settings.OperaDriverSettings;

public class AndroidTest {

	public static void main(String[] args) throws Exception {
		OperaDriverSettings settings = new OperaDriverSettings();
		settings.setAndroid(true);
		settings.setAdbPath(&quot;/Developer/android-sdk-mac_x86/tools/adb&quot;);
		settings.setOperaLauncherHost(&quot;127.0.0.1&quot;); // replace with your current IP
		settings.setOperaLauncherListeningPort(9999);
		OperaDriver driver = new OperaDriver(settings);
		driver.closeAll(); // required due to a bug in window-manager
		driver.get(&quot;http://www.google.no/m&quot;);
		driver.findElementById(&quot;homepage_query_box_textbox&quot;).sendKeys(&quot;Opera&quot;);
		driver.findElementById(&quot;homepage_query_box_submit&quot;).click();
		Thread.sleep(5000); // sleep so we can see the results
		driver.quit();
	}
}
</pre></li><li>Replace 127.0.0.1 with your local network IP address, which you can find via the ifconfig command in the terminal, or under Network in System Preferences.</li><li>Click on the Run button to execute the test. Save changes when prompted. The test will open Opera Mobile, go to the Google Mobile site for Norway, type Opera, search for it, wait 5 seconds and then close the browser.</li></ol>

<p>I would like to thank Opera&#39;s Dev Tools team for their support during this project, and Andreas for his help with the blog post.</p>
