Title: Manejando eventos en JavaScript
----
Date: 2010-05-13 16:37:24
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

	<li class="prev"><a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript-es/" rel="prev" title="link to the previous article in the series">Art&#xED;culo anterior—Estilos din&#xE1;micos - manipulando CSS con JavaScript</a></li>

	<li class="next"><a href="http://dev.opera.com/articles/view/javascript-animation/" rel="next" title="link to the next article in the series">Siguiente art&#xED;culo—Animaciones en JavaScript</a></li>

	<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabla de contenidos</a></li>

</ul>



<h2>Introducci&#xF3;n</h2>



<p>Ahora que nos sentimos confortables con el uso de CSS para colocar componentes, y manipular sus estilos,

y hemos dado los primeros pasos en JavaScript, comprendiendo variables, funciones, m&#xE9;todos, etc, es hora de

empezar a usar ese conocimiento, proporcionando a los visitantes de nuestras p&#xE1;ginas interactividad y

comportamientos din&#xE1;micos (algo as&#xED; como hacer drag&amp;drop, animaciones, etc). Manejar eventos en JavaScript

nos permitir&#xE1; tener un cierto rol de Doctor Frankenstein, y dar vida a nuestras creaciones.</p>



<p>Pero ya basta acerca de las maravillas de JavaScript — este art&#xED;culo ser&#xE1; pr&#xE1;ctico, nos dir&#xE1; cu&#xE1;les

son los eventos, y como hacer uso de ellos en nuestras p&#xE1;ginas. La tabla de contenidos es la siguiente:</p>



<ul>

  <li><a href="#eventswhat">¿Qu&#xE9; son los eventos?</a></li>

  <li><a href="#eventshow">C&#xF3;mo funcionan los eventos</a></li>

  <li><a href="#eventsevolution">La evoluci&#xF3;n de los eventos</a>

    <ul>

      <li><a href="#eventsdom2">Eventos de Nivel 2 del &#xE1;rbol DOM</a></li>

      <li><a href="#eventsie">El modelo de eventos de Internet Explorer, la excepci&#xF3;n</a></li>

      <li><a href="#eventscrossbrowser">La aplicaci&#xF3;n de eventos multi-navegador</a></li>

    </ul>

  </li>

  <li><a href="#eventsaccessibility">Eventos y accesibilidad</a></li>

  <li><a href="#eventscontrolling">Controlando eventos</a>

    <ul>

      <li><a href="#eventsapplying">Aplicando eventos a ciertos elementos</a></li>

    </ul>

  </li>

  <li><a href="#eventobjectreferences">Referencias a objetos Eventos</a>

    <ul>

      <li><a href="#eventspecificproperty">Chequeando una propiedad espec&#xED;fica de un evento</a></li>

    </ul>

  </li>

  <li><a href="#eventdefaultsbubbling">Eventos por defecto, y eventos de propagaci&#xF3;n</a>

    <ul>

      <li><a href="#eventpreventingdefault">Previniendo el comportamiento por defecto de eventos.</a></li>

      <li><a href="#eventstopbubbling">Deteniendo la propagaci&#xF3;n de eventos</a></li>

    </ul>

  </li>

  <li><a href="#completeexamplecode">Ejemplo completo de gesti&#xF3;n de eventos</a></li>

  <li><a href="#summary">Res&#xFA;men</a></li>



  <li><a href="#exercises">Ejercicios</a></li>

</ul>



<p class="note">Hay que tener en cuenta que se puede descargar

<a href="http://dev.opera.com/articles/view/handling-events-with-javascript/code-example.zip">el c&#xF3;digo de ejemplo de este art&#xED;culo</a>, y probar por nosostros mismos.</p>





<h2 id="eventswhat">¿Qu&#xE9; son los eventos?</h2>

<p> Los eventos ocurren cuando alg&#xFA;n tipo de interacci&#xF3;n tiene lugar en una p&#xE1;gina web. Puede ser el usuario final,

haciendo click sobre algo, moviendo el rat&#xF3;n sobre un determinado elemento, o presionando determinadas teclas

del teclado. Un evento tambi&#xE9;n puede ser algo que ocurre en el navegador, como que la p&#xE1;gina haya terminado

de cargarse, o que usuario se mueve por el scroll, o redimensiona la p&#xE1;gina.</p>



<p>A trav&#xE9;s del uso de JavaScript, podemos detectar cuando determinados eventos ocurren, y realizar acciones

en respuesta a esos eventos.</p>





<h2 id="eventshow">C&#xF3;mo funcionan los eventos</h2>



<p>Cuando los eventos tiene lugar, asociado a un elemento HTML de una p&#xE1;gina web, se chequea si existen

gestores de eventos asociados a ese evento. Si la respuesta es si, se les llama en un orden determinado,

mientras se les env&#xED;a referencias y otra informaci&#xF3;n del evento que ha ocurrido. Los gestores de eventos

entonces act&#xFA;an sobre ese evento.</p>



<p>Hay dos tipos de &#xF3;rdenes de invocaci&#xF3;n: <em>captura de evento</em> y <em>propagaci&#xF3;n de evento</em>.</p>



<p>La captura de eventos comienza con el elemento de m&#xE1;s afuera en el &#xE1;rbol DOM, y funciona entrando hacia

dentro del elemento HTML. Por ejemplo, un click sobre una p&#xE1;gina web primero chequear&#xED;a el elemento

<code>HTML</code> en busca de un gestor para el evento <code>onclick</code>, luego sobre elemento

<code>body</code>, y as&#xED;, hasta que alcanzase el gestor del evento.</p>



<p>La propagaci&#xF3;n de los eventos trabaja justo de la forma contraria: comienza chequeando si el elemento

destino del evento tiene asociado alg&#xFA;n gestor de ese evento, y contin&#xFA;a hacia arriba chequeando a

los respectivos padres de los elementos, hasta que alcanza el elemento HTML.</p>





<h2 id="eventevolution">La evoluci&#xF3;n de los eventos</h2>



<p>En los primeros dias de usar JavaScript, usamos gestores de eventos directamente en el elemento HTML,

como estos:</p>



<pre><code>&lt;a href=&quot;http://www.opera.com/&quot; onclick=&quot;alert(&#39;Hello&#39;)&quot;&gt;Say hello&lt;/a&gt;</code></pre>

<p>El problema de este enfoque es que esto result&#xF3; en gestores de eventos repartidos por todo el c&#xF3;digo,

sin tener un control centralizado, y perdiendo la capacidad de los navegadores de almacenar en cach&#xE9;

los ficheros externos de JavaScript.</p>



<p>El siguiente paso en la evoluci&#xF3;n de eventos fue manejar eventos desde dentro de un bloque JavaScript, por ejemplo:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
  document.getElementById(&quot;my-link&quot;).onclick = waveToAudience;
    function waveToAudience() {
      alert(&quot;Waving like I&#39;ve never waved before!&quot;);
    }
&lt;/script&gt;

&lt;a id=&quot;my-link&quot; href=&quot;http://www.opera.com/&quot;&gt;My link&lt;/a&gt;</code></pre>

<p class="note">Hay que hacer notar la limpieza del HTML del &#xFA;ltimo ejemplo. Esto se conoce generalmente

como JavaScript discreto. El beneficio de esto, adem&#xE1;s del cacheo de JavaScript y del control del c&#xF3;digo,

es la separaci&#xF3;n del c&#xF3;digo: se tienen todos los contenidos en un sitio, y el c&#xF3;digo que permite la

interacci&#xF3;n en otro sitio. Esto permite un enfoque m&#xE1;s accesible, cuando un enlace funciona perfectamente

con JavaScript desactivado; esto es algo que piden por favor los motores de b&#xFA;squedas.</p>

<h3 id="eventsdom2">Eventos de Nivel 2 del &#xE1;rbol DOM</h3>

<p>Sobre noviembre del a&#xF1;o 2000, la especificaci&#xF3;n Document Object Model (DOM) Level 2 Events fue lanzada

desde W3C, ofreciendo una v&#xED;a mas detallada y granular de controlar eventos en una p&#xE1;gina web. La nueva

v&#xED;a aplica eventos a elementos HTML m&#xE1;s o menos de la siguiente forma:</p>

<pre><code>document.getElementById(&quot;my-link&quot;).addEventListener(&quot;click&quot;, myFunction, false);</code></pre>

<p>El primer par&#xE1;metro del <code>m&#xE9;todo addEventListener</code> es el nombre del evento, y se deber&#xED;a

notar que ya no se utiliza el prefijo “on”. El segundo par&#xE1;metro hace referencia a la funci&#xF3;n

que nosotros queremos que se llame cuando el evento ocurra. El tercer par&#xE1;metro controla el <code>tipo de

invocaci&#xF3;n</code> del evento, por ejemplo, si el evento es en captura, o en propagaci&#xF3;n.</p>

<p>La contrapartida de <code>addEventListener</code> es <code>removeEventListener</code>, que elimina un evento asociado a un elemento HTML.</p>

<h3 id="eventsie">El modelo de eventos de Internet Explorer, la excepci&#xF3;n</h3>

<p>Por desgracia, Internet Explorer est&#xE1; muy lejos de implementar eventos de nivel 2 del &#xE1;rbol DOM, y como contrapartida tiene su propio m&#xE9;todo <code>attachEvent</code>. Que queda m&#xE1;s o menos como sigue:</p>

<pre><code>document.getElementById(&quot;my-link&quot;).attachEvent(&quot;onclick&quot;, myFunction);</code></pre>

<p class="note">Hay que hacer notar que <code>attachEvent</code> todav&#xED;a utiliza el prefijo “on”

antes del nombre del evento actual, y que no incluye soporte para decidir si el evento es en captura o en

propagaci&#xF3;n.</p>

<p>El contrario de <code>attachEvent</code> es <code>detachEvent</code>, para eliminar un evento asociado a un elemento HTML.</p>

<h3 id="eventscrossbrowser">La aplicaci&#xF3;n de eventos multi-navegador</h3>

<p>Con todas las inconsistencias entre navegadores web, en la implementaci&#xF3;n de la gesti&#xF3;n de eventos,

ha habido numerosos intentos de desarrolladores de p&#xE1;ginas web de ofrecer una buena soluci&#xF3;n, para

gestionar eventos de forma correcta en cualquier navegador. Estas soluciones tienen diferentes pros y contras, y se conocen popularmente como funciones <code>addEvent</code>.</p>

<p>La mayor parte de librerias JavaScript las tienen integradas, y adem&#xE1;s, hay un buen n&#xFA;mero de

soluciones independientes disponibles online. Una sugerencia es usar

<a href="http://dean.edwards.name/weblog/2005/10/add-event/"><code>addEvent</code> por Dean Edwards</a>;

tambi&#xE9;n se puede considerar echar un vistazo a <a href="http://docs.jquery.com/Events">event handling options with the jQuery JavaScript library</a>.</p>

<h2 id="eventsaccessibility">Eventos y accesibilidad</h2>

<p>Antes de que vayamos m&#xE1;s al grano sobre controlar y gestionar eventos, hay que enfatizar el concepto

de accesibilidad. Para la mayor&#xED;a de la gente es un t&#xE9;rmino muy amplio; para nosotros deber&#xED;a significar

que lo que queramos hacer a trav&#xE9;s de la gesti&#xF3;n de eventos, realmente debe funcionar aunque JavaScript est&#xE9; deshabilitado o bloqueado en los navegadores.</p>

<p>Alguna gente deshabilita JavaScript en los navegadores, pero con m&#xE1;s frecuencia proxys, firewalls,

y otros programas antivirus hacen que JavaScript no se comporte como se espera. No hay que dejar que

esto nos desanime, sino que hay que seguir una gu&#xED;a para gestionar eventos que tengan un comportamiento

por defecto en caso de que JavaScript no est&#xE9; disponible.</p>

<p>Por norma general, nunca aplicar eventos a elementos HTML que no traen un comportamiento predefinido

para un evento en concreto. Deber&#xED;amos aplicar solamente eventos como <code>onclick</code> a elementos

como <code>a</code>, que ya tiene un comportamiento por defecto para los eventos de click (por ejemplo, navegar hacia el destino especificado en el enlace, o enviar un formulario).</p>

<h2 id="eventscontrolling">Controlando eventos</h2>

<p>Empecemos con un ejemplo simple de un evento, y c&#xF3;mo podemos reaccionar a &#xE9;l. En aras de la simplicidad, usaremos la soluci&#xF3;n <code>addEvent</code> mostrada anteriormente, para evitar tener que entrar en las complejidades de los eventos multi-navegador en cada ejemplo.</p>

<p>El primer ejemplo es el evento <code>onload</code>, que pertenece al objeto <code>window</code>. Normalmente,

cualquier evento que afecta a la ventana del navegador (como <code>onload</code>, <code>onresize</code>

y <code>onscroll</code>) est&#xE1; disponible a trav&#xE9;s del objeto <code>window</code>.</p>

<p>El evento <code>onload</code> tiene luegar cuando toda la p&#xE1;gina web ha terminado de cargar. Esto incluye

el c&#xF3;digo HTML en s&#xED;, as&#xED; como dependencias externas como imagenes, ficheros CSS y ficheros JavaScript. Cuando

todos ellos han terminado de cargar, se llama a <code>window.onload</code>, y as&#xED; podemos desencadenar

funcionalidad sobre la p&#xE1;gina web para que ocurra. El siguiente ejemplo es muy simple, y genera un mensaje

de alerta para que aparezca cuando la p&#xE1;gina ha terminado de cargar:</p>

<pre><code>addEvent(window, &quot;load&quot;, sayHi);
function sayHi() {
  alert(&quot;Hello there, stranger!&quot;);
}</code></pre>

<p>No est&#xE1; tan mal, no? Si queremos, podemos usar la funciones an&#xF3;nimas, eliminando la necesidad de un nombre

para nuestra funci&#xF3;n. Como sigue:</p>

<pre><code>addEvent(window, &quot;load&quot;, function () {
  alert(&quot;Hello there, stranger!&quot;);
});</code></pre>

<h3 id="eventsapplying">Aplicando eventos a ciertos elementos</h3>

<p>Para conseguir m&#xE1;s, debemos empezar por a&#xF1;adir eventos a otros elementos en la p&#xE1;gina. Por el bien del

argumento, supongamos que queremos un evento cada vez que pinchamos sobre un enlace. Combinando esto con

lo aprendido anteriormente, esta ser&#xED;a la manera de hacerlo:</p>

<pre><code>addEvent(window, &quot;load&quot;, function () {
  var links = document.getElementsByTagName(&quot;a&quot;);
    for (var i=0; i&lt;links.length; i++) {
      addEvent(links[i], &quot;click&quot;, function () {
        alert(&quot;NOPE! I won&#39;t take you there!&quot;);
        // Esta l&#xED;nea es soporte a&#xF1;adido a trav&#xE9;s de la funci&#xF3;n addEvent. Mirar m&#xE1;s abajo.
      evt.preventDefault();
    });
  }
});</code></pre>

<p>Vale, ¿que acabamos de hacer?. Primero, utilizamos el evento <code>onload</code> para saber cuando la

p&#xE1;gina ha terminado de cargar. Entonces, buscamos todos los enlaces en la p&#xE1;gina, utilizando el m&#xE9;todo

<code>getElementsByTagName</code> del objeto <code>document</code>. Recorremos la lista de los enlaces,

aplicando un evento a cada uno de ellos, que har&#xE1; una acci&#xF3;n cuando ese enlace sea pinchado.</p>

<p>¿Pero que hay acerca de la parte graciosa de que “el enlace no te llevar&#xE1; all&#xED;”?. Despu&#xE9;s de

que se haya mostrado el <code>alert</code>, la &#xFA;ltima l&#xED;nea se lee como que <code>retorna false</code>. Eso significa en este contexto, que devolviendo false previene de ejecutar la acci&#xF3;n por defecto. De todas formas,

entraremos en otras formas de dictar el comportamiento de los eventos en la &#xFA;ltima secci&#xF3;n de este art&#xED;culo.</p>

<h2 id="eventobjectreferences">Referencias a objetos Eventos</h2>

<p>Para a&#xF1;adir m&#xE1;s detalle a nuestra gesti&#xF3;n de eventos, podemos tomar diferentes acciones dependiendo de

ciertas propiedades del evento que ha ocurrido. Por ejemplo, si estamos tratango un evento <code>onkeypress</code>,

quiz&#xE1;s querramos que el evento solamente ocurra si el usuario ha presionado la tecla <kbd>enter</kbd>, pero

no cuando presione otras teclas.</p>

<p>Al igual que con el modelo de eventos, Internet Explorer ha decidido utilizar un objeto global de eventos

llamado <code>event</code> para gestionar objetos, mientras que la recomendaci&#xF3;n del W3C implementaba por el

resto de navegadores es pasar un objeto evento correspondiente al evento que ha ocurrido. El mayor problema

de implementar la gesti&#xF3;n de eventos multi-navegador es obtener una referencia al evento en s&#xED;, y una referencia

al elemento al que est&#xE1; apuntando el evento. Este c&#xF3;digo soluciona esto para nosotros:</p>

<pre><code>addEvent(document.getElementById(&quot;check-it-out&quot;), &quot;click&quot;, eventCheck);
function eventCheck (evt) {
  var eventReference = (typeof evt !== &quot;undefined&quot;)? evt : window.event;
  var eventTarget = (typeof eventReference.target !== &quot;undefined&quot;)? eventReference.target :
  eventReference.srcElement;
}</code></pre>

<p>La primera linea en la funci&#xF3;n <code>eventCheck</code> chequea si existe un objeto evento pasado a la funci&#xF3;n.

Si es as&#xED;, autom&#xE1;ticamente se convierte en el primer par&#xE1;metro de la funci&#xF3;n, en este ejemplo es el nombre

<code>evt</code>. Si no existe, significa que el navegador actual es Internet Explorer, entonces se busca una propiedad global del objeto <code>window</code> llamado <code>event</code>.</p>

<p>La seguna l&#xED;nea busca el <code>destino</code> del evento, en la propia referencia del evento. Si esta no existe, se busca en la propiedad <code>srcElement</code> implementada por Internet Explorer.</p>

<p class="note">Nota: esta gesti&#xF3;n y comportamiento est&#xE1;n detalladas en la referencia anterior a la

funci&#xF3;n <a href="http://dean.edwards.name/weblog/2005/10/add-event/"><code>addEvent</code></a>,

donde los objetos evento han sido normalizados para trabajar igual en todos los navegadores. El c&#xF3;digo de

m&#xE1;s arriba est&#xE1; escrito para mostrar las diferencias entre navegadores.</p>

<h3 id="eventspecificproperty">Chequeando una propiedad espec&#xED;fica de un evento</h3>

<p>Pongamos esto en acci&#xF3;n. El siguiente ejemplo ejecuta diferente c&#xF3;digo dependiendo de que tecla se presione:</p>

<pre><code>addEvent(document.getElementById(&quot;user-name&quot;), &quot;keyup&quot;, whatKey);
function whatKey (evt) {
  var eventReference = (typeof evt !== &quot;undefined&quot;)? evt : event;
  var keyCode = eventReference.keyCode;
  if (keyCode === 13) {
    // La tecla Enter ha sido presionada.
    // C&#xF3;digo para validar el formulario y enviarlo.
  }
  else if (keyCode === 9) {
    // Se ha presionado la tecla Tabulador.
    // C&#xF3;digo para, quiz&#xE1;s, borrar el campo del formulario.
  }
}</code></pre>

<p>El c&#xF3;digo de dentro de la funci&#xF3;n <code>whatKey</code> chequea una propiedad del evento que ha tenido lugar, llamada <code>keyCode</code>, para mirar que tecla se ha presionado sobre el teclado. El n&#xFA;mero 13 significa

que ha sido la tecla <kbd>Enter</kbd>, y el n&#xFA;mero 9 significa que ha sido el <kbd>Tabulador</kbd>.</p>

<h2 id="eventdefaultsbubbling">Eventos por defecto, y eventos de propagaci&#xF3;n</h2>

<p>Hay un n&#xFA;mero de casos en lo que estaremos interesados en detener el comportamiento por defecto de un evento.

Por ejemplo, quiz&#xE1;s queramos impedir que el usuario env&#xED;e un formulario si determinados campos no est&#xE1; rellenos. Lo mismo va para los eventos de propagaci&#xF3;n, y en esta parte se explicar&#xE1; como podemos tener el control de esas situaciones.</p>

<h3 id="eventpreventingdefault">Previniendo el comportamiento por defecto de eventos.</h3>

<p>Con el modelo de eventos, y las diferencias entre los objetos eventos, hay dos formas de soportar IE, y el resto de navegadores. Construyendo sobre el c&#xF3;digo anterior para obtener una referencia al objeto evento, el siguiente listado incluye c&#xF3;digo para detener el comportamiento por defecto de un enlace, cuando el usuario pincha sobre &#xE9;l:</p>

<pre><code>addEvent(document.getElementById(&quot;stop-default&quot;), &quot;click&quot;, stopDefaultBehavior);
function stopDefaultBehavior (evt) {
  var eventReference = (typeof evt !== &quot;undefined&quot;)? evt : event;
  if (eventReference.preventDefault) {
    eventReference.preventDefault();
  }
  else {
    eventReference.returnValue = false;
  }
}</code></pre>

<p>Este tipo de c&#xF3;digo utiliza algo llamado detecci&#xF3;n del objeto llamado, para confirmar que un m&#xE9;todo est&#xE1; disponible actualmente antes de que sea llamado, lo que previene de posibles errores. El m&#xE9;todo <code>preventDefault</code> est&#xE1; disponible en todos los navegadores, excepto Internet Explorer, y previene de ejecutar la acci&#xF3;n por defecto de un evento.</p>

<p>Si ese m&#xE9;todo no se soporta, entrar&#xED;a por establecer el <code>returnValue</code> a <code>false</code>

del objeto evento global, deteniendo el comportamiento por defecto en Internet Explorer.</p>

<h3 id="eventstopbubbling">Deteniendo la propagaci&#xF3;n de eventos</h3>

<p>Teniendo en cuenta la siguiente jerarqu&#xED;a en HTML:</p>

<pre><code>&lt;div&gt;
  &lt;ul&gt;
    &lt;li&gt;
      &lt;a href=&quot;http://www.opera.com/&quot;&gt;Opera&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;a href=&quot;http://www.opera.com/products/dragonfly/&quot;&gt;Opera Dragonfly&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>

<p>Supongamos que tenemos que aplicar el evento <code>onclick</code> a todos los elementos <code>a</code>, <code>li</code> y <code>ul</code>. El evento <code>onclick</code> primero llamar&#xED;a al gestor de eventos del enlace, luego al de la lista de items, y luego al gestor de eventos de la lista desordenada.</p>



<p>Si el usuario pincha sobre el enlace, normalmente, no querremos llamar a ningun gestor de eventos del

elemento padre <code>li</code>, sino que querremos permitir al usuario navegar hasta la p&#xE1;gina

correspondiente. Por tanto, si el usuario pincha sobre el elemento <code>li</code> al lado del enlace, quiz&#xE1;s

queramos invocar al gestor de eventos para el elemento <code>li</code>, al igual que para el elemento

<code>ul</code>.</p>



<p class="note">Hay que destacar que con el Modelo de Eventos de Nivel 2 del &#xE1;rbol DOM, y con la

<code>useCapture</code> activada, por ejemplo utilizando captura de eventos, esto puede empezar en la lista

sin ordenar, despues en la lista ordenada, y luego en el enlace. Como la captura de eventos no es una opci&#xF3;n

en Internet Explorer, esta funcionalidad se utiliza muy raramente en la vida real.</p>



<p>A continuaci&#xF3;n se expone el c&#xF3;digo para detener la propagaci&#xF3;n de un evento:</p>



<pre><code>addEvent(document.getElementById(&quot;stop-default&quot;), &quot;click&quot;, cancelEventBubbling);
function cancelEventBubbling (evt) {
  var eventReference = (typeof evt !== &quot;undefined&quot;)? evt : event;
  if (eventReference.stopPropagation) {
    eventReference.stopPropagation();
  }
  else {
    eventReference.cancelBubble = true;
  }
}</code></pre>

<h2 id="completeexamplecode">Ejemplo completo de gesti&#xF3;n de eventos</h2>

<p>Est&#xE1; disponible una <a href="http://dev.opera.com/articles/view/handling-events-with-javascript/javascript-event-handling-example.html">p&#xE1;gina de ejemplo</a> donde se a&#xF1;ade

un gestor de eventos, y se previene la acci&#xF3;n por defecto del evento, dependiendo de determinados criterios.

El gestor de eventos chequea si el formulario est&#xE1; relleno para ser enviado, &#xF3; no, dependiendo de si el usuario

ha rellenado todos los campos. El c&#xF3;digo JavaScript es el siguiente:</p>



<pre><code>addEvent(window, &quot;load&quot;, function () {
  var contactForm = document.getElementById(&quot;contact-form&quot;);
  if (contactForm) {
    addEvent(contactForm, &quot;submit&quot;, function (evt) {
      var firstName = document.getElementById(&quot;first-name&quot;);
      var lastName = document.getElementById(&quot;last-name&quot;);
      if (firstName &amp;&amp; lastName) {
        if (firstName.value.length === 0 || lastName.value.length === 0) {
          alert(&quot;You have to fill in all fields, please.&quot;);
          evt.preventDefault();
        }
      }
    });
  }
});</code></pre>

<h2 id="summary">Res&#xFA;men</h2>
<p>En este art&#xED;culo solamente hemos ara&#xF1;ado la superficie de la gesti&#xF3;n de eventos, esperando que se haya

ganado en comprensi&#xF3;n de c&#xF3;mo funcionan los eventos. Quiz&#xE1;s se deber&#xED;a haber sido m&#xE1;s duro con las inconsistencias

de los navegadores web, pero es importante conocer esas inconsistencias desde el principio.</p>

now these issues from the start.



<p>Una vez se hayan aceptado esas incosistencias, y aprendido como solventarlas con las soluciones de m&#xE1;s arriba,

¡no hay l&#xED;mite para las posibilidades que JavaScript y la gesti&#xF3;n de eventos nos proporcionan!.</p>



<h2 id="exercises">Ejercicios</h2>



<ul>

	<li>¿Qu&#xE9; es un evento?</li>

	<li>¿Cu&#xE1;l es la diferencia entre captura de eventos, y propagaci&#xF3;n de eventos?</li>

	<li>¿Es posible tener control de la ejecuci&#xF3;n de un evento, por ejemplo, deteniendo el comportamiento

	por defecto? ¿C&#xF3;mo?</li>

	<li>¿Cu&#xE1;l es el problema principal de <a href="/articles/view/handling-events-with-javascript/javascript-event-handling-example.html">attachEvent</a>

	y &#xE1;mbito, que gener&#xF3; una contestaci&#xF3;n de la comunidad web de JavaScript?</li>

</ul>





<ul class="seriesNav">

	<li class="prev"><a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript-es/" rel="prev" title="link to the previous article in the series">Art&#xED;culo anterior—Estilos din&#xE1;micos - manipulando CSS con JavaScript</a></li>

	<li class="next"><a href="http://dev.opera.com/articles/view/javascript-animation/" rel="next" title="link to the next article in the series">Siguiente art&#xED;culo—Animaciones en JavaScript</a></li>

	<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabla de contenidos</a></li>

</ul>



<h2>Sobre el autor</h2>



<p><img src="/articles/view/handling-events-with-javascript/robertnyman.jpg" style="float:right;" alt="Picture of the article author Robert Nyman" /></p>



<p>Robert Nyman ha trabajado en el desarrollo de interfaces web durante una d&#xE9;cada, donde JavaScript ha sido

siempre su principal inter&#xE9;s. Tiene blog muy apasionado sobre desarrollo web,

<a href="http://www.robertnyman.com/">Robert’s talk</a></p>



<p style="padding-bottom:50px;">Vive con su querida familia en Suecia, escribiendo durante la noche mientras

ellos duermen. Adem&#xE1;s, alimenta un sue&#xF1;o secreto de conseguir un dia ser un rico apestoso, y tener la oportunidad

de escribir un libro sobre cosas reales, m&#xE1;s all&#xE1; de los confines del mundo web.</p>
        

