Title: Accessible Context-sensitive Help with Unobtrusive DOM Scripting
----
Date: 2008-02-07 13:55:37
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

 <p>
        This article demonstrates two methods of calling context-sensitive help in a web form: the <strong>Field Help Method</strong> and <strong>Form Help Method</strong>, in which unobtrusive DOM/JavaScript is employed to achieve the desired result. It also
        serves to illustrate the separation of the <strong>Structure</strong> and <strong>Behavior</strong> layers of a web page. Graceful degradation is employed to make sure that the help information is accessible if JavaScript is disabled or not available
        in a user agent. My sincere thanks go to <a href="http://www.wait-till-i.com">Christian Heilmann</a>, <a href="http://adactio.com">Jeremy Keith</a>, <a href="http://quirksmode.org">Peter-Paul Koch</a>, <a href="http://simonwillison.net">Simon Willison</a>, and
        <a href="http://www.howtocreate.co.uk">Mark &quot;Tarquin&quot; Wilton-Jones</a> for their very educational blogs, books, and websites regarding unobtrusive DOM scripting, and <a href="http://www.juicystudio.com">Gez Lemon</a> of <a href="http://www.paciellogroup.com/">
            The Paciello Group (TPG)</a> for his personal support in the formulation of the Field Help Method script. </p>

<p>You can also access live examples from here - click <a href="FieldMethod.htm">here for the Field Help Method</a>, and <a href="FormMethod.htm">here for the Form Help Method</a>.</p>

    <h2>
        Field Help Method</h2>
    <p>
        When I wrote this script, my design brief was as follows:</p>
    <ol>
        <li>Contain all context-sensitive help within the markup of a web form, placed below each field label.</li>
        <li>Control the show/hide display state of field-level help by user action (help icon) through unobtrusive DOM/JavaScript.</li>
        <li>If scripting is disabled in the user agent, ensure graceful degradation occurs:
            <ul>
                <li>Automatically display help content beneath each field label.</li>
                <li>Disable the anchor links applied to all help icon images.</li>
            </ul>
        </li>
    </ol>
    <p>
        With scripting enabled, a field help icon is activated to open/close the help information, as shown in Figure 1.</p>
    <p>
        <img src="http://forum-test.oslo.osa/kirby/content/articles/71-accessible-contextsensitive-help-with-unobtrusive-dom-scripting/FieldHelp1.png" alt="Field Help with scripting enabled" width="477" height="470" /><br />
        <em>Figure 1. Form with scripting enabled</em></p>
    <p>
        With scripting disabled, all field help is revealed beneath each form label, providing &quot;graceful degradation&quot; of the script as shown in Figure 2.</p>
    <p>
        <img src="http://forum-test.oslo.osa/kirby/content/articles/71-accessible-contextsensitive-help-with-unobtrusive-dom-scripting/FieldHelp2.png" alt="Field Help with scripting disabled" width="477" height="555" /><br />
        <em>Figure 2. Form with scripting disabled</em></p>
    <h3>
        Field help markup</h3>
    <p>
        We&#39;ll look at the JavaScript that powers this method later on, but first let&#39;s go through the markup for the form. First I associate the external JavaScript file with the web page that contains the form.</p>
    <pre>
&lt;head&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;scripts/fieldhelp.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
</pre>
    <p>
        Second, I establish a relationship between the <code>&lt;img&gt; id</code> attribute value of <code><em>emailhelp</em></code>, and the following <code>&lt;div&gt; id</code> attribute value of <code><em>containeremailhelp</em></code>. This is a variation
        of the &quot;related container&quot; method that Gez Lemon demonstrates in his <a href="http://juicystudio.com/article/form-help-without-popups.html">&quot;Form Help without Popups&quot;</a> article, which uses the help icon as a trigger to open/close
        the related field help content container. The <code>&lt;img&gt;</code> <code>class</code> attribute value <code>&quot;help&quot;</code> acts as the markup hook for the external JavaScript. Then, I use the <code>&lt;img&gt;</code> <code>id</code>
        attribute value of <code>&quot;emailhelp&quot;</code> and preface it with the word &quot;container&quot; to create the help content <code>&lt;div&gt; &quot;id&quot;</code> attribute value of <code>&quot;containeremailhelp&quot;</code>.</p>
    <dl>
        <dt>Relating the Email field help container to its help icon image:</dt>
        <dd>
            <strong>icon trigger:</strong> <code>img id=&quot;emailhelp&quot; class=&quot;help&quot;</code></dd>
        <dd>
            <strong>help container:</strong> <code>div id=&quot;containeremailhelp&quot;</code></dd>
    </dl>
    <p>
        This establishes the relationship between the help icon image trigger and the help content container.</p>
    <p>
        The following markup sample shows one label in the form - Email - and illustrates the &quot;related container&quot; principal.</p>
    <pre>
&lt;div&gt;    
    &lt;label for=&quot;email&quot;&gt;
        Email (required)
        &lt;img <em>id=&quot;emailhelp&quot;</em> <em>class=&quot;help&quot;</em> alt=&quot;help icon for email field&quot; 
            width=&quot;16&quot; height=&quot;16&quot;  src=&quot;images/help_small.gif&quot;&gt;
    &lt;/label&gt;
&lt;/div&gt;
&lt;div <em>id=&quot;containeremailhelp&quot;</em>&gt;
    &lt;p&gt;
        Please enter your email address in the textbox.
    &lt;/p&gt;
&lt;/div&gt;        
</pre>
    <h3>
        Field Help JavaScript</h3>
    <p>
        The following unobtrusive JavaScript powers this method:</p>
    <pre>
/* begin addLoadEvent function - design by Simon Willison */
function addLoadEvent(func) {
    var oldonload = window.onload;
        if (typeof window.onload != &#39;function&#39;) {
        window.onload = func;
        } else {
            window.onload = function() {
                if (oldonload) {
                    oldonload();
                }
            func();
         }   
      }      
   }      
addLoadEvent(init);
addLoadEvent(function() {
/* more code to run on page load */ 
addLoadEvent(openClose);
});
/* end addLoadEvent function */

/* start function init() - design by Gez Lemon */
function init()
{
    var objImage = document.getElementsByTagName(&#39;img&#39;); 
    var objHelp, objAnchor, objClone;
    for (var iCounter=0; iCounter&lt;objImage.length; iCounter++)
    {
        if (objImage[iCounter].className == &#39;help&#39;)
    {
    
    objHelp = document.getElementById(&#39;container&#39; + objImage[iCounter].id);
    
    objAnchor = document.createElement(&#39;a&#39;);
	objClone = objImage[iCounter].cloneNode(true);
    objAnchor.setAttribute(&#39;href&#39;, &#39;#&#39;);
    objAnchor.onclick = function() {return openClose(this);};
    objAnchor.appendChild(objClone);
    objHelp.style.display = &#39;none&#39;;
    objImage[iCounter].parentNode.replaceChild(objAnchor, objImage[iCounter]);
	}
  }
}
/* end function init() */

/* begin function openClose(objElement) - design by Gez Lemon */
function openClose(objElement)
{
    var objElement = objElement;
    var objHelp = document.getElementById(&#39;container&#39; + objElement.firstChild.id); 
    
    if (objHelp)
    {
        if (objHelp.style.display == &#39;none&#39;)
        {
            objHelp.style.display = &#39;block&#39;;
        }
        else
        {
            objHelp.style.display = &#39;none&#39;;
        }
    }
    return false;
}            
/* end function openClose(objElement) */    
</pre>
    <p>
        From start to finish, this code:</p>
    <ul>
        <li>Sets the load order of the functions</li>
        <li>Identifies the trigger target markup element - <code>&lt;img&gt;</code></li>
        <li>Sets the JavaScript &quot;hook&quot; to the <code>&lt;img&gt;</code> <code>class</code> attribute value of <code>help</code></li>
        <li>Creates the <code>&lt;a&gt;&lt;/a&gt;</code> hyperlink triggers and attaches them to the help icon <code>&lt;img&gt;</code> elements</li>
        <li>Associates <code>&lt;img&gt;</code> <code>id</code> attribute values with their respective help content <code>&lt;div&gt;</code> <code>id</code> attribute values. This is repeated for each label <code>&lt;img&gt;</code> <code>id</code> attribute
            and their corresponding help content <code>&lt;div&gt; id</code> attributes. </li>
        <li>Sets the help content container on page load to a display value of <code>&quot;none&quot;</code>.
            <ul>
                <li>Since JavaScript is controlling this behavior and not CSS, when JavaScript is disabled the help content containers will appear below each field label.</li>
                <li>This enables graceful degradation to occur when JavaScript is not available for any reason.</li>
            </ul>
        </li>
    </ul>
    <h2>
        Form Help Method</h2>
    <h3>
        This method produces the following two context-sensitive help scenarios:</h3>
    <p>
        With scripting <em>enabled</em>, activating the form help icon will produce a popup window containing help for all fields in the form, as illustrated by Figure 3.</p>
    <p>
        <img src="http://forum-test.oslo.osa/kirby/content/articles/71-accessible-contextsensitive-help-with-unobtrusive-dom-scripting/FormHelp1.png" alt="form help with scripting enabled" width="477" height="294" /><br />
        <em>Figure 3. Popup form help with scripting enabled</em></p>
    <p>
        With scripting <em>disabled</em>, activating the icon will open a new window containing the same help content, providing graceful degradation of the script as shown in Figure 4.</p>
    <p>
        <img src="http://forum-test.oslo.osa/kirby/content/articles/71-accessible-contextsensitive-help-with-unobtrusive-dom-scripting/FormHelp2.png" alt="form help with scripting disabled" width="477" height="440" /><br />
        <em>Figure 4. Full window form help with scripting disabled</em></p>
    <h3>
        Form Help Markup</h3>
    <p>
        The following markup uses the <code>&lt;a&gt; rel</code> attribute value of <code>&quot;help&quot;</code> as the &quot;hook&quot; for the external JavaScript function.</p>
    <pre>
&lt;fieldset&gt;
    &lt;legend&gt;Enquiry Form&lt;/legend&gt;
        &lt;h3 class=&quot;form&quot;&gt;
            Activate/Click the icon to view help in a new window. 
        &lt;a <em>rel=&quot;help&quot;</em> href=&quot;HelpExample.htm&quot;&gt;
            &lt;img alt=&quot;help icon&quot; width=&quot;16&quot; height=&quot;16&quot; 
            src=&quot;images/help_small.gif&quot;&gt;&lt;/a&gt;&lt;/h3&gt;
</pre>
    <h3>
        Form Help JavaScript</h3>
    
    <p>
        The unobtrusive JavaScript used to power this method is as follows:</p>
    <pre>
/* begin addLoadEvent function - design by Simon Willison */
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != &#39;function&#39;) {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
addLoadEvent(window.onload);
addLoadEvent(function() {
  /* more code to run on page load */ 
});
/* end addLoadEvent function */

/* begin formhelp() function - design by Jeremy Keith */
window.onload = function()
{
    if (!document.getElementsByTagName) return false;
	var lnks = document.getElementsByTagName(&quot;a&quot;);
	for (var i=0; i&lt;lnks.length; i++) {
	    if (lnks[i].getAttribute(&quot;rel&quot;) == &quot;help&quot;) {
	        lnks[i].onclick = function() {
	            popUp(this.getAttribute(&quot;href&quot;));
	            return false;
	        }
	    }
	}
}
/* end formhelp() function */

/* begin popUp(winURL) function - design by Jeremy Keith */
function popUp(winURL) 
{
    var winURL = window.open(winURL,&quot;popup&quot;,&quot;width=460,height=500,status=yes,resizable=yes,scrollbars=yes&quot;);
}
/* end popUp(winURL) function */
</pre>
    
    <p>
        From start to finish, this JavaScript</p>
    <ul>
        <li>Sets the load order of the functions</li>
        <li>Sets <code>&lt;a&gt;&lt;/a&gt;</code> as the target markup element</li>
        <li>Sets the <code>&lt;a&gt; rel</code> attribute value <code>&quot;help&quot;</code> as the markup hook to the external JavaScript function</li>
        <li>Associates the <code>&lt;a&gt; href</code> attribute, value <code>&quot;<em>url</em>&quot;</code>, with the <code>rel</code> attribute, value <code>&quot;help&quot;</code></li>
        <li>Opens the external help content web page in a popup window when a user activates the help icon
            <ul>
                <li>With scripting disabled, activating the help icon hyperlink will open a new web page containing the field-level help.</li>
            </ul>
    </li></ul>
    
    
    
    <h2>
        Summary</h2>
    <p>
        This solution was initiated by a request from the development team I work with to provide embedded field help in a new web application. I wanted to ensure that the JavaScript I employed was unobtrusive, and that graceful degradation occured
        in its abscence - the Field Help Method was built to accomplish this. I included the Form Help Method for those who may need to employ this type of context-sensitive help. As I&#39;m certainly not perfect, there is always room for improvement. Please feel free to suggest
        any corrections, ideas, etc., to make the scripts more efficient and effective for all.</p>
