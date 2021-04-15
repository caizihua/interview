function Promise1(executor) {
  this.PromiseState = "pending";
  this.PromiseResult = null;
  this.callback = [];
  _this = this;
  function resolve(data) {
    if (_this.PromiseState !== "pending") return;
    _this.PromiseState = "fulfilled";
    _this.PromiseResult = data;
    setTimeout(() => {
      _this.callback.forEach((item) => {
        item.onResolved(data);
      });
    });
  }
  function reject(data) {
    if (_this.PromiseState !== "pending") return;
    _this.PromiseState = "rejected";
    _this.PromiseResult = data;
    setTimeout(() => {
      _this.callback.forEach((item) => {
        item.onRejected(data);
      });
    });
  }
  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

Promise1.prototype.then = function (onResolved, onRejected) {
  if (this.PromiseState === "fulfilled") {
    onResolved(this.PromiseResult);
  }
  if (this.PromiseState === "rejected") {
    onRejected(this.PromiseResult);
  }
  if (this.PromiseState === "pending") {
    this.callback.push({ onResolved, onRejected });
  }
};

let p1 = new Promise1((resolve, reject) => {
  resolve("resolve");
  resolve("FINE");
});
let p2 = new Promise1((resolve, reject) => {
  reject("reject");
});
let p3 = new Promise1((resolve, reject) => {
  throw "error";
});
let p4 = new Promise1((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve async");
  }, 0);
});

p1.then((value) => {
  console.log(value);
});
p2.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
p3.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
p4.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
/* p5.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
p5.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
[1, 2, 3, 4].forEach((item) => {
  console.log(item);
}); */
