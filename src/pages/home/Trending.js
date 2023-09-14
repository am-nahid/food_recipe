import React, { useState, useEffect } from "react";
import axios from "axios";
import { host } from "../../constants/constants";
import { Link } from "react-router-dom";
// import './home.style.css'

function Trending() {
  const [recipes, setRecipes] = useState([]);
  const query = "trending";

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
    // finally {
    //     setLoading(true);
    // }
  };

  return (
    <section className="cntr_Main">
      <div className="cntr_Sub">
        <div className="comments_heading padd_prop-explr">
          <h2>Trending Now</h2>
          {/* <div>View All</div> */}
        </div>

        <div className="trending-container">
          <div className="trending-cntnr">
            {recipes.slice(0, 4).map((recipe, index) => {
              return (
                <div className="trending-card" key={index}>
                  <Link to={`/recipe/${recipe.recipe.label}`} state={recipe}>
                    <img
                      src={recipe.recipe.image}
                      alt={`${recipe.recipe.label}`}
                    />
                  </Link>
                  <Link to={`/recipe/${recipe.recipe.label}`} state={recipe}>
                    <div>{recipe.recipe.label}</div>
                  </Link>
                </div>
              );
            })}

            {/* demo */}

            {/* <div className='trending-card'>
                <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/93/50/dKELoTKxTcW3dfYDAe1g_0S9A2821.jpg' alt=''/>
                <div>pineapple and zucchini bread</div>
            </div>
            <div className='trending-card'>
                <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/93/50/dKELoTKxTcW3dfYDAe1g_0S9A2821.jpg' alt=''/>
                <div>pineapple and zucchini bread</div>
            </div>
            <div className='trending-card'>
                <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/93/50/dKELoTKxTcW3dfYDAe1g_0S9A2821.jpg' alt=''/>
                <div>pineapple and zucchini bread</div>
            </div> */}

            {/* demo */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
