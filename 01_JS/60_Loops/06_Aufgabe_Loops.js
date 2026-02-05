let count = prompt("Wie viele Zahlen möchtest du eingeben?");
count = Number(count);
let sum = 0;
for (let i = 1; i <= count; i++) {
    let number = prompt("Gib Zahl " + i + " ein:");
    number = Number(number);
    sum = sum + number;
    
}
let average = sum / count;
console.log(average);
