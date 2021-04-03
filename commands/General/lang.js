
const { MessageEmbed } = require("discord.js")
module.exports = {
    config: {
        name: "lang",
        aliases: ["language"],
    },
    run: async (bot, message, args) => {

        const embed = new MessageEmbed()
        .setColor("GOLD")
        .setAuthor(message.author.username, `https://play-lh.googleusercontent.com/rjX8LZCV-MaY3o927R59GkEwDOIRLGCXFphaOTeFFzNiYY6SQ4a-B_5t7eUPlGANrcw`)
        .setTitle(`How to set languages? (Beta)`)
        .setDescription(`Akinator currently supports 15 languages. It is \`English\` by default. __**To use some other language, specify the language code in the end of the command.**__\n
        Example: \`aki aki person\` - For the default language- English.\n
        Example: \`aki aki person fr\` - For French.`)
        .addField(`• Available Languages`, `\`\`\`English • en\nArabic  • ar\nChinese • cn\nGerman  • de\nSpanish • es\nFrench  • fr\nItalian • it\nJapanese • jp\nUkranian • kr\nDutch • nl\nPolish • pl\nPortuguese • pt\nRussian • ru\nTurkish • tr\nIndonesian • id\`\`\``)
        .setTimestamp()
        .setFooter(`Akinator`)
        message.channel.send(embed)



        


    }
}
