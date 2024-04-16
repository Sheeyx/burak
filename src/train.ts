// Z-TASK:

// Shunday function yozing, uni sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
// MASALAN: sumEvens([1,2,3]) return 2


function sumEvens(array: number[]) {
    const result = array.reduce((accumulator:number, currentValue: number)=>{
        if(currentValue % 2 == 0){
            return accumulator + currentValue
        }
        return accumulator;
    },0);
    return result;
}

let result = sumEvens([1,2,3]);
console.log("Result: ",result);