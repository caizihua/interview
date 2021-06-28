/* 你不知道的js上 P94 */
Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
        throw new TypeError("Error! not a function")
    }
    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
            return fToBind.apply(
                /* 判断绑定函数是不是被new调用，是的话就使用新this */
                (this instanceof fNOP && oThis ? this : oThis),
                /* concat支持柯里化 */
                aArgs.concat(Array.prototype.slice.call(arguments))
            )
        };
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
}

var obj = {
    name: "jack",
    showName: function () {
        return function () {
            console.log("my name is " + this.name);
        }
    }
}

obj.showName().bind(obj)()
/* ----- */
function foo(p1, p2) {
    this.val = p1 + p2;
}

var bar = foo.bind(null, "p1");
var baz = new bar("p2");
console.log(baz.val);
/* 理解this instanceof fNOP && oThis
  bind其中一个特征就是能将除了第一个参数之外的参数传给下层函数，为柯里化的一种
  在node环境中显示为undefined
*/