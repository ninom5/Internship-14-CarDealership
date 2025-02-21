import "../styles/card.css";

const Car = ({ car }) => {
  return (
    <div className="card">
      <h2>Brand: {car.brand}</h2>
      <h2>Model: {car.model}</h2>
      <p>Type: {car.type}</p>
      <p>Production year: {car.productionYear}</p>
      <p>Registration expiry: {car.registrationExpiry}</p>

      <button className="delete-card-btn">&#10006;</button>
    </div>
  );
};

export default Car;
