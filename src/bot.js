console.log('Beep beep');

import * as commands from './commands.js';
import MusicClient from './MusicClient.js';
import MusicBot from './MusicBot.js';
import Message from './Message.js';

const client = new MusicClient();
client.login(process.env.BOT_TOKEN);

const bot = new MusicBot();

client.on('ready', readyDiscord);

client.on('message', gotMessage);

function readyDiscord() {
    console.log('Proggers gonna prog');
}

function gotMessage(discordMessage) {
    console.log('Received message ' + discordMessage.id);
    const message = bot.createMessage(discordMessage);

    bot.handleMessage(message);
}