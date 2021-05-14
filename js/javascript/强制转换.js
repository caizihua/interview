var obj = {
  toString: function () {
    return "[object Object]";
  },
  valueOf: function () {
    return 0;
  },
};

var res1 = "object:" + obj;
var res2 = 0 + obj;
console.log(res1);
console.log(res2);
console.log("j" + { toString: () => "s" });
console.log(2 * { valueOf: () => 3 });
