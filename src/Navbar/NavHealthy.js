import React from 'react'
import './navbar.style.css';
import { Link } from 'react-router-dom';

function NavHealthy() {

  const navItemData = [
  { label: "Keto Recipes"},
  { label: "Healthy Recipes"},
  { label: "Vegetarian Recipes"},
  { label: "Vegan Recipes"},
  { label: "Mediterranean Diet Recipes"},
  { label: "Weight Watchers Recipes"},
  { label: "Low-Carb Recipes"},
  { label: "Gluten-Free Recipes"},
  ]
  return (
    <div className='NavBar-drops'>
         {/* <div><Link>Keto Recipes</Link></div>
        <div><Link>Healthy Recipes</Link></div>
        <div><Link>Vegetarian Recipes</Link></div>
        <div><Link>Vegan Recipes</Link></div>
        <div><Link>Mediterranean Diet Recipes</Link></div>
        <div><Link>Weight Watchers Recipes</Link></div>
        <div><Link>Low-Carb Recipes</Link></div>
        <div><Link>Gluten-Free Recipes</Link></div> */}

{navItemData.map((item) => (
         <div><Link to={`/ideas/${item.label}`}>{item.label}</Link></div>
        ))}
        <div></div>
        <div className='Nav_seaMore'><Link>See More</Link></div>,
    </div>
  )
}

export default NavHealthy