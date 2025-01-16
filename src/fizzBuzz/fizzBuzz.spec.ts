import  fizzBuzz from './fizzBuzz';

describe('FizzBuzz', () => {
  it.each`
    input | expected
    ${1}  | ${'1'}
    ${2}  | ${'2'}
    `(
      `should be $expected when is not match rule ($input)`,
      ({ input, expected }: { input: number; expected: string }) => {
        // Act
        const actual = fizzBuzz(input);
        
        // Assert
        expect(actual).toBe(expected);
      });

  it.each`
    input
    ${3}
    ${6}
    ${9}
  `(
    `should be Fizz when it is multiply by 3 ($input)`,
    ({ input }: { input: number }) => {
      // Act
      const actual = fizzBuzz(input);

      // Assert
      expect(actual).toBe('Fizz');
    });

  it.each`
    input
    ${5}
    ${10}
  `(
    `should be Buzz when it is multiply by 5 ($input)`,
    ({ input }: { input: number }) => {
      // Act
      const actual = fizzBuzz(input);

      // Assert
      expect(actual).toBe('Buzz');
    });
});
