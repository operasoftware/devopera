---
title: Using RoboHydra as a Mock Server
authors:
- esteban-velazquez
intro: 'In the first article in this series, we looked at the basics of Robohydra, the flexible test server tool for testing client-server interactions. In this — the second article — we are taking this knowledge further, looking at more complex examples that utilize Robohydra as a mock server to send customized test responses back to your client applications.'
layout: article
---
<h2>Introduction</h2>

<p>As you can see from my introductory article <a href="/articles/view/robohydra-a-new-testing-tool-for-client-server-interactions/">Robohydra: a new testing tool for client-server interactions</a>, RoboHydra is a flexible web server that can help you develop and test HTTP-based applications. The first article explored how to use RoboHydra as a proxy for front-end developers. This article will look at a more advanced use case, showing how to employ it as a <a href="http://en.wikipedia.org/wiki/Mock_object">mock</a> server to build a test suite for your client applications.</p>

<p>When developing a client application, especially one that pulls information from an API, it's useful to have a local web server that will return what we need to test — different features, edge cases, etc. This has several advantages:</p>

<ul>
<li>It's possible to develop an application without access to a staging server (we might be offline, or the server might be inside an intranet that we don't currently have access to).</li>
<li>We can generate responses on demand that are often not easy to get from a real server, like race conditions, server down or struggling situations, network latency or slowness, or simply combinations of data that are cumbersome to obtain from
the server.</li>
<li>We can easily generate responses that are would theoretically never be received from the real server, but need to be allowed for. Examples include malicious server data, corrupted data, data in an
obsolete or possible future format, or truncated data.</li>
</ul>

<p class="note">Brief Recap: A RoboHydra server is composed of many heads. Each head takes care of a URL path, and defines what happens when a request for that path is received. Given a concrete test scenario (e.g. <q>search for a meme template and create an image from it</q>) we can have heads for the different URL paths involved that could return the needed data to reproduce that scenario. So for example, a head listening in <code>/search</code> could return one search result, and a head listening in <code>/make-image</code> could return an image matching the previous search result).</p>

<h2>Meme generator example</h2>

<p>In this article I will write a mock server to emulate HTTP responses to the <a href="https://addons.opera.com/es/extensions/details/meme-panel/">Meme panel</a> Opera extension (note that all these techniques work exactly the same for any kind of program that connects to a server via HTTP). Meme panel is an extension that uses the <a href="http://memegenerator.net">Meme
Generator</a> public API to create meme images — it allows you to choose a meme template (say, <q><a href="http://memegenerator.net/Sudden-Realization-Ralph">Sudden Realization Ralph</a></q>), add some
text (say, <q>To test clients / you need a mock server</q>) and obtain <a href="http://memegenerator.net/instance/24004586">the final meme image</a>.</p>

<p>Now I've introduced the example, let's move on to preparing the project.</p>

<h3>Preparing the project</h3>

<p>Before we start, make sure you have Node installed (at least version 0.6.x; download from <a href="http://nodejs.org">http://nodejs.org</a> if necessary). Once that is done, download the code for the <a href="https://addons.opera.com/es/extensions/details/meme-panel/">Meme panel extension</a>. We need a version that connects to our local mock server instead of the real Meme Generator API server — I've created one, which you can
<a href="MemePanel.zip">download as a ZIP file</a>. After uncompressing you'll have a directory called
<code>MemePanel</code>. This directory is where you will do all the work in this article.</p>

<p>To start with, go to your command line, go into your <code>MemePanel</code> directory, and execute the following command to install RoboHydra:</p>

<pre><code class="javascript">npm install robohydra</code></pre>

<p>This command will create a directory <code>node_modules</code>. You don't need to
do anything with it, just make sure it's inside <code>MemePanel</code>.</p>

<h2>Writing our first test head</h2>

<p>In the first article we made RoboHydra return content taken from files or other servers; in this case it returns completely "synthetic" data that doesn't exist anywhere else. We'll start with a head that returns a single search result. In the <a href="http://version1.api.memegenerator.net/">API documentation</a> we can see that the search URL is <code>http://version1.api.memegenerator.net/Generators_Search</code>, and the GET parameter with the search query is called <code>q</code>. As for the response, we
can look at the <a href="http://version1.api.memegenerator.net/Generators_Search?q=insanity&amp;pageIndex=0&amp;pageSize=12">API
example</a>, and see the format we have to imitate (reformatted for readability):</p>

<pre><code class="javascript">{"success":true,
 "result":[
  {"generatorID":45,"displayName":"Insanity Wolf",
   "urlName":"Insanity-Wolf","totalVotesScore":366,
   "imageUrl":"http://cdn.memegenerator.net/images/400x/20.jpg",
   "instancesCount":158030,"ranking":12},
  {"generatorID":488,"displayName":"Insanity Scene Wolf",
   "urlName":"Insanity-Scene-Wolf","totalVotesScore":21,
   "imageUrl":"http://cdn.memegenerator.net/images/400x/74525.jpg",
   "instancesCount":3388,"ranking":197},
  // ...
 ]
}</code></pre>

<p>Armed with this information, we can write a first version of the plugin for the first head: save the following code as <code>MemePanel/robohydra/plugins/memepanelmock/index.js</code>:</p>

<pre><code class="javascript">var heads               = require('robohydra').heads,
    RoboHydraHeadStatic = heads.RoboHydraHeadStatic;

exports.getBodyParts = function(config) {
    return {
        heads: [
            new RoboHydraHeadStatic({
                path: '/Generators_Search',
                content: {
                    success:true,
                    result: [
                        {generatorID:45,
                         displayName:"Judgmental Developer Bruce Lawson",
                         urlName:"Fake-Bruce-Lawson-Meme",
                         totalVotesScore:9001,
                         imageUrl:"Bruce-Lawson-Template.jpg",
                         instancesCount:9999999,
                         ranking:1}
                    ]
                }
            })
        ]
    };
};</code></pre>

<p>Note that, as we're passing a JavaScript object as the value of the
<code>content</code> property, the response content will be the JSON version of
that object and the <code>Content-Type</code> header will automatically be set to
<code>application/json</code>. See the <a href="http://robohydra.org/documentation/"><code>RoboHydraHeadStatic</code>
documentation</a> for full details. Now we're just missing a configuration file to load our new
plugin.</p>

<p>Create a file called <code>memepanel.conf</code> inside the <code>MemePanel</code> directory with the following contents:</p>

<pre><code class="javascript">{"plugins": [{"name": "logger",        "config": {}},
             {"name": "memepanelmock", "config": {}}]}</code></pre>

<p>If you start RoboHydra now with the command <code>node_modules/.bin/robohydra memepanel.conf</code>, you will have a server running our mock search service. It will also write a useful log file in <code>robohydra.log</code> that we can inspect to see the traffic between client and server.</p>

<p>Let's put it to the test by loading the extension in Opera (open or drag the file <code>config.xml</code> from the MemePanel directory into the browser window) and performing a meme search: click on the extension button to open the menu, enter any search terms and click "Search". Note how the result is always the Bruce Lawson meme, no matter what search terms you choose. That's because that head is always returning that content no matter what. You also won't be able to actually create a meme yet, as this is just a simple test condition we have created for our example.</p>

<p>We could teach RoboHydra to only return content when the search terms match a certain criterion, return different content according to the search terms, or even check the incoming search terms for validity, but for now we'll keep it simple.  We have total freedom to choose the content of the responses, allowing us to test many situations that might be hard or impossible to obtain with the real server (e.g. to simulate how the extension will behave if the MemeGenerator API changes the format of the responses, or if the server is down, etc). Our test meme doesn't even exist in the real memegenerator.net... at least not yet.</p>

<h2>Mocking up the meme image creation</h2>

<p>What we have so far allows us to prototype and test the search UI and the result of clicking on a search result, but there's one more step that we need to mock in order to go "full circle" on a basic case: the image creation itself.</p>

<p>The API call for that is <code>Instance_Create</code>, as we can see in the <a href="http://version1.api.memegenerator.net/">API documentation</a>. We need valid credentials to use that API call so we can't just click on the example link, but we can make our own instance. The response format we have to imitate looks like this:</p>

<pre><code class="javascript">{success: true,
 result: {
   generatorID: 45,
   displayName: "Judgmental Developer Bruce Lawson",
   urlName: "Fake-Bruce-Lawson-Meme",
   totalVotesScore: 0,
   imageUrl: "http://memegenerator.net/cache/img/400x/0/0/20.jpg",
   instanceID: 22415018,
   text0: "are you saying...",
   text1: "you don't use robohydra?",
   instanceImageUrl: "http://memegenerator.net/instances/400x/22415018.jpg",
   instanceUrl: "http://memegenerator.net/instance/22415018"
 }
}</code></pre>

<p>Now we'll create a new head to handle the <code>/Instance_Create</code> path. Modify <code>MemePanel/robohydra/plugins/memepanelmock/index.js</code> to look like this:</p>

<pre><code class="javascript">var heads               = require('robohydra').heads,
    RoboHydraHeadStatic = heads.RoboHydraHeadStatic;

exports.getBodyParts = function(config) {
    return {
        heads: [
            new RoboHydraHeadStatic({
                path: '/Generators_Search',
                content: {
                    success:true,
                    result: [
                        {generatorID:45,
                         displayName:"Judgmental Developer Bruce Lawson",
                         urlName:"Fake-Bruce-Lawson-Meme",
                         totalVotesScore:9001,
                         imageUrl:"Bruce-Lawson-Template.jpg",
                         instancesCount:9999999,
                         ranking:1}
                    ]
                }
            }),

            new RoboHydraHeadStatic({
                path: '/Instance_Create',
                content: {
                    success: true,
                    result: {
                        generatorID: 45,
                        displayName: "Judgmental Developer Bruce Lawson",
                        urlName: "Fake-Bruce-Lawson-Meme",
                        totalVotesScore: 0,
                        imageUrl: "Bruce-Lawson-Template.jpg",
                        instanceID: 22415018,
                        text0: "are you saying...",
                        text1: "you don't use robohydra?",
                        instanceImageUrl: "Bruce-Lawson-Final.jpg",
                        instanceUrl: "http://dev.opera.com/articles/view/robohydra-a-new-testing-tool-for-client-server-interactions/"
                    }
                }
            })
        ]
    };
};</code></pre>

<p>We now have everything in place, so we can restart RoboHydra and check
again. Open the extension menu and do the following:</p>

<ol>
<li>Enter a search term and hit "Search". You should see a single
search result, namely the Bruce Lawson meme.</li>
<li>Click on that result. You should see a bigger preview of the meme
template together with the text boxes for the top- and bottom-texts.</li>
<li>Write whatever text you like in those boxes and click "Done". You
should see the mock result image, which always has the text "Are you
saying..." / "you don't use RoboHydra?".</li>
</ol>

<h2>Imitating server failures</h2>

<p>So far we have only mocked up results that are relatively easy to obtain with a real server. It's still useful for a variety of reasons, like offline access and deterministic output. But what about checking how the extension behaves when the server returns a 500 Internal Server Error? We could just create a new head returning a 500 status code for all paths, and go to the admin interface to enable/disable certain heads according to what we're testing.</p>

<p>However, when we have more than a handful of such test scenarios, managing all these heads and enabling and disabling the appropriate heads quickly becomes very cumbersome and error-prone. For that reason, RoboHydra allows us to gather all those related heads into <strong>tests</strong>. You can define as many tests as you want, but only one test is active at a time. When you enable a test, all the heads in that test are automatically enabled, and all heads for any previously active test are automatically disabled.</p>

<p>Let's move the two heads we have created so far to a test called <code>simple</code>, and create a second test called <code>serverDown</code> for the "Server down" scenario. The code for the plugin would end up like this:</p>

<pre><code class="javascript">var heads               = require('robohydra').heads,
    RoboHydraHeadStatic = heads.RoboHydraHeadStatic;

exports.getBodyParts = function(config) {
    return {
        heads: [
            new RoboHydraHeadStatic({
                name: 'defaultEmptySearch',
                path: '/Generators_Search',
                content: {
                    success:true,
                    result: []
                }
            })
        ],
        tests: {
            simple: {
                heads: [
                    new RoboHydraHeadStatic({
                        path: '/Generators_Search',
                        content: {
                            success:true,
                            result: [
                                {generatorID:45,
                                 displayName:"Judgmental Developer Bruce Lawson",
                                 urlName:"Fake-Bruce-Lawson-Meme",
                                 totalVotesScore:9001,
                                 imageUrl:"Bruce-Lawson-Template.jpg",
                                 instancesCount:9999999,
                                 ranking:1}
                            ]
                        }
                    }),

                    new RoboHydraHeadStatic({
                        path: '/Instance_Create',
                        content: {
                            success: true,
                            result: {
                                generatorID: 45,
                                displayName: "Judgmental Developer Bruce Lawson",
                                urlName: "Fake-Bruce-Lawson-Meme",
                                totalVotesScore: 0,
                                imageUrl: "Bruce-Lawson-Template.jpg",
                                instanceID: 22415018,
                                text0: "are you saying...",
                                text1: "you don't use robohydra?",
                                instanceImageUrl: "Bruce-Lawson-Final.jpg",
                                instanceUrl: "http://dev.opera.com/articles/view/robohydra-a-new-testing-tool-for-client-server-interactions/"
                            }
                        }
                    })
                ]
            },

            serverDown: {
                heads: [
                    new RoboHydraHeadStatic({
                        path: '/.*',
                        content: "Unhandled exception of some kind (fake)",
                        statusCode: 500
                    })
                ]
            }
        }
    };
};</code></pre>

<p>Go ahead and replace the contents of <code>MemePanel/robohydra/plugins/memepanelmock/index.js</code> with the above code, and restart the RoboHydra server again.</p>

<p>Note that there are no tests enabled by default, so the default head will process requests to <code>/Generators_Search</code>. To see the list of available tests and enable them, go to <code>http://localhost:3000/robohydra-admin/tests</code> and use the controls available there. And remember that you can always see the current heads, including those belonging to tests, at <code>http://localhost:3000/robohydra-admin</code>.</p>

<p>If you enable the <code>serverDown</code> test and try to perform a search using the browser extension, you'll get a message about not being able to connect to MemeGenerator. You can also inspect the file <code>robohydra.log</code> to see all the traffic since you restarted RoboHydra.</p>

<h2>Checking the client requests automatically</h2>

<p>Up until now, we've been concerned about how RoboHydra is replying to the client — but what about making sure the client sends correct requests? Maybe you're not sure if the client is correctly encoding search terms before sending them to the server. Or maybe you know it's correct now, but want to write a test so you'll know when it breaks. In that case, you'll be delighted to know that RoboHydra heads can contain <em>assertions</em>. The result of those assertions will be saved as part of the current test.</p>

<p>To use assertions, we have to introduce a new kind of head: the <code>RoboHydraHead</code>. This head doesn't have specific behaviour already coded, but instead receives a JavaScript function that will decide what will happen when a request comes. This is the most powerful and flexible RoboHydra head, and in fact all other heads are based on this. As an example, the following code performs the same function as the previous head we created:</p>

<pre><code class="javascript">new RoboHydraHead({
    path: '/.*',
    handler: function(req, res) {
        res.statusCode = 500;
        res.send("Unhandled exception of some kind (fake)");
    }
})</code></pre>

<p>But you could, of course, specify whatever code you want, and use any Node modules you have installed. For example, you could wait for five seconds before sending a reply, to imitate what happens when there's a proxy error:</p>

<pre><code class="javascript">new RoboHydraHead({
    path: '/.*',
    handler: function(req, res) {
        setTimeout(function() {
            res.statusCode = 502;
            res.send("Proxy Error (fake, RoboHydra-generated message)");
        }, 5000);
    }
})</code></pre>

<p>In particular, to use assertions you have to accept a second argument in the <code>getBodyParts</code> function, <code>modules</code>. That parameter contains a property <code>assert</code>, which in turn contains several useful assertion functions. Let's create a new test to check the search term encoding.</p>

<p>Modify <code>MemePanel/robohydra/plugins/memepanelmock/index.js</code> to look like this:</p>

<pre><code class="javascript">var heads               = require('robohydra').heads,
    RoboHydraHead       = heads.RoboHydraHead,
    RoboHydraHeadStatic = heads.RoboHydraHeadStatic;

exports.getBodyParts = function(config, modules) {
    var assert = modules.assert;

    return {
        heads: [
            new RoboHydraHeadStatic({
                name: 'defaultEmptySearch',
                path: '/Generators_Search',
                content: {
                    success:true,
                    result: []
                }
            })
        ],
        tests: {
            simple: {
                heads: [
                    new RoboHydraHeadStatic({
                        path: '/Generators_Search',
                        content: {
                            success:true,
                            result: [
                                {generatorID:45,
                                 displayName:"Judgmental Developer Bruce Lawson",
                                 urlName:"Fake-Bruce-Lawson-Meme",
                                 totalVotesScore:9001,
                                 imageUrl:"Bruce-Lawson-Template.jpg",
                                 instancesCount:9999999,
                                 ranking:1}
                            ]
                        }
                    }),

                    new RoboHydraHeadStatic({
                        path: '/Instance_Create',
                        content: {
                            success: true,
                            result: {
                                generatorID: 45,
                                displayName: "Judgmental Developer Bruce Lawson",
                                urlName: "Fake-Bruce-Lawson-Meme",
                                totalVotesScore: 0,
                                imageUrl: "Bruce-Lawson-Template.jpg",
                                instanceID: 22415018,
                                text0: "are you saying...",
                                text1: "you don't use robohydra?",
                                instanceImageUrl: "Bruce-Lawson-Final.jpg",
                                instanceUrl: "http://dev.opera.com/articles/view/robohydra-a-new-testing-tool-for-client-server-interactions/"
                            }
                        }
                    })
                ]
            },

            serverDown: {
                heads: [
                    new RoboHydraHeadStatic({
                        path: '/.*',
                        content: "Unhandled exception of some kind (fake)",
                        statusCode: 500
                    })
                ]
            },

            searchTermEncoding: {
                instructions: "Open the extension, search for 'velázquez'",

                heads: [
                    new RoboHydraHead({
                        path: '/.*',
                        handler: function(req, res) {
                            assert.equal(req.queryParams.q,
                                         "velázquez",
                                         "Should encode search terms correctly");
                            res.send(JSON.stringify({
                                success: true,
                                result: []
                            }));
                        }
                    })
                ]
            }
        }
    };
};</code></pre>

<p>Note how the new test has a property we have not seen before, <code>instructions</code>. If this property exists, RoboHydra will show that text when starting the corresponding test. That allows you to give instructions to the user, in case it's a human being executing these tests by hand, or you just want to document what is expected from the client.</p>

<p>Now, restart RoboHydra again, go to the "Tests" section of the admin interface, and start the <code>searchTermEncoding</code> test. Then go to the extension and search for different terms, like "velázquez", "velazquez" and "lawson". After each search, go to http://localhost:3000/robohydra-admin/tests and see the test results under the heading "Current test results". Searching for any terms except "velázquez" will cause the test to fail; searching for "velázquez" will result in a pass, as set out by the assertion contained in this line:</p>

<pre><code class="javascript">assert.equal(req.queryParams.q, "velázquez", "Should encode search terms correctly");</code></pre>


<h2>Conclusion</h2>

<p>In this article we have explored another major RoboHydra use case: building mock servers for client testing. We have seen how to make RoboHydra reply with whatever data we need for our tests, and how to make RoboHydra check the client requests. That, together with the first article, gives a good high-level overview of what's possible with RoboHydra. Please comment to let us know what you think, and stay tuned: the next RoboHydra article will explore advanced techniques! Remember to check the <a href="http://robohydra.org/documentation/">official documentation</a> and <a href="http://www.youtube.com/user/robohydra/videos">screen casts</a> too!</p>
