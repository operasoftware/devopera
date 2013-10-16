Title: Recorriendo el árbol DOM
----
Date: 2010-05-13 16:37:16
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

<li class="prev"><a href="http://dev.opera.com/articles/view/objects-in-javascript-es/" rel="prev" title="enlace al art&amp;iacute;culo anterior en la serie">Art&#xED;culo anterior—Objetos en JavaScript</a></li>

<li class="next"><a href="http://dev.opera.com/articles/view/creating-and-modifying-html-es/" rel="next" title="enlace al siguiente art&amp;iacute;culo en la serie">Art&#xED;culo siguiente—Creando y modificando HTML</a></li>

<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">&#xCD;ndice de contenidos</a></li>

</ul>

<h2>Introducci&#xF3;n</h2>



<p>Es dif&#xED;cil encontrarse con un ejemplo de c&#xF3;digo JavaScript usable en la Web que no interaccione de alguna manera

con un documento HTML. Generalmente, el c&#xF3;digo va a necesitar leer valores de la p&#xE1;gina, procesarlos de alguna forma,

y entonces, generar una salida en forma de cambios visibles en la p&#xE1;gina, o como mensajes informativos. Dado que

nuestro siguiente paso es el objetivo de crear interfaces m&#xE1;s receptivos para nuestras p&#xE1;ginas y aplicaciones, este

art&#xED;culo y el siguiente presentar&#xE1;n el <strong>DOM - Document Object Model</strong>, que provee mecanismos para

<em>inspeccionar</em> y <em>manipular</em> las capas de sem&#xE1;ntica y presentaci&#xF3;n que hayamos creado.</p>



<p>Despu&#xE9;s de leer este art&#xED;culo, tendremos un buen conocimiento de que es DOM, y c&#xF3;mo podemos utilizarlo para navegar

a traves de una p&#xE1;gina HTML, con objeto de encontrar el sitio exacto donde necesitamos recoger alg&#xFA;n dato, o hacer

un cambio. El siguiente art&#xED;culo de la serie (<a href="http://dev.opera.com/articles/view/creating-and-modifying-html-es/">

Creando y modificando HTML</a>) recoger&#xE1; el testigo ah&#xED;, mostrando los m&#xE9;todos mediante los cuales podremos

modificar los datos de la p&#xE1;gina, cambiando valores &#xF3; creando completamente nuevos elementos y atributos.</p>



<p>La estructura de este art&#xED;culo es la siguiente:</p>



<ul>

  <li><a href="#plantingseeds">Plantando las semillas</a></li>

  <li><a href="#growingtrees">Generando &#xE1;rboles</a></li>

  <li><a href="#nodes">Nodos</a></li>

  <li><a href="#branchtobranch">Rama a rama</a></li>

  <li><a href="#directaccess">Acceso directo</a></li>

  <li><a href="#summary">Resumen</a></li>

  <li><a href="#exercises">Ejercicios</a></li>

</ul>



<h2 id="plantingseeds">Plantando las semillas</h2>



<p><acronym title="Document Object Model">DOM</acronym>, como se puede suponer de Document Object Model, es un modelo

de documento HTML que es creado por el navegador cuando este carga una p&#xE1;gina Web. JavaScript tiene acceso a toda la

informaci&#xF3;n de este modelo. Vayamos atr&#xE1;s un momento, y tengamos en cuenta que es lo que exactamente estamos modelando.</p>



<p>Cuando construimos una p&#xE1;gina, el objetivo es a&#xF1;adir contenido mediante el mapeo a los tags HTML que tenemos disponibles.

Algo de contenido puede ser un <em>p&#xE1;rrafo</em>, as&#xED; que podemos usar el tag <code>p</code>; el siguiente es un <em>enlace</em>,

as&#xED; que podemos usar el tag <code>a</code>, y continuar as&#xED;. Tambi&#xE9;n podemos codificar relaciones entre elementos:

los campos <code>input</code> tienen un <code>label</code>, y pueden estar juntos dentro de un <code>fieldset</code>.

Adem&#xE1;s, se puede ir m&#xE1;s all&#xE1; del conjunto b&#xE1;sico de tags de HTML, a&#xF1;adiendo los atributos <code>id</code> y <code>class</code>

donde sea apropiado, para inculcar en la p&#xE1;gina estructuras que se pueden usar para manipular &#xF3; estilizar la p&#xE1;gina.

Una vez est&#xE9; construido el contenido y la sem&#xE1;ntica HTML, podemos usar CSS para estilizar la presentaci&#xF3;n de la p&#xE1;gina.

<span lang="fr">Et voil&#xE0;</span>, habremos creado una p&#xE1;gina que <em>har&#xE1; las delicias</em> de los usuarios.



<p>Pero esto no es todo. Habremos creado un documento que estar&#xE1; <em>empapado</em> de meta-informaci&#xF3;n

que podremos manipular usando JavaScript. Podemos encontrar elementos espec&#xED;ficos o <em>grupos</em> de elementos

que a&#xF1;adir, eliminar, y modificar, de acuerdo a variables definidas por el usuario; podemos encontrar informaci&#xF3;n de

presentaci&#xF3;n (CSS) y modificar estilos al vuelo; podemos validar la informaci&#xF3;n que los usuarios han introducido

en formularios; y una gran cantidad de otras cosas. Para que JavaScript pueda hacer estas cosas, necesitamos acceso

a informaci&#xF3;n, y el &#xE1;rbol DOM provee a JavaScript justo lo que necesita.</p>



<p>Es importante hacer notas que un CSS y HTML bien formados son la semilla desde la que el modelo JavaScript para

la p&#xE1;gina podr&#xE1; crecer. El modelo de un documento pobremente construido diferir&#xE1; de muchas maneras de nuestras

expectativas, y tendr&#xE1; inconsistencias entre los navegadores. Es, por tanto, vital, que nuestros CSS y HTML est&#xE9;n

<a href="http://dev.opera.com/articles/view/24-validating-your-html/">bien formados y v&#xE1;lidos</a> para garantizar

que JavaScript se encuentra con el modelo exacto que nosotros hayamos pensado.</p>



<h2 id="growingtrees">Generando &#xE1;rboles</h2>



<p>Despu&#xE9;s de crear y estilizar nuestro documento, el siguiente paso es mostrarlo en un navegador a los usuarios.

Aqu&#xED; es donde el &#xE1;rbol DOM entra en juego, se lee el documento que hemos escrito, y se genera din&#xE1;micamente el &#xE1;rbol

DOM que podemos utilizar en nuestros programas. Especificamente, el &#xE1;rbol DOM representa la p&#xE1;gina HTML como un

<strong>&#xE1;rbol</strong>, de la misma forma que nosotros podemos representar nuestros antepasados como el &#xE1;rbol familiar.

Cada elemento en la p&#xE1;gina es contenido en el &#xE1;rbol DOM como un <strong>nodo</strong>, que tendr&#xE1; ramas enlazadas

a elementos que &#xE9;l mismo contiene (sus <strong>hijos</strong>), y a los elementos que directamente le contienen a &#xE9;l

(sus <strong>padres</strong>). Echemos un vistazo a un documento HTML simple, para ver claramente estas relaciones:</p>



<pre><code>&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Esto es un Documento&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Esto es una cabecera&lt;/h1&gt;
    &lt;p id=&quot;TextoExcitante&quot;&gt;
      Esto es un p&#xE1;rrafo! &lt;em&gt;Excitante&lt;/em&gt;!
    &lt;/p&gt;
    &lt;p&gt;
      Esto tambi&#xE9;n es un p&#xE1;rrafo, pero no es ni de lejos tan excitante como el &#xFA;ltimo.
    &lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Como podemos ver, el documento completo est&#xE1; contenido en un elemento <code>html</code>. Este elemento directamente

contiene otros dos: <code>head</code> y <code>body</code>. Estos se muestran en el modelo como sus hijos, y ellos apuntan

hacia <code>html</code> como su padre. Y as&#xED; continua, bajando a trav&#xE9;s de la jerarqu&#xED;a del documento, en el que cada

elemento apunta a sus descendientes directos como hijos, y a su ancestro directo como su padre:</p>



<ul>

  <li><code>title</code> es el hijo de <code>head</code>.</li>

  <li><code>body</code> tiene tres hijos — dos elementos <code>p</code> y un elemento <code>h1</code>.</li>

  <li>El elemento <code>p</code> con <code>id=&quot;TextoExcitante&quot;</code> tiene un hijo, — el elemento <code>em</code>.</li>

  <li>El texto plano de los elementos (por ejemplo “Esto es un Documento!”) tambien se representa en el DOM,

  como <strong>nodos de texto</strong>. No tienen hijos propios, pero apuntan a sus contenedores como su padre.</li>

</ul>



<p>As&#xED; que la jerarqu&#xED;a del &#xE1;rbol DOM del documento HTML que hemos presentado anteriormente, se puede

resumir visualmente en la Figura 1:</p>



<img src="/articles/view/traversing-the-dom/DOMTree.gif" alt="Un &amp;aacute;rbol DOM de un documento HTML presentado visualmente" />

<p class="comment">Figura 1: El anterior documento HTML representado visualmente mediante su &#xE1;rbol DOM.</p>



<p>Es un mapeo sencillo desde un documento HTML a su estructura tipo &#xE1;rbol, que resume brevemente las

relaciones directas entre elementos de la p&#xE1;gina, clarificando la jerarqu&#xED;a del &#xE1;rbol. Se puede notar,

no obstante, que se ha a&#xF1;adido un nodo llamado <code>document</code> sobre el nodo <code>html</code>.

Esta es la <strong>ra&#xED;z</strong> del documento, y act&#xFA;a como el elemento de primer nivel accesible por JavaScript.</p>

<h2 id="nodes">Nodos</h2>

<p>Antes de que empezemos a bailar por el &#xE1;rbol, y a balancearnos de rama en rama, tomemos un momento para reflexionar sobre que tenemos realmente entre manos.</p>

<p>Cada nodo en el &#xE1;rbol DOM es un <a href="http://dev.opera.com/articles/view/objects-in-javascript-es/">objeto</a>, representando un elemento simple en la p&#xE1;gina. Los nodos mantienen relaciones con sus nodos

inmediatamente vecinos, y contienen una gran cantidad de informaci&#xF3;n sobre ellos mismos. De la misma

forma que un ni&#xF1;o puede trepar de una rama a la siguiente m&#xE1;s cercana en un roble de un patio trasero,

podemos recoger toda la informaci&#xF3;n de un nodo que nosotros necesitemos de su padre &#xF3; de sus hijos.</p>



<p>Como se puede esperar, dada la orientaci&#xF3;n a objetos de JavaScript, la informaci&#xF3;n que estamos

buscando en este caso, es proporcionada v&#xED;a las propiedades de los nodos. Espec&#xED;ficamente, las propiedades

<code>parentNode</code> y <code>childNodes</code>.  Como cada elemento en la p&#xE1;gina tiene al menos un padre,

la propiedad <code>parentNode</code> est&#xE1; clara: nos da accceso al nodo padre. Los nodos pueden tener

cualquier n&#xFA;mero de hijos, por tanto, la propiedad <code>childNodes</code> es un array realmente. Cada

elemento del array es un hijo, en el mismo orden que aparecen en el documento. En el ejemplo de documento,

el elemento <code>body</code> tiene un array <code>childNodes</code> conteniendo primero <code>h1</code>,

despu&#xE9;s el primer <code>p</code>, y luego el segundo <code>p</code>, en ese orden.</p>



<p>&#xC9;stas no son las &#xFA;nicas propiedades interesantes de los nodos, claro. Pero es un bu&#xE9;n comienzo. As&#xED; que,

¿que nodo utilizaremos cuando pongamos nuestras manos por primera vez encima de ellos? ¿Por donde empezaremos

la exploraci&#xF3;n?.</p>



<h2 id="branchtobranch">Rama a rama</h2>



<p>La mejor forma de empezar es por la ra&#xED;z del documento, accesible mediante un objeto creativamente

llamado <code>document</code>.  Como <code>document</code> es la ra&#xED;z, no tiene <code>parentNode</code>,

y adem&#xE1;s s&#xF3;lo tiene un hijo: el nodo <code>html</code>, al que tenemos acceso mediante el array

<code>childNodes</code> de <code>document</code><code>:</code></p>



<pre><code>var nodoHtml = document.childNodes[0];</code></pre>



<p>Esta l&#xED;nea de c&#xF3;digo crea una nueva variable llamada <code>nodoHtml</code>, y le as&#xED;gna un valor, el

del primer hijo del objeto <code>document</code> (recordar que los arrays en JavaScript empiezan en 0, no en 1).

Podemos confirmar que tenemos las manos encima del nodo <code>html</code> accediendo a la propiedad

<code>nodeName</code> de <code>nodoHtml</code>, que nos da informac&#xED;&#xF3;n vital sobre el tipo de nodo

con el que estamos tratando:</p>



<pre><code>alert( &quot;nodoHtml es un nodo &quot; + nodoHtml.nodeName + &quot; !&quot; );</code></pre>



<p>Este codigo muestra un pop-up de alerta que dice “nodoHtml es un nodo HTML !”. La propiedad

<code>nodeName</code> nos da acceso al tipo de nodo que es. Para nodos que son elementos, la propiedad

contiene el nombre del tag en may&#xFA;sculas: es el “HTML”; para un enlace tendr&#xED;a que ser

“A”, para un p&#xE1;rrafo “P”, y as&#xED;. Para un nodo de texto, la propiedad <code>nodeName</code>

es “#text”, y la propiedad <code>nodeName</code> de <code>document</code> es “#document”.</p>



<p>Adem&#xE1;s, sabemos que <code>nodoHtml</code> deber&#xED;a contener una referencia a su padre. Podemos chequear

que esto funciona, y que tiene una referencia a su padre, de la siguiente forma, con el siguiente test:</p>



<pre><code>if ( nodoHtml.parentNode == document ) {
  alert( &quot;Ooooh! El padre del nodo HTML es el objeto document!&quot; );
}</code></pre>

<p>Esto es justo lo que nosotros esper&#xE1;bamos. Utilizando esta informaci&#xF3;n, podemos escribir determinado

c&#xF3;digo para obtener la referencia al primer p&#xE1;rrafo en el cuerpo del documento de ejemplo. Es el segundo

hijo del elemento <code>body</code> element, que a su vez es el segundo hijo del elemento <code>html</code>,

que es el primer hijo del objeto <code>document</code>. Vaya.</p>



<pre><code>var nodoHtml = document.childNodes[0];
var nodoBody = nodoHtml.childNodes[1];
var nodoParrafo = nodoBody.childNodes[1];
alert( &quot;nodoParrafo es el nodo &quot; + nodoParrafo.nodeName + &quot; !&quot; );</code></pre>



<p>Estupendo. Esto hace exactamente lo que nosotros necesitamos. Pero es un poco excesivo en cuanto a

c&#xF3;digo escrito, y efectivamente hay una manera mejor de escribir esto mismo. En el

<a href="http://dev.opera.com/articles/view/objects-in-javascript-es/">art&#xED;culo de objetos</a>

aprendimos como se pueden encadenar las referencias a objetos; aqu&#xED; podemos hacer la misma cosa,

obviando las variables intermedias, podemos escribir lo siguiente:</p>



<pre><code>var nodoParrafo = document.childNodes[0].childNodes[1].childNodes[1];
alert( &quot;nodoParrafo es el nodo &quot; + nodoParrafo.nodeName + &quot; !&quot; );</code></pre>

<p>Esto es mucho m&#xE1;s compacto, se ahorra bastante c&#xF3;digo</p>

<p>El primer hijo de un nodo es siempre <code>node.childNodes[0]</code>, y el &#xFA;ltimo hijo es siempre

<code>node.childNodes[node.childNodes.length - 1]</code>. Se suele acceder bastante a ellos, y son

un poco pesados de escribir una y otra vez. Es por eso que el &#xE1;rbol DOM nos da, expl&#xED;citamente, dos

formas reducidas de escribir ambas: <code>.firstChild</code> y <code>.lastChild</code> respectivamente.

Como el nodo <code>html</code> es el primer hijo del objeto <code>document</code>, y el nodo

<code>body</code> es el &#xFA;ltimo hijo del nodo <code>html</code>, podemos reescribir el c&#xF3;digo anterior

de una forma mucho m&#xE1;s clara, as&#xED;:</p>



<pre><code>var nodoParrafo = document.firstChild.lastChild.childNodes[1];
alert( &quot;nodoParrafo es el nodo &quot; + nodoParrafo.nodeName + &quot; !&quot; );</code></pre>



<p>El m&#xE9;todo de navegacion a traves de arrays de los nodos es bastante &#xFA;til, y nos permitir&#xE1; acceder

a donde queramos en el documento, pero suele ser bastante pesado. A&#xFA;n en este ejemplo m&#xED;nimo, se puede

ver que es bastante laborioso el conseguir navegar desde la ra&#xED;z del &#xE1;rbol hacia dentro de las

profundidades del documento. ¡Es por eso que existe una forma mucho mejor de hacerse!.</p>



<h2 id="directaccess">Acceso directo</h2>



<p>La verdad es que es muy dif&#xED;cil el tener especificar rutas de cada uno de los elementos de una p&#xE1;gina

en los que estamos interesados. M&#xE1;s a&#xFA;n, se convierte en una tarea <em>completamente</em> imposible, si la p&#xE1;gina

en la que estamos trabajando es generada din&#xE1;micamente de alguna forma (por ejemplo, utilizando un

lenguaje en el servidor como PHP &#xF3; ASP.NET), porque no podemos garantizar que, por ejemplo, el p&#xE1;rrafo

que estamos buscando sea <em>siempre</em> el segundo hijo del nodo body. As&#xED; que es necesario un mejor modo

de acceder a un elemento espec&#xED;fico sin que haya que tener conocimiento de los nodos de su entorno.</p>



<p>Echando un vistazo al documento HTML del ejemplo anterior, podemos ver que hay un atributo <code>id</code>

en el p&#xE1;rrafo del que estamos hablando. Este <code>id</code> es &#xFA;nico, identifica una localizaci&#xF3;n

espec&#xED;fica en el documento, y nos permite eludir el tener que usar una ruta completa, mediante la

utilizaci&#xF3;n del m&#xE9;todo <code>getElementById</code> del objeto <code>document</code>. Este metodo

hace exactamente lo que esperamos de &#xE9;l, nos retorna <code>null</code> si le proporcionamos un id que

no existe en la p&#xE1;gina, &#xF3; el elemento que hemos pedido si el <code>id</code> existe. Para ver esto,

comparemos los resultados del m&#xE9;todo viejo con el nuevo:</p>



<pre><code>var nodoParrafo = document.getElementById(&#39;TextoExcitante&#39;);
if ( document.firstChild.lastChild.childNodes[1] == nodoParrafo ) {
  alert( &quot;nodoParrafo es exactamente lo que buscamos!&quot; );
}</code></pre>



<p>Este c&#xF3;digo mostrar&#xE1; un di&#xE1;logo confirmando que los dos m&#xE9;todos nos dan resultados id&#xE9;nticos para

este documento HTML de ejemplo. <code>getElementById</code> es la forma m&#xE1;s eficiente de tener acceso

a una pieza en particular de la p&#xE1;gina: si nosotros sabemos que vamos a necesitar hacer algun proceso

sobre una p&#xE1;gina (sobre todo si no podemos garantizar donde), a&#xF1;adir un atributo <code>id</code> en

el sitio apropiado nos ahorrar&#xE1; mucho tiempo.</p>



<p>Igualmente &#xFA;til es el m&#xE9;todo <code>getElementsByTagName</code>, que retorna una coleccion de todos

los elementos de una p&#xE1;gina de un tipo particular. Por ejemplo, podemos obtener todos los elementos

<code>p</code> en una p&#xE1;gina. El siguiente ejemplo nos muestra tanto el p&#xE1;rrafo excitante, como su

menos interesante hermano:</p>



<pre><code>var todosLosParrafos = document.getElementsByTagName(&#39;p&#39;);</code></pre>



<p>Lo mejor para procesar la colecci&#xF3;n resultante almacenada en <code>todosLosParrafos</code>

es usar un <code>for</code> : podemos trabajar con ella como si fuera un array:</p>



<pre><code>for (var i=0; i &lt; todosLosParrafos.length; i++ ) {
  //  hacer aqu&#xED; nuestro procesamiento, usando
  //  &quot;todosLosParrafos[i]&quot; para referenciar
  //  el elemento actual de la colecci&#xF3;n.
  alert( &quot;Este es el parrafo &quot; + i + &quot;!&quot; );
}</code></pre>



<p>Para documentos m&#xE1;s complejos, retornar <em>todos</em> los elementos de un tipo puede ser abrumador.

En vez de trabajar con unos 200 <code>div</code>s en una p&#xE1;gina grande, es m&#xE1;s l&#xF3;gico que queramos

trabajar con los <code>div</code>s de una secci&#xF3;n espec&#xED;fica. En este caso, podemos combinar dos m&#xE9;todos

para filtrar los resultados: obtener un elemento usando su <code>id</code>, y preguntar por todos los

elementos de un determinado tipo que contenga. Como ejemplo, podemos obtener <em>todos</em> los

elementos <code>em</code> del p&#xE1;rrafo emocionante, preguntando por lo siguiente:</p>



<pre><code>document.getElementById(&#39;TextoExcitante&#39;).getElementsByTagName(&#39;em&#39;)</code></pre>



<h2 id="summary">Resumen</h2>



<p>El &#xE1;rbol DOM es la base de cas&#xED; todo lo que JavaScript puede hacer por nosotros en la Web.

Es el interfaz que nos permite interaccionar con el contenido de nuestra p&#xE1;gina, y es esencial

para entender como trabajar con ese modelo.</p>



<p>Este art&#xED;culo nos da las herramientas base para este trabajo. Ahora, podemos acceder y recorrer

el &#xE1;rbol DOM facilmente, utilizando <code>document</code> para obtener la ra&#xED;z del &#xE1;rbol DOM, y

usando <code>childNodes</code> y <code>parentNode</code> para subir y bajar por el &#xE1;rbol accediendo

a los familiares de los nodos. Podemos obviar intermediarios, y evitar tener que codificar rutas

largas codificadas como tal en el documento, mediante la utilizaci&#xF3;n de <code>getElementById</code>

y <code>getElementsByTagName</code> para crear nuestros propios enlaces. De todas formas, en relaci&#xF3;n

a viajar por la estructura del &#xE1;rbol DOM, esto es s&#xF3;lo el principio.</p>



<p>El siguiente paso l&#xF3;gico es empezar a <em>hacer algo</em> interesante con los resultados que JavaScript

nos devuelve. Necesitamos recoger esos datos para alimentar nuestros scripts, y tendremos que manipular

datos de la p&#xE1;gina para crear emocionantes interacciones con el usuario. Exploraremos estos aspectos

en el siguiente art&#xED;culo, que nos mostrar&#xE1; c&#xF3;mo debemos usar los m&#xE9;todos que el &#xE1;rbol DOM provee para

manipular los nodos y sus atributos, y c&#xF3;mo construir las interacciones entre los scripts y los

interfaces que crearemos en el futuro.</p>



<h2 id="exercises">Ejercicios</h2>



<ul>

  <li>Utilizando el documento de ejemplo de este art&#xED;culo, escribir tres rutas diferentes que acaben

  en el elemento <code>head</code>. Recordar que podemos encadenar <code>childNodes</code> y

  <code>parentNode</code> tanto como queramos.</li>



  <li>Dado un nodo cualquiera, ¿c&#xF3;mo podemos determinar su tipo?</li>



  <li>Dado un nodo cualquiera, ¿c&#xF3;mo podemos ir al objeto <code>document</code> object?

  Pista: Recordar que la propiedad <code>parentNode</code> del objeto <code>document</code>

  retorna <code>null</code>.</li>



</ul>



<ul class="seriesNav">

<li class="prev"><a href="http://dev.opera.com/articles/view/objects-in-javascript-es/" rel="prev" title="enlace al art&amp;iacute;culo anterior en la serie">Art&#xED;culo anterior — Objetos JavaScript</a></li>

<li class="next"><a href="http://dev.opera.com/articles/view/creating-and-modifying-html-es/" rel="next" title="enlace al siguiente art&amp;iacute;culo en la serie">Siguiente art&#xED;culo — Creando y modificando HTML</a></li>

<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">&#xCD;ndice de contenidos</a></li>

</ul>



<h2>Acerca del autor</h2>



<img src="/articles/view/javascript-functions/mikewest.jpg" alt="Foto del autor del art&amp;iacute;culo, Mike West" style="float:right;" />



<p>Mike West es un estudiante de filosof&#xED;a habilmente disfrazado como un experimentado y

exitoso desarrollador web. &#xC9;l ha estado trabajando en la web durante una d&#xE9;cada, m&#xE1;s

recientemente en el equipo responsable de la construcci&#xF3;n del sitio de noticias de Yahoo Europa.</p>



<p style="padding-bottom:50px;">Despu&#xE9;s de abandonar las llanuras de suburbios de Texas en 2005, Mike se

estableci&#xF3; en Munich, Alemania, donde lidia (cada vez menos) cada dia con el idioma.

<a href="http://mikewest.org/">mikewest.org</a> es su p&#xE1;gina personal en la web, donde, despacio, re&#xFA;ne

sus escritos y enlaces juntos para la posteridad. &#xC9;l mantiene su c&#xF3;digo en

<a href="http://github.com/mikewest">GitHub</a>.</p></p>
