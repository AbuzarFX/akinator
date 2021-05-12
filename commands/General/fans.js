const { MessageEmbed } = require('discord.js');

module.exports = {
config: {
    name: 'fans',
    description: "Returns the Invite Link of the Official Akinator Server.",
    usage: `fans`
},
run: async(bot, message, args) => {
    message.channel.send({ embed: {
        color: "GOLD",
        description: `Join the [Akinator Official Server!](https://discord.gg/YpVQNV8ckH)`
    }})
    }
}