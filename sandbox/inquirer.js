const inquirer = require('inquirer');

module.exports = {
    askApplicationType: () => {
        const questions = [
            {
                name: 'application',
                type: 'list',
                message: 'Enter the type of application you are building:',
                choices: ['Web App', 'Mobile App', 'Command Line App'],
            },
        ];
        return inquirer.prompt(questions);
    },
    getApplicationLanguage: (appType) => {
        switch (appType.application) {
            case 'Web App':
                const web = inquirer.prompt([
                    {
                        name: 'backend',
                        message: 'What is the backend language you would like to use?',
                        type: 'list',
                        choices: ['Java', 'Go', 'JavaScript', 'Python'],
                    },
                    {
                        name: 'frontend',
                        message: 'What is the frontend language you would like to use?',
                        type: 'list',
                        choices: ['JavaScript', 'TypeScript'],
                    },
                ]);
                return web;
            case 'Mobile App':
                const mobile = inquirer.prompt([
                    {
                        name: 'mobileType',
                        message: 'What is the mobile platform you would like to use?',
                        type: 'list',
                        choices: ['Android', 'iOS', 'Cross-platform'],
                    },
                ]);
                return mobile;
            case 'Command Line App':
                const cli = inquirer.prompt([
                    {
                        name: 'cliType',
                        message: 'What is the language you would like to use?',
                        choices: ['C', 'Rust', 'Go', 'C++'],
                    },
                ]);
                return cli;
            default:
                console.error(`ERROR! GOT UNKNOWN INPUT ${appType.application}`);
        }
    },
};
