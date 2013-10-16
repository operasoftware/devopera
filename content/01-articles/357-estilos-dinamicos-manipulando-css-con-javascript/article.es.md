Title: Estilos dinamicos - manipulando CSS con JavaScript
----
Date: 2010-05-06 12:39:28
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

<li class="prev"><a href="http://dev.opera.com/articles/view/creating-and-modifying-html-es/" rel="prev" title="link to the previous article in the series">Art&#xED;culo anterior—Creando y Modificando HTML</a></li>

<li class="next"><a href="http://dev.opera.com/articles/view/handling-events-with-javascript/" rel="next" title="link to the next article in the series">Siguiente art&#xED;culo—Manejando eventos en JavaScript</a></li>

<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabla de contenidos</a></li>

</ul>



<h2>Introducci&#xF3;n</h2>



<p>En este punto de la secci&#xF3;n de JavaScript del curso, ya hemos cubierto los conceptos b&#xE1;sicos del

uso real de JavaScript, mirado c&#xF3;mo manejar elementos usando el &#xE1;rbol DOM, y visto c&#xF3;mo manipularlos

una vez que los hemos localizado correctamente.</p>

<p>En este art&#xED;culo echaremos un vistazo a c&#xF3;mo actualizar din&#xE1;micamente el estilo aplicado a los

elementos mediante la manipulaci&#xF3;n de las plantillas CSS en tiempo de ejecuci&#xF3;n utilizando JavaScript.

Para esto utilizaremos el mismo tipo de t&#xE9;cnicas que ya hemos visto, pero tendremos que tener en mente

una serie de consideraciones especiales cuando <em>trabajemos con las plantillas CSS</em>. Todo esto

quedar&#xE1; cubierto mediante las siguientes secciones:</p>



<ul>

  <li><a href="#accessingstylesheets">Accediendo a las hojas de estilos</a></li>

  <li><a href="#stylesheetproperties">Propiedades de las hojas de estilos</a></li>

  <li><a href="#addingandremovingrules">A&#xF1;adiendo y eliminando reglas</a></li>

  <li><a href="#changingelementstyles">Cambiando elementos Style</a></li>

  <li><a href="#elementclassnames">Nombres de clases de elementos</a></li>

  <li><a href="#summary">Res&#xFA;men</a></li>

  <li><a href="#exercisequestions">Ejercicios</a></li>

</ul>



<h2 id="accessingstylesheets">Accediendo a las hojas de estilos</h2>



<p>El navegador proporciona una interfaz para interactuar con las hojas de estilos —

en nuestro c&#xF3;digo JavaScript podemos acceder a una lista de nuestras hojas de estilos mediante

el uso de <code>document.styleSheets</code>. <code>document.styleSheets</code> nos devolver&#xE1; una

lista de todas las hojas de estilo aplicadas a una p&#xE1;gina, incluyendo hojas de estilos externas

referenciadas mediante un elemento <code>link</code>, y hojas de estilos internas que residan

dentro de elementos <code>style</code>. Si nuestros elementos <code>style</code> tienen el

atributo <code>id</code>, entonces podremos referenciarlos r&#xE1;pidamente mediante

<code>document.getElementById(<em>element_id</em>)</code>.</p>



<p>Adem&#xE1;s podemos a&#xF1;adir nuevas hojas de estilo a la p&#xE1;gina — podemos usar la funci&#xF3;n

<code>document.createElement</code> para crear un nuevo elemento <code>style</code>. Esto es

interesante cuando queremos dar a los visitantes de nuestra p&#xE1;gina la opci&#xF3;n de cambiar los

estilos de nuestra p&#xE1;gina din&#xE1;micamente, utilizando quiz&#xE1;s alg&#xFA;n bot&#xF3;n. A continuaci&#xF3;n se presenta

un peque&#xF1;o ejemplo de c&#xF3;mo se podr&#xED;a crear una nueva hoja de estilos:</p>



<pre><code>var hoja = document.createElement(&#39;style&#39;)
hoja.innerHTML = &quot;div {border: 2px solid black; background-color: blue;}&quot;;
document.body.appendChild(hoja);</code></pre>

<p>Eliminar una hoja de estilos es tambi&#xE9;n bastante simple. Primero tenemos que obtener la hoja

de estilos que queremos eliminar. Podemos hacer esto usando <code>document.getElementById</code>,

como se muestra en un peque&#xF1;o ejemplo anterior. Para eliminar la hoja de estilos, podemos usar la funci&#xF3;n

del &#xE1;rbol DOM <code><em>parent</em>.removeChild(<em>element</em>)</code>, donde <code>element</code>

es el objeto hoja de estilos que queremos eliminar, y <code>parent</code> es el nodo padre de nuestra

hoja de estilos. Como hemos visto antes, para eliminar la hoja de estilos (<code>hoja_a_eliminar</code>)

primero tenemos que obtener la referencia a su padre — <code>var padre = hoja_a_eliminar.parentNode</code>

— despu&#xE9;s tenemos que llamar a <code>removeChild</code> con el par&#xE1;metro de <code>hoja_a_eliminar</code> -

<code>padre.removeChild(hoja_a_eliminar)</code></p>



<pre><code>var hoja_a_eliminar = document.getElementById(&#39;idHojaEstilos&#39;);
var padre = hoja_a_eliminar.parentNode;
padre.removeChild(hoja_a_eliminar);</code></pre>

<p>El <a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript/accessingstylesheets.html">ejemplo de acceso a las hojas de estilos</a>

demuestra tanto el acceso a todas las hojas de estilos como la adicci&#xF3;n y eliminaci&#xF3;n

de nuevas hojas de estilos a la p&#xE1;gina.</p>

<h2 id="stylesheetproperties">Propiedades de las hojas de estilos</h2>

<p>El objeto <code>stylesheet</code> est&#xE1; disponible a trav&#xE9;s de JavaScript, y nos permite acceder a informaci&#xF3;n

acerca de las hojas de estilos referenciadas desde la p&#xE1;gina actual, por ejemplo, si la hoja de estilos est&#xE1;

desactivada, su localizaci&#xF3;n, y la lista de reglas de CSS que contiene. Para una lista completa de las propiedades

del objeto <code>stylesheet</code> (y otras cosas adem&#xE1;s), se puede revisar la

<a href="http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html">documentaci&#xF3;n W3C sobre las hojas de estilo

del &#xE1;rbol DOM</a>.</p>



<p>Consideremos un ejemplo (por ahora) te&#xF3;rico — digamos que tenemos un sitio web donde mostramos una

serie de art&#xED;culos t&#xE9;cnicos. Nosotros deseamos poner el foco en algunos de esos art&#xED;culos con un bonito

carrusel, pero tenemos el problema de los usuarios que no tienen activado JavaScript por alg&#xFA;n motivo.

Recordando las lecciones aprendidas en

<a href="http://dev.opera.com/articles/view/unobtrusive-javascript-es/">

los principios de un JavaScript discreto</a>, queremos que la funcionalidad del sitio web contin&#xFA;e

funcionando incluso para esos usuarios, pero deseamos estilizar nuestro sitio web diferente para esos

usuarios, de tal forma que su experiencia de usuario sea placentera, a&#xFA;n sin el carrusel.</p>



<p>Lo que podemos necesitar es una hoja de estilos que s&#xF3;lamente estar&#xE1; activa si JavaScript lo est&#xE1;.

Estamos de suerte — el interfaz del &#xE1;rbol DOM para las hojas de estilo nos da acceso al atributo

<code>disabled</code>, que nos permite activar o desactivar las hojas de estilos.</p>



<p class="note">Muchas de las propiedades del objeto <code>stylesheet</code> son de s&#xF3;lo lectura,

pero algunas, como <code>disabled</code>, no.</p>



<p>Adem&#xE1;s podemos usar las propiedades de las hojas de estilos para ayudarnos a diferenciar entre m&#xFA;ltiples

hojas de estilos en la p&#xE1;gina. La propiedad <code>src</code> nos ayuda a identificar hojas de estilos externas,

pero no nos ayuda a referenciar elementos de estilo internos. Una forma mejor, que nos permite tener referencias

a hojas de estilos individuales, tanto internas como externas, es usar la propiedad <code>title</code>. Si

recorremos <code>document.styleSheets</code> podemos ver las diferentes hojas de estilos que hemos

incluido en la p&#xE1;gina. El siguiente ejemplo nos muestra como podemos hacer ese recorrido:</p>



<pre><code>function getStyleSheet(tituloUnico) {
  for(var i=0; i&lt;document.styleSheets.length; i++) {
    var hojaEstilos = document.styleSheets[i];
    if(hojaEstilos.title == tituloUnico) {
      return hojaEstilos;
    }
  }
}</code></pre>



<p>Para cada objeto <code>stylesheet</code> recuperado del array <code>styleSheets</code> podemos acceder a

su propiedad <code>title</code> para comprobar si es el t&#xED;tulo que estamos buscando. Se puede ver un ejemplo

funcional de esto en el <a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript/addingandremovingrules.html">ejemplo sobre a&#xF1;adir y eliminar reglas</a>,

que discutiremos en la pr&#xF3;xima secci&#xF3;n.</p>

<p>Cambiar entre diferentes hojas de estilos basado en la preferencia de usuario es una facilidad bastante

com&#xFA;n entre los sitios web — utilizando lo que hemos presentado hasta aqu&#xED;, podemos tener m&#xFA;ltiples

hojas de estilos y activar solamente aquella que el usuario actual desee ver. Podemos ver eso en un ejemplo

real — inicialmente el texto tiene estilo, pero cuando cambiamos el atributo <code>disabled</code>

a <code>true</code>, nuestra CSS queda desactivada. Podemos tener activa nuestra CSS de nuevo poniendo

<code>disabled</code> a <code>false</code>. Esto se puede comprobar en el <a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript/stylesheetproperties.html">

ejemplo de propiedades de las hojas de estilos</a>, para un r&#xE1;pido vistazo de como se puede usar todo esto.</p>



<h2 id="addingandremovingrules">A&#xF1;adiendo y eliminando reglas</h2>



<p>&#xBF;Recordamos el ejemplo te&#xF3;rico de un sitio web que discutimos m&#xE1;s arriba? Recordemos que ese sitio

ten&#xED;a una lista de art&#xED;culos; algunos eran sobre CSS, otros eran sobre HTML, y otros sobre JavaScript.

En nuestra p&#xE1;gina web mostramos todos los art&#xED;culos, pero nuestro usuario s&#xF3;lo desea ver los art&#xED;culos

sobre CSS. &#xBF;C&#xF3;mo podemos hacer esto? Porque todos los art&#xED;culos se est&#xE1;n mostrando ya, y no queremos

tener que pedir al servidor una p&#xE1;gina espec&#xED;fica conteniendo justo los art&#xED;culos sobre CSS —

eso es una p&#xE9;rdida de tiempo.</p>



<p>Para solucionar este problema, podemos usar JavaScript para recorrer todos los art&#xED;culos y hacer que

solamente los art&#xED;culos sobre CSS sean visible (discutiremos sobre c&#xF3;mo hacer esto mas tarde), &#xF3; a&#xF1;adir

una regla a una de nuestras hojas de estilo que har&#xE1; que s&#xF3;lo los art&#xED;culos sobre CSS sean visibles.

Utilizar CSS ser&#xE1; m&#xE1;s r&#xE1;pido que recorrer todos los elementos uno a uno.</p>



<p>El objeto <code>stylesheet</code> dispone de dos funciones para ayudarnos con este problema. La primera

es la funci&#xF3;n <code>insertRule</code>, algo as&#xED; como esto:</p>



<pre><code>stylesheet.insertRule(regla, indice)</code></pre>



<p><code>regla</code> es una cadena conteniendo la regla que queremos a&#xF1;adir a la hoja de estilos.

<code>indice</code> especifica dentro de la lista de reglas de la hoja de estilos, d&#xF3;nde hay que

que poner esa regla. A continuaci&#xF3;n un ejemplo:</p>



<pre><code>hojaEstilos.insertRule(&quot;.have-border { border: 1px solid black;}&quot;, 0);</code></pre>



<p>Existe un ejemplo donde se demuestra el uso de la funci&#xF3;n <code>insertRule</code>. En ese ejemplo existe

una lista de todas las reglas en una hoja de estilos. Cuando presionamos el bot&#xF3;n, a&#xF1;ade una regla con el

&#xED;ndice 2 que hace que el texto se vuelva rojo, a&#xF1;adiendo la propiedad <code>color: red</code> a la regla

<code>p { ... }</code> rule. Se puede echar un vistazo a esto en el

<a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript/addingandremovingrules.html">ejemplo sobre a&#xF1;adir y eliminar reglas</a>.</p>



<p>Si deseamos eliminar esa regla, podemos llamar a la funci&#xF3;n <code>stylesheet.deleteRule(indice)</code>,

donde <code>indice</code> es el &#xED;ndice de la regla que queremos quitar.</p>



<p>En el ejemplo de este art&#xED;culo, podemos crear una regla que cambie display a <code>none</code> para todo el

HTML y los art&#xED;culos de JavaScript — podemos ver esto en acci&#xF3;n en el

<a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript/carousel.html">ejemplo del carrusel</a>.</p>



<p class="note">Advertencia: IE no implementa las reglas de acuerdo con el estandar. En vez del atributo

<code>cssRules</code> &#xE9;l utiliza <code>rules</code>. IE adem&#xE1;s usa <code>removeRule</code> en vez de

<code>deleteRule</code> y <code>addRule(selector, regla, indice)</code> en vez de <code>insertRule</code>.</p>

<h2 id="changingelementstyles">Cambiando elementos Style</h2>



<p>En este punto ya deberiamos entender como editar las p&#xE1;ginas de estilos asociadas a una p&#xE1;gina, y crear y

modificar las reglas CSS en ella. &#xBF;Y que pasa si lo que queremos es modificar un elemento espec&#xED;fico dentro

del &#xE1;rbol DOM?. Utilizando el API del &#xE1;rbol DOM podemos acceder a un elemento espec&#xED;fico de la p&#xE1;gina. Si echamos

la vista atr&#xE1;s, en el <a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript/carousel.html">ejemplo del carrusel</a>, la funcionalidad se define de tal forma

que cuando nosotros hacemos click sobre un art&#xED;culo, el art&#xED;culo se resalta mientras que el texto del art&#xED;culo se muestra debajo.</p>



<p>A trav&#xE9;s del &#xE1;rbol DOM, podemos acceder al objeto <code>style</code> que define el estilo de un elemento. Este

objeto <code>style</code> se define como <em>CSSStyleDeclaration</em>; se puede ver una explicaci&#xF3;n detallada

de esto en la <a href="http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration">documentaci&#xF3;n W3C

del interfaz <code>CSSStyleDeclaration</code></a>. El objeto <code>style</code> no funciona como otras propiedades

definidas en los elementos HTML. Es diferente, mientras <code>element.href</code> &#xF3; <code>element.id</code>

devuelven cadenas, <code>element.style</code> devuelve un objeto. Esto significa que no se puede establecer

un estilo simplemente asignando una cadena a <code>element.style</code>.</p>



<p>El objeto <code>style</code> tiene atributos que se corresponden con las diferentes propiedades CSS que

podemos establecer. Por ejemplo, <code>style.color</code> devuelve el color de un elemento. Si llamamos a

<code>element.style.color = &quot;red&quot;;</code> podemos aplicar ese cambio de estilo din&#xE1;micamente. A continuacion hay

una funci&#xF3;n que establece el color de un elemento a rojo cuando le pasamos el <code>id</code> del elemento.</p>



<pre><code>function colorElementRed(id) {
  var element = document.getElementById(id);
  element.style.color = &quot;red&quot;;
}</code></pre>



<p class="note">Tambi&#xE9;n podemos utilizar <code>setAttribute(key, value)</code> para establecer el estilo de

un elemento. Por ejemplo, podemos cambiar a rojo el color de un elemento invocando a

<code>element.setAttribute(&#39;style&#39;,&#39;color: red&#39;);</code>, pero debemos ser precavidos, porque esto borrar&#xE1;

cualquier cambio anterior que hayamos hecho al objeto <code>style</code></p>



<p>Cuando establecemos el estilo de un elemento de esta forma, es lo mismo que si lo estuvieramos asignando

en la declaracion del atributo <code>style</code> en el elemento <code>html</code>. El estilo s&#xF3;lo se se aplicar&#xE1;

si la importancia y la especificaci&#xF3;n de la regla es mayor que la de otras reglas aplicadas al elemento

(la especificaci&#xF3;n se explica en un art&#xED;culo anterior, <a href="http://dev.opera.com/articles/view/28-inheritance-and-cascade/">la herencia y la cascada en CSS</a>.</p>



<p>Algunos de nosotros ya estaremos preguntandonos que ocurre cuando la propiedad CSS a la que pretendemos dar

valor tiene nombre compuesto. La sintaxis aqu&#xED; es diferente, porque, por ejemplo, si escribimos

<code>element.style.font-size</code>, JavaScript entender&#xE1; que debe restar <code>size</code> de

<code>element.style.font</code>, que no es lo que deseamos que ocurra. Para evitar que esto ocurra, todas las

propiedades CSS se escriben como en el siguiente ejemplo, donde escribimos <code>element.style.fontSize</code>

para acceder al tama&#xF1;o de la fuente:</p>



<pre><code>function changeElement(id) {
  var element = document.getElementById(id);
  element.style.color = &quot;red&quot;;
  element.style.fontSize = &quot;15px&quot;;
  element.style.backgroundColor = &quot;#FFFFFF&quot;;
}</code></pre>

<p>&#xBF;Recordamos los objetos stylesheet?. Bien, <code>styleSheet.cssRules</code> nos dar&#xE1; una lista de todos

los objetos <code>style</code> representando todas las reglas CSS contenidas en la p&#xE1;gina de estilos. Se puede

modificar estos objetos <code>style</code> como el objeto <code>style</code> de otros elementos. En este caso,

m&#xF1;as que aplicar cambios sobre un elemento espec&#xED;fico de la p&#xE1;gina, los cambios afectar&#xE1;n a todos los elementos

que se vean afectados por esa regla.</p>

<p>En el ejemplo que viene a continuaci&#xF3;n, la funci&#xF3;n que aumenta el tama&#xF1;o de la letra utiliza el objeto

<code>style</code> y la funci&#xF3;n que hace el tama&#xF1;o m&#xE1;s peque&#xF1;o utiliza <code>setAttribute</code>. Si nosotros

cambiamos el color del texto a rojo, y entonces llamamos a <code>setAttribute</code> mediante el bot&#xF3;n

apropiado, veremos como nuestros cambios se sobreescriben. Se puede ver en el <a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript/changingelementstyles.html">ejemplo de cambio de estilos</a>.</p>



<h2 id="elementclassnames">Nombres de clases de elementos</h2>



<p>Otra forma de alterar el estilo de un elemento es cambiando su atributo <code>class</code>. <code>class</code>

es una palabra reservada en JavaScript, asi que para acceder al atributo <code>class</code> de un elemento

tenemos que usar <code>element.className</code>. Se pueden concatenar cadenas a <code>className</code> si deseamos

a&#xF1;adir una clase a un elemento, o podemos sobreescribir <code>className</code> y asignarle una clase nueva.

Esto lo podemos ver en el <a href="elementclassnames.html">ejemplo sobre nombres de clases</a>.</p>



<h2 id="summary">Res&#xFA;men</h2>



<p>Conocer como cambiar din&#xE1;micamente los estilos aplicados a nuestras p&#xE1;ginas es muy &#xFA;til para construir

modernas, ricas e interactivas p&#xE1;ginas web; el conocimiento presentado en este art&#xED;culo es justo la base de

t&#xE9;cnicas m&#xE1;s avazandas como <a href="http://dev.opera.com/articles/view/javascript-animation/">animaciones JavaScript</a>. As&#xED;, debemos tener

cuidado de usar las modificaciones de estilos con responsabilidad, y no utilizarlas excesivamente. Tambi&#xE9;n,

como se dice m&#xE1;s arriba, las modificaciones de estilos pueden mejorar el rendimiento, mostrando y ocultando

contenido que puede ayudar a no tener que invocar al servidor bajo ciertas circunstancias.</p>





<h2 id="exercisequestions">Ejercicios</h2>

<ul>

  <li>&#xBF;Cual es la diferencia entre <code>setAttribute</code> y establecer el estilo a trav&#xE9;s del objeto

  <em>CSSStyleDeclaration</em>?</li>

  <li>Enumera dos formas de conseguir que todas las im&#xE1;genes tengan un borde verde cuando un usuario haga click

  sobre un bot&#xF3;n.</li>

  <li>&#xBF;Cambiando el objeto <em>CSSStyleDeclaration</em> de un elemento se cambia siempre el estilo del

  elemento? &#xBF;Porqu&#xE9;? </li>

  <li>Enumera dos formas de acceder a una hoja de estilo espec&#xED;fica.</li>

</ul>



<ul class="seriesNav">

<li class="prev"><a href="http://dev.opera.com/articles/view/creating-and-modifying-html-es/" rel="prev" title="link to the previous article in the series">Ant&#xED;culo anterior—Creando y Modificando HTML</a></li>

<li class="next"><a href="http://dev.opera.com/articles/view/handling-events-with-javascript/" rel="next" title="link to the next article in the series">Siguiente art&#xED;culo—Manejando eventos en JavaScript</a></li>

<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabla de contenidos</a></li>

</ul>



<h2>Sobre el autor</h2>

<img class="right" src="/articles/view/dynamic-style-css-javascript/gregschechter.jpg" alt="Picture of the article author Greg Schechter" />

<p> Greg Schechter es bastante joven en la industria tecnol&#xF3;gica sobre webs —

&#xE9;l es actualmente un estudiante de inform&#xE1;tica (computer science) en la University of Illinois in Urbana Champaign.

El es muy entusiasta en entrar en la industria de aplicaciones webs, donde &#xE9;l espera construir sitios web

pr&#xE1;cticos y ricos para usuarios en todos el mundo. Se puede encontrar mas detalles de Greg en

<a href="http://gregthebusker.com">GregTheBusker.com</a>.</p>
        

