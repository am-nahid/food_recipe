import React, { useState, useEffect } from "react";
import axios from "axios";
import { host } from "../../constants/constants";
import { Link } from "react-router-dom";
// import './home.style.css'

function Explore() {
  const [recipes, setRecipes] = useState([]);
  const query = "explore"

  useEffect(() => {
    getRecipes();
  }, []);


  const getRecipes = async () => {
    try {
        const response = await axios.get(`${host}/recipes/${query}`);
        // console.log(response.data);
        setRecipes(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    } 
  }

  return (
    <section className='cntr_Main'>
        <div className='cntr_Sub'>

<div className="comments_heading padd_prop-explr">
            <h2>EXPLORE MORE</h2>
          </div>

          <div className='explore-cntnr'>

          {
 recipes.slice(0,6).map((recipe,index)=>{
  return(
            <div className='explore-card' key={index}>
                          <Link to={`/recipe/${recipe.recipe.label}`} state={recipe}>
                <img src={recipe.recipe.image} alt={`${recipe.recipe.label}`}/>
                          </Link>
                <Link to={`/recipe/${recipe.recipe.label}`} state={recipe}>

                <div>{recipe.recipe.label}</div>
                </Link>
            </div>
  )
})
}

{/* demo */}
            {/* <div className='explore-card'>
                <img src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/5e1cc137-8dfe-4ab0-89f1-488cf8fd4450.jpg' alt=''/>
                <div>Text</div>
            </div>
            <div className='explore-card'>
                <img src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/5e1cc137-8dfe-4ab0-89f1-488cf8fd4450.jpg' alt=''/>
                <div>Text</div>
            </div>
            <div className='explore-card'>
                <img src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/5e1cc137-8dfe-4ab0-89f1-488cf8fd4450.jpg' alt=''/>
                <div>Text</div>
            </div>
            <div className='explore-card'>
                <img src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/5e1cc137-8dfe-4ab0-89f1-488cf8fd4450.jpg' alt=''/>
                <div>Text</div>
            </div>
            <div className='explore-card'>
                <img src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/5e1cc137-8dfe-4ab0-89f1-488cf8fd4450.jpg' alt=''/>
                <div>Text</div>
            </div> */}

          </div>
            </div>
            </section>
  )
}

export default Explore