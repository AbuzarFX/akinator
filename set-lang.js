const db = require("quick.db")

module.exports = {
    config: {
        name: "lang",
        aliases: ["set-lang", "language"],
    },
    run: async (bot, message, args) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send({ embed: {
            color: "#ff0000",
            description: "<:9636_Cross:796376380560113675> You don't have the required permissions to use this command!"
        }})
        
        const lang = args[0];
        if(!lang) return message.channel.send({ embed: {
            
            color: "#ff0000",
            description: `<:9636_Cross:796376380560113675> ${await bot.translate(`Please specify a language to set!`, message)}`
        }})
        await db.set(`lang-${message.guild.id}`, lang);

        message.channel.send({ embed: {
            color: "GOLD",
            description: `<:tick:788102360936218685> ${await bot.translate(`Successfully set the language to`, message)}: \`${lang}\`.`
        }})



        


    }
}
