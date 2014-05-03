import IEngine = require('./IEngine');

class V8 implements IEngine {

    state = "stopped";
    constructor() {}
    start() { this.state = "started"; console.log("V8 engine started"); }
    stop() { this.state = "stopped"; console.log("V8 engine stopped"); }

}

export = V8;