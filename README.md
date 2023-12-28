# Prime Numbers Checker

A simple Node.js program that checks and marks prime numbers, saving the seen numbers to a file.

## Usage

```bash
node primes.js <number>
```

- `<number>`: A positive integer.

## Options

- `-h`, `--help`: Show usage information.

## Example

```bash
node primes.js 10
```

## Description

The program takes a positive integer as input and calculates all prime numbers up to that number. It then marks the prime numbers that have been previously seen (stored in a file) with an asterisk ('*') and saves the updated list to the file. The result is displayed in the console.

## Functions

### `isPrime(num)`

- Checks if a number is a prime number.
- **Parameters:**
  - `num` (number): The number to check.
- **Returns:**
  - `true` if `num` is a prime number, `false` otherwise.

### `getPrimesUpTo(input)`

- Gets all prime numbers up to a given number.
- **Parameters:**
  - `input` (number): The number to get primes up to.
- **Returns:**
  - An array of prime numbers up to `input`.

### `markSeenNumbers(primes)`

- Marks seen numbers with '*' and saves them to a file.
- **Parameters:**
  - `primes` (array): An array of prime numbers.
- **Returns:**
  - A string of prime numbers separated with ' ' where seen numbers are marked with '*'.

## File Handling

The program uses the file `seenNumbers.txt` to store previously seen prime numbers. If the file doesn't exist, it will be created.

## Examples

### Example 1:

```bash
node primes.js 20
```

Output:

```
2 3 5 7 11 13 17 19
```

### Example 2:

```bash
node primes.js -h
```

Output:

```
Usage: node primes.js <number> 

number: a positive integer
```

## Notes

- The program performs input validation to ensure that a valid positive integer is provided.
- The file `seenNumbers.txt` is used to persistently store seen prime numbers.