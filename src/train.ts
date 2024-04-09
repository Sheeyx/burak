// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]



function chunkArray(array:number[], count:number){
    const num = array.length / 3;
    const arr = [];
    for(let i = 0; i < num; i++){
        arr.push(array.splice(0,count));
    }
    return arr;
}

let result = chunkArray([1,2,3,4,5,6,7,8,9,10], 3);
console.log("Result: ",result);