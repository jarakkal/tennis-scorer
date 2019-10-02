class Player {
  constructor(name) {
    this.name = name;
    this.pointsWon = `0`;
    this.gamesWon = 0;
    this.score = 0;
  }
  getName() {
    return `${this.name}`;
  }
  getPoints() {
    return `${this.pointsWon}`;
  }
  setPoints(points) {
    this.pointsWon = points;
  }
  setScore(score) {
    this.score = score;
  }
  addScore(score) {
    this.score += score;
  }
  addPoints() {
    console.log(this.getName()+' scores');
    if(this.pointsWon == `0`) {
      this.setPoints(`15`);
    } else if(this.pointsWon == `15`) {
      this.setPoints(`30`);
    } else if(this.pointsWon == `30`){
      this.setPoints(`40`);
    } else if(this.pointsWon == `40`){
      this.score++;
      this.setPoints(`game`);
    } else if(this.pointsWon == `game`){
      this.setPoints(`win`);
    }
  }
  getScore() {
    return this.score;
  }
}

module.exports = Player;
