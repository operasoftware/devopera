# Dev.Opera

We’ve rebuilt [Dev.Opera](https://dev.opera.com/) as a static site, powered by Jekyll, Sass, and Grunt. In this repository, you find all the source files and content to build the site, [make improvements](CONTRIBUTING.md#code-improvements), and [submit new articles](CONTRIBUTING.md#article-suggestions--contributions).

## Environment setup

1. Install Bundler by running `gem install bundler` on the command line.
2. Download and install [Node.js](http://nodejs.org/) or [io.js](https://iojs.org/) with the default installer options.
3. Clone the project by running `git clone git@github.com:operasoftware/devopera.git` and `cd` into the `devopera` folder.
4. Install Jekyll, Sass, and all needed gems by running `bundle install`.
5. Run `npm install` inside the `devopera` folder.
6. Run `npm install bower -g` to install Bower globally.
7. Run `bower install`.
8. Run `npm install grunt-cli -g` to install Grunt globally.

Please install [EditorConfig](http://editorconfig.org/#download) plugin for your editor to keep code style declared in the [`.editorconfig`](.editorconfig) file.

## Environment update

If you’ve set up all the above at some point in the past, and want to update your installation, these are the steps to follow:

1. Run `sudo gem update` to install the latest Ruby gems.
2. Run `npm install` & `bower install` inside the `devopera` folder.

## Development

To start developing Dev.Opera run `grunt`, it would take up to 1 minute to:

1. Build site in a limited mode with only latest 150 posts.
2. Start local server on `http://0.0.0.0:33310` address.
3. Open it in your default browser.
4. Launch a `watch` task for all files.

So now every time you change project files, Dev.Opera will be rebuilt and you browser will update. For HTML and Markdown files it will still take up to 1 minute, for CSS it will be much faster (please request the same fast track for JS or anything else if needed).

# Full build and deploy

To **build** a complete Dev.Opera, run `grunt build`: it will take a while to build the full site with all posts included in the `_site` folder. To **deploy** (sync build with remote server), run `grunt deploy`.

## Notes

- All instructions are for Unix (OS X, Linux, etc.) because Jekyll is not compatible with Windows.
- You may require write access for all commands mentioned above. Type `sudo`, space and command if needed.
