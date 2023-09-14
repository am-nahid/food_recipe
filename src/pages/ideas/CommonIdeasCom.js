import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import {  BsEnvelope } from "react-icons/bs";

import './ideas.style.css'
import { DotSpinner } from '@uiball/loaders'
import { host } from "../../constants/constants";
import { Advertisement } from "../../components";



function CommonIdeasCom() {
    let {product} = useParams()
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
 

    
  useEffect(() => {
    getRecipes();
  }, [product]);

  const getRecipes = async () => {
    try {
        const response = await axios.get(`${host}/recipes/${product}`);
        // console.log(response.data);
        setRecipes(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        setLoading(true);
    }
};

    // console.log(product);
  return (
    <div>
      <header className="item-header">


      <h1 className="item_heading">{product}</h1>
      <div className="item-logo_cntnr">
        <div className="item-logo pintrst"><FaPinterestP/></div>
        <div className="item-logo fb"><FaFacebookF/></div>
        <div className="item-logo envelop"><BsEnvelope/></div>
      </div>
      </header>
      <div className="item-main-cntnr common_flex">
        <div className="item_sum_cntnr">
<div className="item-cntnr">
      {
//       loading ? (
//         <div className="item-loader">

//         <DotSpinner
//   size={60}
//   speed={0.9}
//   color="black"
  
//   style={{ overflow: "hidden", paddingLeft: "40%" }}
// />                      
//   </div>
//   ) : (
        recipes.map((recipe,index)=>{
          return(
            <div
            key={index}
            // title={recipe.recipe.label}
            className="item-page-card"

       
          >
            
             {/* <div className="item_img_cntr">     */}
           <Link to={`/recipe/${recipe.recipe.label}`} state={recipe}  > 
           <img className="item_img" src={recipe.recipe.image} alt={`${recipe.recipe.label}`} />
 </Link> 
            {/* </div>  */}
            <div className="item_text_cntr">
              <div>Recipe</div>
              <h2 className="item-card_label">
                      {recipe.recipe.label}
                    </h2>
            </div>
            </div>
          )
        })
  // )
      }
      </div>
      <div className="item_advertise-cntr">
        <Advertisement/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default CommonIdeasCom