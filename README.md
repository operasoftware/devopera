# Dev.Opera

We’ve rebuilt [Dev.Opera](http://dev.opera.com/) as a static site, powered by Jekyll, Sass and Grunt. In this repository, you find all the source files and content to build the site, [make improvements](CONTRIBUTING.md#code-improvements), and [submit new articles](CONTRIBUTING.md#article-suggestions--contributions).

## Environment setup

1. Install Jekyll, Sass and all needed gems by running `sudo gem install jekyll kramdown stringex sass` in console.
2. Download and install [Node.js](http://nodejs.org) with the default installer options.
3. Clone the project by running `git clone git@github.com:operasoftware/devopera.git`.
4. Run `npm install` inside the `devopera` folder.
5. Run `npm install grunt-cli -g` to install Grunt globally.
6. Run `grunt build` to build Dev.Opera inside the `_site` folder.

Please install [EditorConfig](http://editorconfig.org/#download) plugin for your editor to keep code style declared in the [.editorconfig](.editorconfig) file.

## Opening

To open Dev.Opera locally run `grunt`, it would take up to 1 minute to:

1. Buid site in a limited mode with only latest 150 posts
2. Start local server at `http://0.0.0.0:33310` address
3. Open it in your default browser

## Development

To start developing Dev.Opera run `grunt dev`, it would take up to 1 minute to:

1. Buid site in a limited mode with only latest 150 posts
2. Start local server at `http://0.0.0.0:33310` address
3. Open it in your default browser
4. Launch `watch` task for all files

So now every time you change project files Dev.Opera would be rebuilt and you browser would update. For HTML and MD files it would still take up to 1 munite, for CSS it would be much faster (please request the same fast track for JS or anything else if needed).

# Full build and deploy

To **build** full Dev.Opera run `grunt build`, it would take a while to build a full side version with all posts included. To **deploy** (sync build with remote server) run `grunt deploy`.

## Notes

- All instructions are for Unix (OS X, Linux, etc.) because Jekyll is not compatible with Windows.
- You may require write access for all commands mentioned above. Type `sudo`, space and command if needed.
- If you get an error running `grunt dev`, try to increase the file number limit with the `ulimit -n 10000` command or use nighly build of Node.JS 0.11 (could be installed alongside to 0.10 using [nvm](https://github.com/creationix/nvm)).
