var buffer = {
  entries: [],
  add: function (a) {
    this.entries.push(a);
  },
  concat: function (a) {
    return this.entries.join("");
  },
};

var source = ["123", "-", "456"];
// source.forEach(buffer.add); 这行代码是否报错？为什么？
source.forEach(function (a) {
  buffer.add(a);
});
console.log(buffer.concat(source));
