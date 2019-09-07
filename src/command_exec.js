#!/usr/bin/env node
'use strict';

import program from 'commander';
import * as cmd_const from './_command_options';
program
  .option(cmd_const.DEBUG, 'output extra debugging')
  .option('-p, --pizza-type <type>', 'flavour of pizza')
  .version(cmd_const.VERSION, '-v, --version', 'output the current version');

program.parse(process.argv);

if (program.debug) console.log(program.opts());
console.log('pizza details:');
if (program.pizzaType) console.log(`- ${program.pizzaType}`);
