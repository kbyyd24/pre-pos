'use strict';

function collectSameElements(collectionA, objectB) {
  let elements = [];
  collectionA.forEach(v => objectB.value.includes(v) && elements.push(v));
  return elements;
}
