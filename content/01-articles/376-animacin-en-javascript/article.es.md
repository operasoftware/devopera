Title: Animación en JavaScript
----
Date: 2010-07-14 09:37:18
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
<li class="prev"><a href="http://dev.opera.com/articles/view/handling-events-with-javascript-es/" rel="prev" title="enlace al articulo anterior de la serie">Art&#xED;culo anterior—Manejando eventos en JavaScript</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/graceful-degradation-progressive-enhance-es/" rel="next" title="enlace al siguiente articulo de la serie">Siguiente art&#xED;culo—Degradaci&#xF3;n elegante frente a Mejora progresiva</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabla de contenidos</a></li>
</ul>

<h2>Introducci&#xF3;n</h2>

<p>En este art&#xED;culo, echaremos un vistazo al arte de crear animaciones utilizando JavaScript — las animaciones
se suelen utilizar para a&#xF1;adir experiencia de usuario, para la gente que utiliza navegadores que pueden soportarlo.
Los usos m&#xE1;s comunes son expansiones y contracciones suaves de paneles, barras de progresos, y efectos visuales
en formularios.</p>

<p>Como cualquiera que haya visto una pel&#xED;cula sabe, la animaci&#xF3;n se hace actualmente mediante una gran cantidad
de peque&#xF1;os pasos, que hacen que parezca que algo se est&#xE1; moviendo. La animaci&#xF3;n es una t&#xE9;cnica poderosa; es muy
buena llamando la atenci&#xF3;n. La pega es que llama la atenci&#xF3;n tanto si es lo que queremos como si no. Los efectos
animados pueden hacer lucir mejor una p&#xE1;gina web, con una mejor experiencia de usuario, pero es como la salsa
de chile: no hay que pasarse a&#xF1;adiendo.</p>

<p>El contenido del art&#xED;culo es el siguiente:</p>

<ul>
  <li><a href="#yellowfade">Un ejemplo bastante simple: yellow fade technique</a></li>
  <li><a href="#librariesanimation">Animaci&#xF3;n con librer&#xED;as de JavaScript</a></li>
  <li><a href="#motion">Un ejemplo m&#xE1;s complejo: moviendo y cambiando el tama&#xF1;o</a></li>
  <li><a href="#csstransitions">Transiciones CSS</a></li>
  <li><a href="#summary">Res&#xFA;men</a></li>
  <li><a href="#exercises">Ejercicios</a></li>
</ul>

<h2 id="yellowfade">Un ejemplo bastante simple: yellow fade technique</h2>

<p>Un uso bastante com&#xFA;n de la animaci&#xF3;n es la <a href="http://www.37signals.com/svn/archives/000558.php">
Yellow fade technique</a>, donde, a un &#xE1;rea de la p&#xE1;gina que ha cambiado, se le pone un color de fondo amarillo,
y poco a poco vuelve a convertirse al color de fondo original. Es una forma bonita y no invasiva de resaltar
que algo ha cambiado (por ejemplo, hay nuevo contenido, o hay mensajes de feedback) sin molestar lo que el
usuario est&#xE1; haciendo. Se puede <a href="/articles/view/javascript-animation/yft_pure_js.html">echar un vistazo a un ejemplo</a> para ver
c&#xF3;mo funciona.</p>

<p>El funcionamiento detr&#xE1;s de esta t&#xE9;cnica es que se pone el color de fondo de un elemento a amarillo, y
entonces, en una serie de pasos, vuelve a ser el que ten&#xED;a originalmente. As&#xED; que si el color de fondo original
era rojo, entonces el color se pone a amarillo, luego a naranja-amarillo, luego naranja, luego rojo-naranja,
y finalmente rojo. El n&#xFA;mero de pasos que se dan dicta c&#xF3;mo cambian los colores, y el tiempo entre pasos dicta
cuanto tiempo se tarda en cambiar el color totalmente. En los cambios de colores, podemos usar una ventaja de
CSS: un color puede definirse tanto como un triplete de n&#xFA;meros, &#xF3; una cadena hexadecimal. As&#xED;, rojo
<code>#FF0000</code> puede especificarse como <code>rgb(255,0,0)</code>. Cambiar del amarillo al rojo se puede
hacer en 5 pasos, que es ir del <code>rgb(255,255,0)</code> (amarillo) al <code>rgb(255,0,0)</code>:</p>

<pre><code>rgb(255,255,0)
rgb(255,192,0)
rgb(255,128,0)
rgb(255,64,0)
rgb(255,0,0)</code></pre>

<p>Ponemos el color de fondo del elemento a <code>rgb(255,255,0)</code>, despu&#xE9;s de un periodo de tiempo
(digamos 100 milisegundos), cambiamos ese color de fondo a <code>rgb(255,192,0)</code>, y tras otros 100
milisegundos a <code>rgb(255,128,0)</code>, y as&#xED;:</p>

<table>
  <tr>
    <th>Color</th>
    <th>Tiempo</th>
  </tr>
  <tr>
    <td>rgb(255,255,0)</td>
    <td>0</td>
  </tr>
  <tr>
    <td>rgb(255,192,0)</td>
    <td>100ms</td>
  </tr>
  <tr>
    <td>rgb(255,128,0)</td>
    <td>200ms</td>
  </tr>
  <tr>
    <td>rgb(255,64,0)</td>
    <td>300ms</td>
  </tr>
  <tr>
    <td>rgb(255,0,0)</td>
    <td>400ms</td>
  </tr>
</table>

<p>El proceso completo dura 400ms (por debajo de medio segundo), y hace un cambio suave del amarillo al rojo.
Convenientemente, aqu&#xED; solo estamos cambiando una parte del color (el canal de verde; los tres canales del color
rgb son el rojo, el verde y el azul), pero cambiar m&#xE1;s de un canal a la vez es perfectamente posible. En este
ejemplo, estamos cambiando el canal de verde de 255 a 0 en cuatro pasos, lo que significa que se cambia en 64
en cada paso.</p>

<p>Lanzar una acci&#xF3;n despu&#xE9;s de un cierto periodo de tiempo se hace en JavaScript por medio de las funciones
<code>setTimeout</code> y <code>setInterval</code>. La funci&#xF3;n <code>setTimeout</code> ejecuta nuestra acci&#xF3;n
despu&#xE9;s de un cierto retardo de tiempo; <code>setInterval</code> ejecuta nuestra acci&#xF3;n una y otra vez, con
cada ejecuci&#xF3;n separada por un intervalo de tiempo; esto es ideal para animaci&#xF3;n. En esencia, lo que tenemos
que hacer para conseguir el cambio de fondo, es definir que tenemos que hacer en cada paso, e invocar a la
funci&#xF3;n <code>setInterval</code> para que nos invoque en cada paso. La funci&#xF3;n <code>setInterval</code> tiene
dos par&#xE1;metros, la funci&#xF3;n a llamar para ejecutar nuestra acci&#xF3;n, y el intervalo de tiempo en milisegundos.</p>

<p>Obviamente, quiz&#xE1;s no queramos cambiar siempre del amarillo al rojo, as&#xED; que nuestra funci&#xF3;n tendr&#xED;a que
ser m&#xE1;s gen&#xE9;rica. Si conocemos los colores de inicio y fin, y el n&#xFA;mero de pasos, entonces falta utilizar
las matem&#xE1;ticas para saber cuanto hay que cambiar cada color en cada paso. Si definimos un array
<code>startcolour</code> como una lista de tres n&#xFA;meros (<code>[255,255,0]</code>) y <code>endcolour</code>
como una lista similar (<code>[255,0,0]</code>), entonces la cantidad en la que tenemos que variar cada
color en cada paso es:</p>

<pre><code>var red_change = (startcolour[0] - endcolour[0]) / steps;
var green_change = (startcolour[1] - endcolour[1]) / steps;
var blue_change = (startcolour[2] - endcolour[2]) / steps;</code></pre>

<p>Utilizamos <code>setInterval</code> para cambiar el color de fondo de un elemento en varios pasos:</p>

<pre><code>var currentcolour = [255,255,0];
var timer = setInterval(function(){
    currentcolour[0] = parseInt(currentcolour[0] - red_change);
    currentcolour[1] = parseInt(currentcolour[1] - green_change);
    currentcolour[2] = parseInt(currentcolour[2] - blue_change);
    element.style.backgroundColor = &#39;rgb(&#39; + currentcolour.toString() + &#39;)&#39;;
}, 50);</code></pre>

<p>En cada paso, tenemos <code>currentcolour</code> y cambiamos el color rojo en la cantidad
<code>red_change</code>, el color verde en la cantidad <code>green_change</code>, y el color azul en la cantidad
<code>blue_change</code>. Entonces, establecemos el color de fondo del elemento al nuevo color:
<code>[255,255,0].toString()</code> es &quot;255,255,0&quot;, as&#xED; que para obtener el color <code>rgb(255,255,0)</code>
utilizamos <code>toString()</code> para crear <code>rgb(255,255,0)</code> y utilizarlo como el color de fondo
del elemento.</p>

<p>No obstante, <code>setInterval</code> llamar&#xE1; a nuestra funci&#xF3;n indefinidamente, no parar&#xE1; cuando el color
de fondo deseado se haya alcanzado. Para parar un intervalo, hay que utilizar <code>clearInterval()</code>;
el siguiente c&#xF3;digo cuenta el n&#xFA;mero de veces que la acci&#xF3;n se ha llamado, y borra el intervalo despu&#xE9;s del
n&#xFA;mero de pasos correctos:</p>

<pre><code>var currentcolour = startcolour;
var stepcount = 0;
var timer = setInterval(function(){
    currentcolour[0] = parseInt(currentcolour[0] - red_change);
    currentcolour[1] = parseInt(currentcolour[1] - green_change);
    currentcolour[2] = parseInt(currentcolour[2] - blue_change);
    element.style.backgroundColor = &#39;rgb(&#39; + currentcolour.toString() + &#39;)&#39;;
    stepcount += 1;
    if (stepcount &gt;= steps) {
        element.style.backgroundColor = &#39;rgb(&#39; + endcolour.toString() + &#39;)&#39;;
        clearInterval(timer);
    }
}, 50);</code></pre>

<p>Y as&#xED; es como se hace una animaci&#xF3;n: un paso en cada momento de tiempo.</p>

<p>&#xBF;C&#xF3;mo conseguir que <code>startcolour</code> y <code>endcolour</code> se inicializen? Una forma f&#xE1;cil de hacerlo
es envolver el c&#xF3;digo de m&#xE1;s arriba en una funci&#xF3;n <code>fade</code>:</p>

<pre><code>fade: function(element, startcolour, endcolour, time_elapsed) {
   <em>...code from above...</em>
}</code></pre>

<p>y podemos activar el cambio de color de fondo de un elemento con una funci&#xF3;n como esta:</p>

<pre><code>fade(document.getElementById(&quot;yft&quot;), [255,255,60], [0,0,255], 750);</code></pre>

<p>o una &quot;atenuaci&#xF3;n a rojo&quot;, que pone el elemento a rojo y luego lo aten&#xFA;a a azul (el color de fondo del
elemento), como:</p>

<pre><code>fade(document.getElementById(&quot;yft&quot;), [255,0,0], [0,0,255], 750);</code></pre>

<p>Este ejemplo cambia el color de fondo, pero se podr&#xED;a cambiar cualquier cosa: el color del primer plano (para
efectos sicod&#xE9;licos de texto), opacidad (para ocultar o mostrar cosas), posici&#xF3;n (para mover un elemento en la
p&#xE1;gina), altura y anchura (para hacer crecer un elemento, o reducirlo a la nada antes de que desaparezca).</p>

<h2 id="librariesanimation">Animaci&#xF3;n con librer&#xED;as de JavaScript</h2>

<p>La animaci&#xF3;n es un efecto muy usado, as&#xED; que la mayor&#xED;a de las librer&#xED;as JavaScript tienen alguna forma de
soporte, incluyendo animaciones preconstruidas para los efectos m&#xE1;s comunes. Por ejemplo, <a href="http://jquery.com/">jQuery</a> tiene un soporte incorporado para hacer que un elemento se vuelva
transparente:</p>

<pre><code>$(&quot;#myelement&quot;).fadeOut();</code></pre>

<p>y una funci&#xF3;n <code>animate()</code> para hacer c&#xF3;digo propio m&#xE1;s complicado:</p>

<pre><code>$(&quot;#block&quot;).animate({
    width: &quot;70%&quot;,
}, 1500 );</code></pre>

<p>Esto es muy intuitivo - coge el elemento y cambia el atributo CSS <code>width</code>, en 1500 milisegundos,
desde el valor que tuviera, al 70% - la funci&#xF3;n <a href="http://docs.jquery.com/Effects"><code>animate</code>
&#xA0;est&#xE1; documentada aqu&#xED;</a>.</p>

<p>El framework <a href="http://script.aculo.us/">Scriptaculous de Prototype</a> ofrece facilidades del estilo, como
<code>Effect.Fade(&#39;id_of_element&#39;)</code>, y otras muchas. La librer&#xED;a <a href="http://yuilibrary.com/">Yahoo UI tambi&#xE9;n ofrece efectos similares</a>:</p>

<pre><code>new Y.Anim({ node: &#39;#demo&#39;, to: { width: 70%, }}).run();</code></pre>

<p>Si estamos utilizando una librer&#xED;a JavaScript en nuestro c&#xF3;digo, ya deber&#xED;amos saber que nos ofrecen formas
m&#xE1;s sencillas de animaci&#xF3;n que manejar esas animaciones por nuestra cuenta, con <code>setInterval</code>.
No obstante, es muy importante entender qu&#xE9; hay bajo la cubierta - esto har&#xE1; que nuestros scripts mejoren a largo
plazo. Esta es la raz&#xF3;n por la que empezar por un ejemplo con los principios b&#xE1;sicos, antes de entrar con
las librer&#xED;as.</p>

<p class="note">Se pueden encontrar m&#xE1;s sobre c&#xF3;mo usar las diferentes librer&#xED;as JavaScript en dev.opera.com,
<a href="http://dev.opera.com/articles/view/introduction-to-javascript-toolkits/">Introduction to JavaScript
toolkits</a>.</p>

<h2 id="motion">Un ejemplo m&#xE1;s complejo: moviendo y cambiando el tama&#xF1;o</h2>

<p>Yellow Fade Technique sirve para demostrar las animaciones, pero es un poco, bueno, aburrida. Cuano la
mayor&#xED;a de la gente piensa en animaci&#xF3;n, piensa en <em>movimiento</em>. El Coyote habr&#xED;a sido menos gracioso
si todo lo que &#xE9;l hubiera hecho hubiese sido cambiar de color.</p>

<p>Un buen truco para alertar al usuario de que algo est&#xE1; ocurriendo sin interrumpir su actividad son los
<em>mensajes no modales</em>. En vez de mostrar un dialogo de <code>alert()</code>, que implica que usuario debe
pinchar sobre el OK para poder continuar, simplemente ponemos el mensaje en un div flotante en la p&#xE1;gina, que,
sin molestar, puede permanecer hasta que el usuario se de cuenta. Otra cosa interesante que podr&#xED;amos hacer es
permitir al usuario volver a ver el mensaje que ya hab&#xED;a visto. As&#xED;, podemos implementar un mensaje flotante
que, cuando se le pinche, se mueva a una esquina de la ventana, y que se le pueda pinchar para tenerlo de vuelta.
Podemos ver una <a href="/articles/view/javascript-animation/moving_messages_jq.html">breve demo del &quot;zooming message&quot;</a> para tener una idea.</p>

<p>Si estamos haciendo alg&#xFA;n trabajo serio de animaci&#xF3;n, &#xF3; cualquier trabajo serio en JavaScript, merecer&#xE1; m&#xE1;s
la pena utilizar una librer&#xED;a JavaScript. Esto nos permitir&#xE1; poder dar la experiencia de usuario que deseamos
sin tener que preocuparnos por las matem&#xE1;ticas necesarias para hacer funcionar las animaciones. (Sabemos, no
obstante, <em>c&#xF3;mo</em> utilizar las matem&#xE1;ticas y c&#xF3;mo usar <code>setInterval</code>, habiendo leido el primer
ejemplo m&#xE1;s arriba, pero ahorraremos tiempo y neuronas permitiendo que alguien haga el trabajo duro por
nosotros.)</p>

<p>La demo anterior utiliza la librer&#xED;a <a href="http://jquery.com/">jQuery</a> para hacer el trabajo, pero como
se ha mencionado antes, la mayor&#xED;a de librer&#xED;as provee conceptos similares para animaci&#xF3;n; por tanto deber&#xED;amos
ser capaces de reimplementar nuestro trabajo utilizando la librer&#xED;a que deseemos. En esencia, lo que tenemos
que hacer es lo siguiente:</p>

<ol>
  <li>Mostrar un mensaje flotante centrado en la pantalla</li>
  <li>Cuando se pinche sobre &#xE9;l:
    <ol>
      <li>Mover su posici&#xF3;n horizontal lo m&#xE1;s a la derecha</li>
      <li>Mover su posici&#xF3;n vertical hacia arriba</li>
      <li>Cambiar su anchura a 20px de ancho</li>
      <li>Cambiar su altura a 20px de alto</li>
      <li>Cambiar su opacidad a 20% para que sea bastante transparente</li>
    </ol>
    y ocultar el texto que tiene dentro</li>
  <li>Cuando se pinche sobre esta &quot;mini&quot; version del mensaje, se trae de nuevo al centro de la pantalla
  (por ejemplo, lo contrario de lo que hicimos al encogerlo)</li>
</ol>

<p>y as&#xED;, mientras el usuario consigue una imagen clara de lo que ha ocurrido con su mensaje, la transici&#xF3;n
desde el mensaje hacia el mini-mensaje deber&#xED;a ser animada (para que pueda ver que su mensaje ha encogido hacia
la esquina de la ventana).</p>

<p>Hacer esta animaci&#xF3;n con jQuery es sencillo: utilizamos la funci&#xF3;n <code>.animate</code> y especificamos que
queremos como resultado de la animaci&#xF3;n (y cuanto va a llevar el conseguirlo):</p>

<pre><code>$(ourObject).animate({
    width: &quot;20px&quot;, height: &quot;20px&quot;, top: &quot;20px&quot;,
    right: &quot;20px&quot;, marginRight: &quot;0px&quot;, opacity: &quot;0.2&quot;
  }, 300);</code></pre>

<p>Esto coger&#xE1; <code>ourObject</code> y, en unos 300 ms, cambiar&#xE1; su anchura y altura a 20px, su tope y posici&#xF3;n
derecha a 20px, su propiedad de estilo <code>margin-right</code> a 0px, y su opacidad (en los navegadores que lo
soporten) al 20%. Despu&#xE9;s, para hacer que la animaci&#xF3;n funcione cuando se pinche en el mensaje,
falta programar algo en el estilo jQuery:</p>

<pre><code>$(ourObject.click, function(){
  $(this).animate({
    width: &quot;20px&quot;, height: &quot;20px&quot;, top: &quot;20px&quot;,
    right: &quot;20px&quot;, marginRight: &quot;0px&quot;, opacity: &quot;0.2&quot;
  }, 300)
});</code></pre>

<p>Restaurar el mensaje cuando se pinche sobre &#xE9;l requiere otra llamada a <code>.animate()</code>:</p>

<pre><code>$(ourObject).animate({
    width: &quot;400px&quot;, height: &quot;75px&quot;, top: &quot;50px&quot;,
    right: &quot;50%&quot;, marginRight: &quot;-200px&quot;, opacity: &quot;0.9&quot;
  }, 300);</code></pre>

<p>y con una poca de l&#xF3;gica para saber cuando el mensaje se est&#xE1; mostrando en grande o en peque&#xF1;o (para saber
que animaci&#xF3;n debe ejecutarse), y algo de CSS para definir el estilo inicial del mensaje (grande, verde, centrado
horizontalmente), eso es todo lo que necesitamos. Unas 30 lineas de script. &#xA1;Esto es por lo que utilizar librer&#xED;as
es una muy buena idea!</p>

<h2 id="csstransitions">Transiciones CSS</h2>

<p>Finalmente, algunas animaciones (no todas) puede hacerse in utilizar JavaScript para nada!!. Safari y otros
navegadores basados en Webkit, y Firefox 3.1 pueden hacer transiciones de un valor CSS a otro sin utilizar
JavaScript. El c&#xF3;digo:</p>

<pre><code>div { opacity: 1; -webkit-transition: opacity 1s linear; }
div:hover { opacity: 0; }</code></pre>

<p>har&#xE1; que el <code>div</code> se haga transparente en un segundo, en navegador que lo soporte, cuando se
pasa el rat&#xF3;n por encima. Estas transiciones CSS son nuevas, no obstante, no est&#xE1;n totamente soportadas salvo
en las versiones m&#xE1;s modernas, asi que si queremos que nuestra animaci&#xF3;n funcione para la mayor&#xED;a de nuestro
p&#xFA;blico entonces necesitaremos utilizar scripts para ello.</p>

<h2 id="summary">Res&#xFA;men</h2>

<p>Esto concluye un vistazo a la funcionalidad de animar p&#xE1;ginas web utilizando JavaScript - hemos visto
algunos ejemplos creados con los principios b&#xE1;sicos utilizando las funciones <code>setTimeout</code> y
<code>setInterval</code>, y luego hemos echado un vistazo a c&#xF3;mo usar librer&#xED;as JavaScript para crear animaciones
m&#xE1;s deprisa.</p>

<h2 id="exercises">Ejercicios</h2>

<ol>
  <li>&#xBF;C&#xFA;al es la diferencia entre <code>setTimeout</code> y <code>setInterval</code>?</li>
  <li>Si <code>setInterval</code> no existe, &#xBF;c&#xF3;mo podr&#xED;amos emularla?</li>
  <li>&#xBF;C&#xF3;mo podr&#xED;amos hacer que un elemento pasase del visible total al invisible total en 20 pasos con un
  	intervalo de 1.5 segundos?</li>
  <li>&#xBF;C&#xF3;mo podr&#xED;amos hacer que un elemento pasase del visible total al invisible total <em>y luego volverlo
  visible de nuevo</em> en 20 pasos con un intervalo de 1.5 segundos?</li>
</ol>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/handling-events-with-javascript-es/" rel="prev" title="enlace al articulo anterior de la serie">Art&#xED;culo anterior—Manejando eventos en JavaScript</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/graceful-degradation-progressive-enhance-es/" rel="next" title="enlace al siguiente articulo de la serie">Siguiente art&#xED;culo—Degradaci&#xF3;n elegante frente a Mejora progresiva</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabla de contenidos</a></li>
</ul>

<h2>Sobre el autor</h2>

<img alt="Foto del autor del art&amp;amp;iacute;culo, Stuart Langridge" src="/articles/view/javascript-animation/stuartlangridge.jpg" class="right" />

<p>Stuart Langridge es posiblemente la &#xFA;nica persona en el mundo en tener un BSc en Inform&#xE1;tica y Filosof&#xED;a.
Cuando &#xE9;l no esta trasteando con ordenadores, &#xE9;l es un hacker de JavaScript, Django y Python en
<a href="http://www.gcapmedia.com">GCap Media</a>, autor de
<a href="http://www.sitepoint.com/books/dhtml1/">DHTML Utopia</a> en SitePoint, y un bebedor de
cervezas decentes. Adem&#xE1;s, es una cuarta parte del equipo en <a href="http://lugradio.org/presenters/">LugRadio</a>,
un programa de radio de estreno mundial sobre temas de software &quot;Free and Open Source&quot;.
Sus divagaciones sobre la web, scripts, software open source, y cualesquiera otras muchas cosas, se pueden
encontrar en <a href="http://kryogenix.org">kryogenix.org</a>; Stuart puede ser encontrado fuera buscando
en el &#xE1;rea de fumadores.</p>
