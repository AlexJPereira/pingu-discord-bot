import {Message} from 'discord.js'
import DefaultCommand from './defaultCommand'
import CommandFactory from './commandFactory'

export default class CommandsList{
    private list = new Map<string, CommandFactory<DefaultCommand>>()

    async run(message: Message){
        const command = message.content.split(' ').shift()
        if(command && this.list.has(command)){
            await this.list.get(command)?.create().run()
        }
    }
}