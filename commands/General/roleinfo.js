const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: 'roleinfo',
        category: "info",
        aliases: ["rinfo"],
        description: "shows stats of the mentioned role.",
        usage: "[role name | role mention | ID]",
        accessableby: 'everyone'
    },
    run: async (bot, message, args) => {
        if (!args[0]) return message.channel.send("**Please enter a role!**")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("**Please enter a valid role!**");

        const status = {
            false: "No",
            true: "Yes"
        }

        let roleembed = new MessageEmbed()
            .setColor("GOLD")
            .setAuthor(`Role Information`)
            .setThumbnail(message.guild.iconURL())
            .addField("**ID**", `\`${role.id}\``, true)
            .addField("**Name**", role.name, true)
            .addField("**Hex**", role.hexColor, true)
            .addField("**Members**", role.members.size, true)
            .addField("**Position**", role.position, true)
            .addField("**Mentionable**", status[role.mentionable], true)
            .setFooter(`Akinator • bit.ly/akinator-discord`, message.author.displayAvatarURL())

        message.channel.send(roleembed);
    }
}