//hello BDD

var assert = require('assert');
suite('Hello', function(){
   test('Hello QADEV04', function(){
      var actualMsg =  'Hello QADEV04';
       var expectedMsg = 'Hello QADEV04';

       assert.equal(actualMsg, expectedMsg);
   });
});
