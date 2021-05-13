function Parent() {
  this.name = "abcd";
}

Parent.prototype.getName = function () {
  return this.name;
};

function Child() {}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

const child = new Child();
console.log(child.name);
console.log(child.getName());
