function promisesTimeout(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    console.log("Start");
    await promisesTimeout(2000);
    console.log("Stop!!");
}
run();