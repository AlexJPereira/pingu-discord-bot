import discord from 'discord.js'
import dotenv from 'dotenv'
import CommandsList from './commands/api/commandsList'

dotenv.config()
const commandsList = new CommandsList()

const discordToken = process.env.DISCORD_TOKEN || ""
const client = new discord.Client();

client.once('ready', () => {
    const date = new Date()
    console.log(`${date.getDate()}/${date.getMonth()+1} - ${date.getHours()}:${date.getMinutes()}: Discord Bot Server is running`)
});

client.on('message', message => {
    commandsList.run(message)
});

client.login(discordToken);