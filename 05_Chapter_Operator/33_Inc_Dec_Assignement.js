let a = 100;
console.log(a++ + ++a + a++ + ++a); // 202
console.log(a); // 104



let a = 37;
console.log(--a + a--);
console.log(a);

let i =1;
let j = i++ > 1 ? i++ : --i;
console.log(j, i); // 0, -1