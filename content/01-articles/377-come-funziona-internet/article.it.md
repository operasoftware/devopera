Title: Come funziona Internet
----
Date: 2011-02-15 13:31:47
----
Lang: it
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w/" rel="prev" title="link all&#39;articolo precedente della serie">Articolo Precedente—La storia di Internet e del Web, e l&#39;evoluzione degli standard web</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/" rel="next" title="link all&#39;articolo successivo della serie">Articolo Successivo—Il Modello degli standard web—HTML, CSS e JavaScript</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabella dei Contenuti</a></li>
</ul>

<h2>Introduzione</h2>
<p>Raramente vi viene offerta la possibilit&#xE0; di dare un&#39;occhiata al &quot;dietro le quinte&quot;, agli ingranaggi e meccanismi che muovono l&#39;azione.  Oggi &#xE8; il vostro giorno fortunato! Vi far&#xF2; entrare nel dietro le quinte di una delle pi&#xF9; eccitanti tecnologie, con la quale potreste avere una certa familiarità: il World Wide Web.  Parte il tema musicale.</p>
<p>Questo articolo tratta le tecnologie di base che danno vita al World Wide Web: </p>
<ul>
<li>Hypertext Markup Language (HTML) (n.d.t. Linguaggio di Marcatura Ipertestuale) </li>
<li>Hypertext Transfer Protocol (HTTP) (n.d.t. Protocollo per il Trasferimento di Ipertesti)</li>
<li>Domain Name System (DNS) (n.d.t. Sistema dei Nomi a Dominio)</li>
<li>Web server e web browser</li>
<li>Contenuto Statico e Contenuto Dinamico</li>
</ul>
<p>Sono tutti argomenti abbastanza fondamentali. Ci&#xF2; che verr&#xE0; trattato qui non vi aiuter&#xE0; a costruire siti web migliori, ma vi fornir&#xE0; il giusto linguaggio da utilizzare con clienti o altre persone per parlare del Web. Proprio come una saggia &quot;suora diventata bambinaia&quot; una volta disse in <em>The Sound of Music</em>: “When we read we begin with ABC.  When we sing we begin with Do Re Mi.” (n.d.t. Quando leggiamo iniziamo con ABC. Quando cantiamo iniziamo con Do Re Mi). In questo articolo daremo una rapida occhiata a come i computer comunicano tra loro utilizzando i protocolli HTTP e TCP/IP, quindi ci sposteremo sui diversi linguaggi che collaborano per dar vita alle pagine web che formano il mondo di Internet. I contenuti di questo articolo sono i sequenti:</p>
<ul>

<li><a href="#internetcommunication">Come comunicano i computer tramite Internet?</a>

<ul><li><a href="#requestresponse">Il ciclo request/response</a></li>
</ul></li>


<li><a href="#contenttypes">Tipi di contenuto</a>
<ul><li><a href="#plaintext">Testo Semplice</a></li>
<li><a href="#webstandards">Standard Web</a></li>
<li><a href="#dynamicpages">Pagine Web Dinamiche</a></li>
<li><a href="#proprietaryformats">Formati che richiedono altre applicazioni o plugin</a></li>
</ul>
</li>




<li><a href="#staticdynamic">Siti Web Statici vs Siti Web Dinamici</a></li>

<li><a href="#summary">Sommario</a></li>

<li><a href="#exercises">Esercizi</a></li>


</ul>



<h2 id="internetcommunication">Come comunicano i computer tramite Internet?</h2>
<p>Fortunatamente, abbiamo mantenuto le cose semplici per i computer. Quando si tratta di World Wide Web, la maggior parte delle pagine sono scritte nello stesso linguaggio, l&#39;HTML, che viene trasferito utilizzando un protocollo comune, l&#39;HTTP. L&#39;HTTP è il dialetto (specificazione) comune di Internet, permette ad esempio ad una macchina Windows di cantare in armonia con una macchina che fa girare l&#39;ultima e grandiosa versione di Linux (Do Re Mi!). Attraverso l&#39;utilizzo di un browser web – un software speciale che interpreta l&#39;HTTP e rappresenta l&#39;HTML in una forma leggibile dall&#39;uomo – le pagine web scritte in HTML su un qualsiasi computer posso essere lette ovunque, inclusi i telefonini, i dispositivi PDA e addirittura le più note console.</p>
<p>Anche se parlano la stessa lingua, i vari dispositivi che accedono al web hanno bisogno di seguire alcune regole per essere in grado di comunicare fra loro – &#xE8; come imparare ad alzare la mano per fare una domanda in classe. L&#39;HTTP stabilisce queste regole per Internet. Una macchina client (come il vostro computer) sa di dover effettuare una richiesta per una pagina web da un server. Un server è un computer dove il sito web risiede – quando digitate un indirizzo web nel vostro browser, un server riceve la vostra richiesta, trova la pagina e la manda al vostro computer il quale la mostrer&#xE0; nel vostro browser.</p>
<h3 id="requestresponse">Il ciclo request/response</h3>
<p>Ora che abbiamo dato uno sguardo a tutte le parti che permettono ai computer di comunicare su Internet, vedremo in dettaglio come funziona un ciclo HTTP di richiesta e risposta. Qui di seguito c&#39;&#xE8; una sequenza numerata di passi che dovrete seguire, in maniera tale che io possa dimostrarvi efficacemente alcuni dei concetti.</p>
<ol>
<li><p>Ogni richiesta/risposta inizia digitando un Universal Resource Locator (URL) all&#39;interno della barra degli indirizzi del vostro browser, qualcosa come <a href="http://dev.opera.com" target="_blank">http://dev.opera.com</a>. Avviate il vostro browser e fatelo.</p>

<p>Ora, una cosa che potreste gi&#xE0; sapere &#xE8; che i browser non usano davvero gli URL per richiedere siti web ai server; utilizzano invece l&#39;Internet Protocol o indirizzi IP (simili a numeri di telefono o indirizzi postali che identificano i server). Ad esempio, l&#39;indirizzo IP di <a href="http://www.apple.com" target="_blank">http://www.apple.com</a> &#xE8; 17.149.160.10. </p></li>
<li><p>Provate ad aprire una nuova scheda o una nuova finestra del vostro browser, digitate <a href="http://www.apple.com" target="_blank">http://www.apple.com</a> e premete Invio; digitate ora <a href="http://17.149.160.10/" target="_blank">http://17.149.160.10/</a> e premete Invio — arriverete sullo stesso sito.</p>

<p><a href="http://www.apple.com" target="_blank">http://www.apple.com</a> funge semplicemente da alias per <a href="http://17.149.160.10/" target="_blank">http://17.149.160.10/</a>, ma perch&#xE9;, e come? E&#39; necessario usare nomi di dominio (gli URL) al posto di sequenze di numeri (gli indirizzi IP) poich&#xE9; l&#39;essere umano riesce a memorizzarli pi&#xF9; facilmente. Il sistema che fa funzionare tutto ci&#xF2; &#xE8; chiamato Domain Name System (DNS): essenzialmente &#xE8; una cartella automatica globale di tutte le macchine connesse ad Internet. Quando digitate <a href="http://dev.opera.com" target="_blank">http://dev.opera.com</a> nella barra degli indirizzi e premete Invio, quell&#39;URL viene mandato ad un server dei nomi, il quale prova ad associargli il suo indirizzo IP. Ci sono tonnellate di macchine connesse ad Internet, e nessun server DNS ha la lista di tutte le macchine online, quindi esiste un sistema apposito che instrada la vostra richiesta al server corretto al fine di soddisfarla.</p>
<p>Quindi il sistema DNS cerca il sito www.opera.com, a tale URL vede che &#xE8; associato l&#39;indirizzo IP 17.149.16.10 e invia al vostro browser quell&#39;indirizzo IP.</p>
<p>La vostra macchina invia una richiesta alla macchina locata a quell&#39;indirizzo IP e attende di ricevere una risposta. Se tutto va bene, la macchina server invia un breve messaggio al client dicendo che &#xE8; tutto ok (vedi Figura 1), seguito dalla pagina web stessa. Questo tipo di messaggio è contenuto in un <strong>header HTTP</strong>. </p>
<img src="/articles/view/3-how-does-the-internet-work/article3_1.gif" alt="successful request response cycle" />

 
<p class="comment">Figura 1: In questo caso, va tutto bene, e il server restituisce la corretta pagina web.</p>
<p>Se qualcosa va male, se ad esempio avete digitato l&#39;URL non correttamente, il vostro browser ricever&#xE0; un <strong>errore HTTP</strong> – l&#39;infame errore 404 “Pagina non trovata” &#xE8; il pi&#xF9; comune nel quale vi imbatterete.</p></li>

<li><p>Provate a digitare <a href="#">http://dev.opera.com/joniscool.html</a>. La pagina non esiste, quindi riceverete un errore 404. Provate con altre pagine, su diversi siti web, che non esistono, e vedrete visualizzate diverse pagine. Ci&#xF2; accade perch&#xE9; alcuni web developer hanno lasciato che sia il server a restituire le proprie pagine predefinite di errore, altri invece hanno fatto in modo che vengano visualizzate pagine di errore personalizzate. Questa &#xE8; una tecnica avanzata che non verr&#xE0; trattata in questo corso, ma si spera verr&#xE0; trattata a breve in un futuro articolo di dev.opera.com.</p> 
<p>Infine, una nota a proposito degli URL – di solito il primo URL che digitate per andare su un sito web non ha un nome di file alla fine (ad esempio <a href="http://www.mysite.com/" target="_blank">http://www.mysite.com/</a>), e le pagine seguenti a volte ce l&#39;hanno, a volte no. Accedete sempre a file reali, ma a volte il web developer ha impostato il web server in maniera tale da non mostrare i nomi dei file negli URL – ci&#xF2; spesso rende gli URL pi&#xF9; ordinati e facili da ricordare, e si ha come risultato una migliore esperienza per gli utenti dei vostri siti web. Non tratteremo questo argomento in questo articolo poich&#xE9;, di nuovo, &#xE8; un argomento abbastanza avanzato.  <a href="http://dev.opera.com/articles/view/supplementary-getting-your-content-onli/">Tratteremo l&#39;upload dei file ad un server e le strutture di file e directory in un articolo successivo</a>. </p></li>

</ol>
<h2 id="contenttypes">Tipi di Contenuto</h2>
<p>Ora che abbiamo visto come funziona un ciclo request/response, spostiamo la nostra attenzione sui diversi tipi di contenuto che potete trovare su Internet. Li ho raggruppati in 4 tipi – testo semplice, standard web, pagine web dinamiche, e formati che richiedono altre applicazioni o plugin.</p>
<h3 id="plaintext">Testo Semplice</h3>
<p>Prima della nascita di qualsiasi standard web o plugin, l&#39;Internet era semplicemente composto da immagini e file di testo semplice – file con estensione .txt o simili. Quando un file di testo semplice viene trovato su Internet, il browser lo mostra cos&#xEC; com&#39;&#xE8;, senza nessuna elaborazione. Spesso vi imbattete in file di testo semplice sui siti universitari.</p>
<h3 id="webstandards">Standard Web</h3>
<p>Le fondamenta del World Wide Web sono tre standard principali – HTML (o XHTML, user&#xF2; questi due termini in maniera intercambiabile per i nostri scopi), CSS e JavaScript.</p>
<p>Hypertext Markup Language &#xE8; davvero un buon nome per descrivere il ruolo di questo linguaggio (n.d.t. HTML = Linguaggio di Marcatura Ipertestuale). L&#39;HTML &#xE8; ci&#xF2; che viene usato per suddividere un documento, specificarne il contenuto e la struttura, e definire il significato di ogni sua parte (&#xE8; ci&#xF2; che contiene tutto il testo, le immagini, ecc... che vedete su un sito web). L&#39;HTML utilizza elementi per identificare le diverse componenti di una pagina.</p>
<p>I Cascading Style Sheets (n.d.t. Fogli di Stile a Cascata) vi danno un controllo completo su come un elemento viene mostrato. E&#39; facile, utilizzando dichiarazioni di stile, cambiare tutti i paragrafi in modo che abbiamo un&#39;interlinea doppia (<code>line-height: 2em;</code>), o rendere verdi tutti i titoli di secondo livello (<code>color: green;</code>). Ci sono numerosissimi vantaggi nel separare la struttura dalla formattazione, e tratteremo questo argomento pi&#xF9; nel dettaglio <a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/" title="The web standards model">nel prossimo articolo</a>. Per dimostrare la potenza dell&#39;HTML e del CSS usati insieme, la Figura 2 mostra un sito creato con semplice HTML sulla sinistra, senza formattazione aggiunta, mentre sulla destra potete osservare esattamente lo stesso esempio HTML ma con dello stile CSS applicato.</p>

<img src="/articles/view/3-how-does-the-internet-work/article3_2.gif" alt="a page with and without CSS styling" />
 
<p class="comment">Figura 2: Semplice HTML sulla sinistra, HTML con CSS applicato sulla destra.</p>
<p>Infine, JavaScript fornisce funzioni dinamiche ai vostri siti web. Potete scrivere piccoli programmi in JavaScript che girano sui computer dei client, e non richiedono software specifico installato sul server. JavaScript vi consente di aggiungere alcune funzionalit&#xE0; di base ed interattivit&#xE0; ai vostri siti web, ma ha alcune limitazioni, che ci portano ai linguaggi di programmazione lato server, e alle pagine web dinamiche.</p>
<h3 id="dynamicpages">Pagine Web Dinamiche</h3>
<p>A volte, navigando sul Web, vi imbattete in pagine web che non hanno un estensione .html – potrebbero averne una .php, .asp, .aspx, .jsp, o altre strane. Questi sono esempi di tecnologie web dinamiche, che possono essere usate per creare pagine web con sezioni dinamiche – codice che mostra risultati differenti in base ai valori forniti tramite, ad esempio, un database, un form, o altre fonti di dati. Ci occuperemo di questi tipi di pagine web nella sezione Pagine Web Statiche vs Pagine Web Dinamiche.</p>
<h3 id="proprietaryformats">Formati che richiedo altre applicazioni o plugin</h3>
<p>Poich&#xE9; i browser sono equipaggiati in maniera tale da interpretare e mostrate alcune tecnologie come gli standard web, se avete richiesto un URL che punta ad un formato di file complesso, o ad una pagina web che contiene una tecnologia che richiede un plugin, il file verr&#xE0; scaricato sul vostro computer o aperto utilizzando il plugin richiesto se questo &#xE8; installato sul vostro browser. Ad esempio:</p>
<ol>
<li><p>Se trovate un documento Word, un file Excel, un PDF, un file compresso (ZIP, o SIT ad esempio), immagini complesse tipo i file Photoshop PSD, o un altro file complesso che il browser non riesce ad interpretare, il browser di solito vi chieder&#xE0; se preferite scaricare o aprire il file. Entrambe le scelte danno quasi lo stesso risultato: il file verr&#xE0; scaricato, ma nel secondo caso verr&#xE0; automaticamente aperto da un&#39;applicazione che pu&#xF2; leggerlo, se essa &#xE8; presente sul sistema.</p></li>

<li><p>Se trovate una pagina web che contiene un video Flash, un MP3 o altri formati musicali, MPEG o altri formati video, il browser li riprodurr&#xE0; utilizzando un plugin, se installato. Altrimenti, vi verr&#xE0; richiesto di installare il plugin necessario, o di scaricare il file e cercare un&#39;applicazione desktop che possa riprodurlo.</p></li>
</ol>
<p>Sicuramente non &#xE8; sempre cos&#xEC; – ad esempio SVG (Scalable Vector Graphics, n.d.t Grafica Vettoriale Scalabile) &#xE8; uno standard web che gira nativamente su alcuni browser, come Opera, ma non in altri, come Internet Explorer; quest&#39;ultimo ha bisogno di un plugin per poter interpretare e mostrare SVG. Alcuni browser presentano dei plugin preinstallati, quindi non potreste essere in grado di capire se il contenuto viene mostrato tramite un plugin o &#xE8; supportato nativamente dal browser.</p>
<h2 id="staticdynamic">Pagine Web Statiche vs Pagine Web Dinamiche</h2><p>Cosa sono le pagine web statiche e dinamiche, e quali sono le differenze fra le due? Proprio come per una scatola di cioccolatini, sta tutto nel contenuto.</p>
<p>Un sito web statico &#xE8; un sito web il cui contenuto, l&#39;HTML e le grafiche, &#xE8; sempre statico – viene mostrato nella stessa identica maniera ad ogni visitatore, a meno che la persona che lo ha creato non decida di cambiare manualmente la copia del sito sul server – esattamente ci&#xF2; che abbiamo osservato finora nella maggior parte di questo articolo.</p>
<p>Al contrario, su un sito web dinamico, il contenuto sul server &#xE8; lo stesso, ma invece di essere semplicemente HTML, contiene anche codice dinamico, che potrebbe mostrare diversi dati in base alle informazioni che gli vengono fornite. Diamo un&#39;occhiata ad un esempio — andate su www.amazon.com e cercate 5 prodotti. Amazon non vi ha portato su 5 pagine web differenti; vi ha fornito la stessa pagine per 5 volte, ma con al suo interno diverse informazioni dinamiche ogni volta. Queste informazioni sono contenute in un database, il quale preleva le informazioni rilevanti quando richieste, e le restituisce al web server che le inserisce nella pagina dinamica.</p>
<p>Un&#39;altra cosa da notare &#xE8; che del software speciale deve essere installato sul server per creare pagine web dinamiche. I normali file HTML statici sono salvati con l&#39;estensione .html, invece i file dinamici  contengono uno speciale codice dinamico in aggiunta all&#39;HTML, e vengono salvati con una speciale estensione per comunicare al server web che essi hanno bisogno di essere processati prima di essere inviati al client (ad esempio, hanno bisogno di dati dal database) – i file PHP hanno ad esempio un&#39;estensione .php.</p> 
<p>Ci sono molti linguaggi dinamici fra i quali scegliere – ho gi&#xE0; menzionato PHP, e altri esempi includono Python, Ruby on Rails, ASP.NET e Coldfusion. Alla fine, tutti questi linguaggi hanno pressoch&#xE9; le stesse capacit&#xE0;, come la comunicazione con i database, la validazione di informazioni inserite nei form, ecc., ma funzionano in maniera leggermente diversa, ed hanno alcuni vantaggi e svantaggi. Sta tutto nello scegliere quello che soddisfa meglio le vostre necessit&#xE0;.</p>

<p>Non tratteremo ulteriormente i linguaggi dinamici in questo corso, ma ho raccolto una lista di risorse nel caso vogliate saperne di pi&#xF9;:</p>

<ul>
<li>Rails:  Fernandez, Obie. (2007), The Rails Way.  Addison-Wesley Professional Ruby Series. </li>
<li><a href="http://www.rubyonrails.org/screencasts">Rails screencasts</a></li>
<li>PHP: Powers, David (2006), PHP Solutions: Dynamic web development made easy, friends of ED. </li>
<li><a href="http://www.php.net/docs.php">PHP Online documentation</a></li>
<li>ASP.NET: Lorenz, Patrick. (2003). ASP.NET 2.0 Revealed.  Apress. </li>
<li> ASP.NET: <a href="http://asp.net">online ASP.NET documentation and tutorials.</a></li>

</ul>

<h2 id="summary">Sommario</h2>
<p>&#xC8; tutto per il tour &quot;dietro le quinte&quot; del mondo di Internet. Questo articolo ha sfiorato la superficie di molti degli argomenti trattati, ma &#xE8; utile in quanto li mette tutti in relazione fra di loro, mostrando come lavorano insieme. C&#39;&#xE8; ancora molto da imparare sulla sintassi dei vari linguaggi – HTML, CSS e JavaScript – ed &#xE8; ci&#xF2; che faremo – il prossimo articolo si concentra sul modello di sviluppo standard di siti web con HTML, CSS e JavaScript, e da un&#39;occhiata al codice delle pagine web.</p>


<h2 id="exercises">Esercizi</h2>

<ul>
<li>Fornite una breve definizione per l&#39;HTML e l&#39;HTTP e spiegate le differenze fra i due.</li>
<li>Qual&#39;&#xE8; la funzione di un browser web?</li>
<li>Navigate sul web per 5-10 minuti e provate a trovare diversi tipi di contenuto – testo semplice, immagini, HTML, pagine dinamiche come pagine PHP e .NET (.aspx), PDF, documenti word, video Flash ecc.. Accedete ad alcuni di essi e pensate a come il vostro computer ve li mostra.</li>
<li>Qual&#39;&#xE8; la differenza fra le pagine web statiche e quelle dinamiche?</li>
<li>Trovate una lista di codici di errore HTTP, elencatene 5 e spiegate cosa vuol dire ognuno di essi.</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w/" rel="prev" title="link all&#39;articolo precedente della serie">Articolo Precedente—La storia di Internet e del Web, e l&#39;evoluzione degli standard web</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/" rel="next" title="link all&#39;articolo successivo della serie">Articolo Successivo—Il Modello degli standard web—HTML, CSS e JavaScript</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Tabella dei Contenuti</a></li>
</ul>
