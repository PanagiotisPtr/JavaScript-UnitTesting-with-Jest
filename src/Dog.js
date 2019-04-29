import { Animal } from "./Animal";

class Dog extends Animal {
    constructor(name) {
        super(name, 'woof');
    }
    makeSound() {
        console.log(this.name + ": " + "woof");
    }
}

module.exports = {
    Dog
};