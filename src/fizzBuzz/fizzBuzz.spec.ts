import  fizzBuzz from './fizzBuzz';

describe('FizzBuzz', () => {
  it('input 1 should get 1', () => {
    // arrange
    const input = 1;
    const expected = '1';

    // act
    const actual = fizzBuzz(input);

    // assert
    expect(actual).toBe(expected);
  });

  it('input 2 should get 2', () => {
    // arrange
    const input = 2;
    const expected = '2';

    // act
    const actual = fizzBuzz(input);

    // assert
    expect(actual).toBe(expected);
  });

  it('input 3 should get Fizz', () => {
    // arrange
    const input = 3;
    const expected = 'Fizz';

    // act
    const actual = fizzBuzz(input);

    // assert
    expect(actual).toBe(expected);
  });

  it('input 4 should get 4', () => {
    // arrange
    const input = 4;
    const expected = '4';

    // act
    const actual = fizzBuzz(input);

    // assert
    expect(actual).toBe(expected);
  });

  it('input 5 should get Buzz', () => {
    // arrange
    const input = 5;
    const expected = 'Buzz';

    // act
    const actual = fizzBuzz(input);

    // assert
    expect(actual).toBe(expected);
  })

  it('input 6 should get Fizz', () => {
    // arrange
    const input = 6;
    const expected = 'Fizz';

    // act
    const actual = fizzBuzz(input);

    // assert
    expect(actual).toBe(expected);
  })

  it('input 9 should get Fizz', () => {
    // arrange
    const input = 9;
    const expected = 'Fizz';

    // act
    const actual = fizzBuzz(input);

    // assert
    expect(actual).toBe(expected);
  })
});
