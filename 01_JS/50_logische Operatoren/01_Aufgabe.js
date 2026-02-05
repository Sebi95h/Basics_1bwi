let Grade = (Math.floor(Math.random() * 100) + 1);

console.log(Grade);

if (Grade >= 90 && Grade <= 100) {
    console.log("A");
} else if (Grade >= 80 && Grade < 89) {
    console.log("B");
}               
else if (Grade >= 70 && Grade < 79) {   
    console.log("C");
}   
else if (Grade >= 60 && Grade < 69) {
    console.log("D");
}
else {
    console.log("F");
} 