'use strict';

function collectSameElements(collectionA, collectionB) {
  // let elements = [];
  // collectionA.forEach(function(elementInA) {
  //   if (collectionB.includes(elementInA)) {
  //     elements.push(elementInA);
  //   }
  //   // collectionB.find((elementInB) => {
  //   //   elementInB === elementInA;
  //   // })
  // }, this);
  // // es6
  // // collectionA.forEach((v) => collectionB.includes(v) && elements.push(v));
  // return elements;

  return collectionA.map(v => {
    if (collectionB.includes(v)) {
      return v;
    }
  })

}
