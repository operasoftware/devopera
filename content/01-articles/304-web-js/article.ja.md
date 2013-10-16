Title: Web 標準カリキュラムの紹介
----
Date: 2009-10-20 03:06:07
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
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w-ja/">次の記事: インターネットと Web の歴史、そして Web 標準の進化</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc">カリキュラムの目次へ</a></li>
</ul>

<h2>はじめに</h2>

<p>私には、ある夢がありました。</p>

<p>過去8、 9年にわたり、私は教育に関する仕事に力を注いでいました。あるときは技術書を執筆し、人がその技術で何かかっこいいものを作る手助けをしました。勤務先に新しく入ってきた人の訓練を行うこともありました。また、利用者の助けになるよう、Opera のソフトウェアについてチュートリアルの執筆・編集も行いました。</p>

<p>私は Web についても熱意をもっています。その中でも、オープン Web 標準というものをとても信じています。そして、Web をより良いものとするために私に何ができるのだろうと考えたとき、はじめに言った教育というトピックに立ち返るのです。</p>

<p>「教育」といっても、いろいろあるでしょう。他人を尊敬し、お互いが協力しあう方法を教えることかもしれません。あるいは、デバイスやプラットフォームを越えて機能し、また障害を持つ人に対してアクセシブルな Web サイトを作る方法を教えることかもしれません。このうち、Web 標準について当てはまるのは後者です。というわけで私は、今日そして将来の Web のために、Web標準を採用するサイトを増やす手助けに注力しようと決意しました。</p>

<p>決意してからしばらくの間は、思いが私の頭の中だけに留まっていましたが、Opera で働く機会を得ることで実現することができました。仕事として価値を見いだしてくれた Opera に、とても感謝しています！ついに、夢のひとつがかなったのです。</p>

<p>というわけで、この記事では過去数か月にわたる努力の結晶である<strong> Web 標準カリキュラム</strong>について紹介したいと思います。このカリキュラムは、私を含めたくさんの方が執筆した、Web デザイン・Web 開発の土台となる知識を提供するコース資料です。カリキュラムはほぼすべての方を対象としています。お金は必要ありませんし、資料はアクセシブルです。また、事前知識も必要としません。</p>

<p>私はこのカリキュラムを大学で利用してほしいと考えています。なぜなら、Web標準に関する教育資料や指標は、多くの大学で不足しているからです。私は多くの学生から、彼らが Web 標準で作成した課題が減点されるという話を聞きました。これはなぜかというと、とても古い知識を基に採点が行われているからです。一方で、Web 関連の職種で募集をかける雇用者からは、面接を受けに来た学生が Web 開発の実情をまったく知らないといった嘆きも聞いています。</p>

<p>もしあなたが、望ましい方法でWeb標準を教える先進的な大学に居たら、ぜひ<a href="#contact">連絡してください</a>。</p>

<p>さて、この記事は次のような構成になっています。</p>

<ul>
<li><a href="#webstandards">なぜ、Web 標準なのか？</a> — Web 標準を利用することの利点はもちろんのこと、一部で受け入れられていない現状とその理由、そして、このコースがどのように対処しようとしているのかを簡単に述べようと思います。</li>
<li><a href="#structure">コースの構成</a> — 名前のとおり、コースがどのように構成されているのか、また教育担当者がどのように資料を利用すると効果的かを説明します。</li>
<li><a href="#who">このコースを利用すべき人は誰？</a> — 「誰もが (anyone)」と書くことがあるのですが、それが具体的にどういった意味なのかを説明します。</li>
<li><a href="#toc">カリキュラムの目次</a> — 「おしゃべりはもう勘弁。早く学びたい。」という方はこちらをクリックしましょう。目次にスキップできます。</li>
<li><a href="#acks">謝辞</a></li>
<li><a href="#contact">連絡先</a></li>
</ul>

<h2 id="webstandards">なぜ、Web 標準なのか？</h2>

<p>Web 標準を Web デザイン / Web 開発に取り入れることは、どう素晴らしいのでしょうか。4番の記事に詳しく書かれていますが、ここでも簡単に説明しておくことにしましょう。</p>
<p>Web 標準を利用することで、次のような恩典が与えられます。</p>

<ol>
<li><strong>コーディングの効率化</strong>: このコースを進めていくと、Web標準に関するベストプラクティスの多くが、コードの再利用に関係していることに気づくと思います。ページの内容 (HTML) 、スタイル情報 (CSS) 、挙動に関する情報 (JavaScript) をそれぞれ分けることで、ファイルサイズを抑えることができ、また情報の再利用が同じコードを書くことなく実現できます。</li>

<li><strong>管理の容易さ</strong>: 効率に関連するのですが、HTML をまず書き、あとで必要な部分にだけスタイルと挙動を class や関数を利用し与えるというやり方は、サイトの管理を容易にします。もしあとでスタイルや挙動を変更する必要が生じても、該当する一部分を編集するだけでWebサイト全体に反映されるからです。すべての HTML 文書をいちいち変更する必要はありません。</li>

<li><strong>アクセシビリティ</strong>: Web における重要課題のひとつに、<em>置かれている環境を問わず、すべての人に対し Web サイトをアクセシブルにする</em>というものがあります。たとえば、視覚障害や運動障害 (手を自由に動かせないなど、運動機能に制限のある状態) を持つ方が、不自由なく Web サイトを利用できるようにすることが挙げられます。大変そうに感じるかもしれませんが、Web 標準とベストプラクティスに従うことで、余計な労力を割くことなく、多くの方に対してアクセシブルな Web サイトにすることが可能です。</li>

<li><strong>デバイスの互換性</strong>: これは、Windows、Mac、Linux といったプラットフォームだけではなく、携帯電話やテレビ、ゲーム機など、別のブラウジングデバイスにおいてもWebサイトを機能させることを意図しています。これらのデバイスには、画面の大きさやプロセッサーの性能、操作手法に制限がありますが、これもアクセシビリティと同様に、Web 標準とベストプラクティスを利用することで多くのデバイスで機能する Web サイトにできるのです。いまや、携帯電話は PC よりも急速に普及しており、またそれらの多くがインターネットに接続できます。それなのに、このマーケットを見過ごすことを、あなたやあなたのクライアントが許すでしょうか？(モバイル Web 開発については、<a href="http://dev.opera.com/mobile/">dev.opera.com</a>に掲載されているモバイル関連の記事もご覧ください。)</li>

<li><strong>Web クローラー/検索エンジン</strong>: いわゆる<em>検索エンジン最適化 (SEO)</em>と呼ばれるものです。ちょっと詳しく説明すると、Web を巡回しサイトをインデックスに登録する Web クローラーというものに対して、Web サイトを可能な限り可視化することで、<a href="http://www.google.com">Google</a> や他の検索ランキングで上位になる方法を表します。SEO にはいろいろな術があるのですが (詳しくは <a href="http://dev.opera.com/articles/view/intelligent-site-structure-for-better-se/">Intelligent site structure for better SEO!</a> や <a href="http://dev.opera.com/articles/view/semantic-html-and-search-engine-optimiza/">Semantic HTML and Search Engine Optimization</a> などの SEO 関連記事をご覧ください)、これについても Web 標準を利用することで、Google や Yahoo! に対し Web サイトをより可視化することができ、ビジネスに良い影響をもたらすのです。</li>
</ol>

<p>Web 標準にはこのような利点があります。しかし一方で、Web にあるサイトのほとんどが未だWeb標準に従ったものではありません。さらに、Web 開発者の多くもまた、時代遅れでかつ良くない手法を利用し続けているのです。</p>

<p>「どうして？」と思った方がいるかもしれません。でも、これにはいくつかの理由があるのです。不十分な教育、会社のポリシー、学ばなくても稼げることによる学習意欲の低下、Web 標準の難しさ、Web ブラウザーの Web 標準対応状況といったことを理由に、言い訳をする人がいるのです。</p>
<p>では、一つずつ詳しくその理由を考え、さらに反論してみましょう。Web 標準を学ばない/取り入れないことに言い訳ができないようにするのです。</p>

<ol>
<li><strong>不十分な教育</strong>: これがこのコースの存在理由でもありますね。多くの大学が、Web 関連のコースで Web 標準を教えることはありませんし、また多くのカリキュラムが、時代遅れな手法を今でも解説しています。変えようとしても、お役所的な手続きがありますからとても難しいのです。書籍やトレーニングなどもありますが、高くつきます。しかし、ちょっと待ってください。そのための Web 標準カリキュラムです。このコースは無料ですし、Web 標準の教育について大学などにプッシュも行っています。言い訳はできませんよ。</li>

<li><strong>会社のポリシー</strong>: いくつかの企業や研究所のWebサイトが時代遅れなことについて、疑いの余地はありません。そういったところでは、職員に時代遅れのブラウザーの仕様を義務付けるポリシーがあるかもしれません。しかし、状況は改善されています。どのように Web サイトを作り変えていけばいいのかを説明するコースも無料で存在していますし、今こそ悪い習慣を改めるべきなのです。Web サイトを Web 標準というモダンなつくりにすることにより、古いブラウザーでは見栄えが悪くなることがあります。そうなると、内部で利用するブラウザーもアップグレードしようという動きがでてくるでしょう (もちろん、古いブラウザーでも新しい Web サイトは最低限機能しなければなりませんが)。また、企業は顧客に対してもブラウザーのアップグレードを進めるべきです。Web 標準なサイトにすることにより、検索結果のランク向上やアクセシビリティの確保、多様なデバイスに対応できるなど、ビジネスメリットもあります。それを無視するつもりでしょうか？</li>

<li><strong>「勉強する必要なんてないから」</strong>: 「時代遅れなやり方でも給料はもらえているし、なんで新しいやり方に悩まされる必要があるんだい？」なんて言う人がいることを私は知っています。でも、先ほど説明したとおり、Web 標準によるやり方は効率がよく、また書くことも管理することも容易なのです。また、モダンなコードはアクセシブルですし、デバイスを限定することもありません。なんだか、わくわくしてきませんか？さらに、新しいことを学べば、自分のスキルセットをこれからのキャリアにも生かせるでしょうし、もっとお金を稼げるようになるかもしれません。それに今日の企業は、Web 標準のスキルがある人を要求しているんですよ。</li>

<li><strong>「難しいんだよ」</strong>: まったくもう。ちょっとでいいので、コースを進めてみてください。Web 標準の基礎を習得することが難しくないことを理解できると思いますから。これは特定の人に限ったことではありません。Web デザイン / Web 開発の初心者であっても、またはスキルを磨くため新しく Web 標準を学ぼうとしている Web 開発者であっても、同じように感じるはずです。Web 標準は時代遅れなやり方と同じくらいの難易度ですし、そこまで難しいわけではありません。しかし、そのような古いやり方に比べて、多くの利点があるんです。</li>

<li><strong>ブラウザーの Web 標準サポート</strong>: ブラウザーの Web 標準に関するサポートは、昔は本当にバラバラでした。ですから、Web サイトのクロスブラウザー対応は悪夢のようなものでした。しかし最近はそうでもありません。新しいブラウザーは充分に Web 標準をサポートしています。対応度合いの低い古いブラウザーに対してはまだ配慮が必要ですが、現在のベストプラクティスを使えば、古いブラウザーの利用者に対しても理にかなったユーザー体験を提供できるのです。</li>
</ol>

<p>いかがでしょう。ご覧のとおり、Web 標準を取り入れないことへの言い訳はもう通じません。もしあなたが初心者であれば古いやり方を忘れる必要もないので、ペストプラクティスを最初から学べます。</p>

<div class="note">
<p>「古いやり方」などとぼやかし、具体的な説明をしていませんね。私達は、このコースでそれらを説明することは考えていません。むしろ、そのようなことを知ることなく、ただ正しい道を歩めばいいと思っています。</p>
<p>しかしながら、一体全体なんのことを言っているのか、気になって仕方がない人もいるでしょう。というわけで、ここでざっくりと説明しましょう。</p>

<p>その昔、Web サイトは表 (table) を利用してページのレイアウトを行っていました。画像やテキストを別々のセルにあてがうという使い方ですが、これは表の適切な使い方ではありません。また、マークアップが過剰なものになってしまいます。レイアウト関連の手法にはスペーサー GIF と呼ばれる、透明な画像でページ内の要素を厳密に調整するものがありした。しかしこちらも表と同様に、画像の適切な使い方ではありませんし、画像を過剰に使うことになります。</p>

<p>JavaScript で動的なメニューを実現するページもありました。しかしこれは、JavaScript を無効にした環境では動作しませんし、スクリーンリーダーを利用する視覚障害者を混乱させてしまいます。また、特定のブラウザーでしか動かないといったことも起こります。</p>

<p>他にも、<code>&lt;font&gt;</code> タグを利用し、スタイル情報を HTML 文書内に直接埋め込むものもありました。管理性は最悪で、マークアップも過剰になります。</p>

<p>これはほんの一部で、他にも Web 開発にとって良くない手法がいっぱいあります。そして、何より残念なのが「その昔」と書いている一方で、これらの手法が未だ多くの人に使われていることなのです。</p>

<p>Web 開発というものは、どんなに良くても面倒なものです。しかし、これらの悪いやり方を使い続けても、事態は悪くなる一方です。ですから、このコースでも説明するとおり、Web 標準とベストプラクティスを利用することが、一番良い方法なのです。</p>
</div>

<h2 id="structure">コースの構成</h2>

<p>このコースは、数多くの記事から構成されています。基本コースで50本以上の記事があり、各記事は数千ワードほどの長さになります。個々の記事は特定の内容について取り上げており、必要に応じて、その背景や重要な理論、実践的な例やチュートリアル、例題などが提供されます。</p>

<p>コースを教えるもっとも論理的な方法は、あなたの受け持つ講義の回数にあわせて、記事を割り振ることです。講義でカバーする内容は、事前に生徒に関連する記事を読ませ予習させます。そして講義では、記事中の実践的な例をひとつずつ見ていきます。講義の後は、復習として生徒に例題を解かせます。</p>

<p>事前に記事を読ませてさえいれば、ひとつの講義にかける時間は1時間程度で充分カバーできると考えています。ですから、コース全体にかかる講義の時間は50時間ほど、そして予習にかける時間も50時間ほどになるでしょう。</p>

<p>もちろん、講義にかけられる時間や何をカバーするのかなど、考えなければいけないこともあります。しかし、実践することが重要です。</p>

<h2 id="who">このコースを利用すべき人は誰？</h2>

<p>このカリキュラムは、数多くの記事から構成されるWeb標準に関するコース資料で、Web 標準なデザイン手法を一から学びたいという人を対象としています。</p>

<p>Web サイトをただ閲覧するくらいの人でも、資料を読めば CSS や HTML の知識を充分に持ち、加えて基本的な JavaScript を理解できることを目的に、このコースは作られています。それだけの知識があれば、就職や転職に自信をもって挑むことができるでしょうから (もっとも、経験について教えることはできませんが)。</p>

<p>で、具体的にどんな人なのでしょう？私はこのカリキュラムが、Web デザインの「よいやり方」を学びたいという人に役立ってほしいと思っています。たとえば、次のような人たちです。</p>

<ol>
<li><strong>大学やカレッジの生徒/教員</strong>: すでに書きましたが、このカリキュラムは独自のコース資料をつくるにも、コースの資料として一部を利用するにも理想的なものになっています。もしあなたが Web 関連のコースを受講している学生であれば、このカリキュラムを補足資料として使うべきです。そして、先生にもこの資料を使うよう働きかけてください！あなたが先生や講師である場合、講義で利用するテクニックがベストプラクティスであるかどうかを確かめる資料として、このカリキュラムを利用することをおすすめします。</li>

<li><strong>高校生やもっと若い学生</strong>: このコースは大人の人を主な対象として書いていますが、それは別に、若い学生さんに恩恵がないというわけではありません。カリキュラムに目を通して、どのように進められるかを確かめてみてください。</li>

<li><strong>Web デザイナーや開発者</strong>: Web 標準やベストプラクティスを利用していない人、手ごろなリファレンスを利用して知識を磨く人など、世の中にはさまざまなタイプの Web 開発者やデザイナーがいます。前者の方に対して私は、このカリキュラムをWeb標準が簡単で価値のあることを理解するチャンスとして授けたいと思います。後者の方には、このカリキュラムをさまざまなことに役立ててほしいと思っています。たとえば、人を助けたり、スキルを磨いたり、難しいことを思い出すためのリファレンスとして使うことができるでしょう。また、上司やクライアントに対して、アクセシビリティには価値があることを説得するための材料としても利用できるでしょう。</li>

<li><strong>企業内の教育担当者</strong>: このカリキュラムは無料ですから、安価なトレーニング資料としてとても理想的です。</li>

<li><strong>そのほかの方</strong>: もしあなたがちょっと Web デザインや Web 開発に興味を持っているのであれば、知見を広げるための資料として使ってくれたらと思っています。なんたって、このカリキュラムは無料ですし。</li>
</ol>

<p>このコースにお金を払うことを、私は期待していません。このコースはクリエイティブ・コモンズ・ライセンスのもとで提供されており、適切な表示 (Attribution) さえあれば、だれもが自由に利用することができるようになっています。</p>

<h2 id="toc">Web標準カリキュラム：目次</h2>

<h3>はじめに</h3>

<ol start="1">
<li>Web 標準カリキュラムの紹介 (Chris Mills 著) — 今あなたが読んでいる記事です。</li>
</ol>

<p class="note">翻訳のお知らせ: <a href="http://dev.opera.com/articles/view/web-standards-curriculum-translations/">Web 標準カリキュラムの翻訳</a>も行われています。</p>

<p class="note">訳注: カリキュラムの原典は英語版になります。これはその日本語訳です。</p>

<h3>Web 標準の世界へのいざない</h3>

<ol start="2">
<li><a href="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w-ja/">インターネットと Web の歴史、そして Web 標準の進化</a> (Mark Norman Francis 著)</li>
<li><a href="http://dev.opera.com/articles/view/3-how-does-the-internet-work-ja/">インターネットのしくみ</a> (Jonathan Lane 著)</li>
<li><a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a-ja/">Web 標準のモデル — HTML, CSS, JavaScript</a> (Jonathan Lane 著)</li>
<li><a href="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu-ja/">Web 標準 ― すばらしき夢、でも現実は？</a> (Jonathan Lane 著)</li>
</ol>

<p class="note">訳注: 以降の記事については、現在翻訳を行っている最中です。</p>

<h3>Web デザインの基本理念</h3>

<p>このセクションでは、コードやマークアップの詳細は扱いません。ここでは、画像の作成やコーディングの前に行うWebデザインプロセスについて、また、IA やナビゲーション、ユーザビリティなどの概念について紹介します。</p>

<ol start="6">
<li><a href="http://dev.opera.com/articles/view/6-information-architecture-planning-o/">Information Architecture—planning out a web site</a>, by Jonathan Lane.</li>
<li><a href="http://dev.opera.com/articles/view/7-what-does-a-good-web-page-need/">What does a good web page need?</a>, by Mark Norman Francis.</li>
<li><a href="http://dev.opera.com/articles/view/8-color-theory/">Colour Theory</a>, by Linda Goin.</li>
<li><a href="http://dev.opera.com/articles/view/9-building-up-a-site-wireframe/">Building up a site wireframe</a>, by Linda Goin.</li>
<li><a href="http://dev.opera.com/articles/view/10-colour-schemes-and-design-mockups/">Colour schemes and design mockups</a>, by Linda Goin.</li>
<li><a href="http://dev.opera.com/articles/view/11-typography-on-the-web/">Typography on the web</a>, by Paul Haine.</li>
</ol>

<h3>HTML の基礎</h3>

<ol start="12">
<li><a href="http://dev.opera.com/articles/view/12-the-basics-of-html-ja/">HTML の基礎</a> (Mark Norman Francis 著)</li>
<li><a href="http://dev.opera.com/articles/view/13-the-html-head-element-ja/">HTML の &lt;head&gt; 要素</a> (Christian Heilmann 著)</li>
<li><a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your-ja/">適切な DOCTYPE の選択</a> (Roger Johansson 著)</li>
</ol>

<h3>HTML の中身</h3>

<ol start="15">
<li><a href="http://dev.opera.com/articles/view/15-marking-up-textual-content-in-html/">Marking up textual content in HTML</a>, by Mark Norman Francis.</li>
<li><a href="http://dev.opera.com/articles/view/16-html-lists/">HTML Lists</a>, by Ben Buchanan.</li>
<li><a href="http://dev.opera.com/articles/view/17-images-in-html/">Images in HTML</a>, by Christian Heilmann.</li>
<li><a href="http://dev.opera.com/articles/view/18-html-links-let-s-build-a-web/">HTML links—let’s build a web!</a> by Christian Heilmann. </li>
<li><a href="http://dev.opera.com/articles/view/19-html-tables/">HTML Tables</a>, by Jen Hanen.</li>
<li><a href="http://dev.opera.com/articles/view/20-html-forms-the-basics/">HTML Forms—the basics</a>, by Jen Hanen.</li>
<li><a href="http://dev.opera.com/articles/view/21-lesser-known-semantic-elements/">Lesser–known semantic elements</a>, by Mark Norman Francis.</li>
<li><a href="http://dev.opera.com/articles/view/22-generic-containers-8212-the-div-and/">Generic containers—the div and span elements</a>, by Mark Norman Francis.</li>
<li><a href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/">Creating multiple pages with navigation menus</a>, by Christian Heilmann.</li>
<li><a href="http://dev.opera.com/articles/view/24-validating-your-html/">Validating your HTML</a>, by Mark Norman Francis.</li>
</ol>

<h3>アクセシビリティ</h3>

<ol start="25">
<li><a href="http://dev.opera.com/articles/view/25-accessibility-basics/">Accessibility basics</a>, by Tom Hughes-Croucher.</li>
<li><a href="http://dev.opera.com/articles/view/26-accessibility-testing/">Accessibility testing</a>, by Benjamin Hawkes-Lewis.</li>
</ol>

<h3>CSS</h3>

<ol start="27">
<li><a href="http://dev.opera.com/articles/view/27-css-basics/">CSS basics</a>, by Christian Heilmann.</li>
<li><a href="http://dev.opera.com/articles/view/28-inheritance-and-cascade/">Inheritance and Cascade</a>, by Tommy Olsson.</li>
<li><a href="http://dev.opera.com/articles/view/29-text-styling-with-css/">Text styling with CSS</a>, by Ben Henick.</li>
<li><a href="http://dev.opera.com/articles/view/30-the-css-layout-model-boxes-border/">The CSS layout model - boxes, borders, margins, padding</a>, by Ben Henick.</li>
<li><a href="http://dev.opera.com/articles/view/31-css-background-images/">CSS background images</a>, by Nicole Sullivan.</li>
<li><a href="http://dev.opera.com/articles/view/32-styling-lists-and-links/">Styling lists and links</a>, by Ben Buchanan.</li>
<li><a href="http://dev.opera.com/articles/view/33-styling-tables/">Styling tables</a>, by Ben Buchanan.</li>
<li><a href="http://dev.opera.com/articles/view/34-styling-forms/">Styling forms</a>, by Ben Henick.</li>
<li><a href="http://dev.opera.com/articles/view/35-floats-and-clearing/">Floats and clearing</a>, by Tommy Olsson.</li>
<li><a href="http://dev.opera.com/articles/view/36-css-static-and-relative-positioning/">CSS static and relative positioning</a>, by Tommy Olsson.</li>
<li><a href="http://dev.opera.com/articles/view/37-css-absolute-and-fixed-positioning/">CSS absolute and fixed positioning</a>, by Tommy Olsson.</li>
</ol>

<h3>CSS の上級コース</h3>

<ol start="38">
  <li><a href="http://dev.opera.com/articles/view/38-headers-footers-columns-templates/">Headers, footers, columns, and templates</a>, by Ben Henick</li>
</ol>

<h3>JavaScript の基本</h3>

<ol start="27">
<li><a href="http://dev.opera.com/articles/view/27-css-basics/">CSS basics</a>, by Christian Heilmann.</li>
<li><a href="http://dev.opera.com/articles/view/28-inheritance-and-cascade/">Inheritance and Cascade</a>, by Tommy Olsson.</li>
<li><a href="http://dev.opera.com/articles/view/29-text-styling-with-css/">Text styling with CSS</a>, by Ben Henick.</li>
<li><a href="http://dev.opera.com/articles/view/30-the-css-layout-model-boxes-border/">The CSS layout model - boxes, borders, margins, padding</a>, by Ben Henick.</li>
<li><a href="http://dev.opera.com/articles/view/31-css-background-images/">CSS background images</a>, by Nicole Sullivan.</li>
<li><a href="http://dev.opera.com/articles/view/32-styling-lists-and-links/">Styling lists and links</a>, by Ben Buchanan.</li>
<li><a href="http://dev.opera.com/articles/view/33-styling-tables/">Styling tables</a>, by Ben Buchanan.</li>
<li><a href="http://dev.opera.com/articles/view/34-styling-forms/">Styling forms</a>, by Ben Henick.</li>
<li><a href="http://dev.opera.com/articles/view/35-floats-and-clearing/">Floats and clearing</a>, by Tommy Olsson.</li>
<li><a href="http://dev.opera.com/articles/view/36-css-static-and-relative-positioning/">CSS static and relative positioning</a>, by Tommy Olsson.</li>
<li><a href="http://dev.opera.com/articles/view/37-css-absolute-and-fixed-positioning/">CSS absolute and fixed positioning</a>, by Tommy Olsson.</li>
</ol>

<h3>モバイル Web 開発</h3>

<ol>
<li><a href="http://dev.opera.com/articles/view/introduction-to-the-mobile-web/">Mobile 1: Introduction to the mobile web</a>, by Brian Suda</li>
</ol>


<h3>補足記事</h3>

<h4>マイクロフォーマット</h4>

<ul>
  <li><a href="http://dev.opera.com/articles/view/introduction-to-hcard/">Introduction to hCard</a>, by Christopher Schmitt</li>
  <li><a href="http://dev.opera.com/articles/view/introduction-to-hcard-part-two-styling/">Introduction to hCard, Part two: Styling hCards</a>, by Christopher Schmitt</li>
 <li><a href="http://dev.opera.com/articles/view/xfn-encoding-extraction-and-visualizat/">XFN encoding, extraction, and visualizations</a>, by Brian Suda</li>
 <li><a href="http://dev.opera.com/articles/view/styling-xfn-and-rel-license-links/">Styling XFN and rel-license links</a>, by Christopher Schmitt</li>
 <li><a href="http://dev.opera.com/articles/view/styling-hreview-microformats/">Styling hReview Microformats</a>, by Christopher Schmitt</li>
<li><a href="http://dev.opera.com/articles/view/microformat-encoding-and-visualization/">Microformat Encoding and Visualization</a>, by Brian Suda</li>
</ul>

<h4>アクセシビリティに関する補足記事</h4>

<ul>
  <li><a href="http://dev.opera.com/articles/view/introduction-to-wai-aria/">Introduction to WAI-ARIA</a>, by Gez Lemon</li>
  <li><a href="http://dev.opera.com/articles/view/creating-accessible-data-tables/">Creating accessible data tables</a>, by Frank Palinkas</li>
  <li><a href="http://dev.opera.com/articles/view/building-accessible-static-navigation-wi/">Building Accessible Static Navigation with CSS</a>, by Frank Palinkas</li>
</ul>

<h4>そのほか</h4>

<ul>
<li><a href="http://dev.opera.com/articles/view/supplementary-getting-your-content-onli/">Getting your content online</a>, by Craig Grannell.</li>
<li><a href="http://dev.opera.com/articles/view/supplementary-more-about-the-document/">More about the document &lt;head&gt;</a>, by Chris Heilmann.</li>
<li><a href="http://dev.opera.com/articles/view/supplementary-common-html-entities-used/">Supplementary: Common HTML entities used for typography</a>, by Ben Henick.</li>
<li><a href="http://dev.opera.com/articles/view/opera-web-standards-curriculum-glossary/">The Opera Web Standards Curriculum glossary</a>, by various authors. This is incomplete, and will be added to as time goes by.</li>
</ul>

<h2 id="acks">謝辞</h2>

<p>このコースの作成には、本当に多くの方の協力がありました。ここで紹介する方は、皆とても素晴らしい人達ですので、みなさん是非、彼らの講演を聞きに出かけたり、本を買ったり、ブログを読んだりなど、できる限りの応援をしていただけたらと思います。</p>
<p>彼らに、感謝と敬意をこめて。</p>

<ol>
<li><strong>著者</strong>: 記事の著者である Ben BuchananTom Hughes–Croucher, Mark Norman “Norm” Francis, Linda Goin, Paul Haine, Jen Hanen, Benjamin Hawkes–Lewis, Ben Henick, Christian Heilmann, Roger Johansson, Peter–Paul Koch, Jonathan Lane, Stuart Langridge, Robert Nyman, Tommy Olsson, Greg Schechter, Nicole Sullivan, Mike West, 本当にありがとうございます。あなた達がいなければ、このコースは存在していなかったでしょう。</li>
<li><strong>Opera</strong>: Jan Standal, David Storey, 私のチームのみんな、そしてこの考えに賛同し、企画を進めてくれた Opera の従業員、どうもありがとうございます。</li>
<li><strong>企業や組織</strong>: Yahoo (著者の方と、構成やプロモーションに多大な貢献をしてくれた Sophie Major), WaSP (特に Gareth Rushgrove, Stephanie Troeth と Aarron Walter), Britpack, Geekup のみなさん、そしてこのコースに興味をもち、また後押しをしてくれた大学など、多くの企業や組織の強力がありました。とても感謝しています。</li>
<li><strong>貢献者</strong>: Craig Saila, Sara Dodd, John Allsopp, Roan Lavery, Bruce Lawson, Alan White といった素晴らしい人々に感謝しています。忘れている人がいたら、ごめんなさい。</li>
<li><strong>読者のみなさん</strong>: よい Web サイトの作り方に興味を持ち、このコースを読んでくれた皆さんにも、もちろん感謝しています。</li>
</ol>

<h2 id="contact">連絡先</h2>

<p>より多くの人に対して有益なものとなるよう、私は常にこのコースを見直すようにしています。もしコースへの提案やコメント、どこかで使いたいという要望などあれば、ぜひ連絡してください。Eメールアドレスは cmills [at] opera [dot] com になります。また、全ての記事の下のほうには「この記事についてディスカッションする」というリンクがあり、そこからコメントを投稿することができます。なお、コメントには <a href="http://my.opera.com/community/signup/" title="my.opera.comにサインアップ">my.opera アカウント</a>の取得が必要になります。</p>

<ul class="seriesNav">
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w-ja/">次の記事: インターネットと Web の歴史、そして Web 標準の進化</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc">カリキュラムの目次へ</a></li>
</ul>

<h2>著者について</h2>
<img alt="著者 Chris Mills の写真" src="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/chrismills.jpg" class="right" />

<p>Chris Mills は Opera の Developer Relations Manager です。<a href="http://dev.opera.com">dev.opera.com</a> や <a href="http://labs.opera.com">labs.opera.com</a> で記事を編集・公開する傍ら、コミュニティに Opera の紹介やフィードバックの収集を行い、また Opera のソフトウェアの伝道師としても活躍しています。そして、このWeb標準カリキュラムの編集者兼オーガナイザーでもあります。</p>

<p>プライベートでは、彼はとても熱心な音楽ファンです。メタルやフォーク、パンク、エレクトロニカ、プログレをはじめさまざまな音楽を聴き、また演奏しています。彼のバンド <a href="http://www.conquestofsteel.co.uk">Conquest of Steel</a> もよろしくお願いします。</p>

<h2>翻訳者について</h2>

<img alt="翻訳者矢倉眞隆の写真" src="http://forum-test.oslo.osa/kirby/content/articles/304-1-web-/mitsue-myakura.jpg" class="right" />

<h3>矢倉 眞隆 (Masataka Yakura)</h3>
<p>1984年生まれ。株式会社ミツエーリンクスにて、社内の品質改善活動や Web 標準 の普及啓蒙を行っている。W3C HTML WG メンバー。</p>

<h3><a href="http://www.mitsue.co.jp/">株式会社 ミツエーリンクス</a></h3>
<p>
1990年創業。大規模な Web サイト開発を得意とするインフォメーション・インテ グレータ。自社コンテンツの <a href="http://standards.mitsue.co.jp/">Web 標準 Blog</a> や<a href="http://accessibility.mitsue.co.jp/">アクセシビリティ Blog</a> より、Web フロントエンド技術に関するさまざまな情報を発信中。</p>
