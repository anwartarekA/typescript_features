class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
}
class Car extends Vehicle {
  honk(): void {
    console.log('beep beep');
  }
}
const car = new Car();
car.drive();
car.honk();
