#!/usr/bin/env node

import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { askApplicationType, getApplicationLanguage } from "./lib/inquirer";

clear();

console.log(
  chalk.yellow(figlet.textSync("Nous", { horizontalLayout: "full" }))
);

const run = async () => {
  const applicationType = await askApplicationType();
  console.info(await getApplicationLanguage(applicationType));
};

run();
