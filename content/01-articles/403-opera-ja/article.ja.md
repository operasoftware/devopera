Title: Opera エクステンション：ウィンドウ
----
Date: 2010-11-03 13:36:54
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
  Opera エクステンションは HTML や JavaScript、CSS といった Web 標準の技術を使ってデスクトップ版 Opera に対する機能追加を可能にします。
  この文書では、エクステンションの API を使ったデスクトップ版 Opera のウィンドウの操作方法を解説していきます。
  ウィンドウの操作には <code>Windows</code> オブジェクトを使います。</p>
<p class="note">
  Opera エクステンションの基礎的なことが知りたいなら続きを読む前に <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world-ja/">Opera エクステンションで Hello World!</a> の記事を読むと良いでしょう。</p>
<h3>
目次</h3>
<ol>
<li>
<a href="#create">ウィンドウを作る</a></li>
<li>
<a href="#windows">ウィンドウのイベント</a></li>
<li>
<a href="#listener">ウィンドウのイベントリスナ</a></li>
<li>
<a href="#conclusion">まとめ</a></li>
<li>
<a href="#api">API リファレンス</a></li>
<h2 id="create">ウィンドウを作る</h2>
<p>
  いつも通りイベントリスナを使ってイベントを待ち受けて関数を実行させます。今回はウィンドウの読込み終了イベントを使います。
  それから、<code>opera.extension.windows.create</code> の存在を確認してから呼び出します。</p>
<pre><code>
window.addEventListener( &quot;load&quot;, function(){
  if( opera.extension.windows.create ) {
    opera.extension.windows.create();
  } 
  else {
    // Couldn&#39;t find an opera.extension.windows.create object.
  }
}, false);</code></pre>
<h2 id="windows">
ウィンドウのイベント</h2>
<p>
  windows オブジェクトにインタラクションがあるとイベントが発生します。
  たとえば、フォーカスが移ってくると <code>onfocus</code> イベントが発生します。
  Opera エクステンションには以下の4つのイベントが定義されてます。</p>
<ul>
<li>
<code>
  onfocus</code></li>
<li>
<code>
  onclose</code></li>
<li>
<code>
  oncreate</code></li>
<li>
<code>
  onblur</code></li></ul>
<p>
  イベントの発生時に、<code>opera.postError</code> 関数を使って適切なメッセージを出してみます。
  <code>opera.postError</code> 関数の出力はエラーコンソール（メニューバー &gt; ツール &gt; 詳細 &gt; エラーコンソール）で見ることが出来ます。</p>
<pre><code>
window.addEventListener( &quot;load&quot;, function(){
  if( opera.extension.windows ) {
    opera.extension.windows.onfocus = function( event ){
      opera.postError( &quot;windows is focused&quot; );
    }
    opera.extension.windows.onclose = function( event ){
      opera.postError( &quot;windows is closed&quot; );
    }
    opera.extension.windows.oncreate = function( event ){
      opera.postError( &quot;windows is create&quot; );
    }
    opera.extension.windows.onblur = function( event ){
      opera.postError( &quot;windows loses focus&quot; );
    }    
  }
  else {
    // couldn&#39;t find an opera.extension.windows object.
  }
}, false); </code></pre>

<h2 id="listener">ウィンドウのイベントリスナ</h2>
<p>
  次はイベントリスナについての話をしましょう。
  JavaScript のイベントリスナと同じように、Opera エクステンションのイベントリスナにも扱うイベント、そのハンドラ関数、そして真偽値の3つの引数を与えます。
  Opera エクステンションのイベントリスナでは以下の4つのイベントが扱えます。</p>
<ul>
<li>
<code>focus</code></li>
<li>
<code>close</code></li>
<li>
<code>create</code></li>
<li>
<code>update</code></li>
<li>
<code>blur</code></li></ul>
<p>
  次のコード片では、<code>addEventListener</code> 関数を使って <code>focus</code> イベントにハンドラ関数を登録しています。
  3番目の引数はイベントハンドラ関数が実行されるフェーズを指定するものですが、差し当たって真偽値で <code> false </code> 固定にしておくべきです。
<pre><code>opera.extension.windows.addEventListener( &quot;focus&quot;, function(){/* do something */}, false);</code></pre>
<p>
  <code>addEventListener</code> 関数を使った時と <code>onevent</code> に代入した時とでは、どのように実行されるかに違いがあります。
  次のコードのようにした場合、上の行のハンドラ関数は置き換えられてしまうので、下の行のハンドラ関数しか実行されません。</p>
<pre><code>
opera.extension.windows.onfocus = function(){ /* do something */ };
opera.extension.windows.onfocus = function(){ /* do other thing */ };</code></pre>
<p>
  しかし、次のコードでは、どちらのハンドラ関数も登録されて実行されます。</p>
<pre><code>
opera.extension.windows.addEventListener( &quot;focus&quot;, function(){ /* do something */ }, false);
opera.extension.windows.addEventListener( &quot;focus&quot;, function(){ /* do other thing */ }, false);</code></pre>

<h2 id="conclusion">まとめ</h2>
<p>
  この文書では <code>windows</code> オブジェクトを使ったデスクトップ版 Opera のウィンドウの操作方法について述べました。
  より詳しい情報は、<a href="http://labs.opera.com/extensions-api/">Opera エクステンション API リファレンス</a>を参照してください。</p>
<h2 id="api">
API リファレンス</h2>
<p>
<code><a href="http://labs.opera.com/extensions-api/backgroundProcess/BrowserWindows.html">opera.extension.windows</a></code> オブジェクト</p>            </p></ol>
