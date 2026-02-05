let Temperatur = (prompt("Wie warm ist es heute"));

if (Temperatur <= 0) {
    console.log("drinnen bleiben");

} else if (Temperatur <= 10 && Temperatur >= 0) {
    console.log("Warm Anziehen");

} else if (Temperatur <= 20 && Temperatur > 10) {
    console.log("Raus gehen");

} else if (Temperatur <= 25 && Temperatur > 20) {
    console.log("Baden gehen");

} else if (Temperatur < 25) {
    console.log("In die Kühlbox gehen");

}