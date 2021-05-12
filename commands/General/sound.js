const { MessageEmbed } = require('discord.js');
const { PREFIX } = require('../../config');
const db = require('../../reconDB');
module.exports = {
config: {
    name: 'soundboard',
    aliases: ["sound", "sb"],
},
run: async(bot, message, args) => {
    let prefix;
    let fetched = await db.get(`prefix_${message.guild.id}`);

    if (fetched === undefined) {
        prefix = PREFIX
    } else {
        prefix = fetched
    }
    const embed = new MessageEmbed()
    .setTitle(`<:sound:840303620737728523> Akinator | Soundboard`, bot.user.displayAvatarURL())
    .setThumbnail(`https://i.pinimg.com/originals/fe/e0/24/fee0246d3c4bddd06e95b41afbf13024.png`)
    .setDescription(`Here\'s the list of sound effects that you can use in a voice channel. In order to use the soundboard, join a voice channel and run the command \`${prefix}<name of the sound>\`\nFor example: \`${prefix}reee\`\n\n
    <:sound:840303620737728523> ahh\n<:sound:840303620737728523> alia\n<:sound:840303620737728523> copystrike\n<:sound:840303620737728523> daddy\n<:sound:840303620737728523> depress\n<:sound:840303620737728523> firefly\n<:sound:840303620737728523> fucknig\n<:sound:840303620737728523> jeff\n<:sound:840303620737728523> lambo\n<:sound:840303620737728523> moan\n<:sound:840303620737728523> nani\n<:sound:840303620737728523> ohh\n<:sound:840303620737728523> reee\n<:sound:840303620737728523> seinfeld\n<:sound:840303620737728523> shrimp\n<:sound:840303620737728523> shutdown\n<:sound:840303620737728523> spaghet\n<:sound:840303620737728523> startup\n<:sound:840303620737728523> suckyourmum\n<:sound:840303620737728523> thomas\n<:sound:840303620737728523> yeet\n<:sound:840303620737728523> zedther\n\nTo disconnect the bot, type \`${prefix}leave\` `)
    .setFooter(bot.user.username, bot.user.displayAvatarURL())
    .setColor("GOLD")

    message.channel.send(embed)
    }
}