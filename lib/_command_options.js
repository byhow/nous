// Add options for the command executor
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONFIG_MAP = exports.VERSION = exports.DEBUG = void 0;
const DEBUG = '-d, --debug';
exports.DEBUG = DEBUG;
const VERSION = '0.0.1';
exports.VERSION = VERSION;
const CONFIG_MAP = {
  java: {
    '-mvn': 'mvn',
    '-gradle': 'gradle'
  },
  ruby: {
    '-gem': 'gem'
  },
  js: {
    '-npm': 'npm'
  }
};
exports.CONFIG_MAP = CONFIG_MAP;