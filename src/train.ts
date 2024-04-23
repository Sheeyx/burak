// ZB-TASK:

// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45

function randomBetween(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let result = randomBetween(30, 50);
console.log("Result: ",result);