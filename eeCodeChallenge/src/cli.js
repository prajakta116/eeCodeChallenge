import minimist from 'minimist';
 

import { help } from './help';
import { config } from './config';
import { searchgit } from './searchgit';

export async function cli(argsArray){
    const args = minimist(argsArray.slice(2)); //converting to object
    let cmd = args._[0] || 'help';
      if (args.help || args.h) {
        cmd = 'help';
      } 
      switch (cmd) {
       /* case 'version':
          version(args);
          break;*/
    
        case 'help':
          help(args);
          break;

        case 'config':
          config(args);
          break;
          
        case 'search':
            searchgit(args);
            break;

        default:
          console.error(`"${cmd}" is not a valid command!`);
          break;
      }
    }