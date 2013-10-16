Title: Funciones en JavaScript
----
Date: 2010-05-13 16:37:05
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
<li class="prev"><a href="http://dev.opera.com/articles/view/unobtrusive-javascript-es/" rel="prev" title="link to the previous article in the series">Artículo anterior—Los Principios del Java Script No Obstrusivo</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/objects-in-javascript-es/" rel="next" title="link to the next article in the series">Siguiente artículo—Objetos en Java Script</a></li><li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabla de Contenido</a></li>
</ul>

<h2>Introducción</h2>

<p>Las funciones son la esencia de prácticamente todo lo <em>útil</em> que harás con Java Script.  En términos generales, las funciones ofrecen la capacidad de dividir lógicamente un programa en varias secciones, cada una de las cuales implementa una funcionalidad específica.Las funciones son una característica central de este lenguaje, y una buena parte del atractivo de Java Script se debe a la forma particular en la que te permite crear y utilizar funciones.  Si ya has hecho algo de programación en lenguajes como PHP o Java, te sentirás como en casa con las funciones de Java Script; si no, no hay razón para preocuparse.  Las funciones son <em>críticas</em>, pero no es dífícil adaptar la mente a ellas. Este artículo explica por qué desearás comprender las funciones, luego ingresa a su sintaxis y te muestra cómo crearlas y utilizarlas.</p>

<p class="note">En este artículo, <a href="http://dev.opera.com/articles/view/javascript-functions/functions_code.zip">los ejemplos de funciones están disponibles para ser descargados</a>, y a la vez están enlazados a páginas de muestra apropiadas.</p>

<p>La estructura de este artículo es la siguiente:</p>

<ul><li><a href="#whatandwhy">Qué y Por Qué</a></li><li><a href="#functionsyntax">Sintaxis de una función</a>  <ul>    <li><a href="#usingthefunction">Utilizando una función</a></li>    <li><a href="#arguments">Argumentos</a></li>    <li><a href="#returnvalues">Mostrando valores calculados</a></li>  </ul></li><li><a href="#summary">Sumario</a></li><li><a href="#exercises">Preguntas de práctica</a></li></ul>

<h2 id="whatandwhy">Qué y Por Qué</h2>

<p>Ciertamente, no deseas tener que refrescar la memoria cada que vez que necesitas hacer un cálculo específico; es mucho mejor codificar los pasos de ese cálculo <strong>sólo una vez</strong>, reunirlos como una función <code>calculateSomething</code> y entonces usar ese código cada vez que necesites hacer lo mismo. El simple acto de reunir un grupo de comandos significa que puedes concentrarte en las <em>actividades</em> que tu código implementa sin preocuparte de los detalles de los pasos internos de esas actividades. Puedes pensar en las funciones que escribes como una capa que se agrega sobre el núcleo de JavaScript; estás creando <em>nuevos comandos</em> que son más expresivos y comprensibles en el entorno de tu propia aplicación</p>

<p>Con eso en mente, el por qué de las funciones tiene una respuesta muy sencilla: son los bloques de construcción básicos que te permiten estructurar tu código para mejorar la comprensión de su propósito, y reutilizar las funciones que ya has escrito para evitar repetir el mismo código varias veces.  Tu programa será más fácil de escribir y probar si lo divides en pequeñas piezas, cada una con una tarea definida</p>

<p>Además, dividir tu código en funciones bien diseñadas hace mucho más fácil su mantenimiento futuro.  Imagina, por ejemplo, que las reglas del horario de ahorro de energía son cambiadas cada año.  Si has hecho ese cálculo ochenta y cinco veces en todo tu proyecto, <em>vas a introducir nuevos errores</em> al actualizar el código en cada una de esas piezas de código; es un proceso repetitivo, manual, y propenso a fallar.  Por otro lado, cambiar una unica función <code>calculateDaylightSavings</code> te permite transmitir ese cambio a través de todo el resto del programa, en forma muy parecida a cómo una hoja de estilo CSS actúa sobre toda una página web. Así, las funciones hacen que el mantenimiento sea muchos menos propenso al error, y más fácil de implementar exitosamente.</p>

<h2 id="functionsyntax">Sintaxis de una Función</h2>

<p>Definir tus propias funciones es una tarea sencilla.  Por ejemplo, construyamos una <a href="http://dev.opera.com/articles/view/javascript-functions/functions_1.html">función que genera un color de fondo para un elemento</a> de una página web.</p>

<pre><code>function setElementBackground() {  var red = Math.floor(Math.random() * 256);  var green = Math.floor(Math.random() * 256);  var blue = Math.floor(Math.random() * 256);  var obj = document.getElementById(&#39;element_to_change&#39;);  if ( obj ) {    obj.style.background = &#39;rgb(&#39; + red + &#39;,&#39; + green + &#39;,&#39; + blue + &#39;)&#39;;  }}</code></pre>

<p>Sin preocuparte mucho por el código ejecutado por la función, me gustaría que prestes atención en este momento a 4 características importantes de la sintaxis de la función:</p>

<ol>  <li>Una declaración de función siempre empieza con la palabra clave <code>function</code>, lo cual tiene sentido.</li>  <li>El siguiente punto es el nombre de la función, en este caso <code>setElementBackground</code> (Generalmente uso <a href="http://en.wikipedia.org/wiki/CamelCase">camelCase</a> para los nombres de las funciones).  El nombre de la función es importante, porque es lo que debes recordar para utilizarla y reutilizar su código.  Asegúrate de que sea una descripción precisa de lo que la función hace; estoy seguro de que estarás de acuerdo en que <code>setElementBackground</code> es un nombre de función <strong>sumamente</strong> mejor y más descriptivo que algo como <code>coloursAreNice</code> o <code>crazySetter</code>.</li>  <li>Inmediatamente después del nombre de la función viene un par de paréntesis.  Dentro de ellos viene la <strong>lista de argumentos</strong> de la función, la cual te permite hacer la función más genérica y reutilizable; puedes aplicarla a más situaciones más fácilmente. Este es un concepto poderoso, pero opcional, por lo que lo explicaré con más detalle en la siguiente sección.</li>
<li>Finalmente viene un par de llaves que contienen código: esto significa un <strong>bloque</strong> de código en JavaScript.  Todo lo que está en el bloque será ejecutado cuando la función sea llamada, en orden, en la misma forma que cualquier otra porción de código en JavaScript que hayas escrito.</li></ol>

<h3 id="usingthefunction">Utilizando una Función</h3>

<p>Ahora que hemos definido la función, para llamarla desde alguna parte del código podrías simplemente escribir:</p><pre><code>setElementBackground();</code></pre><p>¡Y eso es todo!  Ya no tienes que preocuparte por los detalles internos de <code>setElementBackground</code>; ya has escrito el código, por lo tanto ahora puedes usarlo donde quieras, y disfrutar los (variables) beneficios de su reutilización.</p>

<p>Ahora, la función que he escrito es completamente autocontenida. Realiza una actividad, luego sale; no necesita ingreso de información desde el código que la llamó, ni devuelve al código que la llamó alguna información sobre lo que sucede. JavaScript, por supuesto, permite escribir código un poco más comunicativo y flexible que ese, así que veamos cómo podemos manejar el ingreso y salida de información en las funciones.</p>

<h3 id="arguments">Argumentos</h3>

<p>Ingresar información a una función para influenciar su comportamiento es una gran forma de hacerla más flexible y útil en una amplia variedad de situaciones.  Por ejemplo, he codificado en forma muy cerrada el <code>id</code> del elemento cuyo color de fondo es cambiado en la función <code>setElementBackground</code>; sería mejor poder especificar diferentes elementos en la página web cada vez que llame a la función,  y así podría <em>reutilizarla</em> para diferentes elementos, en vez de repetir todo ese código.  <strong>Los argumentos de la función</strong> son la solución.</p>

<p>Hace un momento, indiqué que la definición de función contiene un par de paréntesis inmediatamente después del nombre de la función.  Esta es la <strong>lista de argumentos</strong> de la función.  Para recibir información del código que la llama, sólo especifica una lista separada por comas de las variables que tu función aceptará. Puedes especificar tantas o tan pocas como desees, y los nombres que uses en la lista de argumentos pueden ser mencionados en el cuerpo de la función en la misma forma que cualquier otra variable. La función <code>setElementBackground</code> actualizada se ve así (<a href="http://dev.opera.com/articles/view/javascript-functions/functions_2.html">revisa el primer ejemplo de mejora</a> ):</p>

<pre><code>function setElementBackground( elementID ) {  var red = Math.floor(Math.random() * 256);  var green = Math.floor(Math.random() * 256);  var blue = Math.floor(Math.random() * 256);  var obj = document.getElementById( elementID );  if ( obj ) {    obj.style.background = &#39;rgb(&#39; + red + &#39;,&#39; + green + &#39;,&#39; + blue + &#39;)&#39;;  }}</code></pre><p>Llamar a esta función con un element ID entregado como argumento es muy simple:</p>

<pre><code>setElementBackground( &#39;element_to_change&#39; );</code></pre>

<p>Si accidentalmente llamas a la función sin indicar un argumento, toma el valor <code>undefined</code>.  Puedes probar esto en el cuerpo de tu función para crear alguna protección contra errores de uso no intencionales:</p>

<pre><code>if ( elementID == undefined) {  // esto dará como resultado `true` si la variable `elementID`  // no ha sido entregada.  // Luego puedes escribir código dentro de este bucle if  //para evitar que el programa genere errores.}</code></pre>

<p>Un punto confuso pero interesante acerca de los argumentos de una función es que los nombres de variables en la lista de argumentos no tienen <em>nada</em> en común con los nombres de variables entregados a la función.  Si <code>elementID</code> es definido como el argumento de la función, JavaScript crea una variable <em>dentro</em> de la función llamada <code>elementID</code> que no tiene efecto en ninguna variable fuera de la función - puedes tener otra función fuera de la función con el mismo nombre, y su valor no se alteraría como resultado de cualquier indicación en la función original. Por ejemplo:</p>

<pre><code>var elementID = &quot;No change!&quot;;setElementBackground( &#39;element_to_change&#39; );alert( elementID ); // Alerts &quot;No change!&quot;;</code></pre>

<p>esto tiene un importante efecto colateral.  JavaScript crea una nueva variable dentro de la función pero los cambios en su argumento intern <em>no tienen efecto</em> sobre ninguna variable entregada a la función.  Hablaré un poco más de este concepto (llamado <strong>scope</strong>) en los artículos sobre <a href="http://dev.opera.com/articles/view/objects-in-javascript-es/">Objetos</a> y <a href="http://dev.opera.com/articles/view/javascript-best-practices/">Buenas Prácticas en JavaScript</a>, pero por ahora, veamos un ejemplo rápido.  Definiré una función <code>substring</code> que acepte una cadena y un punto de inicio:</p>

<pre><code>function substring( obj, start ) {  obj = obj.substring(8);}var myString = &quot;Esto es una cadena!&quot;;substring(myString, 8);alert(myString); // muestra el mensaje de alerta &quot;esto es una cadena!&quot;</code></pre>

<p>Pese a que la variable <code>obj</code> es reasignada dentro de la función al resultado del método interno <code>substring</code>, <code>myString</code> no es afectada en lo más mínimo; sólo la <em>copy</em> de <code>myString</code> dentro de <code>substring</code> fue cambiada.  La variable externa no cambia con nada de lo que suceda.</p>

<p>Esto da lugar a una pregunta sobre comunicación: si cambiar el valor de los argumentos no tiene efecto fuera de la función, ¿cómo devuelves información de una función al código que la llamó? Veamos esto ahora.</p>

<h3 id="returnvalues">Mostrando valores calculados</h3>

<p>Es muy común que una función haga algunos cálculos, y devuelva el resultado al código que la llama, para ser utilizdo donde convenga. Podría se muy útil, por ejemplo, para nuestra función <code>setElementBackground</code> devolver un array de los valores de color para usarlo donde convenga.  Es un simple asunto de usar la palabra clave <code>return</code> de JavaScript, como se muestra aquí:</p>

<pre><code>function setElementBackground( elementID ) {  var red = Math.floor(Math.random() * 256);  var green = Math.floor(Math.random() * 256);  var blue = Math.floor(Math.random() * 256);  var obj = document.getElementById( elementID );  if ( obj ) {    obj.style.background = &#39;rgb(&#39; + red + &#39;,&#39; + green + &#39;,&#39; + blue + &#39;)&#39;;  }  return [ red, green, blue ];}</code></pre>

<p><a href="http://dev.opera.com/articles/view/javascript-functions/functions_3.html">observa el segundo ejemplo de mejora</a> en acción.</p><p>Este simple agregado significa que ahora puedes llamar la función en forma tal que se guarde su resultado en una variable:</p>

<pre><code>var my_result = setElementBackground(&#39;element_to_change&#39;);</code></pre>

<p>Incluso si tu función no necesita devolver un valor, o no tiene un valor para devolver, es una buena práctica indicar el éxito o error devolviendo los valores <code>true</code> o <code>false</code>, respectivamente.  Con eso en mente, cambiaré <code>setElementBackground</code> para devolver <code>false</code> si el <code>elementID</code> entregado en verdad no existe:</p>

<pre><code>function setElementBackground( elementID ) {  var red = Math.floor(Math.random() * 256);  var green = Math.floor(Math.random() * 256);  var blue = Math.floor(Math.random() * 256);  var obj = document.getElementById( elementID );  if ( obj ) {    obj.style.background = &#39;rgb(&#39; + red + &#39;,&#39; + green + &#39;,&#39; + blue + &#39;)&#39;;    return [ red, green, blue ];  } else {    return false;  }}</code></pre>

<p><a href="http://dev.opera.com/articles/view/javascript-functions/functions_4.html">observa el tercer ejemplo de mejora</a> en acción.</p>

<p>Esto te permite verificar que el código se ejecutó correctamente probando el valor que devuelve:</p>

<pre><code>if ( !setElementBackground(&#39;element_does_not_exist&#39;) ) {  alert(&quot;Something went wrong!  `element_does_not_exist` doesn&#39;t exist!&quot;);}</code></pre>

<p>Adicionalmente, toma en cuenta que la palabra clave <code>return</code> pone fin a la ejecución del código justo cuando es llamada, regresando la ejecución al punto en el cual tu función fue llamada.  El código que se escriba luego de la llamada a <code>return</code> no es ejecutado, simplemente es ignorado.</p>

<h2 id="summary">Sumario</h2>

<p>Con eso, ahora sabes prácticamente todo lo que necesitas para empezar a incluir funciones a lo largo de todo tu código.  Las funciones son una parte básica en todo buen código JavaScript y tus programas estarán mejor organizados, serán más claros, más legibles, y más fáciles de comprender si tomas la opción de agrupar el código en funciones bien nombradas que puedan reutilizarse.</p>

<h2 id="exercises">Preguntas de práctica</h2>

<ul><li>¿Qué son las funciones?  ¿Por qué son muy útiles?</li><li>¿Cómo defines una función?</li><li>¿Cómo ingresas información en una función?  ¿Porqué querrías hacerlo?  Inversamente, ¿cómo puedes recibir información de una función?</li><li>¿No sería interesante si pudieras ingresar un array de colores en `setElementBackground`?  Intenta modificar el código para aceptar otro argumento, y usa esa variable dentro de la función para anular el color de fondo aleatorio.</li></ul>

<ul class="seriesNav"><li class="prev"><a href="http://dev.opera.com/articles/view/unobtrusive-javascript-es/" rel="prev" title="link to the previous article in the series">Artículo anterior - Los Principios del Java Script No Obstrusivo</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/objects-in-javascript-es/" rel="next" title="link to the next article in the series">Artículo siguiente - Objetos en Java Script</a></li><li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabla de Contenido</a></li></ul>

<h2>Acerca del autor</h2>

<img src="/articles/view/javascript-functions/mikewest.jpg" alt="Foto del autor del artículo, Mike West" style="float:right;" />

<p>Mike West es un estudiante de filosofía ingeniosamente disfrazado como un experto y exitoso desarrollador web. Ha estado trabajando cn la web por más de una década, y más recientemente ha sido miembro del equipo responsable de construir los sitios europeos de noticias de Yahoo!.</p>

<p style="padding-bottom:50px;">Luego de dejar las amplias planicies suburbanas de Texas en 2005, Mike se estableció en Munich, Alemania, donde cada día lucha un poco menos con el idioma. <a href="http://mikewest.org/">mikewest.org</a> es su hogar en la web, donde (lentamente) está reuniendo sus escritos y enlaces para la posteridad. Almacena su trabajo de código en <a href="http://github.com/mikewest">GitHub</a>.</p>
