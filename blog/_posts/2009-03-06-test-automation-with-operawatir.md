---
title: Test Automation With OperaWatir
authors:
- wilhelm-andersen
tags:
- core-qa
- test automation
- watir
- coreblog
layout: post
---
<p>To make sure new versions of our browser core are of sufficient quality before making their way into any of our products, we run more than 100,000 automated tests on a number of different reference configurations every time we have a new build.

<p>We run automated visual tests, JavaScript tests, selftests, performance tests, stability tests, memory tests and a lot more. One thing we have been missing, however, is automated tests for the things that require some sort of user interaction--clicking links, filling out forms, interacting with complex Web applications.

<p>That is ... until now.

<p>We are working on adding support for driving the browser through our scope protocol, which is the same protocol we use for the Opera Dragonfly debugger. Through a simple script, we can instruct the browser to automatically to search Google, log into Hotmail and send a message, buy books at Amazon or find plane tickets at Expedia.

<p>Here&#39;s an example of what such a script can look like:

<pre><code>require &quot;operawatir&quot;

browser = OperaWatir::Opera.new
browser.goto(&quot;<a href="http://www.google.com" target="_blank">http://www.google.com</a>&quot;)
browser.text_field(:name, &quot;q&quot;).value = &quot;Wikipedia&quot;
browser.button(:name, &quot;btnG&quot;).click

browser.link(:text, &quot;Wikipedia&quot;).click

puts &quot;PASS&quot; if browser.text.include? &quot;Wikipedia&quot;</code></pre>

<p>The syntax above is that of the Watir API, a Ruby test tool originally developed for Internet Explorer that is now being ported to Opera and other browsers.

<p>Below is a video of the script running in the desktop version of our browser. We&#39;ve had to slow it down significantly for you to be able to see what&#39;s going on - the test normally takes a few hundred milliseconds.

<object width="480" height="295"><param name="movie" value="http://www.youtube.com/v/6jbEpYjWisU&amp;hl=en&amp;fs=1" /><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="never" /><embed src="http://www.youtube.com/v/6jbEpYjWisU&amp;hl=en&amp;fs=1" type="application/x-shockwave-flash" allowfullscreen="true" width="480" height="295" allowscriptaccess="never" /></object>

<p>Through scripts like these, we can automatically test many of the things our millions of users do every day. If we break anything and a test fails, our scripts will instantly notify us so that we can fix it.

<p>But testing these things on our x86 test builds is not enough. We ship on hundreds of different devices every year and need to run the same tests on many different platforms to make sure everything is still working after porting.

<p>When using the scope protocol, it doesn&#39;t really matter if you&#39;re talking to an Opera instance locally or remotely; it was built for working on any device. Here&#39;s the exact same script running on a mobile phone:

<object width="425" height="344"><param name="movie" value="http://www.youtube.com/v/taqqlReb7pA&amp;hl=en&amp;fs=1" /><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="never" /><embed src="http://www.youtube.com/v/taqqlReb7pA&amp;hl=en&amp;fs=1" type="application/x-shockwave-flash" allowfullscreen="true" width="425" height="344" allowscriptaccess="never" /></object>

<p>Shortly after we started working on this tool, we figured that this might not just be useful for us testing our browser engine, but for Web developers testing their own Web applications, too. Our new tools are still in a pre-alpha stage, but as they mature over the coming months, we would like to make them available to all of you as well.

<p>There are several different browser drivers out there, and we would like to support the most popular ones. The script above was using the Watir API. The following script is doing the same thing through Webdriver, which will be used in the next version of Selenium:

<pre><code>public class OperaDriverExample  {
    public static void main(String[] args) {
        WebDriver driver = new OperaDriver();
        driver.get(&quot;<a href="http://www.google.com" target="_blank">http://www.google.com</a>&quot;);
        WebElement element = driver.findElement(By.name(&quot;q&quot;));
        element.sendKeys(&quot;Wikipedia&quot;);
        element.submit();
        WebElement wikipediaLink = driver.findElement(By.linkText(&quot;Wikipedia&quot;));
        wikipediaLink.click();
        System.out.println(&quot;Page title is: &quot; + driver.getTitle());
    }
}</code></pre>

</p></p></p></p></p></p></p></p></p></p></p></p>
