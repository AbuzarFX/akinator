const Statcord = require("statcord.js");


module.exports = {
    config: {
        name: "post",
    },
    run: async (bot, message, args) => {
        if (message.author.id !== "184280327131234306") return;
        Statcord.ShardingClient.post(bot);
        message.channel.send(`Posted on Statcord!`)
    }
}