import discord from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const discordToken = process.env.DISCORD_TOKEN || ""
const client = new discord.Client();

client.once('ready', () => {
    const date = new Date()
    console.log(`${date.getDate()}/${date.getMonth()+1} - ${date.getHours()}:${date.getMinutes()}: Discord Bot Server is running`)
});

client.on('message', message => {
    if(message.content == '!ping')
        message.channel.send("pong OwO")
});

client.login(discordToken);