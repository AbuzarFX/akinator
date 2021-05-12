const emojis = ["👍", "👎", "❔", "🤔", "🙄", "❌"];
const isPlaying = new Set();
const { Client, MessageEmbed } = require("discord.js");
const { Aki } = require("aki-api");
const { PREFIX } = require("../../config")

const langs = [
	"en",
	"ar",
	"fr",
	"cn",
	"de",
	"es",
	"it",
	"jp",
	"kr",
	"nl",
	"pl",
	"pt",
	"ru",
	"tr",
	"id"
];


module.exports = {
    config: {
        name: "test",
    },
    run: async (bot, message, args) => {
        if (message.author.bot || !message.guild) return;

    if (isPlaying.has(message.author.id)) {
      return message.channel.send(":x: | The game already started..");
    }

    isPlaying.add(message.author.id);

    let stringAki = args[0]
    if(langs.includes(args[0])) {
        let region = args[0];
    }else if(!args[0]) {
        args[0] = `en`
    }else if((!langs.includes(args[1]))){
        message.channel.send({ embed: {
            color: "GOLD",
            description: `Invalid language code! Run \`[prefix] lang\` for the language codes. Switching back to \`en\``
        }}).then(msg => {
            msg.delete({timeout: 5000})
        })
        args[0] = `en`
    }
    const aki = new Aki(args[0]);
    let ans = null;
    let win = false;
    let timesGuessed = 0;
    let guessResetNum = 0;
    let wentBack = false;
    let forceGuess = false;


    await aki.start();

    const msg = await message.channel.send(new MessageEmbed()
    .setAuthor(message.author.username, "https://play-lh.googleusercontent.com/rjX8LZCV-MaY3o927R59GkEwDOIRLGCXFphaOTeFFzNiYY6SQ4a-B_5t7eUPlGANrcw")
      .setThumbnail(`https://i.pinimg.com/originals/fe/e0/24/fee0246d3c4bddd06e95b41afbf13024.png`)
      .setColor("GOLD")
      .setDescription(`**Q${aki.currentStep + 1} - ${aki.question}**\n\n${aki.answers.map((an, i) => `${an} | ${emojis[i]}`).join("\n")}\n\n**Progress - ${Math.round(Number.parseInt(aki.progress, 10))}%**`))


    for (const emoji of emojis) await msg.react(emoji);

    const collector = msg.createReactionCollector((reaction, user) => emojis.includes(reaction.emoji.name) && user.id == message.author.id, {
      time: 60000 * 6
    });

    collector
      .on("end", () => isPlaying.delete(message.author.id))
      .on("collect", async ({
        emoji,
        users
      }) => {
        users.remove(message.author).catch(() => null);

        if (emoji.name == "❌") return collector.stop()
            
        if (emoji.name == "❌") {
          forceGuess = true;
        }

        await aki.step(emojis.indexOf(emoji.name));

        if (aki.progress >= 70 || aki.currentStep >= 78) {

          await aki.win();


          collector.stop();

          message.channel.send(new MessageEmbed()
          .setTitle(`I'm 93% Sure It's...`)
            .setThumbnail(`https://i.pinimg.com/originals/fe/e0/24/fee0246d3c4bddd06e95b41afbf13024.png`)
            .setDescription(`**${aki.answers[0].name}**\n**Profession - ${aki.answers[0].description}**\nRanking - **${aki.answers[0].ranking}**\n\n[yes (**y**) / no (**n**)]`)
            .setImage(aki.answers[0].absolute_picture_path)
            .setColor("GOLD"));

          const filter = m => /(yes|no|y|n)/i.test(m.content) && m.author.id == message.author.id;

          message.channel.awaitMessages(filter, {
              max: 1,
              time: 30000,
              errors: ["time"]
            })
            .then(collected => {
              const isWinner = /yes|y/i.test(collected.first().content);
              message.channel.send(new MessageEmbed()
                .setTitle(isWinner ? "Great! Guessed right one more time." : "I can't think of anyone!")
                .setColor("GOLD")
                .setDescription("I loved playing with you!<:defi1:804797586438357003>"));
            }).catch(() => null);
        
        } else {
          msg.edit(new MessageEmbed()
          .setAuthor(message.author.username, "https://play-lh.googleusercontent.com/rjX8LZCV-MaY3o927R59GkEwDOIRLGCXFphaOTeFFzNiYY6SQ4a-B_5t7eUPlGANrcw")
            .setThumbnail(`https://i.pinimg.com/originals/fe/e0/24/fee0246d3c4bddd06e95b41afbf13024.png`)
            .setColor("GOLD")
            .setDescription(`**Q${aki.currentStep + 1} - ${aki.question}**\n${aki.answers.map((an, i) => `${an} | ${emojis[i]}`).join("\n")}\n\n**Progress - ${Math.round(Number.parseInt(aki.progress, 10))}%**`))

        }
      });

    }
}




    
  