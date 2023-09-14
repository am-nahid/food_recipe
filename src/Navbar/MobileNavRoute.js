import React, {useState} from 'react'
import NavRecipe from './NavRecipe'; 
import NavPopular from './NavPopular'; 
import NavMeat from './NavMeat'; 
import NavHealthy from './NavHealthy'; 
import NavHolidays from './NavHolidays'; 
import NavCuisine from './NavCuisine';
import NavSeasonal from './NavSeasonal'; 
import {AiOutlineUp, AiOutlineDown} from 'react-icons/ai'

function MobNavRoutes() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showDropDown, setShowDropDown] = useState(false);

    const handleRoutes = (item) => {
        setActiveDropdown(item.key);
    //   setActiveDropdown(!item.key);
    // setActiveDropdown(activeDropdown === item.key ? null : item);
    //   console.log(item.element);
    setShowDropDown(!showDropDown)
    };
  
    // const handleMouseLeave = () => {
    //   setActiveDropdown(null);
    // };
  
  
  


    const navItemData = [
      { label: "RECIPES", key: "navRec", element: <NavRecipe/> },
      { label: "POPULAR", key: "navPop", element: <NavPopular/>  },
      { label: "MEAT & SEAFOOD", key: "navMeat" , element: <NavMeat/> },
      { label: "HEALTHY & DIET", key: "navHealthy", element: <NavHealthy/>  },
      { label: "HOLIDAYS", key: "navHoli", element: <NavHolidays/>  },
      { label: "CUISINE", key: "navCuis", element: <NavCuisine/>  },
      { label: "SEASONAL", key: "navSea", element: <NavSeasonal/>  },
    ];
  
  return (
    <>
    <nav className='nav-ULlist'>
      <ul className='nav-ul-ele'>
            {navItemData.map((item) => (
              <li
                key={item.key}
                // onMouseOver={() => handleMouseOver(item)}
                // onMouseLeave={handleMouseLeave}
                onClick={() => handleRoutes(item)}
                >
                    <div className='li-text-cntr'>
                <span 
                // className={activeDropdown === item.key ? 'active' : ''}
                >{item.label}</span>
                <span className='show-icon-last'>{showDropDown && activeDropdown === item.key ?<AiOutlineUp/>: <AiOutlineDown/> }</span>
                </div>
                {activeDropdown === item.key 
                &&
                showDropDown
               
                && (
                  <div
                    className={`common ${item.key}`}
                    // onMouseOver={() => handleMouseOver(item)}
                    // onMouseLeave={handleMouseLeave}
                    // onClick={() =>  handleMouseOver(item)}
                  >
                    {item.element}
                 
                  </div>
                )}
              </li>
            ))}
          </ul>
          {/* <div className='heightIncreaser'></div> */}
          </nav>
    </>
  )
}

export default MobNavRoutes 