#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import { askApplicationType, getApplicationLanguage } from './lib/inquirer';
import { sleep } from './lib/utils';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';

(async () => {
  console.log(chalk.yellow(figlet.textSync('Nous', { horizontalLayout: 'full' })));

  const title = chalkAnimation.rainbow('The only generator tool you will need.\n');

  await sleep();
  title.stop();

  const applicationType = await askApplicationType();
  console.info(await getApplicationLanguage(applicationType));

  console.clear();
  figlet('Congrats! You made it to the end of the app', (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(gradient.pastel.multiline(data));
  });
})();
