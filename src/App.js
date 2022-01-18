import "./App.css";
import Home from "./components/HomePage/Home";
import Navbar from "./components/Navbar/Navbar";
// import Properties from "./components/Properties/Properties";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
        {/* <Properties /> */}
      </div>
    </>
  );
}

export default App;
