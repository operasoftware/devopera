---
title: Test automation with OperaWatir
authors:
- wilhelm-andersen
tags:
- test-automation
- watir
- coreblog
license: cc-by-3.0
---

To make sure new versions of our browser core are of sufficient quality before making their way into any of our products, we run more than 100,000 automated tests on a number of different reference configurations every time we have a new build.

We run automated visual tests, JavaScript tests, selftests, performance tests, stability tests, memory tests and a lot more. One thing we have been missing, however, is automated tests for the things that require some sort of user interaction—clicking links, filling out forms, interacting with complex Web applications.

That is… until now.

We are working on adding support for driving the browser through our scope protocol, which is the same protocol we use for the Opera Dragonfly debugger. Through a simple script, we can instruct the browser to automatically to search Google, log into Hotmail and send a message, buy books at Amazon or find plane tickets at Expedia.

Here’s an example of what such a script can look like:

	require "operawatir"

	browser = OperaWatir::Opera.new
	browser.goto("[http://www.google.com](http://www.google.com)")
	browser.text_field(:name, "q").value = "Wikipedia"
	browser.button(:name, "btnG").click

	browser.link(:text, "Wikipedia").click

	puts "PASS" if browser.text.include? "Wikipedia"

The syntax above is that of the Watir API, a Ruby test tool originally developed for Internet Explorer that is now being ported to Opera and other browsers.

Below is a video of the script running in the desktop version of our browser. We’ve had to slow it down significantly for you to be able to see what’s going on — the test normally takes a few hundred milliseconds.

<figure block="figure">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/6jbEpYjWisU" allowfullscreen elem="media"></iframe>
</figure>

Through scripts like these, we can automatically test many of the things our millions of users do every day. If we break anything and a test fails, our scripts will instantly notify us so that we can fix it.

But testing these things on our x86 test builds is not enough. We ship on hundreds of different devices every year and need to run the same tests on many different platforms to make sure everything is still working after porting.

When using the scope protocol, it doesn't really matter if you’re talking to an Opera instance locally or remotely; it was built for working on any device. Here’s the exact same script running on a mobile phone:

<figure block="figure">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/taqqlReb7pA" allowfullscreen elem="media"></iframe>
</figure>

Shortly after we started working on this tool, we figured that this might not just be useful for us testing our browser engine, but for Web developers testing their own Web applications, too. Our new tools are still in a pre-alpha stage, but as they mature over the coming months, we would like to make them available to all of you as well.

There are several different browser drivers out there, and we would like to support the most popular ones. The script above was using the Watir API. The following script is doing the same thing through Webdriver, which will be used in the next version of Selenium:

	public class OperaDriverExample  {
		public static void main(String[] args) {
			WebDriver driver = new OperaDriver();
			driver.get("[http://www.google.com](http://www.google.com)");
			WebElement element = driver.findElement(By.name("q"));
			element.sendKeys("Wikipedia");
			element.submit();
			WebElement wikipediaLink = driver.findElement(By.linkText("Wikipedia"));
			wikipediaLink.click();
			System.out.println("Page title is: " + driver.getTitle());
		}
	}
