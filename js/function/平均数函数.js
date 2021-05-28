let arr = [1, 2, 4, [1, 2, 3], 3, [1, 2, 3, [2, 3, 4]]];

const average = function () {
  // var args = [...arguments];
  var args =
    arguments.length === 1
      ? (args = arguments[0])
      : Array.apply(null, arguments);
  var arr = args.flat(Infinity);
  var res = 0;
  arr.map(function (element) {
    res += element;
  });
  return parseInt(res / arr.length);
};

console.log(average.apply(null, arr));
