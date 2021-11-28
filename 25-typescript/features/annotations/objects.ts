const profile = {
  name: 'Andres',
  age: 41,
  coords: {
    lat: 25,
    lng: 48,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
