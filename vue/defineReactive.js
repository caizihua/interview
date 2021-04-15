var obj = {};

function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log("试图访问" + key);
      return val;
    },
    set(newValue) {
      console.log("试图改变" + key);
      if (val === newValue) {
        return;
      }
      val = newValue;
    },
  });
}

defineReactive(obj, "age", 10);
console.log(obj.age);
obj.age = 12;
obj.age++;
console.log(obj.age);
