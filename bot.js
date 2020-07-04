var Discord = require('discord.js')
var auth = require('./auth.json');
var fs = require('fs');

// // Configure logger settings
// logger.remove(logger.transports.Console);
// logger.add(new logger.transports.Console, {
//     colorize: true
// });
// logger.level = 'debug';
// Initialize Discord Bot

var bot = new Discord.Client();
var cooldowns = new Discord.Collection();
var commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
var commandPrefix = '!';

bot.commands = new Discord.Collection();

for (var file of commandFiles) {
    var cmd = require(`./commands/${file}`);
    bot.commands.set(cmd.name, cmd);
}

bot.on('ready', () => {
    console.log("I'm here for you");
});

bot.on('message', message => {
    if (!message.content.startsWith(commandPrefix) || message.author.bot) return;
    
    var args = message.content.slice(commandPrefix.length).split(/ +/);
    var commandName = args.shift().toLowerCase();

    if (!bot.commands.has(commandName)) return;
    var command = bot.commands.get(commandName);

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
    
    var now = Date.now();
    var timestamps = cooldowns.get(command.name);
    var cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        var expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`Yo! You need to wait about ${timeLeft.toFixed(1)} more seconds before you attempt to ask me to \`${command.name}\` again.`);
        }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    
    try{
        command.execute(message, args);
    } catch {
        
    }
    
});

bot.login(auth.token);