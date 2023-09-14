import React, { useEffect, useState } from 'react'
import { host } from '../../constants/constants'
import axios from 'axios'

function Body() {
    const [data,setData] = useState([])

    useEffect(()=>{
        const API = `${host}/user/alldata`
        // const API = `${host}/recipes/holidays`

        axios.get(API)
        .then(res =>setData(res.data))
        .catch(err=>console.log(err))
    },[])

    // console.log(data);
  return (
    <div>
        {
            data?.slice(0,1).map((item,index)=>{
                return(
                    <div key={index}>
                        {/* <img src={item.recipe.image} alt={item.label} />
                        <div>{item.recipe.label}</div> */}
                        <img src={item.urlOfimage} alt={item.label} />
                        <div>{item.label}</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Body