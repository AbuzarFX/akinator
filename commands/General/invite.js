const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { stripIndents } = require("common-tags");
const { PREFIX } = require('../../config');

module.exports = {
    config: {
        name: "invite",
        aliases: ["inv"],
        usage: "[command name] (optional)",
        category: "info",
        description: "Displays all commands that the bot has.",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {

        const embed = new MessageEmbed()
        .setColor("GOLD")
        .setDescription(`Invite Akinator with the help of this [link](https://discord.com/api/oauth2/authorize?client_id=804789290139385887&permissions=20278592&scope=bot%20applications.commands). Click [here](https://discord.gg/YpVQNV8ckH) to join the Official Akinator Support Server.`)
        .setImage("https://cdn.hipwallpaper.com/i/65/71/iZh16N.jpg")

        message.channel.send(embed)

    }
}
