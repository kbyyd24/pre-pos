'use strict';

function collectSameElements(collectionA, objectB) {
  // return collectionA.map(v => {
  //   if (objectB.value.includes(v))
  //     return v;
  // })
  return collectionA
    // .map(v => v)
    .filter(v => objectB.value.includes(v))
}
