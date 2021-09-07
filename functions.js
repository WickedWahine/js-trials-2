"use strict";


// 1. isHometown
function isHometown(town) {

    if (town === 'San Francisco') {
        return true;
    }
}

console.log(isHometown('San Francisco'))
console.log(isHometown('San'))

// 2. getFullName
function getFullName (firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log(getFullName('Dennis', 'The Menace'))

// 3. calculateTotal
function calculateTotal(basePrice, tax=0.05, state) {
    
    const subtotal = basePrice * (1 + tax);

    let fee = 0;
    if (state === 'CA') {
        fee = 0.03 * subtotal;
    }
    else if (state === 'PA') {
        fee = 2;
    }    
    else if (state === 'MA') {
        if (basePrice <= 100) {
            fee = 1;
        }
        else {
            fee = 3;
        }
    }

    return subtotal + fee;
}

console.log(calculateTotal(100, 0.1, 'CA'))
console.log(calculateTotal(100, 0.1, 'PA'))
console.log(calculateTotal(100, 0.1, 'MA'))
console.log(calculateTotal(1000, 0.1, 'CA'))