import Header from "./components/Header";
import Hero from "./components/Hero";
import AddCar from "./components/AddCar";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div id="main">
        <Header />
        <Hero />
        <Routes>
          <Route element={AddCar} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
