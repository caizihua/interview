function Promise(executor) {
  this.PromiseState = "pending";
  this.PromiseResult = null;
  this.callbacks = [];
  const _this = this;
  function resolve(data) {
    if (_this.PromiseState !== "pending") return;
    _this.PromiseState = "fulfilled";
    _this.PromiseResult = data;
    _this.callback.forEach((item) => {
      item.onResolved(data);
    });
  }
  function reject(data) {
    if (_this.PromiseState !== "pending") return;
    _this.PromiseState = "rejected";
    _this.PromiseResult = data;
    _this.callbacks.forEach((item) => {
      item.onRejected(data);
    });
  }
  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  const _this = this;
  if (typeof onRejected !== "function") {
    onRejected = (reason) => {
      throw reason;
    };
  }
  if (typeof onResolved !== "function") {
    onResolved = (value) => value;
  }
  return new Promise((resolve, reject) => {
    function callback(type) {
      try {
        let result = type(_this.PromiseResult);
        if (result instanceof Promise) {
          result.then(
            (v) => {
              resolve(v);
            },
            (r) => {
              reject(r);
            }
          );
        } else {
          resolve(result);
        }
      } catch (err) {
        reject(err);
      }
    }
    if (this.PromiseState === "fulfilled") {
      callback(onResolved);
    }
    if (this.PromiseState === "rejected") {
      callback(onRejected);
    }
    if (this.PromiseState === "pending") {
      this.callbacks.push({
        onResolved: function () {
          callback(onResolved);
        },
        onRejected: function () {
          callback(onRejected);
        },
      });
    }
  });
};
Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then(
        (v) => {
          resolve(v);
        },
        (r) => reject(r)
      );
    } else {
      resolve(value);
    }
  });
};

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
};

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let arr = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (v) => {
          count++;
          arr[i] = v;
          if (count === promises.length) {
            resolve(arr);
          }
        },
        (r) => {
          reject(r);
        }
      );
    }
  });
};

let q = new Promise((res, rej) => {
  res("OK");
});
q.then()
  .then((v) => {
    console.log(v);
    throw "error";
  })
  .catch((r) => {
    console.log(r);
  });
