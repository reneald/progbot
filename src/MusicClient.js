import { Client } from 'discord.js';

export default class MusicClient {
    constructor() {
        this.client = new Client();
    }

    login(token) {
        this.client.login(token);
    }

    on(eventName, callback) {
        this.client.on(eventName, callback);
    }
    
}