"use strict";


// 1. printIndices
function printIndices(items) {
  
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}

printIndices(['apple','berry','cherry'])

// 2. everyOtherItem
function everyOtherItem(items) {
  
  let result = [];
  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i]);
    }
  }
  console.log(result);
}

everyOtherItem(['apple','berry','cherry','four','five'])

// 3. smallestNItems
function smallestNItems(items, n) {
  
  items.sort((a, b) => a - b);
  const nums = items.slice(0,n);
  nums.reverse();
  console.log(nums);
}

smallestNItems([1, 30, 4, 21, 100000], 3)