import Car from "../../models/CarEntity.js";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import ToastUtil from "../../utils/toast.js";

const AddCar = ({ setSavedCars }) => {
  const validateData = (savedCars) => {
    if (
      formData.brand?.trim() === "" ||
      formData.model?.trim() === "" ||
      formData.type?.trim() === "" ||
      !formData.productionYear ||
      !formData.registrationExpiry
    ) {
      ToastUtil("All fields are required", "error");

      return false;
    }

    if (/\d/.test(formData.brand)) {
      ToastUtil("Brand name can't have number", "error");

      return false;
    }

    if (
      isNaN(formData.productionYear) ||
      formData.productionYear < 1885 ||
      formData.productionYear > new Date().getFullYear()
    ) {
      ToastUtil("Release year must be number", "error");

      return false;
    }

    if (savedCars.length >= 10) {
      ToastUtil("Already 10 cars added to page", "error");

      return false;
    }

    return true;
  };

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    type: "",
    productionYear: "",
    registrationExpiry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedCars = JSON.parse(localStorage.getItem("cars")) || [];

    if (!validateData(savedCars)) return;

    const newCar = new Car(
      formData.brand?.trim(),
      formData.model?.trim(),
      formData.type,
      formData.productionYear,
      formData.registrationExpiry
    );

    setSavedCars([...savedCars, newCar]);

    setFormData({
      brand: "",
      model: "",
      type: "",
      productionYear: "",
      registrationExpiry: "",
    });
    ToastUtil("Car added successfully", "success");
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

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select car type
          </option>
          <option value="sedan">Sedan</option>
          <option value="coupe">Coupe</option>
          <option value="convertible">Convertible</option>
          <option value="crossover">Crossover</option>
          <option value="electric">Electric</option>
          <option value="hybrid">Hybrid</option>
          <option value="luxury">Luxury</option>
          <option value="sports car">Sports Car</option>
          <option value="suv">Suv</option>
          <option value="truck">Truck</option>
          <option value="van">Van</option>
          <option value="hatchback">Hatchback</option>
        </select>

        <input
          type="number"
          name="productionYear"
          value={formData.productionYear}
          min={1885}
          max={new Date().getFullYear()}
          placeholder="Car production year"
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
