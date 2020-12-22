import * as commands from './commands.js';
export default class MusicBot {
    constructor () {

    }

    handleMessage(message) {

        if (message.content === 'prog rocks') {
            commands.noDoubtAbstract(message);
        } else if (message.content.match(/^!.+/)) {
            const command = message.content.match(/(!\w+)/)[1];
            switch (command) {
                case "!help":
                    return commands.showHelpAbstract(message);
                    break;
                default:
                    break;
            }
        }
    }

}