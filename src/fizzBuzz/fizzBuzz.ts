export default (num: number): string => {
  const isMultipleOfThree = num % 3 === 0;
  const isMultipleOfFive = num % 5 === 0;
  if (isMultipleOfFive && isMultipleOfThree) return 'FizzBuzz';
  if (isMultipleOfThree) return 'Fizz';
  else if (isMultipleOfFive) return 'Buzz';
  else return num.toString();
};
