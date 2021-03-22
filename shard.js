const { ShardingManager } = require('discord.js')

const shards = new ShardingManager("./index.js", {
    token: "ODA0Nzg5MjkwMTM5Mzg1ODg3.YBRcbw.GOdCNdZ3szHutVHyr_wyfzpLaj4",
    totalShards: "auto"
});

shards.on("shardCreate", async (shard) => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`);
});

shards.spawn(shards.totalShards, 10000);
