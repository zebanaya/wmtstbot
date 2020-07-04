var strings = require('../StringResources.json');

module.exports = {
    name: '6thtenet',
    description: 'A command to send the user the 6th tenet',
    cooldown: 15,
    execute(message, args) {
        message.channel.send(strings.tenets[5]);
    }
}