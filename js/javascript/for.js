/* 
for...in语句以任意顺序迭代对象的可枚举属性
for...of语句遍历可迭代对象定义要迭代的数据
*/

Array.prototype.arr = function () {}
Object.prototype.obj = function () {}

let arr = [1, 2, 3, 4, 5]
arr.foo = 'hello'

for (let i in arr) {
  console.log(i);
}

for (let i in arr) {
  if (arr.hasOwnProperty(i)) {
    console.log(i);
  }
}

for (let i of arr) {
  console.log(i);
}