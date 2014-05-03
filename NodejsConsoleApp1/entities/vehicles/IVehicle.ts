import IEngine = require('../engines/IEngine');

interface IVehicle {
    
    engine: IEngine;
    go: () => void;
    stop: () => void;
}

export = IVehicle;