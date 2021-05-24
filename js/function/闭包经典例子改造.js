/*for (var i = 1; i <= 5; i++) {
  {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
}
*/

/* for (var i = 1; i <= 5; i++) {
  setTimeout(
    (i) => {
      console.log(i);
    },
    0,
    i
  );
} */

/* for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
 */

/* for (var i = 0; i < 3; i++) {
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 0);
  })(i);
} */

for (var i = 0; i < 10; i++) {
  (function () {
    var j = i;
    setTimeout(() => {
      console.log(j);
    }, 0);
  })();
}
