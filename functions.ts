// annotaions around functions
const add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(10, 30));

// type infernce around function
const subtract = (a: number, b: number) => {
  return a - b;
};
console.log(subtract(10, 5));
