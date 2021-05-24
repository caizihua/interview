//内层的作用域访问它外层函数作用域里的参数/变量/函数时，闭包就产生了。
//闭包是一种作用域，它拷贝了一套外层函数作用域中被访问的参数、变量/函数
var a = 0;
function bar() {
  // var a = 1;
  function foo() {
    a++;
    console.log(a);
  }
  return foo();
}

bar();
bar();
bar();
//闭包的一大特性就是能更新外部变量的值，实际上闭包存储的是引用而不是副本
//毫无疑问当执行一次后a被改变为1，再执行时，内层访问的外层变量已经改变，所以变成2，这就形成了闭包

/* for (let i = 1; i <= 5; i++) {
  {
    setTimeout(function test() {
      console.log(i); //>> 1 2 3 4 5
    }, i * 0);
  }
} */
//let让每次的i得以保存形成，如果使用var，那么全局变量中的i已经变成了5，所以将全部输出5

function out(val1) {
  return function (val2) {
    return val1 + val2;
  };
}

var res = out("I`m ");
console.log(res("Rose"));
console.log(res("Jake"));
//js中的函数包含了比调用它们执行所需要的代码还要多的信息，还存储了可能会引用的定义在内部作用域中的变量。
//这个函数就是闭包
