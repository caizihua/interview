function _instanceof(L, R) {
  let [X, Y] = [R.prototype, Object.getPrototypeOf(L)];
  while (true) {
    if (Y === null) return false;
    if (X === Y) {
      return true;
    } else {
      return false;
    }
  }
}

function C() {}
function D() {}

let o = new C();
let p = new D();

let x = [1, 2, 3, 4];
//左边为对象，右边为构造函数，如果相等那么L.__proto__ === R.prototype
console.log(_instanceof(o, C));
console.log(_instanceof(o, D));
console.log(x instanceof D);
