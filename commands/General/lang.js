
const { MessageEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "lang",
        aliases: ["language"],
    },
    run: async (bot, message, args) => {
        const embed = new MessageEmbed()
        .setColor("GOLD")
        .setThumbnail(`https://i.pinimg.com/originals/fe/e0/24/fee0246d3c4bddd06e95b41afbf13024.png`)
        .setDescription(`**Available Languages** :speech_balloon:\n
Akinator currently supports 15 languages. It is \`English\` by default. __**To use some other language, specify the language code in the end of the command**__.\n

        Example: \`aki aki person\` - For the default language- English.\n

        Example: \`aki aki person fr\` - For French.\n
        :flag_sa: \`ar\` Arabic - العربية\n
        :flag_cn: \`cn\` Chinese - 中文\n
        :flag_nl: \`nl\` Dutch - Nederlands\n
        :flag_gb: \`en\` English - English\n
        :flag_fr: \`fr\` French - Français\n
        :flag_de: \`de\` German - Deutsch\n
        :flag_it: \`it\` Italian - Italiano\n
        :flag_jp: \`jp\` Japanese - 日本語\n
        :flag_ua: \`kr\` Ukranian - Ukranian\n
        :flag_pl: \`pl\` Polish - Polskie\n
        :flag_pt: \`pt\` Portuguese - Português\n
        :flag_ru: \`ru\` Russian - русский\n
        :flag_es: \`es\` Spanish - Español\n
        :flag_tr: \`tr\` Turkish - Türk\n
        :flag_id: \`id\` Indonesian - Indonesian`)
        

        message.channel.send(embed)
    }
}
