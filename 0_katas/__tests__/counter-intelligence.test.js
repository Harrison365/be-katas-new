const { counterIntelligence } = require('../counter-intelligence');

describe('counterIntelligence()', () => {
  it('should decode x', () => {
    expect(counterIntelligence('Y')).toBe('X');
  });
  it('should decode a single letter', () => {
    expect(counterIntelligence('BCD Y')).toBe('ABC X');
  });
  it('should handle multiple words with a bigger shift value', () => {
    expect(counterIntelligence('NKRRU YCKKZNKGXZ D')).toBe(
      'HELLO SWEETHEART X'
    );
  });
  it('should be able to handle punctuation', () => {
    expect(
      counterIntelligence(
        'ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G'
      )
    ).toBe(
      'REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X'
    );
  });
  it('should decode regardless of casing', () => {
    expect(counterIntelligence('ngbk g toik jge :) d')).toBe(
      'HAVE A NICE DAY :) X'
    );
  });
  it('should decode if it underflows', () => {
    expect(counterIntelligence('Rovvy Ofobiyxo H')).toBe('HELLO EVERYONE X');
  });
});
