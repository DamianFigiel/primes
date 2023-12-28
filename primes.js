const fs = require('fs');
const seenNumbersFile = 'seenNumbers.txt';

if(process.argv.includes('-h') || process.argv.includes('--help')) {
  console.log(`
  Usage: node primies.js <number> 
  
  number: a positive integer
  `);
  process.exit(0);
}

const inputNumber = parseInt(process.argv[2], 10);
if(isNaN(inputNumber) || inputNumber <= 0 || /.*\D+.*/.test(process.argv[2])) {
  console.log('Invalid input. Please provide a positive integer.');
} else {
  const primesUpToInput = getPrimesUpTo(inputNumber);
  const result = markSeenNumbers(primesUpToInput);
  console.log(result);
}

/**
 * Function to check if a number is a prime number.
 * @param {number} num - number to check if it's a prime number.
 * @returns {boolean} - true if num is prime number, false otherwise.
 */
function isPrime(num) {
  if(num <= 1) return false;
  
  let sqrt = Math.sqrt(num);
  for(let i = 2; i <= sqrt; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Function to get all prime numbers up to a given number.
 * @param {number} num - number to get primes up to. 
 * @returns {array} - array of prime numbers up to num.
 */
function getPrimesUpTo(input) {
  let primes = [];

  for(let i = 2; i <= input; i++) {
    if(isPrime(i)) primes.push(i);
  }

  return primes;
}

/**
 * Function to mark seen numbers with '*' and save them to a file.
 * @param {array} primes - array of prime numbers.
 * @returns {string} - string of prime numbers sepearated with ' ' with seen numbers marked with '*'.
 */
function markSeenNumbers(primes) {
  let seenNumbers = [];
  if(fs.existsSync(seenNumbersFile)) {
    seenNumbers = fs.readFileSync(seenNumbersFile, 'utf8').split(',').map(Number);
  }

  primes.forEach((prime, index) => {
    if(seenNumbers.includes(prime)) {
      primes[index] = prime + '*';
    } else {
      seenNumbers.push(prime);
    }
  });

  fs.writeFileSync(seenNumbersFile, seenNumbers.join(','), 'utf8');
  return primes.join(' ');
}
