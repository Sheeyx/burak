// T-TASK:

// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]





function mergeSortedArrays(arr1: number[],arr2: number[]) {
    const num = arr1.concat(arr2).sort((a, b) => a - b);
    return num;
}

let result = mergeSortedArrays([0,3,4,31], [4,6,30]);
console.log("Result: ",result);