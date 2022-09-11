// === jeu de dé === //

// Play game and reset score //
describe('Start new game with two players', () => {
    let currentScore = 50
    let globalScore = 45

    function resetToZero(globalScore, currentScore) {
        return globalScore = 0, currentScore = 0
    }

    it('Should be reset current score', () => {
        expect(resetToZero(globalScore)).toBe(0)
    })

    it('Should be reset global score', () => {
        expect(resetToZero(currentScore)).toBe(0)
    })
})

// Roll Dice //
describe('Click on roll dice must return number between 1 - 6', () => {

    function randomNumber() {
        return Math.round(Math.random() * (6 - 1)) + 1;
      }

    it('Should return a number between 1 - 6', () => {
        expect(randomNumber()).toBeLessThanOrEqual(6)
        expect(randomNumber()).toBeGreaterThan(0)
    })
})

// hold //
describe('Click on hold must push current score in global', () => {
    let globalScore = 10;
    let currentScore = 16

    let pushInGlobal = () => {
       return globalScore += currentScore
    }

    it('Should add current score to global', () => {
        expect(pushInGlobal()).toBe(26)
    })
})

// EndGame //
describe('EndGame for stop game and alert players', () => {
    let joueurActifGlobalScore = 102;

    function endGame() {
        return joueurActifGlobalScore >= 100
    }

    it('Should be true for stop the game', () => {
        expect(endGame()).toBeTrue()
    })
});