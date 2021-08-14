/* Buffer.from */
const b1 = Buffer.from('10')
const b2 = Buffer.from('10', 'utf-8')
const b3 = Buffer.from([10])
const b4 = Buffer.from(b3)
console.log(b1, b2, b3, b4);

/* Buffer.alloc */
const bAlloc1 = Buffer.alloc(10);
console.log(bAlloc1);

/* 字符编码 */
const b5 = Buffer.from("20", "ascii");
console.log(b5);
console.log(b5.toString("hex"));
const b6 = Buffer.from("10", "utf-8");
console.log(b6.toString("utf-8"));
/* 字符串转buffer */
const b7 = Buffer.from('Node.js 技术栈', 'utf-8')
console.log(b7);
console.log(b7.length);
console.log(b7.toString('utf-8', 0, 9));
console.log(b7.toString('utf-8', 0, b7.length));