Title: Surfing at BONDI
----
Date: 2009-02-14 21:28:14
----
Author: 
----
Text:

<p>Opera recently <a href="http://www.omtp.org/News/Display.aspx?Id=495dc323-7f21-483b-b097-013a7aae6de6">announced</a> that we have joined the <abbr>OMTP</abbr> (Open Mobile Terminal Platform).  One major reason for this was to bring our experience of mobile and device development to the newly announced <a href="http://bondi.omtp.org/default.aspx">BONDI</a> specification.  BONDI is a new specification for standardising how web applications can access device features such as cameras, geolocation, address books and so on, in a safe manner. Previous to BONDI applications that make use of device features, such as Opera Platform and more recently Palm Pre, had to invent their own proprietary API that were not portable between different implementations and providers.  If it becomes adopted, BONDI will improve the interoperability and usefulness of these features across the Web, and offline applications that use web technologies as the interface layer.</p>

<p>In my mind, even though this is primarily designed for mobiles, it is also very useful for a whole range of devices, and even laptops and netbooks now that thinks like built-in web cams have become commonplace and built-in 3G cards are appearing on netbooks. I personally think this set of APIs will bring the web as an application platform closer to reality.</p>

<p>As well as the reference platform, <a href="http://www.limofoundation.org/en/limo-press-releases/limo-foundation-endorses-omtp-bondi-specification-to-bring-web-2.0-applications-to-limo-handsets-3.html">LiMo</a> have announced they will be implementing the specification in their Linux platform, which currently ships on around 33 mobile models such as those on the Japanese DoCoMo network.</p>

<p>This specification brings a number of things to the table for web applications and widgets:</p>

<dl>
    <dt>Application Invocation</dt>
    <dd>This allows a application to launch a native application on a device, such as the phone or camera application.</dd>
    <dt>Messaging</dt>
    <dd>This allows a application to interact with the messaging functionality on a device, such as SMS, MMS, and e-mail.</dd>
    <dt>User Interaction</dt>
    <dd>This allows the application UI to be more integrated into the expected device behaviour, such as respecting the alert settings, or minimise and maximise behaviour.</dd>
    <dt>Persistent Data</dt>
    <dd>This provides offline storage for web applications, such as saving application data and state.</dd>
    <dt>Gallery</dt>
    <dd>This provides functionality for applications to access and manipulate media on a device, such as photos, movies and music.</dd>
    <dt>Phone Status</dt>
    <dd>This allows access to a device’s status, such as battery life, signal strength and accelerometer.</dd>
    <dt>System Events</dt>
    <dd>Apparently <abbr>TBD</abbr>.</dd>
    <dt>Application Settings</dt>
    <dd>This provides functionality to manage the application settings.</dd>
    <dt>Location</dt>
    <dd>This provides a API for geolocation, that is aligned with the W3C Geolocation spec.</dd>
    <dt>Camera</dt>
     <dd>This provides access to the device’s camera, so a application can take photos or movies.</dd>
   <dt>Communications Log</dt>
   <dd>This provides access to the call log, such as recently received and sent calls, SMS and so on.</dd>
   <dt>Personal  Information Management</dt>
    <dd>This allows access to the PIM data on a device, such as the address book, task list and calendar events.</dd>
</dl>

<p>As you can see this gives access to a lot of functionality that developers of desktop applications have enjoyed for a long time (such as the Address Book or Core Data APIs in Mac OS X).  With all this power comes a lot of responsibility.  A user probably doesn&#39;t want any old app to take a photo of them while they are surfing the web, eating cornflakes in their underwear, or access which girl they rang on Valentines day.  There is a full <a href="http://bondi.omtp.org/AandS/default.aspx">security architecture</a> built into the specification, which I won&#39;t get into here, and I assume there has to be a way for a user to grant access rights for functionality on a per app basis.</p>

<p>All together the BONDI spec is a nice step forward, and I look forward to seeing what comes out of it in the year ahead.</p>
