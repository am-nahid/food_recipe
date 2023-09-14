import React from "react";
import "./App.css";
import NavBar from "./Navbar/NavBar";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupGorm/SignupForm";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./Utility/allRoutes/AllRoutes";
import { FooterSearch } from "./components";

const App = () => {



  return (
    <div className="App">
       {/* <NavBar/> */}
       {/* <LoginForm/> */}
       {/* <SignupForm/> */}
       <AllRoutes/>
       {/* <FooterSearch/> */}
       <Footer/>
    </div>
  );
};

export default App;
