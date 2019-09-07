// Add options for the command executor

'use strict';

export const DEBUG = '-d, --debug';
export const VERSION = '0.0.1';
export const CONFIG_MAP = {
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
