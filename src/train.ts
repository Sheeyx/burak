// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2



function missingNumber(arr: number[]) {
    const num = arr.sort()
  
  for(let i = num[0]; i<num[num.length-1]; i++){
    if(num[i] !== i){
      return i;
    }
  }
}

let result = missingNumber([3, 0, 1])
console.log("Result: ",result);