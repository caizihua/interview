let arr = [1, 2, 4, [1, 2, 3], 3, [1, 2, 3, [2, 3, 4]]];

const average = function (...args) {
  var arr = args.flat(Infinity);
  var res = 0;
  arr.map(function (element) {
    res += element;
  });
  return parseInt(res / arr.length);
};

console.log(average.apply(null, arr));
