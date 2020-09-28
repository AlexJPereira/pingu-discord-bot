import { randomBytes } from 'crypto'
import DefaultCommand from '../api/defaultCommand'

export default class Random extends DefaultCommand{
    private randomBetween(minValue: number, maxValue: number){
        return Math.round(Math.random() * (maxValue - minValue) ) + minValue;
    }

    replyMessage(minValue: number, maxValue: number, randomNumber: number){
        return `Random number between ${minValue} and ${maxValue}:${'\n'}${randomNumber} :confetti_ball:`
    }

    async run(){
        let minValue = Number.parseInt(this.parameters[0])
        let maxValue = Number.parseInt(this.parameters[1])
        
        if(!minValue){
            minValue = 0
            maxValue = 100
        } else if(!maxValue){
            maxValue = minValue
            minValue = 0
        }

        const randomNumber = this.randomBetween(minValue, maxValue)
        this.reply(this.replyMessage(minValue, maxValue, randomNumber))
        
        return true
    }
}