// ZA-TASK:

// Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin. 
// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]


function sortByAge(arr: { age: number }[]): { age: number }[] {
    return arr.sort((a, b) => a.age - b.age);
}

let result = sortByAge([{age:23}, {age:21}, {age:13}]);
console.log("Result: ",result);