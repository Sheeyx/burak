// ZI-TASK:

// Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
// MASALAN: delayHelloWorld("Hello World") return "Hello World"

async function delayHelloWorld(message: string) {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
          resolve(message);
      }, 3000);
  });
}

async function main() {
  let result = await delayHelloWorld("Hello World");
  console.log("Result: ", result);
}

main();