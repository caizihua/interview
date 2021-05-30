var empty = Object.create(null);
console.log("__proto__" in empty);
//某些环境中为真

/* 实现一个getPrototypeOf */
if (typeof Object.getPrototypeOf === "undefined") {
  Object.getPrototypeOf = function (obj) {
    var a = typeof obj;
    if (!obj || (a !== "object" && a !== "function")) {
      throw new TypeError("not a object");
    }
    return obj.__proto__;
  };
}
