function testWisePerson() {
  var wiseType = 'goat';
  var whatToSay = 'hello world';
  var expected = 'A wise ' + wiseType + ' once said: "' +
  whatToSay + '".';
  var actual = wisePerson(wiseType,whatToSay);
  if (expected === actual) {
    console.log('SUCCESS: 'wisePerson' is working');
  }
  else {
    console.log('FAILURE: 'wiseperson' is not working');
  }
}

testWisePerson ();
