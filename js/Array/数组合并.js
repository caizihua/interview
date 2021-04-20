const res1 = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"];
const res2 = ["A", "B", "C", "D"];

const res = [...res1, ...res2].sort((a, b) => a.charCodeAt() - b.charCodeAt());
console.log(res);
