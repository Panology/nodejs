/*
 * JS Testing Library #1
 * See https://github.com/FredKSchott/the-node-way
 * See http://phrogz.net/js/classes/OOPinJS.html
 */

module.exports = Test;
function Test(options){
    console.log('Constructor - Test():: options = ' + JSON.stringify(options, null, 2));

    this.debug = 0; // `this` makes `debug` public

    /********************************************
     * Private
     * Only accessible to Privileged methods
     *******************************************/
    if (options === undefined) options = {};

    for (var key in options){
        console.log(`Constructor - Test():setOptions():: ${key} = ${options[key]}`);
        this[key] = options[key];
        console.log(`Constructor - Test():setOptions():: this.${key} = ${this[key]}`);
    }

    /********************************************
     * Privileged
     * Has access to Private properties/methods
     * Accessible from public
     *******************************************/
    // Currently none
}

/********************************************
 * Public
 * Anyone may access
 *******************************************/
Test.prototype.checkProp = function(name){
    // using `this[name]` gives `undefined`
    console.log(`checkProp(${name}):: ` + this[name]);
};

Test.prototype.checkDebug = function(){
    // using `debug` gives the default value above
    // using `this.debug` gives `undefined`
    console.log('checkDebug():: ' + this.debug);
}
