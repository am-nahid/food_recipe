import React, { useEffect, useRef, useState } from "react";
import { GrMore } from "react-icons/gr";
import { BsEmojiSmileFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import { host } from "../../constants/constants";
import { useParams } from "react-router-dom";

function CommentsOfRecipe(props) {
  // const { recipe, sendComment } = props;
  let { details } = useParams();
  const [recipeComments, setRecipeComments] = useState([]);

  const { count } = props;
  // const user_id = localStorage.getItem("user_id")

  useEffect(() => {
    const API = `${host}/user/recipe-comment/${details}`;
    axios.get(API).then((res) => setRecipeComments(res.data));
    // console.log("updating phase");
    // console.log(recipeComments);
  }, [count]);

  // console.log(recipeComments);

  return (
    <div>
      <div className="comments_displayer">
        {/* comment */}

        {recipeComments?.map((item) => {
          return (
            <div className="comments_display_card" key={item._id}>
              <div className="main_cntnt-cmnt">
                <div className="comments_smile-emoji">
                  <BsEmojiSmileFill />
                </div>

                <div className="cmnt_text">{item.comment}</div>

                <div className="three_dots">
                  <GrMore />
                </div>
              </div>

              <div className="detail_comment_base">
                <div className="comment_like">
                  REPLY &nbsp; <AiOutlineHeart className="heart_cmnt" />
                </div>
              </div>
            </div>
          );
        })}

        {/* comment */}
      </div>
    </div>
  );
}

export default CommentsOfRecipe;
