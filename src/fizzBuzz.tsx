import { FC } from 'react';

interface FizzBuzzProps {
  number: number;
}

export const FizzBuzz: FC<FizzBuzzProps> = ({ number }) => {
  const calculateFizzBuzz = (n: number): string => {
    const isDivisibleByThree = n % 3 === 0;
    const isDivisibleByFive = n % 5 === 0;
    
    if (isDivisibleByThree && isDivisibleByFive) return "FizzBuzz"
    if (isDivisibleByThree) return "Fizz"
    if (isDivisibleByFive) return "Buzz"
    else return `${n}`
  }
  

  return (
    <div>
      {calculateFizzBuzz(number)}
    </div>
  );
};