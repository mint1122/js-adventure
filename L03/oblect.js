const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: true,

    checKout: function() {
        this.isAvailable = false;
    },

    checKIn: function() {
        this.isAvailable = true;
    }
};
console.log(book.isAvailable);
book.checKout();
console.log(book.isAvailable);
book.checKIn();
console.log(book.isAvailable);

