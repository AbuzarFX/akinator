const { MessageEmbed } = require('discord.js')

module.exports = {
    config: {
        name: 'stats',
    },
    run: async (bot, message, args) => {


        const embed = new MessageEmbed()
        .setDescription(`Serving ${bot.users.cache.size} users on ${bot.guilds.cache.size} servers.`)
        .setColor('GOLD')

        message.reply(embed)
    }
}
