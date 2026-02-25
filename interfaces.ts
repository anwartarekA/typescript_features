interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
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

const printSummary = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};
printSummary(oldCivic);
