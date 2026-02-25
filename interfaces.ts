interface Reportable {
  summary(): string;
}
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `name:${this.name}\n year:${this.year.getFullYear()}\nbroken?${this.broken}`;
  },
};

const drink = {
  color: 'white',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `it has color:${this.color}, has carbonation?:${this.carbonated}, and has ${this.sugar} gram of sugar`;
  },
};
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
