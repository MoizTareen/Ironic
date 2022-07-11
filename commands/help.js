const Discord = require("discord.js")
module.exports = {
    name: 'help',
    description: 'to list of bot commands',
    run: async (client, message, args) => {
      
  const commands = client.commands.map(command => command.name).join(", ")
  const embed = new Discord.MessageEmbed()
  .setTitle(`Ironic Help!`)
  .setDescription(`Hello <@${message.member.id}> I am <@${client.user.id}>` + "\n\n" + `> A Discord Moderation Bot with some cool features:` + "\n" + `> **⤷ __Commands__: ${commands}**`)
  .setTimestamp()
.setFooter(message.member.displayName, message.author.avatarURL())
  .setColor("RANDOM")
  .setThumbnail(client.user.displayAvatarURL()) 
  const catchErr = err => {
  console.log(err)
    }
  message.channel.send({embeds:[embed]})
}

}
