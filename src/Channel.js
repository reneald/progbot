export default class Channel {
    constructor(message) {
        this.discordChannel = message.channel;
    }

    sendMessage(message) {
        this.discordChannel.send(message);
    }

    getId() {
        return this.discordChannel.id;
    }
}