Title: O modelo de padrões web: HTML, CSS e Java Script
----
Date: 2010-05-06 08:39:03
----
Lang: pt
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/3-how-does-the-internet-work/" rel="prev" title="link to the previous article in the series">artigo anterior—Como funciona a internet?</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu/" rel="next" title="link to the next article in the series">Próximo artigo—Padrões Web—Um belo sonho mas aonde fica a realidade?</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Índice</a></li>
</ul>

<h2>Introdução</h2>
<p>No artigo anterior, falamos brevemente dos alicerces da Web – HTML (ou XHTML) CSS e JavaScript. É hora de ir mais fundo e examinar cada um deles – o que fazem, e como interagem entre si na criação de um website. O artigo apresenta os tópicos a seguir:</p>

<ul>
<li><a href="#whyseparate">Porque separar?</a></li>

<li><a href="#markup">Marcação, a base de toda e qualquer página</a>
<ul><li><a href="#xhtml">O que é XHTML?</a></li>
<li><a href="#validation">Validação, de que se trata?</a></li></ul>
</li>

<li><a href="#css">CSS—adicionando algum estilo</a></li>

<li><a href="#javascript">JavaScript— adicionando comportamento a páginas web</a></li>

<li><a href="#example">Uma página de exemplo</a>
<ul><li><a href="#index">index.html</a></li>
<li><a href="#styles">styles.css</a></li></ul>
</li>

<li><a href="#summary">Resumo</a></li>

<li><a href="#exercises">Exercícios</a></li>

</ul>

<h2 id="whyseparate">Porque separar?</h2>
<p>Essa é geralmente a primeira questão que se pergunta em relação aos padrões web. Se podemos reunir conteúdo, estilo e <em>leiaute</em> apenas com HTML porque se preocupar com este negócio de XHTML/CSS ? Porque não fazer como nos tempos heróicos e usar tables? Muitos ainda fazem assim embora não seja recomendável e é uma das razões pelas quais este curso foi criado. O uso do CSS e HTML permite:<p>
<ol>
<li><strong>Eficiencia no código </strong>:  Quanto maiores os seus arquivos, mais eles demorarão para serem acessados o que será oneroso para aqueles que ainda pagam por megabyte baixado.Portanto, não é boa idéia desperdiçar largura de banda em páginas extensas entupidas de informações de estilo e <em>leiaute</em> em cada arquivo HTML. A melhor alternativa é manter os arquivos HTML enxutos e arrumados, e colocar o estilo e o <em>leiaute</em> uma vez apenas em um arquivo CSS separado Para ver um exemplo em ação acesse<a href="http://www.alistapart.com/articles/slashdot/">the A List Apart Slashdot rewrite article</a>  onde o autor reescreveu um site popular em (X)HTML/CSS. </li>
<li><strong>Facilidade de Manutenção</strong>:Segue-se do item anterior que, se a sua estilização e <em>leiaute</em> está  em apenas um lugar, significa que a atualização se dará em apenas neste. Ou voce prefere atualizar cada página do seu site ? Eu não creio.</li>

<li><strong>Acessibilidade</strong>:Os usuarios portadores de deficiencia visual que usam um programa denominado &quot;leitor de tela&quot; que apresenta o conteudo.e os com problemas motores – que não podem usar um mouse - beneficiam-se com páginas web semanticamente  bem construidas , já que os comandos são passados por voz, e documentos com  boa marcação semantica permitem  maior facilidade tanto na navegação como na recuperação da informação. Em outras palavras, quanto mais rápido voce &quot;acerta o alvo&quot; (o conteúdo) melhor. Os leitores de tela não podem acessar texto escondido em imagens e alguns usos de Java Script podem ser confusos. Certifique-se que seu conteúdo relevante esteja ao alcance de todos. </li>

<li><strong>Compatibilidade de dispositivos</strong>:Como a sua página XHTML é apenas marcação simples, sem estilo, pode ser reformatada em vários dispositivos com atributos diversos ( como por exemplo o tamanho da tela ) pela simples aplicação de uma folha de estilo alternativa, o que pode ser feito de várias maneiras ( veja os artigos sobre formatação para dispositivos móveis em dev.opera.com) O CSS também permite que voce especifique de maneira nativa diferentes folhas de estilo para métodos diferentes de apresentação e mídias ( tela, impressão, dispositivos móveis.)</li>

<li><strong>Mecanismos de busca</strong>:É bem provável que voce deseje que as sua páginas web sejam fácilmente encontradas pelo Google, ou outros mecanismos. Um engenho de busca usa um &quot;rastejador&quot;, que nada mais é que um pequeno programa que lê as suas páginas. Se este dispositivo tiver dificuldades em encontrar o conteúdo, ou as interpreta de maneira errada, porque os cabeçalhos não foram definidos como cabeçalhos, e assim por diante, é provável que a sua ordem de colocação após a busca seja baixa.</li>

<li><strong>É uma questão de boa prática</strong>:Pode parecer algo como &quot;é assim  porque eu falei que é&quot;, mas converse com qualquer desenvolvedor ou designer consciente e ele lhe dirá que separar conteúdo, estilo e comportamento é a melhor maneira de desenvolver uma aplicação.</li>
</ol>

<h2 id="markup">Marcação, a base de toda e qualquer página</h2>

<p>HTML e XHTML são linguagens de marcação compostas de elementos que contem atributos ( alguns opcionais e outros obrigatórios)  que são usados para marcar vários tipos diferentes de conteúdo em documentos, especificando  o que deve ser apresentado (renderizado) em navegadores ( como cabeçalhos, parágrafos, tabelas, listas etc) </p>



<p>Os elementos, como é de se esperar, definem então o tipo real de conteudo, enquanto os atributos a informação adicional sobre aqueles como uma  identificação (ID) ou uma localização de link. Lembre-se que a marcação deve ser o mais semantica possivel, já que, supostamente, deve descrever a função do conteudo com a maior acurácia possivel. A Figura 1 mostra a anatomia de um típico elemento (X)HTML </p>
<img src="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/article4_1.png" alt="A typical HTML element" />
 

<p class="comment">Figura 1: Anatomia de um elemento (X)HTML . <a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/figure1_longdesc.html" style="font-size:85%;">Leia a descrição da Figura 1 </a></p>

<p>Mas então , qual a diferença entre HTML e XHTML ?</p>

<h3 id="xhtml">O que é XHTML?</h3>

<p>O &quot;X&quot; no XHTML significa &quot;extensível&quot;. Uma das questões mais comuns para os iniciantes é &quot; devo usar HTML ou XHTML, e afinal que diferença faz ?&quot;. Ambas fazem práticamente a mesma coisa; a maior diferença reside na estrutura, como mostra a Tabela 1: </p>

<table>
<tr>
  <th>HTML </th>
  <th>XHTML</th>
</tr>
<tr>
  <td> Elemento, <code>&lt;h1&gt;</code> é o mesmo que<code>&lt;H1&gt;</code>.</td>
  <td> Elementos e atributos são sensíveis à caixa alta ou baixa ; todos são em caixa baixa. </td>
</tr>
<tr>
  <td>Alguns elementos não requerem uma tag de fechamento
( parágrafos ,por exemplo <code>&lt;p&gt;</code>), enquanto outros(denominados ”elementos vazios&quot;) não admitem tags de fechamento(eg images, <code>&lt;img&gt;</code>).</td>
  <td><p>Todos os elementos devem ser explicitamente fechados (ex <code>&lt;p&gt;Um parágrafo&lt;/p&gt;</code>). Elementos sem conteúdo podem ser fechados usando uma barra na tag inicial(ex <code>&lt;hr&gt;&lt;/hr&gt;</code> e <code>&lt;hr/&gt;</code> significam a mesma coisa).</p>

<p>Se o XHTML está sendo servido como <code>text/html</code>, deve-se usar a sintaxe abreviada em todos os <a href="http://www.cs.tut.fi/~jkorpela/html/empty.html#html">elementos definidos como &quot;vazios&quot;</a> com um espaço antes da barra. Deve-se usar a notação longa (com tags de inicio e fim separadas)em cada elemento não definido como vazio—mesmo se não houver nenhum conteúdo dentro do mesmo.</p></td></tr>
<tr>
  <td>Alguns valores de atributo podem ser escritos sem estarem contidos entre aspas.</td>
  <td>  Valores de atributo devem estar obrigatoriamente contidos entre aspas.</td>
</tr>
<tr>
  <td> Notação abreviada pode ser usada para alguns atributos (ie <code>&lt;option selected&gt;</code>).</td>
  <td>A forma plena deve ser usada para todo e qualquer atributo (ex <code>&lt;option selected=&quot;selected&quot;&gt;</code>).</td>
</tr>
<tr>
  <td> Os servidores devem enviar HTML ao cliente com um &quot;media type&quot; de <code>text/html</code>.</td>
  <td>XHTML deve usar<code>application/xhtml+xml</code> media type mas tambem pode utilizar <code>application/xml</code>, <code>text/xml</code> ou <code>text/html</code>. Se <code>text/html</code> forem utilizado<a href="http://www.w3.org/TR/xhtml1/guidelines.html"> as orientações de compatibilidade do HTML </a>  devem ser observadas pois os navegadores os tratarão como HTML (e usar &quot;error recovery&quot; para lidar com as diferenças entre as linguagens).</td>
</tr>
</table>
<p class="comment">Tabela 1:Diferenças entre o HTML e o XHTML. </p>

<p>Por ora, não se preocupe em demasia se está escrevendo HTML ou XHTML. Siga o conselho adotado neste curso e use um doctype HTML <a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/"> veja o artigo 14 para mais informações</a> e tudo dará certo.</p>

<h3 id="validation">Validação, de que se trata?</h3>

<p>Como HTML e XHTML são padrões (e também o CSS) o consórcio W3C criou uma valiosa ferramenta chamada de <strong><em>validador</em></strong> para verificar de maneira automática as suas páginas, e apontar quaisquer problemas/erros presentes no programa, como tags abertas ou ausencia aspas nos atributos. O validador HTML está disponivel em  <a href="http://validator.w3.org" title="The W3C HTML validator">http://validator.w3.org/</a> e detecterá automaticamente se voce esta utilizando HTML ou XHTML e que tipo de doctype está sendo usado.No caso do CSS , o validador está em   <a href="http://jigsaw.w3.org/css-validator/" title="The W3C CSS validator">http://jigsaw.w3.org/css-validator/</a>.</p>

<p>Para maiores informações sobre validação veja o artigo 24. Em relação aos doctypes, veja  o artigo 14.<a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/" title="article 14 covers doctypes">Article 14</a>.</p>

<h2 id="css">CSS—adicionando algum estilo</h2>

<p>As folhas de estilo em cascata lhe permitem um controle preciso sobre a formatação e o <em>leiaute</em> do seu documento. Voce pode mudar ou adicionar cores,fundos,tamanhos de fonte e posicionar as coisas na sua página web de várias maneiras. Existem tres modos de aplicar estilos com CSS: redefinindo um elemento, aplicando um estilo a um ID ou um estilo a uma classe  </p>
 Vejamos cada um deles:
<ol>
<li><p>
 Redefinindo um elemento: É possivel mudar a maneira pela qual qualquer (X)HTML é exibido pela exibição de uma regra para estilizar. Para aplicar a cor verde e o duplo espaçamento em todos os seus parágrafos adicione:
  </p>
<pre><code>p {
  line-height: 2;
  color: green;
}</code></pre>

<p>Agora, qualquer conteudo dentro de<code>&lt;p&gt;&lt;/p&gt;</code> terá espaçamento duplo e cor verde</p></li>

<li><p>Definindo um ID.Voce pode dar a um elemento um atributo <code>id</code> para identifica-lo de maneira única em uma página
 (cada ID pode ser usado só uma vez em uma página)— por exemplo<code>id=&quot;menu_navegação&quot;</code>.Isso permite um ajuste
fino sobre a formatção da página, como por exemplo,é possivel formatar um certo parágrafo com espaço duplo e cor verde é só atribuir ao mesmo um ID:
</p>

<pre><code>&lt;p id=&quot;highlight&quot;&gt;Paragraph content&lt;/p&gt;</code></pre>

<p>E aplicar uma regra CSS ao mesmo como:</p>

<pre><code>#highlight {
  line-height: 2;
  color: green;
}</code></pre>

<p>O que aplicará a regra CSS apenas ao parágrafo com atributo <code>id</code> de <code>highlight</code> (a tralha é a convenção CSS para ID).</p></li>

<li><p>Definindo uma classe. Classe são como ID´s, com a diferença de que é possivel haver mais de uma classe em cada página. Continuando com o mesmo exemplo anterior, se quisermos espaços duplos e enfatizar os dois primeiros parágrafos de uma página, basta adicionar classes como:
</p>

<pre><code>&lt;p class=&quot;highlight&quot;&gt;Paragraph content&lt;/p&gt;
&lt;p class=&quot;highlight&quot;&gt;O conteudo do segundo parágrafo&lt;/p&gt;</code></pre>

<p>E aí aplicar a seguinte regra CSS:</p>

<pre><code>.highlight {
  line-height: 2;
  color: green;
}</code></pre>

<p><code>highlight</code>é agora uma classe e não um ID - o ponto é a convenção CSS para indicar classe. </p></li>
</ol>

<p>O exemplo abaixo lhe dará uma melhor idéia de como as CSS estilizam o HTML; Estudaremos o CSS com mais detalhe no Artigo 22
a ser publicado em breve.
</p>

<h2 id="javascript">JavaScript—adicionando comportamento</h2>

<p>JavaScript é a linguagem que voce usará para adicionar comportamento às suas páginas web - ela pode ser usada para validar dados procedentes de um formulário (informando se o formato está correto), fornecer funcionalidades de arrasto (&quot;drag and drop&quot;) , mudar estilos em tempo real, animar elementos de página, como menus,gerenciar a funcionalidade de botões e um milhão de outras coisas. Hoje em dia, o JS funciona buscando elementos HTML,e dai realizando alguma coisa, bem como o CSS, mas a maneira como funciona, a sintaze é bem diferente etc.
 </p>

<p>JavaScript é um assunto mais complicado e extenso que HTML e CSS. Portanto, para simplificar e evitar confusão neste estágio não irei discutir o exemplo abaixo. Na verdade, só voltaremos ao
JS em um estágio posterior deste curso.
<p>

<h2 id="example">Um exemplo de código Java Script</h2>

<p>Há uma infinidade de detalhes não abordados aqui, mas trataremos de tudo durante este curso ! Por enquanto, vou apresentar com um exemplo real, só para lhe dar o gosto, do que virá nos próximos artigos. </p>

<p>O exemplo apresentado abaixo é uma página de referencias, que pode ser usada, digamos, para citar bibliografia. Se voce é um
purista em termos de redação academica, este exemplo usa formatação APA (eu tinha que escolher alguma..)
<a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/article4_examples.zip">baixe o programa aqui</a>.</p>

<h3 id="index">index.html</h3>

<pre><code>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot;
  &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;

&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xml:lang==&quot;en&quot; lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;/&gt;

  &lt;title&gt;References&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    @import url(&quot;styles.css&quot;);
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;div id=&quot;bggraphic&quot;&gt;&lt;/div&gt;
  &lt;div id=&quot;header&quot;&gt;
    &lt;h1&gt;References&lt;/h1&gt;
  &lt;/div&gt;
  &lt;div id=&quot;references&quot;&gt;
    &lt;cite class=&quot;article&quot;&gt;Adams, J. R. (2008). The Benefits of Valid Markup: A Post-Modernistic Approach to Developing Web Sites. &lt;em&gt;The Journal of Awesome Web Standards, 15:7,&lt;/em&gt; 57-62.&lt;/cite&gt;
    &lt;cite class=&quot;book&quot;&gt;Baker, S. (2006). &lt;em&gt;Validate Your Pages.... Or Else!.&lt;/em&gt; Detroit, MI: Are you out of your mind publishers.&lt;/cite&gt;
    &lt;cite class=&quot;article&quot;&gt;Lane, J. C. (2007). Dude, HTML 4, that&#39;s like so 2000. &lt;em&gt;The Journal that Publishes Genius, 1:2, &lt;/em&gt; 12-34.&lt;/cite&gt;
    &lt;cite class=&quot;website&quot;&gt;Smith, J. Q. (2005). &lt;em&gt;Web Standards and You.&lt;/em&gt; Retrieved May 3, 2007 from Web standards and you.&lt;/cite&gt;
  &lt;/div&gt;
  &lt;div id=&quot;footer&quot;&gt;
    &lt;p&gt;The content of this page is copyright © 2007 &lt;a href=&quot;mailto:jonathan.lane@gmail.com&quot;&gt;J. Lane&lt;/a&gt;&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Não vou dissecar este arquivo linha a linha,mas apenas fazer observações gerais sobre alguns pontos dignos de nota.
 </p>

<p>A Linha 1 é document type declaration (DTD), ou doctype. No caso presente a página é XHTML 1.0 Transitional. O doctype especifica um conjunto de regras que a marcação deve seguir para que seja validada.
Veja <a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/" title="article 14 covers doctypes">Article 14</a> para outras informações. </p>

<p>As linhas de 5 a 7 importam um arquivo CSS com os estilos a serem aplicados nos vários elementos da página. Voce verá o conteúdo deste arquivo na próxima seção.
</p>

<p>Defini uma classe para cada tipo de referencia.Assim , é possivel aplicar um estilo diferente a cada tipo de referencia -  definindo, por exemplo, uma cor diferente à direita de cada referencia para tornar mais fácil o exame da lista.
 </p>

<p>Vejamos agora o CSS que estilizará o HTML:</p>

<h3 id="styles">styles.css</h3>

<pre><code>body {
  background: #fff url(&#39;images/gradbg.jpg&#39;) top left repeat-x;
  color: #000;
  margin: 0;
  padding:0;
  border: 0;
  font-family: Verdana, Arial, sans-serif; font-size: 1em;
}

div {
  width: 800px;
  margin: 0 auto;
}

#bggraphic {
  background: url(&#39;images/pen.png&#39;) top left no-repeat;
  height: 278px;
  width: 362px;
  position: absolute;
  left: 50%;
  z-index: 100;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5em;
  margin-bottom: 30px;
  background: url(&#39;images/headbg.png&#39;) top left repeat;
  padding: 10px 0;
}

#references cite {
  margin: 1em 0 0 3em;
  text-indent: -3em;
  display: block;
  font-style: normal;
  padding-right: 3px;
}

.website {
  border-right: 5px solid blue;
}

.book {
  border-right: 5px solid red;
}

.article {
  border-right: 5px solid green;
}

#footer {
  font-size: 0.5em;
  border-top: 1px solid #000;
  margin-top: 20px;
}

#footer a {
  color: #000;
  text-decoration: none;
}

#footer a:hover {
  text-decoration: underline;
}</code></pre>

<p>Exagerei um pouco na estilização desta página, adicionando efeitos de fundo para mostrar algumas coisas que se pode fazer com CSS.
 </p>

<p>A Linha 1 estabelece alguns valores padrão para o documento como texto e cor de fundo, largura de borda ao redor do texto, etc.Algumas pessoa preferem não se dar ao trabalho de fazer isso, e então os navegadores aplicarão os seus estilos padrão. Poratnto é uma boa idéia proceder desta forma pois lhe dá maior controle sobre a aparencia da sua página web em diferentes navegadores.
</p>

<p>A seguir, ajustei a largura da página para 800px ( poderia ter especificado uma percentagem para que a página se ajustasse ao tamanho da janela do navegador)Este valor assegurará que o conteúdo da página fique centrado na janela.</p>

<p>Voltemos a nossa atenção para as imagens de fundo usadas na página ( são aplicadas usando a declaração backgrond:url) Tenho tres elementos de fundo nesta página: O primeiro,é um gradiente que se estende no topo da página fornecendo um bonito efeito de esmaecimento, na cor azul.O segundo, é uma transparencia no formato PNG para fornecer contraste com o texto acima ( imagens PNG com semitransparencia não funcionam no Intenet Explorer 6 e anteriores, mas o fazem de maneira adequada em qualquer navegador moderno; veja <a href="http://code.google.com/p/ie7-js/">Dean Edward&#39;s IE-fixing JavaScript</a> for an IE6 solution to this issue, which also fixes some of IE6’s CSS support issues.) 
Finalmente, usei outra imagem PNG para o fundo do cabeçalho, adicionando um pouco mais de contraste.
 </p>

<p>O exemplo aparece na figura 2. </p>

<img src="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/article4_2.jpg" alt="O exemplo final" />

 <p class="comment">Figure 2: Exemplo final com os estilos aplicados. </p>

<h2 id="summary">Resumo</h2>
 
<p>Não há nada de misterioso sobre XHTML, CSS e JavaScript.
Eles representam simplesmente a evolução da Web. Se voce já conhece algo de HTML, não há nada para &quot;desaprender&quot;. Tudo o que voce já sabe é ainda relevante, só é preciso fazer algumas coisas de uma maneira diferente.(e ter mais cuidado com a marcação)
 </p>

<p> Além da satisfação de realizar um bom trabalho, desenvolver segundo os padrões é uma questão de bom senso. As objeções a esta postura - de que é demorada e uma chatice fazer que o <em>leiaute</em> funcione em todos os navegadores, pode ser contraposta com o argumento oposto de que não faze-lo jamais lhe dará a certeza de que a sua marcação capenga funcionará no Opera 12.0, Firefox 5.0, ou IE 10.0, a menos que algumas regras ejam seguidas.
 </p>

<h2 id="exercises">Exercicios</h2>
<ul>
<li>Qual a diferença entre uma classe e um ID?</li>

<li>Qual a função do XHTML, CSS e JavaScript em uma página Web?</li>
<li>Pegue o index.html file do exemplo, e mude a formatação usando apenas o CSS (use um editor de texto simples como o Bloco de Notas do Windowz). Não faça qualquer modificação no HTML.</li>
<li>Adicione um ícone para cada um dos tipos de referencia (um para artigos, para livros e recursos da web). Crie seus próprios ícones e os exiba usando apenas CSS.</li>
<li>Esconda o aviso de copyright no fim da página.</li>

<li>Mude a aparencia do título, realçando-o</li>
 
<li>Que voce poderia mudar neste CSS para adapat-lo para um telefone celular?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/3-how-does-the-internet-work/" rel="prev" title="link to the previous article in the series">Artigo anterior— Como funciona a Internet?</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu/" rel="next" title="link to the next article in the series">Próximo artigo—Padrões Web - Um belo sonho mas onde fica a realidade?</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Índice</a></li>
</ul>




<h2>Sobre o autor</h2>



<img src="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/Jonlane.jpg" alt="Foto do autor do artigo Jonathan Lane" class="right" />


<p>Jonathan Lane é Presidente da<a href="http://industryinteractive.net/">Industry Interactive</a>—uma empresa de desenvolvimento web em Mayne Island, British Columbia, Canada. Começou como desenvolvedor na University of Lethbridge Curriculum Re-Development Center como coordenador de projetos por muitos anos.</p>



<p>O endereço do seu blog é
 <a href="http://www.flyingtroll.com/">Flyingtroll</a> e está no momento desenvolvendo <a href="http://www.mailmanagr.com/">Mailmanagr</a>,  uma interface de e-mail para o projeto Basecamp .</p></p></p></p></p>
