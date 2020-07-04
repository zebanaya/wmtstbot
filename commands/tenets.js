var strings = require('../StringResources.json');

module.exports = {
    name: 'tenets',
    description: 'A command to send the user all of the tenets',
    cooldown: 15,
    execute(message, args) {
        var messageToSend = "";
        strings.tenets.forEach(tenet => {
            messageToSend = messageToSend + tenet + "\n"
        });
        message.channel.send(messageToSend);
    }
}