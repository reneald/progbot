import * as commands from './commands.js';
import Message from './Message.js';
import Channel from './Channel.js';

export default class MusicBot {
    constructor () {

    }

    createMessage(message) {
        const channel = new Channel(message);
        return new Message(message.id, channel, message.content);
    }

    handleMessage(message) {
        if (message.channel.getId() === process.env.BOT_TESTING_CHANNEL_ID) {
            if (message.content === 'prog rocks') {
                commands.noDoubt(message);
            } else if (message.content.match(/^!.+/)) {
                const command = message.content.match(/(!\w+)/)[1];
                switch (command) {
                    case "!help":
                        return commands.showHelp(message);
                    case "!addband":
                        return commands.addBand(message);
                    case "!band":
                        return commands.replyBandName(message);
                    default:
                        console.log('Ignoring message ' + message.id + '.');
                        break;
                }
            }
        } else {
            console.log('Ignoring message ' + message.id + '.');
        }
    }

}