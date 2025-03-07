import defaultCarImage from "../../assets/images/car_default_image.jpg";
import ToastUtil from "../../utils/toast";

const CarCard = ({ car, setSavedCars }) => {
  const handleDelete = (carToDelete) => {
    if (
      !confirm(
        `Do you really want to delete car: ${
          car.brand + " " + car.model + " " + car.productionYear
        } `
      )
    )
      return;

    ToastUtil("Successfully deleted car", "success");

    setSavedCars((prevCars) => prevCars.filter((c) => c !== carToDelete));
  };

  const registrationExpiryCheck = () => {
    const expiryDate = new Date(car.registrationExpiry);
    const dateMonthLater = new Date();
    dateMonthLater.setMonth(dateMonthLater.getMonth() + 1);

    return expiryDate <= dateMonthLater;
  };

  const style = registrationExpiryCheck() ? { border: "2px solid red" } : {};

  return (
    <div className="card" style={style}>
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
