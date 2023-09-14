import React from 'react'
import NavBar from '../../Navbar'
import './profile.style.css'



function Profile() {

  const email = localStorage.getItem("user_name")
  const name= email.split('@')
  // console.log(name[0]);
  return (
    <div>
        <NavBar/>
        <div className='top-profile-cntnr'>
            <div className='linearGradient'></div>
            <div className='emj-follower-cntr'>
           <div className='profile-emoji-img'>
              <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_202,w_202/v1/gk-static/gk/img/avatar/drink.png' alt='no image found'/>
           </div> 
           <div className='profile-box'>

           <div className='follower'><span>FOLLOWERS</span> <span>0</span></div>
           <div className='follower'><span>FOLLOWING</span> <span>0</span></div>
           </div>
           </div>
           <h2 className='email-shower'>{name[0]}</h2>
        </div>
        <div className='profile_cntr'>

        </div>
    </div>
  )
}

export default Profile