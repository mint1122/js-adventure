function who() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🤡!");
        }, 2000);
    });
}

function that() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("lurks");
        }, 300);
    });
}

function where() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("in the shadows");
        }, 500);
    });
}

async function msg() {
    const w = await who();
    const t = await that();
    const r = await where();
    console.log(`${w} ${t} ${r}`);
}
console.log("We are looking for:")
msg();
console.log("Hello?");