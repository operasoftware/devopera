#!/usr/bin/env bash

# Check if root.
if [[ $EUID -eq 0 ]]; then
    error "Run using sudo or as the root user"
    exit 1
fi

# Install gems. (Assuming they have ruby.)
echo "Installing the required ruby gems."
sudo gem install jekyll stringex sass &&
echo "Done installing the gems."


# Check and install node.js
type node 2>/dev/null ||
echo "Installing node.js."

# Debian and like OSs.
[ $OSTYPE = linux-gnu ] &&
type apt-get 2>/dev/null &&
apt-get install g++ curl libssl-dev apache2-utils \
git-core

# Clone and install node.
( cd /tmp;
  git clone https://github.com/joyent/node.git;
  cd node
  ./configure
  make
  sudo make install
)

# Now clone the devopera repo.
git clone git@github.com:operasoftware/devopera.git
cd devopera
npm install
npm install grunt-cli -g
grunt build
echo "Check the _site dir. Thank you!"
