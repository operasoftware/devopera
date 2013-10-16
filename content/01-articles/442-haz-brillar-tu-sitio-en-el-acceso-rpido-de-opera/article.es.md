Title: Haz brillar tu sitio en el Acceso Rápido de Opera
----
Date: 2011-04-07 13:46:34
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

<h2>
Tabla de Contenidos
</h2>
<ul>
<li><a href="#intro">Introducción</a></li>
<li>
	<a href="#uselogo">Usando logos</a>
	<ul>
		<li><a href="#html5icons">Iconos en HTML5</a></li>
		<li><a href="#setanicon">Especificando un ícono para el Acceso Rápido</a></li>
		<li><a href="#multipleicons">Usando varios iconos</a></li>
	</ul>
</li><li>
	<a href="#content">Proporcionando contenido a la medida en su entrada de Acceso Rápido </a>
		<ul>
		<li><a href="#viewmode">Usando el modo de vista minimizado</a></li>
		<li><a href="#with-x-purpose">Usando el encabezado para X Propósito</a></li>
		<li><a href="#preview-refresh">Recargando automáticamente el contenido a intervalos regulares de tiempo</a></li>
		</ul>
<li><a href="#sdpriority">Prioridad  en el Acceso Rápido</a></li>
<li><a href="#productsupport">Asistencia para productos de Opera</a></li>
</li></ul>

<h2 id="intro">Introducción</h2>

<p>A partir de la versión 11.10, Opera para PC de escritorio permite a los desarrolladores de contenido controlar como lucirán sus sitios en el Acceso Rápido. Antes, por defecto, el Acceso Rápido  utilizaba una captura de pantalla del sitio web, sin que este pudiera ser modificado. A partir de ahora, el propietario del sitio podrá también especificar un icono, o bien, servir al Acceso Rápido tanto contenido específico como código CSS.</p>

<p class="note">Acceso Rápido es el nombre en español de la función <a href="http://www.opera.com/browser/tips/?feature=speeddial">Speed Dial</a> del navegador Opera.</p>

<h2 id="uselogo">Usando logos</h2>

<p>Esta sección explica cómo usar un logo personalizado o un icono, para mostrar en el Acceso Rápido.</p>

<h3 id="html5icons">Iconos en HTML5</h3>

<p>Usted probablemente está familiarizado con los iconos de los marcadores ó ‘favoritos’ ya que fueron introducidos con Internet Explorer 5 en 1999. Aunque estos no  están comprendidos dentro de las especificaciones del HTML 4, los desarrolladores de navegadores accedieron después e <a href="http://www.w3.org/2005/10/howto-favicon">implementaron iconos para los accesos directos</a>, agregando soporte para que el atributo <code>rel</code>, dentro del elemento <code>link</code>, pudiera tomar el valor <code>icon</code>. Después, Apple extendió esto a los dispositivos de control táctil, a través del <a href="http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html"><code style="word-wrap:none">apple-touch-icon</code></a>. De acuerdo a las especificaciones de HTML5, <code>icon</code> es ahora un <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#rel-icon">valor estándar válido</a> para el atributo <code>rel</code>.</p>

<h3 id="setanicon">Especificando un icono para el Acceso Rápido</h3>

<p>Especificar un ícono para el Acceso Rápido es muy similar a especificar un icono de acceso directo o marcador. Solo agregue una etiqueta <code>&lt;link&gt;</code> en la sección de encabezado de su documento web.</p>

<pre><code>&lt;head&gt;
    &lt;title&gt;My Opera&lt;/title&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/logo.png&quot;&gt;
&lt;/head&gt;</code></pre>

<p>El icono para el Acceso Rápido deberá reunir las siguientes características:</p>

<ul>
<li>Al menos 114 pixels de ancho por 114 pixels de alto. Este es el mínimo por defecto, iconos más pequeños serán ignorados por Opera.</li>
<li>Imagen de tipos PNG, JPEG o GIF. Las imágenes de tipo ‘Scalable Vector Graphics’ (SVG) no se encuentran aún soportadas. Solo el primer cuadro de las imágenes animadas será mostrado.</li>
</ul>

<p>Por defecto, el máximo tamaño de icono aceptado es 256 pixels de ancho por 160 pixels de alto. Iconos más grandes serán redimensionados a
este máximo&quot; (<a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/icon.html">demo</a>). El usuario puede cambiar los mínimos y máximos por defecto desde el menú opera:config.</p>

<p>Nota: Opera 11.10 es compatible con los sistemas preexistentes <code>apple-touch-icon</code>, <code>apple-touch-icon-precomposed</code> e <code>image_src</code>.</p>

<h3 id="multipleicons">Usando varios íconos</h3>

<p>Usted puede especificar múltiples iconos. Esta característica es muy buena si usted desea que sus usuarios visualicen un icono cuando agregan el sitio a sus marcadores y otro cuando lo hacen en el Acceso Rápido.</p>

<pre><code>&lt;head&gt;
    &lt;title&gt;My Opera&lt;/title&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/128x128image.png&quot;&gt;
    &lt;!-- This will be the speed dial icon --&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/200x200image.png&quot;&gt;
&lt;/head&gt;</code></pre>

<p>Si usted especifica más de un icono, Opera Acceso Rápido seleccionará el más grande para la entrada (<a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/multiple-icons-diff-sizes.html">demo</a>). Si ambos iconos tienen igual dimensión, el primer elemento link tiene preferencia sobre el otro (<a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/multiple-icons-same-size.html">demo</a>).</p>

<h2 id="content">Proporcionando contenido a la medida en su entrada de Acceso Rápido</h2>

<p>Hay varias y novedosas maneras de proporcionar contenido y formato a las entradas del  Acceso Rápido: Modo de vista minimizado; encabezado para X Propósito y  Recarga automática de contenido a intervalos regulares. Esta sección abarca a todos ellos.</p>

<h3 id="viewmode">Usando el modo de vista minimizado</h3>

<p><img src="/articles/view/opera-speed-dial-enhancements/view-mode.png" width="542" height="292" alt="Opera 11.10 Speed Dial screen" /></p>
<p class="comment">Figura 1: La pantalla del Acceso Rápido en Opera 11.10</p>

<p>El atributo <a href="http://www.w3.org/TR/view-mode/"><code>view-mode</code></a> define la especificación del modo o estilo de visualización. Al utilizar <code>view-mode: minimized</code>, usted puede proporcionar estilos alternativos o contenidos a medida, adaptados para su visualización en la pequeña pantalla del Acceso Rápido. El atributo <code>view-mode</code> trabaja de la misma manera que otras características para ajuste de medios, como por ejemplo <code>device-width</code> y también deberá estar contenido en un bloque <code>@media</code>.</p>

<pre><code>@media screen and (view-mode: minimized) {
    body {
        color: #fff;
        background: #b20000;
    }
}</code></pre>

<p>O usted puede enlazar a una hoja de estilos externa donde haya situado el valor del atributo <code>(view-mode: minimized)</code></p>

<pre><code>&lt;link rel=stylesheet type=&quot;text/css&quot; href=&quot;minimizedstyles.css&quot; media=&quot;(view-mode:minimized)&quot;&gt;</code></pre>

<p>Ver un <a href="/articles/view/opera-speed-dial-enhancements/view-mode.html">ejemplo de uso de <code>view-mode: minimized</code> funcionando</a>.</p>

<p>Tenga en cuenta que <code>view-mode: minimized</code> muestra una pantalla de Acceso Rápido de 256 pixeles de ancho por 160 pixeles de alto.</p>

<h3 id="with-x-purpose">Usando el encabezado para X Propósito</h3>

<p>También es posible servir diferentes URL’s a su entrada de Acceso Rápido. Esto es posible porque cada solicitud desde Acceso Rápido incluye un encabezado <code>X-Purpose: preview</code>  adicional.</p>

<pre><code>GET / HTTP/1.1
Host: www.bbc.co.uk/news
X-Purpose: preview
User-agent: Opera/9.80 (Macintosh; Intel Mac OS X 10.6.6; U; en) Presto/2.8.99 Version/11.10</code></pre>

<p>Detectando este encabezado, usted puede seleccionar diferentes URL’s a direccionar, limitando cuales archivos deben ir al Acceso Rápido, o mostrando contenidos diferentes. Note que esto no afecta a la URL que se cargará cuando el usuario haga clic.</p>
 
<p>En el ejemplo que sigue, hemos utilizado el mod_rewrite de Apache para redirigir todas las solicitudes del Acceso Rápido a cualquier variante de una URL hacia la página  <code>/preview.html</code> (usted probablemente querrá ser más específico en el mundo real.)</p>

<pre><code>RewriteEngine On
RewriteCond %{HTTP:X-Purpose} ^preview$
RewriteRule ^(.*) /preview.html</code></pre>

<p>O tal vez prefiera utilizar un lenguaje del lado del servidor para enviar diferentes contenidos bajo la misma URL. En el ejemplo siguiente se utiliza PHP.</p>

<pre><code>&lt;?php
if ($_SERVER[&#39;HTTP_X_PURPOSE&#39;] == &#39;preview&#39;) {
    // Send Speed Dial content
} else {
    // Send regular content
}
?&gt;</code></pre>

<h3 id="preview-refresh">Recargando automáticamente el contenido a intervalos regulares de tiempo</h3>

<p>Para hacer el contenido del Acceso Rápido más dinámico, usted puede definir un comportamiento de recarga automática, que se utilizará si el usuario agrega el sitio en una entrada de su Acceso Rápido. Usted puede hacer aquello de dos formas:</p>

<ol>
<li><p>Usando una etiqueta <code>meta</code>:</p>
<pre>&lt;meta http-equiv=&quot;preview-refresh&quot; content=&quot;3600&quot;&gt;</pre></li>
<li><p>Estableciendo un valor para el atributo <code>Preview-Refresh</code> como tiempo de respuesta:</p>
<pre>Preview-Refresh:3600</pre>
</li>
</ol>

<p>Tenga en cuenta que el valor se establece en segundos. El número 3600 provocará que Acceso Rápido recargue la entrada dentro de una hora.</p>

<h2 id="sdpriority">Prioridades en el Acceso Rápido</h2>

<p>Acceso Rápido le da prioridad al atributo CSS view-mode: minimized. En caso de no haber estilos disponibles el navegador buscará iconos. Si no se ha especificado un icono o el archivo no se encuentra presente o está corrupto, Acceso Rápido utilizará una captura de pantalla del sitio, como está previsto por defecto.</p>

<h2 id="productsupport">Soporte para productos de opera</h2>

<p>Estas mejoras solo están disponibles para usuarios de Opera Browser versión PC de escritorio.</p>
<h2>Lea más</h2>
<ul>
	<li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#rel-icon">Enlaces a la especificación HTML 5 WHATWG</a></li>
<li><a href="http://www.w3.org/TR/view-mode/">Especificaciones del atributo View mode</a></li>
</ul>

