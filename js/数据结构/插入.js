const insertionSort = function (arr) {
  if (Object.prototype.toString.call(arr).slice(8, -1) === "Array") {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]; /* 条件成立，往后挪一位 */
        j--; /* 继续往前寻找 */
      }
      arr[j + 1] = key; /* 查找完毕插入 */
    }
    return arr;
  } else {
    console.log("It`s not a Array");
  }
}

let arr = [12.34, 23, 45, 86, 2]