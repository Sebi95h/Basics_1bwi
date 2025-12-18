let Grade = (Math.floor(Math.random() * 100));
let Attendance = (Math.floor(Math.random() * 100));
let extraCredit = (Math.floor(Math.random() * 10));
console.log("Die Punkte sind: " + Grade);
console.log("Die Anwesenheit ist: " + Attendance);
console.log("Deine Zusatpunkte sind: " + extraCredit);

if (Grade >= 80 && (Attendance >= 90 || extraCredit >= 5)) {
    console.log("Eligible for advanced exam.");
} else {
    console.log("Not eligible for advanced exam.");
}