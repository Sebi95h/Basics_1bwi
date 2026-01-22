//Print all numbers from 1–50, but skip numbers 20–30.
for (let i = 1; i <= 50; i++) {
    if (i >= 20 && i <= 30) {
        continue;
    }
    console.log(i);
}