function foo() {
  console.log(a);
}

function bar() {
  var a = 3;
  foo();
}

var a = 2;

bar();
/* js没有动态作用域只有词法作用域 */
