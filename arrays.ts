const carMaker = ['ford', 'toyota', 'fia'];
const car: string[] = [];
const dates = [new Date(), new Date()];
const dates2: Date[] = [new Date(), new Date()];
const canMakeBy = [['fo12'], ['toyo12']];
const arr: string[][] = [];

// ts can do type inference when extracting element
const cars: string[] = ['BMW', 'FIAT', 'TOYOTA'];
const car2 = cars[1];
const myCar = cars.pop();

// ts prevent from adding incompatable items
cars.push(100);

// we can get use map , forEach , reduce ,....
cars.map((car: string): string => {
  return car.toUpperCase();
});

// flexible , can have different types
const importantDates: (Date | string)[] = [new Date(), '2026-10-28'];
importantDates.push(new Date());
importantDates.push('2030-11-11');
importantDates.push(100);
const times: (Date | number)[] = [];
