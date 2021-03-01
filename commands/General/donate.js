const {MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "donate",
    },
    run: async (bot, message, args) => {
        const embed = new MessageEmbed()
        .setAuthor(`Akinator`, `https://imgur.com/dJsk7KC.png`)
        .setColor("GOLD")
        .setDescription(`Akinator is a completely free bot to use. Donating to Akinator would help the developers. Click [here](https://www.patreon.com/akinatorbot) to donate.`)
        .setImage(`https://imgur.com/B38aLaY.jpg`)
        message.channel.send(embed)
    }
}
