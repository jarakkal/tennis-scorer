const Player = require('./player');

class Match {
  constructor(playerOne, playerTwo) {
    const _playerOne = new Player(playerOne);
    const _playerTwo = new Player(playerTwo);
    this.players = [_playerOne, _playerTwo];
    this.points = `0-0`;
    this.scores = `0-0`;
    this.gameOver = '';
    this.isTie = false;
  }

  pointWonBy(playerName) {
    // method to update points to a player
    let winningPlayer, losingPlayer;
    this.players.forEach((p) => {
      if (p.getName() === playerName) {
        winningPlayer = p;
        if(this.isTie) {
          winningPlayer.addScore(1);
        } else {
          winningPlayer.addPoints();
        }

      } else {
        losingPlayer = p;
      }
    });

    this.points = this.formatPoints(winningPlayer, losingPlayer);
    this.updatePlayerPoints();
    this.updatePlayerScores();
  }

  formatPoints(winningPlayer, losingPlayer) {
    // method to format the points
    const winningPlayerPoints = winningPlayer.getPoints();
    const losingPlayerPoints = losingPlayer.getPoints();

    if(winningPlayerPoints == `game` && losingPlayerPoints != `game`) {
      if(losingPlayerPoints == `40`) {
        winningPlayer.addScore(-1);
        return `Advantage ${winningPlayer.getName()}`;
      } else {
        return ``;
      }
    } else if(winningPlayerPoints == `game` && losingPlayerPoints == `game`) {
      winningPlayer.addScore(-1);
      return `Duece`;
    } else if( winningPlayerPoints == `40` && losingPlayerPoints == `40` ) {
      return `Duece`;
    } else if(winningPlayerPoints == `win` || losingPlayerPoints == `win`) {
      winningPlayer.addScore(1);
      return ``;
    } else {
      return `${this.players[0].getPoints()}-${this.players[1].getPoints()}`;
    }
  }

  updatePlayerPoints() {
    if(this.points == `Duece`) {
      this.players[0].setPoints(`40`);
      this.players[1].setPoints(`40`);
    } else if(this.points == ``) {
      this.players[0].setPoints(`0`);
      this.players[1].setPoints(`0`);
    }
  }

  updatePlayerScores() {
    const playerOneScore = this.players[0].getScore();
    const playerTwoScore = this.players[1].getScore();
    this.scores = `${this.players[0].getScore()}-${this.players[1].getScore()}`;
    this.scores += (this.points != `` && !this.isTie) ? `, ${this.points}` : ``;

    if(playerOneScore == 6 && playerTwoScore <= 4) {
      this.scores = this.players[0].getName() + ' has won the set';
    } else if(playerTwoScore == 6 && playerOneScore <= 4) {
      this.scores = this.players[1].getName() + ' has won the set';
    } else if(playerOneScore == 7 && playerTwoScore == 5) {
      this.scores = this.players[0].getName() + ' has won the set';
    } else if(playerTwoScore == 7 && playerOneScore == 5) {
      this.scores = this.players[1].getName() + ' has won the set';
    } else if(playerOneScore == 6 && playerTwoScore == 6) {
      this.isTie = true;
      this.players[0].setScore(0);
      this.players[1].setScore(0);
    }
  }

  getScore() {
    return this.scores;
  }

  score() {
    console.log(`${this.scores}\n`);
  }
}

module.exports = Match;
