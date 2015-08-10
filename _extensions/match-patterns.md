---
title: Match Patterns
source: https://developer.chrome.com/extensions/match_patterns
license: cc-by-3.0
---

## Introduction

[Content scripts](/extensions/content-scripts/) operate on a set of URLs defined by match patterns. You can put one or more match patterns in the `matches` part of a content script’s section of the manifest, as well as in the `exclude_matches` section. This page describes the match pattern syntax — the rules you need to follow when you specify which URLs your content script affects.

## What match patterns are

A match pattern is essentially a URL that begins with a permitted scheme (`http`, `https`, `file`, `ftp`, or `chrome-extension`), and that can contain `*` characters. The special pattern `<all_urls>` matches any URL that starts with a permitted scheme. Each match pattern has 3 parts:

1. `scheme` — for example, `http` or `file` or `*`
2. `host` — for example, `www.google.com` or `*.google.com` or `*`; if the scheme is `file`, there is no `host` part
3. `path` — for example, `/*`, `/foo* `, or `/foo/bar `

**Note:** Access to `file` URLs isn’t automatic. The user must visit the extensions management page and opt in to `file` access for each extension that requests it.

## Match pattern syntax

Here’s the basic syntax:

	<url-pattern> := <scheme>://<host><path>
	<scheme> := `*` | `http` | `https` | `file` | `ftp` | `chrome-extension`
	<host> := `*` | `*.` <any char except `/` and `*`>+
	<path> := `/` <any chars>

The meaning of `*` depends on whether it’s in the `scheme`, `host`, or `path` part. If the `scheme` is `*`, then it matches either `http` or `https`. If the `host` is just `*`, then it matches any host. If the `host` is `*.hostname`, then it matches the specified host or any of its subdomains. In the `path` section, each `*` matches 0 or more characters. The following table shows some valid patterns.

<figure block="figure">
<table>
<tr>
	<th>Pattern</th>
	<th>What it does</th>
	<th>Examples of matching URLs</th>
</tr>
<tr>
	<td><code>http://*/*</code></td>
	<td>Matches any URL that uses the <code>http</code> scheme</td>
	<td><code>http://www.google.com/</code>, <code>http://example.org/foo/bar.html</code></td>
</tr>
<tr>
	<td><code>http://*/foo*</code></td>
	<td>Matches any URL that uses the <code>http</code> scheme, on any host, as long as the path starts with <code>/foo</code></td>
	<td><code>http://example.com/foo/bar.html</code>, <code>http://www.google.com/foobar</code></td>
</tr>
<tr>
	<td><code>https://*.google.com/foo*bar</code></td>
	<td>Matches any URL that uses the <code>https</code> scheme, is on a <code>google.com</code> host (such as <code>www.google.com</code>, <code>docs.google.com</code>, or <code>google.com</code>), as long as the path starts with <code>/foo</code> and ends with <code>bar</code></td>
	<td><code>http://www.google.com/foo/baz/bar</code>, <code>http://docs.google.com/foobar</code></td>
</tr>
<tr>
	<td><code>http://example.org/foo/bar.html</code></td>
	<td>Matches the specified URL</td>
	<td><code>http://example.org/foo/bar.html</code></td>
</tr>
<tr>
	<td><code>file:///foo*</code></td>
	<td>Matches any local file whose path starts with <code>/foo</code></td>
	<td><code>file:///foo/bar.html</code>, <code>file:///foo</code></td>
</tr>
<tr>
	<td><code>http://127.0.0.1/*</code></td>
	<td>Matches any URL that uses the <code>http</code> scheme and is on the host <code>127.0.0.1</code></td>
	<td><code>http://127.0.0.1/</code>, <code>http://127.0.0.1/foo/bar.html</code></td>
</tr>
<tr>
	<td><code>*://mail.google.com/*</code></td>
	<td>Matches any URL that starts with <code>http://mail.google.com</code> or <code>https://mail.google.com</code></td>
	<td><code>http://mail.google.com/foo/baz/bar</code>, <code>https://mail.google.com/foobar</code></td>
</tr>
<tr>
	<td><code>chrome-extension://*/*</code></td>
	<td>Matches any URL pointing to an extension (the first <code>*</code> represents a filter for extension IDs, the second for paths)</td>
	<td><code>chrome-extension://askla…asdf/options.html</code></td>
</tr>
<tr>
	<td><code>&lt;all_urls&gt;</code></td>
	<td>Matches any URL that uses a permitted scheme. (See the beginning of this section for the list of permitted schemes.)</td>
	<td><code>http://example.org/foo/bar.html</code>, <code>file:///bar/baz.html</code></td>
</tr>
</table>
</figure>

Here are some examples of _invalid_ pattern matches:

<figure block="figure">
<table>
<tr>
	<th>Bad pattern</th>
	<th>Why it’s bad</th>
</tr>
<tr>
	<td><code>http://www.google.com</code></td>
	<td>No <code>path</code></td>
</tr>
<tr>
	<td><code>http://*foo/bar</code></td>
	<td><code>*</code> in the <code>host</code> can be followed only by a <code>.</code> or <code>/</code></td>
</tr>
<tr>
	<td><code>http://foo.*.bar/baz</code></td>
	<td>If <code>*</code> is in the <code>host</code>, it must be the first character</td>
</tr>
<tr>
	<td><code>http:/bar</code></td>
	<td>Missing <code>scheme</code> separator (<code>/</code> should be <code>//</code>)</td>
</tr>
<tr>
	<td><code>foo://*</code></td>
	<td>Invalid <code>scheme</code></td>
</tr>
</table>
</figure>

Some schemes are not supported in all contexts.
