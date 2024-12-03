class Player {
    constructor(nickname) {
        this.nickname = nickname;
        this.playedMatch = 0
    };
    
    play() {
        this.playedMatch++;
        console.log(this.nickname + ` played ` + this.playedMatch + ` matches`);
    };

    getTierLevel() {
        if(this.playedMatch <= 3) {
            return 'A';
        }
        else if(this.playedMatch <= 6) {
            return 'B';
        }
        else {
            return 'C';
        }
    }
}

function printTierLevel(Player) {
    console.log(Player.nickname + ' is in the ' + Player.getTierLevel() + ' tier.');
};

const player = new Player('Messi');
player.play();
printTierLevel(player);

class Person { 
    constructor(name) {
        this.name = name;
    }

    getName() {
        console.log(this.name);
    }
}


class Student extends Person {
    constructor(name, school) {
        super(name);
        this.school = school;
    }
}

const ember = new Person('Géza');
const tanulo = new Student('Géza', 'Bolyai');
console.log(tanulo.name, tanulo.school);
ember.getName();

class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }

    makeSound() {
        console.log(`${this.name ? this.name : 'The animal'} makes a sound: ${this.voice}`);
    }
}

class Bird extends Animal {
    constructor(name, voice) {
        super(name, voice);
    }

    fly() {
        console.log(`${this.name ? this.name : 'The bird'} is flying.`);
    }
}

class Mammal extends Animal {
    constructor(name, voice) {
        super(name, voice);
    }

    walk() {
        console.log(`${this.name ? this.name : 'The mammal'} is walking.`);
    }
}

const varju = new Bird('Odin', 'kár kár kár');
const medve = new Mammal('Maci Laci', 'roar');

varju.makeSound();
varju.fly();

medve.makeSound();
medve.walk();