interface IEngine {

    state: string;
    start: () => void;
    stop: () => void;
}

export = IEngine;
