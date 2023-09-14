import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import NavBar from "../../Navbar";
import { useLocation } from "react-router-dom";
import { TfiDownload } from "react-icons/tfi";
import { FaRegBookmark } from "react-icons/fa";
import { AiOutlinePrinter } from "react-icons/ai";
import { GrMore } from "react-icons/gr";
// import { LuSmile } from "react-icons/lu";
import { BsArrow90DegRight, BsCamera, BsEmojiSmileFill } from "react-icons/bs";
import "./detailedPage.style.css";
import { useSelector, useDispatch } from "react-redux";
import { SignupForm, LoginForm } from "../../components";
import { loginFunc } from "../../Utility/reduxtool/UserLoggedSlice";
import CommentsOfRecipe from "./Comments";
import { host } from "../../constants/constants";


function DetailedRecipe() {
  const state = useSelector((state) => state.userControl);
  const dispatch = useDispatch();
  
  const location = useLocation();
  console.log(location.state);
  const query = location.state.recipe.cuisineType[0];
  const name = location.state.recipe.label;

  const [loggedIn, setLoggedIn] = useState(false);
  const [login, setLogin] = useState(state.loginPage);

  const [recipes, setRecipes] = useState([]);
  // console.log(location);

  const comment = useRef(null);
  const [commentValue, setCommentValue] = useState("")
  const [sendComment, setSendComment] = useState("");

  const user_id = localStorage.getItem("user_id")

  // console.log(query);
  useEffect(() => {
    getRecipes();
  }, [query]);

  useEffect(() => {
    setLogin(state.loginPage);
  }, [state]);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      setLoggedIn(token);
    }
  }, [token]);

  const getRecipes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/recipes/${query}`
      );
      // console.log(response.data);
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const showSignupForm = () => {
    dispatch(loginFunc());
    setLogin(login);
  };

  // const handleComment=(e)=>{
  //   setComment(e.target.value)
  //       }

  const handleSubmit =async (e) => {
    e.preventDefault();
    const value = comment.current.value.trim();
    // setSendComment(comment)
    setSendComment(value);

    if(!value){
      return ;
    }else{

   axios.post(`${host}/user/post-comments`,{
    comment:value,
  user_id,
  recipe:location.state.recipe,
  recipeName: name
})
    setCommentValue("")
}
  };

  return (
    <>
      <div>
        <NavBar />
        <section className="cntr_Main ">
          <div className="detailed_cntr_Sub side_property">
            <article className="detailed_article">
              <div className="detailed-container">
                <h1>{name}</h1>
                <div className="detail_btns">
                  <ul>
                    <li>
                      <FaRegBookmark />
                    </li>
                    <li>
                      <TfiDownload />
                    </li>
                    <li>
                      <AiOutlinePrinter />
                    </li>
                    <li>
                      <BsArrow90DegRight />
                    </li>
                  </ul>
                  <div className="detail_upload_btn">
                    <BsCamera /> <span>i made this</span>
                  </div>
                </div>
                <div className="detail_img">
                  <img src={location.state.recipe.image} alt={`${name}`} />
                </div>

                <div className="ingredients_cntnr">
                  <h2>INGREDIENTS</h2>
                  {/* <div>{location.state.recipe.ingredientLines}</div> */}
                  <ol className="ingredients_list" type="1">
                    {location.state.recipe.ingredients.map((item, index) => {
                      return <li key={index}>{item.text}</li>;
                    })}
                  </ol>
                </div>
              </div>

              <div className="comments_cntr">
                <h2 className="detail_commets_head">COMMENTS</h2>

                <div className="comments_input_line">
                  <div className="detailed_smile-emoji">
                    <BsEmojiSmileFill />
                    {/* <LuSmile/> */}
                  </div>
                  <input
                    type="text"
                    onChange={(e) => setCommentValue(e.target.value)}
                    // onChange={handleComment}
                    ref={comment}
                     value={commentValue}
                    placeholder="write your comment here..."
                  />
                  {loggedIn ? (
                    <button
                      onClick={handleSubmit}
                      className="comments_submit comment_btn"
                    >
                      SUBMIT
                    </button>
                  ) : (
                    <button
                      className="comments_signup comment_btn"
                      onClick={showSignupForm}
                    >
                      SIGN IN
                    </button>
                  )}
                </div>
              </div>

              <CommentsOfRecipe
                recipe={location.state.recipe}
                sendComment={sendComment}
              />

              {/* <div>Quantity: {item.quantity}</div> */}

              <div className="trending-cntnr">
                {recipes.slice(0, 3).map((recipe, index) => {
                  return (
                    <div className="extra-detail-card" key={index}>
                      <img
                        src={recipe.recipe.image}
                        alt={`${recipe.recipe.label}`}
                      />
                      <div>{recipe.recipe.label}</div>
                    </div>
                  );
                })}
              </div>
            </article>

            <div className="detail_ad"></div>
          </div>
        </section>
      </div>
      {state.loginPage && <div className="backDrop"></div>}
      {state.loginPage && <LoginForm />}
      {state.signinPage && <div className="backDrop"></div>}
      {state.signinPage && <SignupForm />}
    </>
  );
}

export default DetailedRecipe;
