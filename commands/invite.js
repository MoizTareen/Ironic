const Discord = require("discord.js")
module.exports = {
    name: 'invite',
    description: 'invite the bot to your server',
    run: async (client, message, args) => {

const embed = new Discord.MessageEmbed()
  .setTitle(``)
  .setDescription("**[Ironic! Click me to invite me to your server!](   https://discord.com/api/oauth2/authorize?client_id=991386943906648095&permissions=137439341584&scope=bot)**")
  .setFooter("")
  .setColor("RANDOM")
  const catchErr = err => {
  console.log(err)
  }
  message.channel.send({embeds:[embed]})
  
}
    }
