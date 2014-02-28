---
title: 'RoboHydra: Advanced Techniques'
authors:
- esteban-velazquez
intro: 'In the first article in this series, we looked at the basics of RoboHydra, the flexible test server tool for testing client-server interactions. In this — the second article — we are taking this knowledge further, looking at more complex examples that utilize RoboHydra as a mock server to send customized test responses back to your client applications.'
license: os-asa
layout: article
---
<h2>Introduction</h2>

<p>This is the third article we've published about RoboHydra. The first two introduced RoboHydra and explored common, simple uses of RoboHydra; this one however is going to focus on advanced techniques you can use for more complicated and custom purposes. In particular, this article will explain some of the more interesting things you can do with the low-level RoboHydra heads (<code>RoboHydraHead</code> objects) that we explored briefly in the second article. This kind of head doesn't do anything concrete, instead receiving a JavaScript function that will do whatever you choose. That function receives the request and response objects (and, optionally, a third argument, as we'll see later) and can do pretty much anything you can implement in JavaScript.</p>

<h2>Preparing the environment</h2>

<p>To prepare your computer to execute these examples, simply create a directory (we'll call it <code>roboexamples</code> throughout this article), make sure you have Node.js installed, open a terminal, go to your new directory and type <code>npm install robohydra</code>. As always, that'll create a directory called <code>node_modules</code>, but you don't need to do anything in there. Simply stay in <code>roboexamples</code>.</p>

<p>Next download the <a href="demo-files.zip">demo files for this article (ZIP)</a> and uncompress them in your <code>roboexamples</code> folder. After that, you should have a directory called <code>roboexamples/files</code>.</p>

<h2>The simplest RoboHydraHead head</h2>

<p>The <code>handler</code> function you pass to a <code>RoboHydraHead</code> is supposed to decide what to send as a response (maybe based on the contents of the request object), then write that response in the response object. Let's look at a trivial example that always returns a given response text without setting any headers or checking anything in the incoming request. This would be roughly equivalent to a <code>RoboHydraHeadStatic</code> head:</p>

<pre><code class="javascript">var heads         = require('robohydra').heads,
    RoboHydraHead = heads.RoboHydraHead;

exports.getBodyParts = function(conf) {
    return {
        heads: [
            new RoboHydraHead({
                path: '/.*',
                handler: function(req, res) {
                    res.send("Always the same response text");
                }
            })
        ]
    };
};</code></pre>

<p>Save the code above to a file named <code>roboexamples/robohydra/plugins/simple/index.js</code>, and create a file <code>roboexamples/simple.conf</code> with the following contents:</p>

<pre><code class="javascript">{"plugins": ["simple"]}</code></pre>

<p>Now, type the following command in your terminal (remember, you have to be in the <code>roboexamples</code> directory) and you'll have a simple RoboHydra server replying "Always the same response text" for any request:</p>

<pre><code class="no-highlight">./node_modules/.bin/robohydra simple.conf</code></pre>

<h2>Spicing it up</h2>

<p>However, that's not terribly exciting, is it? Now we'll try something a bit more involved: we'll make a head that listens in <code>/guess-number</code> and will expect a GET parameter <code>guess</code>. According to whether that number is correct or not, we'll show a message. Plus, we'll print the messages in HTML and set the correct headers so the browser knows how to interpret the output:</p>

<pre><code class="javascript">var heads         = require('robohydra').heads,
    RoboHydraHead = heads.RoboHydraHead;

exports.getBodyParts = function(conf) {
    return {
        heads: [
            new RoboHydraHead({
                path: "/guess-number",
                handler: function(req, res) {
                    var message = "Sorry, try again";

                    // Chosen by fair dice roll, guaranteed to be random
                    var secretNumber = 4;
                    if (parseInt(req.queryParams.guess, 10) === secretNumber) {
                        message = "You guessed right!!!";
                    }

                    // By convention all headers are in lowercase
                    res.headers["content-type"] = "text/html";
                    res.headers["x-comic-number"] = "221";
                    res.send("&lt;!doctype&gt;\n&lt;html&gt;&lt;body&gt;" +
                             message +
                             "&lt;/body&gt;&lt;/html&gt;");
                }
            })
        ]
    };
};</code></pre>

<p>Replace the contents of <code>roboexamples/robohydra/plugins/simple/index.js</code> with the above code,
and restart RoboHydra (i.e. kill with Ctrl-C, start again by typing <code>./node_modules/.bin/robohydra simple.conf</code>). If you now open URLs like <a href="http://localhost:3000/guess-number?guess=4">http://localhost:3000/guess-number?guess=4</a> or <a href="http://localhost:3000/guess-number?guess=1">http://localhost:3000/guess-number?guess=1</a> in your browser, you'll see the two different results.</p>

<p>You can write your own handler functions to do whatever you please. The response object has the properties <code>headers</code> and <code>statusCode</code> for the headers and status code respectively, and if you want to write the response body, you have two possibilities:</p>

<ol>
<li>First, you can send the response in chunks, using the <code>write</code> method in the response object (and then signal when you're done with your response by calling the <code>end</code> method), in case you need streaming or you want
to simulate slow networks</li>
<li>Second, you can send the response all at once by calling the <code>send</code> method in the response object (which is equivalent to a single <code>write</code> call plus an <code>end</code> call).</li>
</ol>

<p>If you need to inspect the incoming request you can check the properties <code>headers</code>, <code>queryParams</code> and <code>bodyParams</code> on the request object. See the <a href="http://robohydra.org/documentation">RoboHydra documentation</a> for full details.</p>

<h2>Storing values for later</h2>

<p>Another interesting possibility is storing values in variables outside of the function, so we can check them later. For example, we
might want to have one URL that saves whatever comes to it, and another URL that shows what we have saved so far. Consider the
following example:</p>

<pre><code class="javascript">var heads         = require('robohydra').heads,
    RoboHydraHead = heads.RoboHydraHead;

exports.getBodyParts = function(conf) {
    var visits = {};

    return {
        heads: [
            new RoboHydraHead({
                path: "/articles/:articleId",
                handler: function(req, res) {
                    var id = req.params.articleId;
                    visits[id] = visits[id] || 0;
                    visits[id]++;

                    res.headers["content-type"] = "text/html";
                    res.send("&lt;!doctype&gt;\n&lt;html&gt;&lt;body&gt;" +
                                 "&lt;h1&gt;" + id + "&lt;/h1&gt;" +
                                 "&lt;p&gt;Text for article '" +
                                 id + "'&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;");
                }
            }),

            new RoboHydraHead({
                path: "/admin/visits",
                handler: function(req, res) {
                    res.headers["content-type"] = "text/html";
                    res.write("&lt;!doctype&gt;\n&lt;html&gt;&lt;body&gt;" +
                                  "&lt;h1&gt;Visits per article&lt;/h1&gt;" +
                                  "&lt;ul&gt;");

                    for (var articleId in visits) {
                        res.write("&lt;li&gt;" + articleId + " (" +
                                  visits[articleId] + " visits)&lt;/li&gt;");
                    }

                    res.write("&lt;/ul&gt;&lt;/body&gt;&lt;/html&gt;");
                    res.end();
                }
            })
        ]
    };
};
</code></pre>

<p>In this example, we have URLs like <code>/articles/foo</code>, <code>/articles/bar</code>, etc. and the URL <code>/admin/visits</code> that shows how many times articles have been visited. In the first case, we show some stub text for the article and count the visit (note how we can use the <code>params</code> object in the request object to access interesting parts of the URL). In the second case, we show all the information we have gathered so far through the visits to the other URLs.</p>

<p>To try it out, replace the contents of <code>roboexamples/robohydra/plugins/simple/index.js</code> with the new code, restart RoboHydra, and load several URLs with structures like <code>localhost:3000/articles/robohydra-intro</code>, <code>localhost:3000/articles/robohydra-advanced</code>, etc. Then go to <code>localhost:3000/admin/visits</code> to see the results.</p>

<h2>Talking heads: the <code>next</code> function</h2>

<p>One very powerful feature we haven't talked about yet is the <code>next</code> function. Remember how when a request comes, RoboHydra tries to match the request with the first head, then the second, etc. until it finds a matching head. That means that even if there is more than one head matching the request, only the first one gets to serve it. However, the <code>next</code> function, which is passed as an optional third parameter to the <code>handler</code> function, allows a head to call the next head that matches the request. Let's see this with an example. Imagine you have a RoboHydra server with the following heads:</p>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Path</th>
    </tr>
  </thead>
  <tr>
    <td>onlyFoo</td>
    <td>/foo</td>
  </tr>
  <tr>
    <td>onlyBar</td>
    <td>/bar</td>
  </tr>
  <tr>
    <td>atLeastFoo</td>
    <td>/foo.*</td>
  </tr>
  <tr>
    <td>catchAll</td>
    <td>/.*</td>
  </tr>
</table>

<p>When a request for <code>/foo</code> comes, RoboHydra will process the request with the head <code>onlyFoo</code>, even though also <code>atLeastFoo</code> matches. However, if the <code>onlyFoo</code> calls the <code>next</code> function, the head <code>atLeastFoo</code> will process the request. Once it's finished, the <code>onlyFoo</code> will be able to inspect the response <code>atLeastFoo</code> produced, and decide if it wants to return that response, or tweak it and then return it, or ignore it completely.</p>

<p>The <code>next</code> function can be called as many times as we want to (but typically only once, if at all), and receives two parameters: a request object and a response object. RoboHydra will then try to find any heads below the current one that can process the request object we passed. The head will execute normally, and the response will be written to the response object we passed as a parameter. We could of course pass the same request and response objects we received ourselves, <em>or</em> pass other objects. This is useful in a variety of situations, but most commonly to tweak the URLs of a given request before processing, or to tweak the response before it is sent to the client.</p>

<p>We'll illustrate this first of all with a trivial example. Let's say we have a head A that depends on a GET parameter called <code>type</code>, but we don't always want to pass it: when we don't pass it, we want it to default to <code>basic</code>. We can write a small head B that sets the type GET parameter only if it's not already set, then pass the request to head A for actual processing. Head A will be very simple in this example, but it could be a proxy or anything else. Replace the contents of <code>roboexamples/robohydra/plugins/simple/index.js</code> with the below code block, and restart RoboHydra:</p>

<pre><code class="javascript">var heads         = require('robohydra').heads,
    RoboHydraHead = heads.RoboHydraHead;

exports.getBodyParts = function(conf) {
    return {
        heads: [
            new RoboHydraHead({
                name: "defaultTypeSetter",
                path: "/.*",
                handler: function(req, res, next) {
                    if (req.queryParams.type === undefined) {
                        req.queryParams.type = "basic";
                    }
                    next(req, res);
                }
            }),

            new RoboHydraHead({
                name: "content",
                path: "/.*",
                handler: function(req, res) {
                    res.send("The type in the request was: '" +
                                 req.queryParams.type +
                                 "'");
                }
            })
        ]
    };
};
</code></pre>

<p>Now load URLs into your browser like <a href="http://localhost:3000/foo?type=bar">http://localhost:3000/foo?type=bar</a> and <a href="http://localhost:3000/foo">http://localhost:3000/foo</a> and see the different results.</p>

<p>Let's look at another example. Let's say we are superstitious and we don't like the number 3. So, when we're browsing Dev Opera we don't want to see the contents of page 3, and instead want the contents of page 4. As we can see if we check on this site, the pagination URLs look like <code>http://dev.opera.com/?page=<em>number</em></code>. What we will do, then, is create a head that will replace any <code>page=3</code> we see in the URL with <code>page=4</code> before passing it on to the proxy head that serves Dev Opera. Replace the contents of <code>roboexamples/robohydra/plugins/simple/index.js</code> again — this time with the following code — and restart RoboHydra:</p>

<pre><code class="javascript">var heads              = require("robohydra").heads,
    RoboHydraHead      = heads.RoboHydraHead,
    RoboHydraHeadProxy = heads.RoboHydraHeadProxy;

exports.getBodyParts = function(conf) {
    return {
        heads: [
            new RoboHydraHead({
                name: "superstitiousPagination",
                path: "/.*",
                handler: function(req, res, next) {
                    req.url = req.url.replace(/page=3/, "page=4");
                    next(req, res);
                }
            }),

            new RoboHydraHeadProxy({
                name: "devOpera",
                mountPath: "/",
                proxyTo: "http://dev.opera.com",
                setHostHeader: true
            })
        ]
    };
};</code></pre>

<p>Now go to <a href="http://localhost:3000/">http://localhost:3000/</a> and start clicking on the next pages. Notice how when you click on page 3, page 4 is shown instead (you can tell because the pagination links mark page 4, not 3, as the current one), even though in the address bar you can still see <code>?page=3</code>.</p>

<p>In this example we only modified the GET parameters, but we could have changed the URL of the request, or any other
property. If we had changed the URL, the request would have been processed by the first head matching the new URL, regardless of what the original URL was. In the following sections we'll see how to inspect and tweak the response of the second head.</p>

<h2>Inspecting responses</h2>

<p>Apart from modifying the request before sending over to the next head, we can also inspect the response we received from it. To do that, we pass a fake response object to the next head, inspect that response, and decide if we want to use it. We could then make our own response, or modify the existing response before sending it back to the client.</p>

<p>Let's look at another simple example: we'll create a simple file server with a custom 404 error message. To do that, we'll need two heads: a regular <code>RoboHydraHeadFilesystem</code> head and a second head that will call the first and check the status code. If it's 404, it will return our own error message. If not, it will simply serve whatever the filesystem head returned. Replace the contents of <code>roboexamples/robohydra/plugins/simple/index.js</code> with the following code and restart RoboHydra:</p>

<pre><code class="javascript">var robohydra               = require('robohydra'),
    heads                   = robohydra.heads,
    Response                = robohydra.Response,
    RoboHydraHead           = heads.RoboHydraHead,
    RoboHydraHeadFilesystem = heads.RoboHydraHeadFilesystem;

exports.getBodyParts = function(conf) {
    return {
        heads: [
            new RoboHydraHead({
                name: "special404",
                path: "/.*",
                handler: function(req, res, next) {
                    // Create a fake response object to pass to the
                    // filesystem head so we can capture its
                    // response. Once we have it, decide if we should
                    // respond with our error message, or with
                    // whatever the filesystem head returned
                    var fakeRes = new Response().on('end', function(evt) {
                        if (evt.response.statusCode === 404) {
                            res.send("OH NOES, YOU FOUND A DEAD LINK. " +
                                         "Have you been playing Zelda again?");
                        } else {
                            res.copyFrom(evt.response);
                            res.end();
                        }
                    });

                    next(req, fakeRes);
                }
            }),

            new RoboHydraHeadFilesystem({
                name: "realFileServer",
                mountPath: "/",
                documentRoot: "files"
            })
        ]
    };
};</code></pre>

<p>As you can see, we're using the <code>Response</code> class to create the fake response object we'll pass to the filesystem head. In that fake response object we hook a function to the <code>end</code> event, and decide what to do there (pass the same response the filesystem head returned, or make our own response).</p>

<p>If you make requests to <a href="http://localhost:3000/">http://localhost:3000/</a> or
<a href="http://localhost:3000/foo.html">http://localhost:3000/foo.html</a> you will get a normal page (it's included in the ZIP file you downloaded before!). Otherwise, it will return our custom error message.</p>

<h2>Modifying responses</h2>

<p>As we can inspect the response given by the "next" head, we can also tweak its contents before sending them back to the client.  Imagine we want to modify the code in this very site, Dev.Opera, to emphasize that it's all about developers. We could, for example, replace the word "developers" on the frontpage with "DEVELOPERS, DEVELOPERS, DEVELOPERS, DEVELOPERS". This can be done with the <code>RoboHydraHeadFilter</code> head; however, we'll implement this with the RoboHydraHead as it's easy enough and will demonstrate how to tweak responses with the next function.</p>

<p>Replace the contents of <code>roboexamples/robohydra/plugins/simple/index.js</code> with the following
code, restart RoboHydra and go to <a href="http://localhost:3000">http://localhost:3000</a> in your browser:</p>

<pre><code class="javascript">var robohydra               = require('robohydra'),
    heads                   = robohydra.heads,
    RoboHydraHead           = heads.RoboHydraHead,
    RoboHydraHeadFilesystem = heads.RoboHydraHeadFilesystem,
    RoboHydraHeadProxy      = heads.RoboHydraHeadProxy,
    Response                = robohydra.Response;

exports.getBodyParts = function(conf) {
    var developersDevelopersDevelopersDevelopers =
      '&lt;span onmouseover="var a = document.createElement(\'audio\'); a.src = \'/ogg/developers.ogg\'; a.autoplay = true; document.body.appendChild(a);"&gt;DEVELOPERS, DEVELOPERS, DEVELOPERS, DEVELOPERS&lt;/span&gt;';

    return {
        heads: [
            new RoboHydraHeadFilesystem({
                name: "static",
                mountPath: "/ogg",
                documentRoot: "files"
            }),

            new RoboHydraHead({
                name: "emphasizer",
                path: "/.*",
                handler: function(req, res, next) {
                    // Create a fake response object to pass to the
                    // proxy head, so we can capture the proxy
                    // response. Once we have the proxy response,
                    // substitute the emphasized string for
                    // "developers" and return the modified response
                    var fakeRes = new Response().on('end', function(evt) {
                        res.copyFrom(evt.response);
                        res.body =
                            res.body.toString().replace(
                                /developers&lt;/,
                                developersDevelopersDevelopersDevelopers + "&lt;"
                            );
                        res.end();
                    });

                    // Remove the Accept-Encoding header from the
                    // original request to make sure the server won't
                    // compress the response, and pass the fake
                    // response object created above
                    delete req.headers["accept-encoding"];
                    next(req, fakeRes);
                }
            }),

            new RoboHydraHeadProxy({
                name: "realDevOpera",
                mountPath: "/",
                proxyTo: "http://dev.opera.com",
                setHostHeader: true
            })
        ]
    };
};</code></pre>

<p>How does this work? First of all, in the <code>emphasizer</code> head, we remove the <code>Accept-Encoding</code> header from the original request to make sure the server doesn't reply with a compressed response. Then we call the <code>next</code> function passing the modified request object and a fake response object that we'll use only to save the response from the <code>realDevOpera</code> head. This fake response object has an event listener for the <code>end</code> event, when the "next" head (in this case, the proxy) has finished writing its response. At that moment we copy the contents of the proxy response to our own response, modify the body to emphasize the text we want, and then signal that we're done by calling the <code>end</code> method in the original response.</p>

<h2>Conclusion</h2>

<p>In this article, we have seen some of the most advanced uses of RoboHydra. Now you know how to use the low-level functionality to create the most flexible and powerful RoboHydra-based servers possible. If you want to know more, and follow updates and new features, check out <a href="http://robohydra.org">robohydra.org</a> and RoboHydra on <a href="https://github.com/operasoftware/robohydra">GitHub</a>, <a href="https://twitter.com/robohydra">Twitter</a> and <a href="https://www.youtube.com/robohydra">YouTube</a>.</p>
