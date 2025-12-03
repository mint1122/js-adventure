const stattTime = Date.now();
function someHeavyTask(){
    let result = 0;
}

const endTime = Date.now();
const duration = endTime - stattTime;
console.log(`Duration: ${duration} ms`);