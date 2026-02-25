class Vehicle {
  // protected color: string = 'red';
  // protected color;
  constructor(protected color: string) {}
  protected driveCar(): void {
    console.log('hahahahah');
  }
}
const v = new Vehicle('red');
class Car extends Vehicle {
  private drive(): void {
    console.log('vroom vroom and it has color', this.color);
  }
  honk(): void {
    console.log('beep beep');
  }
  drivingProcess(): void {
    this.drive();
    this.honk();
    this.driveCar();
  }
}
const car = new Car('red');
// car.drivingProcess();
