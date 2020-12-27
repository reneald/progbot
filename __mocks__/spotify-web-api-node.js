const tokenData = {
    "body": {
        "access_token": "xxx",
        "expires_in": 3600
    }
}

const artistReply = "Tool"

export const mockSearchArtists = jest.fn(() => {
    return new Promise((resolve, reject) => {
        try{
            resolve(artistReply);
        } catch(error) {
            reject('aarghSearchArtists.');
        }
    })
});
export const mockClientCredentialsGrant = jest.fn(() => {
    return new Promise((resolve, reject) => {
        try{
            resolve(tokenData);
        } catch(error) {
            reject('aarghCredentials.');
        }
    })
});
export const mockSetAccessToken = jest.fn();

const mock = jest.fn().mockImplementation(() => {
    return {
        searchArtists: mockSearchArtists,
        clientCredentialsGrant: mockClientCredentialsGrant,
        setAccessToken: mockSetAccessToken
    };
})

export default mock;