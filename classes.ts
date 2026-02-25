class Vehicle {
  protected driveCar(): void {
    console.log('hahahahah');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom vroom');
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
