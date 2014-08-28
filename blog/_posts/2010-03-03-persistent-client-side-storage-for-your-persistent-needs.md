---
title: Persistent Client Side Storage for Your Persistent Needs
authors:
- joao-eiras
tags:
- coreblog
- storage
license: cc-by-3.0
---
In the beginning of 2009 we started developing support for the persistent storage APIs, <a href="http://www.w3.org/TR/webstorage/" target="_blank">Web Storage</a> and <a href="http://www.w3.org/TR/webdatabase/" target="_blank">Web SQL Databases</a>. Meanwhile, with the Opera 10.50 release cycle, the feature was made public.<br/><br/>Despite being two separate APIs, they share some common design. Both benefit from quota control, which can be tweaked in <a href="opera:config#PersistentStorage" target="_blank">opera:config</a>. Whenever a web site tries to go over its allowed quota, the user will be requested for more. Privacy mode, delete private data and widgets are also obviously supported. All web storage areas and databases are visible in <a href="opera:webstorage" target="_blank">opera:webstorage</a> and <a href="opera:webdatabases" target="_blank">opera:webdatabases</a> respectively. Lastly, all data is placed under the folder &quot;pstorage&quot; in your profile folder.<br/><br/>Currently, we support all features in the Web Storage specification, with the exception of structured storage and the storage mutex. Testing also showed that our Web Storage implementation has nice performance.<br/><br/>Naturally, we chose <a href="http://www.sqlite.org/" target="_blank">SQLite</a> as the database engine for Web Databases. SQLite, being in the public domain, allowed us to include it in Opera. Also, we can ensure compatibility with the other browsers that also support Web Databases. SQLite integration went without issues: the online documentation is very good, and allowed us to do everything we wanted. We commend the SQLite project for the great work they are doing.<br/><br/>Unfortunately, the binary footprint of SQLite does not make it perfectly usable in many of the less powerful devices that Opera ships on, so the feature might not be available everywhere. Therefore you should always do proper feature detection before attempting to use the feature, as shown below.<pre>if (window.openDatabase)
{
	/* use web databases */
}
else
{
	/* fallback */
}</pre><br/>Some people have asked if we should support replacing the database engine with something else, like MySql. Currently, there are no plans to do so. Other databases engines are not perfectly interoperable with SQLite, and the integration with an external DBMS is not trivial.<br/><br/>Web Storage support in Dragonfly is already available, and we hope in the future to have nice SQL development tools builtin. For details about the APIs you can refer to the specifications linked above, and to <a href="https://dev.opera.com/" target="_blank">dev.opera.com</a>.<br/><br/>
