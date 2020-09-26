import DefaultCommand from './defaultCommand'
import {Message} from 'discord.js'

export default class CommandFactory<T extends DefaultCommand>{
    private newObject

    constructor(newObject: (new(message: Message) => T)){
        this.newObject = newObject
    }
    
    create(message: Message) {
        return new this.newObject(message);
    }
}
