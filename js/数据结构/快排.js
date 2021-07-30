let arr = [1, 4, 5, 6, 7, 8, 9, 34, 5, 6, 10]

function quickSort(arr) {
  if (arr.length < 2) return arr
  let pivot = arr[arr.length - 1]
  let left = arr.filter((v, i) => v <= pivot && i != arr.length - 1)
  let right = arr.filter((v, i) => v > pivot)
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(arr));