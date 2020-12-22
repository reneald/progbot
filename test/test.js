import MusicBot from '../src/MusicBot';
import Message from '../src/Message';
import Channel from '../src/Channel';
import { readFile } from 'fs/promises';

jest.mock('../src/Channel');

Channel.mockImplementation(() => {
    return {
        sendMessage: jest.fn()
    }
})

describe("MusicBot", () => {
    let bot;
    let channel;
    let help;

    beforeEach(async () => {
        Channel.mockClear();
        bot = new MusicBot();
        channel = new Channel();
        help = await readFile('./src/HELP.md', 'utf-8');
    })

    test('prog rocks should respond with no doubt', () => {
        const messageContent = 'prog rocks';
        const expectedResponse = 'no doubt';

        const message = new Message(1, channel, messageContent);

        bot.handleMessage(message);

        expect(channel.sendMessage).toBeCalledTimes(1);
        expect(channel.sendMessage).toBeCalledWith(expectedResponse);
    })

    test('prog sucks should not respond with no doubt', () => {
        const messageContent = 'prog sucks';
        
        const message = new Message(1, channel, messageContent);

        bot.handleMessage(message);

        expect(channel.sendMessage).toBeCalledTimes(0);
    })

    test('!help should return contents of HELP.md', async () => {
        const messageContent = '!help';
        const expectedResponse = help;

        const message = new Message(1, channel, messageContent);

        await bot.handleMessage(message);

        expect(channel.sendMessage).toBeCalledTimes(1);
        expect(channel.sendMessage).toBeCalledWith(expectedResponse);

    })
})