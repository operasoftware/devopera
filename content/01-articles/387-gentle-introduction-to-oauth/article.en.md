Title: Gentle introduction to OAuth
----
Date: 2010-11-03 11:24:19
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">25th January 2012: Status update API on My Opera no longer available</h2>

<p>This article is partially out of date: the status update API (see the &quot;Get your My Opera status&quot; section) on My Opera is no longer available. We will provide such functionality in a different way in the future — until then, watch this space.</p>
</div>

<h2>Introduction</h2>

<p><a href="http://wiki.oauth.net/">OAuth</a> is a specification defining an authentication protocol that allows applications to access users&#39; data in a secure way. This article discusses why OAuth was invented, shows how it works and what it means for users and developers, and then goes through the specifics of Opera&#39;s OAuth implementation.</p>

<h2>Why was OAuth invented?</h2>

<p>OAuth was invented because a lot of emerging services and APIs were starting to use
Google accounts, Twitter, Facebook, etc., so the users of these third-party applications
were forced to share their own Google, Twitter or Facebook passwords. This resulted in third-party services having access to users&#39; private passwords,
which is not very desirable. We did that too when <a href="http://my.opera.com/community/">My Opera</a>
integrated Twitter and then Facebook status updates into the activity feed.</p>

<p>When <a href="http://blog.twitter.com/2010/08/twitter-applications-and-oauth.html">Twitter recently ceased support for Basic Auth APIs</a>,
and migrated their systems to OAuth, our code was already using the new OAuth-based authentication. The main advantage for users is they are fully in control of what applications can or cannot do, and they <strong>don&#39;t have to share their passwords</strong> with third party applications.</p>

<h2>OAuth for end users</h2>

<p>As an end user, you only need to pay attention to the token authorization step,
where you grant the application or website you want to use permission to access your
personal data. Of course you can deny the permission, but the application won&#39;t be able to proceed if you do.</p>

<h3>An example: Opera Portal</h3>

<p>If you go to <a href="http://portal.opera.com/">Opera Portal</a>, you are presented with the web page shown in Figure 1:</p>

<p><img width="600" src="http://forum-test.oslo.osa/kirby/content/articles/387-gentle-introduction-to-oauth/portal-screenshot.png" alt="Opera Portal" /></p>
<p class="comment">Figure 1: Opera Portal.</p>

<p>Click on <strong>Authorize Opera Portal to set your status on My Opera</strong> (or the equivalent in your language). You will see an authorization page similar to Figure 2:</p>

<p><img width="600" src="http://forum-test.oslo.osa/kirby/content/articles/387-gentle-introduction-to-oauth/oauth-authorize.png" alt="The Opera Portal authorization page" /></p>
<p class="comment">Figure 2: The Opera Portal authorization page.</p>

<p>On this page you can see important information that tells you what application you&#39;re
going to authorize. In general, if the action that led you on this page took place on the same URL as advertised - in this case, <code><a href="http://portal.opera.com/" target="_blank">http://portal.opera.com</a></code> - then it&#39;s safe to proceed. If you want to deny the request, just click on the <strong>Deny access</strong> button. If you want to allow the application access on your behalf, then provide your Opera account credentials and then click on the <strong>Grant access</strong> button. This will only happen the first time you authorize an application or web site.</p>

<p>After granting access, you will either:</p>

<ul>
<li>Be redirected automatically to the originating web site: this is the case
for web applications, like <code>portal.opera.com</code>.</li>
<li>Be notified of a 6-digit code (eg <code>667227</code>), called the <strong>verifier</strong>. This is the case for applications that run on a mobile phone, or from the command line, or in general when the application doesn&#39;t run in a browser, so it cannot follow user agent redirects.</li>
</ul>

<p>Figure 3 shows an example of verifier screen.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/387-gentle-introduction-to-oauth/oauth-verifier.png" alt="a verifier screen" /></p>
<p class="comment">Figure 3: A verifier screen.</p>

<p>The originating application will ask you to type in the verifier code (or input it in
some other way). Without that code, you won&#39;t be able to continue.</p>

<p>That completes the OAuth initial flow, so from now on, the application will be able
to access your data on your behalf until the grant expires. Some OAuth providers, like Twitter for example, never expire access tokens, so apps can go on using them forever or until you revoke them manually. In our case, we chose to expire the access tokens after 2 weeks in our first period just after the Link API release. We&#39;ll probably switch to never-expiring access tokens at a later date.</p>

<h3>Managing grants</h3>

<p>You can manage your existing grants at the following URL:
<code><a href="https://auth.opera.com/service/oauth/grants/" target="_blank">https://auth.opera.com/service/oauth/grants/</a></code>. Figure 4 shows an example
of what you will see there:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/387-gentle-introduction-to-oauth/oauth-grants.png" alt="An example of an Opera grant management page" /></p>
<p class="comment">Figure 4: An example of an Opera grant management page.</p>

<p>Within this page, you will be able to revoke tokens by application, or revoke all tokens issued for any application at the same time. The latter option will make sure <strong>no application</strong> can access your data anymore, should you ever need that.</p>

<h2>How does OAuth work?</h2>

<p>There&#39;s plenty of material available already to help you understand how OAuth works under the cover, for example the <a href="http://hueniverse.com/oauth/">hueniverse OAuth 1.0 guide</a>. In this article, we will take a more practical approach, focusing on simple examples to get you up and running quickly.</p>

<h3>The OAuth &quot;flow&quot;</h3>

<p>On <a href="http://my.opera.com/community/signup/?ref=dev-oauth">My Opera</a> you can set your status manually, or let My Opera automatically update by reading your Twitter and/or Facebook status. In general, you will want to keep your Twitter or Facebook password private. How can My Opera update your Twitter status without
knowing your password?</p>

<h3>Use the tokens, Luke</h3>

<p>My Opera manages to update your status from Facebook or Twitter without knowing your password by replacing the need for a password with an <strong>access token</strong>. In Figure 5 you can see an overview of the OAuth <strong>initial</strong> flow:</p>

<p><img width="600" src="http://forum-test.oslo.osa/kirby/content/articles/387-gentle-introduction-to-oauth/oauth-flow-1.png" alt="The OAuth initial flow" /></p>
<p class="comment">Figure 5: The OAuth initial flow.</p>

<p>The steps to obtain the access token are:</p>

<ol>
<li>My Opera sends a request to Twitter to get a <strong>request token</strong></li>
<li>If the request is valid and signed correctly, Twitter returns a request token to My Opera.</li>
<li>MYO redirects the user to an <strong>authorization URL</strong> that contains the request token. This will look something like <code>http://twitter.com/oauth/authorize?oauth_token=<strong>Xyc3TkOaVCTHUk44EYKw97yNTmmnuJjT</strong></code>.</li>
<li>The user has to then decide whether to grant My Opera access to his or her Twitter status data. This is the key part of the OAuth flow. If the user denies access, then the flow stops here.</li>
<li>If the user grants access, the request token is authorized.</li>
<li>My Opera issues a new request to Twitter, <strong>asking for an access token</strong> in exchange for the authorized request token.</li>
<li>Twitter checks the new request, and if it&#39;s correct, issues the access token, which may or may not have an expiry date, depending on which service issues it. For example, all Opera OAuth tokens currently expire after two weeks.</li>
<li>My Opera receives the access token and access token secret, so now My Opera can update the user&#39;s Twitter status by supplying the access token. At this point, the access token effectively acts as the password.</li>
</ol>

<p>Once the access token has been supplied, subsequent requests are then made using the super simplified OAuth flow show in Figure 6:</p>

<p><img width="600" src="http://forum-test.oslo.osa/kirby/content/articles/387-gentle-introduction-to-oauth/oauth-flow-2.png" alt="Super simplified OAuth flow" /></p>
<p class="comment">Figure 6: Super simplified OAuth flow.</p>

<p>The flow is much simpler now:</p>
<ul>
<li>My Opera loads the current access token and access token secrets associated with the current user from a database.</li>
<li>My Opera uses the access token and access token secrets to build a status update API request to Twitter.</li>
</ul>

<p>Done! This is what you will need to do every time you want to update the status (or anything else your access token will allow you to).</p>

<h3>Token secrets</h3>

<p>So isn&#39;t the access token exactly like a password? Well, no — the access token alone doesn&#39;t give you access. You also need an <strong>access token secret</strong>, which is a string that you never send over the network. You use the secret to generate a signature of the OAuth request. Every OAuth request is timestamped and signed. It also contains a <strong>nonce string</strong>. The nonce is a one time string that you can generate randomly, but it has to be unique. Two different OAuth requests cannot have the same nonce.</p>

<p>Here&#39;s an example of an actual OAuth request to update a status on My Opera:</p>

<pre><code>http://my.opera.com/community/api/users/status.pl?
    new_status=My%20new%20status%21%20Yeah%21&amp;
    oauth_consumer_key=test_desktop_key&amp;
    oauth_token=ATqkhy6nAijQ5yGInrhzCvWkXekZOYW2&amp;
    oauth_signature_method=HMAC-SHA1&amp;
    oauth_nonce=EVbeH7cE5KvVG8Lh8uKYf22hnW94cJ3c&amp;
    oauth_timestamp=1288018976&amp;
    oauth_version=1.0&amp;
    oauth_signature=eM495mxdUxewMa9GJ1MPEyugSsI%3D</code></pre>

<p>Any OAuth request like this is built in 3 steps:</p>

<ol>
<li><p>You start with the API endpoint URL, plus any API own parameters you might have. In our case, the <code>new_status</code> parameter is the only one that belongs to the My Opera API. So you get: <code>http://my.opera.com/community/api/users/status.pl?new_status=My%20new%20status%21%20Yeah%21</code>. Every parameter has to be URL encoded, of course.</p></li>
<li><p>You add the required OAuth arguments. The exact list of arguments that you need to include depends on the step in the OAuth workflow that you&#39;re currently on. In this example, we already have an access token, and we need to access a protected resource, so we need to supply:</p>

<ul>
<li><code>oauth_consumer_key</code>: Mandatory, given to you by the OAuth provider</li>
<li><code>oauth_token</code>: This is the key, the access token. Note that the access token secret is <strong>not included in the request</strong></li>
<li><code>oauth_signature_method</code>: Mandatory. Opera&#39;s OAuth provider only supports <code>HMAC-SHA1</code></li>
<li><code>oauth_nonce</code>: Mandatory. A random, unique, string</li>
<li><code>oauth_timestamp</code>: Mandatory. The current timestamp, in Unix epoch format (seconds since 1/1/1970)</li>
<li><code>oauth_version</code>: Optional. Must be <code>1.0</code>. Opera&#39;s OAuth provider only supports OAuth 1.0A, but the version string must be <code>1.0</code> in any case.</li>
</ul>
</li>

<li><p>You need to assemble the <strong>signature base string</strong>, which is a normalized version of the request method, URL and parameters, and you need to sign this base string with a signing key, which in our example is composed of the access token plus the access token string (<code>ATqkhy6nAijQ5yGInrhzCvWkXekZOYW2&amp;{some-random-access-token}</code>). The obtained signature must be included in the original request as <code>oauth_signature</code> parameter. The algorithm to calculate the signature is <code>HMAC-SHA1</code>. The most used languages already have working libraries to produce HMAC signatures.</p></li>
</ol>

<p>Don&#39;t worry if this seems complicated. <strong>It is</strong>, but all these operations will be carried out for you by your OAuth library of choice. Just be sure your library supports the revised <strong>OAuth 1.0A</strong> protocol version, which addresses a potential security problem known as <a href="http://hueniverse.com/2009/04/explaining-the-oauth-session-fixation-attack/">OAuth session fixation</a>.
In our OAuth provider implementation, we chose to only support OAuth 1.0A, for security reasons.</p>

<h3>OAuth security</h3>

<p>These basic properties of OAuth requests (signature + nonce + timestamp) protect you from:</p>

<ul>
<li><strong>Fake requests</strong>: Someone wanting to update your status would need your API keys (consumer key + secret), your access token, and your access token secret. Unless you communicate them openly, the secret strings are not sent over the network.</li>
<li><strong>Replay attacks</strong>: If an attacker logs all the OAuth traffic and tries to replay any request, he will only waste time, since the same signature + nonce + timestamp <strong>will never be valid again</strong>.</li>
</ul>

<h3>More details</h3>

<p>If you want to know even more details about OAuth, you can refer to the current (1.0) specification,
available as RFC5849 on <a href="http://tools.ietf.org/html/rfc5849" title="OAuth 1.0 final specification">http://tools.ietf.org/html/rfc5849</a>.
</p>

<h2>OAuth based APIs</h2>

<p>Examples of existing OAuth-based APIs and services are:</p>

<ul>
  <li>Twitter</li>
  <li>Facebook</li>
  <li>Google Contacts</li>
  <li>YouTube</li>
  <li>etc...</li>
</ul>

<p>Opera recently released the <a href="http://dev.opera.com/articles/view/introducing-the-opera-link-api/">Opera Link API</a> and
<a href="http://my.opera.com/community/api/">My Opera API</a>. The following is an example using the My Opera status API.
This example will allow you to get or update your My Opera status using a command line application.</p>

<h2>OAuth for developers</h2>

<p>Now we will look at some more of the functionality that the <strong>OAuth provider</strong> offers, which will be of particular interest to developers. As with other OAuth APIs, you will need to <strong>register your application</strong> and <strong>get your API keys</strong>. In the case of Opera&#39;s OAuth provider, you can register new applications at the following URL, which takes you the screen shown in Figure 7:</p>

<p><a href="https://auth.opera.com/service/oauth/applications/">https://auth.opera.com/service/oauth/applications/</a></p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/387-gentle-introduction-to-oauth/oauth-apps-signup.png" alt="Registering new applications on Opera&#39;s OAuth provider" /></p>
<p class="comment">Figure 7: Registering new applications on Opera&#39;s OAuth provider.</p>

<p>You will need to sign in first. If you don&#39;t have a Opera account yet, you can quickly sign up for one at <a href="http://my.opera.com/community/signup/">the My Opera signup page</a>. Once signed in, you can view your existing applications, and <a href="https://auth.opera.com/service/oauth/applications/new/">register a new one</a>. Figure 8 shows an example:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/387-gentle-introduction-to-oauth/oauth-app-example.png" alt="An example of registering a new application with OAuth" /></p>
<p class="comment">Figure 8: An example of registering a new application with OAuth.</p>

<h3>Choosing an application type</h3>

<p>Applications can be of two types:</p>

<ul>
<li>Web applications</li>
<li>Desktop/mobile applications</li>
</ul>

<h4>Web applications</h4>

<p>Web applications are the ones that <b>can accept web callbacks</b>, typically web sites, or applications that
run inside a browser and can redirect users to different URLs automatically. This redirection mechanism is used
to signal to the originating application that the user has completed the authorization step (see the previous example
about Opera Portal). Therefore <strong>every web application must define a <code>callback_url</code></strong>.
The OAuth provider will ask the user to authorize the application request, and then it will redirect the user
back at the application-specified callback URL. An example of callback URL is:</p>

<pre><code>https://superduper.example.com/callback/myopera/?oauth_token={token-string-here}&amp;oauth_verifier={verifier_code}</code></pre>

<p>Figure 9 shows an example of web application filled in and ready to be submitted:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/387-gentle-introduction-to-oauth/oauth-webapp-example.png" alt="A web application filled in and ready to be submitted" /></p>
<p class="comment">Figure 9: A web application filled in and ready to be submitted.</p>

<h4>Desktop/mobile applications</h4>

<p>Desktop/mobile applications, by contrast, are the ones that <strong>cannot accept web callbacks</strong>,
because they don&#39;t run in a browser, or more generically, they have no way to accept incoming callbacks.
This is the case of command line applications, desktop applications or applications running on mobile phones.</p>

<h3>Your API keys</h3>

<p>When you have successfully registered your application, you will be assigned a set of API keys, called the <strong>consumer key</strong> and <strong>consumer secret</strong>, as shown in Figure 10:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/387-gentle-introduction-to-oauth/oauth-app-view.png" alt="screenshot showing what it looks like when you receive your consumer key and consumer secret" /></p>
<p class="comment">Figure 10: Receiving your consumer key and consumer secret.</p>

<p>By requesting your application keys, you agree to the <a href="https://auth.opera.com/service/oauth/terms_of_service">Opera OAuth terms of service</a>.</p>

<p>OAuth libraries for any language will require you to fill in those consumer keys. The consumer secret will be used to <strong>sign every OAuth request</strong>, and <strong>must not be sent over the network</strong> at any time.</p>

<p>In the <a href="#">Resources section</a>, you will find pointers to OAuth libraries for the most used programming languages.</p>

<p>You can also edit the settings of your application at any time, or even delete it, if you don&#39;t want to use it anymore. Deleting an application will immediately invalidate all the issued tokens that are linked to it, for any user.</p>

<h2>Get your My Opera status</h2>

<p>The My Opera status API is just one of the OAuth-enabled APIs provided by Opera. You can get the status of any user on My Opera using the following command:</p>

<pre><code>http://my.opera.com/community/api/users/status.pl?username=cstrep</code></pre>

<p>What you get back is a JSON response that you can parse with your favorite JSON library:</p>

<pre><code>{
<code>&quot;status&quot; : &quot;test test test&quot;,</code>
<code>&quot;last_modified&quot; : &quot;2010-10-12 13:32:11&quot;,</code>
<code>&quot;code&quot; : 200</code>
}</code></pre>

<h2>Updating your My Opera status through the API</h2>

<p>This is where the OAuth part gets really practical. The My Opera status update API needs an OAuth access token to do its job. To try this out, as detailed before, you will either need to register an application (usually recommended), or use the test application that we prepared for this article.</p>

<p>Let&#39;s use the test application for now, but feel free to create your own application. The test application consumer keys are:</p>

<pre><code>Consumer key: <strong>test_desktop_key</strong>
Consumer secret: <strong>p2FlOFGr3XFm5gOwEKKDcg3CvA4pp0BC</strong></code></pre>

<h2>Update your status!</h2>

<p>To update your status, you need to either work out the details of how to build a OAuth request - and there&#39;s already <a href="http://hueniverse.com/oauth/">good tutorials on the topic</a> - or go and download <a href="http://dev.twitter.com/pages/oauth_libraries">an existing OAuth library</a> for the programming language of your choice.</p>

<p>An example using Perl is available in the <a href="http://github.com/operasoftware/perl5-net-myopera/blob/master/examples/myopera-status">Net::MyOpera Perl module source code</a>. To install it and use it:</p>

<ul>
<li>Download the tarball with the source code from <a href="http://github.com/operasoftware/perl5-net-myopera/tarball/master">http://github.com/operasoftware/perl5-net-myopera/tarball/master</a></li>
<li>Unpack it with <code>tar xzvf Net-MyOpera.tar.gz</code></li>
<li>Enter the main directory, and install it with: <code>perl Makefile.PL &amp;&amp; make install</code></li>
<li>Access the <code>examples</code> folder</li>
</ul>

<p>Next run the <code>myopera-status</code> example script:</p>

<pre><code>$ ./myopera-status &#39;I can haz status update!&#39;</code></pre>

<p>This will ask the OAuth provider for a request token. If everything works, you will see the following:</p>

<pre><code>Please authorize me at https://auth.opera.com/service/oauth/authorize?oauth_token=RTzxcLG9zk4utuztK6rY8avDw9UzKTpY and then
type the verifier + ENTER to continue</code></pre>

<p>Of course, the token string (here <code>RTzxcLG9...</code>) will be different in your case.
Follow the link, authorize the token, note the verifier code, then go back to the script and type the verifier code.
Press enter. This will update your My Opera status.</p>

<p>The tokens information is stored in a <code>.myoperarc</code> file in your home directory. So, from now on, the script will update your status <b>without asking you to authorize it again</b>.</p>

<h2 id="resources">More resources</h2>

<p>You can check out an <a href="http://dev.opera.com/articles/view/building-your-first-link-api-application/">introductory article about the Opera Link API</a>.</p>

<p>Complete code samples are also available at <a href="http://github.com/operasoftware/">Opera&#39;s github page</a> (<code><a href="http://github.com/operasoftware/" target="_blank">http://github.com/operasoftware/</a></code>):</p>

<ul>
<li><a href="http://github.com/operasoftware/pyoperalink">pyoperalink</a> is a Python library that allows you to access the Opera Link API, which is also based on OAuth.</li>
<li><a href="http://github.com/operasoftware/perl5-net-myopera">Net::MyOpera</a> is a Perl class that will allow you to update your My Opera status with OAuth, as explained in this article. There&#39;s <a href="http://github.com/operasoftware/perl5-net-myopera/blob/master/examples/myopera-status">a ready-made Perl5 example</a> that will just work out of the box.</li>
<li><a href="http://github.com/operasoftware/perl5-net-operalink">Net::OperaLink</a> is a Perl interface to the Opera Link API. It&#39;s still a work in progress, but it already allows you to get access to your bookmarks and speeddials.</li>
</ul>

<p>Here&#39;s more resources you can check out if you want to read more about OAuth details:</p>

<ul>
<li><a href="http://hueniverse.com/oauth/">Hueniverse Tutorials</a></li>
<li><a href="http://wiki.oauth.net/">OAuth own wiki</a></li>
<li><a href="http://dev.twitter.com/pages/oauth_faq">Twitter&#39;s OAuth FAQ</a></li>
<li><a href="http://dev.twitter.com/pages/oauth_libraries">Twitter list of OAuth libraries for most languages</a></li>
</ul>
    code
