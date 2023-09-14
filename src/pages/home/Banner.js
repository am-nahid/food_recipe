import React from 'react'
import './home.style.css'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <section className='banner-section'>
        <div className='banner_img_cntnr'>
       <img className='banner-img' src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/24/25/3/l3Fx6AnTcGOjhwYNhggo_0S9A9332.jpg"/>
       <div className='banner-text-cntnr'>
        <h1>56 GRILLED CHICKEN RECIPES</h1>
        <Link to={'/ideas/grilled chicken recipes'}><button>SEE THEM ALL</button></Link>
        </div>
        </div>
       
        
    </section>
  )
}

export default Banner