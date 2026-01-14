function promisesTimeout(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation() {
    return 42;
}
async function run() {
    console.log("Start");
    await promisesTimeout(2000);
    const result = await longRunningOperation();
    console.log(`Result: ${result}`);
    console.log("Stop!!");}
run();