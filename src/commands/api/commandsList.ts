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
        const splitMessage = message.content.split(' ')
        const command = splitMessage.shift()?.toLowerCase()
        if(command && this.list.has(command)){
            if(splitMessage.shift()?.toLowerCase() !== 'help')
                await this.list.get(command)?.create(message).run()
            else
                this.list.get(command)?.create(message).help()
        }
    }
}