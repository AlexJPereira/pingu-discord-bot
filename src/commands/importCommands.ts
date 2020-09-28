import ICommand from '../interfaces/ICommand'
import CommandFactory from './api/commandFactory'

import Ping from './util/ping'
import Random from './util/random'

const addToList: ICommand[] = [
    {commandText: "!ping", factory: new CommandFactory(Ping)},
    {commandText: "!random", factory: new CommandFactory(Random)},
]

export default addToList