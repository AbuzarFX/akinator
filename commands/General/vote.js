const { MessageEmbed } = require("discord.js")

module.exports = {
    config: { 
        name: "vote",
    },
    run: async (bot, message, args) => {
        const embed = new MessageEmbed()
        .setColor("GOLD")
        .setTitle(`•<:defi1:804797586438357003> Akinator Vote Links<:defi1:804797586438357003> •`)
        .setDescription(`[Top.gg](https://top.gg/bot/804789290139385887/vote) • [Discord.bots.gg](https://discord.bots.gg/bots/804789290139385887) • [Discord Bot List](https://discordbotlist.com/bots/akinator/upvote) • [Bots For Discord](https://botsfordiscord.com/bot/804789290139385887)`)
        .addField(`\u200b`, `• [Patreon Link](https://www.patreon.com/akinatorbot) •`)
        .setImage(`https://imgur.com/B38aLaY.jpg`)

        message.channel.send(embed)
    }
}
