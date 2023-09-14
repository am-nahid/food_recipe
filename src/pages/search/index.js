import React, { useState, useEffect } from "react";
import NavBar from "../../Navbar";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import {BsArrow90DegRight} from 'react-icons/bs'
import "./search.style.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { host } from "../../constants/constants";
import StarRating from "./MockStars";

function SearchPage() {
  let {recipeName} = useParams()
  const navigate = useNavigate()

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");


  useEffect(() => {
    if (recipeName) {
      setQuery(recipeName);
      setSearch(recipeName);
    } else {
      setQuery("chicken");
    }
  }, [recipeName]);
  
  useEffect(() => {
    getRecipes();
  }, [query]);



    const getRecipes = async () => {
      try {
        const response = await axios.get(`${host}/recipes/${query}`);
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        // You can set an error state or display an error message to the user here.
      }
    };


  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getSearch(e);
    }
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    navigate(`/search/${search}`);
    // setSearch("");
  };

  const handleClear = (e) => {
    e.preventDefault();
    setSearch("");
  };

  // console.log(recipes);

  return (
    <>
      <div className="search_navBar">
        <NavBar />
        <div className="search_box-cntr">
          <div className="search_box-outline">
            <div className="search_box-search">
              <label htmlFor="search">I WANT TO MAKE</label>

              <div className="search-box-inputTag">
                <span>
                  <BsSearch />
                </span>
                <input
                  id="search"
                  type="text"
                  value={search}
                  onChange={updateSearch}
                  onKeyDown={handleKeyPress}
                />
              </div>

              <button onClick={handleClear} className="search_box-clear">
                <span>clear</span>
                <div>
                  <RxCross2 />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="all_main">
        {/* <div>SearchPage</div> */}
        <header>{recipes.length} RESULTS</header>
        <section className="cntr_Main search_bc">
          <div className="search-page-cntnr">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                // title={recipe.recipe.label}
                className="search-page-card"

                // ingredients={recipe.recipe.ingredients}
              >
                <Link to={`/recipe/${recipe.recipe.label}`}><img src={recipe.recipe.image} alt={`${recipe.recipe.label}`} /></Link>
                <div className="search-page_details">
                  <div>
                    <h2 className="seacrch-card_label">
                      {recipe.recipe.label}
                    </h2>
                    <div className="seacrch-card_source">
                      By <span>{recipe.recipe.source}</span>
                    </div>
                  </div>
                  <div className="meta-data">
                    <div className="seacrch-card_stars"><span className="stars-mv"><StarRating/></span><span>({ Math.floor((Math.random())*100+1)})</span></div>
                    <div className="seacrch-card_duration">
                      {recipe.recipe.totalTime === 0
                        ? 55
                        : recipe.recipe.totalTime}{" "}
                      mins
                    </div>

                  </div>
{<div className="share-hover"><BsArrow90DegRight/> &nbsp; SHARE</div>}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default SearchPage;
