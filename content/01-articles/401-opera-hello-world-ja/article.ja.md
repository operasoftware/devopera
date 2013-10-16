Title: Opera エクステンションで Hello World!
----
Date: 2010-11-03 12:47:52
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
<p>
この文書では Opera エクステンション開発の初歩を手ほどきします。
ツールバーのボタンを押したら「こんにちは世界！」とポップアップが表示されるエクステンションを作っていきます。
Opera エクステンションは一般のオープンな Web 標準を使って作られているので、Opera 11 とエディタか IDE だけで開発が始められます。</p>
<h2>
エクステンションの構成</h2>
<p>
最初に、エクステンションの名前や作者、エクセテンションマネージャでのアイコンなど、メタデータを記述した構成ファイルを作ります。
Opera エクステンションは Opera Widget と同じく <a href="http://www.w3.org/TR/widgets/">W3C Widgets</a> を使って作られています。</p>
<p>
さて、まず下記のような素の構成ファイルを作ります。</p>
<pre><code>
&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://www.example.org/helloworld&quot;&gt;
  &lt;name&gt;Hello extensions!&lt;/name&gt;
  &lt;description&gt;A simple hello world example&lt;/description&gt;
  &lt;author href=&quot;yourURL&quot; email=&quot;yourEmail&quot;&gt;Enter your name here&lt;/author&gt;
  &lt;icon src=&quot;hello.png&quot;/&gt;
&lt;/widget&gt;</code></pre>
<p>
出来たら開発用のディレクトリに <code>config.xml</code> として保存します。</p>
<h2>
エクステンションのアイコン</h2>
<p>
構成ファイルにアイコンの項目があったことに気がついてると思います。
ここで指定されたアイコンはエクステンションマネージャと Opera エクステンションのサイトで使われます。
アイコンを作るとき 64x64 ピクセルとすることをおすすめします。</p>
<p>
アイコンファイル <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/hello.png">hello.png</a> をダウンロードして開発用のディレクトリに保存します。</p>
<h2>
Opera のツールバーにボタンを追加</h2>
<p>
エクステンションの構成が済んだら、実際のコードの開発を始められます。
まず、ツールバーに追加するボタンを作るために、下記のコードを使います。</p>
<pre><code>
&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;script&gt;
      window.addEventListener(&quot;load&quot;, function(){
        var ToolbarUIItemProperties = {
          title: &quot;Hello World&quot;,
          icon: &quot;hello-button.png&quot;,
          popup: {
            href: &quot;popup.html&quot;,
            width: 130,
            height: 50
          }
        };
        var theButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);
        opera.contexts.toolbar.addItem(theButton);
      }, false);
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>
このコードを <code>index.html</code> として開発用のディレクトリに保存します。</p>
<p>
Opera エクステンションでは <code>index.html</code> と言う名前のファイルが必要です。
ツールバーのボタンなど UI の要素を作るためのスクリプトが書かれた HTML の雛形で、文書の本体部は使われません。</p>
<p>
前述のスクリプトはプロパティの値に基づいてツールバーにボタンを作ります。ボタンは 18x18 のアイコンで作成されます。
ボタンから呼び出されるポップアップも指定されたサイズで作成され、内容は別の定義を参照して作成されます。</p>
<p>
ツールバー用のアイコンファイル <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/hello-button.png"> hello-button.png</a> をダウンロードして開発用のディレクトリに保存します。</p>
<h2>
ポップアップの作成</h2>
<p>
ボタンも作りポップアプのサイズも指定したので、次はポップアップの内容を作ります。
ポップアップの内容は、指定されたサイズの表示域をもつただの HTML ファイルです。
HTML や CSS, JavaScript など普段のウェブページ作成で使う技術が何でも使えます。
今回は下記のようなファイルを作ります。</p>
<pre><code>
&lt;!doctype html&gt;
&lt;html lang=&quot;ja&quot;&gt;
  &lt;head&gt;
    &lt;title&gt;こんにちは世界！&lt;/title&gt;
    &lt;style&gt;
      h1 {
        font: 14px helvetica, arial, sans-serif;
        text-align: center;
      }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;こんにちは世界！&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>
<code> popup.html</code> として開発用のディレクトリに保存します。</p>
<h2>
エクステンションのパッケージ化とインストール</h2>
<p>
エクステンションの開発もほとんど最後になりました。
残された作業は、全部のファイルを選択して ZIP で圧縮することだけです。
圧縮ファイルが出来たら、<code>Hello.oex</code> と言うふうに元のファイルを拡張子 .zip の部分も含めて名前を変えます。
それでお終いです。</p>
<p>
最終的な<a href="hello.oex">「こんにちは世界！」エクステンションのダウンロードはこちら</a>から。</p>
<p>
エクステンションをブラウザにドラッグアンドドロップすると、インストールするか尋ねてきます。
構成ファイルで指定したアイコンが表示されているでしょう。
タブを切り替えてツールバーに新しく作ったボタンをクリックしてみましょう。</p>
<p>
プロパティの値を変えたりポップアップの内容を変えたりして、満足いくまで何度でも実験してみるといいでしょう。</p>
              
