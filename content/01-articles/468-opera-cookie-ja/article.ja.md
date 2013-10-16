Title: Opera エクステンションでの cookie 共有
----
Date: 2011-08-10 08:33:31
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

<p><a href="http://www.opera.com/browser/">デスクトップ向け Opera 11.50</a> では、エクステンションが cookie をブラウザと共有できる機能を導入しました。「クッキー」と言うと、ついついミルクとビスケットの話に脱線しそうになりますが、今回は、この新しい機能が、より使いやすいエクステンションを作成するにあたって、どのようなサポートを行うのかを見ていきましょう。また、この機能は開発者にとっても扱いやすいものであるということも付け加えておきます。</p>

<h2>Cookie って何？</h2>

<p>テクニカルなことに不案内なユーザーでも、cookie に関する良くない話が書かれた記事を目にしたことがあるのではないでしょうか。Cookie はコンピュータの中に居座り、ユーザーの行動を監視して首謀者に報告を行い、その結果、ユーザーは不要な物を売りつけられるようになるというような話です。そのようなこともあるでしょうが、ここでお話する cookie は役に立つ種類のものです。特定のサイトにログインしているかどうかを cookie がトラックするため、新しいページを閲覧する度にユーザー名とパスワードを入力する必要がなくなります。実際問題として、cookie 自体は独自で何も行うことはできず、設定しているサイトのみが確認できる文字列の一セットに過ぎないと言えます。参考にする情報を処理するのは、cookie というよりはむしろサイトです。</p>

<p class="note">ちなみにOpera では、設定 → 詳細設定 → Cookie → Cookie の設定 から、どのサイトに cookie を設定しているかを確認することができます。この設定から、cookie それぞれに対して編集や削除を行えます。</p>

<h2>でも cookie を共有したくない！</h2>

<p>Cookie を共有するのはプライバシーの侵害のように受け取られるかもしれませんが、今回お話しする共有とは、第三者であるサイトとの情報共有ではなく、ユーザー設定のようなものを Web ページとエクステンション間で共有することを指しています。ここで行おうとしているのは、ユーザーが許可を与えたサイトに関して エクステンションが cookie を使用できるようにすることです。</p>

<p class="note">ここで言及している共有 cookie は、Flash cookie とも呼ばれる <a href="http://ja.wikipedia.org/wiki/Local_Shared_Object">ローカル共有オブジェクト (LSO)</a> とは異なるものです。</p>

<h2>非常に簡単なサンプル</h2>

<p>これ以上簡単なものはないというような例をご紹介します。XMLHttpRequest を使用することはできますが、今回は単純にあるサイトのモバイル版（ここでは <a href="http://www.reddit.com">Reddit</a> ）を含むインラインフレームが組み込まれたポップアップウィンドウを作成してみましょう。以下にすべてのコードを記していますが、こちらから <a href="../cookie-sharing-in-opera-extensions/RedditQuick.oex">Cookie を共有するエクステンションの例</a> をダウンロードすることもできます。</p>

<p class="note">Facebook のモバイル版など、サイトによっては、セキュリティの観点からインラインフレームの埋め込みを許可していないものがありますのでご注意下さい。その場合、ネットワークの問題として Opera のエラーコンソールに報告されます。</p>

<p>Cookie の共有を行うには、特定のドメインへのアクセスをエクステンションに許可する、cookie 共有機能を有効にする、この 2 点が必要となります。両方共、エクステンションの <a href="http://dev.opera.com/articles/view/config-xml-howto/"><code>config.xml</code> ファイル</a> に以下の 2 行を加えることで実行できます。</p>

<pre><code>&lt;feature name=&quot;opera:share-cookies&quot; required=&quot;false&quot;/&gt;
&lt;access origin=&quot;http://reddit.com&quot; subdomains=&quot;true&quot;/&gt;</code></pre>

<p><code>&lt;feature&gt;</code> 要素の <code>required</code> 属性は、cookie が共有されない場合にエクステンションが機能するかどうかを示します。<code>access</code> 要素は、エクステンションがアクセスできるドメイン、また可能性のあるサブドメインを指定します。言い換えると、エクステンションが必要とする cookie が含まれるドメインということです。複数の <code>access</code> 要素が必要になるかもしれません。例えば、https ドメインへのアクセスが必要な場合もあります。ユーザーが必要としない第三者 cookie が共有されるのを防ぐため、ここではドメインを指定し、ワイルドカードを使用しないことが重要です。以下が今回ご紹介しているエクステンションサンプルの完全な <code>config.xml</code> ファイルです。個人的には、<em>Reddit Quick</em> と呼んでいます。</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://people.opera.com/danield/redditquick&quot; defaultlocale=&quot;en&quot;&gt;
  &lt;name&gt;Reddit Quick&lt;/name&gt;
  &lt;description xml:lang=&quot;en&quot;&gt;Check the latest Reddit stories quickly without leaving your current page.&lt;/description&gt;
  &lt;author href=&quot;http://people.opera.com/danield/&quot;&gt;Daniel Davis&lt;/author&gt;
  &lt;icon src=&quot;images/icon_64.png&quot;/&gt;
  &lt;icon src=&quot;images/icon_18.png&quot;/&gt;
  &lt;feature name=&quot;opera:share-cookies&quot; required=&quot;false&quot;/&gt;
  &lt;access origin=&quot;http://reddit.com&quot; subdomains=&quot;true&quot;/&gt;
&lt;/widget&gt;</code></pre>

<p>次は極めて重要となる <code>index.html</code> ファイルです。ここでは、ファイル内の JavaScript で Opera のツールバーにボタンを一つ追加します。ボタンには、利用するアイコン、ヒントとして表示されるタイトル、ボタンで開けるファイルを指定することができます。ファイルはポップアップウィンドウに開かれるため、ポップアップの大きさを設定することも必要です。ネットブックなどの小さめな画面に対しては、高さの最大値を 480 ピクセルに抑えた方が適切と言えます。以下が、完全な <code>index.html</code> ファイルです。</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;title&gt;Reddit Quick (background)&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
(function() {	
  // Define some properties for the button
  var buttonprops = {
    icon: &#39;images/icon_18.png&#39;,
    title: &#39;Reddit Quick&#39;,
    popup: {
      href: &#39;popup.html&#39;,
      width: 400,
      height: 480
    }
  };

  // Create the button
  var button = opera.contexts.toolbar.createItem(buttonprops);

  // Add the button to the browser&#39;s toolbar
  opera.contexts.toolbar.addItem(button);
})();
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>パズルの最後を埋めるのはポップアップ自体です。冒頭で申し上げた通り、このサンプルは単純にインラインフレームを含んだもので JavaScript は必要ありませんが、使用できるスペースをできるだけ有効に利用するために CSS を多少使いたいと思います。</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;title&gt;Reddit Quick (popup)&lt;/title&gt;
&lt;style&gt;
body {
  margin:0;
  overflow:hidden;
  padding:0;
}
iframe {
  border:none;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;iframe src=&quot;http://www.reddit.com/.compact&quot; width=&quot;100%&quot; height=&quot;474&quot;&gt;&lt;/iframe&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>これで完成です！ Reddit のモバイル版を表示するポップアップができました。ポップアップ自体は目新しいものではありませんが、エクステンションはユーザーにとってメリットがあるものです。ユーザーが Reddit にすでにログインしている場合、ポップアップ内の新しいインスタンスに再度ログインする必要がなくなります。もちろん、cookie 共有機能は XMLHttpRequest を使用する Speed Dial エクステンションでも有効です。このため、便利な Opera Speed Dial で、特定のサイトでの未読状態のニュースやメッセージの数をユーザーに表示できるエクステンションを作成することができるでしょう。簡単に利用できるこの機能には多くの可能性が潜んでいます。今後も <a href="http://addons.opera.com/">Opera エクステンションのレポジトリ</a> でみなさんが作成したものが見られることを楽しみにしています。</p>
