import React, {useState} from 'react'
import NavRecipe from './NavRecipe'; 
import NavPopular from './NavPopular'; 
import NavMeat from './NavMeat'; 
import NavHealthy from './NavHealthy'; 
import NavHolidays from './NavHolidays'; 
import NavCuisine from './NavCuisine';
import NavSeasonal from './NavSeasonal'; 

function NavRoutes() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseOver = (item) => {
      setActiveDropdown(item.key);
      // console.log(item);
    };
  
    const handleMouseLeave = () => {
      setActiveDropdown(null);
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
                onMouseOver={() => handleMouseOver(item)}
                onMouseLeave={handleMouseLeave}
                // onClick={handleMouseLeave}
                >
                <span className={activeDropdown === item.key ? 'active' : ''}>{item.label}</span>
                {activeDropdown === item.key && (
                  <div
                    className={`common ${item.key}`}
                    onMouseOver={() => handleMouseOver(item)}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleMouseLeave}
                  >
                    {item.element}
                    {/* {item.key === 'navRec' && <NavRecipe />}
                    {item.key === 'navPop' && <NavPopular />}
                    {item.key === 'navMeat' && <NavMeat />}
                    {item.key === 'navHealthy' && <NavHealthy />}
                    {item.key === 'navHoli' && <NavHolidays />}
                    {item.key === 'navCuis' && <NavCuisine />}
                    {item.key === 'navSea' && <NavSeasonal />} */}
                  </div>
                )}
              </li>
            ))}
          </ul>
          </nav>
    </>
  )
}

export default NavRoutes