/*
 * JS Testing Library #2
 * See https://github.com/FredKSchott/the-node-way
 * See http://phrogz.net/js/classes/OOPinJS.html
 */

module.exports = Test;
function Test(options){
    console.log('Constructor - Test():: options = ' + JSON.stringify(options, null, 2));

    /********************************************
     * Private
     * Only accessible to Privileged methods
     *******************************************/
    var debug = 0;

    function setOptions(options){
        if (options === undefined) options = {};
        for (var key in options){
            console.log(`Constructor - Test():setOptions():: options.${key} = ${options[key]}`);
            eval(`var ${key} = options[key]`);
            console.log(`Constructor - Test():setOptions():: ${key} = ` + eval(key));
        }
    }
    setOptions(options);

    /********************************************
     * Privileged
     * Has access to Private properties/methods
     * Accessible from public
     *******************************************/
    this.checkProp = function(name){
        console.log(`checkProp(${name}):: ` + eval(name));
        return eval(name);
    }

    this.checkDebug = function(){
        console.log('checkDebug():: ' + debug);
        return debug;
    }
}

/********************************************
 * Public
 * Anyone may access
 *******************************************/
// Currently none
