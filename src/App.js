import "./App.css";
import Home from "./components/HomePage/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        {/*<About />
      <Service />
      <Contact />
      <Login />
      <SignUp /> */}
      </div>
    </>
  );
}

export default App;
