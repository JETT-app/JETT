const { Client, Intents } = require('discord.js');

const client = new Client({ intents: 1 });

client.once('ready', async () => {
    console.log(`
    [Active] Application Started
    `);
});

require('dotenv').config();
client.login(process.env.JETT_TOKEN);