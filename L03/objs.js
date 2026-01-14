const bookObj = {
    title: "Becoming",
    author: "Michelle Obama",
    isAvailable: true,
};

const bookjson = JSON.stringify(bookObj);
console.log(bookjson);  //{"title":"Becoming","author":"Michelle Obama","isAvailable":true}
console.log(typeof bookjson); //string

const recoveredBookObj = JSON.parse(bookjson);
console.log(recoveredBookObj.author); //Michelle Obama
console.log(typeof recoveredBookObj); //object