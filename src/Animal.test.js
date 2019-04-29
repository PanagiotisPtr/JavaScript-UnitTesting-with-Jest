import { Animal } from "./Animal";

let logs = '';
const record = inputs => { logs += inputs; }

test('Test base case', () => {
    logs = '';
    console['log'] = jest.fn(record);
    const a = new Animal('Shara','meow');
    a.makeSound();
    expect(logs).toEqual('Shara: meow');
});

test('Test with unicode', () => {
    logs = '';
    console['log'] = jest.fn(record);
    const a = new Animal('Σκύλος','γαβ');
    a.makeSound();
    expect(logs).toEqual('Σκύλος: γαβ');
});

test('Test empty name', () => {
    expect(() => {
        const a = new Animal('', 'meow');
    }).toThrow(Error);
});

test('Test empty sound', () => {
    expect(() => {
        const a = new Animal('Shara','');
    }).toThrow(Error);
});

test('Test empty name and sound', () => {
    expect(() => {
        const a = new Animal('','');
    }).toThrow(Error);
});