Title: 作成したサイトを Speed Dial 内で際立たせるには
----
Date: 2011-04-26 07:29:13
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

<h2>目次</h2>

<ul>
	<li><a href="#intro">はじめに</a></li>
	<li>
		<a href="#use-logo">ロゴの使用</a>
		<ul>
			<li><a href="#html5icons">HTML5 でのアイコン</a></li>
			<li><a href="#setanicon">Speed Dial のアイコンを指定する</a></li>
			<li><a href="#multipleicons">複数のアイコンを使用する</a></li>
		</ul>
	</li>
	<li>
		<a href="#content">Speed Dial のエントリで独自のコンテンツを提供する</a>
		<ul>
			<li><a href="#viewmode"><code>view-mode:minimized</code> の使用</a></li>
			<li><a href="#with-x-purpose">X-Purpose ヘッダの使用</a></li>
			<li><a href="#preview-refresh">一定の間隔でコンテンツを自動に読み込む</a></li>
		</ul>
	</li>


	<li><a href="#sdpriority">Speed Dial での優先順位</a></li>
	<li><a href="#productsupport">Opera プロダクトのサポート</a></li>
</ul>



	<h2 id="intro">はじめに</h2>

	<p>デスクトップ版 Opera 11.10 以降では、コンテンツ作成者が Speed Dial 内でサイトをコントロールすることができるようになりました。Speed Dial はデフォルトでは Web サイトの画面の取り込みを行いますが、サイトの所有者はアイコンを特定したり、Speed Dial に特化した CSS やコンテンツを提供することができます。</p>


	<h2 id="use-logo">ロゴの使用</h2>

	<p>ここでは、カスタマイズしたロゴやアイコンを Speed Dial でどのように使用するかを見ていきましょう。</p>


	<h3 id="html5icons">HTML5 でのアイコン</h3>

	<p>ブックマークアイコンは私達にはお馴染みのものですが、これらは、1999 年に Internet Explorer 5 により初めて導入されました。<a href="http://www.w3.org/2005/10/howto-favicon">ショートカットアイコンの実装</a> は HTML4 の仕様には含まれていませんでしたが、ブラウザ開発者達は、<code>link</code> 要素の <code>rel</code> 属性に対する値として <code>icon</code> をサポートすることに最終的に同意しました。Apple 社は、これを <a href="http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html"><code style="word-wrap:none">apple-touch-icon</code></a> を通してタッチデバイスに拡張しました。HTML5 の仕様では、<code>icon</code> は現在、<code>rel</code> 属性に対して<a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#rel-icon">有効で標準的な値</a>となっています。</p>


	<h3 id="setanicon">Speed Dial のアイコンを指定する</h3>

	<p>Speed Dial アイコンの指定は、ショートカットアイコンを指定するのと同じような方法で行えます。<code>&lt;link&gt;</code> タグをドキュメントの <code>head</code> セクションに追加するだけで簡単に行えます。</p>

	<pre>
<code>&lt;head&gt;
    &lt;title&gt;My Opera&lt;/title&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/logo.png&quot;&gt;
&lt;/head&gt;</code>
	</pre>


	<p>Speed Dial のアイコンに対する条件：</p>

	<ul>
		<li>アイコンのサイズが少なくとも、横 114 ピクセル × 縦 114 ピクセルであること。これはデフォルトでの最小サイズで、これより小さいサイズのアイコンは無視され取り扱われません。</li>

		<li>画像が、PNG、JPEG、GIF 形式であること。SVG 画像はまだサポートされていません。アニメーション画像の場合は、先頭のフレームのみが使用されます。</li>
	</ul>

	<p>デフォルトでは、アイコンの最大サイズは横 256 ピクセル × 縦 160 ピクセルです。このサイズを超えるアイコンの場合、適合するようにサイズが変更されます (<a href="icon.html">サンプルデモ</a>)。ユーザーは、opera:config のメニューから、デフォルトの最小・最大サイズの設定を変更することができます。</p>

	<p>Opera 11.10 では、従来の <code>apple-touch-icon</code>、<code>apple-touch-icon-precomposed</code>、<code>image_src</code> もサポートしています。</p>

	<h3 id="multipleicons">複数のアイコンを使用する</h3>

	<p>複数のアイコンを指定することも可能です。これは、ユーザーがページをブックマークする際に一つのアイコンを適用し、もう一つを Speed Dial に追加する際に適用できるため大変便利です。</p>

	<pre>
<code>&lt;head&gt;
    &lt;title&gt;My Opera&lt;/title&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/128x128image.png&quot;&gt;
    &lt;!-- This will be the speed dial icon --&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/200x200image.png&quot;&gt;
&lt;/head&gt;</code>
	</pre>


	<p>アイコンが一つ以上指定されている場合、Speed Dial はサイズの大きい方をエントリ用として選択します (<a href="multiple-icons-diff-sizes.html">サンプルデモ</a>) 。アイコンのサイズが同じ場合は、先頭のアイコンリンクが優先されます (<a href="multiple-icons-same-size.html">サンプルデモ</a>) 。</p>


<h2 id="content">Speed Dial のエントリで独自のコンテンツを提供する</h2>

<h3 id="viewmode"><code>view-mode:minimized</code> の使用</h3>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/451--speed-dial-/view-mode.png" width="664" height="445" alt="The Speed Dial screen in Opera 11.10" /></p>
<p class="comment">図 1: Opera 11.10 での Speed Dial 画面</p>

<p><a href="http://www.w3.org/TR/view-mode/"><code>view-mode</code></a> メディア機能は、表示モードでスタイルを指定する方法を定義します。<code>view-mode: minimized</code> を使用して異なるスタイルを提供したり、Speed Dial 用に作成したコンテンツを表示することができます。<code>view-mode</code> は、<code>device-width</code> のようなメディア機能と同じように機能します。メディアクエリと同様に、スタイルは <code>@media</code> ブロックに含まれるべきでしょう。</p>


<pre>
<code>@media screen and (view-mode: minimized) {
    body {
        color: #fff;
        background: #b20000;
    }
}</code>
</pre>


<p>あるいは、外部のスタイルシートにリンクして、media 属性の値を <code>(view-mode: minimized)</code> に設定します。</p>

<pre>
<code>&lt;link rel=stylesheet type=&quot;text/css&quot; href=&quot;minimizedstyles.css&quot; media=&quot;(view-mode:minimized)&quot;&gt;</code>
</pre>

<p><a href="view-mode.html"><code>view-mode: minimized</code> の例</a> をご覧下さい。</p>


<p>因みに、<code>view-mode: minimized</code> は、<strong>横 256 ピクセル × 縦 160 ピクセル</strong>の Speed Dial ビューポートを表示します。</p>

<h3 id="with-x-purpose">X-Purpose ヘッダの使用</h3>

<p>Speed Dial のエントリには異なる URL を提供することも可能です。これは、Speed Dial のリクエストには、必ず <code>X-Purpose: preview</code> ヘッダが追加で含まれているためです。</p>

<pre>
<code>GET / HTTP/1.1
Host: www.bbc.co.uk/news
X-Purpose: preview
User-agent: Opera/9.80 (Macintosh; Intel Mac OS X 10.6.6; U; en) Presto/2.8.99 Version/11.10</code>
</pre>

<p>そのヘッダを検知して、異なる URL を提供するか、Speed Dial に送信するファイルを限定するか、異なるコンテンツを表示するかなどを選択することができます。これにより、ユーザーが Speed Dial のエントリをクリックする際に起動する URL が影響されるというようなことはありません。</p>

<p>以下の例では、Apache の mod_rewrite を使用して、あらゆる URL に対する Speed Dial のリクエストすべてを <code>/preview.html</code> にリダイレクトしています（実際には、これより高度なものが必要になるでしょう）。</p>

<pre>
<code>RewriteEngine On
RewriteCond %{HTTP:X-Purpose} ^preview$
RewriteRule ^(.*) /preview.html
</code>
</pre>

<p>あるいはサーバー側の言語を使用して、同じ URL で異なるコンテンツを条件に応じて提供するということも考えられます。以下の例では PHP を使用しています。</p>

<pre>
<code>&lt;?php
if ($_SERVER[&#39;HTTP_X_PURPOSE&#39;] == &#39;preview&#39;) {
    // Send Speed Dial content
} else {
    // Send regular content
}
?&gt;</code>
</pre>

<h3 id="preview-refresh">一定の間隔でコンテンツを自動に読み込む</h3>

<p>Speed Dial のコンテンツをさらに動的にするために、自動読み込みの動作を定義して、ユーザーが Speed Dial に新しくエントリを追加した場合に適用することができます。これには以下のように 2 通りの方法があります。</p>
<ol><li><p><code>meta</code> タグを使用する。</p>
<pre>&lt;meta http-equiv=&quot;preview-refresh&quot; content=&quot;3600&quot;&gt;</pre></li>
<li><p><code>Preview-Refresh</code> をレスポンスヘッダとして設定する。</p>
<pre>Preview-Refresh:3600</pre>
</li></ol>
<p>上記の値は秒で設定して下さい。値が 3600 の場合、Speed Dial のエントリは一時間毎に自動更新されます。</p>

<p class="note">現在の Opera では、Preview-Refresh ヘッダを使用した自動更新間隔の設定が利用できません。しかし、<code>meta</code> タグを使用することは可能です。</p>

<h2 id="sdpriority">Speed Dial での優先順位</h2>

<p>Speed Dial では、CSS の <code>view-mode: minimized</code> がまず優先されます。スタイルが有効ではない場合、ブラウザは代わりにアイコンをさがします。アイコンの指定が無い、ファイルが無い ・壊れている、というような場合、Speed Dial はデフォルトの動作として Web サイトのスクリーンショットを使用します。</p>


<h2 id="productsupport">Opera プロダクトのサポート</h2>
<p>現時点では、これらの拡張は Opera Desktop のユーザーにのみ提供されています。</p>

<h2>さらに詳しく知りたい方へ</h2>

<ul>
	<li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#rel-icon">Links from the WHATWG HTML5 specification</a></li>

	<li><a href="http://www.w3.org/TR/view-mode/">View mode media feature specification</a></li>
</ul>
