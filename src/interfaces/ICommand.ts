import { Extension } from 'typescript'
import CommandFactory from '../commands/api/commandFactory'
import DefaultCommand from '../commands/api/defaultCommand'

export default interface ICommand{
    commandText: string,
    factory: CommandFactory<DefaultCommand>
}