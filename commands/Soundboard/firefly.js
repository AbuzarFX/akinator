const errors = require('../../util/errors');

const { MessageEmbed } = require('discord.js');

module.exports = {
config: {
    name: 'firefly',
},
run: async(bot, message, args) => {
    if (!message.member.voice.channel) {
        return errors.userNotInChannel(message);
      } else {
        message.member.voice.channel.join().then(connection => {
          message.channel.send({ embed: { 
              color: "GOLD",
              description: `${message.author} has issued the \`${module.exports.config.name}\` command.`
          }}).then(msg => {
            msg.delete({ timeout: 5000})
          })
          const dispatcher = connection.play('././effects/firefly.mp3');
    
          dispatcher.on('end', end => {
            message.member.voice.channel.leave();
          });
        })
      }
    }
}