class Vehicle {
  color: string = 'red';
  protected driveCar(): void {
    console.log('hahahahah');
  }
}

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
const car = new Car();
car.drivingProcess();
