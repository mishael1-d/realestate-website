import "./App.css";
import Home from "./components/HomePage/Home";
import Houses from "./components/HousesList/HousesList"
import Navbar from "./components/Navbar/Navbar";
import SingleHouse from "./components/SingleHouse/SingleHouse";
import Error from "./components/ErrorPage/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/houses" element={<Houses />}></Route>
          <Route exact path="houses/:id" element={<SingleHouse />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
