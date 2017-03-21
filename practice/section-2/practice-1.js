'use strict';

function countSameElements(collection) {
  // let counts = {};
  // collection.forEach(v => {
  //   if (counts[v]) {
  //     counts[v] += 1;
  //   } else {
  //     counts[v] = 1;
  //   }
  // });
  // let answer = [];
  // let keys = Object.keys(counts);
  // keys.forEach(key => {
  //   answer.push({
  //     key: key,
  //     count: counts[key]
  //   });
  // });
  // return answer;


  let mySet = new Set();
  collection.forEach(element => mySet.add(element));
  let answer = [];
  mySet.forEach(element => {
    answer.push({
      key: element,
      count: 0
    });
  });
  for (let i = 0; i < answer.length; i++) {
    let count = 0;
    collection.forEach(element => {
      if (element === answer[i].key) {
        count += 1;
      }
    });
    answer[i].count = count;
  }
  return answer;

  // return [... new Set(collection)].map(element => {
  //   return {
  //     key: element,
  //     count: collection.filter(v => v === element).length
  //   }
  // })
}
