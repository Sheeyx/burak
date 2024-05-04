// ZH-TASK:

// Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]

function findDisappearedNumbers(nums: number[]) {
    const length = nums.length;
    const result: number[] = [];
    
    for (let i = 0; i < length-1; i++){
        for(let j = nums[i]; j<nums[i+1]; j++){
          if(!(nums.includes(j))){
            result.push(j);
          }
        }
      }
    
    return result;
}

let result = findDisappearedNumbers([1, 3, 4, 7]);
console.log("Result: ", result);
