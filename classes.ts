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
  constructor(
    private wheels: number,
    color: string,
  ) {
    super(color);
  }
  private drive(): void {
    console.log('vroom vroom and it has color', this.color, this.wheels);
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
const car = new Car(4, 'red');
car.drivingProcess();
