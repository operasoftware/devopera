Title: Mejora Progresiva
----
Date: 2010-05-13 16:37:27
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

	<li class="prev"><a href="http://dev.opera.com/articles/view/javascript-animation/" rev="prev" title="link to the previous article in the series">Art&#xED;culo anterior - Animaci&#xF3;n en JavaScript</a></li>

	<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabla de contenidos</a></li>

</ul>



<h2>Introducci&#xF3;n</h2>



<p>En este art&#xED;culo hablaremos de la diferencia entre dos formas de desarrollo: degradaci&#xF3;n elegante y

mejora progresiva. Haciendo las cosas simples, a continuaci&#xF3;n las deficiones de trabajo: </p>



<dl>

  <dt>Degradaci&#xF3;n elegante</dt>

  <dd>Proveer una versi&#xF3;n alternativa de la funcionalidad, o hacer al usuario consciente de una serie de atajos

  en un producto, como una medida de seguridad de que ese producto es usable.</dd>

  <dt>Mejora progresiva</dt>

  <dd>Se comienza con una base de funcionalidad usable, entonces se incrementa la riqueza de la experiencia de

  usuario, paso por paso, testeando el soporte de las mejoras antes de aplicarlas.</dd>

</dl>



<p>Se puede pensar que estos dos enfoques son bastante simuladres, y que ellos dan el mismo resultado,

pero hay diferencias de las que hay que tomar nota, como veremos m&#xE1;s adelante.</p>



<p>Empezaremos explicando la necesidad de esas dos t&#xE9;cnicas. Entonces, iremos a una definici&#xF3;n mas profunda,

mostrando ejemplos de implementaci&#xF3;n, y seguiremos con una comparaci&#xF3;n y guia de cuando hay que usarlas.

Pero antes, expliquemos porqu&#xE9; necesitamos t&#xE9;cnicas especiales de desarrollo para el desarrollo web.</p>



<p>La estructura de este art&#xED;culo es la siguiente:</p>



<ul>

  <li><a href="#constantlychanging">“Mobilis in mobile” — movi&#xE9;ndose en un entorno en constante cambio</a></li>

  <li><a href="#gracefulprogressivenutshell">Degradaci&#xF3;n elegante y mejora progresiva en pocas palabras</a></li>

  <li><a href="#gracefulprogressiveexample">Un ejemplo de degradaci&#xF3;n elegante frente a mejora progresiva</a>

    <ul>

      <li><a href="#printthispage">Enlace “Imprimir esta p&#xE1;gina”</a></li>

    </ul>

  </li>

  <li><a href="#whentousewhat">Cu&#xE1;ndo usar qu&#xE9;</a></li>

  <li><a href="#summary">Res&#xFA;men</a></li>

  <li><a href="#exercises">Ejercicios</a></li>

</ul>



<h2 id="constantlychanging">“Mobilis in mobile” — movi&#xE9;ndose en un entorno en constante cambio</h2>



<p>Justo como el Capit&#xE1;n Nemo en “20.000 leguas de viaje submarino”, los desarrolladores web se

encuentran en constante cambio, y en un entorno que fluctua que puede ser muy hostil a lo que se trata de hacer.</p>



<p>La Web fue inventada y definida para ser usada con cualquier dispositivo, en cualquier lenguaje, donde quiera

que deseemos. La una cosa que esperan los usuarios finales es que su dispositivo de navegaci&#xF3;n pueda alcanzar la

web y entender los protocolos utilizados para la transmisi&#xF3;n de informaci&#xF3;n: — http, https, ftp y as&#xED;.</p>



<p>Esto significa que no podemos esperar cualquier cosa de los usuarios finales. Tenemos que tener claro que

nuestra experiencia de la web, como desarrolladores, es muy diferente de la de la gente a la queremos llegar.</p>



<p>No existe la obligaci&#xF3;n de actualizar las tecnologias para acceder a los contenidos en internet. La gente y las

compa&#xF1;ias se adhieren a un entorno definido, y no lo cambian o actualizan porque nosotros queramos que lo hagan.

Mucha gente solo quiere utilizar la web, y son ajenos a las tecnologias que hay detr&#xE1;s — todos ellos esperan

ser capaces de obtener el contenido que se le promete. Es a los sistemas operativos y a los desarrolladores de

navegadores a quienes compete que los usuarios tengann su sistema al dia — as&#xED; como los desarrolladores web no tenemos que decir nada en eso.</p>

<p>Todo esto desemboca en un entorno de desarrollo muy fr&#xE1;gil, por ejemplo, son muy comunes oficinas donde,

por defecto, hay un navegador de unos 9 a&#xF1;os de antig&#xFC;edad, con scripts y plugins desactivados

(por razones de seguridad), bajas resoluciones de pantalla, y ordenadores que est&#xE1;n al m&#xE1;ximo utilizando

software de oficina.</p>



<p>Podr&#xED;amos ir ahora y clamar que compa&#xF1;ias como esas han “perdido el barco” y que no hay raz&#xF3;n

para intentar mantener tecnologia anticuada. Pero esta actitud puede hacer que nos olvidemos que esa gente

puede ser muy importante para el &#xE9;xito de nuestros productos. En algunos casos, no tienen los permisos necesarios

para cambiar su configuraci&#xF3;n t&#xE9;cnica. Cuando no viene por temas de accesibilidad, que no son tan obvias, como

usuarios disl&#xE9;xicos que no comprenden nuestras enrevesadas instrucciones, o usuarios ciegos, que no pueden

“hacer click sobre el boton verde para continuar”, a pesar de que hemos especificado que es necesario

para utilizar nuestro sistema.</p>



<p>Nosotros trabajamos en el desconocimiento, y necesitamos una forma de hacer el trabajo. Es por eso que tanto

la degradaci&#xF3;n elegante, como la mejora progresiva entran en el juego.</p>



<h2 id="gracefulprogressivenutshell">Degradaci&#xF3;n elegante y mejora progresiva en pocas palabras</h2>



<p>Ya hemos visto una simple definici&#xF3;n m&#xE1;s arriba; en esta secci&#xF3;n veremos una definici&#xF3;n m&#xE1;s t&#xE9;cnica, y

echaremos un vistazo a lo que se necesita realmente para implementar estas metodologias.</p>



<p>As&#xED; que, la <strong>degradaci&#xF3;n elegante</strong> consiste en la construcci&#xF3;n de la funcionalidad de una

p&#xE1;gina web, de tal forma que provee un cierto nivel de experiencia de usuario en los navegadores m&#xE1;s modernos,

pero tambien permite una <em>degradaci&#xF3;n elegante</em> a un nivel m&#xE1;s bajo de experiencia de usuario en

navegadores antiguos. Este nivel m&#xE1;s bajo no es tan agradable de usar para los visitantes del sitio web, pero

a&#xFA;n as&#xED; provee toda la funcionalidad b&#xE1;sica que necesitan para utilizar ese sitio web; las cosas no se rompen

para ellos.</p>



<p><strong>La mejora progresiva</strong> es parecida, pero hace las cosas de otra forma. Se empieza por estabilizar

un nivel b&#xE1;sico de experiencia de usuario, que todos los navegadores ser&#xE1;n capaces de proporcionar cuando muestren

la p&#xE1;gina web. Pero adem&#xE1;s se construye una funcionalidad m&#xE1;s avanzada que estar&#xE1; disponible de forma autom&#xE1;tica

en los navegadores que puedan utilizarla.</p>



<p>En otras palabras, la degradaci&#xF3;n elegante comienza en una determinada complejidad, y trata de arreglar

las cosas para las experiencias de usuario m&#xE1;s bajas; y donde la mejora progresiva comienza desde una base

que funciona de forma muy b&#xE1;sica, y que permite extender de forma constante en futuros entornos.

La degradaci&#xF3;n elegante significa mirar atr&#xE1;s, mientras que la mejora progresiva significa mirar hacia adelante

mientras se mantienen los pies firmes sobre el suelo.</p>



<h2 id="gracefulprogressiveexample">Un ejemplo de degradaci&#xF3;n elegante frente a mejora progresiva</h2>



<p>Echemos un vistazo a un ejemplo mostr&#xE1;ndolo desde la mejora progresiva y desde la degradaci&#xF3;n elegante.</p>



<h3 id="printthispage">Enlaces “Imprimir la p&#xE1;gina”</h3>



<p>Se podr&#xED;a decir que los enlaces que permiten a los usuarios imprimir el documento actual son innecesarios

— pinchar sobre el icono Imprimir del navegador hace lo mismo. No obstante, los test de usuario muestran

esto como un ultimo paso en el proceso de generaci&#xF3;n (por ejemplo, en la web de una aerol&#xED;nea), como una buena

manera de indicar que hay que realizar una acci&#xF3;n. Los usuario sienten tener el control de terminar aquello que

empezaron.</p>



<p>La parte graciosa de los enlaces “imprimir la p&#xE1;gina” es que en HTML no hay forma de enlazar

con el bot&#xF3;n de impresi&#xF3;n del navegador — se necesita JavaScript para hacerlo. En JavaScript es facil

— el objeto <code>window</code> del navegador tiene un m&#xE9;todo <code>print()</code>, al que se puede

llamar para iniciar una impresi&#xF3;n. Probablemente, la forma m&#xE1;s com&#xFA;n de hacer esto es utilizando el siguiente seudo-protocolo de <code>javascript</code>: </p>


<pre><code>&lt;p id=&quot;printthis&quot;&gt;
  &lt;a href=&quot;javascript:window.print()&quot;&gt;Print this page&lt;/a&gt;
&lt;/p&gt;</code></pre>

<p>Esto funciona cuando JavaScript est&#xE1; disponible y activado, y el navegador soporta el comando <code>print</code>.

De todas formas, si JavaScript no est&#xE1; disponible (por ejemplo, en determinados dispositivos m&#xF3;viles), entonces

este enlace no funcionar&#xE1; — pinchando sobre &#xE9;l no har&#xE1; nada en absoluto. Esto crea un problema, porque, como

desarrollador de un sitio web, se ha prometido funcionalidad que no estar&#xE1; disponible. Cuando ellos pinchen sobre

el enlace y no funcione como ellos esperaban, se sentir&#xE1;n confundidos y decepcionados, y seremos probablemente, destino de su ira por haber tenido una mala experiencia de usuario.</p>

<p>Para hacer esto menos problem&#xE1;tico, los desarrolladores de los sitios web se decantan por la <strong>

degradaci&#xF3;n elegante</strong>: le dicen al usuario que el enlace puede no funcionar, y el porqu&#xE9; de ello, y

pueden sugerir una soluci&#xF3;n alternativa para que lleven a cabo lo que quieren hacer. Un truco muy com&#xFA;n es

utilizar el elemento <code>noscript</code>. Todo lo que contenga este elemento se mostrar&#xE1; al usuario final

cuando JavaScript no est&#xE9; disponible. En este caso, podr&#xED;a ser lo siguiente:</p>



<pre><code>&lt;p id=&quot;printthis&quot;&gt;
  &lt;a href=&quot;javascript:window.print()&quot;&gt;Print this page&lt;/a&gt;
&lt;/p&gt;
&lt;noscript&gt;
  &lt;p class=&quot;scriptwarning&quot;&gt;
    Printing the page requires JavaScript to be enabled.
    Please turn it on in your browser.
  &lt;/p&gt;
&lt;/noscript&gt;</code></pre>

<p>Esto se considera degradaci&#xF3;n elegante — se explica al usuario que algo no est&#xE1; funcionando, y como

rodear ese problema. No obstante, esto asume que los visitantes de la p&#xE1;gina web:</p>



<ul>

  <li>Saben qu&#xE9; es JavaScript</li>

  <li>Saben c&#xF3;mo activarlo</li>

  <li>Tienen los permisos y la posibilidad de activarlo</li>

  <li>Se sienten felices acerca de activar JavaScript para imprimir un documento</li>

</ul>



<p>Una forma mejor de afrontar este problema podr&#xED;a ser la siguiente:</p>



<pre><code>&lt;p id=&quot;printthis&quot;&gt;
  &lt;a href=&quot;javascript:window.print()&quot;&gt;Print this page&lt;/a&gt;
&lt;/p&gt;
&lt;noscript&gt;
  &lt;p class=&quot;scriptwarning&quot;&gt;
    Print a copy of your confirmation.
    Select the &quot;Print&quot; icon in your browser,
    or select &quot;Print&quot; from the &quot;File&quot; menu.
  &lt;/p&gt;
&lt;/noscript&gt;</code></pre>

<p>Esto soluciona practicamente todos los problemas detallados anteriormente, pero asume que la funcionalidad de

impresi&#xF3;n de todos los navegadores es igual. Pero el hecho sigue estando ah&#xED; — el tema con este acercamiento

es que se ofrece alguna funcionalidad sabiendo que puede no funcionar, teniendo encima que explicarlo. T&#xE9;cnicamente

no hay necesidad para el bot&#xF3;n —imprimir esto—, raz&#xF3;n por la cual un acercamiendo de mejora progresiva no puede asumir que eso funcione.</p>

<p>Si tenemos que solventar este problema utilizando <strong>mejora progresiva</strong>, el primer paso ser&#xED;a

encontrar si existe una forma de imprimir la p&#xE1;gina sin utilizar script. No existe, lo que significa que un enlace

es la forma equivocada de elemento HTML para usar. As&#xED; que si se desea dar funcionalidad que solamente est&#xE1;

disponible por medio de JavaScript, se deber&#xED;a utilizar botones: por definici&#xF3;n,

<a href="http://www.w3.org/TR/html401/interact/forms.html#push-button">los botones soportan funcionalidad script

</a>. La especificaci&#xF3;n W3C dice:</p>



<blockquote cite="http://www.w3.org/TR/html401/interact/forms.html#push-button">botones: los botones no

tienen comportamiento por defecto. Cada bot&#xF3;n puede tener scripts asociados en el lado cliente, por medio de

los atributos de eventos. Cuando un evento ocurre (por ejemplo, el usuario presiona el bot&#xF3;n, lo libera, etc.)

el script asociado se dispara.</blockquote>



<p>El segundo paso es no asumir que el usuario tiene JavaScript activado, y que el navegador puede imprimir. En vez

de eso, se le dice al usuario que tiene que imprimir el documento, y se deja el “c&#xF3;mo” a ellos:</p>



<pre><code>&lt;p id=&quot;printthis&quot;&gt;Thank you for your order. Please print this page for your records.&lt;/p&gt;</code></pre>



<p>Esto funciona en cualquier caso. Para el resto de funcionalidad utilizamos

<a href="http://onlinetools.org/articles/unobtrusivejavascript">JavaScript discreto</a>

para a&#xF1;adir un bot&#xF3;n imprimir en aquellos navegadores que lo soporten:</p>



<pre><code>&lt;p id=&quot;printthis&quot;&gt;Thank you for your order. Please print this page for your records.&lt;/p&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
(function(){
  if(document.getElementById){
    var pt = document.getElementById(&#39;printthis&#39;);
    if(pt &amp;&amp; typeof window.print === &#39;function&#39;){
      var but = document.createElement(&#39;input&#39;);
      but.setAttribute(&#39;type&#39;,&#39;button&#39;);
      but.setAttribute(&#39;value&#39;,&#39;Print this now&#39;);
      but.onclick = function(){
        window.print();
      };
      pt.appendChild(but);
    }
  }
})();&lt;/script&gt;</code></pre>

<p>Conviene tomar nota de c&#xF3;mo es de defensivo este script — no se asume nada:</p>



<ul>

  <li>Conteniendo toda la funcionalidad en la funci&#xF3;n an&#xF3;nima, y ejecut&#xE1;ndola inmediatamente — esto es

  lo que hace <code>(function(){})()</code> — no dejamos ninguna variable global atr&#xE1;s.</li>

  <li>Se testea por el soporte DOM, y se intenta acceder al elemento que deseamos para a&#xF1;adir el boton.</li>

  <li>Entonces testeamos si el elemento existe, y si el navegador tiene un objeto <code>window</code> y un

  m&#xE9;todo <code>print</code> (testeando si la propiedad <code>tipo</code> es una <code>funci&#xF3;n</code>).</li>

  <li>Si ambas son ciertas, nosotros creamos un bot&#xF3;n y le asignamos <code>window.print()</code> como

  ejecuci&#xF3;n para el evento click.</li>

  <li>El &#xFA;ltimo paso es a&#xF1;adir el boton al p&#xE1;rrafo.</li>

</ul>



<p>Esto funcionar&#xE1; para cada usuario independientemente del entorno t&#xE9;cnico. Y no se promete al usuario un

elemento en el interfaz que no funcione — en vez de eso, se le muestra s&#xF3;lo cuando vaya a funcionar.</p>

<h2 id="whentousewhat">C&#xFA;ando usar qu&#xE9;</h2>

<p>Quiz&#xE1;s se puede ser un idealista, pero la idea de la degradaci&#xF3;n elegante es la que menos gusta. Construyendo

algo y haciendolo apenas funcionar en otros entornos (o indicando a los usuario actualizarse), se hace una gran

cantidad de hip&#xF3;tesis acerca del entorno y de la habilidad de los usuarios para actualizar.</p>

<p>Por ejemplo, utilizando una Blackberry, cuando no puede encontrar una red wireless, uno se encuentra muy

frustrado cuando productos web te dicen que necesitan JavaScript activado, y te exhortan a activarlo. No se puede,

defendiendo los derechos de los usuarios de los productos — especialmente cuando se paga una cantidad de

dinero por acceso a servicios como GPS o EDGE.



<p>No obstante, la <strong>degradaci&#xF3;n elegante</strong> se vuelve viable en unas pocas situaciones:</p>



<ul>

  <li>Se est&#xE1; tocando un producto antiguo, y no se dispone de tiempo, acceso, etc, para cambiarlo o reemplazarlo.</li>

  <li>No se tiene tiempo suficiente para finalizar un producto con total mejoras progresivas (com&#xFA;nmente un signo

  de mala planificaci&#xF3;n o salirse fuera de presupuesto).</li>

  <li>El producto es un caso extremo, por ejemplo, un sitio de mucho tr&#xE1;fico, donde cada milisegundo de

  rendimiento significa una diferencia de millones de d&#xF3;lares.</li>

  <li>El producto es, por definici&#xF3;n, tan dependiente de JavaScript, que hace ser m&#xE1;s sensato mantener una

  versi&#xF3;n “b&#xE1;sica” que mejorar alguna (Mapas, clientes email, lectores de noticias).</li>

</ul>



<p>En el resto de casos, la <strong>mejora progresiva</strong> har&#xE1; ser m&#xE1;s felices tanto al usuario como al

desarrollador:</p>

<ul>

  <li>Independientemente del entorno y la capacidad, se entrega un producto que funciona.</li>

  <li>Cuando un navegador nuevo llega, o una extensi&#xF3;n de navegador es muy usada, se puede mejorar para alcanzar

  otro nivel sin tener que tocar la soluci&#xF3;n original — la degradaci&#xF3;n elegante requerir&#xED;a modificar

  la soluci&#xF3;n original.</li>

	<li>Se permite a la tecnolog&#xED;a ser lo que se supone que debe ser — una forma de alcanzar un objetivo

	m&#xE1;s r&#xE1;pido que sin ella, no un “ tener ” que alcanzar ese objetivo en primer lugar.</li>

  <li>Si se necesita m&#xE1;s funcionalidad, se puede hacer chequeando si est&#xE1; soportada en un cierto nivel,

  &#xF3; se puede a&#xF1;adir al nivel b&#xE1;sico de funcionalidad, y despu&#xE9;s, mejorar para entornos m&#xE1;s sofisticados.

  En cualquier caso, el mantenimiento sucede en el mismo lugar y no en lugares diferentes. Manteniendo un

  producto mejorado progresivamente en el tiempo, es menos trabajo que mantener dos versiones.</li>

</ul>



<h2 id="summary">Res&#xFA;men</h2>



<p>Se puede decir que tanto la mejora progresiva como la degradaci&#xF3;n elegante intentan hacer la misma cosa:

mantener los productos utilizables por cualquier usuario. La mejora progresiva es m&#xE1;s sofisticada, y al

mismo tiempo, una forma estable de asegurarnos de ello, pero tomas m&#xE1;s tiempo y dedicaci&#xF3;n. La degradaci&#xF3;n

elegante se puede utilizar de forma m&#xE1;s sencilla, como un parche para un producto existente; significa m&#xE1;s

mantenimiento a la larga, pero menos trabajo inicial.</p>



<h2 id="exercises">Ejercicios</h2>



<ul>

  <li>El art&#xED;culo muestra como ejemplo un enlace de impresi&#xF3;n, que puede utilizar cualquiera de los dos enfoques.

  &#xBF;En qu&#xE9; otros ejemplos puedes pensar?</li>

  <li>Digamos que se necesita utilizar JavaScript para asegurarnos de que un campo de un formulario contiene

  una direccion de email, antes de enviar el formulario. &#xBF;Que diferentes enfoques y que otros problemas se podr&#xED;an

  tomar en consideraci&#xF3;n?</li>

  <li>Digamos que necesitamos mostrar un mapa, y deseamos utilizar mejora progresiva. &#xBF;C&#xFA;al deber&#xED;a ser la

  funcionalidad base de la que deber&#xED;amos comenzar?

  <li>Pongamos que tenemos un interfaz que consiste en dos controles combox. Seleccionando una opcio&#xF3;n en el primero

  conseguimos cambiar las opciones disponibles en el segundo. &#xBF;C&#xFA;al deber&#xED;a ser la base para este tipo de control?

  &#xBF;Qu&#xE9; problemas puede haber con &#xE9;l?</li>

</li></ul>



<ul class="seriesNav">

	<li class="prev"><a href="http://dev.opera.com/articles/view/javascript-animation/" rev="prev" title="link to the previous article in the series">Art&#xED;culo anterior - Animaci&#xF3;n en JavaScript</a></li>

	<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabla de contenidos</a></li>

</ul>



<h2>Acerca del autor</h2>



<div class="right">



<img src="/articles/view/graceful-degradation-progressive-enhance/chrisheilmann.jpg" alt="Imagen del autor del art&amp;iacute;culo, Chris Heilmann" />

<p class="comment">Cr&#xE9;ditos: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>



</div>



<p>Chris Heilmann ha sido un desarrollador web durante 10 a&#xF1;os, despu&#xE9;s de chapotear en el periodismo de radio.

El trabaja para Yahoo! en UK, como formador y desarrollador principal, y supervisa la calidad del c&#xF3;digo en

Europa y Asia.</p>



<p>Tiene un blog en <a href="http://wait-till-i.com">Wait till I come</a> y est&#xE1; disponible en varias redes

sociales, como &#x201C;codepo8&#x201D;.</p>
              
</p>
