const kyArr = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }];
const reformattedNames = kyArr.map((member) => {
    return `${member.name} is ${member.age} years old.`;
});
reformattedNames.forEach((info) => console.log(info));
