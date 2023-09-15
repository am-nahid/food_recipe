import React, { useState } from 'react'
import NavBar from '../../Navbar'
import './profile.style.css'
import {BsCircle, BsCamera} from 'react-icons/bs'
import {PiLightbulbFilamentLight} from 'react-icons/pi'
import {CiStar, CiUser} from 'react-icons/ci'
import {TbMessageBolt} from 'react-icons/tb'
import {LiaQuestionSolid} from 'react-icons/lia'
import {BiUserPlus} from 'react-icons/bi'
import {VscCircle} from 'react-icons/vsc'
import iceCream from '../../assets/icecream.jpg'

function Profile() {

  const [label,setlabel]= useState("Activity")
  const [selectedFilter, setSelectedFilter] = useState("Activity");

  const email = localStorage.getItem("user_name")
  const name= email.split('@')
  // console.log(name[0]);


  const profileData = [
    { label: "Activity", key: "Activity" , icons: <VscCircle/> , },
    { label: "Recipes", key: "Recipes" , icons: <PiLightbulbFilamentLight/>  },
    { label: "Photos", key: "Photos"  , icons: <BsCamera/>  },
    { label: "Reviews", key: "Reviews" , icons: <CiStar/>  },
    { label: "Tweaks", key: "Tweaks" , icons: <TbMessageBolt/> },
    { label: "Questions", key: "Questions" , icons: <LiaQuestionSolid/> },
    { label: "Following", key: "Following"  , icons: <BiUserPlus/> },
    { label: "Followers", key: "Followers"  , icons: <CiUser/> },
  ];

 
const handleSection=(item)=>{
// console.log(item.label);
setlabel(item.label)
}


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
           <h2 className='email-shower'>@{name[0]}</h2>
        </div>
        <div className='profile_static_cntr'>

<article className='profile_white_cntr'>
<section>
  <div>Filters</div>
 
<ul className='side_profile_content'>
   {
    profileData.map((item)=>(
      <li onClick={()=>handleSection(item)} key={item.key}>
         <span>{item.icons}</span> <span>{item.label}</span>
      </li>
    ))
   }
</ul>

</section>

<section>
<h3 className='profile_label'>{label}</h3>
<div className='right_section_div'>
<div>
<img src={iceCream}/>
</div>
<div>
<h3>UH OH!</h3>
<div>Looks like {name[0]} has no {label}!</div>
</div>
</div>
</section>

</article>



<article className='mobile_white_cntr'>
<section>
  {/* <div>Filters</div> */}
 
  <select
              className='select'
              onChange={(e) => handleSection(profileData.find((item) => item.key === e.target.value))}
              value={selectedFilter}
            >
              {profileData.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.label}
                </option>
              ))}
            </select>

</section>

<section>
{/* <h3 className='profile_label'>{label}</h3> */}
<div className='right_section_div'>
<div>
<img className='iceCream' src={iceCream}/>
</div>
<div>
<h3>UH OH!</h3>
<div>Looks like {name[0]} has no {label}!</div>
</div>
</div>
</section>

</article>
        </div>
    </div>
  )
}

export default Profile