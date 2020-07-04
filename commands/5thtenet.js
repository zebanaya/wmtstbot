var strings = require('../StringResources.json');

module.exports = {
    name: '5thtenet',
    description: 'A command to send the user the 5th tenet',
    cooldown: 15,
    execute(message, args) {
        message.channel.send(strings.tenets[4]);
    }
}