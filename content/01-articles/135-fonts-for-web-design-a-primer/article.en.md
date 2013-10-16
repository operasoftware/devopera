Title: Fonts for web design: a primer
----
Date: 2008-07-03 13:35:25
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

<h2>Introduction</h2>
    <p>Modern CSS provides web designers with an unprecedented level of control over online typography. Restrictions are still imposed however by the limited number of &#8220;common&#8221; fonts&#x2014;those typefaces that are generally available cross-platform. This article looks at the fonts web designers have available to them, and also considers their suitability for various tasks.</p>

    <p>Along with exploring Microsoft&#8217;s &#8220;Core fonts for the Web&#8221; pack, which includes the most common online fonts, the article also looks at more recent typefaces that can work well online, along with briefly noting the new screen fonts created for Vista.</p>

    <h2>Types of fonts</h2>

    <p>Fonts come in various styles, but most can be considered serif or sans-serif. Serif fonts have serifs&#8212;non-structural details and elements on the ends of the strokes on some letters and symbols. Sans-serif fonts (&#8220;sans-serif&#8221; literally translates as &#8220;without serif&#8221;) lack serifs. A comparison of sans-serif and serif characters can be seen in Figure 1.</p>

    <img src="http://forum-test.oslo.osa/kirby/content/articles/135-fonts-for-web-design-a-primer/figure-1.gif" width="400" height="149" alt="Left: sans-serif font Helvetica Neue; right: serif font Baskerville" />

    <p class="comment">Figure 1: Left: sans-serif font Helvetica Neue; right: serif font Baskerville.</p>
 
   <p>Traditionally, serif fonts have been popular for body copy in printing, due to their readability. Flow is assisted by the serifs, making it easier to read a passage of text. Typically, sans-serif fonts have been historically utilised for shorter blocks of text, such as headings, or other elements that need to be displayed in a bold manner, such as short passages on posters or adverts. However, today&#8217;s print publications&#x2014;especially in Europe&#x2014;often use sans-serif fonts for body copy, due to their clean and modern appearance, despite potential usability issues.</p>

    <p>Online, the low resolution of computer screens reduces the advantage of serifs. Early PCs were not able to anti-alias text, leading to serifs at a small size becoming literally unreadable. Even with more modern PCs now able to anti-alias text, serif fonts can become indistinct if displayed at too small a size. Therefore, purely for reasons of legibility, sans-serif fonts are more popular online, although again designers should be wary of displaying even the boldest and most readable of sans-serif fonts at tiny sizes.</p>
    <p>Unlike in print, web designers cannot easily &#8220;inject&#8221; fonts into a design, and are therefore restricted the typefaces commonly installed across all platforms. Although designers can specify &#8220;fall-back&#8221; fonts via a CSS font-stack, it&#8217;s pointless to use an esoteric and uncommon font as a first choice, since the vast majority of a site&#8217;s visitors will never see the type in the way the designer intended. See below for an example of a CSS font-stack.</p>
    <pre>
<code>
h1 {
font-family: &#39;Lucida Grande&#39;, &#39;Lucida Sans Unicode&#39;, Lucida, Arial, Helvetica, sans-serif;
}
</code>
</pre>
    <p>The following three sections explore the various fonts recommended for use online. The first section deals with the most popular: sans-serif fonts. The next talks about usage of serifs online. And the third details the more specialist fonts that are available for various tasks, but that shouldn&#8217;t be used for body copy.</p>
    
<h2>Sans-serif fonts for web headings and body copy</h2>

    <p>The most common sans-serif fonts online are Arial, Verdana and Trebuchet MS, available via Microsoft&#8217;s &#8220;Core fonts for the Web&#8221;. Arial is superficially similar to Helvetica, one of the most common sans-serif typefaces in use, although it actually has more in common with Univers. In any case, it&#8217;s a fairly simple design, and its prominence likely stems from its heavy use within various Windows applications. Online, Arial&#8217;s design isn&#8217;t ideal for body copy, although its bold and fairly slim characters are generally well suited to headings.</p>
    <p>Unlike Arial, Verdana was specifically designed to be read at small sizes, and its wide proportions and loose letter-spacing make it ideal for web body copy. Conversely, its spacious nature is not well-suited to display at large sizes, and headings styled in Verdana generally look ugly.</p>
    <p>The third sans-serif from the original Microsoft set is Trebuchet MS. Arguably offering more character than Arial and Verdana, Trebuchet MS is a reasonable choice for body copy, but it can be tiring to read over long passages, and like Arial it suffers at very small sizes. It is however a good choice to wheel out for striking headings, not least because of its relative rarity online. See Figure 2 for a comparison of the three Microsoft core sans-serif fonts.</p>

    <img src="http://forum-test.oslo.osa/kirby/content/articles/135-fonts-for-web-design-a-primer/figure-2.gif" alt="Arial, Verdana and Trebuchet MS." width="623" height="142" />
   
 <p class="comment">Figure 2: Arial, Verdana and Trebuchet MS.</p>

    <p>Outside of this core trio, you&#8217;re heading into murkier territory, although there are a number of fonts common enough to warrant consideration. They should, however, be used with care, and fall-back fonts must be defined for users who don&#8217;t have the rarer fonts installed.</p>

    <p>One of the most popular fonts with Mac users and designers is Helvetica, which is also common on Linux. However, its lack of penetration on Windows means it&#8217;s best suited placed in the penultimate position in a font-stack, before the generic &#8220;sans-serif&#8221; definition. Figure 3 shows a comparison of Helvetica and Arial, the Microsoft font that&#8217;s said to compare with it.</p>

    <img src="http://forum-test.oslo.osa/kirby/content/articles/135-fonts-for-web-design-a-primer/figure-3.gif" alt="Helvetica (left) and Arial (right), the Microsoft font that often draws comparison with the Swiss classic." width="421" height="143" />
   
 <p class="comment">Figure 3: Helvetica (left) and Arial (right), the Microsoft font that often draws comparison with the Swiss classic.</p>

    <p>Another popular Mac font, Lucida, is more widespread, and forms the basis of a now common font-stack&#x2014;the one shown earlier in this article. This humanist typeface was popularised by Apple (via Lucida Grande being used throughout Mac OS X), and similar fonts are common on Windows (Lucida Sans Unicode) and Linux (Lucida). It&#8217;s a good choice for a website wanting smart, modern body copy.</p>   
    <p>Century Gothic is another font outside of the &#8220;big three&#8221; that&#8217;s gained a lot of ground in recent years. A round, geometric font, its stylised nature makes it impressive and exciting for headings and short passages of text, although it&#8217;s a poor choice for lengthy body copy.</p>
    <p>Elsewhere, Tahoma is a common font for designers looking for an alternate narrow sans-serif to replace the overly popular Arial and surprisingly uncommon Helvetica&#x2014;at least on Windows and Mac. Lucida Grande, Century Gothic and Tahoma are shown in Figure 4.</p>

    <img src="http://forum-test.oslo.osa/kirby/content/articles/135-fonts-for-web-design-a-primer/figure-4.gif" alt="Lucida Grande, Century Gothic and Tahoma." width="659" height="143" alt="Lucida Grande, Century Gothic and Tahoma." />
    
<p class="comment">Figure 4: Lucida Grande, Century Gothic and Tahoma.</p>

    <p>The final group of fonts within this section are the three sans-serif &#8220;C&#8221; fonts from Microsoft, available with Windows Vista. Calibri, Candara and Corbel can be seen in Figure 5, and are suitable replacements for Arial, Trebuchet MS and Verdana, respectively. Corbel is the most stylish of the fonts&#x2014;Candara&#8217;s bandy appearance is suspect at large sizes, and Calibri&#8217;s rounded edges make it a poor choice for headings, but a good Arial replacement for body copy. Note, however, that these fonts aren&#8217;t nearly as widespread as the Microsoft core fonts, and although they can be made available by installing free Microsoft software (such as PowerPoint Viewer 2007), they certainly shouldn&#8217;t be considered as defaults.</p>
    <img src="http://forum-test.oslo.osa/kirby/content/articles/135-fonts-for-web-design-a-primer/figure-5.gif" alt="Calibri, Candara and Corbel from Windows Vista&amp;#8217;s new &amp;#8220;C&amp;#8221; fonts." width="580" height="137" />
    <p class="comment">Figure 5: Calibri, Candara and Corbel from Windows Vista&#8217;s new &#8220;C&#8221; fonts.</p>
    <h2>Serif fonts for web headings and body copy</h2>
    <p>As previously mentioned, serif fonts are less common online, due to more obvious degradation and poor readability at small sizes. However, if your design calls for a more &#8220;traditional&#8221; appearance, serifs can be used; also, the lack of serif use online means sites that use such fonts tend to stand out from the crowd.</p>
    <p>The main rule with serifs is the size them larger than you would for sans-serif fonts, to ensure legibility isn&#8217;t compromised. If in doubt, it&#8217;s best to size serifs slightly too large rather than too small.</p>
    <p>In terms of typefaces, the selection is more limited than with sans-serifs. The two most common serifs are Times New Roman (with Times being a similar equivalent for Linux) and Georgia&#x2014;see Figure 6. To some extent, Times and Georgia mirror Arial and Verdana, in that the latter font in each of those pairings is more suited to screen due to wider characters and better legibility at small sizes. Due to system defaults, however, the former is more widely used.</p>
    <img src="http://forum-test.oslo.osa/kirby/content/articles/135-fonts-for-web-design-a-primer/figure-6.gif" alt="Times New Roman, Times and Georgia." width="628" height="141" />
    <p class="comment">Figure 6: Times New Roman, Times and Georgia.</p>
    <p>Outside of the core fonts, there are are few common alternatives for Linux, but Windows and Mac users are well-served by Palatino variants. On Windows, Palatino Linotype is installed by default, and Mac users will have access to Palatino if they have Classic or iWork. Also, Mac owners with Office will have the virtually identical Book Antiqua (see Figure 7). All of these fonts are a suitable replacement for Georgia or Times variants, and are perhaps better-looking than the core fonts.</p>
    
<img src="http://forum-test.oslo.osa/kirby/content/articles/135-fonts-for-web-design-a-primer/figure-7.gif" alt="Spot the difference: Book Antiqua (left) and Palatino (right)." width="444" height="153" />
    
<p class="comment">Figure 7: Spot the difference: Book Antiqua (left) and Palatino (right).</p>
    
<p>Once you leave behind the core fonts and Palatino, you&#8217;re once again heading for more stylised but less common typefaces. Two &#8220;C&#8221; fonts are distributed with Vista&#x2014;Cambria, which acts as a fairly straight replacement for Times New Roman, and Constantia, a quite stylised serif that works well in place of Palatino. Both fonts are shown in Figure 8.</p>
    
<img src="http://forum-test.oslo.osa/kirby/content/articles/135-fonts-for-web-design-a-primer/figure-8.gif" alt="Cambria, Baskerville, and Constantia." width="392" height="144" />

    <p class="comment">Figure 8: Cambria and Constantia.</p>
    
    <p> Mac OS X also has a range of default serifs if you&#8217;re looking for something a little more stylised. Baskerville is a good example, with Garamond being an interesting alternative for Windows&#x2014;see Figure 9.</p>
    
    <img src="http://forum-test.oslo.osa/kirby/content/articles/135-fonts-for-web-design-a-primer/figure-9.gif" alt="Baskerville and Garamond." width="406" height="143" />
    <p class="comment">Figure 9: Baskerville and Garamond.</p>
    
    <h2>Display fonts and specialist typefaces for the Web</h2>
    <p>This final section briefly looks at specialist fonts. The most useful of these are monospace fonts, which are good for displaying code and scripts. Andale Mono and Courier New are both common across Windows and Mac and are also fairly common on Linux. Despite Courier New being most people&#8217;s default choice for monospace type, Andale Mono is a good choice for something that looks less &#8220;computery&#8221;, but still retains monospacing. For Linux, it&#8217;s worth using Courier as a fall-back, due to its prevalence on the system. Figure 10 shows Andale Mono and the two Courier variants.</p>
    
<img src="http://forum-test.oslo.osa/kirby/content/articles/135-fonts-for-web-design-a-primer/figure-10.gif" alt="Andale Mono, Courier New, and Courier." width="615" height="138" />
    <p class="comment">Figure 10: Andale Mono, Courier New, and Courier.</p>

    <p>Windows also has a couple of additional monospace fonts: Consolas (with Vista) and Lucida Console, although with these not being remotely widespread on other platforms, they should be used with care. Monaco on the Mac is sometimes suggested as an analog to Lucida Console, but its design isn&#8217;t terribly similar, as you can see from Figure 11. A better alternative is Lucida Sans Typewriter.</p>

    <img src="http://forum-test.oslo.osa/kirby/content/articles/135-fonts-for-web-design-a-primer/figure-11.gif" alt="Consolas, Lucida Console, and Monaco." width="602" height="153" />
    <p class="comment">Figure 11: Consolas, Lucida Console, and Monaco.</p>
   
 <p>The final trio of fonts returns us to Microsoft core fonts&#x2014;they are Arial Black, Comic Sans MS and Impact, shown in Figure 12. All three are totally unsuitable for body copy, and although Arial Black and Impact have some potential use for headings, the massively overused Comic Sans MS should really be avoided entirely, due to its unprofessional nature. Some might argue that Comic Sans MS has some validity for children&#8217;s sites, but it&#8217;s best avoided entirely&#x2014;just use smart sans-serifs at a larger size instead.</p>
    <p>Note that Macs often have display issues when Arial Black and Impact are rendered in bold, so avoid doing so. With headings, ensure the <code>font-style</code> property is set to <code>normal</code>, thereby overriding browser defaults.</p>
    <img src="http://forum-test.oslo.osa/kirby/content/articles/135-fonts-for-web-design-a-primer/figure-12.gif" alt="Arial Black, Comic Sans MS, and Impact." width="636" height="163" />
    <p class="comment">Figure 12: Arial Black, Comic Sans MS, and Impact.</p>
    <h2>Final thoughts</h2>
    <p>It&#8217;s clear from this article that although online typography doesn&#8217;t have access to anywhere near the wealth of fonts accessible to print designers, there&#8217;s more choice than Arial and Verdana. When working on designs, try using something a little different, to make your site stand out from the crowd. And remember: choosing a font <em>isn&#8217;t</em> typography&#x2014;you also need to be mindful of leading, kerning, general readability (notably with the number of characters per line), colours and more. Picking a font is just the beginning.</p>    
    
    <h2>Resources</h2>
    <ul>
      <li><a href="http://www.microsoft.com/typography/fonts/">Microsoft typography</a></li>
      <li><a href="http://www.safalra.com/web-design/typography/windows-vista-supplied-fonts/">Fonts with Windows Vista</a></li>
      <li><a href="http://support.apple.com/kb/HT1642">Fonts with Mac OS X 10.5 (&#8220;Leopard&#8221;)</a></li>
      <li><a href="http://support.apple.com/kb/HT1538">Fonts with Mac OS X 10.4 (&#8220;Tiger&#8221;)</a></li>
    </ul>
