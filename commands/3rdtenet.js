var strings = require('../StringResources.json');

module.exports = {
    name: '3rdtenet',
    description: 'A command to send the user the 3rd tenet',
    cooldown: 15,
    execute(message, args) {
        message.channel.send(strings.tenets[2]);
    }
}