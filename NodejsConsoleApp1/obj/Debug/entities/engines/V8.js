var V8 = (function () {
    function V8() {
        this.state = "stopped";
    }
    V8.prototype.start = function () {
        this.state = "started";
        console.log("V8 engine started");
    };
    V8.prototype.stop = function () {
        this.state = "stopped";
        console.log("V8 engine stopped");
    };
    return V8;
})();

module.exports = V8;
//# sourceMappingURL=V8.js.map
