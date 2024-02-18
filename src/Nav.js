import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import SinglePage from './SinglePage'
import TV from './TV'
import Movie from './Movie'
import Footer from './Footer'
import Login from './Login/Reg/Login'
import Categories from './Categories'
import WatchList from './WatchList'

export default function Nav() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/SinglePage/:name/:id" element={<SinglePage/>}/>
            <Route path='/Movie' element={<Movie/>}/>
            <Route path='/Tv' element={<TV/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Category' element={<Categories/>}/>
            <Route path='/WatchList' element={<WatchList/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}
