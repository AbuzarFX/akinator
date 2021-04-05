const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');

module.exports = {
    config: {
        name: "os",
    },
    run: async (bot, message, args) => {


        const { totalMemMb, usedMemMb } = await mem.info();
        const serverStats = stripIndent`
      OS        :: ${await os.oos()}
      CPU       :: ${cpu.model()}
      Cores     :: ${cpu.count()}
      CPU Usage :: ${await cpu.usage()} %
      RAM       :: ${totalMemMb} MB
      RAM Usage :: ${usedMemMb} MB 
    `;
        const embed = new MessageEmbed()
        .setColor("GOLD")
        .setTitle(`Akinator Stats`)
        .addField('Server', `\`\`\`asciidoc\n${serverStats}\`\`\``)

        message.channel.send(embed)
    }
}