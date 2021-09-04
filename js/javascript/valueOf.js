/* 返回指定值的原始值 */

//array
var array = [1, 23, 'a'];
var array2 = [];
console.log(array.valueOf(), '---', array.toString());
console.log(array2.valueOf(), '---', array2.toString());
//Date
var date = new Date();
console.log(date.valueOf(), '---', date.toString());
//Number
var num = 0;
console.log(num.valueOf(), '---', num.toString());
//Boolean
var bool = true;
console.log(bool.valueOf(), '---', bool.toString());
//function
function foo() {
  console.log(1);
}
console.log(foo.valueOf(), '---', foo.toString());