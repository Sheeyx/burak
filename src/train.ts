// U-TASK:

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

function sumOdds(num: number) {
    if(num % 2 == 0){
        return (num / 2);
    } else {
        return Math.floor(num / 2)
    }
}

let result = sumOdds(11);
console.log("Result: ",result);