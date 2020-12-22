console.log('Beep beep');

import { Client } from 'discord.js';
import { readFile } from 'fs';
import * as commands from './commands.js';

const client = new Client();
client.login(process.env.BOT_TOKEN);

const bandNames = [
    'Toehider',
    'Rush',
    'Evergrey',
    'Symphony X',
    'Ayreon',
    'Pain of Salvation',
    'Dream Theater'
]

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('Proggers gonna prog');
}

client.on('message', gotMessage);

function gotMessage(message) {
    console.log(message.content);
    if (message.channel.id == process.env.BOT_TESTING_CHANNEL_ID) {
        if (message.content.match(/!.+/)) {
            const command = message.content.match(/(!\w+)/)[1];
            switch (command) {
                case "!help":
                    commands.showHelp(message);
                    break;
                case "!band":
                    commands.replyBandName(message);
                    break;
                case "!addband":
                    commands.addBand(message.content);
                    break;
                default:
                    break;
            }
        } else if (message.content === 'prog rocks') {
            commands.noDoubt(message);
        }
        

    }
}