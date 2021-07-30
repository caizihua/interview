let arr = [5, 2, 2, 45, 64, 2, 1, 4]


const bubbleSort = function (arr) {
  const swap = function (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}
console.log(bubbleSort(arr));