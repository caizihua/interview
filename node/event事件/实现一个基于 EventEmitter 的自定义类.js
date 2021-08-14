const EventEmitter = require("events");
const oneDayPlanRun = {
  "6:00": function () {
    console.log("现在六点");
  },
  "9:00": function () {
    console.log("现在九点了");
  }
}

function oneDayPlan() {
  EventEmitter.call(this)
}

Object.setPrototypeOf(oneDayPlan.prototype, EventEmitter.prototype)
Object.setPrototypeOf(oneDayPlan, EventEmitter)

const oneDay = new oneDayPlan();

oneDay.on("6:00", function () {
  oneDayPlanRun["6:00"]();
})
oneDay.on("9:00", function () {
  oneDayPlanRun["9:00"]();
})

async function doMain() {
  oneDay.emit("6:00")

  await sleep(500);

  oneDay.emit("9:00")
}

doMain();

async function sleep(s) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(1);
    }, s)
  })
}