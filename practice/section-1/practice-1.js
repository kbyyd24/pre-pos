'use strict';

function collectSameElements(collectionA, collectionB) {
  let elements = [];
  collectionA.forEach(function(elementInA) {
    // collectionB.find(elementInA);
    // 箭头函数与匿名函数?
    if (collectionB.includes(elementInA)) {
      elements.push(elementInA);
    }
    // collectionB.find((elementInB) => {
    //   elementInB === elementInA;
    // })
  }, this);
  // es6
  // collectionA.forEach((v) => collectionB.includes(v) && elements.push(v));
  return elements;
}
