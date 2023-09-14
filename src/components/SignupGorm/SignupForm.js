import React, { useEffect, useState } from "react";
// import {FaCross} from 'react-icons/fa'
import { RiCloseFill } from "react-icons/ri";
import "../LoginForm/loginForm.style.css";
import apple_logo from "../../assets/apple_logo4.png";
import google_logo from "../../assets/google_logo.png";

import { RiErrorWarningLine } from "react-icons/ri";
import {
  signupFunc,
  homeIcon,
  loginFunc,
} from "../../Utility/reduxtool/UserLoggedSlice";
import { useDispatch, useSelector } from "react-redux";
import { host } from "../../constants/constants";
import axios from 'axios'

function SignupForm({ user }) {
  // const [cancel,setCancel]= useState(user)
  // console.log("user", user);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(null);
  

  const dispatch = useDispatch();
  const state = useSelector((state) => state.userControl);

  const [home, setHome] = useState(state.homePage);
  const [login, setLogin] = useState(state.loginPage);
  const [signin, setSignup] = useState(state.signinPage);

  useEffect(() => {
    setHome(state.homePage);
  }, [state]);

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleVisible = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(homeIcon());
    setSignup(false);
  };

  const handleLoginPage = (e) => {
    e.preventDefault();
    dispatch(loginFunc());
    setSignup(false);
  };
  const handleCheckBox = ()=>{
    setAgreeToTerms(!agreeToTerms)
    // console.log(agreeToTerms);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);

    const API = `${host}/user/signup`

    if (email && password && agreeToTerms) {

      const response = axios
      .post(API,{email,password})
      response
        .then((res) => {
          if(res.data.token){
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user_id", res.data._id);
            localStorage.setItem("user_name", res.data.email);

            dispatch(homeIcon());
            // window.history.pushState({}, "", window.location.pathname);

          }else{
            setError(res.data.message);
            setEmail("")
            setPassword("")
          }         
        })
        .catch((err) =>{

          setError(err.response.data.message);
          setEmail("")
          setPassword("")
          console.log(err)
        } );
    } else {
      setError("Please enter email and password.");
    }
  };

  return (
    <>
      {signin && (
        <div className="signin-outline">
          <div className="login-subCntnr">
            <div
              // onClick={()=>setCancel(!cancel)}
              className="cancel"
            >
              {/* &#10060; */}
              <div className="cancel-btn">
                <button onClick={handleCancel}>
                  ×{/* <RiCloseFill className="icon-light"/> */}
                </button>
              </div>
            </div>

            <div className="login-internal-cntnr">
              <h2 className="signin-text ">CREATE AN ACCOUNT</h2>
              <div className="signup-save-text">
                Save recipes across devices, write reviews, and share your own
                photos
              </div>
              <form className="login-inputs">
                <label className="input-label" htmlFor="email">
                  EMAIL
                </label>
                <div className="login-cmn-cntnr">
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    onChange={handleEmail}
                    value={email}
                    name="email"
                    required
                  />
                </div>
                <label className="input-label" htmlFor="email">
                  PASSWORD
                </label>
                <div className="login-cmn-cntnr">
                  <input
                    type={visible ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={handlePassword}
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <button className="login-show-btn" onClick={handleVisible}>
                    {visible ? "hide" : "show"}
                  </button>
                </div>

                <div className="chekbox-cntnr">
                  {/* <div> */}
                  <input type="checkbox" name="agreeToTerms" onChange={handleCheckBox} checked={agreeToTerms} className="checkBox" />
                  {/* </div> */}
                
                <label className="agreeTerms">
                  By creating an account, you agree to the{" "}
                  <span className="color-blue">Terms of Use</span> and have read our{" "}
                  <span>Privacy Policy.</span> Discovery and its{" "}
                  <span>affiliates</span> may use your email address to provide
                  updates, ads, and offers. You can opt out or learn more about
                  your rights via the <span>Privacy Policy.</span>
                </label>
                </div>

                {
                  error &&
                  <div className="error_msg"><RiErrorWarningLine/> {error}</div>
                }
                <button onClick={handleSubmit} className="logging-btn">
                  CREATE ACCOUNT
                </button>
              </form>
              {/* <div className="frgt-passw">Forgot Password?</div> */}
              <div className="continue-with">OR CONTINUE WITH</div>

              <ul className="login-images">
                <li>
                  <button className="apple-btn">
                    <img className="apple" alt="apple" src={apple_logo} />
                  </button>
                </li>
                {/* <li><button className="facebook-btn"><img className="facebook" alt="facebook" src={facebook_logo}/></button></li> */}
                <li>
                  <button className="google-btn">
                    <img className="apple" alt="apple" src={google_logo} />
                  </button>
                </li>
                {/* <li><button className="google-btn"><img className="apple" alt="apple" src={amazon_logo}/></button></li> */}
              </ul>

              <div>
                Already a memeber? &nbsp;
                <span onClick={handleLoginPage} className="signup-link">
                  Log in
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignupForm;
