const { it, expect } = require("@jest/globals");
const orderTotal = require("./order-total");

// it('works', () => {
//     expect(1).toBe(2);
// })

it('Quantity', () => 
    expect(orderTotal({
        items: [
            { 'name': 'Dragon candy', price: 2, quantity: 3 }
        ]
    })).toBe(6))

it('No quantity specified', () =>
    expect(orderTotal({
        items: [
            { 'name': 'Dragon candy', price: 2, quantity: 3 }
        ]
    })).toBe(6))

it('Happy path (Example 1)', () =>
    expect(orderTotal({
        items: [
            { name: 'Dragon food', price: 8, quantity: 1 },
            { name: 'Drgaon cage (small)', price: 800, quantity: 1 }
        ]
    })).toBe(808));

it('Happy path (Example 2)', () =>
    expect(orderTotal({
        items: [
            { name: 'Dragon food', price: 20, quantity: 1 },
            { name: 'Drgaon cage (small)', price: 40, quantity: 1 }
        ]
    })).toBe(60));