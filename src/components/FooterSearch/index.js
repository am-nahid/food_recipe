import React, { useState } from "react";
import './footerSearch.style.css'
import {TfiSearch} from 'react-icons/tfi'
import {BsSearch} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

function FooterSearch() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // console.log(e);
      navigate(`/search/${search}`);
    }
  };

  const handleButton = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search/${search}`);
    }
  };
  
  return (
    <div className='fsCntnr'>
        <h2>FIND MORE RECIPES</h2>
        <form>
        <div className='footer_search_input'>
            <span><BsSearch/></span>
            <input type='text' placeholder="I'm craving..."  
                   value={search}
                  onChange={updateSearch}
                  onKeyDown={handleKeyPress}/>
        </div>
        <button onClick={handleButton} className='footer_search_btn'>Search </button>
        </form>
    </div>
  )
}

export default FooterSearch