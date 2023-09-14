// import React, { useState } from 'react'
// import './navbar.style.css'
// import { FaUser, FaSearch, FaBookmark, FaRegUser, FaRegBookmark } from "react-icons/fa";
// import { IoIosSearch } from 'react-icons/io';
// import NavRecipe from './NavRecipe';


// function NavBar() {
//   const [navRec, setNavRec]=useState(false)
//   const [navPop, setNavPop]=useState(false)
//   const [navMeat, setNavMeat]=useState(false)
//   const [navHealthy, setNavHealthy]=useState(false)
//   const [navHoli, setNavHoli]=useState(false)
//   const [navCuis, setNavCuis]=useState(false)
//   const [navSea, setNavSea]=useState(false)
//     const linkStyle = {
//         textDecoration : "none",
//         color : "white",
//         fontFamily: 'Sauna-Bold',
//         fontSize: "60px"
//     }
//   return (
//     <div className='NavBar-cntnr'>
//         <div className='NavBar-Subcntnr'>


//         <div className='NavBar-right'>
//          <h1 style={linkStyle}>Food<span style={{color:"#f4cf35"}}>.</span></h1>
//          <ul className='nav-ULlist'>
//             <li onMouseOver={()=>setNavRec(true)}
//              onMouseLeave={()=>setNavRec(false)}
//               ><span>RECIPES</span></li>
//               { navRec &&
//                <div className='common navRec'  onMouseOver={() => setNavRec(true)}
//                 onMouseLeave={() => setNavRec(false)}
//                 onClick={() => setNavRec(false)}>
//                   <NavRecipe/>
//                   </div>
//                   }
//             <li onMouseOver={() => setNavPop(true)}
//                 onMouseLeave={() => setNavPop(false)}
//                 onClick={() => setNavPop(false)}>  <span>POPULAR</span></li>
//             { navPop &&
//                <div className='common navPop'  onMouseOver={() => setNavPop(true)}
//                 onMouseLeave={() => setNavPop(false)}
//                 onClick={() => setNavPop(false)}>
//                   <NavRecipe/>
//                   </div>
//                   }
//             <li onMouseOver={() => setNavMeat(true)}
//                 onMouseLeave={() => setNavMeat(false)}
//                 onClick={() => setNavMeat(false)}><span>MEAT & SEAFOOD</span></li>
//             { navMeat &&
//                <div className='common navMeat'  onMouseOver={() => setNavMeat(true)}
//                 onMouseLeave={() => setNavMeat(false)}
//                 onClick={() => setNavMeat(false)}>
//                   <NavRecipe/>
//                   </div>
//                   }
//             <li onMouseOver={() => setNavHealthy(true)}
//                 onMouseLeave={() => setNavHealthy(false)}
//                 onClick={() => setNavHealthy(false)}><span>HEALTHY & DIET</span></li>
//             { navHealthy &&
//                <div className='common navHealthy'  onMouseOver={() => setNavHealthy(true)}
//                 onMouseLeave={() => setNavHealthy(false)}
//                 onClick={() => setNavHealthy(false)}>
//                   <NavRecipe/>
//                   </div>
//                   }
//             <li  onMouseOver={() => setNavHoli(true)}
//                 onMouseLeave={() => setNavHoli(false)}
//                 onClick={() => setNavHoli(false)}><span>HOLIDAYS</span></li>
//             { navHoli &&
//                <div className='common navHoli'  onMouseOver={() => setNavHoli(true)}
//                 onMouseLeave={() => setNavHoli(false)}
//                 onClick={() => setNavHoli(false)}>
//                   <NavRecipe/>
//                   </div>
//                   }
//             <li onMouseOver={() => setNavCuis(true)}
//                 onMouseLeave={() => setNavCuis(false)}
//                 onClick={() => setNavCuis(false)}><span>CUISINE</span></li>
//             { navCuis &&
//                <div className='common navCuis'  onMouseOver={() => setNavCuis(true)}
//                 onMouseLeave={() => setNavCuis(false)}
//                 onClick={() => setNavCuis(false)}>
//                   <NavRecipe/>
//                   </div>
//                   }
//             <li onMouseOver={() => setNavSea(true)}
//                 onMouseLeave={() => setNavSea(false)}
//                 onClick={() => setNavSea(false)}><span>SEASONAL</span></li>
//             { navSea &&
//                <div className='common navSea'  onMouseOver={() => setNavSea(true)}
//                 onMouseLeave={() => setNavSea(false)}
//                 onClick={() => setNavSea(false)}>
//                   <NavRecipe/>
//                   </div>
//                   }
//          </ul>
//          </div>
//          <div className="NavBar-icon-cntr">
//             <div className='Nav-Search'><IoIosSearch/></div>
//             <div><FaRegBookmark/></div>
//             {/* <div><BsBookmark/></div> */}
//             <div><FaRegUser/></div>
//          </div>
//         </div>
       
//     </div>
//   )
// }

// export default NavBar


// import React, { useState } from 'react';
// import './navbar.style.css';
// import { FaUser, FaSearch, FaBookmark, FaRegUser, FaRegBookmark } from "react-icons/fa";
// import { IoIosSearch } from 'react-icons/io';
// import NavRecipe from './NavRecipe'; // Import the default NavRecipe component
// import NavPopular from './NavPopular'; // Import NavPopular component
// import NavMeat from './NavMeat'; // Import NavMeat component
// import NavHealthy from './NavHealthy'; // Import NavHealthy component
// import NavHolidays from './NavHolidays'; // Import NavHolidays component
// import NavCuisine from './NavCuisine'; // Import NavCuisine component
// import NavSeasonal from './NavSeasonal'; // Import NavSeasonal component

// function NavBar() {
//   const [navItems, setNavItems] = useState({
//     navRec: false,
//     navPop: false,
//     navMeat: false,
//     navHealthy: false,
//     navHoli: false,
//     navCuis: false,
//     navSea: false,
//   });

//   const handleMouseOver = (item) => {
//     setNavItems((prevState) => ({ ...prevState, [item]: true }));
//   };

//   const handleMouseLeave = (item) => {
//     setNavItems((prevState) => ({ ...prevState, [item]: false }));
//   };

//   const linkStyle = {
//     textDecoration: "none",
//     color: "white",
//     fontFamily: 'Sauna-Bold',
//     fontSize: "60px",
//   };

//   const navItemData = [
//     { label: "RECIPES", state: navItems.navRec, setState: setNavItems, key: "navRec" },
//     { label: "POPULAR", state: navItems.navPop, setState: setNavItems, key: "navPop" },
//     { label: "MEAT & SEAFOOD", state: navItems.navMeat, setState: setNavItems, key: "navMeat" },
//     { label: "HEALTHY & DIET", state: navItems.navHealthy, setState: setNavItems, key: "navHealthy" },
//     { label: "HOLIDAYS", state: navItems.navHoli, setState: setNavItems, key: "navHoli" },
//     { label: "CUISINE", state: navItems.navCuis, setState: setNavItems, key: "navCuis" },
//     { label: "SEASONAL", state: navItems.navSea, setState: setNavItems, key: "navSea" },
//   ];

//   return (
//     <div className='NavBar-cntnr'>
//       <div className='NavBar-Subcntnr'>
//         <div className='NavBar-right'>
//           <h1 style={linkStyle}>Food<span style={{ color: "#f4cf35" }}>.</span></h1>
//           <ul className='nav-ULlist'>
//             {navItemData.map((item) => (
//               <li
//                 key={item.key}
//                 onMouseOver={() => handleMouseOver(item.key)}
//                 onMouseLeave={() => handleMouseLeave(item.key)}
//                 onClick={() => handleMouseLeave(item.key)}>
//                 <span>{item.label}</span>
//                 {item.state && (
//                   <div
//                     className={`common ${item.key}`}
//                     onMouseOver={() => handleMouseOver(item.key)}
//                     onMouseLeave={() => handleMouseLeave(item.key)}
//                     onClick={() => handleMouseLeave(item.key)}
//                   >
//                     {item.key === 'navRec' && <NavRecipe />}
//                     {item.key === 'navPop' && <NavPopular />}
//                     {item.key === 'navMeat' && <NavMeat />}
//                     {item.key === 'navHealthy' && <NavHealthy />}
//                     {item.key === 'navHoli' && <NavHolidays />}
//                     {item.key === 'navCuis' && <NavCuisine />}
//                     {item.key === 'navSea' && <NavSeasonal />}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="NavBar-icon-cntr">
//           <div className='Nav-Search'><IoIosSearch /></div>
//           <div><FaRegBookmark /></div>
//           {/* <div><BsBookmark/></div> */}
//           <div><FaRegUser /></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavBar;


import React, { useState } from 'react';
import './navbar.style.css';
import { FaUser, FaSearch, FaBookmark, FaRegUser, FaRegBookmark } from "react-icons/fa";
import { IoIosSearch } from 'react-icons/io';
import { RxHamburgerMenu ,RxCross1} from 'react-icons/rx';
import NavRoutes from './NavRoutes';
import NavIcons from './NavIcons';
import MobNavRoutes from './MobileNavRoute';

// import NavRecipe from './NavRecipe'; 
// import NavPopular from './NavPopular'; 
// import NavMeat from './NavMeat'; 
// import NavHealthy from './NavHealthy'; 
// import NavHolidays from './NavHolidays'; 
// import NavCuisine from './NavCuisine';
// import NavSeasonal from './NavSeasonal'; 

function DemoNavBar() {
  // const [activeDropdown, setActiveDropdown] = useState(null);
  const [show, setShow] = useState(false);

  // const handleMouseOver = (item) => {
  //   setActiveDropdown(item.key);
  // };

  // const handleMouseLeave = () => {
  //   setActiveDropdown(null);
  // };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontFamily: 'Sauna-Bold',
    fontSize: "60px",
  };

  // const navItemData = [
  //   { label: "RECIPES", key: "navRec" },
  //   { label: "POPULAR", key: "navPop" },
  //   { label: "MEAT & SEAFOOD", key: "navMeat" },
  //   { label: "HEALTHY & DIET", key: "navHealthy" },
  //   { label: "HOLIDAYS", key: "navHoli" },
  //   { label: "CUISINE", key: "navCuis" },
  //   { label: "SEASONAL", key: "navSea" },
  // ];

  const showHamburgerRoutes =()=>{
setShow(!show)
  }

  return (
    <>
    <div className='NavBar-cntnr'>
      <div className='NavBar-Subcntnr'>
        

        <div className='NavBar-right'>
        <div className='hamberger-cntnr' onClick={showHamburgerRoutes}>{show? <RxCross1/> :<RxHamburgerMenu className='hamberger-icn'/>}</div>
        
          <h1 style={linkStyle}>Food<span style={{ color: "#f4cf35" }}>.</span></h1>
         <div className= "web-view"><NavRoutes /></div> 
          {/* <MobNavRoutes className="mobile-view"/> */}
          {/* <ul className='nav-ULlist'>
            {navItemData.map((item) => (
              <li
                key={item.key}
                onMouseOver={() => handleMouseOver(item)}
                onMouseLeave={handleMouseLeave}
                onClick={handleMouseLeave}>
                <span className={activeDropdown === item.key ? 'active' : ''}>{item.label}</span>
                {activeDropdown === item.key && (
                  <div
                    className={`common ${item.key}`}
                    onMouseOver={() => handleMouseOver(item)}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleMouseLeave}
                  >
                    {item.key === 'navRec' && <NavRecipe />}
                    {item.key === 'navPop' && <NavPopular />}
                    {item.key === 'navMeat' && <NavMeat />}
                    {item.key === 'navHealthy' && <NavHealthy />}
                    {item.key === 'navHoli' && <NavHolidays />}
                    {item.key === 'navCuis' && <NavCuisine />}
                    {item.key === 'navSea' && <NavSeasonal />}
                  </div>
                )}
              </li>
            ))}
          </ul> */}

        </div>

        {/* <div className="NavBar-icon-cntr"> */}
          <NavIcons/>
          {/* <div className='Nav-Search'><IoIosSearch /></div>
          <div><FaRegBookmark /></div>
          
          <div onClick={handleUser}><FaRegUser /></div> */}
        {/* </div> */}

      </div>
    </div>
    {
          show &&
          <MobNavRoutes/>
        }
    </>
  );
}

export default DemoNavBar;
