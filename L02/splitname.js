const fullName = "  Thipsuda Sungngoen  ";
const cleanedName = fullName.trim();
const nameParts = cleanedName.split(' ');
const finalPasts = nameParts.filter(Boolean);
const firsName = finalPasts[0];

console.log(`Hello, ${firsName}!`);