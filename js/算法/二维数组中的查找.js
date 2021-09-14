const matrix = [
  [1, 4, 5, 11],
  [24, 25, 26, 27],
  [29, 30, 32, 34],
  [36, 37, 40, 44],
  [50, 60, 77, 89]
]

let find = function (matrix, target) {
  if (matrix.length === 0) return false;
  let top = parseInt(matrix.length / 2) + 1,
    right = 0,
    origin;
  while (1) {
    if (top < 0 || right === matrix[0].length - 1) return false;
    origin = matrix[top][right];
    if (origin === target) {
      return true;
    } else if (origin < target) {
      right++;
    } else if (origin > target) {

      top--;
    }
  }
}

console.log(find(matrix, 1));