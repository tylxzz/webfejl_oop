function Player(nickname) {
    this.nickname = nickname;
    this.playedMatch = 0
};

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

function printTierLevel(playerName, tierLevel) {
    console.log(playerName + ' is in the ' + tierLevel + ' tier.');
};

const player = new Player('Messi');
player.play();
printTierLevel('Lionel Messi', player.getTierLevel());