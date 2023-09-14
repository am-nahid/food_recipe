import React from 'react'
import './navbar.style.css';
import { Link } from 'react-router-dom';

function NavHolidays() {

  const navItemData = [
  { label: "Dinner Party Recipes"},
 { label: "Game Day Recipes"},
 { label: "Valentine's Day Recipes"},
 { label: "St. Patrick's Day Recipes"},
 { label: "Easter Recipes"},
 { label: "Cinco de Mayo Recipes"},
 { label: "Mother's Day Recipes"},
 { label: "Memorial Day Recipes"},
 
 { label: "4th of July Recipes"},
 { label: "Halloween Recipes"},
 { label: "Thanksgiving Recipes"},
 { label: "Hanukkah Recipes"},
 { label: "Christmas Recipes"},
 { label: "New Year's Recipes"},
  ]
  
  return (
    <div className='NavBar-drops'>
         {/* <div><Link>Dinner Party Recipes</Link></div>
        <div><Link>Game Day Recipes</Link></div>
        <div><Link>Valentine's Day Recipes</Link></div>
        <div><Link>St. Patrick's Day Recipes</Link></div>
        <div><Link>Easter Recipes</Link></div>
        <div><Link>Cinco de Mayo Recipes</Link></div>
        <div><Link>Mother's Day Recipes</Link></div>
        <div><Link>Memorial Day Recipes</Link></div>
        {/* <div><Link>Juneteenth Recipes</Link></div> */}
            {/* <div><Link>4th of July Recipes</Link></div>
        <div><Link>Halloween Recipes</Link></div>
        <div><Link>Thanksgiving Recipes</Link></div>
        <div><Link>Hanukkah Recipes</Link></div>
        <div><Link>Christmas Recipes</Link></div>
        <div><Link>New Year's Recipes</Link></div> */}

{navItemData.map((item) => (
         <div><Link to={`/ideas/${item.label}`}>{item.label}</Link></div>
        ))}
   </div>
  )
}

export default NavHolidays