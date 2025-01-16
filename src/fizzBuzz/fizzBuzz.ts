export default (num: number): string => {
  const isMultipleOfThree = num % 3 === 0;
  const isMultipleOfFive = num % 5 === 0;
  const isMultipleOfSeven = num % 7 === 0;
  if (isMultipleOfFive && isMultipleOfThree) return 'FizzBuzz';
  if (isMultipleOfThree && isMultipleOfSeven) return 'FizzBang';
  if (isMultipleOfSeven) return 'Bang';
  if (isMultipleOfThree) return 'Fizz';
  if (isMultipleOfFive) return 'Buzz';
  return num.toString();
};
