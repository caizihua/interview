var name = "Rose";
var obj = {
  name: "Jack",
  fun: function () {
    console.log(this.name);
    console.log("---------");
  },
  funMethods: function () {
    return function (a, b) {
      console.log(this.name, a + b);
      console.log("---------");
    };
  },
};
var funCopy = obj.fun;
funCopy();
obj.fun();
obj.funMethods().apply(obj, [0, 1]);
obj.funMethods().bind(obj, 1, 2)();
obj.funMethods().call(obj, 2, 3);
