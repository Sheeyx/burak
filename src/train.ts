// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false


function hasProperty(obj: { [key: string]: any }, str:string) {
  for (let key in obj) {
    if(key === str){
      return true;
    } 
    return false;
  }
}

let result = hasProperty({name: "BMW", model: "M3"}, "name")
console.log("Result: ",result);