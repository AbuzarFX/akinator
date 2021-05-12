const { MessageEmbed } = require('discord.js');
const { aliases } = require('../..');

module.exports = {
    config: {
    name: "server",
    description: "Returns the Server Information.",
    usage: "server | serverinfo",
    aliases: ["serverinfo", "sv"]
    },
    run: async (bot, message, args) => {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }
        let owner = [];
        await bot.users.fetch(message.guild.ownerID).then(o => owner.push(o.tag))
        const embed = new MessageEmbed()

            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('GOLD')
            .setTitle(`${message.guild.name} - Server Statistics`)
            .addFields(
                {
                    name: "Owner",
                    value: `${owner}`,
                    inline: true
                },
                {
                    name: "Members",
                    value: `There are ${message.guild.memberCount} users!`,
                    inline: true
                },
                {
                    name: "Members Online",
                    value: `There are ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} users online!`,
                    inline: true
                },
                {
                    name: "Total Bots",
                    value: `There are ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "Creation Date",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "Roles Count",
                    value: `There are ${message.guild.roles.cache.size} roles in this server.`,
                    inline: true,
                },
                {
                    name: `🗺 Region`,
                    value: message.guild.region,
                    inline: true
                },
                {
                    name: `Verified`,
                    value: message.guild.verified ? 'Server is verified' : `Server isn't verified`,
                    inline: true
                },
                {
                    name: 'Boosters',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `There are ${message.guild.premiumSubscriptionCount} Boosters` : `There are no boosters`,
                    inline: true
                },
                {
                    name: "Emojis",
                    value: message.guild.emojis.cache.size >= 1 ? `There are ${message.guild.emojis.cache.size} emojis!` : 'There are no emojis' ,
                    inline: true
                }
            )
            .setFooter(`Akinator • bit.ly/akinator-discord`)
        await message.channel.send(embed)
    }
}