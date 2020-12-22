const showHelp = function showHelp(message) {
    readFile('HELP.md','utf-8', (error, data) => {
        if (error) console.log(error);
        message.reply(data);
    });
}

const replyBandName = function replyBandName(message) {
    const index = Math.floor(Math.random() * bandNames.length);
    message.channel.send(bandNames[index]);
}

const noDoubt = function noDoubt(message) {
    message.reply('no doubt');
}

const addBand = function addBand(messageContent) {
    const separateCommandFromContent = messageContent.match(/!\w+ (.+)/);
    const bandName = separateCommandFromContent[1];
    bandNames.push(bandName);
}

export {
    showHelp, replyBandName, noDoubt, addBand
}