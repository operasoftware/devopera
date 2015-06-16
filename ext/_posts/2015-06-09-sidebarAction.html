---
 
title: opr.sidebarAction
author: shwetankdixit
copyright: opera-ccby
---

		<div id="gc-container">
			<main id="gc-pagecontent" role="main">
				<article>
					<div itemprop="articleBody" class="api">
						<h2>Contents</h2>
						<table class="intro" id="intro">
							<tbody>
								<tr>
									<td class="title">Description:</td>
									<td> Add actions in the browser sidebar. In addition to its <a href="#icon">icon</a>, a sidebar action can also have a <a href="#tooltip">tooltip</a>, a <a href="#badge">badge</a>, and a <a href="#panel">panel</a>.
										<br> </td>
								</tr>
								<tr>
									<td class="title">Availability:</td>
									<td> For Opera 30 and onwards
										<br> </td>
								</tr>
								<tr>
									<td class="title">Manifest:</td>
									<td>
										<span class="code"> "sidebar_action": {...} </span>
										<br> </td>
								</tr>
								<tr>
									<td class="title">Learn More:</td>
									<td> <a href="tut_sidebar_actions.html">Creating extensions for the sidebar</a>
										<br> </td>
								</tr>
							</tbody>
						</table>
						<section>
							<h2 id="ui">Terminology</h2>
							<p>There are some additional elements in the browser that we need to understand in the context of sidebar extensions. These are the <i>sidebar</i>, which consists of a <i>buttons list</i> on the left hand side (which contains the icons for sidebar extensions). Clicking on each icon will open up its corresponding <i>panel</i> on the right hand side of the sidebar.</p>
							<img src="/static/images/sidebar-illustration.png" width="650">

							<h2 id="manifest">Manifest</h2>
							<p>These would be the changes in the manifest:</p>

							<pre data-filename="manifest.json">{
"name": "My extension",
...
<b>"sidebar_action": {
	"default_icon": "images/default_icon.png",           <em>// required</em>
	"default_title" : "My extension title" <em>// optional; shown in tooltip</em>
	"default_panel": "panel.html"        <em>// required</em>
	},</b>
...
} </pre>

You can also specify a series of sizes and icon paths as keys and values, instead of a single icon value described above. If you want to specify icons for a series of sizes, then instead of mentioning one default icon, you can specify an object listing out the paths to the icons and their corresponding sizes in the <code>default_icon</code> field like so:

<pre data-filename="manifest.json">
...
<b>"sidebar_action": {
	"default_icon": {
		"19": "images/19.png",
		"38": "images/38.png"
	},
...
</b>
</pre>

							<h3 id="icon">Icon</h3>
							<p>
								You can set the icon in two ways: using a static image or using the HTML5 canvas element. Using static images is easier for simple applications, but you can create more dynamic UIs — such as smooth animation — using the canvas element. Static images can be in any format Blink can display, including BMP, GIF, ICO, JPEG, or PNG. For unpacked extensions, images must be in the PNG format.
							</p>

							<p>
								To set the icon, use the <b>default_icon</b> field of <b>sidebar_action</b> in the manifest, or call the <a href="#method-setIcon">sidebarAction.setIcon</a> method (especially, if you want to switch it and set alternative icon instead).
							</p>

							<h3 id="tooltip">Tooltip</h3>
							<p>
			 To set the tooltip, use the <b>default_title</b> field of <b>sidebar_action</b> in the <a href="#manifest">manifest</a>, or call the <a href="#method-setTitle">sidebarAction.setTitle</a> method. You can specify locale-specific strings for the <b>default_title</b> field; see <a href="tut_internationalization.html">Internationalization</a> for details.
			</p>

							<h3 id="badge">Badge</h3>
							<p>sidebar actions can optionally display a
								<em>badge</em> — a bit of text that is layered over the icon. Badges make it easy to update the sidebar action to display a small amount of information about the state of the extension.</p>
							<p>Because the badge has limited space, it should have 4 characters or less. </p>
							<p> Set the text and color of the badge using <a href="#method-setBadgeText">sidebarAction.setBadgeText</a> and <a href="#method-setBadgeBackgroundColor">sidebarAction.setBadgeBackgroundColor</a>,
								respectively. </p>
							<h3 id="panel">Panel</h3>
							<p>If a sidebar action has a panel, it will appear when the user clicks the icon. The panel can contain any HTML content that you like, and it's automatically sized to fit the available width and height. It is recommended that developers make their panel pages fluid and responsive in order to look good in various widths.</p>
							<p> To add a panel to your sidebar action, create an HTML file with the panel's contents. Specify the HTML file in the <b>default_panel</b> field of <b>sidebar_action</b> in the <a href="#manifest">manifest</a>, or call the <a href="#method-setPanel">sidebarAction.setPanel</a> method.</p>
						</section>
						<section id="toc">
							<h2>Summary</h2>
							<table class="api-summary">
								<tbody>
									<tr> </tr>
									<tr>
										<th colspan="2">Types</th>
									</tr>
									<tr>
										<td><a href="#type-ColorArray">ColorArray</a>
										</td>
									</tr>
									<tr>
										<td><a href="#type-ImageDataType">ImageDataType</a>
										</td>
									</tr>
									<tr>
										<th colspan="2">Methods</th>
									</tr>
									<tr>
										<td><a href="#method-setTitle">setTitle</a> −
											<code class="prettyprint"> opr.sidebarAction.setTitle(
												<span>object details</span>) </code>
										</td>
									</tr>
									<tr>
										<td><a href="#method-getTitle">getTitle</a> −
											<code class="prettyprint"> opr.sidebarAction.getTitle(
												<span>object details</span>,
												<span>function callback</span>) </code>
										</td>
									</tr>
									<tr>
										<td><a href="#method-setIcon">setIcon</a> −
											<code class="prettyprint"> opr.sidebarAction.setIcon(
												<span>object details</span>,
												<span class="optional">function callback</span>) </code>
										</td>
									</tr>
									<tr>
										<td><a href="#method-setPanel">setPanel</a> −
											<code class="prettyprint"> opr.sidebarAction.setPanel(
												<span>object details</span>) </code>
										</td>
									</tr>
									<tr>
										<td><a href="#method-getPanel">getPanel</a> −
											<code class="prettyprint"> opr.sidebarAction.getPanel(
												<span>object details</span>,
												<span>function callback</span>) </code>
										</td>
									</tr>
									<tr>
										<td><a href="#method-setBadgeText">setBadgeText</a> (Not supported on mac yet) −
											<code class="prettyprint"> opr.sidebarAction.setBadgeText(
												<span>object details</span>) </code>
										</td>
									</tr>
									<tr>
										<td><a href="#method-getBadgeText">getBadgeText</a> (Not supported on mac yet) −
											<code class="prettyprint"> opr.sidebarAction.getBadgeText(
												<span>object details</span>,
												<span>function callback</span>) </code>
										</td>
									</tr>
									<tr>
										<td><a href="#method-setBadgeBackgroundColor">setBadgeBackgroundColor</a> (Not supported on mac yet) −
											<code class="prettyprint"> opr.sidebarAction.setBadgeBackgroundColor(
												<span>object details</span>) </code>
										</td>
									</tr>
									<tr>
										<td><a href="#method-getBadgeBackgroundColor">getBadgeBackgroundColor</a> (Not supported on mac yet) −
											<code class="prettyprint"> opr.sidebarAction.getBadgeBackgroundColor(
												<span>object details</span>,
												<span>function callback</span>) </code>
										</td>
									</tr>
									<tr>
										<th colspan="2">Events</th>
									</tr>
									<tr>
										<td><a href="#event-onFocus">onFocus</a> (Not supported on mac yet)
										</td>
									</tr>
									<tr>
										<td><a href="#event-onBlur">onBlur</a> (Not supported on mac yet)
										</td>
									</tr>
								</tbody>
							</table>
						</section>
						<section>
							<div class="api-reference">
								<h2 id="types">Types</h2>
								<div>
									<h3 id="type-ColorArray">ColorArray</h3>
									<p class="availability"> </p>
									<dd> array of integer </dd>
									<table> </table>
								</div>
								<div>
									<h3 id="type-ImageDataType">ImageDataType</h3>
									<p class="availability"> </p>
									<dd>Pixel data for an image. Must be an ImageData object (for example, from a
										<code>canvas</code> element).</dd>
									<table> </table>
								</div>
								<h2 id="methods">Methods</h2>
								<div>
									<h3 id="method-setTitle">setTitle </h3>
									<div class="summary">
										<code class="prettyprint"> opr.sidebarAction.setTitle(
											<span>object details</span>) </code>
									</div>
									<div class="description">
										<p> Sets the title of the sidebar action. This shows up in the tooltip. </p>
										<table>
											<tbody>
												<tr>
													<th colspan="3">Parameters</th>
												</tr>
												<tr id="property-setTitle-details">
													<td>object</td>
													<td> details</td>
													<td>
														<table class="innerTable">
															<tbody>
																<tr id="property-details-title">
																	<td>string</td>
																	<td> title</td>
																	<td>
																		<p> The string the sidebar action should display when moused over. </p>
																	</td>
																</tr>
																<tr id="property-details-tabId">
																	<td>integer</td>
																	<td>
																		<span class="optional">(optional)</span> tabId</td>
																	<td>
																		<p> Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. </p>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div>
									<h3 id="method-getTitle">getTitle </h3>
									<div class="summary">
										<code class="prettyprint"> opr.sidebarAction.getTitle(
											<span>object details</span>,
											<span>function callback</span>) </code>
									</div>
									<div class="description">
										<p class="availability"> </p>
										<p> Gets the title of the sidebar action. </p>
										<table>
											<tbody>
												<tr>
													<th colspan="3">Parameters</th>
												</tr>
												<tr id="property-getTitle-details">
													<td>object</td>
													<td> details</td>
													<td>
														<table class="innerTable">
															<tbody>
																<tr id="property-details-tabId">
																	<td>integer</td>
																	<td>
																		<span class="optional">(optional)</span> tabId</td>
																	<td>
																		<p> Specify the tab to get the title from. If no tab is specified, the non-tab-specific title is returned. </p>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr id="property-getTitle-callback">
													<td>function</td>
													<td> callback</td>
													<td>
														<p> The
															<em>callback</em> parameter should be a function that looks like this: </p>
														<code class="prettyprint">function(string result)
															<span class="subdued">{...}</span>;</code>
														<table class="innerTable">
															<tbody>
																<tr id="property-callback-result">
																	<td>string</td>
																	<td> result</td>
																	<td>
																		<br> </td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div>
									<h3 id="method-setIcon">setIcon </h3>
									<div class="summary">
										<code class="prettyprint"> opr.sidebarAction.setIcon(
											<span>object details</span>,
											<span class="optional">function callback</span>) </code>
									</div>
									<div class="description">
										<p> Sets the icon for the sidebar action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the <b>path</b> or the <b>imageData</b>                      property must be specified. </p>
										<table>
											<tbody>
												<tr>
													<th colspan="3">Parameters</th>
												</tr>
												<tr id="property-setIcon-details">
													<td>object</td>
													<td> details</td>
													<td>
														<table class="innerTable">
															<tbody>
																<tr id="property-details-imageData">
																	<td> <a href="#type-ImageDataType">ImageDataType</a> or object</td>
																	<td>
																		<span class="optional">(optional)</span> imageData</td>
																	<td>
																		<p> Either an ImageData object or a dictionary {size -&gt; ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If
																			the number of image pixels that fit into one screen space unit equals
																			<code>scale</code>, then image with size
																			<code>scale</code> * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}' </p>
																	</td>
																</tr>
																<tr id="property-details-path">
																	<td>string or object</td>
																	<td>
																		<span class="optional">(optional)</span> path</td>
																	<td>
																		<p> Either a relative image path or a dictionary {size -&gt; relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density.
																			If the number of image pixels that fit into one screen space unit equals
																			<code>scale</code>, then image with size
																			<code>scale</code> * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}' </p>
																	</td>
																</tr>
																<tr id="property-details-tabId">
																	<td>integer</td>
																	<td>
																		<span class="optional">(optional)</span> tabId</td>
																	<td>
																		<p> Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. </p>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr id="property-setIcon-callback">
													<td>function</td>
													<td>
														<span class="optional">(optional)</span> callback</td>
													<td>
														<p> If you specify the
															<em>callback</em> parameter, it should be a function that looks like this: </p>
														<code class="prettyprint">function()
															<span class="subdued">{...}</span>;</code>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div>
									<h3 id="method-setPanel">setPanel </h3>
									<div class="summary">
										<code class="prettyprint"> opr.sidebarAction.setPanel(<span>object details</span>)</code>
									</div>
									<div class="description">
										<p> Sets the html document to be opened as a panel when the user clicks on the sidebar action's icon. </p>
										<table>
											<tbody>
												<tr>
													<th colspan="3">Parameters</th>
												</tr>
												<tr id="property-setPanel-details">
													<td>object</td>
													<td> details</td>
													<td>
														<table class="innerTable">
															<tbody>
																<tr id="property-details-tabId">
																	<td>integer</td>
																	<td>
																		<span class="optional">(optional)</span> tabId</td>
																	<td>
																		<p> Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. </p>
																	</td>
																</tr>
																<tr id="property-details-panel">
																	<td>string</td>
																	<td> panel</td>
																	<td>
																		<p> The html file to show in a panel. Cannot be empty an emptry string (entering a valid html file is mandatory)</p>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div>
									<h3 id="method-getPanel">getPanel </h3>
									<div class="summary">
										<code class="prettyprint"> opr.sidebarAction.getPanel(
											<span>object details</span>,
											<span>function callback</span>) </code>
									</div>
									<div class="description">
										<p class="availability"> </p>
										<p> Gets the html document set as the panel for this sidebar action. </p>
										<table>
											<tbody>
												<tr>
													<th colspan="3">Parameters</th>
												</tr>
												<tr id="property-getPanel-details">
													<td>object</td>
													<td> details</td>
													<td>
														<table class="innerTable">
															<tbody>
																<tr id="property-details-tabId">
																	<td>integer</td>
																	<td>
																		<span class="optional">(optional)</span> tabId</td>
																	<td>
																		<p> Specify the tab to get the panel from. If no tab is specified, the non-tab-specific panel is returned. </p>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr id="property-getPanel-callback">
													<td>function</td>
													<td> callback</td>
													<td>
														<p> The
															<em>callback</em> parameter should be a function that looks like this: </p>
														<code class="prettyprint">function(string result)
															<span class="subdued">{...}</span>;</code>
														<table class="innerTable">
															<tbody>
																<tr id="property-callback-result">
																	<td>string</td>
																	<td> result</td>
																	<td>
																		<br> </td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div>
									<h3 id="method-setBadgeText">setBadgeText (Not supported on mac yet)</h3>
									<div class="summary">
										<code class="prettyprint"> opr.sidebarAction.setBadgeText(
											<span>object details</span>) </code>
									</div>
									<div class="description">
										<p> Sets the badge text for the sidebar action. The badge is displayed on top of the icon. </p>
										<table>
											<tbody>
												<tr>
													<th colspan="3">Parameters</th>
												</tr>
												<tr id="property-setBadgeText-details">
													<td>object</td>
													<td> details</td>
													<td>
														<table class="innerTable">
															<tbody>
																<tr id="property-details-text">
																	<td>string</td>
																	<td> text</td>
																	<td>
																		<p> Any number of characters can be passed, but only about four can fit in the space. </p>
																	</td>
																</tr>
																<tr id="property-details-tabId">
																	<td>integer</td>
																	<td>
																		<span class="optional">(optional)</span> tabId</td>
																	<td>
																		<p> Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. </p>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div>
									<h3 id="method-getBadgeText">getBadgeText (Not supported on mac yet)</h3>
									<div class="summary">
										<code class="prettyprint"> opr.sidebarAction.getBadgeText(
											<span>object details</span>,
											<span>function callback</span>) </code>
									</div>
									<div class="description">
										<p class="availability"> </p>
										<p> Gets the badge text of the sidebar action. If no tab is specified, the non-tab-specific badge text is returned. </p>
										<table>
											<tbody>
												<tr>
													<th colspan="3">Parameters</th>
												</tr>
												<tr id="property-getBadgeText-details">
													<td>object</td>
													<td> details</td>
													<td>
														<table class="innerTable">
															<tbody>
																<tr id="property-details-tabId">
																	<td>integer</td>
																	<td>
																		<span class="optional">(optional)</span> tabId</td>
																	<td>
																		<p> Specify the tab to get the badge text from. If no tab is specified, the non-tab-specific badge text is returned. </p>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr id="property-getBadgeText-callback">
													<td>function</td>
													<td> callback</td>
													<td>
														<p> The
															<em>callback</em> parameter should be a function that looks like this: </p>
														<code class="prettyprint">function(string result)
															<span class="subdued">{...}</span>;</code>
														<table class="innerTable">
															<tbody>
																<tr id="property-callback-result">
																	<td>string</td>
																	<td> result</td>
																	<td>
																		<br> </td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div>
									<h3 id="method-setBadgeBackgroundColor">setBadgeBackgroundColor (Not supported on mac yet)</h3>
									<div class="summary">
										<code class="prettyprint"> opr.sidebarAction.setBadgeBackgroundColor(
											<span>object details</span>) </code>
									</div>
									<div class="description">
										<p> Sets the background color for the badge. </p>
										<table>
											<tbody>
												<tr>
													<th colspan="3">Parameters</th>
												</tr>
												<tr id="property-setBadgeBackgroundColor-details">
													<td>object</td>
													<td> details</td>
													<td>
														<table class="innerTable">
															<tbody>
																<tr id="property-details-color">
																	<td>string or <a href="#type-ColorArray">ColorArray</a>
																	</td>
																	<td> color</td>
																	<td>
																		<p> An array of four integers in the range [0,255] that make up the RGBA color of the badge. For example, opaque red is
																			<code>[255, 0, 0, 255]</code>. Can also be a string with a CSS value, with opaque red being
																			<code>#FF0000</code> or
																			<code>#F00</code>. </p>
																	</td>
																</tr>
																<tr id="property-details-tabId">
																	<td>integer</td>
																	<td>
																		<span class="optional">(optional)</span> tabId</td>
																	<td>
																		<p> Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. </p>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div>
									<h3 id="method-getBadgeBackgroundColor">getBadgeBackgroundColor (Not supported on mac yet)</h3>
									<div class="summary">
										<code class="prettyprint"> opr.sidebarAction.getBadgeBackgroundColor(
											<span>object details</span>,
											<span>function callback</span>) </code>
									</div>
									<div class="description">
										<p class="availability"> </p>
										<p> Gets the background color of the sidebar action. </p>
										<table>
											<tbody>
												<tr>
													<th colspan="3">Parameters</th>
												</tr>
												<tr id="property-getBadgeBackgroundColor-details">
													<td>object</td>
													<td> details</td>
													<td>
														<table class="innerTable">
															<tbody>
																<tr id="property-details-tabId">
																	<td>integer</td>
																	<td>
																		<span class="optional">(optional)</span> tabId</td>
																	<td>
																		<p> Specify the tab to get the badge background color from. If no tab is specified, the non-tab-specific badge background color is returned. </p>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr id="property-getBadgeBackgroundColor-callback">
													<td>function</td>
													<td> callback</td>
													<td>
														<p> The
															<em>callback</em> parameter should be a function that looks like this: </p>
														<code class="prettyprint">function( <a href="#type-ColorArray">ColorArray</a> result)
															<span class="subdued">{...}</span>;</code>
														<table class="innerTable">
															<tbody>
																<tr id="property-callback-result">
																	<td> <a href="#type-ColorArray">ColorArray</a>
																	</td>
																	<td> result</td>
																	<td>
																		<br> </td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<h2 id="events">Events</h2>
								<div>
								<div>
									<h3 id="event-onFocus">onFocus (Not supported on mac yet)</h3>
									<div class="description">
										<p>When the panel becomes in focus (user clicks inside the panel).</p>

										<div>
											<h4 title="">addListener </h4>
											<div class="summary">
												<code class="prettyprint"> opr.sidebarAction.onFocus.addListener(
													<span>function callback</span>) </code>
											</div>
											<div class="description">
												<table class="innerTable">
													<tbody>
														<tr>
															<th colspan="3">Parameters</th>
														</tr>
														<tr id="property-onClicked-callback">
															<td>function</td>
															<td> callback</td>
															<td>
																<p> The
																	<em>callback</em> parameter should be a function that looks like this: </p>
																<code class="prettyprint">function( <a href="https://developer.chrome.com/extensions/windows#type-Window">windows.Window</a> window)
																	<span class="subdued">{...}</span>;</code>
																<table class="innerTable">
																	<tbody>
																		<tr id="property-onClicked-tab">
																			<td> <a href="https://developer.chrome.com/extensions/windows#type-Window">windows.Window</a>
																			</td>
																			<td> window</td>
																			<td>
																				<br> </td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								<div>
									<h3 id="event-onBlur">onBlur (Not supported on mac yet)</h3>
									<div class="description">
										<p>When panel loses focus when the user clicks on the webpage (or any other area outside the panel), thereby the panel loses focus.
										</p>
										<div>
											<h4 title="">addListener </h4>
											<div class="summary">
												<code class="prettyprint"> opr.sidebarAction.onBlur.addListener(
													<span>function callback</span>) </code>
											</div>
											<div class="description">
												<table class="innerTable">
													<tbody>
														<tr>
															<th colspan="3">Parameters</th>
														</tr>
														<tr id="property-onClicked-callback">
															<td>function</td>
															<td> callback</td>
															<td>
																<p> The
																	<em>callback</em> parameter should be a function that looks like this: </p>
																<code class="prettyprint">function( <a href="https://developer.chrome.com/extensions/windows#type-Window">windows.Window</a> window)
																	<span class="subdued">{...}</span>;</code>
																<table class="innerTable">
																	<tbody>
																		<tr id="property-onClicked-tab">
																			<td> <a href="https://developer.chrome.com/extensions/windows#type-Window">windows.Window</a>
																			</td>
																			<td> window</td>
																			<td>
																				<br> </td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</article>
			</main>
		</div>
