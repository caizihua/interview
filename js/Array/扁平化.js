// 将一个多维数组变成一维数组就是数组扁平化
const res = [1, 2, [3, 4],
  [5, [6, 7, [8]]]
];

//1.flat():按照指定的深度遍历数组，返回一个合并的新数组，不会改变原数组
const res1 = res.flat(Infinity);

//2.正则去除所有的括号，不会改变原数组
const res2 = JSON.parse(`[${JSON.stringify(res).replace(/\[|\]/g, "")}]`);

//3.reduce方法，不会改变原数组
const resRed = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? resRed(cur) : cur);
  }, []);
};
const res3 = resRed(res);

//4.递归
const res5 = [];
const fn = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      fn(arr[i]);
    } else {
      res5.push(arr[i]);
    }
  }
};
fn(res);
// console.log(res5);

//5 ES6解构运算符
function fnFlat(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
// console.log(fnFlat(res));