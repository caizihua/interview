function _instanceof(L, R) {
  var X = R.prototype;
  L = L.__proto__;
  while (true) {
    if (L === false) return false;
    if (X === L) return true;
  }
}

function C() {}

var o = new C();

console.log(_instanceof(o, C));
