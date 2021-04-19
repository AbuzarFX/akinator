const { Client, Collection, MessageEmbed } = require("discord.js")
const bot = new Client();
module.exports = bot;
const { PREFIX, TOKEN } = require("./config")
const db = require("./reconDB")
const DBL = require("dblapi.js");

//Defining Collections
bot.commands = new Collection();
bot.aliases = new Collection();

//Importing and setting collections for Command names and aliases
["commands", "aliases"].forEach(x => bot[x] = new Collection());
["command", "event"].forEach(x => require(`./handler/${x}`)(bot));

bot.on("message", async message => {
    
    //Prefix fetching for each guild to support multi guild changeable prefix
    let prefix;
    try {
        let fetch = await db.get(`prefix_${message.guild.id}`)
        if(fetch === undefined) {
            prefix = PREFIX
        }

        else {
            prefix = fetch
        }
    }
    catch(e) {
        console.log(e) //console logging any error
    };

    //On mentioning the botm it will display the message [My prefix : PREFIX for the paticular guild]
    try{
        if(message.mentions.has(bot.user.id) && !message.content.includes("@everyone") && !message.content.includes("@here")) {
            const embed = new MessageEmbed()
            .setTitle("My config for this guild are: ")
            .setDescription(`My prefix in this server \`[${message.guild.name}]\` is : \`${prefix}\`\n\nUse ${prefix}help for more info.`)
            .setColor("GOLD")

            message.channel.send(embed)
        }
    }

    catch(e) {
        console.log(e)
    }

})

bot.on("guildCreate", guild => {

    const { MessageEmbed } = require("discord.js");
  
    const ID = "812026948339367976";
  
    const channel = bot.channels.cache.get(ID);
  
    if (!channel) return;
  
    const embed = new MessageEmbed()
  
      .setTitle("I Joined a server!<:defi1:804797586438357003> ")
  
      .addField(`Server Name:`, `\`\`\`${guild.name}\`\`\``, true)
  
      .addField(`Server ID:`, `\`\`\`${guild.id}\`\`\``, true)
   
      .addField(`Created on:`, `\`\`\`${guild.createdAt}\`\`\``, true)
    
      .addField(`Members:`, `\`\`\`${guild.memberCount}\`\`\``, true)
    
      .setTimestamp()
  
      .setColor("GOLD")
  
      .setFooter(`Servers Count - ${bot.guilds.cache.size}`);
      
  
    channel.send(embed);
  
  });

bot.on('guildCreate', guild => {
      const { MessageEmbed } = require("discord.js")
      const embed = new MessageEmbed()
      .setTitle(`Thanks for adding me to your server!<:defi1:804797586438357003>`)
      .setColor("GOLD")
      .setDescription(`Thank you for adding me to your server! I will guess the person/object that you are thinking of! Check out Akinator's [website](https://bit.ly/akinator-discord). Get started by typing \`aki help\`.`)
      .setThumbnail(`https://i.pinimg.com/originals/fe/e0/24/fee0246d3c4bddd06e95b41afbf13024.png`)
      .addField(`\u200b`, `[Support Server](https://discord.gg/PGew5Ysp4b) • [Invite Link](https://discord.com/oauth2/authorize?client_id=804789290139385887&permissions=8&scope=applications.commands%20bot) • [Vote](https://top.gg/bot/804789290139385887/vote)`)
      .setFooter(`DM Abuser#2824 For Direct Assistance.`)
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES', 'EMBED_LINKS'))
    channel.send(embed)
})

//Start the bot
bot.login(TOKEN)

const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgwNDc4OTI5MDEzOTM4NTg4NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE2NDI0ODkzfQ.SaWy2veV3q5P2OepcqrxdHEkdn0svXjfY15Nyi1ZgqE', bot);
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
