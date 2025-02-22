import CarCard from "./CarCard";
import { ToastContainer } from "react-toastify";

const CarsCards = ({ cars, setSavedCars, searchInput }) => {
  const searchedCars = cars.filter(
    (car) =>
      car.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
      car.model.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className="car-cards">
        {searchedCars.length > 0 ? (
          searchedCars
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
            ))
        ) : (
          <h2 style={{ color: "white", fontSize: "30px" }}>No added cars</h2>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default CarsCards;
