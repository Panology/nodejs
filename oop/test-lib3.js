/*
 * JS Testing Library #3
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
    var debug = (options && options.debug !== undefined) ? options.debug : 0;
    console.log('Constructor - Test():setOptions():: debug = ' + debug);

    /********************************************
     * Privileged
     * Has access to Private properties/methods
     * Accessible from public
     *******************************************/
    this.setDebug = function(value){
        console.log('setDebug():: debug = ' + value);
        debug = value;
    }
    this.getDebug = function(){
        console.log('getDebug():: ' + debug);
        return debug;
    }
}

/********************************************
 * Public
 * Anyone may access
 *******************************************/
// Currently none
