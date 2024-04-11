// X-TASK:

// Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
//  MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2


function countOccurrences(obj: { [key: string]: any }, key: string): number {
    let count = 0;
    for (let value in obj) {
        if (obj.hasOwnProperty(value)) {
            if (typeof obj[value] === 'object') {
                count += countOccurrences(obj[value], key);
            } else if (value === key) {
                count++;
            }
        }
    }
    return count;
}

let result = countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model');
console.log("Result: ",result);