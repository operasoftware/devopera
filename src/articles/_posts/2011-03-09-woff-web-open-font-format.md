---
title: Introducing WOFF — Web Open Font Format
authors:
- zi-bin-cheah
intro: 'This article introduces the new Web Open Font Format or WOFF, explaining the benefits of WOFF, showing where to download and create WOFF font packages and presenting two WOFF demos.'
license: cc-by-nc-sa-3.0
---
<h2>Table of Contents</h2>
<ul>
<li><a href="#introduction">Introduction</a></li>
<li><a href="#whywoff">Why WOFF?</a></li>
<li><a href="#wheretoget">Where can I get WOFF fonts?</a></li>
<li><a href="#example">Examples</a></li>
<li><a href="#conclusion">Conclusion</a></li>
</ul>


<h2>Introduction</h2>

<p>
Opera's Håkon Wium Lie first publicized the idea of freely downloadable fonts, the idea being to give designers the freedom to choose fonts of their preference beyond the traditional "web safe font set". This formed the basis of Web Fonts.
</p>

<p>
We first <a href="https://dev.opera.com/articles/view/presto-2-2-and-opera-10-a-first-look/#webfonts">implemented Web Fonts in Opera 10</a>. Web fonts allow linkage of font files (Opera initially supported TrueType, OpenType and SVG fonts) via special @font-face at-rules in CSS, resulting in linked fonts being downloaded "on the fly" to the users' computers when web pages are accessed.
</p>

<p>
In Opera 11.10 (<a href="http://my.opera.com/desktopteam/blog/">grab the latest 11.10 snapshot from the Opera desktop team blog</a>), we've included support for a new font packaging format called Web Open Font Format (WOFF). This format, proposed jointly by Opera, Microsoft and Mozilla, acts as a container for TrueType and OpenType fonts, reducing file size, and allowing you to include extra information in with the font, such as font licensing. This article provides a concise introduction to WOFF, looking at why it was created, what font foundries are supporting the format, where you can get WOFF fonts from, and showcasing some examples at the end.
</p>

<h2 id="whywoff">Why WOFF?</h2>
<p>We already know that Web Fonts bring us many benefits such as better typography without a compromise to accessibility, SEO or data interoperability. WOFF brings additional benefits to the table, as follows:
</p>

<ol>
<li>It's a compressed container format, therefore offers a reduction in file size. For example, the <a href="http://www.theleagueofmoveabletype.com/fonts/12-orbitron">Orbitron</a> typeface is 16kb in WOFF format, 48kb in EOT and TTF, and 20kb in OTF.</li>
<li>Origin information is included in a metadata file placed inside the container: we can see where the font came from by looking at the <code>vendor</code> element in the metadata.</li>
<li>The license agreement is noted inside the <code>license</code> element in the metadata, therefore it is easier for vendors to know if Web Font usage is adhering to the font licenses.</li>
<li>Familiar syntax: you can use the same <code>@font-face</code> syntax to utilize WOFF fonts in your work.</li>
</ol>

<p class="note">For more information on what data can be included in WOFF metadata files, and examples of such files, read the <a href="http://www.w3.org/TR/WOFF/">WOFF File Format 1.0 specification</a>. The metadata examples are in <a href="http://www.w3.org/TR/WOFF/#appendix-a">Appendix A</a>.</p>

<p>
Foundries and browsers including IE have gathered to support this format, and support should continue to grow.
</p>

<h2 id="wheretoget">Where can I get WOFF fonts?</h2>

<p>
There are some good open source font foundries out there. The ones we like are <a href="http://www.fontsquirrel.com/">Font squirrel</a>, the <a href="http://www.theleagueofmoveabletype.com">League of movable type</a> and <a href="http://www.unifont.org/fontguide/">Unicode Font</a>. Unfortunately most of the fonts available from these foundries are not yet available in WOFF packages, so what can we do?</p>

<p>
Many open licensed fonts can be turned into WOFF fonts with ease. For example, the <a href="http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL">SIL Open Font License (OFL)</a> - a popular license for font types - explicitly says that you can modify and repackage fonts released under this license. All you need is an OTF/TTF file to covert. You can feed this into <a href="http://www.fontsquirrel.com/fontface/generator">Font Squirrel's @font-face generator</a> and generate either a bunch of different font formats to support the full gamut of modern browsers, or just the WOFF format (choose the "expert" options).
</p>

<p>
Another useful tool to have is the <a href="http://people.mozilla.com/~jkew/woff/">sfnt2woff font generator</a> command line tool, created by the nice people of Mozilla. There are Mac and Windows versions available.
</p>

<h2 id="example">Examples</h2>

<p><a href="http://people.opera.com/zibin/woff/festival/"><img src="springfestival.png" alt="WOFF font example number 1" /></a></p>

<pre>
<code>
@font-face {
	font-family: 'raleway';
	src: url('raleway_thin-webfont.woff') format('woff');
	font-style: normal;
}

em {
	font-family: raleway, serif;
	color: #F45355;

}
</code>
</pre>

<p><a href="http://people.opera.com/zibin/woff/slider/#image1"><img src="slider.png" alt="WOFF font example number 2" /></a></p>

<pre>
<code>
	@font-face {

		font-family: 'procionott';
		src: url('procionott-webfont.woff') format('woff');
		font-style: normal;
}

#subtext #image1{
	font-family: procionott, serif;
}
</code>
</pre>

<h2 id="conclusion">Conclusion</h2>

<p>
We are pleased to have brought WOFF support to the Opera browser. It can only continue to make web fonts easier for font foundries to distribute, designers to use, and users to enjoy.
</p>
