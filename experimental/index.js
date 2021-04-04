#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./src/lib/files');
const inquirer = require('./src/lib/inquirer');
const { unary } = require('lodash');

clear();

console.log(chalk.yellow(figlet.textSync('Nous', { horizontalLayout: 'full' })));

const run = async () => {
    const applicationType = await inquirer.askApplicationType();
    console.log(applicationType);
    console.info(await inquirer.getApplicationLanguage(applicationType));
};

run();
