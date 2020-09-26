import {Message} from 'discord.js'
import DefaultCommand from './defaultCommand'
import CommandFactory from './commandFactory'
import importCommands from '../importCommands'

export default class CommandsList{
    private list = new Map<string, CommandFactory<DefaultCommand>>()

    constructor(){
        importCommands.forEach(cmd => {
            this.list.set(cmd.commandText, cmd.factory)
        })
    }

    async run(message: Message){
        const command = message.content.split(' ').shift()
        if(command && this.list.has(command)){
            await this.list.get(command)?.create(message).run()
        }
    }
}