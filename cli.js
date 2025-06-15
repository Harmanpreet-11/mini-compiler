const readline = require('readline');
const { compiler } = require('./compiler');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Lisp-like expression: ', (input) => {
  try {
    const output = compiler(input);
    console.log('Compiled JS Code:\n', output);
  } catch (e) {
    console.error('Error:', e.message);
  }
  rl.close();
});
