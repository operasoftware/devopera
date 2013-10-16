Title: インターネットと Web の歴史、そして Web 標準の進化
----
Date: 2009-10-20 08:14:58
----
Lang: ja
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<ul class="seriesNav">
<li class="prev"><a rel="start" href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/">前の記事: Web 標準カリキュラムの紹介</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/3-how-does-the-internet-work-ja/">次の記事: インターネットのしくみ</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc">カリキュラムの目次へ</a></li>
</ul>

<h2>はじめに</h2>

<blockquote>
    <p><q>どこから始めればよろしいでしょうか、陛下？</q></p>
    <p><q>最初から始めよ。</q> と、王様は重々しく口を開きます。 <q>最後まで続け、そこで止めよ。</q></p>
<p><em>―ルイス・キャロル『不思議の国のアリス』</em></p>
</blockquote>

<p>全てのものには「はじまり」があります。ですから、このカリキュラムも歴史を紐解くことから始めましょう。この記事では、インターネットと World Wide Web、 そしてこのコースのテーマである<q>Web標準</q>のはじまりについて簡単に紹介します。</p>

<p>この記事は、インターネットや Web がどのような出来事を通じ現在に至ったのかを理解するのにとても役立つと思います。文章も長くありませんから、情報に圧倒されることなく詳細にすばやくたどり着けるでしょう。</p>

<p>記事の中には、あなたの良く知らない単語が出てくるかもしれません。でも、そんなに心配しないでください。それが Web 開発を学ぶにあたって重要な概念であれば、後々の記事でその詳細を含めちゃんと説明してくれるはずです。もちろん、検索することだってできますし。</p>

<p>ただ、すでにインターネットや World Wide Web の歴史を知っているのであれば、どうぞ <a href="#comingofstandards">Web 標準</a>のセクションから始めてください。記事は次のような構成になっています。</p>

<ul>
<li><a href="#internetorigins">インターネットのはじまり</a></li>

<li><a href="#webcreation">World Wide Web の創成</a>
<ul><li><a href="#browserwars"><q>ブラウザー戦争</q>の勃発</a></li>
</ul></li>

<li><a href="#comingofstandards">Web 標準の到来</a>
<ul><li><a href="#w3cformation">W3C の設立</a></li>
<li><a href="#webstandardsproject">Web Standards Project</a></li>
<li><a href="#riseofstandards">Web 標準の高まり</a></li>
</ul></li>

<li><a href="#summary">まとめ</a></li>
<li><a href="#furtherreading">関連資料</a></li>
<li><a href="#exercisequestions">練習問題</a></li>
</ul>

<h2 id="internetorigins">インターネットのはじまり</h2>

<p>1957年10月4日。この日、世界を変える出来事が起こりました。ソビエト連邦が史上初めて、地球軌道上に人工衛星を発射することに成功したのです。<q>スプートニク1号</q>と呼ばれたこの人工衛星は、世界中に衝撃を与えました。中でも、人工衛星の発射計画を進めていたアメリカ合衆国にとって、そのショックはとても大きなものでした。</p>

<p>この出来事は、アメリカ国防総省に高等研究計画局 (Advanced Research Projects Agency, ARPA) の設立をもたらしました。その時点での需要を越えた、より高等な概念や技術を研究・開発する機関の必要性が認められたからです。そして、ARPAで進められたプロジェクトのうち、おそらくもっとも有名なもの (そして、もっとも使われているであろうもの) が、インターネットなのです。</p>

<p>1960年に、心理学者でありコンピューターサイエンティストである Joseph Licklider は、<q>人とコンピューターの共生 (Man-Computer Symbiosis)</q>という論文を発表しました。この論文は、コンピューターネットワークによる先進的な情報の保管・検索を提供する概念を提唱したものでした。</p>

<p>ARPA で情報処理オフィスを率いる傍ら、Licklider は1962年にコンピューター研究を進めるグループを組織しました。しかし、実際に研究に取り掛かる前に、彼はグループを抜けてしまいました。</p>

<p>後に <q>ARPANET</q> と呼ばれるこのコンピューターネットワークの計画は、1967年の10月に提出されました。そして2年後の1969年12月に、最初のコンピューターネットワークが稼動しました。</p>

<p>ネットワークの構築にあたりもっとも大きな課題は、物理的に離れたネットワーク間で、リソースを圧迫することなく常時通信を行う仕組みを考え出すことでした。この問題を解決したのが、パケット交換と呼ばれる技術でした。パケット交換は、データリクエストを<q>パケット (packets)</q>と呼ばれる細かい単位に分割し、他のパーティとの通信を遮断することなくデータを高速に処理できる仕組みです。このパケット交換は、今日のインターネットでも利用されている概念です。</p>

<p>この考え方は広く採用され、結果として同じパケット交換技術を利用した異なるネットワークが出現することになりました。たとえば、国際電気通信連合 (ITU) によって開発されたX.25は、最初のイギリスの大学ネットワークである <abbr title="Joint Academic Network">JANET</abbr> を組織し、大学同士のファイルやEメールのやり取りを可能としました。また、アメリカの公共ネットワークである CompuServe も、X.25によって構築されました (CompuServe は営利企業ですが、小企業や個人を時分割制御のコンピューターリソースにアクセスすることを許可し、後にインターネットへのアクセスも許可していました)。これらのネットワークには多くの人が集いましたが、現在のインターネットと比べるとずっと閉じたものでした。</p>

<p>異なるネットワークプロトコルの激増はすぐに問題となりました。なぜなら、異なるネットワーク間で相互通信を行う際に、プロトコルの違いを乗り越える必要があったからです。しかし幸いにも、すぐにその解決策が生み出されました。ARPA で人工衛星のパケットネットワークプロジェクトに従事していた Robert Kahn が、当時の ARPANET で使われていたプロトコルを置き換える、より開かれたネットワークアーキテクチャの定義に乗り出していたのです。</p>
<p>後にスタンフォード大学の Vinton Cerf が加わり、ふたりはネットワークプロトコルの違いを覆い隠すシステムを新しい標準とともに開発しました。1974年12月に公開されたその仕様の草案には、<q>Internet Transmission Control Program</q> という名前がつけられていました。</p>

<p>この仕様は、ネットワークの役割を削減し、伝送品位の管理責任をホストコンピューターに移管するものでした。すなわち、ほぼ全てのネットワークを簡単に相互接続可能としたのです。ARPA はこのソフトウェア開発に投資し、1977年には3つの異なるネットワーク間での通信実験が成功しました。仕様はその後公開され、1981年の時点ではすでに幅広く利用されるようになっていました。</p>
<p>1982年には、アメリカ以外からの ARPANET 接続は、すべてこの新しい <q><abbr title="Transmission Control Protocol over Internet Protocol">TCP/IP</abbr></q> プロトコルに変換されるようになりました。私達の知るインターネットが、ついに到来したのです。</p>

<h2 id="webcreation">World Wide Web の創成</h2>

<p>インターネット上の情報検索システムとして、<a href="http://en.wikipedia.org/wiki/Gopher_%28protocol%29">Gopher</a> というものが1990年代初頭に使われていました。Gopher は、ファイルへのリンクを含むメニューを提供する仕組みで、リンク先のファイルにはコンピューター上のリソースはもちろん、別のメニューを含むことができました。このメニューという概念により、コンピューターとインターネットの境界を越えて、他のシステム内のメニューを取得することができたのです。Gopher は、学内の情報を提供する手段を探していた大学や、文書の保管や管理を中央集権的に行いたいという大きな組織にとても人気でした。</p>

<p>さて、Gopher はミネソタ大学により作られたのですが、1993年2月に、彼らは Gopher サーバーの実装に対してライセンス料を取ると発表しました。その結果、多くの組織が Gopher の代替となる仕組みを探し始めることになりました。</p>

<p>そんな Gopher を代替しうる技術は、スイスの欧州原子核研究機構 (CERN) にありました。当時 CERN の研究員であった Tim Berners-Lee が、テキスト内のリンクを通じ文書から文書を渡ることのできる情報管理システムについて研究していたのです。彼は、この文書（ハイパーテキストと呼ばれていました）を公開するサーバーと、文書を読むためのソフトウェアを開発しました。そして、<q>WorldWideWeb</q> と名づけられたそのソフトウェアは、1991年に公開されました。しかし、その爆発的な普及と Gopher の置き換えが起こるまでには、まだ2つほど語らなければいけない出来事があります。</p>

<p>1993年4月13日、CERN は WorldWideWeb のソースコードをパブリックドメインとして公開しました。どういうことかというと、誰も料金を払う必要なくこのソフトウェアを利用でき、また開発できるようになったのです。</p>

<p>また同年、米国立スーパーコンピュータ応用研究所 (NCSA) が、Gopher クライアントと Web ブラウザーを合体させたプログラム、Mosaic をリリースしました。Mosaic は当初 Unix 端末のみの対応で、配布もソースコードのみでしたが、1993年12月に Apple Macintosh や Microsoft Windows でも動作する Mosaic がインストーラー付きでリリースされました。Mosaic はたちまち人気となり、それに連なり Web の人気も高まりました。</p>

<p>以降、Web ブラウザーの数は飛躍的に増加しました。ブラウザーの多くは、大学や企業による研究プロジェクトの成果として公開されたものでした。Opera もそのひとつで、ノルウェーの通信会社 Telenor が1994年に公開したものがはじまりです。</p>

<h3 id="browserwars"><q>ブラウザー戦争</q>の勃発</h3>

<p>Web の認知は、商業的な関心ももたらしました。Mark Andreessen は NCSA を離れ、Jim Clark と共同で Mosaic Communications を設立 (後に Netscape Communications Corporation へと改称) し、後に Netscape Navigator と呼ばれる Web ブラウザーの開発に乗り出しました。Netscape Navigator のバージョン1.0は、1994年12月にリリースされました。</p>

<p>一方で、NCSA の営利部門である Spyglass Inc.は、Mosaic の技術を Microsoft にライセンス供与し、Micorsoft はそれを基に Internet Explorer を開発しました。Internet Explorer 1.0は、1995年8月にリリースされました。</p>

<p>すぐに、市場で優位に立つための競争が始まりました。Netscape と Microsoft は開発者を惹きつけるために、機能の拡張を行ったのです。これは<q>ブラウザー戦争</q>と呼ばれました。一方 Opera はこの競争のなか、小さいながらも着実にその存在を維持し、Web 標準への対応や、Web 標準の発明を可能な限り行っていました。</p>

<h2 id="comingofstandards">Web 標準の到来</h2>

<p>ブラウザー戦争のさなか、Microsoft と Netscape は新しい機能の実装に躍起になっており、既にサポートしている機能のバグを修正することを疎かにしていました。彼らはまた、プロプライエタリな機能の追加もたくさん行われました。さらには競争のために、他のブラウザーで実装されている機能を互換性のないやり方で実装することも行っていたのです。</p>

<p>当時の開発者は Web サイトを構築する際に、こんな混乱した状況に対処しなければいけなかったのです。二大ブラウザーに対応させるために、同じ内容の Web サイトを2つ構築することもありました。または、どちらかのブラウザーにだけ対応させ、もう一方のユーザーを蚊帳の外に置くといったことも起こりました。こんなひどい状況でしたから、開発者のうっぷんは堪りにたまっていました。</p>

<h3 id="w3cformation">W3C の設立</h3>

<p>1994年に、Tim Berners-Lee は CERN、DARPA (ARPA より改称)、欧州委員会の支援を受け、マサチューセッツ工科大学に World Wide Web Consortium (W3C) を設立しました。W3Cのミッションは、Web を構築する技術やプロトコルの標準化を行い、世界中の人に可能な限りWeb上の情報を提供することです。</p>

<p>設立してから数年で、W3C はいくつもの<q>勧告</q>と呼ばれる仕様を公開しました。HTML 4.0、PNG 画像フォーマット、CSS level 1、CSS level 2などが挙げられます。</p>

<p>しかし、W3C は勧告を強制するといったことを行う団体ではありません。なので、製造側は自分の製品をW3Cの仕様に準拠させたいときにだけ利用すればいいわけです。しかしながら、W3C の仕様に準拠することに、実質的な価値はありません。ほとんどのユーザーがW3Cを知りませんし、気にもしないからです。</p>

<p>ですから、この<q>ブラウザー戦争</q>が落ち着くことはありませんでした。</p>

<h3 id="webstandardsproject">Web Standards Project</h3>

<p>1998年には、ブラウザー市場がすでに Internet Explorer 4と Netscape Navigator 4に支配されていました。そんな中、プロプライエタリな機能であるダイナミック HTML を実装した、Internet Explorer 5のベータ版が公開されたのです。これにより、Web 開発者は<em>異なる</em> JavaScript の書き方を、5つも学ばなければならなくなったのです。</p>

<p>このことが、数人の Web 開発者・デザイナーを立ち上がらせました。彼らは <q>Web Standards Project</q> (WaSP) と名乗り、W3C の仕様を「勧告」ではなく「標準」と呼びはじめたのです。そうすることで Microsoft や Netscape を説得し、仕様をサポートさせられるだろうと彼らは考えたのです。</p>

<p>活動への呼びかけは、<q>roadblock</q> と呼ばれる古くからある広告手法が使われました。Roadblock は、企業が広告を同じ時間にすべてのチャンネルで宣伝するもので、視聴者がチャンネルを変えても同じ広告を見てしまうというものでした。WaSP もこれに倣い、builder.com、Wired online など、Web 開発を対象としたサイトや多くの参加者がいるメーリングリストに向け、記事を同時に投稿したのです。</p>

<p>他にも、W3C (または他の標準化団体) に参加を考えている企業のうち、<em>加入の目的であったはずの</em>基本の理解ではなく、新しい機能の開発ばかりに目を取られてしまったものをひやかす事も行っていました。基本をおろそかにすることは、正しいスタートではないと考えていたからです。</p>

<p>あまり良い印象を持たないかもしれませんが、WaSP は何も批判だけしていたわけではありません。助けてもいたのです。たとえば、7人のメンバーは <q>CSS Samurai</q> を組織し、Opera や Internet Explorer の CSS サポートにおける、10の大きな問題を指摘しました（Opera はその後問題を修正しましたが、Internet Explorer が修正を行うことはありませんでした。）</p>

<h3 id="riseofstandards">Web 標準の高まり</h3>

<p>2000年に、Microsoft は Macintosh 版の Internet Explorer 5をリリースしました。これは活気的な出来事でした。なぜなら、このバージョンはW3C勧告を充分な水準でサポートしており、また Mac OS のデフォルトブラウザーだったからです。Macintosh 版の Internet Explorer の Web 標準サポートは、Opera の優れた CSS、HTML サポートとともに、とても肯定的に受け入れられました。Web 開発者やデザイナーが、Web 標準によるデザインをはじめて心地よいと感じた瞬間だったのです。</p>

<p>そこで、WaSP は Netscape に、Netscape Navigator 5.0が Web 標準を充分にサポートするまでリリースを延期しようと Netscape を説得しました（そしてこの行動は、後に Firefox となる人気ブラウザーの誕生につながりました）。WaSP はまた、<q>Dreamweaver Task Force</q> という、Macromedia の Dreamweaver を Web 標準に準拠させるタスクフォースも設立しました。</p>

<p>2001年のはじめに、人気の Web 開発サイト <q>A List Apart</q> がリデザインされました。このリデザインについて、手法や理由を説明した記事が公開されているのですが、その中にこんな一節があります。</p>

<blockquote cite="http://www.alistapart.com/articles/tohell">
<p>In six months, a year, or two years at most, all sites will be designed with these standards. […] We can watch our skills grow obsolete, or start learning standards-based techniques now.</p>
</blockquote>

<p class="note">訳: 半年か一年、いや二年後には全てのサイトが、これらの Web 標準を利用してデザインされるだろう。[…] いま私達にできることは、今までのやり方が古くなるのをただ見ているか、新しい Web 標準ベースな技術を学び始めるかのどちらかだ。</p>

<p>この予想はすこし前向きすぎました。2008年になっても、全てのサイトがWeb標準で作られている訳ではないからです。しかし、この言葉には多くの人が耳を傾けていました。古いブラウザーはシェアを落とし、そして Wired magazine と ESPN という二つの大きなサイトが、それぞれ2002年と2003年に、Web 標準によってリデザインされたのです。彼らは Web 標準や新しい技術を支持する第一人者となりました。</p>

<p>さらに、2003年に Dave Shea が <q>CSS Zen Garden</q> というサイトを公開しました。何よりも Web プロフェッショナルに大きな影響を与えたのが、このサイトでした。なぜなら、CSS Zen Garden は、中身が全く同じページでも、CSS ひとつでデザイン全て変更できることを端的に表現したからです。</p>

<p>それ以来、Web 標準は Web 開発コミュニティで当たり前の存在になりました。そしてこのコースは、Web 標準によるデザイン手法の基礎を知ることのできる、素晴らしい資料になっています。このコースを進めていけば大手サイトのように、きれいで、意味的で、アクセシブルで、そして Web 標準に準拠するWebサイトを作れるようになるのです。</p>

<h2 id="summary">まとめ</h2>

<p>この記事では、宇宙開発競争が現在のインターネットを生み出したこと、Tim Berners-Lee が世代を超えたハイパーテキストを定義したこと、二つの企業が商業的な関心から、歴史に残る開発者の反発を生んだことを説明しました。<q>Web 標準</q>という言葉は Web プロフェッショナルの間で広く使われていますが、W3C の中でも使われています（彼らのページにもこの単語が出ていますね）。ですので、これが私達が教えること、つまり Web サイトを構築する<em>標準的な</em>やり方になります。</p>

<h2 id="furtherreading">関連資料</h2>

<p>もっと知りたいと思った方は、次のサイトを読んでみましょう。</p>
<p class="note">訳注：以下のリンクは全て英語で書かれています。</p>
<ul>
  <li><a href="http://en.wikipedia.org/wiki/History_of_the_Internet">The history of the Internet (wikipedia)</a></li>
  <li><a href="http://en.wikipedia.org/wiki/History_of_the_World_Wide_Web">The history of the World Wide Web (wikipedia)</a></li>
  <li><a href="http://www.w3.org/Consortium/history">The history of the W3C</a></li>
  <li><a href="http://webstandards.org/">The Web Standards Project</a>, and their <a href="http://www.webstandards.org/about/history/">history</a></li>
  <li><a href="http://www.alistapart.com/">A List Apart</a></li>
  <li><a href="http://www.csszengarden.com/">CSS Zen Garden</a></li>
</ul>

<h2 id="exercisequestions">練習問題</h2>

<p>もっと調べたいと思った方は、次の問題に答えてみましょう。</p>
    
<ul>
  <li>Windows、Mac OS X、Linux には、どんなブラウザーがありますか？</li>
  <li>各ブラウザー利用者の割合はどのようになっていますか？</li>
  <li>モバイル端末がWebにアクセスする際、どんなブラウザーを利用しますか？</li>
  <li>W3C が公開した <q>Web 標準</q>の数はどれくらいになりますか？そして、ブラウザーベンダーによって広く実装されているものはどれですか？</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="start" href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/">前の記事: Web 標準カリキュラムの紹介</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/3-how-does-the-internet-work-ja/">次の記事: インターネットのしくみ</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc">カリキュラムの目次へ</a></li>
</ul>

<h2>著者紹介</h2>

<div class="right">
<img alt="著者 Mark Norman Francis の写真" src="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w/norm.jpg" />
<p class="comment">Photo credit: <a href="http://flickr.com/photos/andybudd/98405468/">Andy Budd</a>.</p>
</div>

<p>Mark Norman Francis は Web の発明以前より、インターネットを利用していました。彼は Yahoo! で Front End Architect として、Web 開発におけるベストプラクティス、コーディング標準、そして品質の定義を世界的な規模で行った経験があります。</p>

<p>Yahoo! 以前の彼は、Formula One Management、Purple Interactive、City University にて Web 開発、バックエンド CGI プログラミング、システムアーキテクチャなど、さまざまな仕事を行っています。彼は <a href="http://marknormanfrancis.com/">http://marknormanfrancis.com/</a> にて、ブログのようなものを書いています。</p>

<h2>翻訳者について</h2>

<img alt="翻訳者矢倉眞隆の写真" src="http://forum-test.oslo.osa/kirby/content/articles/301-2-web-web-/mitsue-myakura.jpg" class="right" />

<h3>矢倉 眞隆 (Masataka Yakura)</h3>
<p>1984年生まれ。株式会社ミツエーリンクスにて、社内の品質改善活動や Web 標準 の普及啓蒙を行っている。W3C HTML WG メンバー。</p>

<h3><a href="http://www.mitsue.co.jp/">株式会社 ミツエーリンクス</a></h3>
<p>
1990年創業。大規模な Web サイト開発を得意とするインフォメーション・インテ グレータ。自社コンテンツの <a href="http://standards.mitsue.co.jp/">Web 標準 Blog</a> や<a href="http://accessibility.mitsue.co.jp/">アクセシビリティ Blog</a> より、Web フロントエンド技術に関するさまざまな情報を発信中。</p>
