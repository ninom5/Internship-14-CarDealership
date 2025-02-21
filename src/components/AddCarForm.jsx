import Car from "../entity";
import { use, useState } from "react";
import "../styles/newCarForm.css";
import { toast, ToastContainer } from "react-toastify";

const AddCar = () => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    type: "",
    releaseYear: "",
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
    toast.success("Car added successfully", {
      position: "bottom-left",
      theme: "dark",
      closeOnClick: "true",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          placeholder="Car brand"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="model"
          value={formData.model}
          placeholder="Car Model"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="type"
          value={formData.type}
          placeholder="Car type"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="releaseYear"
          value={formData.releaseYear}
          min={1885}
          max={new Date().getFullYear()}
          placeholder="Car release year"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="registrationExpiry"
          value={formData.registrationExpiry}
          min={new Date().toISOString().split("T")[0]}
          max={
            new Date(new Date().setFullYear(new Date().getFullYear() + 1))
              .toISOString()
              .split("T")[0]
          }
          placeholder="Car registration expiry date"
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default AddCar;
