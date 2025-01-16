export default (num: number): string => {
  const isMultipleOfThree = num % 3 === 0;
  if (isMultipleOfThree) return 'Fizz';
  else if (num === 5) return 'Buzz';
  else return num.toString();
};
