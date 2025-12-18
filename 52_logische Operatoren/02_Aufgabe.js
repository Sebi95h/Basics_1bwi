let Speed = (Math.floor(Math.random() * 200));
let TrafficLevel = (Math.floor(Math.random() * 10));
console.log("Die Geschwindigkeit ist: " + Speed + " km/h");
console.log("Das Verkehrslevel ist: " + TrafficLevel);

if (Speed >= 80 || TrafficLevel >= 7) {
    console.log("Slow down!");
} else {
    console.log("You are got to go!");
}