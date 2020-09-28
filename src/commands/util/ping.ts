import DefaultCommand from '../api/defaultCommand'

export default class Ping extends DefaultCommand{
    async run(){
        this.reply("Pong OwO")
        return true
    }

    help(){
        this.reply("this function does not receive parameters, just try to say !ping")
        return true
    }
}