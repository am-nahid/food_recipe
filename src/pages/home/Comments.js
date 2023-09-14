import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { host } from "../../constants/constants";
import axios from "axios";
import { DotSpinner } from '@uiball/loaders'
import { Link, useNavigate } from "react-router-dom";



function Comments() {
  const navi = useNavigate()
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading]= useState(true)

  function formatTimeDifference(timestamp) {
    const currentTime = new Date();
    const commentTime = new Date(timestamp);
    const timeDifference = currentTime - commentTime;
  
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (seconds < 60) {
      return `${seconds} sec${seconds !== 1 ? "s" : ""} ago`;
    } else if (minutes < 60) {
      return `${minutes} min${minutes !== 1 ? "s" : ""} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else {
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    }
  }

  const fetchComments=()=>{
    const API = `${host}/user/all-comments`;
    axios
      .get(API)
      .then((res) => {setComments(res.data)
    setIsLoading(false)
    })
      .catch((err) => console.log(err));
  }

  useEffect(() => {

      const intervalId = setInterval(fetchComments, 10000);

      return () => clearInterval(intervalId);
  }, [comments]);



  return (
    <section className="cntr_Main">
      <div className="cntr_Sub">
        <div className="comments_heading">
          <h2>FRESH FROM OUR COMMUNITY</h2>
          {/* <div>View All</div> */}
        </div>
        {
isLoading 
?
<div className="ui_loader"><DotSpinner 
 size={40}
 speed={0.9} 
 color="black" 

/></div>
:
        

        <div className="comment-card-cntr">
            {
comments.slice(-3).reverse().map((item)=>{
return(
          
          <div className="comment_card" key={item._id}>
            <div className="comment_from">
              <img src="https://play-lh.googleusercontent.com/EotxkWC4dXajaesh2iVgdIB5-o6pINoas_k-z7nVjRGSu4k9QZwMZIcRNXyUWGn3rg" />
              <div>
                <span>{item.name} &nbsp;</span>asked a question about{" "}
                {/* <Link to={ `recipe/${item.recipeName}`} */}
                {/* // state={item.recipe[0]} */}
                        {/* >  */}
                        <span onClick={()=>navi( `recipe/${item.recipeName}`)} className="comment-recipt_title">{item.recipeName}</span>
                        {/* </Link>  */}
              </div>
            </div>
            <div className="user_comment">
              <div>
         {item.comment}
              </div>
            </div>

            <div className="comment_base">
              <div className="comment_time">{formatTimeDifference(item.commentTimestamp)}</div>
              <div className="comment_like">
                REPLY &nbsp; <AiOutlineHeart className="heart_cmnt" />
              </div>
            </div>
          </div>
)
})
}

{/* comment */}

          {/* <div className="comment_card">
            <div className="comment_from">
              <img src="https://play-lh.googleusercontent.com/EotxkWC4dXajaesh2iVgdIB5-o6pINoas_k-z7nVjRGSu4k9QZwMZIcRNXyUWGn3rg" />
              <div>
                <span>User &nbsp;</span>asked a question about{" "}
                <span>product title</span>
              </div>
            </div>
            <div className="user_comment">
              <div>
                I have probably made this 100 times since I got the recipe 7
                years ago. Everyone asks for the recipe when I bring it. It is
                so moist and delicious. I do add 1 more tsp of cinnamon and 1
                tsp. of pumpkin pie spice because I like the added flavor.
              </div>
            </div>

            <div className="comment_base">
              <div className="comment_time">time</div>
              <div className="comment_like">
                REPLY &nbsp; <AiOutlineHeart className="heart_cmnt" />
              </div>
            </div>
          </div>
          <div className="comment_card">3</div> */}
        {/* comment */}

        </div>

    }

      </div>
    </section>
  );
}

export default Comments;
