import Hero from "../../components/Hero/Hero";
import CarsCards from "../../components/CarsCollection/CarsCollection";
import { useState } from "react";

const MainPage = ({ savedCars, setSavedCars }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Hero setSearchInput={setSearchInput} />
      <CarsCards
        cars={savedCars}
        setSavedCars={setSavedCars}
        searchInput={searchInput}
      />
    </>
  );
};

export default MainPage;
