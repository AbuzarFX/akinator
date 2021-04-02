

const { PREFIX } = require('../../config');
module.exports = async (bot, message) => {


    
    console.log(`${bot.user.username} is available now!`)


    bot.user.setActivity(`${PREFIX}help`, { type: "WATCHING" })

    bot.guilds.cache.forEach((guild) => { //for each guild the bot is in
      let defaultChannel = "";
      guild.channels.cache.forEach((channel) => {
            if(channel.type == "text" && defaultChannel == "") {
            if(channel.permissionsFor(guild.me).has('SEND_MESSAGES', 'EMBED_LINKS')) {
                defaultChannel = channel;
            }
            }
      })
      setInterval (function () {
           defaultChannel.send("** •<:defi1:804797586438357003>Like using Akinator? Vote for it on Top.gg!**\n\nhttps://top.gg/bot/804789290139385887/vote") //send it to whatever channel the bot has permissions to send on
          }, 43200000);
          
})
    
  
    
};
