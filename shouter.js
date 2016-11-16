function shouter (whatToShout) {
  retun whatToShout.toUpperCase () + '!!!';
}

function testShouter () {
  var WhattoShout = 'as you can hear i am whispering';
  var expected = 'AS YOU CAN HEAR I AM WHISPERING!!!';
  if (shouter(whatToShout) === expected) {
    console.log('SUCCESS: 'shouter' is working');
  }
  else {
    console.log('FAILURE: 'shouter' is not working');
  }
}

testShouter
