Title: HTML の基礎
----
Date: 2010-04-20 06:38:07
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
<li class="prev"><a href="http://dev.opera.com/articles/view/11-typography-on-the-web/" rel="prev">Previous article—Typography on the web</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/13-the-html-head-element-ja/" rel="next">次の記事: HTML の &lt;head&gt; 要素</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc" rel="index">カリキュラムの目次へ</a></li>
</ul>

<h2>はじめに</h2>

<p>この記事では、HTML が何であるか、何をするものなのか、その大まかな歴史、文書の構造など、HTML の基礎について学ぶことになります。個別の機能については、この次の記事から詳しくみていきます。</p>
<p>記事の目次は次のとおりです。</p>

<ul>
<li><a href="#whatishtml">HTML とは</a></li>
<li><a href="#htmllooks">HTML はどんなもの？</a></li>
<li><a href="#htmlhistory">HTML のあゆみ</a></li>
<li><a href="#htmlstructure">HTML 文書の構造</a></li>
<li><a href="#htmlsyntax">HTML 要素の構文</a></li>
<li><a href="#blockinline">ブロックレベル要素とインライン要素</a></li>
<li><a href="#characterreferences">文字参照</a></li>
<li><a href="#summary">まとめ</a></li>
</ul>

<h2 id="whatishtml">HTML とは</h2>

<p>ほとんどのソフトウェアは、専用のファイル形式を読み書きします。たとえば、Microsoft Word は “.doc” ファイルに対応し、Microsoft Excel は “.xls” に対応します。これらのファイルには文書内容のほかに、次に開いた時の再構築の手順を記す情報、「メタデータ」と呼ばれる文書に関する情報が格納されています。メタデータには、文書の執筆者や最終変更日、新旧のバージョンを行き来するための変更履歴などが含まれています。</p>

<p>HTML (“HyperText Markup Language”) は Web 文書の内容を記述する言語になります。HTML の構文では「要素 (elements)」と呼ばれる仕組みを利用します。要素は文書中のテキストを囲み、ユーザーエージェントにその箇所がどのような挙動をとればよいかを伝えるのです。</p>

<p>ここでは「Web ブラウザー」という言葉にかわり「ユーザーエージェント」という技術用語を使っています。ユーザーエージェントは、ユーザーのかわりに Web ページにアクセスするソフトウェア全般を指し示す言葉です。デスクトップブラウザー (Internet Explorer, Opera, Firefox, Safari など) やその他のデバイス用のブラウザー (Wii インターネットチャンネルや、Opera Mini, iPhone WebKit に代表されるモバイルブラウザー) は、もちろんユーザーエージェントになります。</p>

<p>しかし、ここで重要なのは、ブラウザーだけがユーザーエージェントではないということです。たとえば、Google や Yahoo! が自社の検索エンジンのために利用する、Web の自動インデックスプログラムもユーザーエージェントになります (ただし、この場合は人間が直接プログラムを操作することはありません)。</p>

<h2 id="htmllooks">HTML はどんなもの？</h2>

<p>HTML は文書の内容とその意味をプレーンテキストで表すフォーマットです。たとえば、この段落の前にある「HTML はどんなもの？」という見出しは次のようになっています。</p>

<pre>&lt;h2 id=&quot;htmllooks&quot;&gt;HTML はどんなもの？&lt;/h2&gt;</pre>

<p>“<code>&lt;h2&gt;</code>” という部分は見出しを表すしるし (「開始タグ」と呼びます) になり、この場合は「このあとに続く部分を第2レベルの見出しとして扱う」という意味になります。そして、“<code>&lt;/h2&gt;</code>” は第2レベルの見出しを終了するタグ (「終了タグ」と呼びます) になります。</p>
<p>「要素」とは、開始タグから、開始タグから終了タグの間にある内容と、終了タグまでを含めた箇所を指します。しかしながら、多くの人が要素の意味で「タグ」という言葉を使用しています (前述したとおり、これは厳密には正しくありません)。開始タグの中にある <code>id=&quot;htmllooks&quot;</code> は属性といいます。これについては後ほど説明します。</p>
<p>多くのブラウザーには「ソース」または「ソースを表示」という機能が搭載されており、たいていの場合「表示」メニューから選択することができます。もし、あなたの利用するブラウザーがソース表示機能を提供していたら、選択してページの HTML ソースをしばらく眺めてみましょう。</p>

<h2 id="htmlhistory">HTML のあゆみ</h2>

<p>このコースのはじめにある <a href="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w-ja/" title="インターネットと Web の歴史">インターネットと Web の歴史</a> では、どのように Web が成立したかその歴史が語られています。そしてそこには、Tim Berners-Lee が World Wide Web を発明したとき、彼は最初の Web サーバーと Web ブラウザー、そして <a href="http://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/MarkUp.html" title="HTML の最初のバージョン">HTML の最初のバージョン</a> を作成したことが書かれています。</p>

<p>現在の HTML は、その初期のバージョンから大きく変化していますが、多くの内容は現在の HTML にも生きています。また、初期のバージョンに存在した「タグ」の半分以上は、今でも使われ続けています。</p>

<p>多くの人が Web ページを書き始め、最初のブラウザー以外にブラウザーが登場するようになってから、多くの機能が HTML に追加されていきました。そのうちの多くは広く使われるようになりました (文書に画像を挿入する <code>img</code> 要素がその例で、これは最初 NCSA Mosaic に実装されたものです)。いくつかの要素はプロプライエタリなもので、ひとつふたつ程度のブラウザーでしか採用されませんでした。</p>
<p>そのうち、HTML の標準化が求められるようになりました。HTML がどのように表示されるべきかを決定的にまとめた文書 (「仕様」と呼ばれます) があれば、Web ブラウザーを開発する人が HTML を実装するとき、適切に実装されているか確かめることができるからです。</p>

<p>この流れをうけ、IETF (Internet Engineering Task Force) というインターネットの相互運用性について検討する標準化団体が、HTML 仕様の素案を 1993 年に公開しました。この素案は標準にならず 1994 年に失効してしまいましたが、これが IETF に HTML の標準化を行う作業部会が組織されるきっかけになりました。</p>

<p>1995 年、最初の HTML の草案からアイデアをひろった “HTML 2.0” が策定されました。また、HTML+ という異なる提案も Dave Raggett によって執筆されました。HTML+ は、ブラウザーが実装した新しい要素 (NCSA Mosaic により始まった、画像を挿入する仕組みなど) の多くを基礎とする仕様でした。</p>

<p>同年の後半に、HTML 3.0 の草案が公開されました。しかし、このバージョンはその後の策定が打ち切られました。方向性に関してブラウザーベンダーの指示を取り付けられなかったためです。HTML 3.2 は HTML 3.0 の新機能の多くを廃し、その代わりとして当時人気だった Mosaic や Netscape Navigator というブラウザーが生み出した機能を取り入れることになりました。</p>

<p>1997 年、W3C は HTML 4.0 を勧告として公開しました。このバージョンでは、さらに多くのブラウザー固有の拡張が取り込まれていましたが、それらに理由をつけた上で HTML を整理する試みが行われていました。いくつかの要素を「非推奨」という、現仕様で定義されるが将来的に削除される事を明記したのです。こうすることで、より意味的な HTML の利用を推奨しようとしていました (詳しくは <a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a-ja/">Web 標準のモデル</a> をご覧ください)。</p>

<p>1999 年には改訂版である HTML 4.01 が公開されました (2001 年に正誤表が更新されています)。これが HTML の最終版になります。しかしながら、現在 HTML 5 の策定が進んでいる最中です。</p>

<p>2000 年に、W3C は XHTML 1.0 仕様を公開しました。これは、HTML を valid な XML 文書フォーマットになるよう再構成したものです。</p>

<h2 id="htmlstructure">HTML 文書の構造</h2>

<p>シンプルで valid な HTML 文書は、次のようなものになるでしょう。</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot;
&quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;サンプルページ&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello world.&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>HTML 文書は、「文書型」もしくは「DOCTYPE 宣言」と呼ばれるものから始まります (詳しくは <a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/" title="choosing the right doctype">Choosing the right doctype…</a> をお読みください) 。DOCTYPE 宣言は、どのバージョンの HTML が利用されているか説明するものです。DOCTYPE 宣言があることで、ブラウザーはどのように文書を解釈すればよいのか、またその文書が仕様に従って書かれているのかを調べることができるわけです。</p>

<p>DOCTYPE 宣言の次にあるのが、<code>html</code> 要素の開始タグになります。これが、文書全体を囲む要素になります。ですから、<code>html</code> 要素の終了タグは、文書の最後に登場します。</p>

<p><code>html</code> 要素の中には <code>head</code> 要素があります。これは、文書に関する情報 (メタデータ) を格納する部分になります。<code>head</code> 要素については <a href="http://dev.opera.com/articles/view/13-the-html-head-element/" title="HTML の head 要素に関する記事">次の記事</a> でもっと詳しく解説します。<code>head</code> 要素の中にある <code>title</code> 要素が、ウインドウに表示されるタイトル (この場合は“サンプルページ”) を指定する要素です。</p>

<p><code>head</code> 要素のあとに <code>body</code> 要素が続きます。<code>body</code> 要素はページの内容を囲むもので、この例では “Hello world.” と書かれたひとつの第1レベル見出し (<code>h1</code>) が文書の内容になります。</p>

<p>ソースコードを見るとわかるように、要素は他の要素を含むことが多いです。とくに文書の本文部分は、多くの入れ子になった要素から構成されることでしょう。文書の構造は、いくつもの区画から構成され、各区画はさらに細分化された区画より構成されます。ここの区画は見出しや段落、リストなどを含むでしょう。</p>
<p>また、段落は別の文書へのリンクや引用、強調を表す要素を含むことがあるでしょう。これらの要素については、おいおい解説していきます。</p>

<h2 id="htmlsyntax">HTML 要素の構文</h2>

<p>すでに見ている通り、基本的な HTML の要素は、テキストを2つのタグで囲ったものになります。いくつかの要素はテキストを囲まず、別の要素だけ囲みます (上記の例であれば、<code>html</code> が <code>head</code> と <code>body</code> だけを囲っています)。</p>

<p>要素は属性を持つことがあります。属性とは要素の挙動を変更したり、意味を付け加えたりするものです。</p>

<pre>&lt;div id=&quot;masthead&quot;&gt;
  &lt;h1&gt;
    &lt;abbr title=&quot;Hypertext Markup Language&quot;&gt;HTML&lt;/abbr&gt; の基本
  &lt;/h1&gt;
&lt;/div&gt;</pre>

<p>この例では、<code>div</code> 要素 (文書を論理的なブロックに分割する要素) に <code>id</code> 属性が与えられ、また <code>masthead</code> という値が指定されています。<code>div</code> は <code>h1</code> (最初、もしくは一番重要なレベルの見出し) 要素をもち、見出しとなるテキストが指定されています。テキストの中にはさらに、<code>abbr</code> 要素があり、その要素には <code>title</code> 属性が値 <code>Hypertext Markup Language</code> と共に指定されています。</p>

<p>HTML の属性の多くは、すべての要素に対して使えますが、特定の要素にのみ利用可能な属性もあります。属性は <code>keyword=&quot;value&quot;</code> というかたちで表されます。値はシングルクオートもしくはダブルクオートで囲むことが望まれています (クオートを省くことができる条件もあるのですが、よいプラクティスではありません。<em>いつも</em>クオートをつけるようにしましょう)。</p>

<p><a href="http://www.w3.org/TR/html401/index/attributes.html" title="HTMLの属性一覧">属性と、それらが取りうる値は HTML 仕様で定義されています</a>。つまり、HTML 文書を valid に保ちながら、独自に新しい属性を追加する事はできません。独自の属性を追加してしまうとユーザーエージェントを混乱させ、Web ページが適切に処理できない可能性もあります。例外としては、 <code>id</code> 属性と <code>class</code> 属性です。これらの属性は、文書に独自の意味やセマンティクスを与えるためのものなので、値を自由に決めることができます。</p>

<p>ある要素内に別の要素があるとき、内側の要素は外の要素の「子」と表現されます。さっきの例では、<code>abbr</code> は <code>h1</code> 要素の子要素で、またその <code>h1</code> も <code>div</code> の子要素になります。逆に、<code>div</code> は <code>h1</code> の「親」と表現されます。この「親子」という概念は CSS の基礎を構成し、また JavaScript で頻繁に使われるので、とても重要です。</p>

<h2 id="blockinline">ブロックレベル要素とインライン要素</h2>

<p>HTML の要素は「ブロックレベル要素」と「インライン要素」というふたつの大きなカテゴリーに分けられます。これらは、要素の型や、要素が指し示すものの構造を表します。</p>

<p>ブロックレベル要素は上位レベルにの要素、一般的には文書の構造を表します。ブロックレベル要素は「それまでの行を終了し、新しい行をはじめる要素」と考えるとわかりやすいかもしれません。ブロック要素のうち広く使われるものに、段落、リスト項目、見出し、表があります。</p>

<p>インライン要素はブロックレベル要素の内側に含まれ、文書内容のうち一部分を囲むものです。ですから、段落全体や、内容をまとめるものではありません。インライン要素は新しい行を生成せず、テキストの段落内に表示されます。インライン要素のうち広く使われるものに、ハイパーリンク、言葉の強調表示や短い引用分があります。</p>

<h2 id="characterreferences">文字参照</h2>

<p>HTML について、最後にもうひとつ説明することがあります。特殊文字の書き方です。</p>
<p>HTML では、&lt;, &gt;, &amp; は特別な文字になります。これらの文字は、タグなど HTML 文書を構成するパーツの開始・終了を表し、大なり、小なり、アンパサンドという記号を表しません。</p>

<p class="note">訳注: 全角のアンパサンドや大なり・小なりは特殊文字ではありません。</p>

<p>Web ページを初めて作る人が犯しやすいミスのひとつに、アンパサンドをそのまま書くことがあります。そして、予期せぬ出来事に遭遇するのです。たとえば、“Imperial units measure weight in stones&amp;pounds” という文を書くと、いくつかのブラウザーで “…stones£s” と表示されてしまいます。</p>

<p>これは、“&amp;pound;” という文字列が HTML の文字参照だからです。文字参照とは、キーボードや特定の文字コードにおいて入力できない/入力しづらい文字を HTML 文書内で表現する仕組みです。</p>

<p>そして、参照はアンパサンド (&amp;) により開始され、セミコロン (&amp;#59;) によって終了されます。しかしながら、多くのユーザーエージェントが HTML の間違えを許容する特殊な処理を行い、セミコロンのない “&amp;pound” のようなものも文字参照として扱います。参照は数値によるもの (数値参照) と短縮表記された言葉によるもの (実体参照) が存在します。</p>

<p>アンパサンドを文字として表示させたい場合は、&quot;&amp;amp;&quot; と記述する必要があります。これは文字実体参照ですが、&quot;&amp;#38;&quot; という数値参照も利用できます。<a href="http://www.evolt.org/article/A_Simple_Character_Entity_Chart/17/21234/" title="実体参照の表">evolt.org には文字参照が表でまとめられています</a>。</p>

<p class="note">訳注: 日本語では、<a href="http://www.ne.jp/asahi/minazuki/bakera/html/reference/charref">HTML で使える文字実体参照</a> に詳しくまとめられています。</p>

<h2 id="summary">まとめ</h2>

<p>この記事では、HTML の基礎やその歴史、HTML 文書の構造について学びました。次の記事では <code>&lt;head&gt;</code> 要素やその中身について詳しくみていきます。<code>&lt;body&gt;</code> はもうちょっと待ってください。</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/11-typography-on-the-web/" rel="prev">Previous article—Typography on the web</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/13-the-html-head-element-ja/" rel="next">次の記事: HTML の &lt;head&gt; 要素</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc" rel="index">カリキュラムの目次へ</a></li>
</ul>

<h2>著者紹介</h2>

<div class="right">
<img alt="著者 Mark Norman Francis の写真" src="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w/norm.jpg" /> 
<p class="comment">Photo credit: <a href="http://flickr.com/photos/andybudd/98405468/">Andy Budd</a>.</p> 
</div>

<p>Mark Norman Francis は Web の発明以前より、インターネットを利用していました。彼は Yahoo! で Front End Architect として、Web 開発におけるベストプラクティス、コーディング標準、そして品質の定義を世界的な規模で行った経験があります。</p>

<p>Yahoo! 以前の彼は、Formula One Management、Purple Interactive、City University にて Web 開発、バックエンド CGI プログラミング、システムアーキテクチャなど、さまざまな仕事を行っています。彼は <a href="http://marknormanfrancis.com/">http://marknormanfrancis.com/</a> にて、ブログのようなものを書いています。</p>

<h2 class="clear">翻訳者について</h2>

<div class="right">
<img alt="翻訳者 矢倉眞隆の写真" src="/articles/view/1-introduction-to-the-web-standards-cur-ja/mitsue-myakura.jpg" />
</div>

<h3>矢倉 眞隆 (Masataka Yakura)</h3>
<p>1984年生まれ。株式会社ミツエーリンクスにて、社内の品質改善活動や Web 標準 の普及啓蒙を行っている。W3C HTML WG メンバー。</p>

<h3><a href="http://www.mitsue.co.jp/">株式会社 ミツエーリンクス</a></h3>
<p>1990年創業。大規模な Web サイト開発を得意とするインフォメーション・インテグレータ。自社コンテンツの <a href="http://standards.mitsue.co.jp/">Web 標準 Blog</a> や<a href="http://accessibility.mitsue.co.jp/">アクセシビリティ Blog</a> より、Web フロントエンド技術に関するさまざまな情報を発信中。</p>

