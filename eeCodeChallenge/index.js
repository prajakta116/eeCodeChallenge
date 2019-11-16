#!/usr/bin/env node
console.log('Welcom to PJ Git and Twitter Mashup');

require = require('esm')(module);
require('./src/cli').cli(process.argv);