/**
 * @jest-environment node
 */

import MusicBot from '../src/MusicBot';
import Message from '../src/Message';
import Channel from '../src/Channel';
import { readFile } from 'fs/promises';
import * as data from '../src/data.js';

jest.mock('../src/Channel');

// Channel.mockImplementation(() => {
//     return {
//         sendMessage: jest.fn(),
//         getId: () => process.env.BOT_TESTING_CHANNEL_ID
//     }
// })

describe("MusicBot", () => {
    let bot;
    let channel;
    let help;

    beforeEach(async () => {
        Channel.mockClear();
        bot = new MusicBot();
        channel = new Channel();
        channel.sendMessage.mockImplementation(() => jest.fn());
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
})