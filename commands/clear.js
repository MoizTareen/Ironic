const Discord = require("discord.js")
module.exports = {
    name: 'clear',
    description: 'to clear a number of messages',
    run: async (client, message, args) => {
      
let arg = message.content.split(" ")
  message.delete() 
let clear = arg[1];
if(!clear) return message.channel.send(`> ***:x: | Incorrect usage of command you need to provide an amount of messages to Clear.*** **Example:** !clear 10 `)
if(isNaN(clear)) return message.channel.send("> ***:x: | ``Please Put a Valid Number to Clear messages.``***")
if(clear > 100) return message.channel.send("> ***:x: | ``I can't Clear more than 100 messages.``***")
if(clear < 1) return message.channel.send("> ***:x: | ``You cannot Clear less than 1 message.``***")
message.channel.bulkDelete(clear).catch((e) => { console.error(e) }) .then(msg => message.channel.send(`> ***:white_check_mark: | \`Succesfully cleared ${clear} messages! \`***`))
.then(message => 
 setTimeout(()=> message.delete(), 2000)
 )
      
}
    }
                                             