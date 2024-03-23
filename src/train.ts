// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]



function objectToArray(obj: { [key: string]: any }): [string, string][] {
  let array: [string, string][] = [];
  for (let key in obj) {
    array.push([key, `${obj[key]}`]);
  }
  return array;
}

let result = objectToArray( {a: 10, b: 20})
console.log("Result: ",result);