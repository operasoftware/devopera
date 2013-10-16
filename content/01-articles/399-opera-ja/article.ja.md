Title: Opera エクステンションってどんなもの?
----
Date: 2010-10-29 12:28:24
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

<h2>はじめに</h2>

<p>この記事では Opera エクステンションに含まれる機能について概要をご説明し、いくつかの API を簡単にご紹介します。尚 Opera Labs に <a href="http://labs.opera.com/extensions-api/">API に関するより広範囲なリファレンス文書</a> があります。

<h2>エクステンションのファイル</h2>

   <p>Opera エクステンションは <a href="http://www.w3.org/TR/widgets/">W3C Widgets の仕様</a> （例えば <code>config.xml</code> の機能など）が基本となっています。エクステンションには以下のファイルが含まれます:</p>

   <ul>
     <li><code>/config.xml</code></li>
     <li><code>/index.html</code></li>
     <li><code>/background.js</code></li>
     <li><code>/popup.html</code></li>
     <li><code>/icons/example.png</code></li>
     <li><code>/locales/no/index.html</code></li>
     <li><code>/locales/no/background.js</code></li>
     <li><code>/locales/no/popup.html</code></li>
   </ul>

   <p>一つずつご説明しましょう:</p>

<h3>config.xml</h3>

   <p>これはエクステンションの重要なメタデータを記述する設定ファイルで、エクステンションが必須とする二つのファイルの内の一つです（もう一つは <code>index.html</code>）。とはいえ、このファイルでできることはあまりありません。 Opera エクステンションは W3C Widgets を基本としていますので、 <code>config.xml</code> も同じ仕様になっています（<a href="http://www.w3.org/TR/widgets/#example-configuration-document">W3C Widgets spec configuration document</a> の節をご覧ください）。記述できるメタデータは沢山ありますが、少なくとも以下のものは記述するようお勧めします:</p>

       <ul>
         <li>エクステンションの名前</li>
         <li>エクステンションのID、例えばエクステンションのURL</li>
          <li>作者の名前</li>
         <li>エクステンションの説明</li>
         <li>アイコン: これは Opera エクステンションのダウンロードサイトやその他色々な所で使われます。詳細は以下の <a href="#icons">アイコンの節</a> をご覧ください。</li>
       </ul>

<p><code>config.xml</code> の例を示します:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://www.example.org/example&quot;&gt;
  &lt;name&gt;My test extension&lt;/name&gt;
  &lt;description&gt;API experiments and testing.&lt;/description&gt;
  &lt;author href=&quot;http://foo-bar.example.org/&quot;
          email=&quot;foo-bar@example.org&quot;&gt;Foo Bar Corp&lt;/author&gt;
  &lt;icon src=&quot;icons/example.png&quot;/&gt;
&lt;/widget&gt;
</code></pre>

<h3>index.html</h3>

     <p>これはウィジェット用語で「スタートファイル」と呼ばれるものです。スタートファイルはどのような場合でも必要で、エクステンションのバックグランドプロセスとして動作します（但し config.xml の <code>&lt;content&gt;</code> 要素を使って違うファイルをスタートファイルにすることもできます）。</p>

<p>このファイルには JavaScript を記述することができ、これを使って、ボタン UI やコールアウトなど、ユーザーインターフェースとなるアイテムを作成することができます。例えば:</p>

<pre><code>&lt;!doctype html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;script&gt;
      window.addEventListener(&quot;load&quot;, function(){
        var theButton;
        var UIItemProperties = {
          disabled: false,
          title: &quot;101 - createItem w popup big&quot;,
          icon: &quot;icon.png&quot;,
          popup: {
            href: &quot;popup.html&quot;,
            width: 250,
            height: 500
          }
        }
        theButton = opera.contexts.toolbar.createItem( UIItemProperties );
        opera.contexts.toolbar.addItem( theButton );
      }, false);
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<h3>background.js</h3>

     <p>ここには、エクステンションのバックグランドプロセスを制御する、バックグラウンドスクリプトと呼ばれるものを記述します。これは作りたいだけ作ることができますし、 <code>background.js</code> という名前にする必要もありません。</p>

<h3>popup.html</h3>

  <p>このファイル（一つ又は複数）は、バックグラウンドプロセスによって立ち上げられるポップアップウィンドウの内容を含んでいます。ポップアップウィンドウの内容には、これらのファイルに記述したものの他に、外部の URL （例えば <a href="http://www.opera.com/">http://www.opera.com</a>）を利用することも可能です。</p>

<h3>icons/example.png</h3>

<p>ここにはエクステンションで使われるアイコンが置かれます（詳細は<a href="#icons">以下のアイコンの節</a>をご覧ください）。</p>

<h3>includes （挿入されるスクリプト）</h3>

     <p>このフォルダに置かれた JS ファイルは全てブラウザでアクセスしたページに挿入されます。これらのファイルは特定のサイト（<a href="http://www.youtube.com">youtube.com</a> など）を対象にすることもできます。挿入されるスクリプトの動作については <a href="http://www.opera.com/docs/userjs/">UserJS に関する文書のページ</a>をご覧ください。</p>

<h3>locales</h3>

     <p><code>locales</code> ディレクトリには、任意でエクステンションに翻訳版を提供する際の翻訳ファイルを置きます。 <code>locales</code> ディレクトリの中は言語ごとにディレクトリに分けします（ディレクトリの名前はその言語や方言の言語コードにします）。例えば、前述のディレクトリツリーには <code>no</code> がノルウェー語の翻訳として置かれています。勿論これ以外に <code>en-gb</code>, <code>pt-br</code>, <code>ru</code>, <code>cz</code>, <code>jp</code> やその他のものを好きなだけ追加することができます(但しディレクトリ名は互換性問題を回避するため小文字にする必要があります - これは W3C Widgets Packaging の仕様で定められています)。これらのフォルダにある翻訳されたリソースは、デフォルトの <code>index.html</code> や挿入するスクリプトを置き換えます。</p>

    <p class="note">Opera エクステンションの UI は、挿入されるスクリプトでウェブページに追加された UI 要素や UIItems API を使って作成された Opera のツールバー上のボタン、エクステンションに含まれている HTML 文書や URL で指定された外部のウェブサイトのポップアップによって構成されます。</p>

<h2>アーキテクチャと API の分析</h2>

<p>Opera エクステンションのアーキテクチャは次の4つの基本的な要素同士の相互作用で成り立っています:</p>

   <pre>挿入されるスクリプト &lt;-&gt; バックグラウンドプロセス &lt;-&gt; ボタン/バッジ &lt;-&gt; ポップアップ</pre>

   これらの要素は互いに <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#web-messaging">cross-document messaging</a> を通して交信します。それぞれの要素は以下のように動作します:

<h3>挿入されるスクリプト</h3>

     <p>この要素は、対象となるサイトに挿入されるスクリプトを提供します。</p>

<h3>バックグラウンドプロセス</h3>

     <p>バックグラウンドプロセスはアーキテクチャを構成する主要な部分の一つです — 全てのメッセージがここを通り、またエクステンション API の殆どはここからコールされる、中心的な部分です。バックグラウンドプロセスは以下のメソッドを継続的に実行することで UI アイテムを構成します:</p>

     <ul>
       <li><code>opera.contexts.toolbar.createItem( { ...properties... } )</code></li>
       <li><code>opera.contexts.toolbar.addItem( uiItem )</code></li>
       <li><code>opera.contexts.toolbar.removeItem( uiItem )</code></li>
     </ul>

     <p class="note">参考: <code>toolbar</code> は現在コンテキストのみ利用可能です。今後これは拡張される予定です。</p>

<h3>ボタン／バッジ</h3>

     <p>これはエクステンションの UI 要素が一つにまとめられ表示されるところです。これには例えば押しボタン、情報を表示するバッジ、そして将来的なリリースではメニューなどが含まれます。</p>

<h4>ボタン</h4>

          <p><code>opera.contexts.toolbar.createItem()</code> を使ってブラウザのツールバーにボタンを作成することができます。また、 <code>opera.contexts.toolbar.addItem()</code> を使ってボタンを追加することも可能です。以下にボタンを追加しそのボタンがクリックされたらコールアウトを実行するだけの簡単な <code>index.html</code> の例を示します:</p>

<pre><code>&lt;!doctype html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;script&gt;
      window.addEventListener(&quot;load&quot;, function(){

        var theButton; // button 変数
        var toolbar = opera.contexts.toolbar; // Opera ツールバー

        var props = { // ボタンのオプション
          disabled: false,
          title: &quot;My first extension!&quot;,
          icon: &quot;opera.ico&quot;,
          popup: {
            href: &quot;http://www.google.com&quot;,
            width: 300,
            height: 200
          }
        }

        theButton = toolbar.createItem( props ); // ボタンの作成

        toolbar.addItem( theButton ); // UI へのボタンの追加

      }, false);
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p><code>opera.contexts.toolbar.removeItem(theButton);</code> を使ってボタンを削除することもできます。またボタンのオプションに <code>onclick: function(){ /* do something */ }</code> を追加することで <code>onclick</code> イベントを使うこともできます。</p>

<h4 id="icons">アイコン</h4>

<p>UI にボタンを使ったのであれば、これにアイコンをつけるべきです。ボタンのアイコンは 18 x 18 ピクセルのサイズで描画されます。同梱されたアイコンがこれ以外のサイズの場合伸縮された後描画されます。最良の結果を得るためにはぴったり 18 x 18 ピクセルのアイコンを使うようお勧めします。</p>

<p>さらに、 Opera エクステンションのサイトに作成したエクステンションをアップロードする際に 64 x 64 ピクセル以上のアイコンも提供するように求められます。このアイコンはオンラインカタログでタイトルと説明の隣に表示されたり、ブラウザの Opera エクステンションマネージャー内で使われたりします。タイトルと説明、そしてアイコンへのパスは、 <code>config.xml</code> に保存され、ここから取得されます。</p>

<h4 id="popups">ポップアップ</h4>

<p>ポップアップはボタン作成時に popup プロパティを追加するだけで定義することができます:</p>

<pre><code>var props = { // ボタンのオプション
  disabled: false,
  title: &quot;My first extension!&quot;,
  icon: &quot;opera.ico&quot;,
  popup: {
    href: &quot;http://www.google.com&quot;,
    width: 300,
    height: 200
  }
}</code></pre>

<p>上の例では google.com のホームページを含むポップアップを作成します。ポップアップの内容にはローカルにある HTML ファイルを使うこともできます。例えば:</p>

<pre><code>popup: {
  href: &quot;popup.html&quot;,
  width: 300,
  height: 300
}</code></pre>

<h4>バッジ</h4>

<p>バッジはエクステンションのボタンの上にオーバーレイとして現れる通知です。ボタンのオプションにバッジのプロパティを追加することによって作成できます:</p>

<pre><code>var props = { // ボタンのオプション
  disabled: false,
  title: &quot;My first extension!&quot;,
  icon: &quot;opera.ico&quot;,
  popup: {
    href: &quot;popup.html&quot;,
    width: 300,
    height: 200
  },
  badge: {
    textContent: &#39;123&#39;
  }
}</code></pre>

<p>スタイルプロパティを使うことでバッジの背景及び表面の色をカスタマイズすることもできます:</p>

<pre><code>backgroundColor: &#39;#ffeedd&#39;,
color: &#39;#404040&#39;,</code></pre>

<p>そして、 <code>textContent</code> プロパティを変更することでバッジの内容を更新することができます:</p>

<pre><code>theButton.badge.textContent = &quot;45&quot;</code></pre>


<h2>様々な種類のエクステンション</h2>

   <p>エクステンションの種類は沢山あります。但しこれらを作成するのに必要な機能の内現段階ではまだ利用可能となっていないものもあります。これらは以降のリリースで段階的に更新され、チュートリアルも更に追加される予定です。基本的に、エクステンションのアーキテクチャで異なる部分は大体次のように表せます:</p>

   <pre>挿入されたスクリプト &lt;-&gt; バックグラウンド &lt;-&gt; ボタン/バッジ &lt;-&gt; ポップアップ</pre>

   <p>作成できるエクステンションの種類は以下のコンポーネントの組み合わせです:</p>

      <ol>
        <li><strong>挿入されるスクリプト + <code>index.html</code></strong>: これは、単に挿入されるスクリプトが空の <code>index.html</code> や <code>config.xml</code> と共にエクステンションとしてパッケージングされたものです。これは確かに動作しますが、エクステンション特有の API や他の機能を全く活用していません。</li>
        <li><strong>ボタン + ポップアップ</strong>: Opera のツールバーにボタンを作成し、これがクリックされるとサードパーティの URL を開くようなエクステンションを書くこともできます。例えば、携帯端末向けのページを含んだポップアップフレームをつくり、それらをデスクトップで利用できるようにすることができます。</li>
        <li><strong>ブックマークレット・エクステンション</strong>: クリックされたときにバックグラウンドプロセスからブックマークレットの機能をそのタブで実行するエクステンションを書くこともできます。これを使えばアドレスバーの <code>javascript:</code> URL は必要ありません。</li>
        <li><strong>内容解析</strong>: 挿入されるスクリプトに DOM を処理させ、結果をバックグラウンドに送り、これをさらに適切なタイミングでボタンやポップアップに送るようなエクステンションも作れます。</li>
        <li><strong>内容に基づく動作</strong>: 挿入されるスクリプトにボタンのクリックでメッセージを送信し、これがメソッドを実行しポップアップなどで使うデータ列を返すようなエクステンションを書くこともできます。例えば、ページ上に書かれている所在地を選択し &quot;Map&quot; ボタンを押すと、その所在地に対応する Google Map のページがポップアップするようなものが考えられます。</li>
        <li><strong>自動動作</strong>: バックグランドプロセスで定期的にサービスにポーリングしその情報を元にバッジを更新することもできます。例えば、メールサービスにポーリングし、未読メールの数を UI にあるバッジに表示させることができます。</li></ol>


<p class="note">参考: バックグランドプロセスはウィジェットのようにクロスドメイン XHR を使うことができます。クロスドメイン XHR については <a href="http://dev.opera.com/articles/view/opera-widgets-and-ajax-connecting-to-mu/">Opera Widgets and Ajax connecting to multiple servers</a> をお読みください。</p></p>
