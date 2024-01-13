import { DecodeJwtPipe } from './decode-jwt.pipe';

describe('DecodeJwtPipe', () => {
  it('create an instance', () => {
    const pipe = new DecodeJwtPipe();
    expect(pipe).toBeTruthy();
  });
});
