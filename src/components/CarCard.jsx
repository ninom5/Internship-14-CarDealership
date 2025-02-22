import "../styles/card.css";
import defaultCarImage from "../assets/car_default_image.jpg";
import { toast } from "react-toastify";

const CarCard = ({ car, setSavedCars }) => {
  const handleDelete = (carToDelete) => {
    if (!confirm(`Do you really want to delete car: ${(car.brand, car.model)}`))
      return;

    toast.success("Successfully deleted car", {
      position: "bottom-left",
      theme: "dark",
      closeOnClick: true,
    });

    setSavedCars((prevCars) =>
      prevCars.filter((c) => c.model !== carToDelete.model)
    );
  };

  return (
    <div className="card">
      <img src={defaultCarImage} alt="car card image" id="car-card-image" />
      <h3>
        Brand: <span id="card-h2-span">{car.brand}</span>
      </h3>
      <h3>
        Model: <span id="card-h2-span">{car.model}</span>
      </h3>
      <h3>
        Type: <span id="card-h2-span">{car.type}</span>
      </h3>
      <h3>
        Production year: <span id="card-h2-span">{car.productionYear}</span>
      </h3>
      <h3>
        Registration expiry: &nbsp;&nbsp;
        <span id="card-h2-span">{car.registrationExpiry}</span>
      </h3>
      <button className="delete-card-btn" onClick={() => handleDelete(car)}>
        &#10006;
      </button>
    </div>
  );
};

export default CarCard;
