// === jeu de dé === //

// Play game
describe('Start new game with two players', () => {
    let currentScore = 0
    let globalScore = 0

    it('Should be reset current score', () => {
        expect(currentScore).toBe(0)
    })

    it('Should be reset global score', () => {
        expect(globalScore).toBe(0)
    })
})
