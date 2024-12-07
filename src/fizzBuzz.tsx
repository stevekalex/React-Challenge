import { FC, useEffect, useState } from 'react';
import { State } from './App';

interface FizzBuzzProps {
  number: number;
  state: State;
}

export const FizzBuzz: FC<FizzBuzzProps> = ({ number, state }) => {
  const [currentNumber, setCurrentNumber] = useState(0)

  useEffect(() => {
    let intervalId: any;
    if (state === State.Running && currentNumber < number) {
      intervalId = setInterval(() => setCurrentNumber(currentNumber + 1), 250)
    } 

    if (state === State.Stopped) {
      intervalId = setInterval(() => setCurrentNumber(0), 0)
    }


    return () => clearInterval(intervalId)
  }, [currentNumber, state])

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
      {calculateFizzBuzz(currentNumber)}
    </div>
  );
};