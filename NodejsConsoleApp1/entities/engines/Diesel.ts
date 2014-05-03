import IEngine = require('./IEngine');

class Diesel implements IEngine {

    state = "stopped";
    constructor() {}
    start() { this.state = "started"; console.log("Diesel engine started"); }
    stop() { this.state = "stopped"; console.log("Diesel engine stopped"); }

}

export = Diesel;