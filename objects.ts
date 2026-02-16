const profile = {
  user: 'anwar',
  age: 24,
  coords: {
    lat: 10,
    lng: 20,
  },
  setAge(age: number): void {
    this.age = age;
  },
};
// annotations around object destruction
const { user, age }: { user: string; age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
console.log(lat, lng);
