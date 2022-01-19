import "./App.css";
import Home from "./components/HomePage/Home";
import Houses from "./components/HousesList/HousesList"
import Navbar from "./components/Navbar/Navbar";
// import Properties from "./components/Properties/Properties";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="houses" element={<Houses />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
