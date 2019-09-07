#!/usr/bin/env node
'use strict';

// unable to pass args
const { execFile } = require('child_process');
execFile('./lib/command_exec.js', '/usr/bin/env node', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  } else if (stderr) {  
    console.error(`stderr: ${stderr}`);
  } 
  console.log(`stdout: ${stdout}`);
});
