bar();

function bar() {
  var a;
  console.log(`a:${a}`);
  console.log("我是bar");
  a = 2;
}
// 先有蛋（声明）再有鸡（赋值）
// 声明会被提升在最前面，而赋值会被保留在原地

// foo();
//foo1();

var foo = function foo1() {
  console.log("我是foo");
};
//函数定义有两种，一种是函数声明，一种是函数表达式
//bar是函数声明，foo是函数表达式
//所以foo会报错，not a function，因为只对foo进行了变量声明
//就算对foo也进行了函数声明foo1，foo1也不能使用

fun();

var fun;

function fun() {
  console.log(11111);
}

fun = function () {
  console.log(22222);
};

fun = 33333;

function fun() {
  console.log(44444);
}
//函数声明提升在变量声明之前，所以会被认为重复声明，而被函数声明覆盖。
//后面如果又对函数进行声明那么将会覆盖之前声明了的函数
