---
title: Controlling privacy features
copyright: opera-google-ccby
originalsource: http://developer.chrome.com/extensions/privacy.html
---


<h2 id="manifest">Manifest</h2>
<p>
You must declare the <code>"privacy"</code> permission in your extension's manifest to use the <a href="https://developer.chrome.com/extensions/privacy">Privacy API</a>. For example:
</p>

<pre class="prettyprint" data-filename="manifest.json">
{
	"name": "My extension",
	...
	"permissions": [
		"privacy"
	],
	...
}</pre>


<h2 id="usage">Usage</h2>
<p>
Reading the current value of an Opera setting is straightforward. You'll first need to find the property you're interested in, then you'll call <code>get()</code> on that object in order to retrieve its current value and your extension's level of control. For example, to determine if the browser's Autofill feature is enabled, you'd write:</p>
<p>
<pre class="prettyprint">
chrome.privacy.services.autofillEnabled.get({}, function(details) {
	if (details.value)
		console.log('Autofill is on!');
	else
		console.log('Autofill is off!');
});</pre>

<p>Changing the value of a setting is a little bit more complex, simply because you first must verify that your extension can control the setting. The user won't see any change to her settings if your extension toggles a setting that is either locked to a specific value by enterprise policies (<code>levelOfControl</code> will be set to <code>"not_controllable"</code>), or if another extension is controlling the value (<code>levelOfControl</code> will be set to <code>"controlled_by_other_extensions"</code>). The <code>set()</code> call will succeed, but the setting will be immediately overridden. As this might be confusing, it is advisable to warn the user when the settings they've chosen aren't practically applied.</p>

<p>This means that you ought to use the <code>get()</code> method to determine your level of access, and then only call <code>set()</code> if your extension can grab control over the setting (in fact if your extension can't control the setting it's probably a good idea to visually disable the functionality to reduce user confusion):</p>

<pre class="prettyprint">
chrome.privacy.services.autofillEnabled.get({}, function(details) {
	if (details.levelOfControl === 'controllable_by_this_extension') {
		chrome.privacy.services.autofillEnabled.set({ value: true }, function() {
			if (chrome.runtime.lastError === undefined)
				console.log("Hooray, it worked!");
			else
				console.log("Sadness!", chrome.runtime.lastError);
		}
	}
});
</pre>


<p class="note">If you're interested in changes to a setting's value, add a listener to its <code>onChange</code> event. Among other uses, this will allow you to warn the user if a more recently installed extension grabs control of a setting, or if enterprise policy overrides your control. To listen for changes to Autofill's status, for example, the following code would suffice:</p>

<pre class="prettyprint">
chrome.privacy.services.autofillEnabled.onChange.addListener(
		function (details) {
			// The new value is stored in `details.value`, the new level of control
			// in `details.levelOfControl`, and `details.incognitoSpecific` will be
			// `true` if the value is specific to Incognito mode.
		});
</pre>

<p><b>Note:</b> Full details about extensions' ability to control settings can be found under <a href="https://developer.chrome.com/extensions/types#type-ChromeSetting"><code>chrome.types.ChromeSetting</code></a>. Also check out the properties of <a href="https://developer.chrome.com/extensions/privacy#property-services"><code>chrome.privacy.services</code></a> to see which features the privacy API controls.</p>
