//promise
const sleep = (time) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(time);
    }, time)
  );
};

//async,await
async function sleepAsync() {
  const output = await sleep(1000);
  console.log(`过了${output}ms`);
}

//ES5
function sleepES(time) {
  if (typeof callback === "function") {
    setTimeout(() => {
      callback(time);
    }, time);
  }
}
function callback(time) {
  console.log(`过了${time}ms`);
}

/* sleep(1000).then((v) => {
  return `过了${v}ms`;
}); */
/* sleepAsync(); */
sleepES(1000);
