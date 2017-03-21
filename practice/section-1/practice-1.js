'use strict';

function collectSameElements(collectionA, collectionB) {
  let elements = [];
  collectionA.forEach(function(elementInA) {
    collectionB.forEach(function(elementInB) {
      if (elementInB === elementInA) {
        elements.push(elementInA);
      }
    })
  }, this);
  return elements;
}
