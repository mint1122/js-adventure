const names = ['Alice', 'Bob', 'Charlie'];

const greetings = names.map((mamber) => {
    return mamber + 'joined the contest.';
});
greetings.forEach(greeting => console.log(greeting));