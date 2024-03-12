// K-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;



function countVowels(str: string) {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  const strArr: string[] = str.split('');
  
  const findVowel: string[] = strArr.filter((elem: string) =>
    vowels.includes(elem)
  );
  
  return findVowel.length;
}

let result = countVowels("string");
console.log("Vowels are: ",result);