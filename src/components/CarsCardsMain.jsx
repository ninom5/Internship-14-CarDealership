import CarCard from "./CarCard";
import { ToastContainer } from "react-toastify";

const CarsCards = ({ cars, setSavedCars }) => {
  return (
    <>
      <div className="car-cards">
        {cars &&
          cars
            .sort((a, b) => {
              if (a.productionYear !== b.productionYear) {
                return a.productionYear - b.productionYear;
              }
              if (a.brand.toLowerCase() !== b.brand.toLowerCase()) {
                return a.brand
                  .toLowerCase()
                  .localeCompare(b.brand.toLowerCase());
              }
              return a.model.toLowerCase().localeCompare(b.model.toLowerCase());
            })
            .map((car, index) => (
              <CarCard key={index} car={car} setSavedCars={setSavedCars} />
            ))}
      </div>
      <ToastContainer />
    </>
  );
};

export default CarsCards;
