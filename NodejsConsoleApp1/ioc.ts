
export interface ICtor {

    name?: string;
    prototype: Object;
}

export class Mapper {

                private static argRegex = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
                private static objectGraph : {} = {};
                
                static register(dependent: any, reference: string, dependency:  any) {
                
                    var key = dependent.name;
                    if (!this.objectGraph[key])
                        this.objectGraph[key] = {};
                     this.objectGraph[key][reference]=  dependency;
                     
                }
    
                static resolve<T>(ctor: ICtor, args: Object) : T {
                          var name =  ctor.name;
                            var deps = this.objectGraph[name];
                            if (deps)
                            {
                                  var actualArgs = [];
                                  var fnArgs =  ctor.toString().match(this.argRegex)[1].replace(/\s/g, "").split(',');
                                  if (fnArgs.length)
                                   {
                                        for (var i in fnArgs)
                                        {
                                            var argName = fnArgs[i];
                                            if (args[argName])
                                                actualArgs[i] = args[argName];
                                            else if (deps[argName])
                                                actualArgs[i] = new (deps[argName])();
                                            else 
                                                actualArgs[i] = undefined;

                                        }

                                    }

                                    var resolved : any = Object.create(ctor.prototype);
                                    resolved.constructor.apply(resolved, actualArgs);
                                    return resolved;
                                    
                            }
                }

}

//export = Mapper;