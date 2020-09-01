import { ExampleFunction } from './../src/example.js';

describe('ExampleFunction', () => {

  test('should correctly create a journal entry', () => {
    let example = new ExampleFunction(2);
    expect(example.num).toEqual(2);
  });
});