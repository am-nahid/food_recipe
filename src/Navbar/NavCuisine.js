import React from 'react'
import './navbar.style.css';
import { Link } from 'react-router-dom';

function NavCuisine() {
  const navItemData = [
  {label: "Mexican Recipes"},
 {label: "Italian Recipes"},
 {label: "Indian Recipes"},
 {label: "Thai Recipes"},
 {label: "Korean Recipes"},
 {label: "French Recipes"},
 {label: "Latin American Recipes"},
 {label: "Chinese Recipes"},
 {label: "Japanese Recipes"},
 {label: "Spanish Recipes"},
  ]

  return (
    <div className='NavBar-drops'>
         {/* <div><Link to={''}>Mexican Recipes</Link></div>
        <div><Link to={''}>Italian Recipes</Link></div>
        <div><Link to={''}>Indian Recipes</Link></div>
        <div><Link to={''}>Thai Recipes</Link></div>
        <div><Link to={''}>Korean Recipes</Link></div>
        <div><Link to={''}>French Recipes</Link></div>
        <div><Link to={''}>Latin American Recipes</Link></div>
        <div><Link to={''}>Chinese Recipes</Link></div>
        <div><Link to={''}>Japanese Recipes</Link></div>
        <div><Link to={''}>Spanish Recipes</Link></div> */}
 {navItemData.map((item) => (
         <div><Link to={`/ideas/${item.label}`}>{item.label}</Link></div>
        ))}

    </div>
  )
}

export default NavCuisine