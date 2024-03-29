const { ShardingManager } = require('discord.js');
const token = "ODA0Nzg5MjkwMTM5Mzg1ODg3.YBRcbw.z3Umqq7CprQI_Qa7LBRy_hsgCiM";
const ConsoleHandler = require('./src/util/ConsoleHandler');
const path = require('path');
const Statcord = require("statcord.js");

const manager = new ShardingManager(path.join(__dirname, 'index.js'), { token: token, totalShards: 'auto', respawn: true });


const statcord = new Statcord.ShardingClient({
    key: "statcord.com-zChG7Ji1XmxqkrAMVkbx",
    manager,
    postCpuStatistics: true, /* Whether to post CPU statistics or not, defaults to true */
    postMemStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    postNetworkStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    autopost: false /* Whether to auto post or not, defaults to true */
});


manager.on('shardCreate', function(shard) {
    ConsoleHandler.log(shard, `Shard ${shard.id + 1}/${parseInt(manager.totalShards)} initiating..`);

    shard.on('death', function() {
        ConsoleHandler.error(shard, `Shard ${shard.id} died..`);
    });

    shard.on('disconnect', function() {
        ConsoleHandler.debug(shard, `Shard ${shard.id} disconnected..`);
    });

    shard.on('reconnecting', function() {
        ConsoleHandler.debug(shard, `Shard ${shard.id} reconnecting..`);
    });

    shard.on('close', function(code) {
        ConsoleHandler.error(shard, `Shard ${shard.id} closed all stdio with code ${code}`);
    });

    shard.on('exit', function(code) {
        ConsoleHandler.error(shard, `Shard ${shard.id} exited with code ${code}`);
    });

    shard.on('message', function(data) {
        if (data instanceof Object && typeof data == "object") {
            if (!data.message || !data.type) ConsoleHandler.log(shard, data.message||data);
            switch(data.type) {
                case 'debug':
                    ConsoleHandler.debug(shard, data.message);
                    break;

                case 'warn':
                    ConsoleHandler.warn(shard, data.message);
                    break;

                case 'error':
                    ConsoleHandler.error(shard, data.message);
                    break;

                default:
                    ConsoleHandler.log(shard, data.message);
            }
        } else {
            ConsoleHandler.log(shard, data);
        }
    });
});

statcord.on("autopost-start", () => {
    // Emitted when statcord autopost starts
    console.log("Started autopost");
});

statcord.on("post", status => {
    // status = false if the post was successful
    // status = "Error message" or status = Error if there was an error
    if (!status) console.log("Successful post");
    else console.error(status);
});



manager.spawn(manager.totalShards).catch(console.error);
