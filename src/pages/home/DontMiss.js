import React, { useState, useEffect } from "react";
import axios from "axios";
import { host } from "../../constants/constants";
import { Link } from "react-router-dom";
// import './home.style.css'

function DontMiss() {
  const [recipes, setRecipes] = useState([]);
  const query = "popular"

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
    <section className="cntr_Main">
    <div className="cntr_Sub crav_card_cntr">

      
        <div className="comments_heading padd_prop">
          <h2>DON'T MISS</h2>
        </div>

      <div className="crav_card_cntnr">

      {
 recipes.slice(0,3).map((recipe,index)=>{
  return(
        <div className="craving-img-cntr crav_card" key={index}>
            
        <img src={recipe.recipe.image} alt={`${recipe.recipe.label}`}/>
          <div className="craving-text-cntr">
            <div className="crav-caption">COLLECTION</div>
          <Link to={`/recipe/${recipe.recipe.label}`} state={recipe}>
            <div className="crav-title">{recipe.recipe.label}</div>
          </Link>
          </div>
        </div>

  )
})
}




{/* demo */}

{/* <div className="craving-img-cntr crav_card">
          <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/79/94/4/MDUNtFdSSheVHJJwGTqC_0S9A0331.jpg" />
          <div className="craving-text-cntr">
            <div className="crav-caption">COLLECTION</div>
            <div className="crav-title">24 FREEZER -FRIENDLY MEALS</div>
          </div>
        </div>

        <div className="craving-img-cntr crav_card">
          <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/79/94/4/MDUNtFdSSheVHJJwGTqC_0S9A0331.jpg" />
          <div className="craving-text-cntr">
            <div className="crav-caption">COLLECTION</div>
            <div className="crav-title">24 FREEZER -FRIENDLY MEALS</div>
          </div>
        </div> */}
{/* demo */}
      </div>
    </div>
  </section>
  )
}

export default DontMiss