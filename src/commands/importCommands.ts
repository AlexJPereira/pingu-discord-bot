import ICommand from '../interfaces/ICommand'
import CommandFactory from './api/commandFactory'

import Ping from './util/ping'

const addToList: ICommand[] = [
    {commandText: "!ping", factory: new CommandFactory(Ping)},
]

export default addToList