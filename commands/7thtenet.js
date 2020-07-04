var strings = require('../StringResources.json');

module.exports = {
    name: '7thtenet',
    description: 'A command to send the user the 7th tenet',
    cooldown: 15,
    execute(message, args) {
        message.channel.send(strings.tenets[6]);
    }
}