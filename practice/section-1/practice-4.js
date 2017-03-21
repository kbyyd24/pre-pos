'use strict';

function collectSameElements(collectionA, objectB) {
  // return collectionA
  //   .filter(item => objectB.value.includes(item.key))
  //   .map(item => item.key)

  return collectionA
    .map(item => item.key)
    .filter(v => objectB.value.includes(v))
}
