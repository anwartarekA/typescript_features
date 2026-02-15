let user: string = 'anwar';
let num: number = 10;
let has: boolean = true;
let nothingMatch: null = null;
let nothing: undefined = undefined;
let now: Date = new Date();
now.getMonth();
class Color {}
const red: Color = new Color();
let strings: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let booleans: boolean[] = [true, true, false];
// type annotation with object literal
let position: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// type annotation around functions
const logNumber: (i: number) => void = (i: number): void => {
  console.log(i);
};
logNumber(100);
