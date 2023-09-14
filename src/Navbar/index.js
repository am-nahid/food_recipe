
import React, { useState } from 'react';
import './navbar.style.css';
import { FaUser, FaSearch, FaBookmark, FaRegUser, FaRegBookmark } from "react-icons/fa";
import { IoIosSearch } from 'react-icons/io';
import { RxHamburgerMenu ,RxCross1} from 'react-icons/rx';
import NavRoutes from './NavRoutes';
import NavIcons from './NavIcons';
import MobNavRoutes from './MobileNavRoute';
import { Link } from 'react-router-dom';


function NavBar() {

  const [show, setShow] = useState(false);


  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontFamily: 'Sauna-Bold',
    fontSize: "60px",
  };


  const showHamburgerRoutes =()=>{
setShow(!show)
  }

  return (
    <>
    <div className='NavBar-cntnr'>
      <div className='NavBar-Subcntnr'>
        

        <div className='NavBar-right'>
        <div className='hamberger-cntnr' onClick={showHamburgerRoutes}>{show? <RxCross1/> :<RxHamburgerMenu className='hamberger-icn'/>}</div>
        
          <h1 className='food_head' style={linkStyle}><Link to={'/'}>Food<span style={{ color: "#f4cf35" }}>.</span></Link></h1>
         <div className= "web-view"><NavRoutes /></div> 
       

        </div>

      
          <NavIcons/>
         

      </div>
    </div>
    {
          show &&
          <MobNavRoutes/>
        }
    </>
  );
}

export default NavBar;
