var mapper = require('./ioc');
var ioc = mapper.Mapper;

var V8 = require('./entities/engines/V8');
var Diesel = require('./entities/engines/Diesel');
var Car = require('./entities/vehicles/Car');

ioc.register(Car, "engine", V8);

var car = ioc.resolve(Car, { name: "BMW" });
var anotherCar = ioc.resolve(Car, { engine: new Diesel(), name: "ŠKODA" });

console.log("I'm driving a " + car.name);
console.log("engine state: " + car.engine.state);
car.go();
console.log("engine state: " + car.engine.state);
car.stop();
console.log("engine state: " + car.engine.state);

console.log("I'm driving a " + anotherCar.name);
console.log("engine state: " + anotherCar.engine.state);
anotherCar.go();
console.log("engine state: " + anotherCar.engine.state);
anotherCar.stop();
console.log("engine state: " + anotherCar.engine.state);
//# sourceMappingURL=app.js.map
