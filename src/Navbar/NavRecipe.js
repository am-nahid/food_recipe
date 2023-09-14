import React from 'react'
import './navbar.style.css';
import { Link } from 'react-router-dom';

function NavRecipe() {
  const navItemData = [
  { label: "Breakfast & Brunch Recipes"},
{ label: "Lunch Recipes"},
{ label: "Appetizers & Snack Recipes"},
{ label: "Dinner Recipes"},
{ label: "Dessert Recipes"},
{ label: "Drink & Cocktail Recipes"},
{ label: "Side Dish Recipes"},
{ label: "Grilling & BBQ Recipes"},
{ label: "Microwave Recipes"},
{ label: "Quick & Easy Recipes"},
{ label: "Slow-Cooker Recipes"},
{ label: "Air Fryer Recipes"},
{ label: "Instant Pot Recipes"},
{ label: "Baking Recipes"},
  ]

  return (
    <div className='NavBar-drops'>
        {/* <div ><Link>Breakfast & Brunch Recipes</Link></div>
        <div><Link>Lunch Recipes</Link></div>
        <div><Link>Appetizers & Snack Recipes</Link></div>
        <div><Link>Dinner Recipes</Link></div>
        <div><Link>Dessert Recipes</Link></div>
        <div><Link>Drink & Cocktail Recipes</Link></div>
        <div><Link>Side Dish Recipes</Link></div>
        <div><Link>Grilling & BBQ Recipes</Link></div>
        <div><Link>Microwave Recipes</Link></div>
        <div><Link>Quick & Easy Recipes</Link></div>
        <div><Link>Slow-Cooker Recipes</Link></div>
        <div><Link>Air Fryer Recipes</Link></div>
        <div><Link>Instant Pot Recipes</Link></div>
        <div><Link>Baking Recipes</Link></div> */}
         {navItemData.map((item) => (
         <div><Link to={`/ideas/${item.label}`}>{item.label}</Link></div>
        ))}
        <div></div>
        <div className='Nav_seaMore'><Link to={'/recipe'}>See More</Link></div>

    </div>
  )
}

export default NavRecipe