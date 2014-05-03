import IVehicle = require('./IVehicle');
import IEngine = require('../engines/IEngine');

class Car implements IVehicle {

    name: string;
    engine: IEngine;
    constructor(engine:  IEngine, name: string )  {        
        this.engine = engine;
        this.name = name;
    }

    go() { this.engine.start(); }
    stop() { this.engine.stop(); }

}

export = Car;