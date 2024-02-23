/*G-TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini. */

function getHighestIndex(array: number[]){
    let max = 0;
    array.forEach((element: number) => {
        if (element > max) {
            max = element;
        }
    });
    return array.indexOf(max);
}

const result = getHighestIndex([5, 21, 12, 21, 8]);

console.log("Result: ",result);
