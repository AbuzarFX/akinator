const { MessageEmbed } = require('discord.js')

module.exports = {
    config: {
        name: 'stats',
    },
    run: async (bot, message, args) => {

        const promisedd = [
            bot.shard.fetchClientValues('guilds.cache.size'),
            bot.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
        ];
        
        Promise.all(promisedd)
            .then(results => {
                const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
                const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
                return message.channel.send({ embed: {
                    color: "GOLD",
                    description: `> Server count: \`${totalGuilds}\` servers\n> Member count: \`${totalMembers}\` members`
                }})
            })
            .catch(console.error);




    }
}
