var expect  = require('chai').expect;
var Match = require('../match');

var newMatch = new Match('player 1', 'player 2');
let playerOnePoints, playerTwoPoints, matchScore;

describe('add points and get score', function() {
    describe ('add points', function() {
        it('points 15', function(done){
            newMatch.pointWonBy('player 1');
            playerOnePoints = newMatch.players[0].getPoints();
            expect(playerOnePoints).to.equal('15');
            done();
        });
        it('points 30', function(done){
            newMatch.pointWonBy('player 1');
            playerOnePoints = newMatch.players[0].getPoints();
            expect(playerOnePoints).to.equal('30');
            done();
        });
        it('points Duece', function(done){
            newMatch.pointWonBy('player 1');
            newMatch.pointWonBy('player 2');
            newMatch.pointWonBy('player 2');
            newMatch.pointWonBy('player 2');
            playerTwoPoints = newMatch.players[1].getPoints();
            expect(playerTwoPoints).to.equal('40');
            done();
        });
    });

    describe ('get score', function(done) {
        it('scores', function(done){
            matchScore = newMatch.getScore();
            expect(matchScore).to.equal('0-0, Duece');
            done();
        });

    });
});
