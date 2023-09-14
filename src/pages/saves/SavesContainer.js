import React, { useState, useEffect } from "react";
import './saves.style.css'
import NavBar from "../../Navbar";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import {BsArrow90DegRight} from 'react-icons/bs'
import axios from "axios";
import { host } from "../../constants/constants";
import { Link } from "react-router-dom";

function SavesNavContainer() {
const [showSearchBar, setShowSearchBar] = useState(false)
const [savesData,setSavesData]= useState([])

const handleShowSearchBar = ()=>{
  setShowSearchBar(!showSearchBar)
}

const user_id = localStorage.getItem("user_id")

useEffect(()=>{
const API = `${host}/user/fetch-recipe/${user_id}`
  axios.get(API)
  .then(res=>setSavesData(res.data))
  .catch(err=>console.log(err))
},[])

// console.log(savesData);
// console.log(savesData[0].saves);

  return (
    <div>
           <div className="save_navBar">
        <NavBar />
      
        <div className="save_box-cntr">
          { !showSearchBar &&
           <div className="save_box-saves">
           <div className="saves_text">Saves</div>

              <div className="save-btn-cntnr">
                <div>
                  <BsSearch style={{ fontWeight:"900"}} onClick={handleShowSearchBar}  />
                </div>
                <span>|</span>
                <div className="edit-btn">
                    edit
                </div>
        </div>
            </div>
 }

            { showSearchBar &&
                <div  className="save_box-search">
                    <div className="save-search-box">
                    <BsSearch style={{ fontWeight:"900"}} />

                <input type="text" placeholder="Search for Recipes in saves"/>
                <div className="x-button">X</div>
                <button onClick={handleShowSearchBar}  className="saves_cancel-button">cancel</button>
                    </div>
            </div> 
            
            }


<div className="save_flex">
  <ul className="sub_flex_cntr">
    <li className="saves_common_cntr ">RECIPES</li>
    {/* <li className="saves_common_cntr ">MY BOARDS</li> */}
  </ul>
</div>


<main className="saves-cntnr_outline">

  <div className="saves-card-cntnrs">
    <div className="add-card saves-card">
      <div className="singleCard-content">
      <Link to='/ideas/FAN FAVORITES'><button>+</button></Link>
      <div className="discover"><Link to='/ideas/FAN FAVORITES'>Discover recipes</Link></div>
      </div>

    </div>
{ savesData[0]?.saves.map((item)=>{
  return(
    <div className="fetched-card saves-card"
     key={item._id}
     >
    
        <div className="card-firstHalf">

      <img
      //  src="https://img.sndimg.com/food/image/upload/w_400,h_300,fl_progressive,q_80,c_fill/v1/img/recipes/82/28/8/cB14froTlmpDfRF49wmQ_gumbo%20SITE-3.jpg"
       src={item.recipe[0].image}
       alt={item.recipe[0].label}
       />
        </div>
        <div className="card-secondHalf">
                    <h2 className="save-card_label">
                      {item.recipeName}
                    </h2>
                    <div className="save-card_source">
                      By <span>
                        {item.recipe[0].source}
                        </span>
                    </div>
                  
      </div>

    </div>
  )
     })
} 
  </div>
    
</main>
          </div>
        </div>
      </div>

  )
}

export default SavesNavContainer