// L-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";





function reverseSentence(str: string) {
  const strArr: string[] = str.split(' ');
  
  for(let i=0; i<strArr.length; i++){
    strArr[i] = strArr[i].split('').reverse().join('');
  }
  
  return strArr;
}

let result = reverseSentence("we like coding!");
console.log("Vowels are: ",result);