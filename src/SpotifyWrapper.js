import SpotifyWebApi from 'spotify-web-api-node';

export default class SpotifyWrapper {
    constructor() {
        this.spotifyWebApi = new SpotifyWebApi({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            redirectUri: 'test'
        });

        this.getAndSetAccessToken();
    }

    searchArtist(query) {
        return this.spotifyWebApi.searchArtists(query);
    }

    getAndSetAccessToken() {
        const webApi = this.spotifyWebApi;

        webApi.clientCredentialsGrant().then(
            function(data) {
              console.log('The access token expires in ' + data.body['expires_in']);
              console.log('The access token is ' + data.body['access_token']);
          
              // Save the access token so that it's used in future calls
              webApi.setAccessToken(data.body['access_token']);
            },
            function(error) {
              console.log('Something went wrong when retrieving an access token', error);
            }
          );
    }
}