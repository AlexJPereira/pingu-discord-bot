import {Message} from 'discord.js'

export default abstract class DefaultCommand{
    private message: Message

    constructor(message: Message){
        this.message = message
    }

    async abstract run(): Promise<boolean>

    abstract help(): boolean

    send(message: string){
        this.message.channel.send(message)
    }

    reply(message: string){
        this.message.reply(message)
    }

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