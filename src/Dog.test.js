import { Dog } from "./Dog";

let logs = '';
const record = inputs => { logs += inputs; }

test('Base Case', () => {
    logs = '';
    console['log'] = jest.fn(record);
    const d = new Dog('Cookie');
    d.makeSound();
    expect(logs).toEqual('Cookie: woof');
});

test('Test with unicode', () => {
    logs = '';
    console['log'] = jest.fn(record);
    const d = new Dog('Σκύλος');
    d.makeSound();
    expect(logs).toEqual('Σκύλος: woof');
});

test('Test empty name', () => {
    expect(() => {
        const d = new Dog('');
    }).toThrow(Error);
});