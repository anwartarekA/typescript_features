// annotaions around functions
const add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(10, 30));

// type infernce around function
const subtract = (a: number, b: number): number => a - b;
console.log(subtract(10, 5));

// annotations around anonemous function
function devide(a: number, b: number): number {
  return a / b;
}
console.log(devide(10, 5));

// void and never
const logger = (msg: string): void => {
  console.log(msg);
};
const error = (msg: string): never => {
  throw new Error(msg);
};
