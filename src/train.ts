// N-TASK: 

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;




function palindromCheck(str: string) {
  let reverse = str.split("").reverse().join("");
  if(str === reverse){
    return true;
  } else {
    return false
  }
}

let result = palindromCheck("son");
console.log("Result: ",result);