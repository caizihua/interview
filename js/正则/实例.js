var date1 = "23:59";
var date2 = ["2000-01-01", "2000-02-30"];

var reg1 = /^([01][0-9]|[2][0-4]):([0-5][0-9])$/;
var reg2 = [/^[0-9]{4}-(0[0-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])$/, /^[0-9]{4}-02-(0[1-9]|[12][0-9])$/];

console.log(reg1.test(date1));
reg2.map((m) => {
  date2.map((n) => {
    console.log(m.test(n));
  })
})

var phone = '19983468118';
var reg3 = /^1[3-9]\d{9}$/

console.log("-----phone");
console.log(reg3.test(phone));