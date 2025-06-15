const { compiler } = require('./compiler');

const input = '(add 2 (subtract 4 2))';
const output = compiler(input);

console.log('Compiled Output:\n', output);
