import discord from 'discord.js'
import config from '../database/config.json'

const client = new discord.Client();

client.once('ready', () => {
    const date = new Date()
    console.log(`${date.getDate()}/${date.getMonth()+1} - ${date.getHours()}:${date.getMinutes()}: Discord Bot Server is running`)
});

client.on('message', message => {
    if(message.content == '!ping')
        message.reply("pong")
});

client.login(config.discordToken);