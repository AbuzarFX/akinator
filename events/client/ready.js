

const { PREFIX } = require('../../config');
module.exports = async bot => {
    console.log(`${bot.user.username} is available now!`)


    bot.user.setActivity(`${PREFIX}help`, { type: "WATCHING" })

  
  
    
};
