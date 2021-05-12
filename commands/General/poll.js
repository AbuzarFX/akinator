const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "poll",
        description: "Create a poll with a Yes/No poll.",
        category: "info",
        usage: "[question]",
        noalias: "No Aliases",
        accessableby: "Administrator",
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("**You don't have the sufficient permissions! - [MANAGE_GUILD]**");

        if (!args[0])
            return message.channel.send("**Please enter the context!**");

        const embed = new MessageEmbed()
            .setColor("GOLD")
            .setTitle(`Poll 📢\n\n`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setDescription(`${args.join(' ')}\n\n`)
        var msg = await message.channel.send(embed);

        await msg.react('👍🏻');
        await msg.react('👎🏻');

        message.delete({ timeout: 1000 });
    }
}