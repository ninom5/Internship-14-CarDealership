import Header from "./components/Header";
import Hero from "./components/Hero";
import MainPage from "./pages/MainPage";
import AddNewCarPage from "./pages/AddNewCarPage";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div id="main">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add-new-car" element={<AddNewCarPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
