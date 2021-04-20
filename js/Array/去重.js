const arr = [1, 1, "1", 17, true, true, false, false, "true", "a", {}, {}];

//1. set数据结构
const res1 = Array.from(new Set(arr));

//2.splice
const spliceRes = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        len--;
        j--;
      }
    }
  }
  return arr;
};
const res2 = spliceRes(arr);

//3.indexOf
const indexRes = (arr) => {
  const res3 = [];
  for (let i = 0; i < arr.length; i++) {
    if (res3.indexOf(res3) === -1) {
      res3.push(arr[i]);
    }
  }
  return res3;
};
const res3 = indexRes(arr);

//4.includes
//5.filter
//6.map
const mapRes = (arr) => {
  const map = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
      res.push(arr[i]);
    }
  }
  return res;
};
const res6 = mapRes(arr);
