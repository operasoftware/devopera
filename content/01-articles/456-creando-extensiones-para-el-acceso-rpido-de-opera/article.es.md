Title: Creando Extensiones para el Acceso Rápido de Opera
----
Date: 2011-05-15 14:01:42
----
Lang: es
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>Introducción</h2>

<p>En el 2007, <a href="http://www.opera.com/docs/changelogs/windows/920/">presentamos</a> al mundo:  Acceso Rápido. La idea se volvió popular y hoy en día pueden ser encontradas implementaciones similares en otros navegadores. Pero estamos muy orgullosos, ¿qué clase de padres seríamos si no ayudáramos a nuestro “bebé” a crecer y desarrollar nuevas habilidades? Para la versión 11.10 de Opera, hemos mejorado la visualización y la interacción con el usuario, y hemos agregado <a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/">soportes</a> para que los desarrolladores puedan controlar la forma como sus sitios se ven en las celdas del Acceso rápido. Ahora, en Opera 11.50, estamos dando un paso más allá con las Extensiones para el Acceso Rápido.</p>

<p>De la misma forma en que puede extender las funciones de su navegador a 
través de los cientos y cientos de <a href="https://addons.opera.com/addons/extensions/">extensiones de Opera,</a> también podrá personalizar y ampliar el Acceso Rápido para que sea aún más útil. En lugar de limitarse a imágenes de la página Web o íconos de Acceso rápido, ahora también podrá mostrar el contenido de extensiones, en tiempo real. Este artículo le mostrará como hacerlo.</p>

<p class="note">Nota: Para ver un ejemplo funcionando, necesitará <a href="http://www.opera.com/browser/next/">Opera 11.50</a> además de alguna 
extensión de ejemplo: <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">descargar nuestro Reloj para  Acceso Rápido.</a></p>

<h2>Lo básico</h2>

<p>En pro de mantener la compatibilidad con las extensiones comunes, las 
Extensiones para el Acceso Rápido utilizan el mismo formato y estructura 
salvo por un par de agregados. En otras palabras, los siguientes agregados al archivo <code>config.xml</code> cambiarán una Extensión para Opera, ya 
existente, en una Extensión para el Acceso Rápido de Opera:</p>

<ul>
    <li>Un elemento <code>&lt;feature&gt;</code> conteniendo un atributo 
<code>name</code>, el cual al tomar el valor <code>opera:speeddial</code>, 
volverá a la extensión una Extensión para Acceso Rápido.</li>
    <li>Un atributo <code>viewmodes</code> dentro de la etiqueta <code>&lt;widget&gt;</code> que tomará el valor <code>minimized</code>, a los efectos de mostrar el fondo de la página en la celda del acceso rápido.</li>
</ul>

<p>Por favor, tenga en cuenta, que estas extensiones no pueden utilizarse 
tanto en el Acceso Rápido como en la barra de herramientas del navegador. En 
otras palabras, una extensión que tiene un botón en la barra de herramientas, no puede ser al mismo tiempo Extensión en Acceso Rápido mediante la implementación actual.</p>

<h2>Especificando que la extensión es para el Acceso Rápido en el <code>config.xml</code></h2>

<p>Vamos a poner en práctica la metodología a través de una extensión de 
ejemplo. Para ver los siguientes fragmentos de código en su contexto, 
descargue nuestra extensión <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">Reloj para el 
Acceso Rápido</a> y revise el código fuente en los archivos que conforman el 
paquete <code>clock_SD_extension.oex</code>, recuerde que la compresión utilizada es ZIP con extensión de archivo OEX. La Figura 1 muestra cómo se verá nuestra extensión cuando esté terminada.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/456-creando-extensiones-para-el-acceso-rpido-de-opera/clock_extension_in_speed-dial.jpg" width="400" height="242" alt="Clock extension installed in the Opera browser&#39;s Speed Dial." /></p>
<p class="comment">Figura 1: La extensión de reloj instalada en el Acceso 
Rápido de Opera.</p>

<p>Mientras que, normalmente una celda de Acceso Rápido común muestra una 
captura de pantalla de una página Web, las Extensiones para Acceso Rápido 
mostrarán la pantalla de inicio (o el fondo) que tiene la extensión—esto es 
<code>index.html</code> por defecto. Para activar esto, necesitamos primero 
agregar el atributo <code>viewmodes</code> a la etiqueta <code>&lt;widget&gt;</code> de nuestro <code>config.xml</code>, con el valor 
<code>minimized</code>:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
id=&quot;http://example.com/SimpleClockSD&quot; viewmodes=&quot;minimized&quot;&gt;</code></pre>

<p>Esto le dice al navegador que muestre el fondo de la extensión 
minimizado—el tamaño de una ventana individual de Acceso Rápido al 100% es de 256 píxeles de ancho por 160 píxeles de alto. Además, necesitamos también agregar los elementos <code>param</code> y <code>feature</code>, acompañado este último del atributo <code>required</code>:</p>

<pre><code>&lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
  &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
&lt;/feature&gt;</code></pre>

<p>El elemento <code>feature</code> necesita un atributo que indique si el 
Acceso rápido es necesario para que la Extensión pueda funcionar. Por 
ejemplo, podría haber otros navegadores o clientes que sean compatibles con 
las extensiones de Opera pero no con el Acceso Rápido. Si pese a esto, su 
extensión  aún es capaz de funcionar, el valor de <code>required</code> 
dentro de <code>feature</code> será <code>false</code>; en cambio, si su 
extensión no trabaja al no haber un Acceso Rápido, el valor será 
<code>true</code>.</p>

<p>El elemento <code>param</code>, por su parte, es necesario, para 
especificar que página deberá cargarse, cuando se haga clic en la ventana de 
Acceso Rápido donde se muestra la extensión.</p>

<p>Aquí está el archivo <code>config.xml</code> completo para esta extensión:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
id=&quot;http://example.com/SimpleClockSD&quot; defaultlocale=&quot;en&quot; 
viewmodes=&quot;minimized&quot;&gt;
  &lt;name short=&quot;Simple Clock&quot;&gt;Clock Speed Dial Extension&lt;/name&gt;
  &lt;description&gt;Este es un ejemplo de Extensión para Acceso rápido que
 muestra un Reloj Simple.&lt;/description&gt;
  &lt;author href=&quot;http://people.opera.com/danield/&quot;&gt;Daniel Davis&lt;/author&gt;
  &lt;icon src=&quot;images/icon_64.png&quot;/&gt; &lt;!-- Icon source:
<a href="http://www.openclipart.org/detail/17552" target="_blank">http://www.openclipart.org/detail/17552</a> --&gt;
  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
    &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
  &lt;/feature&gt;&gt;
&lt;/widget&gt;</code></pre>

<h2>Agregando contenido a la extensión</h2>

<p>El siguiente paso es crear algo interesante para mostrar en la ventana del Acceso Rápido. Esto es la página de fondo de la extensión, para lo cual 
necesitamos crear un archivo al que llamaremos <code>index.html</code> en el 
mismo directorio donde se encuentra <code>config.xml</code>. Para este 
ejemplo, hemos creado un simple reloj digital programado en JavaScript que 
muestra la hora actual con minutos y segundos. Primero creamos un <code>index.html</code> básico, con un elemento <code>output</code> vacío:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
    &lt;title&gt;Extensión de Reloj para el Acceso Rápido&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;output&gt;&lt;/output&gt;
    &lt;script src=&quot;scripts/background.js&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Seguidamente, necesitamos crear un directorio de <code>scripts</code> que contendrá el archivo <code>background.js</code> que enlazaremos luego. Este archivo JavaScript contiene algo parecido a esto:</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Función simple que pone un prefijo cero cuando el valor es menor que 10
  function formatTime(time) {
    return (time &lt; 10) ? &#39;0&#39; + time : time;
  }
    
  var output = document.querySelector(&#39;output&#39;);
  var date, hours, mins, secs;
    
  // Toma y muestra la hora actual cada 500 milisegundos
  var timer = window.setInterval(function() {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; + 
formatTime(secs);
  }, 500); // Dos veces por segundo para permitir ligeros retrasos en la 
ejecución de JavaScript
}, false);</code></pre>

<p>La hoja de estilo que le acompaña (<code>style.css</code>), es también 
simple, pero incluye un pequeño truco:</p>

<pre><code>* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}

/* Utilice display:table y display:table-cell
para luego poder utilizar vertical-align:middle */

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

/* Los ajustes de estilo de aquí solo se aplican estando minimizado */
@media screen and (view-mode: minimized) {
  output {
    font-size: 1.8em;
  }
}</code></pre>

<p>Como usted puede ver, hay una consulta “media” CSS3  al final del archivo 
que verifica si se da la condición de <code>view-mode: minimized</code>, de 
acuerdo con las especificaciones de la característica <a href="http://dev.w3.org/2006/waf/widgets-vmmf/"><code>Media-view-mode</code></a> En otras palabras los estilos en esta sección solo se aplicarán cuando la página se muestre minimizada, tal como pasa en una celda de Acceso Rápido. Esta es una forma práctica de anular los estilos de una situación determinada, sin tener que mantener múltiples diseños.</p>

<h2>Terminando la extensión</h2>

<p>Como es usual, empaquetamos nuestra creación en un contenedor ZIP que 
contenga todos los archivos del directorio de trabajo (pero no el directorio 
en sí) y renombramos el archivo con la extensión <code>.oex</code> Si no lo 
ha hecho aún, descargue <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex"> clock_SD_extension.oex</a> y pruébelo.</p>

<h2>La API <code>SpeedDialContext</code></h2>

<p>Una vez instalada, nuestra extensión puede controlar dinámicamente su 
celda de Acceso Rápido mediante la API <code>SpeedDialContext</code>. Una API muy simple con dos propiedades de escritura: <code>title</code> y 
<code>url</code>. Estas se colocarán en el archivo <code>background.js</code> a través del objeto <code>opera.contexts.speeddial</code>, de esta 
manera:</p>

<pre><code>if (opera.contexts.speeddial) {
  var sd = opera.contexts.speeddial; 
  sd.title = &quot;Mi título&quot;;
  sd.url = &quot;mipagina.html&quot;; 
}</code></pre>

<p>Podemos utilizar estas características para mejorar nuestra extensión de 
reloj, por ejemplo, haciendo que se muestre un mensaje amistoso de acuerdo a 
la hora del día que sea. El único archivo que es necesario editar es 
<code>background.js</code>:</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Función simple que pone un prefijo cero cuando el valor es menor que 10
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
    
  // Toma y muestra la hora actual cada 500 milisegundos
  var timer = window.setInterval(function() {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; + 
formatTime(secs);
        
    // Muestra un mensaje relacionado a la hora en el título del Acceso Rápido
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
  }, 500); // Dos veces por segundo para permitir ligeros retrasos en la 
ejecución de JavaScript
}, false);</code></pre>

<p>Este es igual que el primer ejemplo, pero con un par de cosas agregadas, a saber:</p>

<ul>
    <li>Un objeto <code>messages</code> conteniendo mensajes para distintos 
momentos del día.</li>
    <li>Una verificación reiterada que ejecuta código cuando la hora ha 
cambiado.</li>
    <li>Una línea que muestra el mensaje correspondiente en el título del 
Acceso Rápido desde el objeto <code>messages</code>.</li>
</ul>

<p>Esta extensión puede ser descargada aquí: <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/friendly_clock_SD_extension.oex">friendly_clock_SD_extension.oex</a> 
Una vez instalada, debería poder ver algo así:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/456-creando-extensiones-para-el-acceso-rpido-de-opera/friendly_clock_extension_in_speed-dial.jpg" width="400" height="256" alt="Friendly clock extension installed in the Opera browser&#39;s Speed Dial." /></p>

<p class="comment">Figura 2: Una amigable extensión de reloj instalada en el 
Acceso Rápido de Opera.</p>

<h2>Conclusión</h2>

<p>Como puede ver, los desarrolladores de extensiones tienen ahora una posibilidad adicional para añadir a sus extensiones, mejorando así la conveniencia y  facilidad de uso o simplemente por diversión. Los ejemplos aquí son básicos, pero muestran el potencial de las extensiones para acceso rápido cuando se combinan con ideas inteligentes y habilidades de desarrollo Web. Estamos esperando ver como las extensiones para el Acceso Rápido se convierten en algo más que solo vínculos a un sitio Web, así que esperamos ver formas creativas en que utilizan esta API en el <a href="https://addons.opera.com/addons/extensions/">catálogo de extensiones de Opera.</a></p>

<h2>Referencias</h2>
<p><a href="http://www.opera.com/docs/apis/extensions/speeddialguide/">API 
para Extensiones de Opera: Guía Rápida</a></p>
