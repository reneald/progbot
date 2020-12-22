console.log('Beep beep');

import { Client } from 'discord.js';
import {readFile} from 'fs';

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
                case "!band":
                    replyBandName(message);
                    break;
                case "!addband":
                    addBand(message.content);
                    break;
                default:
                    break;
            }
        } else if (message.content === 'prog rocks') {
            noDoubt(message);
        }
        

    }
}

function replyBandName(message) {
    const index = Math.floor(Math.random() * bandNames.length);
    try {
        message.channel.send(bandNames[index]);
    } catch (error) {
        console.log(error);
    }
}

function noDoubt(message) {
    readFile('NODOUBT.md', (readError, data) => {
        if (readError) console.log(readError);
        try {
            message.reply(data);
        } catch (error) {
            console.log(error);
        }
    });
    // message.reply('no doubt');
}

function addBand(messageContent) {
    const separateCommandFromContent = messageContent.match(/!\w+ (.+)/);
    const bandName = separateCommandFromContent[1];
    bandNames.push(bandName);
}