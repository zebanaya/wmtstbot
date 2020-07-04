module.exports = {
    name: 'constitution',
    description: 'A command that sends the user the up to date version of the chapters constituion',
    cooldown: 15,
    execute(message, args) {
        message.reply('Here is the latest constituion of The Satanic Temple - West Michigan: https://docs.google.com/document/d/1KhznIuG40tJ3znlAwRS1N8W591hJbi1GOmbLVSEWSsw/edit?usp=sharing');
    }
}