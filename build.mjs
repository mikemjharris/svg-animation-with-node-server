// Builds the static site into dist/: the page, its assets, and jQuery from
// node_modules. No bundler: the page uses one plain browser script.
import { cpSync, mkdirSync, rmSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist/vendor', { recursive: true });

cpSync('index.html', 'dist/index.html');
cpSync('client/public', 'dist/public', { recursive: true });
cpSync('node_modules/jquery/dist/jquery.min.js', 'dist/vendor/jquery.min.js');

console.log('built dist/');
