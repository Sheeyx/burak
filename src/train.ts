// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

let nums = "";

function getPositive(array: number[]){
    array.forEach(element => {
        if(element>0){
            nums += element.toString();
        }
    });

    return nums;
}

let result = getPositive([1, -4, 2,5,6,-7]);

console.log(result);
