#!/usr/bin/env node
'use strict';

var _commander = _interopRequireDefault(require("commander"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander.default.option('-d, --debug', 'output extra debugging').option('-s, --small', 'small pizza size').option('-p, --pizza-type <type>', 'flavour of pizza');

_commander.default.parse(process.argv);

if (_commander.default.debug) console.log(_commander.default.opts());
console.log('pizza details:');
if (_commander.default.small) console.log('- small pizza size');
if (_commander.default.pizzaType) console.log("- ".concat(_commander.default.pizzaType));