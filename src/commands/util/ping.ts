import DefaultCommand from '../api/defaultCommand'

export default class Ping extends DefaultCommand{
    async run(){
        this.reply("Pong OwO")
        return true
    }
}