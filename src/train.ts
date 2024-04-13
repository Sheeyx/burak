// Y-TASK:

//  Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]


function findIntersection(arr1: number[], arr2: number[]): number[] {
    const array1 = new Set(arr1);
    const array2 = new Set(arr2);
    const intSec = Array.from(array1).filter(x => array2.has(x));
    return intSec;
}

let result = findIntersection([1,2,3], [3,2,0]);
console.log("Result: ",result);