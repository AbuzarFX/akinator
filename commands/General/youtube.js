const { Message } = require("discord.js")

module.exports = {
    config: {
        name: "youtube",

    },
    run: async (bot, msg, args) => {
        msg.channel.send(`https://youtube.com/c/SyedAbuzar`);
    }
}