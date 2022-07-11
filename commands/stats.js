const Discord = require("discord.js")
module.exports = {
    name: 'stats',
    description: 'to view bots status',
    run: async (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
.setAuthor(message.member.displayName, message.author.avatarURL())
  .setTitle('Ironic-Stats')
  .setDescription(`**Guilds Count:**\n⤷ ${client.guilds.cache.size}` + "\n"+
    `**Total Commands:**\n⤷ ${client.commands.size}` + "\n"+
    `**Users:**\n⤷ ${client.users.cache.size}` + "\n" + `**Ping:**\n⤷ ${client.ws.ping}ms`  + "\n" + `**Discord.js:**\n⤷  ${Discord.version}` +
 "\n" + "**Developer:**\n⤷ [Meiju#0589](https://discord.gg/NfhKYV3Hzy)")
.setThumbnail(client.user.displayAvatarURL()) 
    .setFooter('Powered by Plagg Community')
  .setColor("RANDOM")
  const catchErr = err => {
  console.log(err)
  }
 message.channel.send({embeds:[embed]})
  
  }

}