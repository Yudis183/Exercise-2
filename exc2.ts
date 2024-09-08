// check odd & even number
const b1: number = 25;
const b2: number = 2;
const ans1: string = b1 / 2 === 1 ? "even number" : "odd number";
const ans2: string = b2 / 2 === 1 ? "even number" : "odd number";
console.log(ans1);
console.log(ans2);

//prime or nah
const bi1: number = 7;
let Prime1: boolean = true;
for (let i: number = 2; i < bi1; i++) {
  if (bi1 % i === 0) {
    Prime1 = false;
    break;
  }
}
console.log(Prime1);

const bi2: number = 6;
let prime: boolean = true;
for (let i: number = 2; i < bi2; i++) {
  if (bi2 % i === 0) {
    prime = false;
    break;
  }
}
console.log(prime);

//find the sum of the numbers 1 to N
const bil1: number = 5;
const bil2: number = 3;
let _hasil: string = `${bil1} -> `;
let _sum: number = 0;
for (let i = 0; i <= bil1; i++) {
  _sum += i;
  _hasil += i === bil1 ? `${i} = ${_sum}` : `${i} + `;
}
console.log(_hasil);
let _hasil1: string = `${bil2} -> `;
let _sum1: number = 0;
for (let i = 0; i <= bil2; i++) {
  _sum1 += i;
  _hasil1 += i === bil2 ? `${i} = ${_sum1}` : `${i} + `;
}
console.log(_hasil1);

//find factorial of a number
const _b1: number = 4;
let _hfact: string = `${_b1}! -> `;
let _fact: number = 1;
for (let i = 1; i <= _b1; i++) {
  _fact *= i;
  _hfact += i === _b1 ? `${i} = ${_fact}` : `${i} x `;
}
console.log(_hfact);

const _b2: number = 6;
let _hfact1: string = `${_b2}! -> `;
let _fact1: number = 1;
for (let i = 1; i <= _b2; i++) {
  _fact1 *= i;
  _hfact1 += i === _b2 ? `${i} = ${_fact1}` : `${i} x `;
}
console.log(_hfact1);

//print the first N fibonacci numbers
const fibnum: number = 15;
let _fib: number = 0;
let _n1: number = 0;
let _n2: number = 1;
let hasil: string = `${fibnum} -> `;
for (let i = 1; i <= fibnum; i++) {
  _fib = _n1 + _n2;
  _n1 = _n2;
  _n2 = _fib;
  hasil += i === fibnum ? `${_n1}` : `${_n1}, `;
}
console.log(hasil);
