const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const db = require('../../reconDB');
const { stripIndents } = require("common-tags");
const { PREFIX } = require('../../config');

module.exports = {
    config: {
        name: "help",
        aliases: ["h"],
        usage: "[command name] (optional)",
        category: "info",
        description: "Displays all commands that the bot has.",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
        let prefix;
        let fetched = await db.get(`prefix_${message.guild.id}`);

        if (fetched === undefined) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }

        const embed = new MessageEmbed()
            .setColor("GOLD")
            .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL())
            .setThumbnail(bot.user.displayAvatarURL())

        if (!args[0]) {

            const embed = new MessageEmbed()
            .setColor("GOLD")
            .setTitle(`Akinator`)
            .setDescription(`Akinator is a computer game and mobile app by French company Elokence. Check out Akinator's [website](https://bit.ly/akinator-website) and the list of [commands](https://bit.ly/akinator-commands). Run \`${prefix}howto\` to know how the game works.\n\n`)
            .addField(`<:config:839925938803310622> Configuration`, `\`prefix\``)
            .addField(`<:languages:837404761707774023> Languages`, `\`lang\``)
            .addField(`<:defi1:804797586438357003> Main`, `\`aki [person/object/animal]\` - \`test\` - \`end\` - \`soundboard\``)
            .addField(`<:DISCORD_EMPLOYEE:809729720756863016> Moderator commands\n`, `\`serverinfo\` - \`userinfo\` - \`roleinfo\` - \`channelinfo\` - \`poll\` - \`uptime\``)
            .addField(`<:sound:840303620737728523> Soundboard`, `\`ahh\` - \`alia\` - \`copystrike\` - \`daddy\` - \`depress\` - \`firefly\` - \`fucknig\` - \`jeff\` - \`lambo\` - \`leave\` - \`moan\` - \`nani\` - \`ohh\` - \`reee\` - \`seinfeld\` - \`shrimp\` - \`shutdown\` - \`spaghet\` - \`startup\` - \`suckyourmum\` - \`thomas\` - \`yeet\` - \`zedther\``)
            .addField(`:file_folder:  Miscellaneous`, `\`ping\` - \`stats\` - \`info\` - \`invite\` - \`vote\` - \`donate\` - \`fans\` - \`os\``)
            .addField(`\u200b`, `Run \`${prefix}help <command>\` to know more about the command.`)
            .setThumbnail(`https://i.pinimg.com/originals/fe/e0/24/fee0246d3c4bddd06e95b41afbf13024.png`)
            .setImage(`https://i.imgur.com/WsNXfAs.jpg`)
        
            message.lineReply(embed)

        } else {
            let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
            if (!command) return message.channel.send(embed.setTitle("**Invalid Command!**").setDescription(`**Do \`${prefix}help\` For the List Of the Commands!**`))
            command = command.config
            embed.setDescription(stripIndents`**The Bot's Global Prefix Is \`${PREFIX}\`**\n
            **Server Prefix Is \`${prefix}\`**\n
            ** Command -** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\n
            ** Description -** ${command.description || "No Description provided."}\n
            **Category -** ${command.category}\n
            ** Usage -** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : "No Usage"}\n
            ** Accessible by -** ${command.accessableby || "everyone"}\n
            ** Aliases -** ${command.aliases ? command.aliases.join(", ") : "None."}`)
            embed.setFooter(message.guild.name, message.guild.iconURL())

            return message.channel.send(embed)
        }
    }
};