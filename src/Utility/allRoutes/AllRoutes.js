import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {DetailedRecipe, Home, Ideas, Profile, Recipe, SearchPage } from '../../pages'
import Saves from '../../pages/saves'
import FooterSearch from '../../components/FooterSearch'

function AllRoutes() {
  return (
    <BrowserRouter>
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/ideas/:product' element={<Ideas/>}/>
                <Route path='/recipe' element={<Recipe/>}/>
                <Route path='/search' element={<SearchPage/>}/>
                <Route path="/search/:recipeName" element={<SearchPage />} />
                <Route path='/saves' element={<Saves/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/recipe/:details' element={<DetailedRecipe/>}/>
        </Routes>
        <FooterSearch/>
    </BrowserRouter>
  )
}

export default AllRoutes