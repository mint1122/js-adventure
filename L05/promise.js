function promisesTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(reject, ms);
    });
}

promisesTimeout(2000)
    .then(() => {
        console.log("Done!!");
        return promisesTimeout(1000);
    })
    .then(() => {
        console.log("Also Done!!");
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error");
    });
