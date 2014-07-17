# Dev.Opera

We've rebuilt [Dev.Opera](http://dev.opera.com/) as a static site, powered by Jekyll, Sass and Grunt. In this repository, you find all the source files and content to build the site, [make improvements](CONTRIBUTING.md#code-improvements), and [submit new articles](CONTRIBUTING.md#article-suggestions--contributions).

## Environment setup

1. Install Jekyll, Sass and all needed gems by running `sudo gem install jekyll kramdown stringex sass` in Terminal.
2. Download and install [Node.js](http://nodejs.org) with the default installer options.
3. Clone the project by running `git clone git@github.com:operasoftware/devopera.git`.
4. Run `npm install` inside the `devopera` folder.
5. Run `npm install grunt-cli -g` to install Grunt globally.
6. Run `grunt build` to build Dev.Opera inside the `_site` folder.

Please install [EditorConfig](http://editorconfig.org/#download) plugin for your editor to keep code style declared in the [.editorconfig](.editorconfig) file.

## Two development modes

There are two modes of development available:

1. If you're developing some feature or article, run `grunt watch` and all your changes will be generated automatically (and as quick as possible) every time you save any Jekyll template or Sass file. To stop watching changes press `Ctrl C`.
	- If you’ve just saved any of the `styles/*.scss` files, the watcher will compile and copy the styles to the `_site/styles` folder in a few moments without doing a full build process.
	- If you’ve saved an `.md` or `.html` file, the compilation could take up to 60 seconds, which is a bit long but there’s not much we can do (at least not as far as we can tell).
	- Please file an issue if you need the same quick watcher for anything else: scripts, images, etc.
2. If you need to build a production version of Dev.Opera, run `grunt build` and everything will not just be built inside the `_site` folder, but also compressed and optimized. Just once.

## Notes

- All instructions are for Unix (OS X, Linux, etc.) because Jekyll is not compatible with Windows.
- You may require write access for all commands mentioned above. Type `sudo`, space and command if needed.
- To launch a simple Python server open _another_ console instance or tab, navigate to the `_site` folder and run `python -m SimpleHTTPServer 8000`. You can then load the website in your browser by going to `http://localhost:8000/` or in any browser on a device on the local network by going to `computername.local:8000`. You can find and edit your computer name in _System Preferences_ > _Sharing_.
- If you get an error running `grunt watch`, try to increase the file number limit with the `ulimit -n 10000` command
