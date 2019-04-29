class Animal {
    constructor(name, sound) {
        if(name === '')
            throw new Error('name cannot be empty!');
        if(sound == '')
            throw new Error('sound cannot be empty!');
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.name + ': ' + this.sound);
    }
}

module.exports = {
    Animal
};