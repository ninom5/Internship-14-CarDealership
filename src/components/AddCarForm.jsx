import Car from "../entity";
import { use, useState } from "react";
import "../styles/newCarForm.css";

const AddCar = () => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    type: "",
    year: "",
    registrationExpiry: "",
  });

  const [cars, setCars] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCar = new Car(
      formData.brand,
      formData.model,
      formData.type,
      formData.releaseYear,
      formData.registrationExpiry
    );

    const savedCars = JSON.parse(localStorage.getItem("cars")) || [];
    const updatedCars = [...savedCars, newCar];

    localStorage.setItem("cars", JSON.stringify(updatedCars));

    setCars(updatedCars);

    setFormData({
      brand: "",
      model: "",
      type: "",
      releaseYear: "",
      registrationExpiry: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Car brand"
        onChange={handleChange}
        required
      />
      <input type="text" placeholder="Car Model" required />
      <input type="text" placeholder="Car type" required />
      <input
        type="number"
        min={1885}
        max={new Date().getFullYear()}
        placeholder="Car release year"
        required
      />
      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        max={
          new Date(new Date().setFullYear(new Date().getFullYear() + 1))
            .toISOString()
            .split("T")[0]
        }
        placeholder="Car registration expiry date"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddCar;
