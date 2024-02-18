import React from 'react'
import './Filter.css'
import { useDispatch, useSelector } from 'react-redux'
import { addFilter } from './Redux/Filters'
export default function Filter() {
const dispatch = useDispatch()

  return (
<div className="filter">
    <button className="filterBtn" value="All">All</button>
    <button className="filterBtn" onClick={()=>{dispatch(addFilter("18"))
console.log(addFilter)}} value="Drama">Drama</button>
    <button className="filterBtn"  onClick={()=>dispatch(addFilter("Comedy"))}value="Comedy">Comedy</button>
    <button className="filterBtn" value="Action">Action</button>
    <button className="filterBtn" value="Adventure">Adventure</button>
 
</div>
  )
}
