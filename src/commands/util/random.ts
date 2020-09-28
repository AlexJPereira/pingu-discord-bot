import { randomBytes } from 'crypto'
import DefaultCommand from '../api/defaultCommand'

export default class Random extends DefaultCommand{
    private randomBetween(minValue: number, maxValue: number){
        return Math.round(Math.random() * (maxValue - minValue) ) + minValue;
    }

    async run(){
        let minValue = Number.parseInt(this.parameters[0])
        let maxValue = Number.parseInt(this.parameters[1])

        if(minValue && maxValue){
            const randomNumber = this.randomBetween(minValue, maxValue)
            this.reply(`Random number between ${minValue} and ${maxValue}:${'\n'}${randomNumber} :confetti_ball:`)
        }else if(minValue){
            const randomNumber = this.randomBetween(0, minValue)
            this.reply(`Random number between ${0} and ${minValue}:${'\n'}${randomNumber} :confetti_ball:`)
        }else{
            const randomNumber = this.randomBetween(0, 100)
            this.reply(`Random number between ${0} and ${100}:${'\n'}${randomNumber} :confetti_ball:`)
        }
        
        return true
    }
}