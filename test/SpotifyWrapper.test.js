import SpotifyWebApi from 'spotify-web-api-node';
import SpotifyWrapper from '../src/SpotifyWrapper';

describe("SpotifyWrapper", () => {

    let spotifyWebApi;
    let spotifyWrapper;
    
    beforeEach(() => {
        SpotifyWebApi.mockClear();
        spotifyWrapper = new SpotifyWrapper();
    })
    
    test('searchArtist() should call Web API with correct query', () => {
        // //GIVEN
        // const query = 'Tool';
        // const expectedQuery = 'Tool';
        // SpotifyWebApi.mockImplementation(() => {
        //     return {
        //         searchArtists: () => {
        //             return new Promise((resolve, reject) => {
        //                 resolve('Api reply.');
        //             });
        //         },
        //     };
        // });

        // //WHEN
        // const result = spotifyWrapper.searchArtist(query);

        // //THEN
        // return result.then(data => {
        //     expect(spotifyWebApi.searchArtists).toBeCalledTimes(1);
        //     expect(spotifyWebApi.searchArtists).toBeCalledWith(expectedQuery);
        // })
    })
})