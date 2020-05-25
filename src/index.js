const Discord = require('discord.js');
const config = require('../database/config.json');
const client = new Discord.Client();

client.once('ready', () => {
    const date = new Date()
    console.log(`${date.getDate()}/${date.getMonth()+1} - ${date.getHours()}:${date.getMinutes()}: Servidor do bot do discord rodando`)
    console.log(client.channels)
});

client.on('message', message => {
    
});

client.login(config.discordToken);