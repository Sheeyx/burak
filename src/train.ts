// J-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"


function findLongestWord(str: string){
    let changedStr = str.split(" ");
    let max = 0;
    let lStr = " ";
    for(let i=0; i<changedStr.length; i++){
      if(max < changedStr[i].length){
        max = changedStr[i].length;
        lStr = changedStr[i]; 
      }
    }
    
    return lStr;
  }
  
  let result = findLongestWord("I come from Uzbekistan") 
  console.log(result);