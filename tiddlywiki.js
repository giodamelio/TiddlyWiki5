#!/usr/bin/env node

/*
This is invoked as a shell script by NPM when the `tiddlywiki` command is typed
*/

const minimist = require('minimist');
var $tw = require("./boot/boot.js").TiddlyWiki();

const argv = minimist(process.argv.slice(2), {
  default: {
    port: '8080',
    'root-tiddler': '$:/core/save/all',
    'render-type': 'text/plain',
    'serve-type': 'text/html',
    username: '',
    password: '',
    host: '127.0.0.1',
    'path-prefix': ''
  },
  string: 'port'
});

// Pass the command line arguments to the boot kernel
$tw.boot.argv = [
  argv._[0], // Direcory
  '--' + argv._[1], // Command
  argv.port, // Port
  argv['root-tiddler'], // Root tiddler
  argv['render-type'], // Render mime type
  argv['serve-type'], // Serve mime type
  argv.username, // Username
  argv.password, // Passport
  argv.host, // Host
  argv['path-prefix'] // Path pretix
];
// $tw.boot.argv = Array.prototype.slice.call(process.argv,2);

// Boot the TW5 app
$tw.boot.boot();
