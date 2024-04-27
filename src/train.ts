// ZE-TASK:

// Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'


function removeDuplicate(str: string) {
    return str
        .split('')
        .filter((char, index, self) => self.indexOf(char) === index)
        .join('');
}

let result = removeDuplicate('stringg');
console.log("Result: ",result);