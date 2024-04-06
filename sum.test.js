const sum = require('./sum');

// test('description', testFunction);
test('Add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// test('Add 1 + 2 to not equal 4', () => {
//     expect(sum(1, 2)).not.toBe(4);
// });

// ========================================
