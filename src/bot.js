console.log('Beep beep');

import { Client } from 'discord.js';
import * as commands from './commands.js';

const client = new Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('Proggers gonna prog');
}

client.on('message', gotMessage);

function gotMessage(message) {
    console.log('Received message ' + message.id);
    if (message.channel.id == process.env.BOT_TESTING_CHANNEL_ID) {
        if (message.content.match(/^!.+/)) {
            const command = message.content.match(/(!\w+)/)[1];
            switch (command) {
                case "!help":
                    commands.showHelp(message);
                    break;
                case "!band":
                    commands.replyBandName(message);
                    break;
                case "!addband":
                    commands.addBand(message);
                    break;
                default:
                    console.log('Ignoring message ' + message.id + '.');
                    break;
            }

        } else if (message.content === 'prog rocks') {
            commands.noDoubt(message);
        } else {
            console.log('Ignoring message ' + message.id + '.');
        }
        

    }
}