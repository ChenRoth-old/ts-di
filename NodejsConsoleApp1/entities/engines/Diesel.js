var Diesel = (function () {
    function Diesel() {
        this.state = "stopped";
    }
    Diesel.prototype.start = function () {
        this.state = "started";
        console.log("Diesel engine started");
    };
    Diesel.prototype.stop = function () {
        this.state = "stopped";
        console.log("Diesel engine stopped");
    };
    return Diesel;
})();

module.exports = Diesel;
//# sourceMappingURL=Diesel.js.map
