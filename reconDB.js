const { reconDB } = require("reconlx")
const bot = require("./index")
const db = new reconDB(bot, {
    uri: "mongodb+srv://Abuzar:abuzar.rocks@akinator.9gye0.mongodb.net/Data",
});

module.exports = db;
