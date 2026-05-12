const fs = require('fs');
const content = fs.readFileSync('index.js', 'utf8');

let openBraces = 0;
let closeBraces = 0;

for (let char of content) {
    if (char === '{') openBraces++;
    if (char === '}') closeBraces++;
}

console.log(`Open: ${openBraces}, Close: ${closeBraces}`);
if (openBraces > closeBraces) {
    console.log(`Missing ${openBraces - closeBraces} closing braces.`);
} else if (closeBraces > openBraces) {
    console.log(`Missing ${closeBraces - openBraces} opening braces.`);
} else {
    console.log('Braces match.');
}
