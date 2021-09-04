function enhanceObj(obj) {
  var clone = Object.create(obj);
  clone.say = function () {
    console.log("1");
  }
  return clone;
}

var person = {
  name: '张三',
  age: 18,
  hobbies: ["a", "b", "c"]
}

var person2 = enhanceObj(person);
person2.say();