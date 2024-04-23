// ZC-TASK:

// Shunday function yozing, uni number parametri bolsin va function qabul parametrni selsiy miqdori sifatida qabul qilib uni farenhitga ozgartirib bersin
// MASALAN: celsiusToFahrenheit(0) return 32

function celsiusToFahrenheit(celsius:number) {
    return (celsius * 9 / 5) + 32;
}

let result = celsiusToFahrenheit(0);
console.log("Result: ",result);