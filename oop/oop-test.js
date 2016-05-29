/*
 * JS OOP Testing
 * See https://github.com/FredKSchott/the-node-way
 * See http://phrogz.net/js/classes/OOPinJS.html
 */

// Test w/Library 1
var Lib = require('./test-lib.js');
console.log('**** Test Library #1 ****\n');

// Instance w/defaults
console.log('== Object 1 ==');
var o1 = new Lib();                            // Create an instance
o1.checkProp('debug');                         // Check value of debug via checkProp()
o1.checkDebug();                               // Check value of debug via checkDebug()
console.log('o1.debug = ' + o1.debug + '\n');  // Is debug publicly accessible?

// Instances w/options
console.log('== Object 2 ==');
var o2 = new Lib({debug: 5});
o2.checkProp('debug');
o2.checkDebug();
console.log('o2.debug = ' + o2.debug + '\n');

// Test w/Library 2
var Lib2 = require('./test-lib2.js');
console.log('\n**** Test Library #2 ****\n');

// Instance w/defaults
console.log('== Object 3 ==');
var o3 = new Lib2();
o3.checkProp('debug');
o3.checkDebug();
console.log('o3.debug = ' + o3.debug + '\n');

// Instances w/options
console.log('== Object 4 ==');
var o4 = new Lib2({debug: 5});
o4.checkProp('debug');
o4.checkDebug();
console.log('o4.debug = ' + o4.debug + '\n');

// Test w/Library 3
var Lib3 = require('./test-lib3.js');
console.log('\n**** Test Library #3 ****\n');

// Instance w/defaults
console.log('== Object 5 ==');
var o5 = new Lib3();
o5.getDebug();
console.log('o5.debug = ' + o5.debug + '\n');

// Instances w/options
console.log('== Object 6 ==');
var o6 = new Lib3({debug: 5});
o6.getDebug();
console.log('o6.debug = ' + o6.debug );
o6.setDebug(2);
o6.getDebug();
console.log('\n');
