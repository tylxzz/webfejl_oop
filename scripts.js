class Player {
    constructor(nickname) {
        this.nickname = nickname;
        this.playedMatch = 0
    };
}


Player.prototype.play = function() {
    this.playedMatch++;
    console.log(this.nickname + ` played ` + this.playedMatch + ` matches`);
};

Player.prototype.getTierLevel = function(){
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
}

Person.prototype.getName = function() {
    console.log(this.name);
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