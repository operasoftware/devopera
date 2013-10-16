Title: 適切な DOCTYPE の選択
----
Date: 2010-06-15 05:26:20
----
Lang: ja
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/13-the-html-head-element-ja/" rel="prev">前の記事: HTML の &lt;head&gt; 要素</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/15-marking-up-textual-content-in-html/" rel="next">Next article—Marking up textual content in HTML</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc" rel="index">カリキュラムの目次へ</a></li>
</ul>

<h2>はじめに</h2>

<p><a href="http://dev.opera.com/articles/view/13-the-html-head-element-ja/" rev="prev">13 番目の記事</a> では HTML の <code>head</code> 要素について、要素内にどのようなものがあり、またどんな働きをしているかを解説しました。今回は DOCTYPE について、その役割や HTML の検証にどう役立つか、DOCTYPE の選び方、XML 宣言 (ほとんどの場合必要ありませんが、時たま出会うことがあります) について紹介します。</p>

<ul>
<li><a href="#doctypefirst">まずは DOCTYPE から</a></li>
<li><a href="#doctypeswitching">DOCTYPE スイッチと描画モード</a></li>
<li><a href="#validation">Validator による検証</a></li>
<li><a href="#choosingdoctype">DOCTYPE の選択</a></li>
<li><a href="#xmldeclaration">XML 宣言</a></li>
<li><a href="#summary">まとめ</a></li>
<li><a href="#exercises">課題</a></li>
<li><a href="#furtherreading">参考文献</a></li>
</ul>

<h2 id="doctypefirst">まずは DOCTYPE から</h2>

<p>HTML 文書を作成するとき、その先頭にまず書くべきなのが DOCTYPE 宣言になります。「DOCTYPE 宣言なんて言葉は知らなかった」という方も、まず安心してください。DOCTYPE 宣言はしばしば「DOCTYPE」とだけ表記されることがあります。私もこれ以降は DOCTYPE と呼んでいきます。</p>


<p>DOCTYPE が一体なんなのか気になった方は多いでしょう。DOCTYPE はその文書の “DTD” (Document Type Definition, 文書型定義) というものを宣言します。DTD には、そのバージョンの HTML でどのような要素や属性が利用出来るかといった情報が記されています。</p>

<p>いま「そのバージョン」と書きました。そうです、HTML にはいくつかのバージョンがあるのです。しかし、数はあまり気にしないでください。1 つの DOCTYPE に決めて、それを使い続けていけばよいのですから。</p>

<p>DOCTYPE には次のような役割があります。それぞれの役割に、異なるソフトウェアが関わっています。</p>

<ol>
<li>Web ブラウザーがどの描画モードを使うか決定する (描画モードについては後述)。</li>
<li>Validator がどのルールに従い文書をチェックするか決定する。</li>
</ol>

<p>どちらも、あなたがこれから行うことに影響がありますが、異なるアプローチになります。詳しくはこのあと説明します。</p>

<p>DOCTYPE は次のようなものです。</p>

    <pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot;
        &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;</pre>

<p>あなたの目には、なんだか意味のわからないものに映るかもしれませんね。では、DOCTYPE の構成について単に説明しましょう。もっと詳しい DOCTYPE の説明は <a href="http://www.blooberry.com/indexdot/html/tagpages/d/doctype.htm">!DOCTYPE</a> を読んでください。</p>

<div class="note">
<p>訳注: DOCTYPE 宣言の詳細について日本語で書かれたものもいくつかあります。</p>
<ul>
<li><a href="http://www.kanzaki.com/docs/html/doctype.html">文書型宣言の意味 -- ごく簡単なHTMLの説明</a></li>
<li><a href="http://bakera.jp/yomoyama/doctype">文書型宣言の読み方 | 鳩丸よもやま話</a></li>
<li><a href="http://web8341.info/advanced/dtd.htm">文書型宣言とブラウザでの表示</a></li>
</ul>
</div>

<p>DOCTYPE 宣言の中で最も重要なものは、引用符で囲まれた 2 つの文字列になります。まず、<code>&quot;-//W3C//DTD HTML 4.01//EN&quot;</code> はこれが W3C によって公開される DTD 文書であり、その DTD は HTML 4.01 について説明し、また英語で書かれていることを示しています。</p>

<p>次の <code>&quot;http://www.w3.org/TR/html4/strict.dtd&quot;</code> は、この DOCYTPE 宣言で使われる DTD の URL を示しています。</p>

<p>DOCTYPE 宣言は奇異なものに見えるかもしれませんが、HTML 仕様と XHTML 仕様のどちらでも必須とされているものです。DOCTYPE 宣言を書かないと、W3C Markup Validator やその他の HTML 文書のエラーチェックツールで構文エラーが出てしまいます。また、いくつかの Web ブラウザーはこの構文チェックツールを内蔵しており、また拡張というかたちでインストールできるものもあります。</p>

<h2 id="doctypeswitching">DOCTYPE スイッチと描画モード</h2>

<p>DOCTYPE を書かなくても、ブラウザーは文書を処理し表示してくれます。ブラウザーは Web 上にある様々なものを、奇妙なものを含めて表示する必要があるため、こだわってられないのです。しかし、DOCTYPE のない HTML 文書は意図したとおりに表示されない可能性があります。これには「DOCTYPE スイッチ」と呼ばれるものが関係します。</p>

<p>21 世紀にリリースされた Web ブラウザーのほとんどは、HTML 文書の DOCTYPE を見て、その情報から文書の制作者が HTML と CSS を Web 標準に従い書いているかを判断します。</p>

<p>その DOCTYPE が、上手にページがコーディングされていることを示すものであれば、ブラウザーは「標準モード」と呼ばれるモードでページを描画します。標準モードにおいてブラウザーは CSS 仕様に従った表示を行ないます。そのページを作った人が、自分が何をしているのかを分かっていると判断するわけです。</p>

<p>これに対して、古い DOCTYPE や不十分な DOCTYPE を見つけた場合には、「Quirks モード (互換モード)」という、古いブラウザーや古いプラクティスと互換性のあるモードが利用されます。Quirks モードはその文書が Web 標準を意識して書かれていないものとして扱います。つまり、Web ページは描画されますが、古いコンテンツを処理するため処理に余計な力がかかり、またあなたの意図しない奇妙な表示結果になることがあります。</p>

<p>描画モードの違いは、CSS の解釈にもっとも影響します。HTML の解釈に影響することは数点しかありません。Web デザイナーや Web 開発者としては、すべてのブラウザーで一貫性のある表示になるように、標準モードで描画されるようにしましょう。そのために、適切な DOCTYPE を選択するのです。</p>

<h2 id="validation">Validator による検証</h2>

<p>先程言ったとおり、DOCTYPE は Validator でも利用されます (後の記事で詳しく触れると思います)。現時点で Validator について知っておいてほしいことは、Validator は HTML 文書の書き方が正しいか、間違いがないかといった構文のチェックを行うソフトウェアであるということです。Validator は文書の DOCTYPE を見て、どの構文規則に従い HTML 文書のチェックを行うか決定します。スペルチェック機能のオプションで、どの言語に沿ってチェックするか指定するようなものです。ですから、何を使うかを伝えなければ、Validator はどの文法にしたがってチェックすればいいのか分からなくなります。</p>

<h2 id="choosingdoctype">DOCTYPE の選択</h2>

<p>さて、DOCTYPE の意味とその目的がわかったところで、次に知らなければいけないのは「どの DOCTYPE を使うか」でしょう。DOCTYPE はひとつではなく、とても多くあります。より先進的になりたいという人は、自分で DOCTYPE を書くことさえできます。しかし、たくさんある DOCTYPE についてその一つ一つを紹介する気にはならないので、ここではシンプルに 2 つだけ紹介します。</p>

<p>HTML を書くときは、次の DOCTYPE を使いましょう。</p>

     <pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot;
       &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;</pre>

<p>XHTML の場合は、次の DOCTYPE にしましょう。</p>

     <pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot;
       &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;&gt;</pre>

<p class="comment">注: 「真」の XHTML は XML としてブラウザーに扱わせなければいけませんが、その方法について、またどういう状況下で使えばよいかという点はこの記事の趣旨から外れているので割愛します。</p>

<p>どちらの DOCTYPE でも、ブラウザーは標準モードで文書を描画します。これによって、CSS で文書を整形するときに多くのブラウザーで一貫した表示を得ることができます。他にどんな DOCTYPE があるかは、W3C が公開した <a href="http://www.w3.org/QA/2002/04/valid-dtd-list.html">推奨する DOCTYPE のリスト</a> を見てください。</p>

<p>さて、私が紹介した DOCTYPE に「Strict (厳密な)」という文言が入っていたことに気づいた方は居るでしょうか。「厳密」とはなんとも怖いように聞こえますが、そうではありません。</p>

<p>HTML と XHTML には、紹介した「Strict」の他に「Transitional (移行期の)」という DOCTYPE も存在します。Strict には Transitional にはある表象的なマークアップが少なくなっています。しかし、Strict で許可されていない表象的なマークアップは、もともとあるべきではないものです。あなたはこのコースで、HTML を文書構造と文章の意味を記すことに、そして CSS を文書の装飾に使うことを学びます。ですから、Strict DOCTYPE の利用は理にかなったものと言えます。表象的な要素や属性を使ったら、Validator がそれを見つけて警告してくれるわけですから。</p>

<h2 id="xmldeclaration">XML 宣言</h2>

<p>DOCTYPE は HTML 文書の先頭にくるものとお話しました。しかしこれは、すこしかいつまんだ説明でした。実は、XML 宣言という、DOCTYPE の先に来るものがあるのです。</p>

<p>XHTML 文書の先頭に、次のようなコードが書かれていることがあるのをご存知でしょうか。</p>

     <pre>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</pre>

<p>これが XML 宣言と呼ばれるものです。そして、XML 宣言があるとき、それは DOCTYPE <em>よりも前に</em>書かれる必要があるのです。</p>

<p>しかし、Internet Explorer 6 は XML 宣言の解釈に問題があり、XML 宣言があると Quirks モードでページを描画してしまうのです。Quirks モードは避けるべきですから、これでは困ります。</p>

<p>しかし、ページを XML としてブラウザーに扱わせたい、UTF-8 以外の文字エンコーディングを用いたい、HTTP サーバー側が文字エンコーディングを決定する HTTP ヘッダーを送信しない、このすべての条件を満たさないのであれば、XML 宣言は必須ではありません (XHTML に関する注釈を御覧ください)。</p>

<p>しかし、XML 宣言はある例外を除き必須ではありません。その例外とは、「XHTML を XML としてブラウザーに扱わせている」「UTF-8 以外の文字エンコーディングを利用している」「サーバー側が文字エンコーディングを記す HTTP ヘッダーを送信していない」という条件全てを満たすケースです。</p>

<p>おわかりかもしれませんが、これらの条件すべて揃うのはとてもまれです。ですから、IE6 への対応を行ういちばんシンプルな方法は、XML 宣言を省略することです。ただ、間違えて DOCTYPE も省略しないでくださいね。</p>

<h2 id="summary">まとめ</h2>

<p>これから書く HTML 文書の先頭には、先ほど紹介した DOCTYPE を使いましょう。DOCTYPE は Validator にどのバージョンの HTML なのかを伝える役割があるので、私たちは文法エラーやコードのミスを知ることができます。また、紹介した DOCTYPE は最近の Web ブラウザーにおいて標準モードで描画されるためのスイッチとなります。標準モードになる DOCTYPE を使うと、CSS でスタイリングする際に多くのブラウザーで一貫した表示を行えるようになります。</p>

<h2 id="exercises">課題</h2>

<p>記事を読んだら、次の設問に答えてみましょう。</p>

<ul>
<li>HTML 文書に DOCTYPE を書く 2 つの大きな理由はなんでしょうか。</li>
<li>Transitional ではなく Strict な DOCTYPE を使う利点はなんでしょうか。</li>
<li>XML 宣言が問題になるのはどうしてですか。</li>
<li>この記事で触れなかった DOCTYPE がひとつあります。Frameset というものですが、それがどのようなものか、またなぜ使うべきではないのか調べましょう。</li>
</ul>

<h2 id="furtherreading">参考文献</h2>

<ul>
<li><a href="http://www.w3.org/QA/Tips/Doctype">Don’t forget to add a doctype</a></li>
<li><a href="http://www.w3.org/QA/2002/04/valid-dtd-list.html">Recommended DTDs to use in your Web document.</a></li>
<li><a href="http://www.alistapart.com/articles/doctype/">Fix Your Site With the Right DOCTYPE!</a></li>
<li><a href="http://hsivonen.iki.fi/doctype/">Activating the Right Layout Mode Using the Doctype Declaration</a></li>
<li><a href="http://www.opera.com/docs/specs/doctype/">The Opera 9 DOCTYPE Switches</a></li>
<li><a href="http://www.quirksmode.org/css/quirksmode.html">Quirks mode and strict mode</a></li>
<li><a href="http://24ways.org/2005/transitional-vs-strict-markup">Transitional vs. Strict Markup</a></li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/13-the-html-head-element-ja/" rel="prev">前の記事: HTML の &lt;head&gt; 要素</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/15-marking-up-textual-content-in-html/" rel="next">Next article—Marking up textual content in HTML</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc" rel="index">カリキュラムの目次へ</a></li>
</ul>

<h2>著者について</h2>

<div class="right">
<img src="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/rogerjohansson.jpg" alt="著者 Roger Johansson の写真" />
</div>

<p>Roger Johansson は Web 標準、アクセシビリティ、ユーザビリティに情熱を持つ Web プロフェッショナルです。日中は <a href="http://www.netrelations.se/">NetRelations</a> というスウェーデンの Web コンサルタンシーで Web サイト開発を行っています。そして帰宅後や週末は彼の個人サイト <a href="http://www.456bereastreet.com/">456 Berea Street</a> と <a href="http://www.kaffesnobben.com/">Kaffesnobben</a> で記事を書いています。</p>

<p>コンピューターの前に居ないとき、Roger は自宅の庭いじりをしているか、大自然の中で釣りを楽しんでいます。</p>

<h2 class="clear">翻訳者について</h2>

<div class="right">
<img alt="翻訳者 矢倉眞隆の写真" src="/articles/view/1-introduction-to-the-web-standards-cur-ja/mitsue-myakura.jpg" />
</div>

<h3>矢倉 眞隆 (Masataka Yakura)</h3>
<p>1984年生まれ。株式会社ミツエーリンクスにて、社内の品質改善活動や Web 標準 の普及啓蒙を行っている。W3C HTML WG メンバー。</p>

<h3><a href="http://www.mitsue.co.jp/">株式会社 ミツエーリンクス</a></h3>
<p>1990年創業。大規模な Web サイト開発を得意とするインフォメーション・インテグレータ。自社コンテンツの <a href="http://standards.mitsue.co.jp/">Web 標準 Blog</a> や<a href="http://accessibility.mitsue.co.jp/">アクセシビリティ Blog</a> より、Web フロントエンド技術に関するさまざまな情報を発信中。</p>

