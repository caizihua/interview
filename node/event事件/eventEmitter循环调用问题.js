const event = require("events");
const emitter = new event.EventEmitter();

const test = () => {
  console.log("test");
}
/* 例一 */

emitter.on("test", function () {
  test();
  emitter.emit("test");
})
//emitter.emit("test");

/* 例二 */
emitter.on("test", function () {
  test();
  emitter.on("test", test)
})

emitter.emit("test")

/* 例一例二分别是什么结果，并解释 */