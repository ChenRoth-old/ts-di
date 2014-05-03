var Car = (function () {
    function Car(engine, name) {
        this.engine = engine;
        this.name = name;
    }
    Car.prototype.go = function () {
        this.engine.start();
    };
    Car.prototype.stop = function () {
        this.engine.stop();
    };
    return Car;
})();

module.exports = Car;
//# sourceMappingURL=Car.js.map
