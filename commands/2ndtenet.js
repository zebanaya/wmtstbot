var strings = require('../StringResources.json');

module.exports = {
    name: '2ndtenet',
    description: 'A command to send the user the 2nd tenet',
    cooldown: 15,
    execute(message, args) {
        message.channel.send(strings.tenets[1]);
    }
}