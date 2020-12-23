import SpotifyWebApi from 'spotify-web-api-node';

// var SpotifyWebApi = require('spotify-web-api-node');

export default class SpotifyWrapper {
    constructor() {
        this.spotifyWebApi = new SpotifyWebApi({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            redirectUri: 'test'
        });
    }

    searchArtist(query) {
        this.spotifyWebApi.searchArtists(query)
            .then(
                (data) => {
                    return data.body;
                }, 
                (error) => {
                    console.log(error);
                })
    }
}