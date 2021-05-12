const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js")
module.exports.userNotInChannel = (message) => {
  let embed = new MessageEmbed()
  .setTitle('User is not in a voice channel!')
  .setColor("GOLD")
  .setDescription(`${message.author}, you are not not in a voice channel, dummy.`);
  message.channel.send(embed);
};
