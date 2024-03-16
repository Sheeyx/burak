// M-TASK: 

// Shunday function yozing, u raqam lard an tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];


function getSquareNumbers(array: number[]) {
  const myArray: Object[] = [];
  for (let i = 0; i < array.length; i++) {
    myArray.push({ key: array[i], value: Math.pow(array[i],2) });
  }
  return myArray;
}

let result = getSquareNumbers([1, 2, 3]);
console.log("Result ",result);