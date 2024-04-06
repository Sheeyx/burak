// V-TASK:

// Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}


function countChars(str: string): { [key: string]: number } {
    const numCount: { [key: string]: number } = {};
    for (let num of str) {
        numCount[num] = (numCount[num] || 0) + 1;
    }
    return numCount;
}

let result = countChars("hello");
console.log("Result: ",result);