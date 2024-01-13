import { IdentificationCardPipe } from './identification-card.pipe';

describe('CedulaPipe', () => {
  it('create an instance', () => {
    const pipe = new IdentificationCardPipe();
    expect(pipe).toBeTruthy();
  });
});
