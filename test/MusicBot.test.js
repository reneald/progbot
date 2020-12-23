/**
 * @jest-environment node
 */

import MusicBot from '../src/MusicBot';
import Message from '../src/Message';
import Channel from '../src/Channel';
import SpotifyWrapper from '../src/SpotifyWrapper';
import { readFile } from 'fs/promises';
import * as data from '../src/data.js';

jest.mock('../src/Channel');
jest.mock('../src/SpotifyWrapper');

describe("MusicBot", () => {
    let bot;
    let channel;
    let help;
    let spotify;

    beforeEach(async () => {
        Channel.mockClear();
        spotify = new SpotifyWrapper();
        bot = new MusicBot(spotify);
        channel = new Channel();
        channel.getId.mockImplementation(() => process.env.BOT_TESTING_CHANNEL_ID);
        help = await readFile('./src/HELP.md', 'utf-8');
    })

    test('prog rocks should respond with no doubt', () => {
        //GIVEN
        const messageContent = 'prog rocks';
        const expectedResponse = 'no doubt';

        const message = new Message(1, channel, messageContent);

        //WHEN
        bot.handleMessage(message);

        //THEN
        expect(channel.sendMessage).toBeCalledTimes(1);
        expect(channel.sendMessage).toBeCalledWith(expectedResponse);
    })

    test('prog sucks should not respond with no doubt', () => {
        //GIVEN
        const messageContent = 'prog sucks';
        
        const message = new Message(1, channel, messageContent);

        //WHEN
        bot.handleMessage(message);

        //THEN
        expect(channel.sendMessage).toBeCalledTimes(0);
    })

    test('!help should return contents of HELP.md', async () => {
        //GIVEN
        const messageContent = '!help';
        const expectedResponse = help;

        const message = new Message(1, channel, messageContent);

        //WHEN
        await bot.handleMessage(message);


        //THEN
        expect(channel.sendMessage).toBeCalledTimes(1);
        expect(channel.sendMessage).toBeCalledWith(expectedResponse);
        
    })
    
    test('!addband should add band name to array', () => {
        //GIVEN
        const messageContent = '!addband Tool';
        const expectedItem = 'Tool';
        const arrayLengthBefore = data.getBandNamesLength();
        
        const message = new Message(1, channel, messageContent);
        
        //WHEN
        bot.handleMessage(message);
        
        //THEN
        expect(data.getBandNames()).toHaveLength(arrayLengthBefore + 1);
        expect(data.getBandNames()).toContain(expectedItem);
    })
    
    test('!band should reply with a bandname from array', () => {
        //GIVEN
        const messageContent = '!band';
        const bandNames = data.getBandNames();
        
        const message = new Message(1, channel, messageContent);
        
        //WHEN
        const result = bot.handleMessage(message);
        
        //THEN
        expect(channel.sendMessage).toBeCalledTimes(1);
        expect(bandNames).toContain(result);
    })

    test('messages outside of bot testing channel should be ignored', () => {
        //GIVEN
        channel.getId.mockImplementation(() => 1);
        const messageContent = 'prog rocks';

        const message = new Message(1, channel, messageContent);

        //WHEN
        bot.handleMessage(message);

        //THEN
        expect(channel.sendMessage).toBeCalledTimes(0);
    })

    test('!search should do a Spotify search for the given query', () => {
        //GIVEN
        const messageContent = '!search beatles';
        const expectedQuery = 'beatles';

        const message = new Message(1, channel, messageContent);

        //WHEN
        bot.handleMessage(message);

        //THEN
        expect(spotify.search).toBeCalledTimes(1);
        expect(spotify.search).toBeCalledWith(expectedQuery);
    })
})