let a = prompt("Gib eine Zahl ein:");

let b = prompt("Gib eine weitere Zahl ein:");
a = Number(a);
b = Number(b);
let sum = 0;
for (let i = a; i <= b; i++) {
    sum = sum + i;
}
console.log(sum);