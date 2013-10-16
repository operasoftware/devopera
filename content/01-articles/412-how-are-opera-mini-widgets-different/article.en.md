Title: How are Opera Mini widgets different?
----
Date: 2010-12-07 14:04:59
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

        <p class="note">Note: the ability to run Opera Mini widgets on your phone is a B2B product delivered only to Vodafone at this time.</p>

	<h2>Introduction</h2>
	
	<p>This article details the key differences between Opera Mobile and Opera Mini Widgets.</p>
	
	<h2>Overall architecture</h2>
	
	<p>Opera Mobile widgets run in the same manner as Widgets on Opera desktop - the full widget runtime resides on the device, and the widgets runs of top of it.</p>
	
	<p>Mini is a bit different - see Figure 1. The lightweight Opera Mini client is installed on the client. When you want to run a widget, requests are sent from the device to the Opera Widgets server. The server performs updates to the Widget and transcodes the output. This output is sent back to the client.</p>

        <div>
	  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/412-how-are-opera-mini-widgets-different/mini_widget_server.png" alt="opera mini widgets architecture" /></p>
	  <p class="comment">Figure 1: Opera Mini widget architecture.</p> 
	</div>
	
	<h2 style="clear:both;">Supported operating systems</h2>
	
        <p>Opera Mobile can run widgets on Windows Mobile, Android and Symbian. Opera Mini widgets, on the other hand, can run on any operating systems based on Java or Brew.</p>
	
	<h2>Widgets environment</h2>
	
	<table>
	  <tr>
	    <th></th>
	    <th>Opera Mobile Widgets</th>
	    <th>Opera Mini Widgets</th>
	  </tr>
	  <tr>
	    <th>Client type</th>
	    <td>Full widget runtime client</td>
	    <td>Thin client</td>
	  </tr>
	  <tr>
	    <th>Server connection</th>
	    <td>n/a</td>
	    <td>HTTP and socket supported</td>
	  </tr>
	  <tr>
	    <th>Widgets specification supported</th>
	    <td>W3C Widgets</td>
	    <td>W3C Widgets</td>
	  </tr>
	  <tr>
	    <th>Widgets execution environment</th>
	    <td>Local</td>
	    <td>Server-side, on a Widgets server</td>
	  </tr>
	  <tr>
	    <th>Available SDKs</th>
	    <td>Widgets SDK</td>
	    <td>Widgets SDK</td>
	  </tr>
	  <tr>
	    <th>Running multiple widgets simultaneously</th>
	    <td>Supported only if multiprocessing is supported by the device</td>
	    <td>Supported on the Widgets server</td>
	  </tr>
	  <tr>
	    <th>Device API integration</th>
	    <td>Supported on client</td>
	    <td>Supported on Widgets server</td>
	  </tr>
	  <tr>
	    <th>JIL</th>
	    <td>Supported on client</td>
	    <td>Limited JIL support on Opera Mini, which is further limited by the JSRs supported by the device. Also, JIL is only supported on Socket connections.</td>
	  </tr>
	</table>
	
	<h2>Functional differences</h2>
	
	<table>
	  <tr>
	    <th></th>
	    <th>Opera Mobile Widgets</th>
	    <th>Opera Mini Widgets</th>
	  </tr>
	  <tr>
	    <th>Execution flow</th>
	    <td>Execution and rendering of Widgets is done locally on the client device.</td>
	    <td>Execution is routed to a Widgets server that maintains a widget session per user. The server enders updates to Widgets, then transcodes them and sends them to the client.</td>
	  </tr>
	  <tr>
	    <th>Technology support</th>
	    <td>Local support for HTML, CSS, SVG, JavaScript, DOM, HTML5 Forms and other web standards.</td>
	    <td>Local support for OBML.<br />
	    
	    Server-side support for HTML, CSS, JavaScript, DOM and other web standards, which is then transcoded into OBML and sent to the client. As such, the CSS rendering has limitations, for example no support for CSS transitions, border radius and other processor intensive CSS. JavaScript support is also limited, as the execution is on the server: instant updates to the DOM will not work, for example.</td>
	  </tr>
	  <tr>
	    <th>Widget updates on client</th>
	    <td>Widgets are continuously running; updates are instant.</td>
	    <td>Widgets are executed on the server only when the client requests updates.
            updates are supported in socket connections – every update in the widget is sent automatically by the widget server.<br />
For HTTP-based connections, the widget is not running continuously on the
server, but in iterations lasting a couple of minutes or so, depending on
how the user reloads the pages. Whenever the user reloads the page, the
widget is kick-started (if it is sleeping). It will send its updates to the client
and, if no other updates are requested within a couple of minutes, it will go
back to sleep.</td>
	  </tr>
	  <tr>
	    <th>State storage</th>
	    <td>Done locally by JavaScript</td>
	    <td>Done by JavaScript on the widget server. As an example, a currency
converter, feed reader, or Facebook/Twitter-based widgets can store
user-specific details between consecutive connections.</td>
	  </tr>
   	  <tr>
	    <th>Animations</th>
	    <td>Supported</td>
	    <td>Smooth animations are not supported at all. Animations with slower updates will require a lot of network traffic, and updates to the widget will be dependent on network speeds.</td>
	  </tr>
      <tr>
	    <th>Good for games?</th>
	    <td>Yes</td>
	    <td>Not for fancy games, but state-based games will work very well, for example tic-tac-toe, chess, etc.</td>
	  </tr>
	  <tr>
	    <th>Examples</th>
	    <td>Any W3C widget</td>
	    <td>Widgets that are portals to other services work very well, for example weather, calculator, currency converter, stocks, feed reader, etc.</td>
	  </tr>
	  <tr>
	    <th>Live icons</th>
	    <td>Supported</td>
	    <td>Supported</td>
	  </tr>
	</table>
	
	<h2>Opera Mobile widgets examples</h2>
	
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/412-how-are-opera-mini-widgets-different/mob_widgets_game.png" alt="opera mobile widgets example" style="padding-right: 2px;" /><img src="http://forum-test.oslo.osa/kirby/content/articles/412-how-are-opera-mini-widgets-different/mob_widgets_screen.png" alt="opera mobile widgets example" style="padding-right: 2px;" /><img src="http://forum-test.oslo.osa/kirby/content/articles/412-how-are-opera-mini-widgets-different/mob_widgets_add_widgets.png" alt="opera mobile widgets example" /></p> 
	
	<h2>Opera Mini widgets examples</h2>
	
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/412-how-are-opera-mini-widgets-different/mini_widgets.png" alt="opera mini widgets example" style="padding-right: 2px;" /><img src="http://forum-test.oslo.osa/kirby/content/articles/412-how-are-opera-mini-widgets-different/mini_widgets2.png" alt="opera mini widgets example" style="padding-right: 2px;" /><img src="http://forum-test.oslo.osa/kirby/content/articles/412-how-are-opera-mini-widgets-different/mini_widget_live_scores.png" alt="opera mini widgets example" /></p>
      
