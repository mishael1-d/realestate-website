import React from "react";
import "./App.css";
import { useState } from "react";
import Home from "./components/HomePage/Home";
import Houses from "./components/HousesList/HousesList";
import Navbar from "./components/Navbar/Navbar";
import SingleHouse from "./components/SingleHouse/SingleHouse";
import Search from "./components/Search/Search";
import Login from "./components/Login/Login";
import Error from "./components/ErrorPage/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Data from "./data.json";

function getUnique(arr, comp) {
  const unique = arr
    //store and copmare the values in array
    .map((e) => e[comp])
    //store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)
    //eliminate the dead keys and store the unique keys
    .filter((e) => arr[e])
    .map((e) => arr[e]);
  return unique;
}
//function to deisplay cities after deleting duplicate data
const uniqueCity = getUnique(Data, "city");
//function to deisplay categories after deleting duplicate data
const uniqueCategory = getUnique(Data, "category");
//function to prices cities after deleting duplicate data
const uniquePrice = getUnique(Data, "price");

// const initialState = {
//   name: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
//   alertMessage: ""
// }
// function reducer() {

// }

export const SearchContext = React.createContext();
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [active, setActive] = useState(true);
  const [select, setSelect] = useState({
    location: uniqueCity[0].city,
    houseType: uniqueCategory[0].category,
    price: uniquePrice[0].price,
  });

  // const [states, dispatch] = useReducer(reducer, initialState)

  const onSelectChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setSelect({ ...select, [name]: value });
  };

  const state = {
    active: active,
    setActive: setActive,
    select: select,
    setSelect: setSelect,
    onSelectChange: onSelectChange,
    uniqueCity: uniqueCity,
    uniqueCategory: uniqueCategory,
    uniquePrice: uniquePrice,
    isLoggedIn:isLoggedIn,
    setIsLoggedIn:setIsLoggedIn
  };
  return (
    <>
      <SearchContext.Provider value={state}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/houses" element={<Houses />} />
            <Route exact path="houses/:id" element={<SingleHouse />} />
            <Route
              exact
              path="search"
              element={<Search searchValue={state.select} />}
            />
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </SearchContext.Provider>
    </>
  );
}

export default App;
