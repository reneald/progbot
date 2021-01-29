# Progbot
A simple Discord bot that recommends prog music

I'm following a tutorial from CodingTrain: https://www.youtube.com/watch?v=7A-bnPlxj4k

For a list of commands, see **[HELP.md](src\HELP.md)**.

## setup
### discord app & bot

### node application
(test environment thanks to https://medium.com/@aussy/lets-create-a-discord-music-bot-using-test-driven-development-tdd-part-1-9c95ea32766f)
(is this even necessary if you just fork this code? I'm a node.js noob)
`npm install discord.js spotify-web-api-node pg`
`npm install --save-dev jest @types/jest @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/runtime`

### discord app & bot
TODO write this section

### spotify app & bot
1. Login to the Spotify developer dashboard (https://developer.spotify.com/dashboard/ as of 22/12/2020)
2. Create new app
3. Note your client ID and secret
4. Store your client ID and secret in your environment variables (local: in the .env file; look into your hosting platform docs if needed)

### necessary environment variables
* BOT_TOKEN=Your discord bot token
* BOT_TESTING_CHANNEL_ID=the ID of the discord channel where your bot commands will work
* PORT=5000
* SPOTIFY_CLIENT_ID=your spotify client ID
* SPOTIFY_CLIENT_SECRET=your spotify client secret
* DATABASE_URL=the URL of your database. This is probably highly dependent on your hosting platform.

## Debugging program
Run `Launch Program` configuration.

## Running tests
`npm test`

## Debugging tests
Run `Debug Jest Tests` configuration.