export const mockSearchArtists = jest.fn();
const mock = jest.fn().mockImplementation(() => {
    return {searchArtists: mockSearchArtists};
})

export default mock;