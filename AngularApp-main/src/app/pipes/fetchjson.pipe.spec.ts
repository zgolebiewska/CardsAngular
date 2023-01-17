import { FetchjsonPipe } from './fetchjson.pipe';

describe('FetchjsonPipe', () => {
  it('create an instance', () => {
    // @ts-ignore
    const pipe = new FetchjsonPipe();
    expect(pipe).toBeTruthy();
  });
});
