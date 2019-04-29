import { merge } from "./merge";

test('check empty and non-empty', () => {
    expect(merge([], [1,2,3])).toEqual([1,2,3]);
});

test('test both empty', () => {
    expect(merge([], [])).toEqual([]);
});

test('check negative numbers', () => {
    expect(merge([-1,1,-31], [-19,19,22])).toEqual([-1,1,-31,-19,19,22]);
});

test('check string list', () => {
    expect(merge(["hello","World"], ["Goodbye","Universe"])).toEqual(["hello","World","Goodbye","Universe"]);
});