import React from 'react'
import './navbar.style.css';
import { Link } from 'react-router-dom';

function NavSeasonal() {

  const navItemData = [
    { label: "Spring Recipes"},
    { label: "Summer Recipes"},
    { label: "Fall Recipes" },
    { label: "Winter Recipes"},
  
   
  ];
  return (
    <div className='NavBar-drops'>
         {/* <div><Link>Spring Recipes</Link></div>
        <div><Link>Summer Recipes</Link></div>
        <div><Link>Fall Recipes</Link></div>
        <div><Link>Winter Recipes</Link></div> */}

{navItemData.map((item) => (
         <div><Link to={`/ideas/${item.label}`}>{item.label}</Link></div>
        ))}
        <div></div>
        <Link><div className='Nav_seaMore'>See More</div></Link>
       
    </div>
  )
}

export default NavSeasonal