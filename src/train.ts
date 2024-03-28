// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;


function calculate(str:string) {
  
  const numbers: number[] = str.split('').filter(val => !isNaN(Number(val))).map(Number);
  let count = 0;
  
  for(let i = 0; i<numbers.length; i++){
    count = count + numbers[i];
  }

  return count;
}

let result = calculate("1+3")
console.log("Result: ",result);