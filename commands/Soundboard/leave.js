const Discord = require('discord.js');
const errors = require('../../util/errors');
const { MessageEmbed } = require('discord.js');

module.exports = {
config: {
    name: 'leave',
},
run: async(bot, message, args) => {
  const voiceChannel = message.member.voice.channel;

  if (!message.member.voice.channel) {
    return errors.userNotInChannel(message);
  } else {
    message.member.voice.channel.leave();
    message.react("👋")
  }
}
}

