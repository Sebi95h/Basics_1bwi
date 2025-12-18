let Temperature = (Math.floor(Math.random() * 50));

console.log("Die Temperatur ist: " + Temperature + "°C");

let Humidity = (Math.floor(Math.random() * 100));

console.log("Die Luftfeuchtigkeit ist: " + Humidity + "%");

if (Temperature >= 20 && Temperature <= 25 && Humidity <= 60 && Humidity >= 30) {
    console.log("Perfect day for outdoor activities!");
}

else if (Temperature < 20 || Temperature > 25 || Humidity > 60) {
    console.log("Maybe stay indoors today.");
}
else {
    console.log("Consult a doctor before exercising");
}