//call,instanceof,isArray
//1.Object.prototype.toString.call()
Object.prototype.toString.call([]); //[object Array]
Object.prototype.toString.call("An"); // "[object String]"
Object.prototype.toString.call(1); // "[object Number]"
Object.prototype.toString.call(Symbol(1)); // "[object Symbol]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(function () {}); // "[object Function]"
Object.prototype.toString.call({ name: "An" }); // "[object Object]"
//所有基本类型都能查，包括null和undefined

//2.instanceof
[] instanceof Array; // true
[] instanceof Object; // true
//只能判断对象，原始类型不能判断
//所有对象类型instanceof Object 都是 true。

//3.Array.isArray()
//当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes.
//Array.isArray()是ES5新增的方法，当不存在 Array.isArray() ，可以用 Object.prototype.toString.call() 实现。
Array.isArray([1, 2, 3]);
