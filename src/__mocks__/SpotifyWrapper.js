const artistReply = "Tool";
export const mockSearchArtist = jest.fn(() => {
    return new Promise((resolve, reject) => {
        try{
            resolve(artistReply);
        } catch(error) {
            reject('aarghSearchArtist.');
        }
    })});
const mock = jest.fn().mockImplementation(() => {
    return {searchArtist: mockSearchArtist};
})

export default mock;