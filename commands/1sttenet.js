var strings = require('../StringResources.json');

module.exports = {
    name: '1sttenet',
    description: 'A command to send the user the 1st tenet',
    cooldown: 15,
    execute(message, args) {
        message.channel.send(strings.tenets[0]);
    }
}