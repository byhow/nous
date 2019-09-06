import { command } from './lib/cli_fs';
 
command
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');
 
command.parse(process.argv);
 
if (command.debug) console.log(command.opts());
console.log('pizza details:');
if (command.small) console.log('- small pizza size');
if (command.pizzaType) console.log(`- ${command.pizzaType}`);
