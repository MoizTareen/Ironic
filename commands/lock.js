const Discord = require("discord.js")
module.exports = {
    name: 'lock',
    description: 'to lock a server channel',
    run: async (client, message, args) => {

if(!message.member.permissions.has('MANAGE_GUILD')) return;
message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
    SEND_MESSAGES: false
}).catch((e) => { console.error(e) }) .then(msg => msg.send(`> ***Successfully Locked* ${message.channel.name}**`))
    
}

}
    