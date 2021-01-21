import { readFile } from 'fs/promises';
import * as data from './data.js';
import Feature from './Feature.js';

const showHelp = async function (message) {
    console.log('Message ' + message.id + ' is a cry for help...');
    try {
        const data = await readFile('./src/HELP.md', 'utf-8');
        message.channel.sendMessage(data);
    } catch (error) {
        console.log(error);
    }
    console.log('Help provided. Processing message ' + message.id + ' complete.');
}

const replyBandName = async function (message, spotify) {
    console.log('Message ' + message.id + ' asks for a band name...');
    const index = Math.floor(Math.random() * data.getBandNamesLength());
    const query = data.getBandName(index);
    let result;
    if(Feature.BAND_SEARCH_SPOTIFY) {
        result = await searchAndSendBand(result, spotify, query, message);
    } else {
        let result = query;
        message.channel.sendMessage(result);
    }
    console.log('Provided band name. Processing message ' + message.id + ' complete.');
    return result;
}

const addBand = function (message) {
    console.log('Message ' + message.id + ' wants to add a band to my list...');
    const bandName = separatedContent(message);
    if(!data.getBandNames().includes(bandName)) {
        data.addBandName(bandName);
        message.channel.sendMessage(bandName + ' added.');
        console.log('Band name added. Processing message ' + message.id + ' complete.');
    } else {
        message.channel.sendMessage(bandName + ' was already in the list.');
        console.log('Band name was already in the list. Processing message ' + message.id + ' complete.');
    }
    return data.getBandNames;
}

const noDoubt = function (message) {
    console.log('Message ' + message.id + ' tells the truth...');
    message.channel.sendMessage('no doubt');
    console.log('Is No Doubt prog? Processing message ' + message.id + ' complete.');
}

const search = async function (message, spotify) {
    console.log('Message ' + message.id + ' wants to search Spotify...');
    const query = separatedContent(message);
    let result;

    result = await searchAndSendBand(result, spotify, query, message);

    console.log('Processing message ' + message.id + ' complete.');
    return result;
}

async function searchAndSendBand(result, spotify, query, message) {
    try {
        result = await doSearch(spotify, query, result, message);
    } catch (error) {
        result = await doSearchAgain(error, spotify, result, query, message);
    }
    return result;
}

async function doSearchAgain(error, spotify, result, query, message) {
    logError(error);
    if (error.body.error.status === 401) {
        await spotify.getAndSetAccessToken();
        try {
            result = await doSearch(spotify, query, result, message);
        } catch (secondError) {
            logError(secondError);

        }
    }
    return result;
}

async function doSearch(spotify, query, result, message) {
    const firstData = await spotify.searchArtist(query);
    result = sendAndSaveResult(result, firstData, message);
    return result;
}

function logError(error) {
    console.log("Error searching Spotify:");
    console.log(error.body);
}

function sendAndSaveResult(result, data, message) {
    result = data.body.artists.items[0].external_urls.spotify;
    console.log('Search returned ' + result + '.');
    message.channel.sendMessage(result);
    return result;
}

function separatedContent(message) {
    return message.content.match(/!\w+ (.+)/)[1];
}

export {
    showHelp, replyBandName, addBand, noDoubt, search
}