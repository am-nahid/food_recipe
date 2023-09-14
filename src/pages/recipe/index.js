import React from 'react'
import NavBar from '../../Navbar'
import RecipeComponent from './RecipeComponent'

function Recipe() {
  return (
    <>
    <NavBar/>
    <main className='all_main'>
    <div>Recipe</div>
<RecipeComponent/>

    </main>
    
    </>
  )
}

export default Recipe