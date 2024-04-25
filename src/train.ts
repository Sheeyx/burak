// ZD-TASK:

// Shunday function yozing, uni number, array va number parametrlari bolsin va berilgan 1-parametr numberga teng indexni array ichidan topib 3-parametrdagi raqam bilan almashtirib yangilangan arrayni qaytarsin
// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]



function hangeNumberInArray(i: number, array: number[], newVal: number) {
    if (i >= 0 && i < array.length) {
        const newArray = [...array]; 
        newArray[i] = newVal; 
        return newArray;
    } else {
        return array; 
    }
}

let result = hangeNumberInArray(1, [1,3,7,2], 2) ;
console.log("Result: ",result);