import ICommand from '../interfaces/ICommand'
import CommandFactory from './api/commandFactory'

import Ping from './util/ping'
import Random from './util/random'
import Owo from './otaku/owo'

const addToList: ICommand[] = [
    {commandText: "!ping", factory: new CommandFactory(Ping)},
    {commandText: "!random", factory: new CommandFactory(Random)},
    {commandText: "!owo", factory: new CommandFactory(Owo)},
]

export default addToList