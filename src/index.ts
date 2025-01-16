import fizzBuzz from './fizzBuzz/fizzBuzz';

Array.from({ length: 100 }).map((_,i) => i +1).map(fizzBuzz).forEach((result) => console.log(result))
