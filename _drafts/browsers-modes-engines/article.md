The Opera browser is available on a wide range of platforms, in a number of flavors with different modes, engines and levels of standards support. As things can get somewhat confusing — did you know that Opera Mini on iOS comes with three rendering modes, one of which is powered by UIWebView & Opera Turbo? —, we decided to create a simple product overview that details some of these technical differences.

We’ll keep this table as up-to-date as possible, so be sure to bookmark this page for later reference!


<table>
	<tbody>
		<tr>
			<td colspan="1" rowspan="1">
				<b>OS</b>
			</td>
			<td colspan="1" rowspan="1">
				<b>Browser</b>
			</td>
			<td colspan="1" rowspan="1">
				<b>Mode</b>
			</td>
			<td colspan="1" rowspan="1">
				<b>Engine</b>
			</td>
			<td colspan="1" rowspan="1">
				<b>Proxy</b>
			</td>
			<td colspan="1" rowspan="1">
				<b>Standards</b>
			</td>
		</tr>
		<tr>
			<td colspan="1" rowspan="3">
				Android
			</td>
			<td colspan="1" rowspan="2">
				Opera
			</td>
			<td colspan="1" rowspan="1">
				Normal
			</td>
			<td colspan="1" rowspan="1">
				Chromium
			</td>
			<td colspan="1" rowspan="1">
				No
			</td>
			<td colspan="1" rowspan="1">
				Full
			</td>
		</tr>
		<tr>
			<td colspan="1" rowspan="1">
				Opera Turbo
			</td>
			<td colspan="1" rowspan="1">
				Chromium
			</td>
			<td colspan="1" rowspan="1">
				Yes
			</td>
			<td colspan="1" rowspan="1">
				Full
			</td>
		</tr>
		<tr>
			<td colspan="1" rowspan="1">
				Opera Mini
			</td>
			<td colspan="1" rowspan="1">
				Opera Mini
			</td>
			<td colspan="1" rowspan="1">
				Server-side Presto
			</td>
			<td colspan="1" rowspan="1">
				Yes
			</td>
			<td colspan="1" rowspan="1">
				Limited
			</td>
		</tr>
		<tr>
			<td colspan="1" rowspan="5">
				iOS
			</td>
			<td colspan="1" rowspan="3">
				Opera Mini
			</td>
			<td colspan="1" rowspan="1">
				Normal
			</td>
			<td colspan="1" rowspan="1">
				UIWebView (WebKit)
			</td>
			<td colspan="1" rowspan="1">
				No
			</td>
			<td colspan="1" rowspan="1">
				Full
			</td>
		</tr>
		<tr>
			<td colspan="1" rowspan="1">
				Opera Turbo (+ Video Boost)
			</td>
			<td colspan="1" rowspan="1">
				UIWebView (WebKit)
			</td>
			<td colspan="1" rowspan="1">
				Yes
			</td>
			<td colspan="1" rowspan="1">
				Full
			</td>
		</tr>
		<tr>
			<td colspan="1" rowspan="1">
				Opera Mini
			</td>
			<td colspan="1" rowspan="1">
				Server-side Presto
			</td>
			<td colspan="1" rowspan="1">
				Yes
			</td>
			<td colspan="1" rowspan="1">
				Limited
			</td>
		</tr>
		<tr>
			<td colspan="1" rowspan="2">
				Coast
			</td>
			<td colspan="1" rowspan="1">
				Normal
			</td>
			<td colspan="1" rowspan="1">
				UIWebView (WebKit)
			</td>
			<td colspan="1" rowspan="1">
				No
			</td>
			<td colspan="1" rowspan="1">
				Full
			</td>
		</tr>
		<tr>
			<td colspan="1" rowspan="1">
				Opera Turbo (+ Video Boost)
			</td>
			<td colspan="1" rowspan="1">
				UIWebView (WebKit)
			</td>
			<td colspan="1" rowspan="1">
				Yes
			</td>
			<td colspan="1" rowspan="1">
				Full
			</td>
		</tr>
		<tr>
			<td colspan="1" rowspan="1">
				J2ME
			</td>
			<td colspan="1" rowspan="1">
				Opera Mini
			</td>
			<td colspan="1" rowspan="1">
				Opera Mini
			</td>
			<td colspan="1" rowspan="1">
				Server-side Presto
			</td>
			<td colspan="1" rowspan="1">
				Yes
			</td>
			<td colspan="1" rowspan="1">
				Limited
			</td>
		</tr>
		<tr>
			<td colspan="1" rowspan="1">
				Windows Phone
			</td>
			<td colspan="1" rowspan="1">
				Opera Mini
			</td>
			<td colspan="1" rowspan="1">
				Opera Mini
			</td>
			<td colspan="1" rowspan="1">
				Server-side Presto
			</td>
			<td colspan="1" rowspan="1">
				Yes
			</td>
			<td colspan="1" rowspan="1">
				Limited
			</td>
		</tr>
		<tr>
			<td colspan="1" rowspan="2">
				Desktop
			</td>
			<td colspan="1" rowspan="2">
				Opera
			</td>
			<td colspan="1" rowspan="1">
				Normal
			</td>
			<td colspan="1" rowspan="1">
				Chromium
			</td>
			<td colspan="1" rowspan="1">
				No
			</td>
			<td colspan="1" rowspan="1">
				Full
			</td>
		</tr>
		<tr>
			<td colspan="1" rowspan="1">
				Opera Turbo
			</td>
			<td colspan="1" rowspan="1">
				Chromium
			</td>
			<td colspan="1" rowspan="1">
				Yes
			</td>
			<td colspan="1" rowspan="1">
				Full
			</td>
		</tr>
	</tbody>
</table>

Notes:

- Opera Turbo mode compresses data up to 80%. Opera Mini mode compresses data up to 90%.
- If you’re doing IP-based geo-detection, you should always check if there is an X-Forwarded-For header. That way, you can also correctly locate browser users using proxy functionality, powered by Opera Mini and Opera Turbo.
- Opera Mini comes with “limited” standards support: this means that advanced JavaScript, CSS and other dynamic elements might not work as expected, due to the peculiarities of server-side rendering and limited client capabilities.
- Older Presto-powered Opera products that are no longer under active development, such as Opera 12 for computers, Opera Mobile Classic, etc. are not listed here.
