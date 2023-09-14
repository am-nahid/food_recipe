import React, { useState, useEffect } from "react";
// import {FaCross} from 'react-icons/fa'
import { RiCloseFill } from "react-icons/ri";
import { RiErrorWarningLine } from "react-icons/ri";
import "./loginForm.style.css";
import apple_logo from '../../assets/apple_logo4.png'
import facebook_logo from '../../assets/facebook_logo7.png'
import google_logo from '../../assets/google_logo.png'
import amazon_logo from '../../assets/amazon_logo.png'
import {useSelector, useDispatch} from 'react-redux'
// import { login } from '../Utility/reduxtool/UserLoggedSlice';
import { signupFunc, homeIcon, loginFunc } from "../../Utility/reduxtool/UserLoggedSlice";
import SignupForm from "../SignupGorm/SignupForm";
import { host } from "../../constants/constants";
import axios from 'axios'

function LoginForm({ user }) {
  // const [cancel,setCancel]= useState(user)
  // console.log("user", user);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(null);
 

  const state = useSelector(state=>state.userControl)


// console.log(state);
const [home, setHome] = useState(state.homePage)
const [login, setLogin] =useState( state.loginPage)
const [signin, setSignup] = useState(state.signinPage)
  const dispatch = useDispatch()

  useEffect(()=>{
    setHome(state.homePage)
    setSignup(state.signinPage)
    // setLogin(state.signin)
  }, [state])

  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(homeIcon());
  };

  const handleSigninPage = (e) => {
    e.preventDefault();
    dispatch(signupFunc());
    setLogin(false)
  };
  
  const handleEmail = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleVisible=(e)=>{
    e.preventDefault();
    setVisible(!visible)
  }

  const handleLogin = (e)=>{

    // e.preventDefault();
    e.preventDefault()
    // console.log(email, password);

    const API = `${host}/user/login`

    if (email && password ) {

      const response = axios
      .post(API,{email,password})
      response
        .then((res) => {
          if(res.data.token){
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user_id", res.data._id);
            localStorage.setItem("user_name", res.data.email);
        //  console.log(res.data);
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
  }


  return (
    <>
      {
        login &&

        <div className="login-outline">
          <div className="login-subCntnr">
            <div
              // onClick={()=>setCancel(!cancel)}
              className="cancel"
            >
              {/* &#10060; */}
              <div className="cancel-btn">
                <button onClick={handleCancel}>×{/* <RiCloseFill className="icon-light"/> */}</button>
              </div>
            </div>

            <div className="login-internal-cntnr">
              <div className="Login-text">LOG IN</div>
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
                {
                  error &&

                <div className="error_msg"><RiErrorWarningLine/> {error}</div>
                }
                <button onClick={handleLogin} className="logging-btn">LOG IN</button>
              </form>
              <div className="frgt-passw">Forgot Password?</div>
              <div className="continue-with">OR CONTINUE WITH</div>

              <ul className="login-images">
                <li><button className="apple-btn"><img className="apple" alt="apple" src={apple_logo}/></button></li>
                <li><button className="facebook-btn"><img className="facebook" alt="facebook" src={facebook_logo}/></button></li>
                <li><button className="google-btn"><img className="apple" alt="apple" src={google_logo}/></button></li>
                <li><button className="google-btn"><img className="apple" alt="apple" src={amazon_logo}/></button></li>
              </ul>

              <div>
                Don't have an account yet? <span className="signup-link" onClick={handleSigninPage}>Sign Up</span>
              </div>
            </div>
          </div>
        </div>
      }
      {/* {signin || login && <div className='backDrop'></div>}
      {
        signin &&
        <SignupForm/>
      } */}
    </>
  );
}

export default LoginForm;
