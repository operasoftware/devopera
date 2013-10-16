Title: Criando extensões para o Speed Dial do Opera
----
Date: 2011-05-31 16:07:36
----
Lang: pt-BR
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>Introdução</h2>

<p>Em 2007 nós <a href="http://www.opera.com/docs/changelogs/windows/920/">anunciamos</a> o Speed Dial para o Mundo. O conceito mostrou ser bastante popular e acabou gerando implementações similares em navegadores concorrentes. Como estamos muito orgulhosos do resultado, que tipo de pais nós seríamos se não ajudássemos o nosso pequeno bebê a evoluir e desenvolver novas habilidades? No lançamento do Opera 11.10 demos uma remodelada no visual e <a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/">criamos algumas opções que permitiriam que desenvolvedores controlassem como o seu site apareceria no mosaico</a>. E agora no Opera 11.50 queremos dar mais um passo que irá revolucionar tudo. Queremos adicionar extensões ao Speed Dial.</p>

<p>Da mesma maneira que você pode melhorar diversas funcionalidades do seu navegador com <a href="https://addons.opera.com/addons/extensions/">extensões</a> para o Opera, você também poderá personalizar e melhorar o seu Speed Dial, deixando ele ainda mais útil. Em vez de ficar limitado aos ícones e screenshots de um site, com o novo Speed Dial você poderá renderizar outros tipos de conteúdo. Esse artigo mostrará como.</p>

<p class="note">Nota: Para ver um exemplo sendo executado, você precisará ter instalado em seu computador <a href="http://www.opera.com/browser/next/">o Opera 11.50</a>. Além disso também é necessário baixar alguma extensão, como por exemplo <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">o nosso Relógio para o Speed Dial</a>.</p>

<h2>O básico</h2>

<p>Para seguir o padrão que usamos nas extensões do Opera, as extensões para o Speed Dial usam o mesmo formato e estrutura, mas com algumas pequenas adições. Em outras palavras, a seguinte modificação no arquivo config.xml pode transformar uma já existente extensão para o Opera em uma extensão para o Speed Dial:</p>

<ul>
  <li>O elemento <code>&lt;feature&gt;</code> com o atributo <code>opera:speeddial</code>, transformará a extensão em uma extensão para o Speed Dial.</li>
  <li>O atributo <code>viewmodes</code> na tag <code>&lt;widget&gt;</code> com o valor determinado em minimized, irá mostrar o fundo de um site em uma célula do Speed Dial.</li>
</ul>

<p>Devemos alertá-los de que no momento não é possível que uma extensão use funcionalidades do Speed Dial e da barra de ferramentas ao mesmo tempo. Em outras palavras, uma extensão que possui um botão na barra de ferramentas não poderá estar presente também no Speed Dial.</p>

<h2>Especificando uma extensão para o Speed Dial com o <code>config.xml</code></h2>

<p>Vamos colocar a metodologia em prática e dar uma olhada em um exemplo prático de uma extensão. Para ver o seguinte fragmento de código em contexto, faça o download da nossa <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">extensão de relógio</a> para Speed Dial e olhe o arquivo fonte que está disponível no pacote. A Figura 1 irá lhe mostrar como a extensão deverá ficar quando terminada.</p>
 
<p><img src="/articles/view/creating-opera-speed-dial-extensions/clock_extension_in_speed-dial.jpg" width="400" height="242" alt="Clock extension installed in the Opera browser&#39;s Speed Dial." /></p>
<p class="comment">Figura 1: The clock extension installed in the Opera browser&#39;s Speed Dial.</p>

<p>Considerando que a célula padrão de um Speed Dial mostra a screenshot de uma página de internet, uma extensão para Speed Dial mostra o início (ou o fundo) de uma página da extensão – normalmente o <code>index.html</code> por padrão. Para habilitar isso, primeiro precisamos adicionar o valor <code>minimized</code> no atributo <code>viewmodes</code> da tag <code>&lt;widget&gt;</code> presente no arquivo <code>config.xml</code>.</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; viewmodes=&quot;minimized&quot;&gt;</code></pre>

<p>Isso dirá ao navegador para exibir o fundo da extensão em uma forma minimizada. O tamanho de uma célula do Speed Dial com o zoom configurado em 100% é de 256 pixels de largura e 160 pixels de altura. Além disso, nós também precisamos adicionar o atributo <code>required</code> e <code>param</code> no elemento <code>&lt;feature&gt;</code> do Opera Speed Dial.</p>

<pre><code>&lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
  &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
&lt;/feature&gt;</code></pre>

<p>O atributo <code>required</code> do elemento feature indica se o Speed Dial é necessário para executar a extensão.Esses atributos existem pois pode haver outros user agentes do navegador que são compatíveis com as extensões do Opera, mas não necessariamente possuem funcionalidades no Speed Dial. Se a sua extensão ainda trabalhar dessa maneira, use o valor <code>false</code>; mas se a sua extensão não funcionar sem o Speed Dial, escolha a opção <code>true</code>.</p>

<p>O elemento param é necessário e especifica qual página deve ser aberta quando o ícone do Speed Dial é clicado.</p>

<p>Aqui está o <code>config.xml</code> completo da nossa extensão de exemplo:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; defaultlocale=&quot;en&quot; viewmodes=&quot;minimized&quot;&gt;
  &lt;name short=&quot;Simple Clock&quot;&gt;Clock Speed Dial Extension&lt;/name&gt;
  &lt;description&gt;This is an example Speed Dial extension showing a simple clock.&lt;/description&gt;
  &lt;author href=&quot;http://people.opera.com/danield/&quot;&gt;Daniel Davis&lt;/author&gt;
  &lt;icon src=&quot;images/icon_64.png&quot;/&gt; &lt;!-- Icon source: http://www.openclipart.org/detail/17552 --&gt;
  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
    &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
  &lt;/feature&gt;
&lt;/widget&gt;</code></pre>

<h2>Adicionando conteúdo na sua extensão</h2>

<p>O próximo passo deverá ser criar alguma coisa interessante para exibir na janela do Speed Dial. Isso será o fundo da página da extensão, então precisaremos criar um arquivo <code>index.html</code> no mesmo diretório do arquivo <code>config.xml</code>. Para esse exemplo, iremos criar um simples relógio em JavaScript que irá mostrar  a hora. O primeiro passo será criar um <code>index.html</code> com um elemento <code>output</code> vazio.</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
    &lt;title&gt;Clock Speed Dial Extension&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;output&gt;&lt;/output&gt;
    &lt;script src=&quot;scripts/background.js&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Em seguida precisaremos criar um diretório para os scripts que contenha o arquivo <code>background.js</code>, linkado no código anterior. Esse JS deverá ser parecido com isso:</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Simple function to prefix a zero if the value passed is less than 10
  function formatTime(time) {
    return (time &lt; 10) ? &#39;0&#39; + time : time;
  }
    
  var output = document.querySelector(&#39;output&#39;);
  var date, hours, mins, secs;
    
  // Get and display the current time every 500 milliseconds
  var timer = window.setInterval(function() {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; + formatTime(secs);
  }, 500); // Twice a second to allow for slight delays in JavaScript execution
}, false);</code></pre>

<p>A folha de estilo (<code>style.css</code>) também é bastante simples:</p>

<pre><code>* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}

/* Use display:table and display:table-cell
so that we can use vertical-align:middle */
body {
  background: #444;
  color: #fff;
  display: table;
  height: 100%;
  width: 100%;
}
output {
  display: table-cell;
  font-family: monospace;
  font-size: 10em;
  text-align: center;
  text-shadow: 0 0.1em 0.1em #000;
  vertical-align: middle;
}

/* Styles here are only applied in a &quot;minimized&quot; state */
@media screen and (view-mode: minimized) {
  output {
    font-size: 1.8em;
  }
}</code></pre>

<p>Como você pode ver, existe um media query em CSS3 no final desse arquivo que verifica a condição <code>view-mode: minimized</code> para se manter em concordância com as especificações de mídia <a href="http://dev.w3.org/2006/waf/widgets-vmmf/"><code>view-mode</code></a>. Em outras palavras, os estilos dessa área só poderão ser aplicados quando uma página apresenta um estado minimizado como uma célula do Speed Dial. Isso pode ser útil para sobrescrever os estilos em certas situações sem precisar ter que criar designs múltiplos.</p>

<h2>Finalizando uma extensão</h2>

<p>Como sempre, para compilar a nossa criação como uma extensão, devemos compactar em um arquivo zip todos os arquivos do diretório (mas não o diretório em si). Em seguida devemos renomear a extensão para o formato <code>.oex</code>. Se você ainda não o fez, <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">baixe o relógio</a> para o Speed Dial e faça um teste.</p>

<h2>A API <code>SpeedDialContext</code></h2>

<p>Uma vez instalada, a nossa extensão pode dinamicamente controlar a sua célula no Speed Dial através da API <code>SpeedDialContext</code>. Essa é uma API muito simples com duas propriedades: <code>title</code> e <code>url</code>. Elas podem ser executadas pelo JavaScript através do objeto <code>opera.contexts.speeddial</code>, dessa maneira:</p>

<pre><code>if (opera.contexts.speeddial) {
  var sd = opera.contexts.speeddial; 
  sd.title = &quot;My title&quot;;
  sd.url = &quot;mypage.html&quot;; 
}</code></pre>

<p>Nós podemos utilizar esse recurso para enriquecer o nosso relógio. Por exemplo: fazendo com que ele exiba uma certa mensagem dependendo da hora do dia. O único arquivo que precisaremos editar é o JavaScript <code>background.js</code>:</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Simple function to prefix a zero if the value passed is less than 10
  function formatTime(time) {
    return (time &lt; 10) ? &#39;0&#39; + time : time;
  }
    
  var output = document.querySelector(&#39;output&#39;);
  var date, hours, mins, secs, tmp_hours, timeofday;
  var messages = {
    &quot;morning&quot;: &quot;Good morning!&quot;,
    &quot;afternoon&quot;: &quot;Good afternoon!&quot;,
    &quot;evening&quot;: &quot;Good evening!&quot;,
    &quot;night&quot;: &quot;Shouldn&#39;t you be in bed?&quot;
  };
    
  // Get and display the current time every 500 milliseconds
  var timer = window.setInterval(function() {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; + formatTime(secs);
        
    // Make the Speed Dial title display time-related message
    if (hours !== tmp_hours) {
      if (hours &gt; 15) {
        timeofday = &#39;evening&#39;;
      } else if (hours &gt; 11) {
        timeofday = &#39;afternoon&#39;;
      } else if (hours &gt; 3) {
        timeofday = &#39;morning&#39;;
      } else {
        timeofday = &#39;night&#39;;
      }
            
      if (opera.contexts.speeddial) {
        opera.contexts.speeddial.title = messages[timeofday];
      }
      tmp_hours = hours;
    }
  }, 500); // Twice a second to allow for slight delays in JavaScript execution
}, false);</code></pre>

<p>Isso é basicamente o mesmo do nosso primeiro exemplo, porém com algumas coisas adicionais, como:</p>

<ul>
  <li>Um objeto <code>messages</code> contendo diversas mensagens para várias horas do dia.</li>
  <li>Uma verificação contínua que executa um código sempre que a hora muda.</li>
  <li>Uma linha que apresenta uma mensagem no título da célula do Speed Dial configurada pelo objeto <code>messages</code>.</li>
</ul>


<p>Essa extensão pode ser baixada daqui: <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/friendly_clock_SD_extension.oex">friendly_clock_SD_extension.oex</a>. Quando instalada, ela deverá ficar dessa maneira:</p>

<p><img src="/articles/view/creating-opera-speed-dial-extensions/friendly_clock_extension_in_speed-dial.jpg" width="400" height="256" alt="Friendly clock extension installed in the Opera browser&#39;s Speed Dial." /></p>
<p class="comment">Figura 2: O relógio mais amistoso instalado no Speed Dial do Opera.</p>

<h2>Conclusão</h2>

<p>Como você pode ser, os desenvolvedores de extensão agora possuem uma janela extra de oportunidades para adicionar novos recursos à suas extensões. Os exemplos aqui descritos foram básicos, mas mostram o potencial que as extensões para o Speed Dial podem ter quando misturadas com boas ideias e boas habilidades de desenvolvimento. Estamos ansiosos para ver as extensões para Speed Dial se tornarem mais do que simples links para sites na internet. Queremos ver o <a href="https://addons.opera.com/addons/extensions/">repositório de extensões do Opera</a> repleto de boas ideas de uso das nossas APIs.</p>

<h2>Referência</h2>

<p><a href="http://www.opera.com/docs/apis/extensions/speeddialguide/">API de extensões para o Opera: Guia para o Speed Dial</a></p>
