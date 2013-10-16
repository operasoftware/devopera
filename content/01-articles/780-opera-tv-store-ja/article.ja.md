Title: Opera TV Store アプリケーションテンプレート
----
Date: 2012-09-04 15:51:58
----
Lang: ja
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>イントロダクション</h2>

<p>Opera TV Store がスタートしてから、これまでに多くのアプリケーションが公開され、ユーザーに親しまれてきました。Opera の TV アプリケーションは Web 標準を用いて作成されるため、Web 開発者はすでに持っているスキルを使って、TV プラットフォーム向けのコンテンツを作成することができます。しかし TV 向けの開発は依然として馴染みのないものに感じられることもあるため、クリエイターの方々が自由に使えるような形で典型的なアプリ向けのテンプレートを公開しました。</p>

<p>どのプラットフォームにおいても、ニュース、エンターテイメントは最もポピュラーなコンテンツとなっています。それで、ビデオプレーヤーと RSS リーダーアプリのテンプレートを用意しました。どちらのテンプレートとも容易にカスタマイズできるよう設計されており、自社のブランド向けのアプリケーションを、開発時間やコストを気にかけることなく、迅速に公開できます。</p>

<h2>ビデオプレーヤーテンプレート</h2>

<p>
<img src="http://devfiles.myopera.com/articles/9442/video-app-template.jpg" alt="ビデオプレーヤーテンプレートの使用例のスクリーンショット." />
</p>
<p class="caption">図1: ビデオプレーヤーテンプレートの使用例</p>

<h3>概要</h3>

<p>ビデオアプリテンプレートは単なるプレーヤーではなく、ビデオコンテンツをテーマや題目をもとにしたチャンネルごとに分けることができます。さらに内蔵のブックマーク機能により、ユーザーはお気に入りリストに加えた特定のビデオへ簡単に移動することができます。さらにユーザーはビデオを閲覧しながら、次に再生するビデオを選択したり、再生順序をシャッフルすることができます。テンプレートをカスタマイズするにあたり、簡単に編集できる３つの主要なエリア - データ (XML ファイルや既存の API 経由)、画像、色 - があります。

<h3>カスタマイズ</h3>

<p>まず始めに、自分で選んだビデオコンテンツやチャンネルを追加したいと思われるでしょう。それらは <code>video.xml</code> ファイルにて、以下のように行います:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;rss&gt;
  &lt;channel&gt;
    &lt;item&gt;
      &lt;title&gt;Opera Labs: Mobile Extensions&lt;/title&gt;
      &lt;description&gt;We&#39;re excited to share with you a Labs release of our mobile browser with support for extensions.&lt;/description&gt;
      &lt;category&gt;Opera Labs&lt;/category&gt;
      &lt;duration&gt;00:01:24&lt;/duration&gt;
      &lt;content url=&quot;http://apps.tvstore.opera.com/videos/Opera_Labs_Mobile_Extensions.mp4&quot; fileSize=&quot;24434480&quot; type=&quot;video/mp4&quot; /&gt;
      &lt;thumbnail url=&quot;http://apps.tvstore.opera.com/videos/Opera_Labs_Mobile_Extensions.jpg&quot; width=&quot;250&quot; height=&quot;140&quot; /&gt;
    &lt;/item&gt;
  &lt;/channel&gt;
&lt;/rss&gt;</code></pre>

<p>このファイルは <code>getData()</code> 関数 (<code>videotemplate.js</code> 内) によって読み出されます。それで独自の API や RSS フィードをビデオファイルのソースとして利用したい場合には、関数内のファイル名を変更してください。その場合、さらに同じファイル内の <code>prepareData()</code> 関数にてパースのルールを変更する必要もあるでしょう。</p>

<p>外観のカスタマイズ用に、全ての画像は <code>images</code> ディレクトリ内に含まれており、<code>logo.png</code> のような形で、分かりやすいようなファイル名が付けられています。ここから簡単に画像を独自のロゴに切り替えたり、カラースキームを変更することができます。加えて、アプリケーションのデザインとなるスタイルは <code>style.css</code> ファイル (<code>css</code> ディレクトリ) にあります。容易にカスタマイズができるよう、フォントと色の定義はファイルの上部に記述されています。</p>

<h2>RSS リーダーテンプレート</h2>

<p>
<img src="http://devfiles.myopera.com/articles/9442/rss-app-template.jpg" alt="RSS リーダーテンプレートの使用例のスクリーンショット" />
</p>
<p class="caption">図 2: RSS リーダーテンプレートの使用例</p>

<h3>概要</h3>

<p>RSS リーダーテンプレートを使うことで、ニュースや他の定期的に更新されるコンテンツをひとつのアプリケーションとして提供できます。ビデオテンプレート同じように、このテンプレートは TV のリモコンの矢印キーで簡単にコントロールでき、さらにそれぞれのニュース項目や記事を一つずつ自動的に表示するスライドショー機能も備えています。単純な色の変更に加え、動的に生成される HTML の編集など、さらに詳細なカスタマイズを行うことができます。</p>

<h3>カスタマイズ</h3>

<p>一番重要なステップは、使用したいフィードを指定することです。これは <code>DEF_FEEDS</code> 配列 (<code>js/config.js</code> ファイル内) を編集することで行えます。お好きな数だけフィードを追加できます - 外部ドメインにホストされたフィードを含めることができますが、ブラウザのセキュリティ構成により、フィード用のプロキシサーバーを利用する必要があります。以下のリンクにあるダウンロードパッケージ内に、これらの設定方法についての詳細な説明が含まれています。フィードのリストは以下のようになるでしょう:</p>

<pre><code>var DEF_FEEDS = [{
  url: &#39;data/data.xml&#39;
},
{
  url: &#39;http://my.opera.com/chooseopera/xml/rss/blog/&#39;,
  proxy: true
}];</code></pre>

<p>さらに、必要であれば <code>js/config.js</code> ファイルにてアプリケーションのタイトルを変更したり、プロキシサーバーのアドレスを設定することができます。</p>

<pre><code>/**
 * Application main title 
 */
var APP_TITLE = &#39;All feeds&#39;;

/**
 * Proxy URL
 */
var PROXY_URL = &#39;/xhrproxy/?_proxy_url=&#39;;</code></pre>

<p><code>css/common.css</code> を編集することで、アプリの外観を変更することができます。またそれぞれのフィードアイテムが使用する HTML を編集される場合には、それらは <code>js/Item.js</code> ファイル (<code>TMPL</code> 内) と <code>TMPL_CONTENT</code> 配列に含まれています。</p>

<h2>テンプレートをダウンロード!</h2>

<p>アプリケーションテンプレートはこちらからダウンロードできます (ZIP ファイル形式):</p>

<ul>
    <li><a href="http://apps.tvstore.opera.com/templates/videotemplate.zip">ビデオプレーヤーテンプレート</a></li>
    <li><a href="http://apps.tvstore.opera.com/templates/rssreader.zip">RSS リーダーテンプレート</a></li>
</ul>

<p>両方の ZIP ファイルには、どのように独自のデータを追加し、テンプレートをカスタマイズする事で、アプリを好みのテイストに近づけることができるかについて、詳細なチュートリアルが含まれています。さらにブランドガイドラインも含まれます。基本的に、これらは機能やレイアウトを編集する必要なく、簡単に見た目の良いアプリを制作できるようデザインされています。しかしテンプレートはいずれもフリーで、オープンソースライセンスの下で配布されているため、お望みの形になるよう、さらに深いレベルまでカスタマイズすることを妨げるものはありません。Opera TV Store に、これらのテンプレートを使用したアプリがたくさん登場することを楽しみにしています！</p></p>
