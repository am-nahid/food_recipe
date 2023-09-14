import React from 'react'
import './navbar.style.css';
import { Link } from 'react-router-dom';

function NavMeat() {

  const navItemData = [
    { label: "Chicken Recipes"},
    { label: "Salmon Recipes"},
    { label: "Pork Chop Recipes" },
    { label: "Ground Beef Recipes"},
    { label: "Shrimp Recipes"},
   
  ];

  return (
    <div className='NavBar-drops'>
       
         {/* <div><Link to='/ideas/Chicken Recipes'>Chicken Recipes</Link></div>
        <div><Link>Salmon Recipes</Link></div>
        <div><Link>Pork Chop Recipes</Link></div>
        <div><Link>Ground Beef Recipes</Link></div>
        <div><Link>Shrimp Recipes</Link></div> */}
        {navItemData.map((item) => (
         <div><Link to={`/ideas/${item.label}`}>{item.label}</Link></div>
        ))}
        
    </div>
  )
}

export default NavMeat