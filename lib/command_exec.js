#!/usr/bin/env node
'use strict';

require("core-js/modules/web.dom-collections.iterator");

var _commander = _interopRequireDefault(require("commander"));

var cmd_const = _interopRequireWildcard(require("./_command_options"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander.default.option(cmd_const.DEBUG, 'output extra debugging').option('-p, --pizza-type <type>', 'flavour of pizza').version(cmd_const.VERSION, '-v, --version', 'output the current version');

_commander.default.parse(process.argv);

if (_commander.default.debug) console.log(_commander.default.opts());
console.log('pizza details:');
if (_commander.default.pizzaType) console.log("- ".concat(_commander.default.pizzaType));