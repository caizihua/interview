//检测左边实例对象上的原型链中是否有右边构造函数的原型
function _instanceof(L, R) {
  let [X, Y] = [Object.getPrototypeOf(L), R.prototype];
  let Z = Object.getPrototypeOf(Y);
  while (true) {
    if (X === null || Y === null) return false;
    if (X === Y || X === Z) {
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
console.log(_instanceof(o, Object));
console.log(_instanceof(o, D));
console.log(x instanceof D);
