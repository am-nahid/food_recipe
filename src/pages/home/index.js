import React from 'react'
import Banner from './Banner'
import Body from './Body'
import Comments from './Comments'
import Craving from './Craving'
import Explore from './Explore'
import Trending from './Trending'
import DontMiss from './DontMiss'
import Banner2 from './Banner2'
import FanFavourite from './FanFavourite'
import MoreIdeas from './MoreIdeas'
import NavBar from '../../Navbar'

function Home() {
  return (
    <div>
      <NavBar/>
        <Banner/>
        <Comments/>
        <Craving/>
        <Explore/>
        <Trending/>
        <DontMiss/>
        <MoreIdeas/>
        <Banner2/>
        <FanFavourite/>
        {/* <Body/> */}
        
    </div>
  )
}

export default Home