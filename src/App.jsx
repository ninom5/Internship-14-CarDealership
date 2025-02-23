import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage.jsx";
import AddNewCarPage from "./pages/NewCarPage/AddNewCarPage";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [savedCars, setSavedCars] = useState(() => {
    return JSON.parse(localStorage.getItem("cars")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(savedCars));
  }, [savedCars]);

  return (
    <BrowserRouter>
      <div id="main">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage savedCars={savedCars} setSavedCars={setSavedCars} />
            }
          />
          <Route
            path="/add-new-car"
            element={<AddNewCarPage setSavedCars={setSavedCars} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
