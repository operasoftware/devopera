Title: What’s new in Opera's development snapshots
----
Date: 2011-06-16 14:14:56
----
Author: 
----
Text:

  <p>We just <a href="http://my.opera.com/desktopteam/blog/2011/06/14/happy-tuesday">released a new development snapshot</a>, and it contains a mind-boggling array of new features and fixes. </p>
  <p>I wanted to point out a few updates that would be interesting to web developers that are available in that build. Do note that your <a href="http://www.opera.com/browser/next/">Opera Next</a> should already have this update (checking <code>opera:about</code> should give you &quot;Presto/2.8.<b>165</b> Version/11.50&quot; under <i>Browser Identification</i>). If you were one of the early birds who installed Opera Next on your macs, note that you would have to install it again as the auto-updater on the first release did not work correctly. </p>
  <ul>
    <li>
      <h3>Checkbox Indeterminate State</h3>
      <p>The indeterminate state is used to express an indeterminate state of on an input checkbox. Here is how it would look <img height="18" src="http://gyazo.com/85c80c8807c883861cc4af5384764ccb.png" /> (and a <a href="http://jsfiddle.net/nimbu/KbR7c/">demo</a>). There is an associated <code>:indeterminate</code> pseudo-class that can be used for styling (<a href="http://jsfiddle.net/nimbu/KbR7c/">you can use it in this manner</a>).</p>      
    </li>
    <li>
      <h3>input type=email no longer rejects non-ascii domains</h3>
      <p>Previously, using an email address like <code>ja@日本.jp</code> would be rejected as an invalid email address as the original version of the spec did not account for non-ascii domains. However, this has since been updated (<a href="http://html5.org/r/5934">tracker</a>), and Opera now supports non-ascii domain names in inputs of type email. (<a href="http://jsfiddle.net/nimbu/hqrzK/">demo of non-ascii domain support</a>).</p>
    </li>
    <li><h3>Gradients with more than 32768 stops don&#39;t crash anymore</h3>
    <p>If you need 32,768 color stops in your gradients, clearly you need counseling. But in the interest of protecting the innocent from your follies, Opera no longer crashes when you have that many color stops in your gradients - be it canvas, SVG or CSS. </p>
    </li>
    <li>
      <h3>Better handling of radial gradients</h3>
      <p>Some instances of canvas radial gradients were not handled correctly. This has now been fixed.</p>
    </li>
    <li><h3>Setting <code>window.location.href</code> to <code>&quot;&quot;</code> will reload page</h3>
      <p>This seems to be sadly a common pattern among several sites to cause a page reload. Ideally, you should avoid this. But if your site was broken in Opera because of this, it will work now (like <a href="http://www.marmoladarestauracja.pl/">Marmolada Restauracja Kraków</a>). </p>
    </li>
    <li>   
      <p>More compliance with the <a href="http://aryeh.name/spec/base64.html">atob and btoa specifications</a>.</p>
    </li>
    <li>
      <p>A few web font regressions in 11.10 and 11.50 have been fixed. </p>
    </li>    
  </ul>
  <p>If you find any bugs with any of these fixes, please file them with the <a href="https://bugs.opera.com/wizard/">bug wizard</a>!</p>
