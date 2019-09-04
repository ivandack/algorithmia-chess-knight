const expect = require('chai').expect;
const { algorithm, BOARD_SIZE } = require('./index');

describe('Chess knight movement', () => {

  describe('Borderline cases', () => {

    it('should get 1 for k=0 from any position', () => {
      for (let x = 0; x < BOARD_SIZE; x++) {
        for (let y = 0; y < BOARD_SIZE; y++) {
          const result = algorithm(x, y, 0);
          expect(result, `Expected 1 from (${x},${y})`).to.equal(1);
        }
      }
    });

    it('should get 0 for k=1 and initial (1, 1)', () => {
      const result = algorithm(1, 1, 1);
      expect(result, `Expected 0 from (1, 1)`).to.equal(0);
    })
  });

  describe('Known cases', () => {

    it('should get 2/8 for k=1 starting from (0, 0)', () => {
      const result = algorithm(0, 0, 1);
      expect(result).to.equal(2/8);
    });

    it('should get 4/64 for k=2 starting from (0, 0)', () => {
      const result = algorithm(0, 0, 2);
      expect(result).to.equal(4/64);
    });

  })

});
