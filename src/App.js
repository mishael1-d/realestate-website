import "./App.css";
import Home from "./components/HomePage/Home";
import Houses from "./components/HousesList/HousesList"
import Navbar from "./components/Navbar/Navbar";
import SingleHouse from "./components/SingleHouse/SingleHouse";
import Search from "./components/Search/Search";
import Login from "./components/Login/Login";
import Error from "./components/ErrorPage/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/houses" element={<Houses />}/>
          <Route exact path="houses/:id" element={<SingleHouse />}/>
          <Route exact path="search" element={<Search />}/>
          <Route exact path="login" element={<Login />}/>
          <Route exact path="register" element={<Register />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
