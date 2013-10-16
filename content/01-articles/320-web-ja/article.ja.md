Title: Web 標準 ― すばらしき夢、でも現実は？ 
----
Date: 2009-11-25 08:22:08
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a-ja/">前の記事: Web 標準のモデル — HTML, CSS, JavaScript</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/6-information-architecture-planning-o/">次の記事: Information Architecture—Planning out a web site</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc">カリキュラムの目次へ</a></li>
</ul>

<h2>はじめに</h2>

<p>このシリーズではこれまで、Web 標準の素晴らしい理想について紹介してきました。Web 標準は OS やその他さまざまな電子機器上の Web ブラウザーで互換性を確保することができます。しかし、それは「本当にほんと」なのでしょうか？すべてのブラウザーが 100％ Web 標準に準拠しているのでしょうか？すべての Web 開発者は Web 標準を適切に利用できているのでしょうか？ Web 標準を利用して構築されたページのデザインが、どんな環境でも問題ないと言えるのでしょうか？</p>

<p>最後の質問に一言で答えるならば「いいえ」になります。Web 標準によって実現される世界は理想的なものですが、現実はそこから遠く離れたところにあります。この記事では、そのような現実についていくつかの観点から紹介しようと思います。</p>

<ul>
<li><a href="#standardscheck">標準に準拠しているか確かめるには</a></li>

<li><a href="#standardstoday">今日の Web サイトの準拠度合い</a>
<ul>
<li><a href="#amazon">Amazon: ショッピングサイトの「スタンダード」？</a></li>
<li><a href="#cnn">CNN: ニュースの標準、Web も標準？</a></li>
<li><a href="#apple">Apple: 美しいデザインの頂点。準拠度合いも？</a></li>
<li><a href="#survey">Web サイトの準拠度調査</a></li>
</ul>
</li>

<li><a href="#compliancelack">準拠していない原因は？</a>
<ul>
<li><a href="#education">教育</a></li>
<li><a href="#business">ビジネス視点</a></li>
</ul>
</li>

<li><a href="#summary">まとめ</a></li>
<li><a href="#furtherreading">関連リソース</a></li>
<li><a href="#exercises">課題</a></li>

</ul>

<h2 id="standardscheck">標準に準拠しているか確かめるには</h2>

<p>「Web サイトが Web 標準を利用しているのか、どうやって調べるの？」という疑問を持った方がいるかもしれませんね。本筋に入る前にまずはそこから説明しましょう。たとえば、Web 標準を使ったサイトは、使っていないサイトと何か見た目に違いがあるのでしょうか？</p>

<p>答えは「はい」と「いいえ」の両方になります。Web 標準を適切に利用したサイトと、他のごちゃごちゃしたマークアップからなるサイトとの間で、何かが違って見えるといったことはありません。しかし、Web サイトのソースコードを見てみましょう (右クリックまたは Ctrl クリックから「ソース」または「ソースの表示」といった項目を選んでください)。大きな違いが見てとれると思います。</p>

<p>Web 標準に準拠したサイトは、ページの整形情報をほとんど含まない綺麗なマークアップになっているでしょう。ざっと見ただけでは、ソースの違いは分かりにくいかもしれません。でも、信じてください。たとえば、スクリーンリーダーを利用する視覚障害者や検索エンジンは、その違いをはっきりと体感することができるでしょう。Web 標準を使うことについての利点は、ひとつ前の記事で触れています。</p>

<p>標準への準拠度合いを確かめる一番簡単な方法は、Validator と呼ばれるオンライン上のツールを使用することです。W3C (World Wide Web Consortium) は Validator を開発しており、<a href="http://validator.w3.org/" title="W3C HTML validator">http://validator.w3.org/</a> より無料で利用できます (図1)。あなたは自分のサイトにある HTML/XHTML 文書に問題がないかをチェックするために、Validator を利用することができます (むしろチェックするべきです)。CSS も同様に、<a href="http://jigsaw.w3.org/css-validator/" title="W3C CSS validator">http://jigsaw.w3.org/css-validator/</a> にて CSS Validator が公開されています。ぜひアクセスして、いくつかよく訪れるサイトをチェックしてみてください。</p>

<img src="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu/figure1.jpg" alt="W3C HTML Validator の画面。チェックした XHTML 1.0 Strict 文書に問題がないことを示している。" />
<p class="comment">図1: W3C の HTML Validator はページのマークアップをチェックし、エラーを指摘してくれます。</p>

<p>ページを Validator にかけてエラーが出ないようにすることが、なによりも重要です。さて、ブラウザーが Web 標準に準拠しているかを確かめるにはどうすればよいのでしょうか？これについて、Web Standards Project が Acid テストと呼ばれるいくつかのテストを公開しています。Acid テストとは、HTML と CSS を複雑に組み合わせたもので、ブラウザーの対応度が視覚的に分かるようになっています。最新版である Acid テストは Acid3 です。Acid テストについては <a href="http://www.acidtests.org/">http://www.acidtests.org/</a> をご覧ください。また、実際に今お使いのブラウザーでテストして、対応状況を確認してみてください。</p>

<h2 id="standardstoday">今日の Web サイトの準拠度合い</h2>

<p>大手の Web サイトは、Web 標準を利用しているのでしょうか。それとも、他の手法を使っているのでしょうか。</p>

<p>そこで、いくつか企業の Web サイトを W3C の HTML Validator にかけ、利用状況を調べてみることにしました。以下はその結果ですが、大手の Web サイトの多くが invalid、つまりは Web 標準に従っていないことが分かりました。驚くかもしれませんが、どうかやる気をなくさないでください。大手のサイトが invalid だからといって、あなたも自信のサイトを valid にできない訳では決してありません。一般的に、Web サイトが大きくまた複雑になればなるほど、Validator にパスすることは難しくなるのです (他にも利用している技術など、考えるべき項目もありますが)。</p>

<h3 id="amazon">Amazon: ショッピングサイトの「スタンダード」？</h3>

<p>オンラインショッピングの経験がある方の多くは、<a href="http://www.amazon.com" title="Amazon.com のホームページ">Amazon.com</a> (または国・地域別の Amazon) にアクセスしたことがあるのではないでしょうか。Amazon はサイバースペースにおける巨大ショッピングセンターで、本から CD, 日用品と幅広くの商品を扱っています。さて、Amazon.com は Validator にパスするのでしょうか？ 図2 をご覧ください。</p>

<img src="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu/figure2.jpg" alt="Validator によると Amazon は多くのエラーを検出しました" />

<p class="comment">図2: もののみごとにエラーを出しています。マークアップが invalid というだけでなく、DOCTYPE 宣言 (どのバージョンの HTML/XHTML なのかを示す) さえも書かれていません。</p>

<p class="note">訳注: 翻訳時点の 2009年11月において、エラーの数や画面の詳細が少し異なっています。</p>

<p>Amazon は標準への準拠においてはまだまだ道半ばなようです。Amazon の内部事情に精通しているわけではないので、これは私の推測になりますが、たぶん Amazon は Web サイトの構築に同じソフトウェアを何年も使い続けているのでしょう。Web 標準は 2000年代の早期まで脚光を浴びるものではなかったため、Amazon はそれ以前に作られたシステムによって運営されているのです。これも推測になりますが、Amazon はいま、古いソフトウェアを使い続けなければいけない状況に苦しんでいるのではないでしょうか。</p>

<h3 id="cnn">CNN: ニュースの標準、Web も標準？</h3>

<p>きっと、ニュース企業は違いますよね？たとえば、<a href="http://cnn.com" title="CNN のホームページ">CNN.com</a> は世界的にもっとも大きなメディア Web サイトのひとつです。グローバルな情報収集網を持ち、情報を即座に報道する能力があるわけですから、サイトが valid なマークアップであることを保証する Web のスペシャリストが社内にいてもおかしくないでしょう。では、図3 をご覧ください。</p>

<img src="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu/figure3.jpg" alt="CNN は Amazon よりも標準を意識しているようですが、こちらもまた invalid です。" />

<p class="comment">図3: CNN.com (2008年4月15日時点) には 33 個のエラーがあります。DOCTYPE 宣言が HTML 4.01 Transitional となっていますが、マークアップに XHTML 的な書き方が散見されます。</p>

<p>33 つのエラーがありますが、大規模で複雑な Web サイトとしてこの数字は悪くありません。これらのエラーは、また推測になりますが、CNN が利用している CMS (コンテントマネジメントシステム) が標準に準拠したマークアップを生成できない、または記事を書くスペシャリストが生み出したエラーの積み重なりによるものでしょう。</p>

<p class="note">訳注: CNN.com は 2009年10月にリニューアルされました。しかしながら、翻訳時点の2009年11月において、ページには上記と同種のエラーが出ています。</p>

<h3 id="apple">Apple: 美しいデザインの頂点。準拠度合いも？</h3>

<p>Apple は、販売するハードウェアやソフトウェアの美しさと機能性の高さで有名です。新製品の発表会はまるで、信仰に厚い人々が退去して押し寄せる宗教体験のようです。<a href="http://apple.com" title="Apple のホームページ">Apple の Web サイト</a> (図4) もまた、デザインが美しく、さらに情報もよく整理されているサイトと言われています。さて、Apple の Web サイトは Validator に対しても美しいのでしょうか。</p>

<img src="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu/figure4.jpg" alt="Apple.com はおおよそ valid な HTML 4.01 Transitional マークアップで作成されています。" />

<p class="comment">図4: Apple.com はおおよそ valid な HTML 4.01 Transitional マークアップで作成されています。6 つのエラーがありますが、これはマークアップのミスによるもの、また Safari 固有のタグを利用していることに起因します。</p>

<p class="note">訳注: 翻訳時点の 2009年11月時点では、策定中である <a href="http://www.w3.org/TR/html5">HTML5 仕様</a> の DOCTYPE 宣言が使われており、HTML 4.01 ではなくなっています。</p>

<p>Apple の Web サイトは標準にかなり近いところまで来ています。5 分もあればエラーを修正することができるでしょう。さて、ここで私が紹介したいのが、検索ボックスに与えられた、Safari 固有の属性です (<code>type=&quot;search&quot;</code> という属性が指定されています)。この属性により Safari では、検索ボックス内の小さな虫メガネのアイコンから、最近検索した言葉の一覧を見ることができるのです。一方 Opera や Internet Explorer など他のブラウザーでは、ただのテキストボックスとして表示されます。</p>

<p class="note">訳注: この <code>type=&quot;search&quot;</code> という属性は Safari 固有のものではなく、<a href="http://www.w3.org/TR/html5/forms.html#attr-input-type-keywords">HTML5 仕様で定義</a> されているものです。</p>

<h3 id="survey">Web サイトの準拠度調査</h3>

<p>さて、他のサイトをひとつひとつ見ていくのも疲れるので、残りのサイトは円グラフにまとめてみました。調査対象ですが、Fortune のトップ 50 や Alexa のトラフィックランキングから 40 社を選んでいます。では、図5 をご覧ください。</p>

<img src="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu/figure5.jpg" alt="85％ もの Web サイトが invalid でした。" />

<p class="comment">図5: 対象とした Web サイトの 85％ が何らかの理由で invalid となり、valid なものは 15％ でした。エラーの規模は大小さまざまで、エラーが 1000 を越えるものもあれば、typo によるエラーがほんの数個というものもありました。</p>

<h2 id="compliancelack">準拠していない原因は？</h2>

<p>もう、ただただ「なんで、なんで valid じゃないの？」と泣くしかありません。泣くのは大げさすぎるかもしれませんが、あなたも同じような疑問を持ったのではないでしょうか。こんなに valid な Web サイトが少ない原因はなんでしょうか。古い E コマースシステムや CMS の問題など、考えられる理由は既にいくつか示しました。しかし、他にもいくつか要因があるのです。</p>

<h3 id="education">教育</h3>

<p>私が通っていた学校には、情報システムマネジメント（MIS）、コンピューターサイエンス、ニューメディアという、Web サイトの製作に関係するコースがありプログラムが用意されていました。多くのことを効果的に教えるプログラムではあったのですが、実際にコードを書く作業を教わる機会はそこまでなかったようです。私が多くの大学の Web 関連コースの説明を読んで感じたのは、HTML, CSS, JavaScript などの Web 言語は、コンピューターサイエンスのプログラムの要件としては敷居が低く、MIS やニューメディアのプログラムには敷居が高いものだということです。</p>

<p>さらに、多くの教育コースが Web 関連の技術について詳しく教えられていないようです。Web 標準を利用する開発者が 10 人いて、彼らにどこで Web 標準を学んだのかと尋ねるとします。私の予想では 9 人が「自分で学んだ」と答えるでしょう (残りの一人は IE6 でページをきっちり表示するのに一生懸命で、質問には答えてくれないでしょう)。</p>

<p>しかし、Web 標準の策定に責任を持つ W3C (World Wide Web Consortium) と、WaSP (Web Standards Project) がこの問題に取り組んでいます。ブラウザーベンダーと開発者の両方に対し、Web 標準のより良いサポートを呼びかけているのです。</p>

<p>このコースが存在する理由は、ちゃんとした Web 標準の教育マニュアルを用意し、自由に利用可能とするためです。私達はひとが Web 標準を使わない理由 (「言い訳」と言うのははばかられるので……) を無くそうとしています。実際に Web 標準による得られる恩恵を考えると、Web 標準を利用しないことへの言い訳なんて存在しません (ひとつ前の記事で説明しています)。</p>

<h3 id="business">ビジネス視点</h3>

<p>私はよく Web ベースのスタートアップに関わる企業家の Web サイトを訪れるのですが、そこでは「Web 2.0 アプリケーション」での Web 標準の利用についていくつもの議論が交わされています。その中にはいつも、Web 標準を利用することに意味がある (これまで私達が話した理由と同じです) と考える人と、「だから何？」と考える人の応酬があります。</p>

<p>これは、Web ブラウザーが悪いコードも処理してしまうという事実に原因があります。メジャーなブラウザーでページを問題なく表示させるのに、マークアップが valid である必要はないのです。そして、時は金なりというビジネス視点で考えると、余計な時間をかけページを valid にする必然性はなくなってしまうのです。30 分かけて table ベースのごちゃごちゃしたコードで Web サイトを次から次へと作ること、30 分かけて HTML と CSS でサイトを作り、さらに 30 分かけてそれが valid であり、かつクロスブラウザー対応も行われており、メジャーなブラウザーで同じに見えることを保証すること、どちらが簡単に思えますか？</p>

<p>私の世代 (そろそろ 30 才になります) の多くは、Web サイトは table でレイアウトを行い、font タグでタイポグラフィを整えて作るものと学びました。そのやり方は今でも「使え」ますし、見た目にも問題ありません。それなのに、新しいやり方を学びなおすべきと言われるのは、とても威圧的に感じるでしょう。また、雇用主は基本的に、そのような違いを知っていません。いままでの人生において、パフォーマンスの検証工程で私のマークアップの品質について語る上司はいませんでした。さて、では Web 標準にどのようなインセンティブがあるのでしょうか？</p>

<p>私はここにひとこと言いたいのです (私がどちらのサイドについてるか、お分かりですよね)。複雑なコードを書き続けるやり方は、とても近視眼的です。私の経験から言わせてもらうと、Web 標準によるリデザインは、不適切なコードによって作られたものを変換するよりずっと楽です。XHTML/CSS が約束してくれる「リデザインはCSS を変更するだけで行える」という夢のような世界にはまだ到達していませんが、その近くまで来ています。</p>

<p>また、Web 標準の知識を求める求人情報が、今後増えるであろうことも気に留めておいてください。</p>

<p>さらに、ビジネス視点でも Web 標準を利用する意味があります。基本的に、Web 標準を利用すれば、検索エンジンのランキング (Google でどれだけ検索結果の上位にいるのか) が向上します。1位になることも難しくありません。また、標準やベストプラクティスを利用すれば、ページは基本的にアクセシブルになり、障害者やモバイル端末ユーザーにとって便利なものとなります。新たなユーザーや視認性の向上は、いつもビジネスに良い影響を与えます。</p>

<h2 id="summary">まとめ</h2>

<p>この記事では Web 標準の対応について現状をまとめました。Web 標準が適切に使われているかをチェックする手段や、Web 標準を適切に利用している Web サイトの数、そして Web 標準を使わない理由についてです。この記事を読んだ方は、Web 標準にしない理由が説得力のあるものではあまりなく、また難しいと言われている問題も簡単に克服できることを分かっていただけたのではないかと思います。</p>

<p>では、未来の Web 開発者はどうすればよいのでしょうか？このコースを読み続け、Web 標準に苛立つのか、それともグラフィカルなエディタを立ち上げて table を使ってデザインすればよいのでしょうか。</p>

<p>Web 標準による開発が時間の無駄といわれる一番の理由が、旧来の手法よりも学ぶことと、すべてのブラウザーで機能するよう開発するのに時間がかかりすぎるというものです。では、適切な方法を学んで、そのトラブルから身を守ろうじゃありませんか。</p>
<p>あなたは Web サイトの作り方を学びたいと思い立ちました。作り方には良い道と悪い道があります。じゃあ、良い道にすすもうじゃありませんか。</p>


<h2 id="furtherreading">関連リソース</h2>
<ul>
<li><a href="http://validator.w3.org/">W3C の HTML Validator</a></li>
<li><a href="http://www.w3.org/">W3C の Web サイト</a> (各種 Web 標準の詳細や、策定中の仕様など)</li>
<li><a href="http://www.webstandards.org/">Web Standards Project</a></li>
</ul>
<h2 id="exercises">課題</h2>
<ul>
<li>今回、いくつか大手の Web サイトを例にとり、それらが valid であるかどうかを確認しました。同じように、あなたがよく訪れるサイトをいくつか Validator にかけてみましょう。Valid なサイトはありましたか？エラーがある場合は、メッセージを読んでその原因を考えてみましょう。</li>
<li>DOCTYPE とはなんでしょうか？どのような役目がありますか？</li>
<li>どのような状況において、Web 標準はビジネスに影響するでしょうか？</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a-ja/">前の記事: Web 標準のモデル — HTML, CSS, JavaScript</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/6-information-architecture-planning-o/">次の記事: Information Architecture—Planning out a web site</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc">カリキュラムの目次へ</a></li>
</ul>

<h2>著者紹介</h2> 
 
<img alt="著者 Jonathan Lane の写真" src="http://dev.opera.com/articles/view/3-how-does-the-internet-work/Jonlane.jpg" class="right" /> 
 
<p>Jonathan Lane はカナダのブリティッシュコロンビア州メーンアイランドにある Web 開発会社 <a href="http://industryinteractive.net/">Industry Interactive</a> の President を務めています。彼はレスブリッジ大学の Curriculum Re-Development Center にて長年にわたり、Web プロジェクトの取りまとめを行っていました。</p> 
 
<p>彼のブログは <a href="http://www.flyingtroll.com/">Flyingtroll</a> になります。また、プロジェクト管理アプリケーション Basecamp をEメールから利用可能にするアプリケーション「<a href="http://www.mailmanagr.com/">Mailmanagr</a>」の開発を行っています。</p> 
 
<h2>翻訳者について</h2> 
 
<img alt="翻訳者 矢倉眞隆の写真" src="http://forum-test.oslo.osa/kirby/content/articles/320-5-web-/mitsue-myakura.jpg" class="right" /> 
 
<h3>矢倉 眞隆 (Masataka Yakura)</h3> 
<p>1984年生まれ。株式会社ミツエーリンクスにて、社内の品質改善活動や Web 標準の普及啓蒙を行っている。W3C HTML WG メンバー。</p> 
 
<h3><a href="http://www.mitsue.co.jp/">株式会社 ミツエーリンクス</a></h3> 
<p> 
1990年創業。大規模な Web サイト開発を得意とするインフォメーション・インテグレータ。自社コンテンツの <a href="http://standards.mitsue.co.jp/">Web 標準 Blog</a> や<a href="http://accessibility.mitsue.co.jp/">アクセシビリティ Blog</a> より、Web フロントエンド技術に関するさまざまな情報を発信中。</p>
