function factorial(number) {
    if (number == 0)
        return 1;
    
    return number * factorial(number - 1);
}

// Exemplos
console.log(`0! = ${factorial(0)}`);
console.log(`1! = ${factorial(1)}`);
console.log(`2! = ${factorial(2)}`);
console.log(`3! = ${factorial(3)}`);
console.log(`4! = ${factorial(4)}`);
console.log(`5! = ${factorial(5)}`);