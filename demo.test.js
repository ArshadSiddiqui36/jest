// test('two plus two is four', () => {
//     expect(2 + 2).toBe(4);
// });


// test('object assignment', () => {
//     const data = { one: 1 };
//     data['two'] = 2;
//     expect(data).toEqual({ one: 1, two: 2 });
// });


// test('null is falsy', () => {
//     const n = null;
//     expect(n).toBeFalsy();
// });


// test('zero is falsy', () => {
//     const n = 0;
//     expect(n).toBeFalsy();
// });


// test('one is falsy?', () => {
//     const n = 1;
//     expect(n).toBeFalsy();
// });

// test('one is truthy', () => {
//     const n = 1;
//     expect(n).toBeTruthy();
// });

// const myFunction = require('./demo');
// test('throws on invalid input', () => {
//     expect(() => {
//         myFunction('abcd');
//     }).toThrow();
// });


// const fetchData = require('./demo');

// test('The data is Peanut Butter', done => {
//     function callback(data) {
//         try {
//             expect(data).toBe('Peanut Butter');
//             done();
//         } catch (error) {
//             done(error);
//         }
//     }

//     fetchData(callback);
// });


const fetchPromise = require('./demo');

// test('The data is Peanut Butter', () => {
//     return expect(fetchPromise()).resolves.toBe('Peanut Butter');
// });

// test('The fetch fails with an error', () => {
//     return expect(fetchPromise()).rejects.toThrow('error');
// });

// test('The data is Peanut Butter', async () => {
//     const data = await fetchPromise();

//     expect(data).toBe('Peanut Butter');
// })

// const mockCallback = jest.fn(x => 42 +x);
// mockCallback(0);
// mockCallback(1);

// test('mock implementation of basic function', () => {
//     const mock = jest.fn(x => 42 + x);
//     expect(mock(1)).toBe(43);
//     expect(mock).toHaveBeenCalledWith(1);
// });

test('spying on a method of an object', () => {
    const video = {
        play() {
            return true;
        }
    }

    const spy = jest.spyOn(video, 'play');
    video.play();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
});


(() => console.log("Self Called"))();
