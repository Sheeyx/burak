// ZG-TASK:

// Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin. 
// MASALAN: modifyWords('name should be a string') return 'name_should_be_a_string'


function modifyWords(sentence: string) {
    return sentence.split(' ').join('_').toLowerCase();
}

let result = modifyWords('name should be a string');
console.log("Result: ",result);