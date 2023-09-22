import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import NavBar from "../../Navbar";
import { Link, useLocation, useParams } from "react-router-dom";
import { TfiDownload } from "react-icons/tfi";
import { FaRegBookmark } from "react-icons/fa";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsArrow90DegRight, BsCamera, BsEmojiSmileFill } from "react-icons/bs";
// import { GrMore } from "react-icons/gr";
// import { LuSmile } from "react-icons/lu";
import "./detailedPage.style.css";
import { useSelector, useDispatch } from "react-redux";
import { SignupForm, LoginForm } from "../../components";
import { loginFunc } from "../../Utility/reduxtool/UserLoggedSlice";
import CommentsOfRecipe from "./Comments";
import { host } from "../../constants/constants";
import { toast } from 'react-toastify'


function DetailedRecipe() {
  const state = useSelector((state) => state.userControl);
  const dispatch = useDispatch();
  let {details} = useParams()

  // console.log(details);
  
  // const location = useLocation();
  // console.log(location.state);
  // const query = location.state.recipe.cuisineType[0];
  // const name = location.state.recipe.label;

  const [loggedIn, setLoggedIn] = useState(false);
  const [login, setLogin] = useState(state.loginPage);

  const [recipes, setRecipes] = useState([]);
  const [otherRecipes, setOtherRecipes] = useState([]);
  const [name, setName] = useState("");
  const [detailsApi, setDetailsApi] = useState([]);


  const comment = useRef(null);
  const [commentValue, setCommentValue] = useState("")
  const [sendComment, setSendComment] = useState("");

  const user_id = localStorage.getItem("user_id")
const [count,setCount]= useState(0)
  // console.log(query);
  useEffect(() => {
    getRecipes();
    getOtherRecipes()
  }, [details]);

  const query = "explore"



  const getOtherRecipes = async () => {
    try {
        const response = await axios.get(`${host}/recipes/${query}`);
        // console.log(response.data);
        setOtherRecipes(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    } 
  }


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
        `${host}/recipes/${details}`
      );
      // console.log(response.data);
      setRecipes(response.data);
      // setName(recipes[0].recipe.label)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect(()=>{
  //   setName(recipes[0].recipe.label)
   
  // },[recipes])

  const showSignupForm = () => {
    dispatch(loginFunc());
    setLogin(login);
  };
// console.log(recipes[0].recipe.label);

// console.log(detailsApi);
  const handleSubmit =async (e) => {
    e.preventDefault();
    const value = comment.current.value.trim();
    setSendComment(value);

    if(!value){
      return ;
    }else{
      setCount(count+1)
// console.log(value, user_id,recipes[0].recipe, recipes[0].recipe.label);
   axios.post(`${host}/user/post-comments`,{
    comment:value,
  user_id,
  recipe:recipes[0].recipe,
  recipeName: recipes[0].recipe.label
})
    setCommentValue("")
}
  };


  const headers = {
    'Authorization': `Bearer ${token}`
  };
  
  const handleSave = (item) => {
    const API = `${host}/user/save-recipe`;
  
    axios.post(API, {
      user_id,
      recipeName: recipes[0].recipe.label,
      recipe: recipes[0].recipe
    }, {
      headers: headers 
    })
    .then(response => {
      console.log(response);
      toast.success(`${ recipes[0].recipe.label} added to saves`, {
        position: toast.POSITION.TOP_RIGHT
    });

    })
    .catch(error => {
      console.log(error);
      dispatch(loginFunc());
    setLogin(login)
    });
  }




  return (
    <>
      <div>
        <NavBar />
        <section className="cntr_Main ">
          <div className="detailed_cntr_Sub side_property">
            <article className="detailed_article">

            {
                  recipes?.slice(0,1).map((item,index)=>{
                return(
           
              <div className="detailed-container" key={item._id}>
                <h1 >{item.recipe.label}</h1>
                <div className="detail_btns">
                  <ul>
                    <li onClick={()=>handleSave(item)}>
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
                  <img src={item.recipe.image} alt={`${item.recipe.label}`} />
                </div>

                <div className="ingredients_cntnr">
                  <h2>INGREDIENTS</h2>
                  
                <ol className="ingredients_list" type="1">
                    {item.recipe.ingredients.map((ingredients, index) => {
                      return <li key={index}>{ingredients.text}</li>;
                    })}
                  </ol>
                </div>
                   
              </div>
)
})
  } 
                
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
                  {loggedIn ? 
                  (
                    <button
                      onClick={handleSubmit}
                      className="comments_submit comment_btn"
                    >
                      SUBMIT
                    </button>
                  ) 
                 : ( 
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
             
                // recipe={item.recipe}
                // sendComment={sendComment}
                count={count}
              /> 

    

              {/* <div>Quantity: {item.quantity}</div> */}

              <div className="trending-cntnr">
                {/* {recipes.slice(0, 3).map((recipe, index) => {
                  return (
                    <div className="extra-detail-card" key={index}>
                      <img
                        src={recipe.recipe.image}
                        alt={`${recipe.recipe.label}`}
                      />
                      <div>{recipe.recipe.label}</div>
                    </div>
                  );
                })} */}
                 <div className="trending-container">
          <div className="trending-cntnr">
            {otherRecipes.slice(0, 3).map((recipe, index) => {
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

         
          </div>
        </div>
              </div>
            </article>

            <div className="detail_ad"></div>
          </div>
        </section>
      </div>
      {/* {state.loginPage && <div className="backDrop"></div>}
      {state.loginPage && <LoginForm />}
      {state.signinPage && <div className="backDrop"></div>}
      {state.signinPage && <SignupForm />} */}
    </>
  );
}

export default DetailedRecipe;
