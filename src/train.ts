/*H-TASK: 

Shunday function tuzing, u string qabul qilib teskari qilib return qilsin
MASALAN: gerReverse("hello") return qiladi "olleh"

@MITASK
*/

function gerReverse(str: string){
    return str.split('').reverse().join('');
}

const result = gerReverse("hello");
console.log(result);