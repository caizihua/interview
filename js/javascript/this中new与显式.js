function foo(something) {
  this.a = something
}

var obj1 = {}
/* 函数给对象添加了a属性 */
var bar = foo.bind(obj1)
bar(2)
console.log(obj1.a)
/* bar被硬绑定至obj1中 */

/* 实例对象与构造函数 */
var baz = new bar(3)
console.log(obj1.a);
console.log(baz.a);