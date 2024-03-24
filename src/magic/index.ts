import chalk from "chalk";
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import fs from 'fs';

const log = console.log;

// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello worldii!"));

// Pass in multiple arguments
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// Nest styles
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// Nest styles of the same type even (color, underline, background)
log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);



yargs(hideBin(process.argv))
  .command('add', 'Adds a card to the collection', {
  id: {
   description: 'Card ID',
   type: 'number',
   demandOption: true
  }
 }, (argv) => {
  console.log(argv.id);
 })
 .help()
 .argv;