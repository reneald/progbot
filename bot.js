console.log('Beep beep');

// remove for deployment on glitch etc.
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('Proggers gonna prog');
}

client.on('message', gotMessage);

function gotMessage(message) {
    console.log(message.content);
    if (message.channel.id == process.env.BOT_TESTING_CHANNEL_ID &&
        message.content === 'prog rocks') {
        message.reply('no doubt');
    }
}