class LazyManClass {
  constructor(name) {
    this.array = [];
    this.name = name;
    setTimeout(() => {
      console.log(`Hi I am ${name}`);
      this.next();
    }, 0);
  }
  eat(name) {
    var _this = this;
    var fn = (function (n) {
      return function () {
        setTimeout(() => {
          console.log(`I am eating ${n}`);
          _this.next();
        }, 0);
      };
    })(name);
    this.array.push(fn);
    return this;
  }
  sleepFirst(time) {
    var _this = this;
    var fn = (function (n) {
      return function () {
        setTimeout(() => {
          console.log(`等待了${n}秒...`);
          _this.next();
        }, n * 1000);
      };
    })(time);
    this.array.unshift(fn);
    return this;
  }
  sleep(time) {
    var _this = this;
    var fn = (function (n) {
      return function () {
        setTimeout(() => {
          console.log(`等待了${n}秒...`);
          _this.next();
        }, n * 1000);
      };
    })(time);
    this.array.push(fn);
    return this;
  }
  next() {
    var fn = this.array.shift();
    fn && fn();
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

LazyMan("Tony")
  .eat("lunch")
  .eat("dinner")
  .sleepFirst(2)
  .sleep(1)
  .eat("junk food");
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
