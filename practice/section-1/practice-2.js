'use strict';

function collectSameElements(collectionA, collectionB) {
  let elements = [];
  collectionB.forEach(arrayInB => 
  collectionA.forEach(v => arrayInB.includes(v) && elements.push(v)));
  return elements;
}
