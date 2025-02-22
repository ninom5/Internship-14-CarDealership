import Hero from "../components/Hero";
import Header from "../components/Header";
import CarsCards from "../components/CarsCardsMain";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [savedCars, setSavedCars] = useState(() => {
    return JSON.parse(localStorage.getItem("cars")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(savedCars));
  }, [savedCars]);

  return (
    <>
      <Header />
      <Hero />
      <CarsCards cars={savedCars} setSavedCars={setSavedCars} />
    </>
  );
};

export default MainPage;
