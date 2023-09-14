import React from 'react'
import { useParams } from 'react-router-dom'


function RecipeComponent() {

    let {product} = useParams()

    console.log(product);
  return (
    <div>

    </div>
  )
}

export default RecipeComponent