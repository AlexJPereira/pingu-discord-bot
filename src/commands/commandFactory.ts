import DefaultCommand from './defaultCommand'

export default class CommandFactory<T extends DefaultCommand>{
    private newObject
    constructor(newObject: {new(): T; }){
        this.newObject = newObject
    }
    create() {
        return new this.newObject();
    }
}

const a = new CommandFactory<DefaultCommand>()
a.create()