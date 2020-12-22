import { readFile } from 'fs/promises';
import * as data from './data.js';

const showHelp = async function (message) {
    console.log('Message ' + message.id + ' is a cry for help...');
        try {
            const data = await readFile('./src/HELP.md', 'utf-8');
            message.channel.send(data);
        } catch (error) {
            console.log(error);
        }
        console.log('Cry answered. Processing message ' + message.id + ' complete.');
    }
    
    const showHelpAbstract = async function(message) {
        console.log('Message ' + message.id + ' is a cry for help...');
        try {
            const data = await readFile('./src/HELP.md', 'utf-8');
            message.channel.sendMessage(data);
        } catch (error) {
            console.log(error);
        }
        console.log('Cry answered. Processing message ' + message.id + ' complete.');
}

const replyBandName = function (message) {
    console.log('Message ' + message.id + ' asks for a band name...');
    const index = Math.floor(Math.random() * data.getBandNamesLength());
    message.channel.send(bandNames[index]);
    console.log('Provided band name. Processing message ' + message.id + ' complete.');
}

const addBand = function (message) {
    console.log('Message ' + message.id + ' wants to add a band to my list...');
    const separateCommandFromContent = message.content.match(/!\w+ (.+)/);
    const bandName = separateCommandFromContent[1];
    data.addBandName(bandName);
    console.log('Band name added. Processing message ' + message.id + ' complete.');
}

const noDoubt = function (message) {
    console.log('Message ' + message.id + ' tells the truth...');
    message.reply('no doubt');
    console.log('Is No Doubt prog? Processing message ' + message.id + ' complete.');
}

const noDoubtAbstract = function(message) {
    message.channel.sendMessage('no doubt');
}

export {
    showHelp, showHelpAbstract, replyBandName, addBand, noDoubt, noDoubtAbstract
}