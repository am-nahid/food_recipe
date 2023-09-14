import React from 'react'
import './navbar.style.css';
import { Link } from 'react-router-dom';

function NavPopular() {

  const navItemData = [
  { label: "Trending Now"},
  { label: "Casserole Recipes"},
  { label: "Chili Recipes"},
  { label: "Soup Recipes"},
  { label: "Pasta Recipes"},
  { label: "Bread Recipes"},
  { label: "Cookie Recipes"},
  { label: "Salad Recipes"},
  { label: "Tofu Recipes"},
  { label: "Copycat Recipes"},
  ]

  return (
    <div className='NavBar-drops'>
    {/* <div><Link to={'/recipe'}>Trending Now</Link></div>
   <div><Link>Casserole Recipes</Link></div>
   <div><Link>Chili Recipes</Link></div>
   <div><Link>Soup Recipes</Link></div>
   <div><Link>Pasta Recipes</Link></div>
   <div><Link>Bread Recipes</Link></div>
   <div><Link>Cookie Recipes</Link></div>
   <div><Link>Salad Recipes</Link></div>
   <div><Link>Tofu Recipes</Link></div>
   <div><Link>Copycat Recipes</Link></div> */}

{navItemData.map((item) => (
         <div><Link to={`/ideas/${item.label}`}>{item.label}</Link></div>
        ))}

   <div></div>
   <div className='Nav_seaMore'><Link>See More</Link></div>
</div>
  )
}

export default NavPopular