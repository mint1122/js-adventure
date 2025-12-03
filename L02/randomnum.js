function generateTempID(){
    const randompart = Math.random().toString(36).substring(2,10);
    return randompart.toUpperCase();
}

const orderID = generateTempID();
console.log(`ID Order: ${orderID}`);