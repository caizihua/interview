let arr = [3, 23, 43, 56, 74, 36, 83, 1, 46, 83]

const selectionSort = function (arr) {
  const len = arr.length;
  let minIndex;
  if (len <= 1) return;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

console.log(selectionSort(arr));