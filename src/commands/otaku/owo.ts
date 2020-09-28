import DefaultCommand from '../api/defaultCommand'

export default class Owo extends DefaultCommand{
    async run(){
        this.reply("OwO")
        
        return true
    }

    help(){
        this.reply("this function does not receive parameters, just try to say !owo")
        return true
    }
}