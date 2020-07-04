var strings = require('../StringResources.json');

module.exports = {
    name: '4thtenet',
    description: 'A command to send the user the 4th tenet',
    cooldown: 15,
    execute(message, args) {
        message.channel.send(strings.tenets[3]);
    }
}