import DefaultCommand from '../api/defaultCommand'

export default class Owo extends DefaultCommand{
    async run(){
        this.reply("OwO")
        
        return true
    }
}