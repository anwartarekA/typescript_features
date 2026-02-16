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
// annotations around object letiral
let position: { x: number; y: number } = {
  x: 10,
  y: 20,
};
console.log(strings);
// annotations around functions
const logNumber: (i: number) => void = (i: number): void => {
  console.log(i);
};
logNumber(100);

// use annotaions when the retuen of function is any
let json = '{x:10,y:20}';
let jsonParse: { x: number; y: number } = JSON.parse(json);
console.log(jsonParse.x);

// use annotations when we declare variable but initialze it later
let colors = ['red', 'green', 'blue'];
let word: string;
for (let i = 0; i < colors.length; i++) {
  if (colors[i] === 'green') word = colors[i];
}

// use annotations when we want variable to have different type that can't be inferred even declaration & initialization
let nums = [1, 0, -10];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) numberAboveZero = nums[i];
}
