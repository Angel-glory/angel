 5.//merge arrays
function mergeAndRemoveDuplicates(arr1, arr2) {
   let mergedArray = arr1.concat(arr2);
   let uniqueArray = [...new Set(mergedArray)];
   return uniqueArray;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];
console.log(mergeAndRemoveDuplicates(array1, array2));