let obj = {};

obj.list = {};

obj.on = function (key, fn) {
  /* 不存在key时添加key */
  if (!this.list[key]) {
    this.list[key] = [];
  }
  this.list[key].push(fn);
}

obj.emit = function () {
  let key = [].shift.call(arguments),
    fns = this.list[key];
  if (!fns || fns.length === 0) {
    return false;
  }
  /* 调用key下存储的函数 */
  fns.forEach(element => {
    element.apply(this, arguments);
  });
}

obj.on("蔬菜", (name, color) => {
  console.log(`这是${name}，它是${color}的。`);
})

obj.on("水果", (name, size) => {
  console.log(`这是${name}，它${size}。`);
})

obj.emit("蔬菜", "青菜", "绿色");
obj.emit("蔬菜", "南瓜", "黄色");
obj.emit("水果", "西瓜", "比较大");
obj.emit("水果", "葡萄干", "很小");