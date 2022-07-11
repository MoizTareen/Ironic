const Discord = require("discord.js")
module.exports = {
    name: 'unlock',
    description: 'to unlock a server channel',
    run: async (client, message, args) => {

if(!message.member.permissions.has('MANAGE_GUILD')) return;
message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
    SEND_MESSAGES:true
}).catch((e) => { console.error(e) }) .then(msg => msg.send(`> ***Successfully Unlocked* ${message.channel.name}**`))
    

}

   }