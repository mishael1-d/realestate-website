// import React, { useContext, useState } from "react";
// import { SearchContext } from "../../App";
// import {  useNavigate } from "react-router-dom";
// import Alert from "../Alert/Alert";
// import "./Style.css";

// const Login = () => {
//   let navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const value = useContext(SearchContext);
//   const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
//   const handleLogin = () => {
//     if (
//       localStorage.getItem("username") === email &&
//       localStorage.getItem("password") === password
//     ) {
//       showAlert(true, "Login Successful", "success");
//       setTimeout(() => {
//         navigate("../");
//       }, 3000);
//       value.setIsLoggedIn(true);
//     } else {
//       showAlert(true, "Email/Password is incorrect", "danger");
//     }
//   };
//   const showAlert = (show = false, msg = "", type = "") => {
//     setAlert({ show, msg, type });
//   };
//   return (
//     <>
//       <div className="account-container login-container container">
//         <div className="left-box">
//           <div className="form-container">
//         {alert.show && <Alert {...alert} removeAlert={showAlert} />}
//             <h2>Sign In to Real.Estate</h2>
//         <p>Fill in the required input<sup>*</sup> </p>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <p>Forgot your password?</p>
//             <button type="submit" onClick={handleLogin}>
//               Login
//             </button>
//           </div>
//         </div>
//         <div className="right-box">
//           <h2>Hello, Friend!</h2>
//           <p>
//             Enter your personal details <br /> and start your journey with us
//           </p>
//           <button className="login-text-btn">SIGN UP</button>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Login;
