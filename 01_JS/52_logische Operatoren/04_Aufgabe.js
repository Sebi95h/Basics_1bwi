let age = Number (prompt("Wie alt bist du?:"));
let money = Number (prompt("Wie viel Geld hast du?:"));

if (age >= 18 && money >= 12) {
    console.log("Ticket erfolgreich gekauft.");

} else if (age >= 18 && money < 12) {

    console.log("Nicht genug Geld.");
} else if (age < 18 && money >= 12) {

    console.log("Zu jung.");
} 