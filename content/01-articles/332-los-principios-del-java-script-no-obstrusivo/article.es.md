Title: Los Principios del Java Script No Obstrusivo
----
Date: 2010-04-20 13:48:30
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
<li class="prev"><a href="http://dev.opera.com/articles/view/javascript-best-practices-es/" rel="prev" title="enlace al artículo anterior de la serie">Artículo anterior—Mejores prácticas de JavaScript</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/javascript-functions-es/" rel="next" title="enlace al artículo siguiente de la serie">Siguiente artículo—Funciones en JavaScript</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabla de contenidos</a></li>
</ul>

<h2>Introducción</h2>

<p>En los artículos anteriores hablamos bastante sobre HTML, CSS y de como implementarlos de manera adecuada, además hemos pasado por los aspectos básicos de JavaScript— qué es, qué puede hacer por ti, y por qué deberías conocerlo. Antes de ir al detalle del uso práctico de JavaScript, necesitamos pensar en cómo usar JavaScript con sensibilidad de manera que no excluyamos a nadie de nuestro sitio web. Esa es la idea central del <strong>JavaScript no obstructivo</strong>. Para entender esto de una manera fácil, consideremos las muchas incertidumbres que envuelven a la programación con JavaScript:</p>

<ul>
<li>Algunos navegadores pueden ignorar tus scripts completamente, ya sea porque no soportan JavaScript o porque el soporte es muy anticuado.</li>
<li>Aún cuando el navegador pudiese soportar JavaScript, los usuarios podrían tenerlo desactivado por razones de seguridad, o porque el firewall corporativo lo bloquea al eliminar todos los elementos <code>&lt;script&gt;</code>.</li>
<li>Aún cuando el navegador pudiese soportar JavaScript, este podría no entender partes del script porque tiene una implementación propietaria de algunas partes de la especificación del DOM (IE es usualmente el culpable en estos casos).</li>
<li>Aún cuando el script sea interpretado correctamente, podría depender de código HTML muy complicado y/o que podría cambiar de manera impredecible.</li>
<li>Aún cuando tu contexto de programación ha sido bendecido con un HTML perfecto, no tienes manera de estar seguro de qué dispositivo utilizará el usuario. Muchos scripts funcionan solamente cuando el usuario utiliza un ratón, y olvidan a las personas que usan el teclado (muchos usuarios con discapacidad no pueden usar el ratón, y otros simplemente prefieren usar el teclado.</li>

<p>Esa es una lista bastante larga de problemas, la mayoría de ellos no son de naturaleza técnica sino conceptual o, si lo deseas, filosófica. Adicionalmente, mientras que los dos últimos problemas se presentan en otros lenguajes, los primeros cuatro son únicos del entorno de programación de JavaScript, así que la experiencia en programación no te ayudará en esos casos.</p>

<p>En resumen, JavaScript no obstructivo es una manera de escribir JavaScript de modo que los visitantes de tu sitio no se queden por fuera por alguna de esas razones—aún cuando tu JavaScript no funcione correctamente para ellos, aunque sea de una manera más básica. Este artículo discutirá los principios y prácticas del JavaScript no obstructivo y te preparará adecuadamente para el resto del curso.</p>

<p>La estructura de este artículo es la siguiente:</p>

<ul>
  <li><a href="#definicion">La definición de JavaScript no obstructivo</a></li>
  <li><a href="#separacion">Separación de la estructura y el comportamiento</a></li>
  <li><a href="#usabilidad">Agregando una capa de usabilidad</a>
    <ul>
        <li><a href="#validacionformularios">Ejemplo—validación de formularios</a></li>
        <li><a href="#principios">Principios</a></li>
        <li><a href="#ventanasemergentes">Ejemplo—ventanas emergentes</a></li>
        <li><a href="#ajax">Ejemplo—Ajax</a></li>
    </ul>
  </li>
  <li><a href="#htmlsemantico">HTML semántico y limpio</a></li>
  <li><a href="#compatibilidad">Compatibilidad con los navegadores</a></li>
    <li><a href="#resumen">Resumen</a></li>
</ul>

<h2 id="definicion">La definición de JavaScript no obstructivo</h2>

<p>A fin de solucionar los problemas listados anteriormente, es de suma importancia que entiendas lo que estás haciendo y por qué. Lo que necesitamos es una teoría para el adecuado desarrollo con JavaScript.</p>

<p>Dicha teoría es provista por el JavaScript no obstructivo. No es una técnica como tal; el JavaScript no obstructivo no consiste en agregar una llamada a la función <code>hacerNoObstructivo()</code> para entrar en el nirvana. Al contrario, es una manera de pensar. Para asegurarte que tus scripts no causen molestias a nadie, debes asegurarte que estos no hagan ninguna suposición.</p>

<p>Ahora, “que tus scripts no hagan ninguna suposición” es algo difícil. Afortunadamente podemos dividir la no obstructividad en tres categorías: tus scripts deben ser no obstructivos a los usuarios, a los navegadores y a los demás programadores.</p>

<ul>
<li><strong>Suposición: todos los navegadores soportan JavaScript.</strong> <em>falso</em>: A fin de ser no obstructivo a los usuarios, quitar el script no debería evitar que puedan utilizar tu sitio, aunque su interacción sea menos rica que la de los usuarios cuyos navegadores sí soportan JavaScript.</li>
<li><strong>Suposición: todos los navegadores funcionan igual.</strong> <em>falso</em>: A fin de ser no obstructivo a los navegadores, tu script debe evitar errores y problemas de compatibilidad, y tomar en consideración dispositivos especiales como lectores de pantalla y teléfonos móviles.</li>
<li><strong>Suposición: todo el mundo entenderá mi código.</strong> <em>falso</em>: A fin de ser no obstructivo a los compañeros programadores, tus scripts deben consistir de código limpio y claro con abundantes comentarios que indiquen lo que tu código está haciendo (o debería hacer).</li>
</ul>

<p>Este artículo tratará las dos primeras suposiciones en detalle.</p>

<p>Adicionalmente a evitar estas suposiciones, el JavaScript no obstructivo requiere que separes tu código JavaScript del HTML. Como ese es, por mucho, el aspecto más técnico de esta filosofía de programación, lo cubriremos primero y volveremos a las  luego.</p>

<h2 id="separacion">Separación de la estructura y el comportamiento</h2>

<p>De la misma manera como debemos separar la estructura de la presentación poniendo todo el CSS en un archivo separado y evitando el uso del atributo <code>style</code> u otros tipos de marcaje presentacional, también debemos separar nuestra estructura HTML del comportamiento con JavaScript. Las razones son las mismas: Separa tus ocupaciones, mantiene el código limpio y te permite trabajar en el JavaScript sin tocar el HTML o CSS.</p>

<p>La regla básica es simple: un archivo HTML no debe contener JavaScript, de la misma manera que no debe contener CSS. Hay dos cosas que los autores colocan en sus archivos HTML: Scripts incrustados y manejadores de eventos. Eliminarlos es la manera más simple de lograr la separación de la estructura y el comportamiento.</p>

<p>Como aprendiste en el artículo anterior, los scripts incrustados son pedazos de código JavaScript dentro de la pagina HTML entre elementos <code>&lt;script&gt;</code>. Pueden ser movidos fácilmente a un archivo JavaScript externo, así que no representan un gran problema.</p>

<p>Manejadores de eventos definidos en línea como el siguiente <code>&lt;a href=&quot;somewhere.html&quot; onmouseover=&quot;hideAll()&quot;&gt;</code> son un poco más difíciles de remover. Estos definen que manejadores de eventos (funciones JavaScript) deben ejecutarse cuando cierto evento ocurre. Lo que debemos hacer para hacerlo no obstructivo es mover la asignación del manejador del evento a un archivo aparte. Esto significa que el script externo primero debe encontrar el elemento correcto y luego asignar el manejador del evento.</p>

<p class="note">Para aprender más sobre manejadores de eventos, revisa el artículo <a href="http://dev.opera.com/articles/view/handling-events-with-javascript/">Handling events with JavaScript</a>.</p>

<p>La manera más fácil de permitir que un elemento sea encontrado es dándole un ID. Por ejemplo:</p>

<pre><code>&lt;!-- HTML: --&gt;
&lt;a href=&quot;somewhere.html&quot; id=&quot;somewhereLink&quot;&gt;

&lt;!-- JavaScript: --&gt;
var x = document.getElementById(&#39;somewhereLink&#39;);
if (x) {
  x.onmouseover = hideAll;
}</code></pre>

<p>La función <code>hideAll()</code> se ejecuta siempre que el usuario coloque el cursor del ratón sobre el enlace, por lo tanto este poco de código es equivalente a <code>&lt;a href=&quot;somewhere.html&quot; onmouseover=&quot;hideAll()&quot;&gt;</code>.</p>

<p>Aun mejor, estas dos lineas de de código funcionan en cualquier pagina que contenga un elemento con <code>id=&quot;somewhereLink&quot;</code>, de modo que no tienes que repetirte una y otra vez. Y si la pagina no contiene dicho elemento, el chequeo <code>if (x)</code> se asegura de que no se generen mensajes de error: Asigna el manejador del evento sólo cuando el elemento <code>x</code> realmente existe.</p>

<p>¿Y si el navegador del usuario no soporta JavaScript? Obviamente, el evento mouseover no funcionará. El enlace sigue siendo un enlace, por lo tanto aún puede ser seguido.</p>

<p>Ahora nuestro código, adicional a que es más claro, es mucho más mantenible.</p>

<p>Por ejemplo, generalmente es bueno juntar los eventos <code>mouseover</code> y <code>focus</code>. El evento <code>mouseover</code> sólo funciona cuando el usuario utiliza un ratón. Las personas que no utiliza ratón colocarán el foco en el enlace que quieren presionar con el teclado y eso dispara el evento <code>focus</code>. Si registramos nuestra función manejadora con ese evento también (es decir, si le decimos a la función que debe ejecutarse cuando se dispare ese evento), nos habremos asegurado que nuestra aplicación también funciona con el teclado.</p>

<p>Eso es muy fácil de hacer cuando el script está separado adecuadamente del HTML:</p>

<pre><code>var x = document.getElementById(&#39;somewhereLink&#39;);
if (x) {
  x.onmouseover = <em>x.onfocus =</em> hideAll;
}</code></pre>

<p>Al agregar esos 12 caracteres hemos hecho esa parte de la aplicación accesible por medio de teclado. ¿Fácil no?</p>

<p>Ahora, pensemos en qué tendríamos que hacer si usáramos eventos definidos en línea. Tendríamos que manualmente ir por todos los enlaces del sitio que tengan <code>onmouseover</code> y agregarles <code>onfocus=&quot;hideAll()&quot;</code>. No sólo nos haría perder mucho tiempo que podría ser utilizado en algo útil, sino que es una forma de trabajar propensa a errores, ya que podríamos olvidar un enlace en alguna oscura plantilla que es utilizada en pocas ocasiones, o podría ocurrir algo tan simple como un error de tecleo.</p>

<p>Por lo tanto, de la misma manera que es sabio separar el HTML y el CSS, es buena idea separar el HTML y el JavaScript. Eliminar los scripts incrustados y los eventos definidos en línea es bastante fácil, y mejora la calidad y mantenibilidad del código de manera inmediata.</p>

<h2 id="usabilidad">Agregando una capa de usabilidad</h2>

<p>Ya que hemos tratado el aspecto más técnico del JavaScript no obstructivo, es hora de volver a las suposiciones discutidas anteriormente. La más importante es nunca suponer que todos soportan JavaScript, y esto se une directamente con el propósito general detrás de agregar scripts as un sitio web.</p>

<p>El propósito de JavaScript es agregar una capa de usabilidad a tu sitio. Toma nota de que se trata de &quot;agregar&quot;: si el script <em>es</em> la capa de usabilidad completa (en otras palabras, si el sitio no es usable sin JavaScript), has cometido un error muy grave y tu script es obstructivo.</p>

<h3 id="validacionformularios">Ejemplo—validación de formularios</h3>

<p>Un ejemplo servirá para clarificarlo, discutamos acerca de la validación de formularios. Los datos insertados por el usuario <em>siempre</em> deben ser revisados en el servidor antes de almacenarlos en una base de datos, porque confiar ciegamente en los datos que un usuario al azar, posiblemente malicioso, rellene en el formulario es la manera más segura de lograr que tu sitio sea hackeado—siempre debemos revisar los datos antes de aceptarlos.</p>

<p>La desventaja de la validación del lado del servidor, es que puede tomar un poco más. El usuario envía el formulario al servidor y el servidor genera una página de respuesta que notifica al usuario si hubo errores o no en el envío de los datos. Sin importar cuán rápido responda el servidor, siempre habrá un pequeño retraso entre el momento en que se hace el envío y la respuesta—digamos, medio segundo.</p>

<p>Peor aún, si el usuario comete un error—como olvidar su dirección— tendrá que corregir el problema y enviar el formulario una vez más, lo que significará medio segundo adicional. No es mucho, pero se agregan en la mente del usuario, especialmente si tiene que hacerlo varias veces.</p>

<p>Es aquí cuando JavaScript entra en el dibujo. Si agregas un script que revise el formulario antes de enviarlo al servidor, podrás atrapar los errores de usuario típicos sin necesidad de hacer el viaje de ida y vuelta al servidor, y la interfaz parecerá funcionar rápidamente y de manera fluida.</p>

<p>Así que usar JavaScript para la validación de formularios es una buena idea. Sin embargo—y este es el verdadero punto— JavaScript debe ser usado <em>adicionalmente a</em> la validación del lado del servidor. La primera te dará una interfaz más fluida, pero la segunda te dará la seguridad verdadera (es fácil sortear la validación con JavaScript si deseas generar daño: sólo desactiva JavaScript) así como una opción alternativa en caso de que el navegador del usuario no soporte JavaScript.</p>

<p class="note">Desde principios de 2009 (esto podría cambiar en el futuro próximo) Opera tiene una ventaja sobre otros navegadores ya que soporta la <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/forms.html#forms">especificación de Formularios Web 2.0</a> de HTML 5, que es básicamente una forma avanzada de crear formularios en HTML, que incluye una forma de validación del lado del cliente que no requiere JavaScript, de modo que no puede ser sorteada al desactivarla. Para aprender más sobre Formularios Web 2.0, revisa el artículo <a href="http://dev.opera.com/articles/view/improve-your-forms-using-html5/">Mejora tus formularios usando HTML 5</a>.</p>

<h3 id="principios">Principios</h3>

<p>Este ejemplo ilustra unos principios importantes:</p>

<ol>
  <li>Tu sitio debería funcionar sin JavaScript.</li>
 <li>Si JavaScript está habilitado, puedes presentar al usuario una capa adicional de usabilidad; una capa le permite al usuario realizar las tareas de una manera más rápida y evita en, donde sea posible, recargas a las páginas.</li>
  <li>JavaScript no es seguro. Es decir, *nunca* debes confiar en rutinas JavaScript tareas vitales como chequear los datos introducidos por el usuario. Después de todo, un usuario malicioso puede desactivarlo y sortear tus defensas.</li>
</ol>

<p>Ahora, exactamente, ¿Qué significa que tu sitio debe funcionar sin JavaScript? Significa que cualquier usuario, sin importar que dispositivo y software use, debe poder leer el contenido de tu sitio y usar la navegación y demás funciones críticas. Nada más, y (más importante aún) nada menos.</p>

<p>La parte importante es que <em>no</em> es necesario ofrecer a tus usuarios que no soportan scripts <strong>la misma</strong> funcionalidad que a los que sí manejan scripts. En el ejemplo de la validación, los usuario sin scripts deberán esperar medio segundo antes de conocer los resultados del envío del formulario y por lo tanto tendrán una experiencia un tanto peor que aquellos que sí soportan scripts.</p>

<p>De hecho, eso es una regla general. Cuando JavaScript está desactivado, sufre la usabilidad, y tu trabajo como desarrollador es asegurarte que la gente pueda hacer uso de los aspectos básicos de tu sitio: Contenido y navegación. Todas los demás características se vuelven opcionales.</p>

<h3 id="ventanasemergentes">Ejemplo—ventanas emergentes</h3>

<p>Consideremos otro ejemplo, ventanas emergentes. Algunas veces son realmente útiles, y crearlas es relativamente sencillo—si el navegador soporta JavaScript. Sin embargo, si no lo soporta los usuarios no verán la ventana. ¿Cómo mantienes tu sitio accesible a la vez que ofreces a los navegadores con JavaScript activado una interfaz más fluida?</p>


<pre>
En HTML:
&lt;a href=&quot;somewhere.html&quot; class=&quot;popup&quot;&gt;Ir a algún lugar&lt;/a&gt;

En JavaScript:
var x = document.getElementsByClassName(&#39;popup&#39;); // una función propia
for (var i=0;i&lt;x.length;i+=1) {
	x[i].onclick = function () {
		window.open(this.href,&#39;popup&#39;,&#39;arguments&#39;);
		return false;
	}
}
</pre>

<p>El aspecto crucial acá es el atributo <code>href</code> del enlace. Este define la página que deberá aparecer en la ventana emergente, pero adicionalmente se asegura que si JavaScript está desactivado el usuario pueda seguir el enlace. Así, este ejemplo es perfectamente accesible sin JavaScript —sólo que menos amigable.</p>

<p>Cuando JavaScript está activado agregas una capa adicional de usabilidad: La ventana emergente. Encuentras todos los enlaces que tengan <code>class=&quot;popup&quot;</code> y les agregas un manejador de evento <code>onclick</code> que abre la ventana emergente. ¿Qué página debe mostrarse en la ventana? la que está definida en el atributo <code>href</code> del enlace (<code>this.href</code>).</p>

<p>Un ejemplo diferente, mismo principio. Primero asegúrate que cualquier usuario tenga acceso a la información; luego agrega un poco de JavaScript encima para hacer que la interfaz funciones de manera más fluida.</p>

<h3 id="ajax">Ejemplo—Ajax</h3>

<p>Esta teoría a veces es difícil de aplicar en la práctica, especialmente cuando quieres desarrollar un sitio web Ajax y eres novato en esto del desarrollo web. Un truco útil para entender esta técnica es pensar en capas. ¿Cuál es la funcionalidad básica del sitio? Esta funcionalidad debería ser colocada en la capa inferior, la cual es accesible con o sin JavaScript. Encima de eso puedes aplicar el número de capas de usabilidad que desees con JavaScript de modo de hacer el sitio más fácil de usar. Dichas capas no interfieren con el funcionamiento básico del sitio; sólo ofrecen elementos adicionales.</p>

<p>Utilicemos un ejemplo para aclarar esta regla general. Supongamos que tu sitio es sobre comparativas de teléfonos móviles. La funcionalidad básica de tu sitio será algo como esto:</p>

<ol>
  <li>Buscar ciertos teléfonos móviles, ya sea por criterios generales como “soporta wifi” o “puede ser sincronizado con el computador personal”.</li>
  <li>Obtener una lista de teléfonos que coincidan con la búsqueda.</li>
  <li>Ordenar dicha lista por precio, nombre/tipo, o relevancia.</li>
</ol>

<p>Todas esas funciones pueden ser creadas sin una sola línea de Javascript, y tu primera tarea es hacer justamente eso. Así que creas:</p>

<ul>
  <li>Una página de búsqueda.</li>
  <li>Una página para la lista, generada por el servidor, basado en la búsqueda.</li>
  <li>Enlaces en dicha página obtienen el mismo listado ordenado de manera distinta por el servidor.</li>
</ul>

<p>Una vez que has hecho estas página sin scripts, has creado la capa básica que funcionara más o menos con cualquier dispositivo.</p>

<p>Una vez que has hecho esto, añades funcionalidad JavaScript a esas páginas básicas. Lo más obvio es un script para ordenar. Después de todo, los datos son necesarios para realizar el ordenamiento—tales como el precio y las capacidades—ya se encuentran en la tabla en la página y no necesitas una solicitud más al servidor para obtenerla. Tan sólo necesitas escribir un código que reordene los elementos <code>&lt;tr&gt;</code> de dicha tabla.</p>

<p>Una vez que has escrito tu script debes asegurarte que el usuario realmente puede utilizarlo. Darle al usuario un enlace para dicha funcionalidad es la solución más obvia.</p>

<p>El punto importante aquí es que tú <em>ya tienes los enlaces</em> en la tabla: los enlaces que obtienen del servidor las listas ordenadas en distintas formas. Por mucho, la mejor solución es anular el comportamiento original de esos enlaces, de la misma manera que hicimos con el ejemplo de las ventanas emergentes.</p>

<p>Así, escribes una función adicional que asigna el manejador de evento <code>onclick</code> de modo que al hacer click se ejecute el script de ordenamiento en lugar de la página en el servidor</p>

<p>Por lo tanto, todos los usuarios verán los mismos enlaces para ordenar, pero el comportamiento exacto dependerá de que el navegador soporte la capa adicional de usabilidad agregada con JavaScript. Si puede, ejecutará tu script, y si no solicitará la página al servidor.</p>

<p>Anular el funcionamiento original de un elemento HTML es uno de los principales ejemplos de JavaScript no obstructivo. Si el navegador del usuario soporta tus scripts, perfecto, los ejecuta. Si no, volverá al funcionamiento original del elemento HTML. Siempre y cuando de adhieras a este principio, tus scripts serán no obstructivos.</p>

<h2 id="htmlsemantico">HTML semántico y limpio</h2>

<p>Los script son ejecutados en el contexto de las páginas web. ¿Qué tipo de páginas web? En teoría, cualquier página servirá mientras hayan elementos HTML que manipular. En la práctica, sin embargo, te darás cuenta rápidamente que las páginas respetuosas de los estándares y que usan HTML semántico, bien estructurado y que separa adecuadamente el HTML del CSS son mucho más fáciles para trabajar que aquellas monstruosidades de tablas generadas por algunos editores WYSIWYG.</p>

<p>Supón que estás trabajando en un sitio de noticias y quieres que todas las páginas tengan una tabla de contenidos a cada título en el artículo. La manera más sencilla de lograrlo es recorrer todos los elementos de encabezado (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, etc.), crear una lista, y asegurarse que al hacer click en cada elemento de la lista lleve al usuario al encabezado apropiado. Script hecho, siguiente trabajo. (A propósito, este script también es no obstructivo. La funcionalidad de ir a un encabezado es un extra agradable, pero si no estuviese el usuario aún podría leer el contenido y utilizar la navegación.)</p>

<p>Ahora supón que el sitio en el que estás trabajando no tuvo la suerte de ser creado con HTML semántico y CSS como has aprendido. Supón que se ve así:</p>

<pre><code>&lt;div class=&quot;contentcontainer&quot;&gt;
  &lt;p class=&quot;maincontent&quot;&gt;&lt;b class=&quot;headline&quot;&gt;McCain suspende la campaña para pasar más tiempo con su economía&lt;/b&gt;&lt;br&gt;
  En una movida que sorprendió a los observadores políticos [etc etc]&lt;/p&gt;
&lt;/div&gt;</code></pre>

<p>¿Podrías escribir un script para generar la tabla de contenidos con una página marcada de sea manera tan deficiente? Seguro. Sólo debes recorrer todos los elementos <code>&lt;b&gt;</code> y especificar que cada uno que tenga <code>class=&quot;headline&quot;</code> es de hecho un encabezado—así tu script debería funcionar.</p>

<p>No obstante, algo que se ha perdido es el anidamiento estructural que está implícito en los niveles de encabezado. Una página limpia y semántica imparte, inmediatamente, el conocimiento de que un encabezado <code>&lt;h3&gt;</code> será un subtítulo del <code>&lt;h2&gt;</code> que lo precede, y tu script puede tomar ventaja de ese hecho.</p>

<p>En una página no-semántica como la anterior, tendrías que buscar la manera de determinar si un <code>&lt;b class=&quot;headline&quot;&gt;</code> se refería a un título, un subtítulo, un subsubtítulo o algo diferente.</p>

<p>Ahora, aún <em>ese</em> problema puede ser resuelto, pero ese no es el punto. El punto es que si el autor del HTML utiliza los elementos adecuados para marcar los encabezados, estarás <em>absolutamente seguro</em> de que tu script encontrará la información correcta sin importar donde se ejecute. En cambio, si el autor del HTML usa cosas como <code>&lt;b class=&quot;headline&quot;&gt;</code>, él no sabe realmente lo que está haciendo, lo que significa que subsiguientes versiones del HTML podrían utilizar elementos &lt;strong&gt; o &lt;span&gt;. Y cada vez que el HTML cambia, tendrás que cambiar tu script también.</p>

<p>Por lo tanto, los scripts que funcionan con páginas limpias y semánticas son generalmente más fáciles de escribir y siempre serán <em>mucho</em> más fáciles de mantener que aquellos que funcionan con una sopa de etiquetas.</p>

<h2 id="compatibilidad">Compatibilidad con los navegadores</h2>

<p>El JavaScript no obstructivo también pide que los scripts sean no obstructivos a los navegadores. En la práctica lo que significa es que el script debe funcionar en la mayor cantidad de navegadores, y si no funciona no debe generar un mensaje de error sino degradarse de manera elegante, dejando al visitante con una página con su funcionalidad trabajando. Esto suena perfecto, pero es uno de los aspectos más difíciles de dominar en el desarrollo con JavaScript.</p>

<p>El gurú del desarrollo con JavaScript Douglas Crockford llama a los navegadores “el entorno de desarrollo más hostil del mundo.” No sólo que el navegador es una verdadera plataforma de desarrollo de aplicaciones con un mal récord de proveer cosas como depuradores de errores - debuggers - (aunque en ese caso, también, las situación está mejorando), pero sólo la cantidad de diferencias entre ellos puede rápidamente llevar a la locura a los novatos.</p>

<p>Desafortunadamente las incompatibilidades son un hecho de la vida. Tan pronto cuando tratas de escribir código JavaScript no trivial, descubrirás que el comportamiento de los distintos navegador puede diferir significativamente. Comúnmente sucederá que tu script funciona en todos los navegadores excepto IE, aunque los demás navegadores también tienen su cuota de problemas.</p>

<p>La raíz de estas incompatibilidades es que los principales navegadores tienen sus propios motores para el análisis sintáctico del código, y dichos motores difieren el uno del otro.</p>

<p>La fuente más común de problemas proviene de Internet Explorer; hay una buena cantidad de funcionalidades que se comportan distinto a otros navegadores, o que simplemente no están soportadas. El equipo de MSIE está trabajando en hacer este navegador más obedientes a los estándares, pero no ha culminado el trabajo aún. Así que puedes esperar algunos problemas.</p>

<p>Aún si esos problemas fueran solucionados de manera mágica, bastantes incompatibilidades continuarían existiendo, simplemente porque algún navegador aún no soporta cierto método, o porque sus programadores cometieron un error honesto mientras lo implementaban.</p>

<p>Así que tenemos un problema y no desaparecerá pronto. ¿Cómo lidiamos con él?</p>

<p>La mejor estrategia es aceptarlo y enfocarse en los detalles técnicos, los cuales serán discutidos en artículos posteriores de la serie. Desafortunadamente, aprender de memoria todas las incompatibilidades entre los navegadores es imposible, pero hay varias ayudas para los programadores que empiezan a usar JavaScript. <a href="http://quirksmode.org">QuirksMode.org</a> ofrece tablas que muestran cuales métodos y propiedades son soportados por cuales navegadores, y ofrece copiosas notas sobre errores.</p>

<p>Adicionalmente, muchas personas han transitado ese camino antes. Algunos de ellos decidieron crear librerías JavaScript que sortean los peores problemas por ti. Por lo tanto, usar una librería para resolver los problemas de incompatibilidad entre los navegadores es una estrategia viable.</p>

<p>No obstante, ten cuidado. Como novato en JavaScript, deberías considerar escribir tu primer proyecto sin la ayuda de librerías. La razón es que un programador JavaScript experimentado <em>debes</em> trabajar duro para obtener los conocimientos de qué es lo que sucede internamente. Hacerlo así te permitirá obtener un sentido de las formas en que los navegadores pueden destrozar tu código, lo que ayudará a tu desarrollo como programador JavaScript.</p>

<p>Así que sí, usa librerías para sortear los problemas, pero resiste a la tentación de usarlas de inmediato. Trata de trabajar sin ellas para obtener una idea de a qué te enfrentas.</p>

<h2 id="resumen">Resumen</h2>

<p>JavaScript no obstructivo es más una filosofía que una técnica. Por mucho su componente más importante es saber a qué capa pertenece cada funcionalidad. Todas las funcionalidades absolutamente indispensables deben ser codificadas en HTML puro, pero una vez que has creado esa base puedes agregar encima una capa de JavaScript de modo que los navegadores que lo soporten obtengan una interfaz más clara, agradable y ágil.</p>

<p>Además, JavaScript no obstructivo</p>

<ol>
	<li>Separa la estructura del comportamiento, de modo que el código sea más limpio y el mantenimiento del script más fácil</li>
	<li>Previene las incompatibilidades entre los navegadores</li>
	<li>Trabaja con una capa de HTML limpia y semántica</li>
</ol>

<p>El JavaScript no obstructivo no es tan difícil. Es, más que todo, un truco de la mente; una vez que has pasado unas horas planificando un script no obstructivo notarás que tomar la decisión correcta se hace cada vez más fácil.</p>

<p>Una vez que te acostumbras al JavaScript no obstructivo, no querrás volver al viejo modelo obstructivo.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/javascript-best-practices-es/" rel="prev" title="enlace al artículo anterior de la serie">Artículo anterior—Mejores prácticas de JavaScript</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/javascript-functions-es/" rel="next" title="enlace al artículo siguiente de la serie">Siguiente artículo—Funciones en JavaScript</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabla de contenidos</a></li>
</ul>

<h2>Acerca del autor</h2>

<img src="/articles/view/unobtrusive-javascript/ppk.jpg" alt="Foto del autor Peter Paul Koch" style="float:right;" />

<p style="padding-bottom:50px;">Peter-Paul Koch es un desarrollador web freelance de en Amsterdam, Países Bajos. El escribe y mantiene <a href="http://www.quirksmode.org">quirksmode.org</a>, actualmente una de las mejores fuentes sobre JavaScript disponibles en Internet.
Su Tabla de Compatibilidades del DOM de la W3C, especialmente, le ha ahorrado a los desarrolladores web un estimado de GBP 5 millones en implantes de cabello y productos de cuidado capilar.
Proveedores de navegadores como Microsoft, Opera, y Apple usan dichas tablas para solucionar errores en sus productos.</p></ul>
