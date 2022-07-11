const Discord = require("discord.js")
module.exports = {
    name: 'nuke',
    description: 'to delete all the messages in a channel',
    run: async (client, message, args) => {

if(!message.member.permissions.has('MANAGE_GUILD')) return;message.channel.clone().then(msg => msg.send('> ***Successfully Nuked***'))
        message.channel.delete() 

}

  }