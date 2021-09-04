var person = {
  name: "张三",
  age: 18,
  hobbies: ["a", "b", "c"]
}

var person2 = Object.create(person);
person2.name = "李四";
person2.age = 19;
person2.hobbies.push("d");

var person3 = Object.create(person);
person3.name = "王五";
person3.age = 20;
person3.hobbies.push("e");

console.log(person.hobbies);
/* 
缺点：继承了多个实例的引用类型属性，容易被篡改。
无法传参
*/