const { MessageEmbed } = require("discord.js");
const { ShardingManager } = require('discord.js');
const moment = require("moment")

require("moment-duration-format");

module.exports = {
    config: {
        name: "s-stats",
    },
    run: async (bot, message, args) => {

        const promises = await bot.shard.broadcastEval(`[this.shard.ids[0], this.guilds.cache.size, this.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0), this.channels.cache.size, this.uptime, process.memoryUsage().heapUsed]`);
        let finale = "";

        promises.forEach((value) => {
             finale += `\`Shard ${value[0]}:\`\n> Server Count: **${value[1].toLocaleString()}** | Users: **${value[2].toLocaleString()}** | Channels: **${value[3].toLocaleString()}** | Uptime: **${moment.duration(value[4]).format("d:hh:mm:ss")}** | Memory Usage: **${formatBytes(value[5])}**\n\n`;
        });
        
        const embed = new MessageEmbed()
        .setColor("GOLD")
        .setAuthor("Shard Statistics", bot.user.displayAvatarURL())
        .setTimestamp()
        .setDescription(finale)

        return message.channel.send(embed);

        function formatBytes(a, b) {
            if (0 == a) return "0 Bytes";
            let c= 1024;
            let d = b || 2;
            let e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
            let f = Math.floor(Math.log(a) / Math.log(c));

            return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f];
        };

    }
}
