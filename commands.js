import { readFile } from 'fs';

const showHelp = function (message) {
    console.log('Message ' + message.id + ' is a cry for help...');
    readFile('HELP.md','utf-8', (error, data) => {
        if (error) console.log(error);
        message.channel.send(data);
    });
    console.log('Cry answered. Processing message ' + message.id + ' complete.');
}

const replyBandName = function (message) {
    console.log('Message ' + message.id + ' asks for a band name...');
    const index = Math.floor(Math.random() * bandNames.length);
    message.channel.send(bandNames[index]);
    console.log('Provided band name. Processing message ' + message.id + ' complete.');
}

const addBand = function (message) {
    console.log('Message ' + message.id + ' wants to add a band to my list...');
    const separateCommandFromContent = message.content.match(/!\w+ (.+)/);
    const bandName = separateCommandFromContent[1];
    bandNames.push(bandName);
    console.log('Band name added. Processing message ' + message.id + ' complete.');
}

const noDoubt = function (message) {
    console.log('Message ' + message.id + ' tells the truth...');
    message.reply('no doubt');
    console.log('Is No Doubt prog? Processing message ' + message.id + ' complete.');
}

export {
    showHelp, replyBandName, addBand, noDoubt
}