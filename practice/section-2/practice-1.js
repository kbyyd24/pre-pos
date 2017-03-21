'use strict';

function countSameElements(collection) {
  let counts = {};
  collection.forEach(v => {
    if (counts[v]) {
      counts[v] += 1;
    } else {
      counts[v] = 1;
    }
  });
  let answer = [];
  let keys = Object.keys(counts);
  keys.forEach(key => {
    answer.push({
      key: key,
      count: counts[key]
    });
  });
  return answer;
}
