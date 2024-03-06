// I-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

function getDigits(str:string){
    let num: string[] = str.split("");
    let result = [];
    for (let i = 0; i < num.length; i++) {
        if (!isNaN(Number(num[i]))) {
            result.push(num[i]);
        } 
    }
    return result.join("");
}

let res = getDigits("m14i1t");
console.log(res);