import CarCard from "./CarCard";
import { ToastContainer } from "react-toastify";

const CarsCards = ({ cars, setSavedCars }) => {
  return (
    <>
      <div className="car-cards">
        {cars &&
          cars.map((car, index) => (
            <CarCard key={index} car={car} setSavedCars={setSavedCars} />
          ))}
      </div>
      <ToastContainer />
    </>
  );
};

export default CarsCards;
