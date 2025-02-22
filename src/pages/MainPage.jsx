import Hero from "../components/Hero";
import Header from "../components/Header";
import CarsCards from "../components/CarsCardsMain";
import { useState } from "react";

const MainPage = ({ savedCars, setSavedCars }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Header />
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
