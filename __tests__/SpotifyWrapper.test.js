import SpotifyWebApi from 'spotify-web-api-node';
import SpotifyWrapper from '../src/SpotifyWrapper';

describe("SpotifyWrapper", () => {

    let spotifyWrapper;
    
    beforeEach(() => {
        SpotifyWebApi.mockClear();
        spotifyWrapper = new SpotifyWrapper();
    })
    
    test('searchArtist() should call Web API with correct query', () => {
        //GIVEN
        const query = 'Tool';
        const expectedQuery = 'Tool';

        //WHEN/THEN
        expect.assertions(1);
        return spotifyWrapper.searchArtist(query).then(data => {
            expect(data).toBe(expectedQuery);
        })
    })

    //TODO fix test
    // test('searchArtist() should log the error body if an error occurs', () => {
    //     //GIVEN
    //     const query = 'Tool';
    //     const error = {
    //         "status": 401,
    //         "message": "invalid access token"
    //     }
    //     const spy = jest.spyOn(SpotifyWebApi, 'searchArtists').mockImplementation(() => {
        
    //             return new Promise((resolve, reject) => {
    //                 reject(error);
    //             });
            
    //     })

    //     //WHEN/THEN
    //     expect.assertions(1);
    //     return spotifyWrapper.searchArtist(query).then(data => {
    //         expect(data).toBe(error);
    //     })

    // })
})