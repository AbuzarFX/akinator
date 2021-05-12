
const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "ping",
    },
    run: async (bot, message, args) => {


    const botLatency = (bot.ws.ping)
    const shardLatency = (message.guild.shard.ping);
    
    const embed = new MessageEmbed()
	.setColor("GOLD")
    .setDescription(`**Bot ping**: ${botLatency}ms\n**Shard #${message.guild.shard.id} ping**: ${shardLatency}ms`)
    message.channel.send(embed)
  }
    
}