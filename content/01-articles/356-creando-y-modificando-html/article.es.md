Title: Creando y modificando HTML
----
Date: 2010-05-13 16:37:20
----
Lang: es
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/traversing-the-dom-es/" rel="prev" title="enlace al art&amp;iacute;culo anterior en la serie">Art&#xED;culo anterior—Recorriendo el &#xE1;rbol DOM</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript/" rel="next" title="enlace al siguiente art&amp;iacute;culo en la serie">Siguiente art&#xED;culo—Estilos din&#xE1;micos - manipulando CSS con JavaScript</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">&#xCD;ndice de contenidos</a></li>
</ul>


<h2>Introducci&#xF3;n</h2>

<p>En este art&#xED;culo explicaremos los conocimientos b&#xE1;sicos de JavaScript para
manipular el contenido de las p&#xE1;ginas HTML, incluyendo mostrar y ocultar partes
de una p&#xE1;gina, y a&#xF1;adir nuevo contenido HTML, y eliminarlo. Al final, habremos
comprendido que la raz&#xF3;n fundamental por la que usamos JavaScript es para cambiar
el contenido de las p&#xE1;ginas, y habremos entendido las mejores formas para hacer esto</p>


<p>Los contenidos de este art&#xED;culo son los siguientes:</p>

<ul>
  <li><a href="#hidingshowing">Ocultando y mostrando</a>
    <ul>
      <li><a href="#hidingshowingexample">Ocultando y mostrando, un ejemplo</a>
        <ul>
          <li><a href="#regex">Expresiones regulares</a></li>
          <li><a href="#connectingcode">Conectando el c&#xF3;digo escrito con una p&#xE1;gina</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#creatinghtml">Creando HTML</a></li>
  <li><a href="#summary">Resumen</a></li>
  <li><a href="#exercises">Ejercicios</a></li>
</ul>

<h2 id="hidingshowing">Ocultando y mostrando</h2>

<p>La mejor forma de empezar es manipular el HTML que ya tenemos hecho, ocultando
o mostrando elementos que ya est&#xE1;n en la p&#xE1;gina. Para hacer esto, podemos usar
JavaScript para cambiar los estilos de un elemento. Los estilos CSS son una forma
elegante de describir como se muestra un elemento, y una parte de como se muestra
un elemento es si se muestra totalmente o no. La propiedad CSS <code>display</code>
es la llave para mostrar o ocultar un elemento: si la ponemos a <code>display:none;</code>
oculta un elemento. Imaginemos un p&#xE1;rrafo c&#xF3;mo este:</p>

<pre><code>&lt;p id=&quot;miparrafo&quot; style=&quot;display: none&quot;&gt;Yo soy un p&#xE1;rrafo&lt;/p&gt;</code></pre>

<p>Este p&#xE1;rrafo deber&#xED;a ser invisible en la p&#xE1;gina. JavaScript nos permite
<em>din&#xE1;micamente</em> a&#xF1;adir ese estilo a ese elemento, y eliminarlo.</p>

<p>JavaScript est&#xE1; dise&#xF1;ado para permitirnos obtener una <em>referencia</em> a un
elemento HTML. Por ejemplo, el c&#xF3;digo <code>var el = document.getElementById(&quot;nav&quot;);</code>
nos dar&#xE1; una referencia al elemento cuyo <code>id=&quot;nav&quot;</code>. Una vez hayamos obtenido
la referencia de un elemento, podemos cambiar el estilo CSS asociado a &#xE9;l, mediante
el uso del atributo <code>style</code>. Por ejemplo, el p&#xE1;rrafo “miparrafo”
est&#xE1; actualmente oculto (tiene establecido <code>display: none</code>). Para mostrarlo,
actualizamos el atributo de estilos <code>display</code> a <code>block</code>:</p>

<pre><code>var parrafo = document.getElementById(&#39;miparrafo&#39;);
parrafo.style.display = &#39;block&#39;;</code></pre>

<p>Y ahora, el p&#xE1;rrafo aparece. Establecer estilos CSS en un elemento a trav&#xE9;s del atributo
<code>style</code> es exactamente la misma cosa que establecerlos en el atributo
<code>style</code> en el propio HTML, as&#xED; que, en el c&#xF3;digo anterior,
<code>parrafo.style.display = &#39;block&#39;</code> tiene el mismo efecto que poner
<code>style=&quot;display: block&quot;</code> directamente en nuestro HTML.
Excepto que &#xE9;ste es din&#xE1;mico. Y ocultar cualquier elemento es as&#xED; de simple:</p>

<pre><code>var parrafo = document.getElementById(&#39;miparrafo&#39;);
parrafo.style.display = &#39;none&#39;;</code></pre>

<h3 id="hidingshowingexample">Ocultando y mostrando, un ejemplo</h3>

<p>La teor&#xED;a es buena, pero un ejemplo pr&#xE1;ctico en esta situaci&#xF3;n ser&#xE1; bastante &#xFA;til.
Imaginemos una serie de pesta&#xF1;as, donde hacer click sobre una de ellas la muestra y
oculta el resto de las otras.</p>

<p>A continuaci&#xF3;n un ejemplo de un conjunto de pesta&#xF1;as:</p>

<pre><code>&lt;ol class=&quot;tablinks&quot;&gt;
  &lt;li&gt;&lt;a href=&quot;#tab1&quot;&gt;Pesta&#xF1;a 1&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#tab2&quot;&gt;Pesta&#xF1;a 2&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#tab3&quot;&gt;Pesta&#xF1;a 3&lt;/a&gt;&lt;/li&gt;
&lt;/ol&gt;

&lt;div class=&quot;tab&quot; id=&quot;tab1&quot;&gt;Esta es la pesta&#xF1;a 1&lt;/div&gt;
&lt;div class=&quot;tab&quot; id=&quot;tab2&quot;&gt;Esta es la pesta&#xF1;a 2&lt;/div&gt;
&lt;div class=&quot;tab&quot; id=&quot;tab3&quot;&gt;Esta es la pesta&#xF1;a 3&lt;/div&gt;</code></pre>

<p>En la elemento <code>head</code> del fichero de ejemplo (ver <a href="http://dev.opera.com/articles/view/creating-and-modifying-html/tabs.html">tabs.html</a>
para el ejemplo funcionando), encontraremos las siguientes definiciones CSS y el siguiente
c&#xF3;digo JavaScript (normalmente se ponen en ficheros aparte, y son importados en el HTML,
pero aqu&#xED; lo dejaremos todo en un fichero para hacer las cosas m&#xE1;s simples). Algunos trozos
de c&#xF3;digo pueden parecer intimidantes, no hay problema, nos ocuparemos de ellos.</p>

<pre><code>&lt;style type=&quot;text/css&quot;&gt;
ol.tablinks {
  margin: 0; padding: 0;
}
ol.tablinks li {
  float: left;
  border: 2px solid red;
  border-width: 2px 2px 0 2px;
  background: #eee;
  list-style: none;
  padding: 5px;
  margin: 0;
}
ol.tablinks li a {
  text-decoration: none;
  color: black;
}
div.tab {
  clear: left;
  border: 2px solid red;
  border-width: 1px 2px 2px 2px;
}
&lt;/style&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
var tabify = {
  hasClass: function(el,c) {
    return el.className.match(new RegExp(&#39;(\\s|^)&#39;+c+&#39;(\\s|$)&#39;));
  },
  addClass: function(el,c) {
    if (!tabify.hasClass(el,c)) el.className += &quot; &quot; + c;
  },
  removeClass: function(el,c) {
    if (tabify.hasClass(el,c)) {
      el.className=el.className.replace(new RegExp(&#39;(\\s|^)&#39;+c+&#39;(\\s|$)&#39;),&#39; &#39;);
    }
  },
  hideAllTabs: function(ol) {
    var links = ol.getElementsByTagName(&quot;a&quot;);
    for (var i=0; i&lt;links.length; i++) {
      tabify.setTabFromLink(links[i], &quot;none&quot;);
   }
  },
  setTabFromLink: function(link, style) {
    var dest = link.href.match(/#(.*)$/)[1];
    document.getElementById(dest).style.display = style;
    if (style == &quot;none&quot;) {
        tabify.removeClass(link, &quot;active&quot;);
    } else {
        tabify.addClass(link, &quot;active&quot;);
    }
  },
  addEvent: function(obj, type, fn) {
    if ( obj.attachEvent ) {
      obj[&#39;e&#39;+type+fn] = fn;
      obj[type+fn] = function(){obj[&#39;e&#39;+type+fn]( window.event );};
      obj.attachEvent(&#39;on&#39;+type, obj[type+fn] );
    } else {
      obj.addEventListener( type, fn, false );
    }
  },
  init: function() {
    var ols = document.getElementsByTagName(&quot;ol&quot;);
    for (var i=0; i&lt;ols.length; i++) {
      var ol = ols[i];
      if (!/(^|\s)tablinks(\s|$)/.test(ol.className)) { continue; }
      tabify.addEvent(ol, &quot;click&quot;, function(e) {
        var target = window.event ? window.event.srcElement : e.target;
        if (target.nodeName.toLowerCase() === &quot;a&quot;) {
          tabify.hideAllTabs(e.target.parentNode.parentNode);
          tabify.setTabFromLink(e.target, &quot;block&quot;);
          if (e) e.preventDefault();
          if (window.event) window.event.returnValue = false;
          return false;
        }
      }, true);
      tabify.hideAllTabs(ol);
      tabify.setTabFromLink(ol.getElementsByTagName(&quot;a&quot;)[0], &quot;block&quot;);
    }
  }
};
tabify.addEvent(window, &quot;load&quot;, tabify.init);
&lt;/script&gt;</code></pre>

<p>Cada pesta&#xF1;a es un enlace. Cada enlace tiene un m&#xE9;todo gestor de eventos <code>onclick</code>
asociado a &#xE9;l. Ese m&#xE9;todo gestor de eventos hace dos cosas: &#xE9;l <strong>oculta</strong>
todos los <code>div</code>s (usando <code>display: none</code> como se hizo antes),
y despu&#xE9;s <strong>muestra</strong> el <code>div</code> correspondiente a esa pesta&#xF1;a,
estableciendo para ello la propiedad <code>style</code> del <code>div</code> a
<code>display: block</code>.</p>

<p>Seguramente hayamos notado que el c&#xF3;digo HTML de m&#xE1;s arriba est&#xE1; preparado para mantener
el sentido incluso en la ausencia &#xF3; desactivaci&#xF3;n de JavaScript; si al pinchar sobre un enlace
no se muestra ni se oculta ninguna pesta&#xF1;a, los enlaces nos llevan hacia la pesta&#xF1;a adecuada,
as&#xED; que la p&#xE1;gina sigue operando correctamente, y mantiene la sem&#xE1;ntica, incluso en navegadores
sin JavaScript.
Esto es importante: es una t&#xE9;cnica de la que habremos oido hablar como “mejora progresiva
- progressive enhancement” (&#xF3; como se denominaba hace unos 3 a&#xF1;os, “degradaci&#xF3;n
elegante - graceful degradation”, aunque ahora ya no se la llama as&#xED;).
Esto es importante no s&#xF3;lo para la gente que, usando un navegador moderno, tiene JavaScript
desactivado, sino tambi&#xE9;n para otros tipos de usuarios. Tecnologias de ayuda, como lectores
de pantalla, para gente con discapacidad visual, soportan el peso de su estructura en que
nuestro c&#xF3;digo HTML sea sem&#xE1;ntico y significativo; adem&#xE1;s su soporte de JavaScript no es todo
lo bueno como el del resto de usuarios.
Los navegadores sobre m&#xF3;viles tampoco tienden a tener mucho soporte de JavaScript. Los motores
de b&#xFA;squeda pueden leer nuestro HTML, pero no nuestros scripts; se puede decir que Google es
el m&#xE1;s voraz navegador de usuarios ciegos en el mundo. Este es el significado del t&#xE9;rmino
“mejora progresiva - progressive enhancement”: se empieza con una p&#xE1;gina que tiene
sentido y que muestra su contenido en el entorno m&#xE1;s simple, como un navegador web de s&#xF3;lo texto,
y entonces, gradualmente, se la a&#xF1;ade funcionalidad extra de tal forma que, a cada paso,
nuestra p&#xE1;gina siga siendo funcional y usable.</p>

<p>Todo el c&#xF3;digo JavaScript se puede dividir en dos partes: la parte que actualmente hace
el trabajo, y la parte en la se engancha con el c&#xF3;digo HTML. El c&#xF3;digo que actualmente hace
el trabajo en este ejemplo es bastante sencillo: mostrar la pesta&#xF1;a correspondiente a
cada enlace son dos l&#xED;neas de JavaScript:</p>

<pre><code>var dest = link.href.match(/#(.*)$/)[1];
document.getElementById(dest).style.display = &quot;block&quot;;</code></pre>

<p>Los enlaces, si recordamos, son como <code>&lt;a href=&quot;#tab1&quot;&gt;Pesta&#xF1;a 1&lt;/a&gt;</code>,
as&#xED; que la primera l&#xED;nea usa una expresi&#xF3;n regular (ver la nota m&#xE1;s abajo) para extraer la parte
del enlace que aparece despu&#xE9;s del s&#xED;mbolo <code>#</code> ; en este ejemplo ser&#xED;a la cadena
<code>tab1</code>. Esa parte del enlace es la misma que el ID del correspondiente <code>div</code>
(porque, como hemos mencionado, la p&#xE1;gina est&#xE1; construida para tener sentido sem&#xE1;ntico, as&#xED; que
un “tab” apunta a su <code>div</code>). Entonces nosotros buscamos una referencia
a ese <code>div</code> mediante <code>document.getElementById</code>, y establecemos
<code>style.display</code> a <code>block</code> como hab&#xED;amos dicho antes.</p>

<div class="note">
<h4 id="regex">Expresiones regulares</h4>
<p>Las expresiones regulares son una especie de mini-lenguaje de programaci&#xF3;n, dise&#xF1;ado para
ayudar con los problemas de “parseo” de texto—por ejemplo, responder a cuestiones
como “ &#xBF;aparece esta cadena dentro de esta otra cadena?“ y “en la cadena
‘abc123def’, &#xBF;cu&#xE1;les son los n&#xFA;meros entre ‘c’ y ‘d’?”.
Son una herramienta muy potente, pero a la vez son elegantemente complicadas. A continuaci&#xF3;n se
describe esta expresi&#xF3;n regular; por ahora sint&#xE1;monos libres para confiar en c&#xF3;mo trabaja,
ya volveremos a ella m&#xE1;s tarde.</p>

<p>La expresi&#xF3;n regular, “regex”, usada en este ejemplo es <code>/#(.*)$/</code>.
Cada car&#xE1;cter en una expresi&#xF3;n regular est&#xE1; dise&#xF1;ado para coincidir con una secuencia de
caracteres en la cadena que se est&#xE1; analizando; la idea es expresar como la cadena que se
est&#xE1; analizando est&#xE1; construida, en secciones.</p>

<ul>
  <li><code>/ … /</code> &#x2014; las barras son justo el inicio y el final de una expresion
  regular, como las comillas simples &#xF3; dobles para una “cadena”</li>
  <li><code>#</code> &#x2014; el s&#xED;mbolo almohadilla (#) significa “el car&#xE1;cter tiene que
  ser una almohadilla”</li>
  <li><code>( … )</code> &#x2014; los par&#xE9;ntesis significan que “aqu&#xED; hay una secci&#xF3;n en la
  que estar&#xE9; interesado m&#xE1;s adelante.”</li>
  <li><code>.*</code> &#x2014; significa “cualquier secuencia de caracteres que haya”;
  es un punto (.), significando “un &#xFA;nico car&#xE1;cter”, seguido de un asterisco (*)
  significando “repetido tantas veces como queramos”</li>
  <li><code>$</code> &#x2014; el d&#xF3;lar significa “el final de la cadena”</li>
</ul>

<p>As&#xED; que nuestra expresi&#xF3;n regular describe un “patr&#xF3;n de coincidencias” para una
cadena compuesta de “una almohadilla, seguida de los caracteres que queramos”.
<code>link.href</code> es el destino del enlace que nosotros estamos buscando (por ejemplo,
<code>#tab1</code>, y como esta cadena <em>es</em> una cadena descrita mediante “una
almohadilla seguida de los caracteres que queramos”), el “patr&#xF3;n de coincidencias”
<em>se aplica</em> a esta cadena.</p>

<p><code>link.href.match(<strong>expresionRegular</strong>)</code>, de ese modo, nos devolver&#xE1;
tanto un verdadero como un falso; lo que actualmente devuelve es un array de dos valores,
<code>[&quot;#tab1&quot;, &quot;tab1&quot;]</code>. Lo primero es el texto que coincide con la expresion regular completa,
y lo segundo es el texto que coincide dentro de los par&#xE9;ntesis; esto es el porqu&#xE9; los par&#xE9;ntesis
est&#xE1;n ah&#xED;—para marcar esa parte de la cadena como “esta es la parte que nosotros
necesitamos”. La cadena <code>tab1</code> es lo que nosotros necesitamos, asi que podemos sacarla
de ese array (es el segundo elemento, as&#xED; que <code>[1]</code> la seleccionar&#xE1; &#x2014; los arrays
empiezan en cero.)</p>
</div>

<h4 id="connectingcode">Conectando el c&#xF3;digo escrito con una p&#xE1;gina</h4>

<p>Como ya se ha dicho m&#xE1;s arriba, hay dos partes en el c&#xF3;digo: la parte que hace el trabajo, y la parte
que engancha eso al HTML. Enganchar el c&#xF3;digo que hace el trabajo al HTML es decidir que eventos son
para qu&#xE9;. En este ejemplo particular, nos toca preocuparnos de dos eventos, el evento <code>load</code>
del objeto <code>window</code>, que se utiliza para decir “empezar todo ”, y el evento
<code>click</code> de la lista de pesta&#xF1;as, que se dispara cuando un usuario pincha en una pesta&#xF1;a.
Cuando la p&#xE1;gina carga, necesitamos hacer funcionar el c&#xF3;digo que crea las conexiones, y el c&#xF3;digo
que crea las conexiones deber&#xED;a conectar el evento <code>click</code> de las pesta&#xF1;as al c&#xF3;digo
de m&#xE1;s arriba, que muestra la pesta&#xF1;a m&#xE1;s apropiada.</p>

<p>El hacer funcionar c&#xF3;digo en respuesta a un evento se hace mediante la function
<code>addEventListener</code> en la mayor&#xED;a de navegadores, y con la funci&#xF3;n <code>attachEvent</code>
en Internet Explorer. Aqu&#xED; nosotros estamos creando una funci&#xF3;n “envoltura”, que hace
lo adecuado en funci&#xF3;n de lo que est&#xE1; soportado;</p>

<pre><code>addEvent: function(obj, type, fn) {
  if ( obj.attachEvent ) {
    obj[&#39;e&#39;+type+fn] = fn;
    obj[type+fn] = function(){obj[&#39;e&#39;+type+fn]( window.event );};
    obj.attachEvent(&#39;on&#39;+type, obj[type+fn] );
  } else {
    obj.addEventListener( type, fn, false );
  }
}</code></pre>

<p>(No nos preocupemos mucho el porqu&#xE9; esto funciona; tomemos como cierto el que lo hace—lo entenderemos
cuando estemos m&#xE1;s experimentados en JavaScript.) Esta funci&#xF3;n toma tres par&#xE1;metros, <code>obj</code>,
<code>type</code>, y <code>fn</code>, que son “el objeto que dispara el evento”, “
el evento del que estamos interesados”, y “la funci&#xF3;n que hay que ejecutar cuando el evento
se dispara”. Nosotros necesitamos ejecutar nuestra funci&#xF3;n llamada<code>tabify.init</code> cuando la
p&#xE1;gina carga; la funci&#xF3;n <code>tabify.init</code> tendr&#xE1; cuidado de manejar cada evento <code>click</code>
de las pesta&#xF1;as.</p>

<pre><code>addEvent(window, &quot;load&quot;, tabify.init);</code></pre>

<p>Como podemos observar de la estructura del HTML de m&#xE1;s arriba, un conjunto de pesta&#xF1;as con expresadas
como una lista ordenada con <code>class=&quot;tablinks&quot;</code>. As&#xED; que la funci&#xF3;n <code>tabify.init</code>
necesita hacer lo siguiente:</p>

<ol>
  <li>Encontrar todos los <code>&lt;ol&gt;</code> en la p&#xE1;gina con una clase de <code>tablinks</code></li>
  <li>A&#xF1;adir a cada evento <code>click</code> de los <code>&lt;ol&gt;</code> c&#xF3;digo que haga lo siguiente:
  <ol>
    <li>Funcionar exactamente como cualquier enlace en el que usuario pincha</li>
    <li>Hacer que la pesta&#xF1;a actual se corresponda con ese enlace</li>
    <li>Mostrar esa pesta&#xF1;a</li>
    <li>Ocultar el resto de pesta&#xF1;as</li>
  </ol>
  </li>
</ol>

<p>La funci&#xF3;n <code>init</code> que hace todo eso es la siguiente:</p>

<pre><code>init: function() {
  var ols = document.getElementsByTagName(&quot;ol&quot;);
  for (var i=0; i&lt;ols.length; i++) {
    var ol = ols[i];
    if (!/(^|\s)tablinks(\s|$)/.test(ol.className)) { continue; }
    tabify.addEvent(ol, &quot;click&quot;, function(e) {
      var target = window.event ? window.event.srcElement : e.target;
      if (target.nodeName.toLowerCase() === &quot;a&quot;) {
        tabify.hideAllTabs(e.target.parentNode.parentNode);
        tabify.setTabFromLink(e.target, &quot;block&quot;);
        if (e) e.preventDefault();
        if (window.event) window.event.returnValue = false;
        return false;
      }
    }, true);
    tabify.hideAllTabs(ol);
    tabify.setTabFromLink(ol.getElementsByTagName(&quot;a&quot;)[0], &quot;block&quot;);
  }
}</code></pre>

<p>Vayamos paso a paso dentro de esta funci&#xF3;n, mirando que hace exactamente cada parte:</p>

<pre><code>var ols = document.getElementsByTagName(&quot;ol&quot;);
  for (var i=0; i&lt;ols.length; i++) {
    var ol = ols[i];
    if (!/(^|\s)tablinks(\s|$)/.test(ol.className)) { continue; }
  }</code></pre>

<p>Esto encuentra todos los <code>&lt;ol&gt;</code> en la p&#xE1;gina que tengan una clase de
<code>tablinks</code>&#x2014; esto construye una lista de <em>todos</em> los <code>&lt;ol&gt;</code>
y por cada uno, pregunta “si este <em>no</em> tiene una clase de ‘tablinks’, entonces
pasa de &#xE9;l”. (Chequear la clase se hace mediante una expresi&#xF3;n regular; <code>continue</code>
significa “pasa de este elemento y vete al siguiente”.)</p>

<pre><code>tabify.addEvent(ol, &quot;click&quot;, function(e) {
  ...
});</code></pre>

<p>Esto conecta c&#xF3;digo a cada evento <code>click</code> de los <code>&lt;ol&gt;</code>.</p>

<pre><code>var target = window.event ? window.event.srcElement : e.target;</code></pre>

<p>Esto funciona exactamente como un enlace cuando el usuario pincha sobre &#xE9;l…</p>

<pre><code>tabify.setTabFromLink(e.target, &quot;block&quot;);</code></pre>

<p>…entonces esto muestra una pesta&#xF1;a simple…</p>

<pre><code>tabify.hideAllTabs(e.target.parentNode.parentNode);</code></pre>

<p>…y finalmente, esta l&#xED;nea oculta el resto de pesta&#xF1;as.</p>

<p>Las funciones <code>setTabFromLink</code> y <code>hideAllTabs</code> est&#xE1;n tambi&#xE9;n en el c&#xF3;digo; utilizan
las t&#xE9;cnicas de m&#xE1;s arriba para ocultar una pesta&#xF1;a &#xF3; para mostrarla. Se puede echar un vistazo en ellas para
ver como trabajan &#x2014; son funciones separadas porque a menudo es &#xFA;til tener un trozo de c&#xF3;digo que se
pueda llamar desde m&#xE1;s de un sitio y ponerlo en nuestras propias funciones. (Esto hace nuestro c&#xF3;digo m&#xE1;s
facilmente entendible y reutilizable en m&#xE1;s sitios. La gente se refiere en ocasiones a esto como
“partir” o “factorizar” codigo en funciones.)</p>

<p>Adem&#xE1;s, existe un trabajo extra, que muestra h&#xE1;bilmente mas cosas que a&#xF1;adir o quitar atributos. La funci&#xF3;n
<code>setTabFromLink</code> no solamente muestra la pesta&#xF1;a adecuada, sino que tambien establece
<code>class=&quot;active&quot;</code> en la pesta&#xF1;a &quot;activa&quot;. Esto lo hace con la ayuda de tres funciones de utilidades,
<code>hasClass</code>, <code>removeClass</code>, y <code>addClass</code>. De la misma forma que nosotros
ocultamos todas las pesta&#xF1;as, y mostramos la activa, utilizamos <code>removeClass</code> para quitar &quot;active&quot;
del <code>className</code> de todos los enlaces, y entonces utilizar <code>addClass</code> para a&#xF1;adir
&quot;active&quot; al enlace que est&#xE1; actualmente activo. A&#xF1;adir una clase a un enlace puede parece sin sentido &#x2014;
despues de todo; las clases son invisibles &#x2014; pero es una ayuda para la creaci&#xF3;n de estilos. Nosotros
podemos (y debemos) hacer que los enlaces con <code>class=&quot;active&quot;</code> aparezcan diferentes, simplemente
a&#xF1;adiendo CSS extra:</p>

<pre><code>ol.tablinks li a {
  background-color: red;
}

ol.tablinks li a.active {
  background-color: white;
}</code></pre>

<p>As&#xED; que ahora, la pesta&#xF1;a &quot;activa&quot; aparece en blanco, mientras las otras aparecen en rojo. Utilizar
JavaScript para a&#xF1;adir y quitar clases es una t&#xE9;cnica muy com&#xFA;n, y que debemos utilizar all&#xE1; donde
nos sea posible; CSS es bueno para controlar el layout y la posici&#xF3;n y apariencia de nuestros elementos HTML;
y utilizar JavaScript para alterar las clases de aquellos elementos significa que pueden adquirir diferentes
estilos CSS. Es una unificaci&#xF3;n ideal; JavaScript hace a nuestros elementos din&#xE1;micos pero sin hacer
muchos cambios sobre ellos. Justo a&#xF1;adir una clase y dejar que CSS se encargue del trabajo duro.</p>

<h2 id="creatinghtml">Creando HTML</h2>

<p>Los scripts que manejan el &#xE1;rbol DOM son mucho mas potentes que alterar simplemente las propiedades
CSS de nuestro HTML existente, que tambi&#xE9;n. Adem&#xE1;s, podemos crear din&#xE1;micamente HTML nuevo que nunca
estuvo en nuestra p&#xE1;gina cuando &#xE9;sta empez&#xF3;. Por ejemplo, en el sitio de noticias t&#xE9;cnicas Slashdot,
un enlace en un comentario muestra el destino del enlace entre corchetes, as&#xED; que un enlace como
&lt;a href=&quot;http://opera.com&quot;&gt;A web browser&lt;/a&gt; se mostrar&#xE1; como
<strong>&lt;a href=&quot;http://opera.com&quot;&gt;A web browser&lt;/a&gt; [opera.com]</strong>.
(Ellos hicieron esto para que no se pudiera <a href="http://www.youtube.com/watch?v=oHg5SJYRHA0" title="Rickrolling: giving someone a link which looks sensible but is actually to a Youtube recordingof Rick Astley performing &#39;Never Gonna Give You Up&#39;. Never stops being funny.">enga&#xF1;ar</a> a la gente, &#xF3; peor a&#xFA;n.)
A&#xF1;adir esta informaci&#xF3;n extra al HTML, mostrando el dominio destino de cada enlace en la p&#xE1;gina,
es bastante sencillo de hacer con JavaScript.</p>

<p>Crear nuevos elementos HTML se hace con la funci&#xF3;n <code>document.createElement</code>. Para este ejemplo,
solamente vamos a a&#xF1;adir una cosa: despu&#xE9;s de cada enlace, a&#xF1;adiremos un <code>span</code> conteniendo
texto que muestra el dominio de un enlace (comprobar <a href="http://dev.opera.com/articles/view/creating-and-modifying-html/linkify.html">linkify.html</a> para un ejemplo
en vivo). El HTML para este ejemplo es tal como sigue:</p>

<pre><code>&lt;p id=&quot;start&quot;&gt;Esto es un texto que contiene
&lt;a href=&quot;http://www.w3.org/TR/html4/struct/links.html&quot;&gt;enlaces&lt;/a&gt; en &#xE9;l a varios
sitios, inclyendo &lt;a href=&quot;http://www.opera.com&quot;&gt;Opera&lt;/a&gt;,
&lt;a href=&quot;http://www.bbc.co.uk/&quot;&gt;la BBC&lt;/a&gt; y un enlace interno a
&lt;a href=&quot;#start&quot;&gt;el inicio de esta secci&#xF3;n&lt;/a&gt;. Todos los enlaces
externos deber&#xED;an tener &lt;span&gt;[domain]&lt;/span&gt; despu&#xE9;s de ellos.&lt;/p&gt;</code></pre>

<p>Y el c&#xF3;digo JavaScript es el siguiente:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
var linksuffix = {
  addEvent: function(obj, type, fn) {
    if ( obj.attachEvent ) {
      obj[&#39;e&#39;+type+fn] = fn;
      obj[type+fn] = function(){obj[&#39;e&#39;+type+fn]( window.event );};
      obj.attachEvent(&#39;on&#39;+type, obj[type+fn] );
    } else {
      obj.addEventListener( type, fn, false );
    }
  },
  init: function() {
    var links = document.getElementById(&quot;linksuffixtext&quot;).getElementsByTagName(&quot;a&quot;);
    for (var i=0; i&lt;links.length; i++) {
      var matches = links[i].href.match(/^http:\/\/(.*?)\//);
      if (matches) {
        var linkdomain = matches[1];
        var span = document.createElement(&quot;span&quot;);
        var spantext = document.createTextNode(&quot; [&quot;+linkdomain+&quot;]&quot;);
        span.appendChild(spantext);
        links[i].parentNode.insertBefore(span, links[i].nextSibling);
      }
    }
  }
};
linksuffix.addEvent(window, &quot;load&quot;, linksuffix.init);
&lt;/script&gt;</code></pre>

<p>La parte del script que hace el trabajo aqu&#xED; es la siguiente:</p>

<pre><code>var links = document.getElementsByTagName(&quot;a&quot;);
for (var i=0; i&lt;links.length; i++) {
  var matches = links[i].href.match(/^http:\/\/(.*?)\//);
  if (matches) {
    var linkdomain = matches[1];
    var span = document.createElement(&quot;span&quot;);
    var spantext = document.createTextNode(&quot; [&quot;+linkdomain+&quot;]&quot;);
    span.appendChild(spantext);
    links[i].parentNode.insertBefore(span, links[i].nextSibling);
  }
}</code></pre>

<p>Esto se descompone en:</p>

<pre><code>var links = document.getElementsByTagName(&quot;a&quot;);
for (var i=0; i&lt;links.length; i++) {
  ...
}
</code></pre>

<p>Primero, encuentra todos los enlaces (<code>getElementsByTagName(&quot;a&quot;)</code>) en el documento</p>

<pre><code>var matches = links[i].href.match(/^http:\/\/(.*?)\//);
if (matches) {
  ...
}
</code></pre>

<p>Esta l&#xED;nea utiliza una expresi&#xF3;n regular en cada enlace para encontrar si el destino del
enlace empieza con <code>http://something/</code>. Si lo hace…</p>

<pre><code>var linkdomain = matches[1];
var span = document.createElement(&quot;span&quot;);
var spantext = document.createTextNode(&quot; [&quot;+linkdomain+&quot;]&quot;);
span.appendChild(spantext);</code></pre>

<p>…esta parte primero obtiene el “linkdomain”, la parte <code>www.opera.com</code>
del enlace. Lo siguiente es crear un elemento <code>&lt;span&gt;</code> utilizando
<code>document.createElement</code>. Lo siguiente, crea un “textNode”. Mientras los elementos
HTML en s&#xED; son creados con <code>document.createElement</code>, todos los textos en un documento HTML
se crean con “textNode”s, y hay que crearlos separadamente. No hay porqu&#xE9; preocuparnos sobre
esto cuando creamos HTML normal, pero tenemos que conocerlo si creamos elementos mediante scripts que
modifican el &#xE1;rbol DOM. El texto en el textNode es en realidad “ [domain]”, creado mediante
la concatenaci&#xF3;n (a&#xF1;adirse a si mismo) de cadenas. Finalmente, se usa el m&#xE9;todo <code>appendChild</code>
del elemento <code>&lt;span&gt;</code> para poner el textNode dentro del span.</p>

<pre><code>links[i].parentNode.insertBefore(span, links[i].nextSibling);
</code></pre>

<p>Esta l&#xED;nea a&#xF1;ade el elemento <code>span</code> en el documento. En este punto, el elemento
<code>span</code> es una referencia a un elemento HTML que se muestra como sigue:</p>

<pre><code>&lt;span&gt; [example.com]&lt;/span&gt;</code></pre>

<p>Este elemento, obviamente, no es parte del documento. No es parte de ning&#xFA;n documento todav&#xED;a; es
simplemente un elemento flotando en el limbo. A&#xF1;adir el elemento al documento se puede hacer de dos formas:
usando <code>appendChild</code> como m&#xE1;s arriba, &#xF3; utilizar <code>insertBefore</code>. La funci&#xF3;n
<code>appendChild</code> a&#xF1;ade nuestro nuevo elemento al <em>final</em> de un elemento existente
(esto es por lo que se llama <em>append</em>). Como nosotros tenemos que a&#xF1;adirlo justo en medio de
un elemento existente, utilizaremos <code>insertBefore</code>. Recuerda que nuestro trozo de HTML
es algo como lo que sigue:</p>

<pre><code>&lt;p&gt;... texto que tiene
&lt;a href=&quot;http://www.w3.org/TR/html4/struct/links.html&quot;&gt;enlaces&lt;/a&gt; en &#xE9;l
a ...</code></pre>

<p>Esto es igual que el &#xE1;rbol DOM que aparec&#xED;a en la Figura 1:</p>

<img src="/articles/view/creating-and-modifying-html/figure1.jpg" alt="El &amp;aacute;rbol DOM antes de la adicci&amp;oacute;n del elemento span despu&amp;eacute;s del enlace" />
<p class="comment">Figura 1: El &#xE1;rbol DOM antes de la adicci&#xF3;n del elemento span despu&#xE9;s del enlace</p>

<p>Queremos insertar nuestro elemento span entre el <code>&lt;a&gt;</code> y el textNode “en &#xE9;l a”,
asi que tiene que aparecer despu&#xE9;s del <code>&lt;a&gt;</code>. Esto dejar&#xE1; nuestro &#xE1;rbol DOM como el que
aparece en la Figura 2:</p>

<img src="/articles/view/creating-and-modifying-html/figure2.jpg" alt="&amp;Aacute;rbol DOM despu&amp;eacute;s de la adicci&amp;oacute;n del elemento span" />
<p class="comment">Figura 2: &#xC1;rbol DOM despu&#xE9;s de la adicci&#xF3;n del elemento span</p>

<p>&#xF3; mas simple, HTML como el siguiente</p>

<pre><code>&lt;p&gt;... texto que tiene
&lt;a href=&quot;http://www.w3.org/TR/html4/struct/links.html&quot;&gt;enlaces&lt;/a&gt;
&lt;span&gt; [domain]&lt;/span&gt; en &#xE9;l a...</code></pre>

<p>Lo que puede ser pr&#xE1;ctico aqu&#xED; es poder decir “inserta nuestro nuevo elemento <code>span</code>
<em>despues</em> del enlace”. Qu&#xE9; pena, no existe la funci&#xF3;n <code>insertAfter</code>. En su
lugar, tenemos que insertarlo <em>antes</em> que el elemento despu&#xE9;s del enlace (confuso, pero pensemos
acerca de ello y todo tendr&#xE1; sentido). Una manera r&#xE1;pida de llegar al “elemento despu&#xE9;s de un
elemento llamado <code>el</code>” es <code>el.nextSibling</code>. La funci&#xF3;n <code>insertBefore</code>
necesita ser llamada sobre el elemento en el que nosotros estamos insertando, que es el elemento
<code>&lt;p&gt;</code> padre del enlace, rapidamente accesible via <code>link.parentNode</code>.
As&#xED; que la llamada completa es como sigue:</p>

<pre><code>links[i].parentNode.insertBefore(span, links[i].nextSibling);
</code></pre>

<p>Esto es, encuentra el padre del enlace <code>&lt;p&gt;</code> que nosotros estamos procesando
(<code>links[i]</code>), e inserta nuestro elemento reci&#xE9;n creado <code>span</code> antes que el
elemento despu&#xE9;s del enlace (<code>links[i].nextSibling</code>). Tratar el c&#xF3;digo HTML como un
&#xE1;rbol DOM en este caso e insertar nuevos elementos en &#xE9;l puede ser confuso al principio, pero
empieza a estar muy claro en cuanto se gana pr&#xE1;ctica con ello.</p>

<h2 id="summary">Resumen</h2>

<p>HTML nos provee con la estructura para nuestras p&#xE1;ginas, y CSS nos proveen de la descripci&#xF3;n sobre
como se muestran. Lo que JavaScript nos permite es la flexibilidad; nuestra estructura HTML y nuestros
estilos CSS pasan a ser <em>din&#xE1;micos</em>. Podemos cambiar c&#xF3;mo nuestras p&#xE1;ginas se muestran y aparecen
y trabajar de momento en momento, basados en lo que los usuarios hacen. Este es el siguiente paso:
basados en informaci&#xF3;n y daots bien pensados y bien estructurados, hacer que cambien dependiendo de
lo que nuestros usuarios necesiten. Adem&#xE1;s, podemos mostrar y ocultar elementos, hacer cambios
de estilos y apariencias, y a&#xF1;adir nuevo HTML o quitar el viejo de la forma que necesitemos.</p>

<h2 id="exercises">Ejercicios</h2>

<ul>
  <li>&#xBF;C&#xF3;mo podemos modificar la propiedad display del CSS de un elemento para ocultarlo?</li>
  <li>&#xBF;C&#xFA;al es la diferencia entre un elemento y un nodo de texto?</li>
  <li>Da dos razones por las que mejoras progresivas es importante.</li>
  <li>&#xBF;C&#xFA;al es la diferencia entre <code>appendChild</code> e <code>insertBefore</code>?</li>
  <li>&#xBF;Porqu&#xE9; utilizamos la funci&#xF3;n <code>addClass</code> en vez de concatenar el nuevo nombre
  de clase con el atributo <code>className</code> de un elemento?</li>
  <li><p>En la siguiente estrutura HTML, &#xBF;que puede ser <code>document.getElementById(&quot;marker&quot;).nextSibling</code>?</p>

  <pre><code>&lt;p&gt;Este es un &lt;strong&gt;bloque de HTML con
  &lt;span id=&quot;marker&quot;&gt;varios enlaces&lt;span&gt; en &#xE9;l&lt;/strong&gt;.&lt;/p&gt;</code></pre></li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/traversing-the-dom-es/" rel="prev" title="enlace al art&amp;iacute;culo anterior en la serie">Art&#xED;culo anterior—Recorriendo el &#xE1;rbol DOM</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript/" rel="next" title="enlace al siguiente art&amp;iacute;culo en la serie">Siguiente art&#xED;culo—Estilos din&#xE1;micos - manipulando CSS con JavaScript</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">&#xCD;ndice de contenidos</a></li>
</ul>


<h2>Acerca del autor</h2>

<img alt="Foto del autor del art&amp;iacute;culo, Stuart Langridge" src="/articles/view/creating-and-modifying-html/stuartlangridge.jpg" class="right" />

<p style="padding-bottom:50px; padding-right: 10px;">Stuart Langridge es posiblemente la &#xFA;nica persona en el mundo
en tener un BSc en Inform&#xE1;tica y Filosof&#xED;a. Cuando &#xE9;l no esta trasteando con ordenadores, &#xE9;l es un hacker de
JavaScript, Django y Python en <a href="http://www.canonical.com">Canonical</a>, autor de
<a href="http://www.sitepoint.com/books/dhtml1/">DHTML Utopia</a> en SitePoint, y un bebedor de
cervezas decentes. Adem&#xE1;s, es una cuarta parte del equipo en <a href="http://lugradio.org/presenters/">LugRadio</a>,
un programa de radio de estreno mundial sobre temas de software &quot;Free and Open Source&quot;.
Sus divagaciones sobre la web, scripts, software open source, y cualesquiera otras muchas cosas, se pueden
encontrar en <a href="http://kryogenix.org">kryogenix.org</a>; Stuart puede ser encontrado fuera buscando
en el &#xE1;rea de fumadores.</p>
