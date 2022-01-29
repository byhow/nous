#!/usr/bin/env ts-node
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import { sleep } from './utils';

interface AppAnswer {
  application: string;
}

enum AppType {
  WEB = 'Web App',
  MOBILE = 'Mobile App',
  CLI = 'Command Line App',
}

export async function askApplicationType(): Promise<AppAnswer> {
  const questions = [
    {
      name: 'application',
      type: 'list',
      message: 'Enter the type of application you are building:',
      choices: ['Web App', 'Mobile App', 'Command Line App'],
      default() {
        return 'Web App';
      },
    },
  ];
  return inquirer.prompt(questions);
}

export async function getApplicationLanguage(appType: AppAnswer): Promise<unknown> {
  const spinner = createSpinner('Checking answer...').start();
  await sleep(); // fake checking answer

  switch (appType.application) {
    case AppType.WEB:
      spinner.success({ text: `You picked: ${appType}` });
      return inquirer.prompt([
        {
          name: 'backend',
          message: 'What is the backend language you would like to use?',
          type: 'list',
          choices: ['Java', 'Go', 'JavaScript', 'TypeScript', 'Python'],
        },
        {
          name: 'frontend',
          message: 'What is the frontend framework you would like to use?',
          type: 'list',
          choices: ['React', 'Next.js', 'Vue'],
        },
      ]);
    case AppType.MOBILE:
      return inquirer.prompt([
        {
          name: 'mobileType',
          message: 'What is the mobile platform you would like to use?',
          type: 'list',
          choices: ['Android', 'iOS', 'React-Native', 'Flutter'],
        },
      ]);
    case AppType.CLI:
      return inquirer.prompt([
        {
          name: 'cliType',
          message: 'What is the language you would like to use?',
          choices: ['C', 'Rust', 'Go', 'C++'],
        },
      ]);
    default:
      spinner.success({ text: `You picked unknown app type!` });
      console.error(`ERROR! GOT UNKNOWN INPUT ${appType.application}`);
      process.exit(1);
  }
}
