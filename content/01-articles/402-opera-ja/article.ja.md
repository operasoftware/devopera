Title: Opera エクステンション：タブ
----
Date: 2010-11-03 13:29:51
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

<h2>
  はじめに</h2>
<p>
  Opera エクステンションは強力で、HTML や JavaScript、CSS といった Web 標準の技術を使ってデスクトップ版 Opera のボタンやデフォルト CSS などの多くの機能を操ることが出来ます。
  この文書では、タブの操作方法を解説します。</p>
<p>
  Opera エクステンションの作成方法を知りたいなら <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world-ja/">Opera エクステンションで Hello World!</a> から読み始めるといいでしょう。</p>
<h3>
  目次</h3>
<ol>
  <li><a href="#create">タブを作成する</a></li>
  <li><a href="#create_url">URL を設定したタブを作成する</a></li>
  <li><a href="#focus">タブにフォーカスする</a></li>
  <li><a href="#close">タブを閉じる</a></li>
  <li><a href="#conclusion">その後は？</a></li>
  <li><a href="#api">API リファレンス</a></li></ol>
<h2 id="create">
  タブを作成する</h2>
<p>
  ではタブの作成方法から見ていきましょう。
  DOM や文書の読込みを待つのに、<code>addEventListener</code> 関数を使っていきます。
  次のコードでは、文書の読込みを待つのにイベントリスナーを使っています。
  読込みが終わると関数が実行されます。</p>
<p>
  <code>opera.extension.tabs</code> が存在しているかきちんと確認してから、このオブジェクトが持つタブの操作関数を呼びだします。</p>
<pre><code>
window.addEventListener( &quot;load&quot;, function(){
  if( opera.extension.tabs.create ) { // check if function exists
    opera.extension.tabs.create();  // create tabs
  } 
  else {
    //do nothing 
  }
}, false);</code></pre>
<h2 id="create_url">
  URL を設定したタブを作成する</h2>
<p>
  <code>opera.extensions.tabs.create</code> 関数には、引数としてフォーカスするかどうかの真偽値と URL とを持つ <code>TabProperties</code> オブジェクトを一つ与えることが出来ます。
  引数として URL を与えられるので、<a href="http://www.opera.com">www.opera.com</a> を読み込ませるタブを作ることが出来ます。</p>
<pre><code>
window.addEventListener( &quot;load&quot;, function(){
  if( opera.extension.tabs.create ) {
    opera.extension.tabs.create( { url:&quot;http://www.opera.com/&quot; } );
  } 
  else {
    //do nothing
  }
}, false );</code></pre>
<h2 id="focus">
  タブにフォーカスする</h2>
<p>
  イベントリスナーと <code>opera.extension.tabs</code> オブジェクトの存在を確認するコードと同様にして色々なやり方でタブを操作することが出来ます。
  まず、URL 欄にフォーカスしたタブの作り方は次のようになります。</p>
<pre><code>
opera.extension.tabs.create({focused:true})</code></pre>
<p>
  URL を設定しフォーカスを当てたタブは次のように作ります。</p>
<pre><code>
opera.extension.tabs.create({url:&quot;http://www.opera.com/&quot;,focused:true})</code></pre>
<h2 id="close">
  タブを閉じる</h2>
<p>
  タブを閉じるのもこれまで同様簡単です。タブを作り、1秒後にそのタブを閉じるコードを書いてみましょう。</p>
<pre><code>
window.addEventListener( &quot;load&quot;, function(){
  if( opera.extension.tabs ) {
    var tab = opera.extension.tabs.create({url:&quot;http://www.opera.com/&quot;,focused:true});
    window.setTimeout( function(){
      opera.extension.tabs.close( tab );
    }, 1000);
  } 
  else {
    // Couldn&#39;t find an opera.extension.tabs object, to fetch and then update the tab
  }
}, false);</code></pre>
<h2 id="conclusion">
  その後は？</h2>
<p>
  これで、タブの作成方法、操作方法、そして閉じる方法とを覚えました。
  <a href="http://labs.opera.com/extensions-api/">Opera エクステンション API ドキュメント</a>を参照すれば <code>tabs</code> オブジェクトとその関数の詳細を得られるでしょう。
  その後は、<a href="http://dev.opera.com/articles/view/opera-extensions-windows/">Opera エクステンションの <code>Windows</code> オブジェクト</a>に手を出すのも良いでしょう。</p>
<h2 id="api">
  API リファレンス</h2>
<ul>
  <li><code><a href="http://labs.opera.com/extensions-api/backgroundProcess/Tabs.html">
	opera.extension.tabs</a></code> オブジェクト</li></ul>
