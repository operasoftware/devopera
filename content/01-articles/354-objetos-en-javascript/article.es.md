Title: Objetos en JavaScript
----
Date: 2010-05-13 16:37:12
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

	<li class="prev"><a href="http://dev.opera.com/articles/view/javascript-functions-es/" rel="prev" title="enlace al art&amp;iacute;culo anterior en la serie">Art&#xED;culo anterior — Funciones JavaScript</a></li>

	<li class="next"><a href="http://dev.opera.com/articles/view/traversing-the-dom-es/" rel="next" title="enlace al siguiente art&amp;iacute;culo en la serie">Siguiente art&#xED;culo — Recorriendo el &#xE1;rbol DOM</a></li>

	<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">&#xCD;ndice de contenidos</a></li>

</ul>



<h2>Introducci&#xF3;n</h2>



<p>En el <a href="http://dev.opera.com/articles/view/javascript-functions-es/">art&#xED;culo de funciones</a> anterior se introdujo el concepto de funciones,

ense&#xF1;ando como organizar y reutilizar mejor el c&#xF3;digo, agrupando funcionalidad

individual en funciones l&#xF3;gicas, a las que se pueden llamar cuando se quiera. Ahora,

que ya estamos familiarizados con los componentes b&#xE1;sicos de la programaci&#xF3;n en JavaScript,

habr&#xED;a que ampliar y mejorar las aplicaciones introduciendo <strong>Objetos</strong>.

Los objetos nos permiten reunir esos conjuntos de funcionalidad que se han definido como

funciones, envolviendolos en paquetes con una cierta coherencia, y referirnos a ellos

como <em>items simples</em>. Esta habilidad tiene muchos efectos pr&#xE1;cticos sobre

el c&#xF3;digo que se puede escribir, incluso si esto suena ligeramente abstracto por el momento.</p>





<p>Puede que no se haya notado, pero, implicitamente, nos hemos visto expuesto a objetos

a trav&#xE9;s de estos art&#xED;culos. Aqu&#xED; se dar&#xE1; una comprensi&#xF3;n m&#xE1;s expl&#xED;cita de como los

objetos funcionan en JavaScript, y explicaremos como se puede incrementar la

expresividad y la reusabilidad del c&#xF3;digo.</p>



<p>La estructura de este art&#xED;culo es la siguiente:</p>



<ul>

  <li><a href="#whyobjects">Porqu&#xE9; Objetos?</a></li>

  <li><a href="#familiar">Territorio Familiar</a></li>

  <li><a href="#creatingobjects">Creando Objetos</a></li>

  <li><a href="#selfreference">Auto-referencias</a></li>

  <li><a href="#associativearrays">Objetos como arrays asociativos</a></li>

  <li><a href="#whyobjects">El objeto literal</a></li>

  <li><a href="#summary">Resumen — hay mucho m&#xE1;s que aprender</a></li>

  <li><a href="#furtherreading">Otras lecturas</a></li>

  <li><a href="#exercises">Ejercicios</a></li>

</ul>



<p class="note">Nota: Existe un ejemplo disponible para descarga y para ejecuci&#xF3;n, que contiene c&#xF3;digo que

calcula el &#xE1;rea de un tri&#xE1;ngulo, con y sin objetos. Este c&#xF3;digo est&#xE1; construido con las explicaciones de m&#xE1;s

abajo. Ejecuta el <a href="http://dev.opera.com/articles/view/objects-in-javascript/triangle_area.html">ejemplo de tri&#xE1;ngulo con objetos</a>.</p>



<h2 id="whyobjects">Porqu&#xE9; Objetos?</h2>



<p>La raz&#xF3;n mas simple e importante que hay que tener en cuenta acerca de los objetos es su capacidad para

aumentar la traducci&#xF3;n a c&#xF3;digo de los datos y procesos que se est&#xE1;n implementando. Como un ejemplo trivial,

consideraremos que se ha escrito c&#xF3;digo que hace un cierto tipo de trabajo con un tri&#xE1;ngulo. Como todos conocemos,

los tri&#xE1;ngulos en general tienen tres lados, asi que para trabajar con uno de ellos, lo l&#xF3;gico es crear tres variables:</p>

<pre><code>// Esto es un tri&#xE1;ngulo.
var ladoA = 3;
var ladoB = 4;
var ladoC = 5;</code></pre>

<p>¡Ya tenemos un tri&#xE1;ngulo!. Bueno, no realmente, ¿no?. Realmente, hemos creado tres variables

que necesitamos manejar por separado, y un comentario para acordarnos de lo que est&#xE1;bamos pensando.

Tan simple, que no es todo lo claro o usable que deber&#xED;a ser. No hay problema, continuemos y

pensemos como podr&#xED;amos construir determinados c&#xE1;lculos sobre este “tri&#xE1;ngulo”. Para calcular su

&#xE1;rea, podr&#xED;amos escribir una funci&#xF3;n como la siguiente:</p>

<pre><code>function getArea( a, b, c ) {
  // Devuelve el &#xE1;rea de un tri&#xE1;ngulo usando la f&#xF3;rmula de Her&#xF3;n.
  var semiperimetro =   (a + b + c) / 2;
  var valor         =   semiperimetro * (semiperimetro - a) * (semiperimetro - b) * (semiperimetro - c);
  return Math.sqrt( valor );
}

alert( getArea( sideA, sideB, sideC ) );</code></pre>

<p>Se puede ver que hemos pasado toda la informaci&#xF3;n acerca del tri&#xE1;ngulo en la funci&#xF3;n,

para poder hacer todos los c&#xE1;lculos. Todos los c&#xE1;lculos relacionados con el tri&#xE1;ngulo son

<em>pr&#xE1;cticamente</em> sacados de los datos del tri&#xE1;ngulo, aunque no tenga mucho sentido este aislamiento.</p>

<p>Adem&#xE1;s, se han usado unos nombres gen&#xE9;ricos para la funci&#xF3;n y para cada una de las variables:

<code>getArea</code>, <code>ladoA</code>, etc.  ¿Que pasar&#xED;a si nos encontramos la pr&#xF3;xima semana

que necesitamos extender este c&#xF3;digo para incluir un rect&#xE1;ngulo?. Quiz&#xE1;s habria que utilizar <code>ladoA</code> y

<code>ladoB</code> para los datos del rect&#xE1;ngulo, pero estos nombres de variables ya est&#xE1;n cogidos. Podr&#xED;amos

utilizar <code>lado1</code> y <code>lado2</code>, pero podemos apostar a que eso es el origen de confusi&#xF3;n y

desastre. Probablemente, terminar&#xED;amos usando <code>rectanguloLadoA</code> y <code>rectanguloLadoB</code>, y para

ser consistente, habr&#xED;amos vuelto atr&#xE1;s y cambiado el c&#xF3;digo ya escrito para los tri&#xE1;ngulos, para utilizar

<code>trianguloLadoA</code> y as&#xED;, lo cual puede llegar a inducir a error. Lo mismo aplica al nombre de la funci&#xF3;n,

me gustar&#xED;a usar <code>getArea</code> para ambos casos, dado que <em>conceptualmente</em> es el mismo c&#xE1;lculo. Pero no podemos. ¡Tiene que haber un mejor sistema para representar estos datos!.</p>

<p>De la misma forma que tiene sentido crear una funci&#xF3;n que incluye una serie de tareas, tiene sentido

crear un objeto que provea todos esas tareas juntas en una unidad simple. En lugar de estar limitado por

los tipos de datos nativos soportados por JavaScript (cadenas, n&#xFA;meros, booleanos, etc.), los objetos

nos permiten construir nuestro propio conjunto de variables de cualquier tipo. Esta flexibilidad nos permite

construir estructuras que mapean directamente “las cosas” en las que se est&#xE1; centrado,

con la construcci&#xF3;n de los programas, y usarlas directamente en nuestro c&#xF3;digo como tipos primitivos.

Aqu&#xED;, deber&#xED;amos construir los objetos tri&#xE1;ngulo y rect&#xE1;ngulo, cada uno conteniendo todos los datos

necesarios para conjugar inteligentemente esas formas con las actividades &#xF3; c&#xE1;lculos que necesitemos

hacer sobre ellos. Con esto en mente, veamos como se plasma esto en c&#xF3;digo.</p>

<h2 id="familiar">Territorio Familiar</h2>

<p>Si echamos un vistazo atr&#xE1;s al <a href="/articles/view/javascript-functions/functions_4.html">

art&#xED;culo anterior sobre funciones finales</a>, podremos ver c&#xF3;digo como:</p>

<pre><code>var obj = document.getElementById( elementID );</code></pre>

<p>y:</p>

<pre><code>obj.style.background = &#39;rgb(&#39;+rojo+&#39;,&#39;+verde+&#39;,&#39;+azul&#39;)&#39;;</code></pre>

<p>¡Sorpresa! ¡Hemos estado utilizando objetos sin siquiera conocerlos!. Exploremos estos

trozos de c&#xF3;digo, para empezar con la sintaxis de objetos de JavaScript.</p>

<p>El c&#xF3;digo <code>var obj = document.getElementById( elementID )</code> nos deber&#xED;a sonar bastante familiar. Los par&#xE9;ntesis al final de la sentencia indican que una funci&#xF3;n de alg&#xFA;n tipo est&#xE1; siendo invocada, y que el resultado de la funci&#xF3;n est&#xE1; siendo almacenado en una

variable llamada <code>obj</code>. El &#xFA;nico elemento que es <em>nuevo</em> es el punto de la

mitad de la sentencia. Como se puede ver, la <strong>notaci&#xF3;n punto</strong> es la forma que

nos proporciona JavaScript para acceder a los datos de dentro de un objeto. El punto (.) es

solamente un operador que est&#xE1; entre dos operandos, como el + y el -.



<p>Por convenci&#xF3;n, las variables almacenadas en un objeto al que nosotros accedemos via el

operador . son, gen&#xE9;ricamente hablando, llamadas <strong>propiedades</strong>. Las propiedades

de los objetos que son funciones son llamadas <strong>m&#xE9;todos</strong>. No hay ninguna magia

acerca de estos nombres, los m&#xE9;todos son justamente funciones, las propiedades son variables.</p>



<p>El operador . espera un objeto a su izquierda, y un nombre de propiedad a su derecha; aplicando

esto al trozo de c&#xF3;digo anterior, podemos decir que estamos accediendo al m&#xE9;todo <code>getElementById</code>

del objeto predefinido <code>document</code> (acerca del cu&#xE1;l se podr&#xE1; leer <em>mucho</em> m&#xE1;s

en el siguiente <a href="http://dev.opera.com/articles/view/45-traversing-the-dom/">

art&#xED;culo sobre recorrer el &#xE1;rbol DOM</a>.</p>



<p>El siguiente trozo de c&#xF3;digo es un poco mas interesante, tiene <em>dos</em> puntos. Una de las

cosas realmente excitantes del soporte de objetos de JavaScript es la posibilidad de <strong>encadenar</strong>

puntos para introducirse en complejas estructuras de objetos. Concretamente, puede encadenar

objetos de la misma forma que se puede ejecutar <code>var x = 2 + 3 + 4 + 5;</code> y esperar que

resulte 14; las referencias a los objetos se resuelven por si solas, de izquierda a derecha

(se puede impresionar a los colegas explicando que esto hace que el operador . de JavaScript

sea considerado un “operador asociativo por la izquierda”). En este caso,

<code>obj.style.background</code> es evaluado resolviendo un objeto cuya propiedad <code>style</code>

es accedida. Se puede hacer esto mas expl&#xED;cito a&#xF1;adiendo parentesis: <code>(obj.style).background</code>.</p>

<h2 id="creatingobjects">Creando Objetos</h2>

<p>Para construir nuestro propio objeto tri&#xE1;ngulo, lo crearemos utilizando la siguiente sintaxis:</p>

<pre><code>var triangulo = new Object();</code></pre>

<p><code>triangulo</code> es ahora una objeto en blanco, esperando que a&#xF1;adamos al vuelo

una construcci&#xF3;n de tres lados. Esto se puede hacer a&#xF1;adiendo propiedades al objeto utilizando el operador . :</p>

<pre><code>triangulo.ladoA  =   3;
triangulo.ladoB  =   4;
triangulo.ladoC  =   5;</code></pre>

<p>No hay que hacer nada especial para a&#xF1;adir mas propiedades nuevas a un objeto. Cuando JavaScript eval&#xFA;a el operador ., si est&#xE1;s haciendo un intento de acceder a una propiedad

que realmente no existe, la crea por t&#xED;. Si tratas de leer una propiedad que no est&#xE1;,

JavaScripr retorna “indefinido”. Esto es muy bueno, pero puede enmascarar error

si no se es cuidadoso, asi que, ¡ten mucho cuidado al teclear!.

<p>A&#xF1;adir metodos se hace de la misma forma, — aqu&#xED; hay un ejemplo:</p>

<pre><code>triangulo.getArea    =   function ( a, b, c ) {
  // Devuelve el area de un tri&#xE1;ngulo utilizando la f&#xF3;rmula de Her&#xF3;n
  var semiperimetro   =   (a + b + c) / 2;
  var valor           =   semiperimetro * (semiperimetro - a) *
                                (semiperimetro - b) * (semiperimetro - c);
  return Math.sqrt( valor );
};      // Tener en cuenta el punto y coma aqu&#xED;, es obligatorio.</code></pre>

<p>Si est&#xE1;s pensando que esto se parece <em>un mont&#xF3;n</em> a definir una funci&#xF3;n, has acertado:

simplemente hemos dejado de lado el nombre de la funci&#xF3;n. JavaScript posee el concepto de funciones

<em>an&#xF3;nimas</em>, que no tienen un nombre propio, y que son almacenadas en variables como cualquier

otro valor. En este c&#xF3;digo, hemos creado una funci&#xF3;n an&#xF3;nima, y la hemos almacenado en el objeto

<code>triangulo</code>, propiedad <code>getArea</code>. Por tanto, este objeto llevar&#xE1; consigo esta

funci&#xF3;n, como puede llevar cualquier otra propiedad.</p>



<h2 id="selfreference">Auto-referencias</h2>



<p>Uno de los logros de la creaci&#xF3;n del objeto <code>triangulo</code> es la creaci&#xF3;n de un v&#xED;nculo

entre los datos del tri&#xE1;ngulo y las acciones que se pueden llevar a cabo sobre esos datos. Aunque

esto todav&#xED;a no lo hemos logrado, podemos ver claramente que el m&#xE9;todo <code>triangulo.getArea()</code>

sigue necesitando que los datos de los lados del tri&#xE1;ngulo se le pasen en la ejecuci&#xF3;n, resultando un c&#xF3;digo como este:</p>

<pre><code>triangulo.getArea( triangulo.ladoA, triangulo.ladoB, triangulo.ladoC );</code></pre>

<p>Evidentemente, esto es mejor que el c&#xF3;digo que hicimos al inicio de este art&#xED;culo, ya que expresa

una <em>relaci&#xF3;n</em> entre los datos y las acciones. Pero de todas formas, esa relaci&#xF3;n, significa

que no deber&#xED;amos tener que decir al m&#xE9;todo cu&#xE1;les son los valores sobre los que deber&#xED;a trabajar.

Deber&#xED;a ser capaz de recoger los datos del propio objeto en el cual est&#xE1; definido, y utilizar esos

datos sin tener que declarar ning&#xFA;n par&#xE1;metro.

<p>El secreto reside en la palabra reservada <code>this</code>, que podemos usar dentro de la definici&#xF3;n

de un m&#xE9;todo para referirnos a otras propiedades y m&#xE9;todos del mismo objeto. Asi que, reescribiendo

el m&#xE9;todo <code>getArea</code> para usar la palabra reservada <code>this</code>, nos encontramos con

el siguiente c&#xF3;digo:</p>

<pre><code>triangulo.getArea    =   function () {
  // Devuelve el &#xE1;rea de un tri&#xE1;ngulo utilizando la f&#xF3;rmula de Her&#xF3;n
  var semiperimetro   =   (this.ladoA + this.ladoB + this.ladoC) / 2;
  var valor           =   semiperimetro * (semiperimetro - this.ladoA) *
                                (semiperimetro - this.ladoB) * (semiperimetro - this.ladoC);
  return Math.sqrt( valor );
};      // Tener en cuenta el punto y coma aqu&#xED;, es obligatorio.</code></pre>

<p>Como podemos ver, la palabra reservada <code>this</code> funciona algo as&#xED; como un espejo. Cuando el

m&#xE9;todo <code>getArea</code> es ejecutado, &#xE9;l echa un vistazo a si mismo para leer los valores de las

propiedades <code>ladoA</code>, <code>ladoB</code>, y <code>ladoC</code>. &#xC9;l es capaz de usar estos

valores en sus c&#xE1;lculos, en vez de pedirlos como entrada desde fuera del m&#xE9;todo.</p>

<p class="note">Nota: Se han simplificado las cosas. La palabra reservada <code>this</code> no <em>siempre</em>

se refiere al objeto en el que el m&#xE9;todo ha sido definido, sino que puede cambiar seg&#xFA;n que contextos espec&#xED;ficos.

Esto puede sonar cr&#xED;ptico, pero eso sobrepasa el alcance de este art&#xED;culo. No obstante, en el contexto que

estamos usando aqu&#xED;, podemos estar seguros que todos los usos de <code>this</code> siempre se referir&#xE1;n

al objeto <code>triangulo</code>.</p>

<h2 id="associativearrays">Objetos como arrays asociativos</h2>

<p>El operador . no es la &#xFA;nica forma de acceder a las propiedades y m&#xE9;todos de un objeto; se puede

acceder a ellos de una forma mas eficiente usando la notaci&#xF3;n <strong>subscript</strong>, que nos

deber&#xED;a ser familiar, del art&#xED;culo <a href="http://dev.opera.com/articles/view/38-programming-the-real-basics/#arrays">

discusiones sobre arrays</a>. En pocas palabras, se puede tratar a un objeto como un

<strong>array asociativo</strong> que mapea una cadena a un valor, de la misma forma que un

array t&#xED;pico asocia a un n&#xFA;mero un valor. Utilizando esa notaci&#xF3;n, podemos reescribir el objeto

<code>triangulo</code> de otra forma:</p>



<pre><code>var triangulo = new Object();
triangulo[&#39;ladoA&#39;]   =   3;
triangulo[&#39;ladoB&#39;]   =   4;
triangulo[&#39;ladoC&#39;]   =   5;
triangulo[&#39;getArea&#39;] =   function ( a, b, c ) {
  // Devuelve el &#xE1;rea de un tri&#xE1;ngulo utilizando la f&#xF3;rmula de Her&#xF3;n
  var semiperimetro =   (a + b + c) / 2;
  var valor         =   semiperimetro * (semiperimetro - a) * (semiperimetro - b) * (semiperimetro - c);
  return Math.sqrt( valor );
};      // Tener en cuenta el punto y coma aqu&#xED;, es obligatorio.</code></pre>

<p>Despu&#xE9;s de un primer vistazo, esto puede parece superfluo. ¿Porqu&#xE9; no usar el operador .? Las

ventajas de esta nueva sintaxis es que los nombres de las propiedades no est&#xE1;n prefijados en el

c&#xF3;digo. Podemos usar variables para especificar los nombres de las propiedades, lo que significa

que podemos construir acciones muy flexibles que hagan cosas diferentes, bas&#xE1;ndose en el contexto.

Por ejemplo, podr&#xED;amos construir una funci&#xF3;n que comparase dos objetos para ver si entre ellos

se comparte una propiedad com&#xFA;n:</p>



<pre><code>function isPropertyShared( objetoA, objetoB, nombrePropiedad ) {
  if (
     typeof objetoA[ nombrePropiedad ] !== undefined
     &amp;&amp;
     typeof objetoB[ nombrePropiedad ] !== undefined
     ) {
         alert(&quot;Ambos objetos tienen una propiedad llamada &quot; + nombrePropiedad + &quot;!&quot;);
       }
}</code></pre>

<p>Esta funci&#xF3;n ser&#xED;a simplemente imposible de escribir de una forma gen&#xE9;rica usando el

operador ., al tener que escribir expl&#xED;citamente el nombre de las propiedades a testear

en el c&#xF3;digo del programa. As&#xED; que, seguro que utilizaremos esta notaci&#xF3;n <em>muy a menudo</em>.</p>

<p class="note">Nota: Un array asociativo se llama “hash” en Perl, “hashtable” en C#,

“map” en C++, “hashmap” en Java, “dictionary” en Python, etc. Es un concepto

de programaci&#xF3;n fundamental, y muy potente, por tanto, probablemente hayamos o&#xED;do hablar acerca de &#xE9;l bajo

alg&#xFA;n nombre igual o diferente a estos.

<h2 id="objectliteral">El objeto literal</h2>

</p><p>Echemos un vistazo a este c&#xF3;digo que seguramente nos es muy familiar:</p>

<pre><code>alert(&quot;Hola Mundo&quot;);</code></pre>

<p>Podemos identificar <code>alert</code> como una funci&#xF3;n que est&#xE1; siendo llamada con un solo argumento: la cadena “Hola Mundo”.  Lo hay que tener en cuenta aqu&#xED; es que <em>no es necesario</em> escribir:

<pre><code>var cadenaTemporal = &quot;Hola Mundo&quot;;
alert(cadenaTemporal);</code></pre>

<p>JavaScript simplemente entiende que cualquier cosa contenida entre dos pares de dobles comillas (&quot; &quot;)

debe ser tratado como una cadena, y lleva a cabo la magia necesaria para que eso funcione, se escriba

donde se escriba. La cadena es creada y pasada correctamente a la funci&#xF3;n, todo en uno. Formalmente,

<code>&quot;Hola Mundo&quot;</code> es una cadena literal; hemos pasado totalmente de todo lo que se necesita para crear la cadena.</p>

<p>JavaScript tiene una sintaxis similar para los “objetos literales”, que nos permiten crear nuestros propios objetos sin tener que seguir una sintaxis general. Reescribamos una vez m&#xE1;s el objeto triangulo, esta vez como un objeto literal:</p>

<pre><code>var triangulo = {
  ladoA:      3,
  ladoB:      4,
  ladoC:      5,
  getArea:    function ( a, b, c ) {
    // Devuelve el &#xE1;rea de un tri&#xE1;ngulo utilizando la f&#xF3;rmula de Her&#xF3;n
    var semiperimetro =   (a + b + c) / 2;
    var valor         =   semiperimetro * (semiperimetro - a) * (semiperimetro - b) * (semiperimetro - c);
    return Math.sqrt( valor );
  }
};</code></pre>

<p>La sintaxis es clara: el objeto literal utiliza llaves para marcar el inicio y el fin del objeto, que contiene un numero arbitrario de pares “<code><var>nombrePropiedad</var>:

<var>valorPropiedad</var></code>” separados por comas. Esto hace que sea m&#xE1;s f&#xE1;cil

construir estructuras para usar en nuestros programas, sin tener que repetir constantemente

el nombre del objeto en cada l&#xED;nea.</p>



<p>Una de la cosas a revisar, es que es un error muy com&#xFA;n el poner una coma despu&#xE9;s de la &#xFA;ltima

propiedad en la lista de propiedades del objeto literal (en este caso, despu&#xE9;s de la definici&#xF3;n

de <code>getArea</code>). Solamente hay que poner comas <em>entre</em> propiedades — una coma

extra al final causar&#xE1; errores. Especialmente, si m&#xE1;s adelante en el c&#xF3;digo se insertan o se eliminan

propiedades, por tanto, habr&#xE1; que ser especialmente cuidadoso sobre poner las comas en

los sitios correctos</p>



<h2 id="summary">Resumen — hay mucho m&#xE1;s que aprender</h2>



<p>Realmente, esto solo ha sido ara&#xF1;ar la superficie de las capacidades y limitaciones de los

objetos en JavaScript. Despu&#xE9;s de leer esto, deber&#xED;amos sentirnos a gusto creando nuestros propios

objetos, a&#xF1;adiendo propiedades y m&#xE9;todos, y us&#xE1;ndolos de forma auto-referencial. Hay mucho m&#xE1;s fuera

de aqu&#xED;, pero ninguno de ellos es <em>esencial</em>. El sentido de este art&#xED;culo es iniciar el camino,

y proveer las herramientas necesarias para entender el c&#xF3;digo necesario para profundizar en el tema.



<h2 id="furtherreading">Otras lecturas</h2>



<ul>

  <li><a href="http://nefariousdesigns.co.uk/archive/2006/05/object-oriented-javascript/">Object Oriented JavaScript</a>: Una buena introducci&#xF3;n a conceptos m&#xE1;s avanzados sobre objetos en JavaScript.</li>



  <li><a href="http://javascript.crockford.com/private.html">Private Members in JavaScript</a>: Discusiones originales de Douglas Crockford sobre la implementaci&#xF3;n de encapsulaci&#xF3;n en JavaScript.</li>



  <li><a href="http://www.digital-web.com/articles/scope_in_javascript/">Scope in JavaScript</a>: Una discusi&#xF3;n mas avanzada sobre los usos de la palabra reservada <code>this</code> en varios contextos</li>

</ul>



<h2 id="exercises">Ejercicios</h2>



<ul>

	<li>¿Cuando se deber&#xED;a utilizar la notacion subscript en vez del operador . cuando referenciamos las propiedades de un objeto?</li>



  <li>¿Como se puede referenciar a si mismo un objeto? ¿Porqu&#xE9; esto es importante?</li>



  <li>¿Que es un objeto literal? Cuando creamos un objeto literal, ¿donde van las comas?</li>



	<li>Hemos creado un objeto que representa un tri&#xE1;ngulo, y que calcula su &#xE1;rea. Habr&#xED;a que hacer

	lo mismo para un rect&#xE1;ngulo. Y utilizar <code>this</code> en el m&#xE9;todo <code>getArea</code>

	del rect&#xE1;ngulo para evitar tener que pasar sus datos innecesariamente.</li>



</ul>



<ul class="seriesNav">

	<li class="prev"><a href="http://dev.opera.com/articles/view/javascript-functions-es/" rel="prev" title="enlace al art&amp;iacute;culo anterior en la serie">Art&#xED;culo anterior — Funciones JavaScript</a></li>

	<li class="next"><a href="http://dev.opera.com/articles/view/traversing-the-dom-es/" rel="next" title="enlace al siguiente art&amp;iacute;culo en la serie">Siguiente art&#xED;culo — Recorriendo el &#xE1;rbol DOM</a></li>

	<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">&#xCD;ndice de contenidos</a></li>

</ul>



<h2>Acerca del autor</h2>



<img src="/articles/view/javascript-functions/mikewest.jpg" alt="Foto del autor del art&amp;iacute;culo, Mike West" style="float:right;" />



<p>Mike West es un estudiante de filosof&#xED;a habilmente disfrazado como un experimentado y

exitoso desarrollador web. &#xC9;l ha estado trabajando en la web durante una d&#xE9;cada, m&#xE1;s

recientemente en el equipo responsable de la construcci&#xF3;n del sitio de noticias de Yahoo Europa.</p>



<p style="padding-bottom:50px;">Despu&#xE9;s de abandonar las llanuras de suburbios de Texas en 2005, Mike se

estableci&#xF3; en Munich, Alemania, donde lidia (cada vez menos) cada dia con el idioma.

<a href="http://mikewest.org/">mikewest.org</a> es su p&#xE1;gina personal en la web, donde, despacio, reune

sus escritos y enlaces juntos para la posteridad. &#xC9;l mantiene su c&#xF3;digo en

<a href="http://github.com/mikewest">GitHub</a>.</p></p></p></p></p></p>
