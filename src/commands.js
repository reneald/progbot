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

const replyBandName = function (message) {
    console.log('Message ' + message.id + ' asks for a band name...');
    const index = Math.floor(Math.random() * data.getBandNamesLength());
    const bandNameToReturn = data.getBandName(index);
    if(Feature.BAND_SEARCH_SPOTIFY) {
        console.log('Hey there');
    }
    message.channel.sendMessage(bandNameToReturn);
    console.log('Provided band name. Processing message ' + message.id + ' complete.');
    return bandNameToReturn;
}

const addBand = function (message) {
    console.log('Message ' + message.id + ' wants to add a band to my list...');
    const bandName = separatedContent(message);
    data.addBandName(bandName);
    console.log('Band name added. Processing message ' + message.id + ' complete.');
    return data.getBandNames;
}

const noDoubt = function (message) {
    console.log('Message ' + message.id + ' tells the truth...');
    message.channel.sendMessage('no doubt');
    console.log('Is No Doubt prog? Processing message ' + message.id + ' complete.');
}

const search = function (message, spotify) {
    console.log('Message ' + message.id + ' wants to search Spotify...');
    const query = separatedContent(message);
    let result;
    spotify.searchArtist(query)
        .then(
            (data) => {
                result = sendAndSaveResult(result, data, message);
            },
            (error) => {
                console.log("Error searching Spotify:");
                console.log(error.body);
                if (error.body.error.status === 401) {
                    spotify.getAndSetAccessToken();
                    spotify.searchArtist(query)
                        .then(
                            (data) => {
                                result = sendAndSaveResult(result, data, message);
                            },
                            (error) => {
                                console.log("Error searching Spotify again:");
                                console.log(error.body);
                            }
                        );

                }
            });
    console.log('Processing message ' + message.id + ' complete.');
    return result;
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