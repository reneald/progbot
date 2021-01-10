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
})