'use strict';

function collectSameElements(collectionA, objectB) {
  let elements = [];
  collectionA.forEach(item => objectB.value.includes(item.key) && elements.push(item.key));
  return elements;
}
