import { v4 as uuidv4 } from "uuid";

class Car {
  constructor(brand, model, type, releaseYear, registrationExpiry) {
    this.id = uuidv4();
    this.brand = brand;
    this.model = model;
    this.type = type;
    this.releaseYear = releaseYear;
    this.registrationExpiry = registrationExpiry;
  }
}

export default Car;
