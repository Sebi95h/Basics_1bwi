let arr = [];
let amountOfGrades = Number(prompt("Wie viele Noten hast du?"));
let sum = 0;
for (let i = 0; i < amountOfGrades; i++) {
    let grade = prompt("Gib deine Note ein:")
    arr.push(grade)
    sum = sum + Number(grade);
}
console.log((sum / amountOfGrades).toFixed(2));

if (sum / amountOfGrades >= 1 && sum / amountOfGrades < 2) {
    console.log("Ausgezeichneter Erfolg");
} else if (sum / amountOfGrades >= 2 && sum / amountOfGrades < 2.5) {
    console.log("Guter Erfolg");
} 

