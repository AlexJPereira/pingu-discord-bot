import {Message} from 'discord.js'

export default abstract class DefaultCommand{
    private message: Message

    constructor(message: Message){
        this.message = message
    }

    async abstract run(): Promise<boolean>

    get parameters(){
        const params = this.message.content.split(' ')
        params.shift()
        return params
    }

    get entireMessage(){
        return this.parameters.join(' ')
    }

    get author(){
        return this.message.author
    }
    
}