var Mapper = (function () {
    function Mapper() {
    }
    Mapper.register = function (dependent, reference, dependency) {
        var key = dependent.name;
        if (!this.objectGraph[key])
            this.objectGraph[key] = {};
        this.objectGraph[key][reference] = dependency;
    };

    Mapper.resolve = function (ctor, args) {
        var name = ctor.name;
        var deps = this.objectGraph[name];
        if (deps) {
            var actualArgs = [];
            var fnArgs = ctor.toString().match(this.argRegex)[1].replace(/\s/g, "").split(',');
            if (fnArgs.length) {
                for (var i in fnArgs) {
                    var argName = fnArgs[i];
                    if (args[argName])
                        actualArgs[i] = args[argName];
                    else if (deps[argName])
                        actualArgs[i] = new (deps[argName])();
                    else
                        actualArgs[i] = undefined;
                }
            }

            var resolved = Object.create(ctor.prototype);
            resolved.constructor.apply(resolved, actualArgs);
            return resolved;
        }
    };
    Mapper.argRegex = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
    Mapper.objectGraph = {};
    return Mapper;
})();
exports.Mapper = Mapper;
//export = Mapper;
//# sourceMappingURL=ioc.js.map
