function sum_to_n(n: number): number {
    return (n * (n + 1)) / 2;
}

function sum_to_n_2(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sum_to_n_3(n: number): number {
    if (n <= 1) return n;
    return n + sum_to_n_3(n - 1);
}

// Get input from command line
const input = process.argv[2];
const n = parseInt(input);

if (isNaN(n)) {
    console.error("Please provide a valid integer.");
    process.exit(1);
}

console.log(`Sum from 1 to ${n} is: ${sum_to_n(n)}`);
console.log(`Sum from 1 to ${n} is: ${sum_to_n_2(n)}`);
console.log(`Sum from 1 to ${n} is: ${sum_to_n_3(n)}`);