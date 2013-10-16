Title: Temas ligeros de Opera
----
Date: 2012-08-22 19:14:45
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
	
<p>Opera 12 nos trae muchas mejoras, incluyendo actualizaciones del sistema de temas. Para empezar, las actualizaciones son tan extensas que hemos cambiado el nombre de &quot;pieles&quot; a <strong>&quot;temas&quot;</strong>. Hay un nuevo sistema de temas (mas liviano) que se encuentra en la parte superior del tema por defecto en Opera y hace que personalizar los temas (ligeros), sea mucho más fácil de lograr. En este articulo vamos a echar un vistazo de como funciona este nuevo sistema.</p>

<h2>¿Cómo funciona?</h2>

<p>Estos nuevos temas (ligeros) funcionan de la misma manera como el sistema de temas existente: Se empaquetan en un archivo ZIP que contienen dos cosas, los archivos que se utilizaran en el tema y un archivo persona.ini. El archivo .ini es como Opera reconoce que el archivo ZIP es un tema — cuando se encuentra con este tipo de archivo (p.e., mediante un enlace a ella), automáticamente se instalará el tema: &quot;un proceso sencillamente agradable&quot;. El nuevo tema se aplicará sobre el tema predeterminado de Opera para su sistema operativo.</p>

<p>El archivo persona.ini contiene un numero de secciones, cada una comenzado por un título que figura entre corchetes, como p.e.: [Options]. Cada una de estas secciones contiene información especifica de diferentes partes del tema, tal como una imagen de fondo personalizada, entre otros, la clave aquí es la simplicidad — se puede seguir utilizando el antiguo sistema de temas (mas pesado) para crear una personalización completa si se desea, pero la mayoría de la gente solo quiere hacer algo simple y no quieren correr el riesgo de romper la interfaz de usuario. El nuevo sistema de temas (mas ligero) es mucho mas fácil de usar. En <a href="http://www.opera.com/browser/">Opera 12</a> sólo se nos permite personalizar la imagen de fondo, el color y las partes principales de la interfaz de usuario por medio de una imagen de muestra. En un futuro se añadirán mas opciones.</p>

<p>En la siguiente sección vamos a ejecutar un tema de ejemplo para demostrar cómo funciona todo esto.</p>

<h2>Aplicando un tema de ejemplo.</h2>

<p>Para probar un tema de ejemplo, necesita instalar <a href="http://www.opera.com/browser/">Opera 12</a> y dirigirse a nuestra pagina de <a href="https://addons.opera.com/themes/">temas para Opera</a>. Una vez situado en la pagina, intente hacer clic en uno de los ejemplos y se dará cuenta que su navegador cambia su estilo para parecerse al siguiente:</p>

<p><img src="http://devfiles.myopera.com/articles/6362/theme1.jpg" alt="Un ejemplo de un tema (ligero) aplicado a Opera 12" /></p>

<p class="comment">Figura 1: Ejemplo de un tema en acción.</p>

<p class="note">Encontrará este tema listado junto con cualquier otro tema que pueda haber instalado, en <em>Opera &gt; Aspecto</em>. De estos, puede optar por seleccionar entre los diferentes temas que previamente ha instalado ó bien, eliminarlos. También puede hacer que un tema este disponible en el cuadro de diálogo de apariencia colocándolo en la carpeta <em>skin</em> ubicada dentro del directorio de Opera en su perfil. Puede encontrar este directorio, en los sistemas <em>[home folder]/Library/Opera</em>Mac, Linux y <em>C:\users\[usuario]\AppData\Roaming\Opera\Opera</em>Windows.</p>

<p>El siguiente <a href="http://dev.opera.com/articles/view/operas-lightweight-themes/natural_history_of_norway.zip">tema</a>, esta  disponible para que juegue con el. Guarde el archivo ZIP en su equipo, luego descomprimalo, ahí encontrara los archivos necesarios, más el archivo personas.ini, que contiene las siguientes secciones:</p>

<pre><code># This file describes a test persona for the Opera browser. Not meant for redistribution.</code></pre>

<p>Este es un comentario, que da algo de información sobre el tema. Lo puede colocar en cualquier parte del archivo, siempre y cuando se escriba en una línea separada y comience con un símbolo de hash/pound (#).</p>

<pre><code>[Info]
Name                          = The Natural History of Norway
Author                        = Opera Software
Version                       = 1
Preview Image                 =</code></pre>

<p>La sección <code>[Info]</code> es bastante explicativa en si misma. El <code>Name</code> es el nombre del tema, tal y como aparecerá en el diálogo de &quot;Aspecto&quot;, en el catalogo de temas para Opera, entre otros. La etiqueta [Author] es el autor del tema, y <code>[Version]</code> siempre se deberá establecer con el valor de 1 (esto significa que es la &quot;versión 1&quot; del sistema de temas &quot;ligero&quot;). [Preview Image] Es la que (en teoría), provee de una imagen previa de los temas en el catálogo, entre otros, pero que en la actualidad no se encuentra en uso.</p>

<pre><code>[Options]
Tint Color                = #3e6da9</code></pre>

<p>[Options] Es una sección opcional: si se especifica, <code>Tint Color</code> anula la coloración actual por un tono de color específico — ya que por defecto, se colorea con el color promedio de la imagen. Algunos de los temas, cuando se instalan, añaden una coloración ó tinte sobre la parte superior del tema.</p>

<p class="note"><code>Tint Color</code> tiene una etiqueta similar, <code>Colorize Color</code>, que se puede usar en su lugar, pero creo que estarán de acuerdo conmigo que, <code>Tint Color</code> es un poco mas intuitivo.</p>

<pre><code>[Window Image]
Type                        = BestFit
Background                = Kraken.jpg
Colorize                   = 0</code></pre>

<p>La sección <code>[Window Image]</code> controla la configuración general de toda la ventana del navegador. El <code>Type</code> se establece como <code>BestFit</code> para indicar que Opera se ajusta a una sola copia de la imagen de la mejor forma posible. La otra opción disponible es BoxTile, o la imagen en forma de baldosas. En la etiqueta <code>Background</code> especificamos la ruta de la imagen a ser usada como imagen de fondo personalizado por el tema. <code>Colorize = 0</code> especifica que no desea que la imagen personalizada sea coloreada de la misma manera que el resto de la interfaz de usuario. Ajustelo a <code>1</code> si en realidad lo desea.</p>

<pre><code>[Clear elements]
Speed Dial Widget Blank Skin  = 1
Speed Dial Widget Skin        = 1</code></pre>

<p>La configuración para todas estas propiedades es <code>1</code> porque esto ocasionara que la imagen de fondo brille a través del speed dial. Si falta o se establece en 0, no lo hará.</p>

<p>De momento, no se puede hacer mucho más en el interior de los temas (ligeros), aunque en un futuro podríamos añadir más opciones. Dirás que esto suena &quot;limitante&quot;, pero se hizo de forma deliberada - Usar temas que solo produzcan pequeños cambios. Si se desea hacer un cambio más amplio, todavía podemos usar el &quot;sistema de creación de temas completo&quot;. Pero esta nueva forma es mucho más simple de escribir y aplicar.</p>

<h2>Instalando y compartiendo un tema</h2>

<p>Una vez que haya creado un tema, deseara compartirlo con otros para que puedan ver su obra. La mejor manera de hacer esto es subirlo a nuestro repositorio de temas — para ello, utilice nuestra pagina de <a href="https://addons.opera.com/es/developer/upload/">carga de complementos Opera.</a> Necesitará una cuenta <a href="http://my.opera.com/community/">my.opera</a> para hacer esto. Compartiendo su tema de esta forma, significa que sera mas fácil de localizar por otros usuarios y nuestro equipo podrá revisarlo a profundidad en busca de errores antes de hacerlo publico.</p>

<p>Tenga en cuenta que si lo sube a un servidor de su propiedad, debera asegurarse que este configurado con el tipo de mime correcto, en caso contrario, no se instalara. Para ello, coloque la siguiente linea de codigo en el archivo <code>.htaccess</code> que esta dentro del mismo directorio (Para un servidor basado en Apache, por supuesto — otros tipos de servidores requerirán diferentes soluciones que sean equivalentes):</p>

<pre><code>&lt;files *.zip&gt;
  ForceType application/x-opera-configuration-skin
&lt;/files&gt;</code></pre>

<h2>Resumen.</h2>

<p>Espero que haya encontrado nuestro tutorial de &quot;temas ligeros de Opera&quot; útil. Háganos saber lo que piensa!</p>
