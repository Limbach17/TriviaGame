/* 

var testArray = [1,2,3,4,5,6,7,8,9,10];

function shuffle(testArray) {
    var m = testArray.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = testArray[m];
      testArray[m] = testArray[i];
      testArray[i] = t;
    }
  
    return testArray;
  }

  console.log(shuffle(testArray));
  console.log(shuffle(testArray));
  console.log(shuffle(testArray));
  console.log(shuffle(testArray));
  console.log("------");

  var testObject = {array1: [1,2,3,4,5], array2: [11,12,13,14,15]};

  function shuffle(testObject) {
    var m = testObject.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = testObject[m];
      testObject[m] = testObject[i];
      testObject[i] = t;
    }
  
    return testObject;
  }

  console.log(shuffle(testObject));

  */

  

  