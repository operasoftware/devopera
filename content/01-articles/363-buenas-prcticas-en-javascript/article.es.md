Title: Buenas prácticas en JavaScript
----
Date: 2010-05-18 08:47:24
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

<li class="prev"><a href="http://dev.opera.com/articles/view/first-look-at-javascript/" rel="prev" title="link to the previous article in the series">Art&#xED;culo anterior—El primer vistazo a JavaScript</a></li>

<li class="next"><a href="http://dev.opera.com/articles/view/unobtrusive-javascript-es/" rel="next" title="link to the next article in the series">Siguiente art&#xED;culo—Los principios de un JavaScript discreto</a></li>

<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabla de contenidos</a></li>

</ul>



<h2>Introducci&#xF3;n</h2>



<p>El escribir un art&#xED;culo de buenas pr&#xE1;cticas es un negocio complicado. Para un buen n&#xFA;mero de gente,

lo que se puede leer a continuaci&#xF3;n ser&#xE1; bastante obvio y justo lo que hay que hacer.</p>



<p>De cualquier forma, echando un vistazo sobre la web, y teniendo c&#xF3;digo entregado a mi por otros desarrolladores

durante a&#xF1;os, creo que el sentido com&#xFA;n es, en realidad, una rareza en el c&#xF3;digo disponible en internet. Y que

“lo razonable y l&#xF3;gico de hacer” se oculta en el fondo de la lista de prioridades una vez se est&#xE1;

en dentro de un proyecto, y la fecha l&#xED;mite se acerca.</p>



<p>As&#xED; que he decidido hacer esto m&#xE1;s f&#xE1;cil, creando este art&#xED;culo, que es una recopilaci&#xF3;n de buenas pr&#xE1;cticas

y sentido com&#xFA;n que he generado durante a&#xF1;os, muchas de ellas aprendidas de la forma dificil (experimentaci&#xF3;n y dem&#xE1;s).

Hay que tomar esa advertencia de arriba, y tenerla a mano, para poder aplicarla casi sin tener que pensar en ella.

Seguro que hay cosas con las que se discrepa, es una buena cosa - hay que cuestionar lo que se lee, para encontrar

mejores soluciones. De todas formas, creo que seguir estos principios me ha hecho un desarrollador m&#xE1;s efectivo,

y permitido que otros desarrolladores construyan sobre mi trabajo de forma m&#xE1;s sencilla.</p>



<p>El art&#xED;culo se estructura como sigue:</p>



<ul><li><a href="#easynames">Llamar a las cosas por su nombre — nombres de variables y funciones f&#xE1;ciles,

cortos y leibles</a></li>

<li><a href="#avoidglobals">Evitar globales</a></li>

<li><a href="#strictstyle">Mantenerse en un estilo de codificaci&#xF3;n estricta</a></li>

<li><a href="#comments">Comenta tanto como necesites, pero no m&#xE1;s</a></li>

<li><a href="#mixing">Evitar mezclas con otras tecnologias</a></li>

<li><a href="#shortcut">Utilizar notaciones cortas cuando tenga sentido</a></li>

<li><a href="#modules">Modulariza — una funci&#xF3;n por tarea</a></li>

<li><a href="#progressiveenhancement">Mejoras progresivas</a></li>

<li><a href="#configurations">Permitir configuraciones y traducciones</a></li>

<li><a href="#nesting">Evitar anidamientos excesivos</a></li>

<li><a href="#loops">Optimizaci&#xF3;n de bucles</a></li>

<li><a href="#dom">Mantener los accesos al &#xE1;rbol DOM al m&#xED;nimo</a></li>

<li><a href="#browsercode">No ceder a los caprichos de los navegadores</a></li>

<li><a href="#filter">No confiar en ning&#xFA;n dato</a></li>

<li><a href="#add">A&#xF1;adir funcionalidad con JavaScript, no crear demasiado contenido</a></li>

<li><a href="#libraries">Construir sobre los hombros de gigantes</a></li>

<li><a href="#liveanddev">C&#xF3;digo de desarrollo no es c&#xF3;digo vivo</a></li></ul>



<h2 id="easynames">Llamar a las cosas por su nombre — nombres de variables y funciones f&#xE1;ciles,

cortos y leibles</h2>



<p>No tiene sentido, y asusta un poco, lo frecuente que es encontrarse con variables como <code>x1</code>,

<code>fe2</code> &#xF3; <code>xbqne</code> en JavaScript, &#xF3; — en el otro lado del espectro —

de los nombres de variables como <code>incrementorForMainLoopWhichSpansFromTenToTwenty</code> &#xF3;

<code>createNewMemberIfAgeOverTwentyOneAndMoonIsFull</code>.</p>



<p>Ninguno de esos tiene mucho sentido — los buenos nombres de variables y funciones deberian ser f&#xE1;ciles

de entender, y decirnos de que tratan—, ni m&#xE1;s, ni menos. Una trampa a evitar es casar los valores y la

funcionalidad en los nombres. Una funci&#xF3;n llamada <code>isLegalDrinkingAge()</code> tiene m&#xE1;s sentido que

<code>isOverEighteen()</code>, ya que la edad legal para beber var&#xED;a de pa&#xED;s a pa&#xED;s, y hay m&#xE1;s cosas que el

beber que est&#xE1;n limitadas por edad.</p>



<p>La <strong>notaci&#xF3;n H&#xFA;ngara</strong> es un buen esquema de nombrado de variables a adoptar

(hay <a href="http://en.wikipedia.org/wiki/Identifier_naming_convention#Metadata_and_hybrid_conventions">otros

esquemas de nombrado</a> a considerar), la ventaja es que sabemos lo que algo se supone qu&#xE9; es, y no s&#xF3;lo lo

qu&#xE9; es.</p>



<p>Por ejemplo, si tenemos una variable llamada <code>familyName</code>, y se supone que es una cadena, podr&#xED;amos

haberla escrito como <code>sFamilyName</code> en “notaci&#xF3;n H&#xFA;ngara”. Un objeto llamado <code>member</code>

podr&#xED;a ser <code>oMember</code> y un booleano llamado <code>isLegal</code> podr&#xED;a ser <code>bIsLegal</code>.

Es muy informativo para algunos, pero es algo demasiado para otros — queda en cada uno decidir si se

utiliza &#xF3; no.</p>



<p>Manteniendo los nombres en ingl&#xE9;s es tambi&#xE9;n una buena idea, tambi&#xE9;n. Los lenguajes de programaci&#xF3;n est&#xE1;n en ingl&#xE9;s,

as&#xED; que porqu&#xE9; no mantener esto como un paso l&#xF3;gico para el resto del c&#xF3;digo. Habiendo pasado alg&#xFA;n tiempo depurando

c&#xF3;digo en Coreano y Eslovaco, puedo asegurar que no es muy gracioso para un hablante no nativo.</p>



<p>Hay que mirar al c&#xF3;digo como a una narrativa. Si podemos leer l&#xED;nea por l&#xED;nea, y entender de qu&#xE9; va, perfecto. Si

necesitamos utilizar un bloc de dibujo para seguir el flujo de la l&#xF3;gica, entonces ese c&#xF3;digo necesita alg&#xFA;n trabajo.

Se puede intentar leer Dostojewski si queremos una comparaci&#xF3;n con el mundo real — yo me perd&#xED; en una p&#xE1;gina con

12 nombres rusos, cuatro de los cuales eran seud&#xF3;nimos. No hay que escribir c&#xF3;digo como ese — es m&#xE1;s un arte

que un producto, esto raramente es una buena cosa.</p>



<h2 id="avoidglobals">Evitar globales</h2>



<p>Variables y nombres de funciones globales son una mala idea increible. La raz&#xF3;n para esto es que cada fichero JavaScript

incluido en una p&#xE1;gina funciona en el mismo &#xE1;mbito. Si tenemos variables y funciones globales en nuestro c&#xF3;digo, los

scripts incluidos despu&#xE9;s puede contener las mismas variables y nombres de funciones, que sobreescribir&#xE1;n nuestras

variables o funciones.</p>



<p>Hay varios apa&#xF1;os para evitar utilizar globales — los veremos uno a uno ahora. Digamos que tenemos tres

funciones y una variable como &#xE9;stas:</p>



<pre><code>var current = null;
function init(){...}
function change(){...}
function verify(){...}</code></pre>

<p>Podemos protegerlas de ser sobreescritas utilizando un objeto literal:</p>

<pre><code>var myNameSpace = {
  current:null,
  init:function(){...},
  change:function(){...},
  verify:function(){...}
}</code></pre>

<p>Esto funciona, pero tiene un inconveniente — para llamar a las funciones, o cambiar los valores de la variable

necesitamos siempre ir a trav&#xE9;s del nombre del objeto principal: <code>init()</code> es ahora <code>myNameSpace.init()</code>,

current es <code>myNameSpace.current</code> y as&#xED;. Esto puede resultar molesto y repetitivo.</p>



<p>Es mucho m&#xE1;s sencilo envolver todo en una funci&#xF3;n an&#xF3;nima, y proteger el &#xE1;mbito de esa forma. Eso tambi&#xE9;n significa que

no tenemos que cambiar de sintaxis, desde <code>function name()</code> a <code>name:function()</code>. Este truco se llama

Patr&#xF3;n M&#xF3;dulo (Module Pattern):</p>



<pre><code>myNameSpace = function(){

  var current = null;

  function init(){...}

  function change(){...}

  function verify(){...}

}();</code></pre>



<p>De nuevo, este enfoque no viene sin incovenientes. Ninguno de estas cosas est&#xE1; disponible fuera de la funci&#xF3;n en absoluto.

Si deseamos hacerlas disponible, tenemos que envolver esas cosas en una sentencia <code>return</code>:</p>



<pre><code>myNameSpace = function(){
  var current = null;
  function verify(){...}
  return{
    init:function(){...}
    change:function(){...}
  }
}();</code></pre>



<p>Esto nos lleva de nuevo al punto de partida, en cuanto a vincular de una forma a la otra, y al cambio de sintaxis.

Es preferible hacer algo como lo siguiente (que he llamado “revealing module pattern”):</p>



<pre><code>myNameSpace = function(){
  var current = null;
  function init(){...}
  function change(){...}
  function verify(){...}
  return{
    init:init,
    change:change
  }
}();</code></pre>

<p>En vez de devolver las propiedades y m&#xE9;todos, justamente devolvemos punteros a ellas. Esto hace mas sencullo llamar

a funciones, y acceder a variables, desde otros lugares sin tener que ir a trav&#xE9;s del nombre <code>myNameSpace</code>.</p>

<p>Esto tambi&#xE9;n significa que podemos tener un alias p&#xFA;blico para una funci&#xF3;n, en caso de que queramos tener un

nombre m&#xE1;s largo o descriptivo de uso interno, pero uno m&#xE1;s corto para afuera.:</p>

<pre><code>myNameSpace = function(){
  var current = null;
  function init(){...}
  function change(){...}
  function verify(){...}
  return{
    init:init,
    set:change
  }
}();</code></pre>

<p>Llamando a <code>myNameSpace.set()</code> se invocar&#xE1; el m&#xE9;todo <code>change()</code>.</p>

<p>Si no necesitamos que ninguna de las variables o funciones est&#xE9;n disponibles fuera, simplemente envolvemos toda la

construcci&#xF3;n en otro conjunto de par&#xE9;ntesis, para ejecutarlo sin tener que asignar un nombre a ello:</p>



<pre><code>(function(){

  var current = null;

  function init(){...}

  function change(){...}

  function verify(){...}

})();</code></pre>



<p>Esto mantiene todo en un paquete peque&#xF1;o y ordenado, que es inacesible para el mundo exterior, pero que es muy f&#xE1;cil

compartir variables y funciones dentro de &#xE9;l.</p>



<h2 id="strictstyle">Mantenerse en un estilo de codificaci&#xF3;n estricta</h2>



<p>Los navegadores son muy olvidadizos cuando interpretan la sintaxis de JavaScript. Esto no deber&#xED;a ser una

raz&#xF3;n para escribir c&#xF3;digo descuidado que dependa de los navegadores para funcionar.</p>



<p>La forma m&#xE1;s sencilla de comprobar la calidad sint&#xE1;ctica de nuestro c&#xF3;digo es pasarlo a trav&#xE9;s de

<a href="http://www.jslint.com/">JSLint — una herramienta de validaci&#xF3;n de JavaScript,</a>

que nos da informe detallado sobre warnings en la sintaxis, y su significado. Determinada gente ha escrito

extensiones para editores (por ejemplo, <a href="http://andrewdupont.net/2006/10/01/javascript-tools-textmate-bundle/">JS Tools for TextMate</a>)

que, autom&#xE1;ticamente, chequean el c&#xF3;digo cuando lo guardamos.</p>



<p>JSLint puede ser un poco quisquilloso con los resultados que devuelve, y — como dice su desarrollador

Douglas Crockford — puede herir nuestros sentimientos.Yo puedo decir que escribo mucho mejor c&#xF3;digo

desde que instal&#xE9; la heramienta TextMate JS, y y empez&#xE9; a someter el c&#xF3;digo al escrutinio de JSLint.</p>



<p>C&#xF3;digo v&#xE1;lido y limpio significa menos bugs confusos a resolver, mejor integraci&#xF3;n con otros desarrolladores,

y mejor seguridad en el c&#xF3;digo. Cuando confiamos en hacks para hacer que nuestro c&#xF3;digo funcione, es posible

que exista alg&#xFA;n exploit que utilize esos mismos hacks. Adem&#xE1;s, seg&#xFA;n los hacks se van arreglando en los

navegadores, nuestro c&#xF3;digo dejar&#xE1; de funcionar en subsiguientes versiones del navegador.</p>



<p>C&#xF3;digo v&#xE1;lido tambi&#xE9;n significa que puede ser convertido por scripts a otros formatos — c&#xF3;digo

basado en hacks necesitar&#xE1; de un humano para hacerlo.</p>



<h2 id="comments">Comenta tanto como necesites, pero no m&#xE1;s</h2>



<p>Los comentarios suelen ser mensajes a otros desarrolladores (y a nosotros mismos, si regresamos a nuestro

c&#xF3;digo despu&#xE9;s de un tiempo trabajando en otras cosas). Hay numerosas batallas, con discusiones acaloradas

durante a&#xF1;os, sobre c&#xF3;mo usar los comentarios, el principal argumento sigue siendo que un buen c&#xF3;digo debe

autoexplicarse.</p>



<p>Lo que veo como defecto en este argumente es que las explicaciones son una cosa muy subjetiva —

no puedes esperar que cada desarrollador entienda que hace un determinado c&#xF3;digo partiendo de la misma

explicaci&#xF3;n.</p>



<p class="note">Los comentarios no van a herir a nadie si hacemos las cosas bien. Volveremos sobre esto en

el &#xFA;ltimo punto de este art&#xED;culo, pero digamos que si nuestros comentarios terminan en el c&#xF3;digo que los

usuarios finales ven, entonces algo no est&#xE1; yendo bien.</p>



<p>Una vez m&#xE1;s, el truco es la moderaci&#xF3;n. Hay que comentar cuando hay una cosa importante que decir. Y si

se comenta, es mejor usar la notaci&#xF3;n <code>/* */</code>. Los comentarios de una &#xFA;nica l&#xED;nea utilizando

<code>//</code> pueden ser problem&#xE1;ticos si la gente minimiza nuestro c&#xF3;digo sin eliminar los comentarios,

adem&#xE1;s de que suele ser menos vers&#xE1;til.</p>



<p>Si necesitamos comentar determinadas partes de c&#xF3;digo para utilizarlas m&#xE1;s tarde, o para depurar, hay

un truco muy f&#xE1;cil que podemos usar:</p>



<pre><code>module = function(){
  var current = null;
  function init(){
  };
/*
  function show(){
    current = 1;
  };
  function hide(){
    show();
  };
*/
  return{init:init,show:show,current:current}
}();</code></pre>



<p>Si se a&#xF1;ade un doble barra delante del */ de cierre del comentario, se puede comentar y descomentar todo

el bloque simplemente quitando o poniendo una barra delante del /* del inicio del comentario:</p>

<pre><code>module = function(){
  var current = null;
  function init(){
  };
/*
  function show(){
    current = 1;
  };
  function hide(){
    show();
  };
// */
  return{init:init,show:show,current:current}
}();</code></pre>

<p>Con el c&#xF3;digo seg&#xFA;n est&#xE1; en el bloque de arriba, se se a&#xF1;ade una / delante del /*, har&#xE1; que el comentario

que abarca varias l&#xED;neas se convierta en dos comentarios de una l&#xED;nea cada uno, “descomentando”

todo el c&#xF3;digo entre medias y haciendo que se ejecute. Quitando esa / el comentario volver&#xE1; a ocultar todo el

bloque.</p>



<p class="note">Para grandes aplicaciones, la documentaci&#xF3;n de comentarios en <a href="http://java.sun.com/j2se/javadoc/writingdoccomments/">JavaDoc style</a> tiene mucho sentido —

se planta la semilla de la documentaci&#xF3;n de un producto escribiendo c&#xF3;digo. El &#xE9;xito de Yahoo User Interface

Library es en parte atribuible a esto, e incluso hay <a href="http://yuiblog.com/blog/2008/12/08/yuidoc/">

una herramiento que nos permite construir la misma documentaci&#xF3;n para nuestros productos</a>.

No hay que preocuparse mucho acerca de esto hasta que estemos mas experimentados con JavaScript —

JavaDoc se menciona para completar.</p>



<h2 id="mixing">Evitar mezclas con otras tecnologias</h2>



<p>Aunque sea posible crear todo lo que necesitemos en una p&#xE1;gina web utilizando JavaScript y DOM, no es

necesariamente la forma m&#xE1;s efectiva de hacerlo. El c&#xF3;digo siguiente pone un borde rojo sobre cada campo de

entrada en un formulario, mientras que su clase es “obligatoria” y no hay nada en ella.</p>

<pre><code>var f = document.getElementById(&#39;mainform&#39;);
var inputs = f.getElementsByTagName(&#39;input&#39;);
for(var i=0,j=inputs.length;i&lt;j;i++){
  if(inputs[i].className === &#39;mandatory&#39; &amp;&amp;
     inputs[i].value === &#39;&#39;){
    inputs[i].style.borderColor = &#39;#f00&#39;;
    inputs[i].style.borderStyle = &#39;solid&#39;;
    inputs[i].style.borderWidth = &#39;1px&#39;;
  }
}</code></pre>

<p>Esto funciona, pero desde luego, si necesitamos hacer cambios m&#xE1;s tarde a estos estilos, tenemos que ir

a trav&#xE9;s de todo el c&#xF3;digo JavaScript, y aplicar los cambios ah&#xED;. Cuanto m&#xE1;s complejo es es cambio, mas complejo

es la modificaci&#xF3;n. Adem&#xE1;s, no todos los desarrolladores JavaScript es competente o interesado en CSS, lo que

significa que habr&#xE1; un mont&#xF3;n de idas y venidas hasta que la salida correcta se consiga. Si a&#xF1;adimos una

class llamada “error” al elemento cuando &#xE9;ste sea un error, podemos asegurarnos que toda la

informaci&#xF3;n se mantiene dentro del CSS, que es m&#xE1;s apropiado:</p>

<pre><code>var f = document.getElementById(&#39;mainform&#39;);
var inputs = f.getElementsByTagName(&#39;input&#39;);
for(var i=0,j=inputs.length;i&lt;j;i++){
  if(inputs[i].className === &#39;mandatory&#39; &amp;&amp;
     inputs[i].value === &#39;&#39;){
    inputs[i].className += &#39; error&#39;;
  }
}</code></pre>

<p>Esto es mucho m&#xE1;s eficiente, ya que CSS se pens&#xF3; para aplicarse en cascada por todo el documento. Decir,

por ejemplo, que necesitamos ocultar todos los DIV con una cierta class en un documento. Podr&#xED;amos buscar todos

los DIV, chequar su class, y entonces cambiar su estilo. En los navegadores m&#xE1;s modernos podemos utilizar un

motor de selecci&#xF3;n sobre CSS, y entonces alterar el estilo. De todas formas, las forma m&#xE1;s sencilla es utilizar

JavaScript para poner un class en el elemento padre, y utilizar la sintaxis a lo largo de las lineas de

<code>element.triggerclass div.selectorclass{}</code> en las CSS. Hay que dejar el trabajo de ocultar los DIV

al dise&#xF1;ador de las CSS, ya que &#xE9;l sabr&#xE1; cu&#xE1;l es la mejor forma para hacerlo.</p>



<h2 id="shortcut">Utilizar notaciones cortas cuando tenga sentido</h2>



<p>Las notaciones cortas es un truco: por una parte nos permite tener c&#xF3;digo m&#xE1;s peque&#xF1;o, pero por

otra parte se hace m&#xE1;s duro para los desarrolladores que parten de nuestro c&#xF3;digo, ya que pueden no

conocer los accesos directos.</p>



<p>Los objetos son, probablemente, la cosa m&#xE1;s vers&#xE1;til que hay en JavaScript. La forma de la vieja escuela

era escribirlos m&#xE1;s &#xF3; menos as&#xED;:</p>

<pre><code>var cow = new Object();
cow.colour = &#39;brown&#39;;
cow.commonQuestion = &#39;What now?&#39;;
cow.moo = function(){
  console.log(&#39;moo&#39;);
}
cow.feet = 4;
cow.accordingToLarson = &#39;will take over the world&#39;;</code></pre>

<p>No obstante, esto implica que hay que repetir el nombre del objeto para cada propiedad &#xF3; nombre, que puede

llegar a ser molesto. En vez de eso, tiene mucho m&#xE1;s sentido tener la siguiente construcci&#xF3;n, tambi&#xE9;n llamada

objeto literal:</p>

<pre><code>var cow = {
  colour:&#39;brown&#39;,
  commonQuestion:&#39;What now?&#39;,
  moo:function(){
    console.log(&#39;moo);
  },
  feet:4,
  accordingToLarson:&#39;will take over the world&#39;
};</code></pre>

<p>Los arrays son un punto confuso en JavaScript. Se pueden encontrar un mont&#xF3;n de scripts definiendo un

Array de la siguiente forma: &lt;/pp&gt;

<pre><code>var aweSomeBands = new Array();
aweSomeBands[0] = &#39;Bad Religion&#39;;
aweSomeBands[1] = &#39;Dropkick Murphys&#39;;
aweSomeBands[2] = &#39;Flogging Molly&#39;;
aweSomeBands[3] = &#39;Red Hot Chili Peppers&#39;;
aweSomeBands[4] = &#39;Pornophonique&#39;;</code></pre>

<p>Aqu&#xED; se pierde mucho por repetici&#xF3;n, se puede escribir mejor y m&#xE1;s r&#xE1;pido utilizando los <code>[ ]</code>:</p>

<pre><code>var aweSomeBands = [
  &#39;Bad Religion&#39;,
  &#39;Dropkick Murphys&#39;,
  &#39;Flogging Molly&#39;,
  &#39;Red Hot Chili Peppers&#39;,
  &#39;Pornophonique&#39;
];</code></pre>

<p>En alguno tutoriales se ve el t&#xE9;rmino “arrays asociativos”. Esto es un nombre equivocado, ya que

los arrays con propiedades en vez de &#xED;ndices son objetos actualmente, y deberian ser definidos como tal.</p>

<p>Las condiciones se pueden acortar utilizando la “notacion ternaria”. Por ejemplo, el siguiente

c&#xF3;digo define una variable como 1 &#xF3; -1, dependiendo del valor de otra variable.</p>

<pre><code>var direction;
if(x &gt; 100){
  direction = 1;
} else {
  direction = -1;
}</code></pre>

<p>Esto se puede acortar a una &#xFA;nica l&#xED;nea:</p>



<pre><code>var direction = (x &gt; 100) ? 1 : -1;</code></pre>



<p>Cualquier cosa antes de la interrogaci&#xF3;n es la condici&#xF3;n; el valor inmediatamente despu&#xE9;s es el caso

verdadero, y el caso falso es el que va despu&#xE9;s de los dos puntos. La notaci&#xF3;n terciaria se puede anidar,

pero no es aconsejable si se desea dejar las cosas legibles.</p>



<p>Otra situaci&#xF3;n com&#xFA;n en JavaScript es tener un valor predefinido para una variable si esta no est&#xE1;

definida:</p>

<pre><code>if(v){
  var x = v;
} else {
  var x = 10;
}</code></pre>

<p>Una notaci&#xF3;n que acorta esto son las dos ||:</p>

<pre><code>var x = v || 10;</code></pre>

<p>Este c&#xF3;digo da autom&#xE1;ticamente a <code>x</code> el valor <code>10</code> si <code>v</code> no est&#xE1;

definida — as&#xED; de simple.</p>

<h2 id="#modules">Modulariza — una funci&#xF3;n por tarea</h2>

<p>Es una buena pr&#xE1;ctica en la programaci&#xF3;n en general — estar seguro de crear funciones que terminan

un trabajo, y a la vez que sean f&#xE1;ciles de depurar y cambiar por otros desarrolladores, sin tener que escanear

todo el c&#xF3;digo para saber que trozos de c&#xF3;digo hacen que funci&#xF3;n.</p>

<p>Esto tambi&#xE9;n implica crear funciones de ayuda para las tareas m&#xE1;s comunes. Si nos encontramos haciendo las

mismas cosas en diferentes funciones, entonces, es una buena idea crear una funci&#xF3;n gen&#xE9;rica con ese c&#xF3;digo,

y reutilizarla cuando sea necesario.</p>



<p>Adem&#xE1;s, tiene m&#xE1;s sentido sacar c&#xF3;digo fuera que utilizar ifs dentro de la propia funci&#xF3;n. Por ejemplo,

digamos que queremos escribir una funci&#xF3;n de ayuda para crear nuevos enlaces. Podr&#xED;amos hacerlo as&#xED;:</p>

<pre><code>function addLink(text,url,parentElement){
  var newLink = document.createElement(&#39;a&#39;);
  newLink.setAttribute(&#39;href&#39;,url);
  newLink.appendChild(document.createTextNode(text));
  parentElement.appendChild(newLink);
}</code></pre>

<p>Esto funciona, pero podemos encontrarnos teniendo que a&#xF1;adir diferentes atributos dependiendo de qu&#xE9;

elementos queremos aplicar al enlace. Por ejemplo: </p>

<pre><code>function addLink(text,url,parentElement){
  var newLink = document.createElement(&#39;a&#39;);
  newLink.setAttribute(&#39;href&#39;,url);
  newLink.appendChild(document.createTextNode(text));
  if(parentElement.id === &#39;menu&#39;){
    newLink.className = &#39;menu-item&#39;;
  }
  if(url.indexOf(&#39;mailto:&#39;)!==-1){
    newLink.className = &#39;mail&#39;;
  }
  parentElement.appendChild(newLink);
}</code></pre>

<p>Esto hace que la funci&#xF3;n sea m&#xE1;s espec&#xED;fica y dif&#xED;cil de aplicar de diferentes situaciones. Una alternativa

m&#xE1;s sencilla es devolver el enlace y recubrir los casos extras en las funciones en las que se necesiten.

Esto convierte a <code>addLink()</code> en algo m&#xE1;s gen&#xE9;rico, <code>createLink()</code>:</p>

<pre><code>function createLink(text,url){
  var newLink = document.createElement(&#39;a&#39;);
  newLink.setAttribute(&#39;href&#39;,url);
  newLink.appendChild(document.createTextNode(text));
  return newLink;
}

function createMenu(){
  var menu = document.getElementById(&#39;menu&#39;);
  var items = [
    {t:&#39;Home&#39;,u:&#39;index.html&#39;},
    {t:&#39;Sales&#39;,u:&#39;sales.html&#39;},
    {t:&#39;Contact&#39;,u:&#39;contact.html&#39;}
  ];
  for(var i=0;i&lt;items.length;i++){
    var item = createLink(items.t,items.u);
    item.className = &#39;menu-item&#39;;
    menu.appendChild(item);
  }
}</code></pre>

<p>Teniendo que todas nuestras funciones hacen s&#xF3;lo una cosa, podemos tener una funcion principal,

<code>init()</code>, para nuestra aplicaci&#xF3;n, que contenga toda la estructura de la aplicaci&#xF3;n. De esta forma

podemos cambiar f&#xE1;cilmente nuestra aplicaci&#xF3;n, y quitar funcionalidad sin tener que recorrer el c&#xF3;digo para

ver las dependencias.</p>

<h2 id="progressiveenhancement">Mejoras progresivas</h2>

<p>La Mejora Progresiva es una forma de desarrollo que se explica al detalle en

<a href="http://dev.opera.com/articles/view/graceful-degradation-progressive-enhancement/">Degradaci&#xF3;n

elegante frente a mejora progresiva</a>. En esencia, lo que deber&#xED;amos hacer es escribir c&#xF3;digo que funcione

independientemente de la tecnolog&#xED;a disponible. En el caso de JavaScript, esto significa que cuando no est&#xE1;

disponible (por ejemplo sobre BlackBerry, &#xF3; quiz&#xE1;s por alguna pol&#xED;tica de seguridad), nuestras p&#xE1;ginas web

deber&#xED;an permitir a los usuarios alcanzar un determinado objetivo, pero no bloquearlos por la falta de

JavaScript, que pueden querer tener activo &#xF3; no.</p>

<p>Es asombroso cuantas veces constru&#xED;mos soluciones que incorporan grandes cantidades de c&#xF3;digo JavaScript

(bastante enrevesado encima) para problemas que se pueden resolver f&#xE1;cilmente sin el. Un ejemplo, un cuadro

de b&#xFA;squeda en una p&#xE1;gina que permit&#xED;a buscar diferentes datos: web, im&#xE1;genes, news, etc.</p>

<p>En la versi&#xF3;n original, las diferentes opciones de b&#xFA;squedas eran enlaces a los que se sobreescrib&#xED;a

el atributo <code>action</code> del formulario, para que apuntara a diferentes scripts en la parte del servidor

para hacer las b&#xFA;squedas.</p>



<p>El problema era que si JavaScript estaba deshabilitado, los enlaces se segu&#xED;an mostrando, pero cada b&#xFA;squeda

retornaba los resultados de b&#xFA;squeda sobre la web, ya que la acci&#xF3;n del formulario no se cambiaba nunca. La

soluci&#xF3;n era bastante simple: en vez de los enlaces, se mostraban las opciones como radio buttons, y se

hac&#xED;a el cambio en las diferentes formas de b&#xFA;squedas utilizando un script en la parte servidora.</p>



<p>Esto no solamente hace que la b&#xFA;squeda sea correcta para cualquiera, sino que adem&#xE1;s hace sencillo el

conocer cuantos usuarios utilizan qu&#xE9; opciones. Mediante la elecci&#xF3;n de la construcci&#xF3;n HTML correcta,

logramos deshacernos tanto del c&#xF3;digo JavaScript para cambiar la acci&#xF3;n del formulario, como de los scripts

de cambio de b&#xFA;squedas, y se hace que funcione para cada usuario que est&#xE9; ah&#xED; afuera

— independiente del entorno.</p>



<h2 id="configurations">Permitir configuraciones y traducciones</h2>



<p>Una de las mejores cosas para mantener nuestro c&#xF3;digo mantenible y limpio es crear un objeto de

configuraci&#xF3;n que contenga todas aquellas cosas que se pueden cambiar con el tiempo. Esto incluye cualquier

texto usado en los elementos que creamos (incluyendo valores de botones y texto alternativo para im&#xE1;genes),

clases CSS, nombres de ID, y par&#xE1;metros en general del interfaz que estamos construyendo.</p>



<p>Por ejemplo, <a href="http://icant.co.uk/easy-youtube">Easy YouTube player</a> tiene el siguiente

objeto de configuraci&#xF3;n:</p>

<pre><code>/*
  This is the configuration of the player. Most likely you will
  never have to change anything here, but it is good to be able
  to, isn&#39;t it?
*/
config = {
  CSS:{
    /*
      IDs used in the document. The script will get access to
      the different elements of the player with these IDs, so
      if you change them in the HTML below, make sure to also
      change the name here!
    */
    IDs:{
      container:&#39;eytp-maincontainer&#39;,
      canvas:&#39;eytp-playercanvas&#39;,
      player:&#39;eytp-player&#39;,
      controls:&#39;eytp-controls&#39;,

      volumeField:&#39;eytp-volume&#39;,
      volumeBar:&#39;eytp-volumebar&#39;,

      playerForm:&#39;eytp-playerform&#39;,
      urlField:&#39;eytp-url&#39;,

      sizeControl:&#39;eytp-sizecontrol&#39;,

      searchField:&#39;eytp-searchfield&#39;,
      searchForm:&#39;eytp-search&#39;,
      searchOutput:&#39;eytp-searchoutput&#39;
      /*
        Notice there should never be a comma after the last
        entry in the list as otherwise MSIE will throw  a fit!
      */
    },
    /*
      These are the names of the CSS classes, the player adds
      dynamically to thevolume bar in certain
      situations.
    */
    classes:{
      maxvolume:&#39;maxed&#39;,
      disabled:&#39;disabled&#39;
      /*
        Notice there should never be a comma after the last
        entry in the list as otherwise MSIE will throw  a fit!
      */
    }
  },
  /*
    That is the end of the CSS definitions, from here on
    you can change settings of the player itself.
  */
  application:{
    /*
      The YouTube API base URL. This changed during development og this,
      so I thought it useful to make it a parameter.
    */
    youtubeAPI:&#39;http://gdata.youtube.com/apiplayer/cl.swf&#39;,
    /*
      The YouTube Developer key,
      please replace this with your own when you host the player!!!!!
    */
    devkey:&#39;AI39si7d...Y9fu_cQ&#39;,
    /*
      The volume increase/decrease in percent and the volume message
      shown in a hidden form field (for screen readers). The $x in the
      message will be replaced with the real value.
    */
    volumeChange:10,
    volumeMessage:&#39;volume $x percent&#39;,
    /*
      Amount of search results and the error message should there
      be no reults.
    */
    searchResults:6,
    loadingMessage:&#39;Searching, please wait&#39;,
    noVideosFoundMessage:&#39;No videos found : (&#39;,
    /*
      Amount of seconds to repeat when the user hits the rewind
      button.
    */
    secondsToRepeat:10,
    /*
      Movie dimensions.
    */
    movieWidth:400,
    movieHeight:300
    /*
      Notice there should never be a comma after the last
      entry in the list as otherwise MSIE will throw  a fit!
    */
  }
}</code></pre>

<p>Si tenemos esto como una parte un m&#xF3;dulo, y deseamos hacerlo p&#xFA;blico, tenemos que permitir a los

desarrolladores el sobreescribir s&#xF3;lamente aquello que necesitan antes de inicializar nuestro m&#xF3;dulo.</p>

<p>Es de suma importancia mantener nuestro c&#xF3;digo simple, evitando la necesidad, para futuros mantenedores

de &#xE9;l, el tener que leer todo nuestro c&#xF3;digo para encontrar donde necesitan hacer un cambio. Si esto no es

obvio, la soluci&#xF3;n ser&#xE1; abandonar ese c&#xF3;digo &#xF3; hackearlo. Las soluciones hackeadas son imposibles de

parchear si necesitamos actualizarlas, e impiden la reutilizaci&#xF3;n de c&#xF3;digo.</p>



<h2 id="nesting">Evitar anidamientos excesivos</h2>



<p>Los anidamientos en el c&#xF3;digo explican mejor su l&#xF3;gica, y hacen mucho m&#xE1;s sencillo su lectura, pero

excesivos anidamientos pueden ser dif&#xED;ciles de seguir. Los lectores de nuestro c&#xF3;digo no deber&#xED;an tener que

hacer scroll horizontal, o estar&#xE1;n bastante confundidos si sus editores tiene que partir las l&#xED;neas largas

(esto hace discutible nuestros esfuerzos por sangrar el c&#xF3;digo).</p>



<p>El otro problema con el anidamiento son los nombres de variables y bucles. Como normalmente empezamos

nuestro primer bucle con la variable <code>i</code>, despu&#xE9;s tendremos que seguir con j, k, l, y as&#xED;.

Esto se hace confuso r&#xE1;pidamente:</p>

<pre><code>function renderProfiles(o){
  var out = document.getElementById(&#x2018;profiles&#x2019;);
  for(var i=0;i&lt;o.members.length;i++){
    var ul = document.createElement(&#x2018;ul&#x2019;);
    var li = document.createElement(&#x2018;li&#x2019;);
    li.appendChild(document.createTextNode(o.members[i].name));
    var nestedul = document.createElement(&#x2018;ul&#x2019;);
    for(var j=0;j&lt;o.members[i].data.length;j++){
      var datali = document.createElement(&#x2018;li&#x2019;);
      datali.appendChild(
        document.createTextNode(
          o.members[i].data[j].label + &#x2018; &#x2018; +
          o.members[i].data[j].value
        )
      );
      nestedul.appendChild(datali);
    }
    li.appendChild(nestedul);
  }
  out.appendChild(ul);
}</code></pre>

<p>Como hemos usado nombres g&#xE9;nericos de variables — de usar y tirar — como <code>ul</code> y

<code>li</code>, pues necesitamos <code>nestedul</code> y <code>datali</code> para los items anidados.

Si la lista anidada fuera m&#xE1;s profunda, necesitar&#xED;a m&#xE1;s nombres de variables, y as&#xED;. Tiene m&#xE1;s sentido

poner la tarea de crear listas anidadas para cada miembro en su propia funci&#xF3;n, y llamarlas con los datos

correctos. Esto previene, adem&#xE1;s, tener bucles dentro de bucles. La funci&#xF3;n gen&#xE9;rica

<code>addMemberData()</code> tiene buena pinta, y es probable que la necesitemos en otras ocasiones. Teniendo

esto en cuenta, se podr&#xED;a reescribir el c&#xF3;digo como sigue:</p>


<pre><code>function renderProfiles(o){
  var out = document.getElementById(&#x2018;profiles&#x2019;);
  for(var i=0;i&lt;o.members.length;i++){
    var ul = document.createElement(&#x2018;ul&#x2019;);
    var li = document.createElement(&#x2018;li&#x2019;);
    li.appendChild(document.createTextNode(data.members[i].name));
    li.appendChild(addMemberData(o.members[i]));
  }
  out.appendChild(ul);
}
function addMemberData(member){
  var ul = document.createElement(&#x2018;ul&#x2019;);
  for(var i=0;i&lt;member.data.length;i++){
    var li = document.createElement(&#x2018;li&#x2019;);
    li.appendChild(
      document.createTextNode(
        member.data[i].label + &#x2018; &#x2018; +
        member.data[i].value
      )
    );
  }
  ul.appendChild(li);
  return ul;
}</code></pre>

<h2 id="loops">Optimizaci&#xF3;n de bucles</h2>

<p>Los bucles pueden ser muy lentos si no se hacen bien. Uno de los errores m&#xE1;s comunes es leer el

atributo length de un array en cada iteraci&#xF3;n:</p>

<pre><code>var names = [&#39;George&#39;,&#39;Ringo&#39;,&#39;Paul&#39;,&#39;John&#39;];
for(var i=0;i&lt;names.length;i++){
  doSomeThingWith(names[i]);
}</code></pre>

<p>Esto significa que en cada iteraci&#xF3;n del bucle, JavaScript necesita calcular la longitud del array.

Se puede evitar esto almacenando la longitud en una variable:</p>



<pre><code>var names = [&#39;George&#39;,&#39;Ringo&#39;,&#39;Paul&#39;,&#39;John&#39;];
var all = names.length;
for(var i=0;i&lt;all;i++){
  doSomeThingWith(names[i]);
}</code></pre>

<p>Una forma m&#xE1;s corta de hacer esto mismo es crear una segunda variable en la parte previa del bucle:</p>

<pre><code>var names = [&#39;George&#39;,&#39;Ringo&#39;,&#39;Paul&#39;,&#39;John&#39;];
for(var i=0,j=names.length;i&lt;j;i++){
  doSomeThingWith(names[i]);
}</code></pre>

<p>Otra cosa a tener en cuenta es que debemos mantener fuera de los bucles c&#xF3;digo computacionalmente pesado.

Esto include expresiones regulares, y, — m&#xE1;s importante —, manipulaci&#xF3;n del &#xE1;rbol DOM. Podemos

crear nodos DOM en los bucles, pero evitar insertarlos en el documento. Podemos encontrar m&#xE1;s sobre buenas

pr&#xE1;cticas en los &#xE1;rboles DOM en la siguiente secci&#xF3;n.</p>

<h2 id="dom">Mantener los accesos al &#xE1;rbol DOM al m&#xED;nimo</h2>

<p>Acceder al &#xE1;rbol DOM en los navegadores es algo bastante caro. El &#xE1;rbol DOM es una API bastante compleja,

y el renderizado puede llevarles bastante tiempo a los navegadores. Se puede ver esto cuando estamos viendo

complejas aplicaciones web, y nuestro ordenador est&#xE1; al m&#xE1;ximo con otros trabajos — los cambios

tardan bastante, &#xF3; se pueden mostrar a la mitad mientras se terminan de cargar.</p>

<p>Para asegurarnos de que nuestro c&#xF3;digo es r&#xE1;pido y no ralentiza al navegador, hay que intentar mantener

los accesos al &#xE1;rbol DOM al m&#xED;nimo. En vez de crear y mostrar elementos constantemente, hay que tener una

funci&#xF3;n que modifique el &#xE1;rbol DOM, y hay que llamar a esa funci&#xF3;n al final de nuestro proceso de generaci&#xF3;n,

para que el navegador s&#xF3;lo tenga que renderizar una vez, y no de forma cont&#xED;nua.</p>



<h2 id="browsercode">No ceder a los caprichos de los navegadores</h2>



<p>Escribir c&#xF3;digo espec&#xED;fico para un determinado navegador es una v&#xED;a segura para que nuestro c&#xF3;digo sea

dif&#xED;cil de mantener, y de que se haga obsoleto r&#xE1;pidamente. Si buscamos en la web, encontraremos una cantidad

de scripts que funcionaban en un determinado navegador, y dejaban de funcionar tan pronto como una nueva

versi&#xF3;n del navegador ve&#xED;a la luz.</p>



<p>Esto es perder tiempo y esfuerzo — deber&#xED;amos construir c&#xF3;digo basandonos en standards, c&#xF3;mo los

esbozados en estos art&#xED;culos, pero no solamente para un navegador. La web es para todos, no solamente para

un grupo de usuarios de &#xE9;lite, con una configuraci&#xF3;n determinada. Y ya que el mercado de los navegadores

se mueve r&#xE1;pidamente, cada dos por tres nos tocar&#xED;a arreglar nuestro c&#xF3;digo. Esto,

ni es efectivo, ni gracioso.</p>



<p>Si algo incre&#xED;ble funciona s&#xF3;lo en un navegador, y tenemos que usarlo, deber&#xED;amos poner ese c&#xF3;digo en

un fichero espec&#xED;fico, y llamarlo con el nombre del navegador y su versi&#xF3;n. Esto hace que podamos encontrar

y eliminar funcionalidad m&#xE1;s f&#xE1;cilmente, si el navegador o su versi&#xF3;n se quedan obsoletos.</p>



<h2 id="filter">No confiar en ning&#xFA;n dato</h2>



<p>Uno de los puntos principales a tener en cuenta cuando se habla sobre c&#xF3;digo y seguridad de datos, es

no confiar en ning&#xFA;n dato. No es solamente sobre gente malvada que quiere reventar nuestros sistemas; esto

comienza con la usabilidad. Los usuario teclear&#xE1;n datos incorrectos todo el rato. No porque sean est&#xFA;pidos,

sino porque est&#xE1;n ocupados, distraidos, o porque nuestras instrucciones les confunden. Por ejemplo, acabo

de reservar una habitaci&#xF3;n en un hotel por un mes en vez de por seis dias, por meter un n&#xFA;mero equivocado

… me considero bastante inteligente.</p>



<p>En pocas palabras, aseguremonos que todos los datos que llegan a nuestros sistema son claros y limpios, y

son exactamente los que necesitamos. Esto es muy importante en el backend, cuando se sacan los parametros

de la URL. En JavaScript, es muy importante testear el tipo de los parametros enviados a las funciones

(utilizando <code>typeof</code>). Lo siguiente podr&#xED;a ser un error si <code>members</code> no es un Array

(por ejemplo, para una cadena se crear&#xED;a una lista por cada caracter en la cadena):</p>

<pre><code>function buildMemberList(members){
  var all = members.length;
  var ul = document.createElement(&#39;ul&#39;);
  for(var i=0;i&lt;all;i++){
    var li = document.createElement(&#39;li&#39;);
    li.appendChild(document.createTextNode(members[i].name));
    ul.appendChild(li);
  }
  return ul;
}</code></pre>

<p>Para hacer que esto funcione, habr&#xED;a que chequear el tipo de <code>members</code> y asegurarnos de

que es un array:</p>

<pre><code>function buildMemberList(members){
  if(typeof members === &#39;object&#39; &amp;&amp;
     typeof members.slice === &#39;function&#39;){
    var all = members.length;
    var ul = document.createElement(&#39;ul&#39;);
    for(var i=0;i&lt;all;i++){
      var li = document.createElement(&#39;li&#39;);
      li.appendChild(document.createTextNode(members[i].name));
      ul.appendChild(li);
    }
    return ul;
  }
}</code></pre>

<p>Los arrays son complicados, porque nos dicen que son objetos. Para asegurarnos, chequeamos uno de los

m&#xE9;todos que s&#xF3;lo tienen los arrays.</p>



<p>Otra pr&#xE1;ctica muy insegura es leer informaci&#xF3;n del &#xE1;rbol DOM, y utilizarla sin m&#xE1;s comprobaciones. Por ejemplo,

una vez tuve que depurar un c&#xF3;digo que provocaba que la funcionalidad ofrecida mediante JavaScript fallase. El

c&#xF3;digo que causaba esto — por razones desconocidas — le&#xED;a un nombre de usuario del innerHTML de

un elemento de la p&#xE1;gina, y llamaba a una funci&#xF3;n con ese dato como par&#xE1;metro. Como el nombre de usuario pod&#xED;a

ser cualquier car&#xE1;cter UTF-8, pod&#xED;a incluir simples y dobles comillas, terminando cualquier cadena y considerando

el resto como datos err&#xF3;neos. Adem&#xE1;s. cualquier usuario que cambiase el HTML utilizando herramientas como

Firebug &#xF3; Opera Dragon Fly podr&#xED;a cambiar el nombre de usuario, e inyectar ese nombre en nuestras funciones.</p>



<p>Lo mismo aplica a las formas validaci&#xF3;n &#xFA;nicamente en el lado cliente. Una vez me suscrib&#xED; con una direcci&#xF3;n

de correo electr&#xF3;nico inexistente, reescribiendo una select para utilizar otra opci&#xF3;n. Como el formulario

no se chequeaba en la parte servidora, el proceso finaliz&#xF3; correctamente, sin problemas. </p>



<p>Para los accesos DOM, chequear que el elemento que intentamos encontrar y alterar est&#xE1; realmente disponible,

y es lo que nosotros esperamos — de otra forma el c&#xF3;digo podr&#xED;a fallar, o provocar errores en el

renderizado. </p>



<h2 id="add">A&#xF1;adir funcionalidad con JavaScript, no crear demasiado contenido</h2>



<p>Como se ha podido ver en algunos de los ejemplos, construir una gran cantidad de HTML en JavaScript puede

ser una tarea de enormes proporciones, incluso complicada. Especialmente en Internet Explorer, donde podemos

tener todos tipo de problemas alterando el documento mientras se est&#xE1; cargando la p&#xE1;gina, o manipulando el

contenido (echar un vistazo a “operation aborted error” en

<a href="http://www.google.com">Google</a> para una poca de miseria) con <code>innerHTML</code>.</p>



<p>En t&#xE9;rminos del mantenimiento de la p&#xE1;gina es una idea horriblemente mala el crear una gran cantidad de marcas

HTML, ya que no todos los posibles mantenedores pueden tener el nivel necesario para entenderlo, cosa que podr&#xED;a

ensuciar nuestro c&#xF3;digo.<p>



<p>Me he dado cuenta que cuando tengo que construir una aplicaci&#xF3;n que es muy dependiente de JavaScript, utilizar

una plantilla HTML, y cargar esa plantilla v&#xED;a Ajax, es algo que tiene mucho m&#xE1;s sentido. De esa forma, los

mantenedores pueden alterar la estructura HTML, y los textos m&#xE1;s importantes sin tener que interferir con nuestro

c&#xF3;digo JavaScript. La &#xFA;nica pega es que hay que decirles qu&#xE9; IDs se necesitan, y si hay ciertas construcciones

HTML que tienen que estar en el orden que hemos definido. Esto lo podemos hacer con comentarios HTML (y luego

eliminar los comentarios cuando cargamos la plantilla. Ver el c&#xF3;digo de

<a href="http://icant.co.uk/easy-youtube/template.html">Easy YouTube template</a> para ver un ejemplo.</p>



<p>En el script, se carga la plantilla cuando el contenedor HTML adecuado est&#xE1; disponible, y se asigna el

evento handlers al final del m&#xE9;todo <code>setupPlayer()</code>:</p>

<pre><code>var playercontainer = document.getElementById(&#39;easyyoutubeplayer&#39;);
if(playercontainer){
  ajax(&#39;template.html&#39;);
};

function ajax(url){
  var request;
  try{
    request = new XMLHttpRequest();
  }catch(error){
    try{
      request = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
    }catch(error){
      return true;
    }
  }
  request.open(&#39;get&#39;,url,true);
  request.onreadystatechange = function(){
    if(request.readyState == 4){
      if(request.status){
        if(request.status === 200 || request.status === 304){
          if(url === &#39;template.html&#39;){
            setupPlayer(request.responseText);
          }
        }
      }else{
        alert(&#39;Error: Could not find template...&#39;);
      }
    }
  };
  request.setRequestHeader(&#39;If-Modified-Since&#39;,&#39;Wed, 05 Apr 2006 00:00:00  GMT&#39;);
  request.send(null);
};</code></pre>



<p>De esta forma, se permite a la gente traducir y cambiar el player de la forma que deseen, sin tener que

alterar el c&#xF3;digo JavaScript.</p>



<h2 id="libraries">Construir sobre los hombros de gigantes</h2>



<p>No es ninguna mentira que durante los &#xFA;ltimos a&#xF1;os, las librer&#xED;as y frameworks de JavaScript han copado

el mercado del desarrollo web. Y no es mala cosa — si se utilizan de forma correcta. Las buenas

librer&#xED;as de JavaScript desean hacer una cosa y s&#xF3;lo una cosa: hacer mas sencilla la vida de los desarrolladores,

bordeando las inconsistencias de los navegadores, y parcheando determinados problemas de &#xE9;stos. Las librer&#xED;as

de JavaScript nos proveen de una l&#xED;nea base de funcionalidad sobre la que construir.</p>



<p>Es una buena idea aprender inicialmente JavaScript sin librer&#xED;as, para que podemaos saber c&#xF3;mo van las cosas,

pero deberemos hacer uso de las librer&#xED;as JavaScript cuando desarrollemos sitios web. Habr&#xE1; menos problemas con

los que lidiar, y al menos, los fallos que aparezcan, se podr&#xE1;n reproducir — no ser&#xE1;n fallos aleatorios

de los navegadores.</p>



<p>Personalmente, mi librer&#xED;a favorita es <a href="http://developer.yahoo.com/yui">Yahoo User Interface

library (YUI)</a>, seguida de <a href="http://jquery.com/">jQuery</a>, <a href="http://www.dojotoolkit.org/">

Dojo</a> y <a href="http://www.prototypejs.org/">Prototype</a>, pero hay otras docenas de buenas librer&#xED;as ahi afuera,

entre las que debemos encontrar la que mejora nuestros productos.</p>



<p>Aunque todas las librer&#xED;as trabajan conjuntamente bien, no es una buena idea utilizar varias de ellas en

el mismo proyecto. Esto s&#xF3;lo nos da un nivel superfluo de complejidad y de mantenimiento.</p>



<h2 id="liveanddev">C&#xF3;digo de desarrollo no es c&#xF3;digo vivo</h2>



<p>Este &#xFA;ltimo punto no es acerca de JavaScript en si, sino de c&#xF3;mo encaja en el resto de la estrategia de

desarrollo. Como cualquier cambio en JavaScript tiene un efecto inmediato en el rendimiento y en la funcionalidad

de nuestras aplicaciones web, es muy tentador optimizar nuestro c&#xF3;digo sin tener en cuenta posibles consecuencias

para el mantenimiento.</p>



<p>Hay una gran cantidad de trucos bastante inteligentes que se pueden aplicar a JavaScript para mejorar su

rendimiento. Pero muchos de ellos vienen con el inconveniente de que nuestro c&#xF3;digo va a ser m&#xE1;s complicado

de entender y modificar.</p>



<p>Para escribir un c&#xF3;digo JavaScript seguro y funcional, tenemos que romper ese ciclo, y dejar de optimizar

el c&#xF3;digo para las m&#xE1;quinas, en vez de para desarrolladores. Adem&#xE1;s — es algo que es muy com&#xFA;n en otros

lenguajes, pero no muy conocido entre desarrolladores JavaScript. Un script puede quitar espacios en blanco,

comentarios, reemplazar cadenas con Arrays (para evitar que MSIE cree objetos string para cada instancia

de una cadena — incluso en condiciones) y hacer otros ajustes m&#xE1;s peque&#xF1;os para que nuestro c&#xF3;digo

JavaScript vuele en los navegadores.</p>



<p>Si nos concentramos en hacer que el c&#xF3;digo inicial sea f&#xE1;cil de entender y/o modificar por otros desarrolladores,

podemos crear el script perfecto. Si necesitamos optimizar prematuramente, nunca llegaremos a eso. Nunca

debemos desarrollar para nosotros &#xF3; para el navegador — desarrollemos para el siguiente desarrollador

que lo coja donde nosotros lo dejemos.</p>



<h2>Res&#xFA;men</h2>



<p>El truco principal con JavaScript es evitar coger el camino f&#xE1;cil. JavaScript es un lenguaje muy vers&#xE1;til,

y en el entorno en que es ejecutado es muy f&#xE1;cil escribir c&#xF3;digo descuidado que parece que hace el trabajo.

Ese mismo c&#xF3;digo, en unos meses quiz&#xE1;s, regresar&#xE1; para mordernos unas l&#xED;neas m&#xE1;s abajo.</p>



<p>El desarrollo en JavaScript ha mutado desde un &#xE1;rea de conocimiento a una necesidad absoluta si queremos

tener un trabajo de desarrollador de p&#xE1;ginas web. Si est&#xE1;s comenzando ahora, est&#xE1;s de suerte, ya que yo mismo

y otros ya hemos visto la mayor&#xED;a de los fallos, y hecho toda la parte de prueba-error; ahora podemos mandar

ese conocimiento lejos.</p>



<ul class="seriesNav">

<li class="prev"><a href="http://dev.opera.com/articles/view/first-look-at-javascript/" rel="prev" title="link to the previous article in the series">Art&#xED;culo anterior—El primer vistazo a JavaScript</a></li>

<li class="next"><a href="http://dev.opera.com/articles/view/unobtrusive-javascript-es/" rel="next" title="link to the next article in the series">Siguiente art&#xED;culo—Los principios de un JavaScript discreto</a></li>

<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabla de contenidos</a></li>

</ul>



<h2>Sobre el autor</h2>



<div class="right">



<img src="/articles/view/javascript-best-practices/chrisheilmann.jpg" alt="Imagen del autor del art&amp;iacute;culo, Chris Heilmann" />

<p class="comment">Cr&#xE9;ditos: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>



</div>



<p>Chris Heilmann ha sido un desarrollador web durante 10 a&#xF1;os, despu&#xE9;s de chapotear en el periodismo de radio.

El trabaja para Yahoo! en UK, como formador y desarrollador principal, y supervisa la calidad del c&#xF3;digo en

Europa y Asia.</p>



<p>Tiene un blog en <a href="http://wait-till-i.com">Wait till I come</a> y est&#xE1; disponible en varias redes

sociales, como &#x201C;codepo8&#x201D;.</p></p></p></p>
