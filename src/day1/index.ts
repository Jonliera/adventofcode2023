//import the file system module
import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: fs.createReadStream('./input.txt'),
});

function findFirstAndLastNumbers(str: any) {
  const numbers = str
    .split('')
    .filter((char: any) => !isNaN(parseInt(char)))
    .map(Number);

  const firstNumber = numbers[0] ?? null;
  const lastNumber = numbers[numbers.length - 1] ?? null;
  const concatenatedNumber = parseInt(
    `${firstNumber || ''}${lastNumber || ''}`
  );

  return { firstNumber, lastNumber, concatenatedNumber };
}

let totalSum = 0;

rl.on('line', (line) => {
  const result = findFirstAndLastNumbers(line);
  console.log(result);
  const sum = result.concatenatedNumber;
  totalSum += sum;

  // const sum = result.firstNumber + result.lastNumber;
  // totalSum += sum;
});

rl.on('close', () => {
  console.log('Done reading file');
  console.log('Total Sum:', totalSum);
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(
    `The script uses approximately ${Math.round(used * 100) / 100} MB`
  );
});
