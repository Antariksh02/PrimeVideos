import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import MovieSearch from './MovieSearch';

export default function Navbar() {
 const navigate =  useNavigate()
  const data = useSelector((state)=>state.movies.mymovie);


  const [trending, setTrending] = useState([])
  const getTrending = async()=>{
   await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=2f2c4aa57989c7ea1f3c178484230bef")
    .then(rs => rs.json())
    .then(json => setTrending(json.results))
    .then(json => console.log(json))
  }
useEffect(()=>{
  getTrending()
},[])




  return (
   <nav className="mynav navbar navbar-expand-lg navbar-dark py-3 px-5 " style={{background:"black"}}>
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" ><img width={"110px"} src='https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span >Menu</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav fs-5" >
        <li className="nav-item">
          <Link to="/" className="nav-link " aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Movie" className="nav-link " aria-current="page" >Movies</Link>
        </li>
        <li className="nav-item">
          <Link to="/TV" className="nav-link " aria-current="page" >Tvshows</Link>
        </li>
   
     
       
      </ul>

      <form className="d-flex column-gap-1">

<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
<SearchIcon  style={{color:"#b3b4b7", fontSize:"30px"}}/>
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header ">
        <h5 class="modal-title" id="exampleModalLabel">Search Movie</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <MovieSearch/>
      </div>
     
    </div>
  </div>
</div>
 
 



 <Link to="/Login"> <button id='navLogin'  type="button"  class="btn btn-secondary rounded-pill position-relative" ><PersonIcon/></button></Link>
 
 <Link to="/WatchList"><button  type="button" class="btn position-relative rounded-pill">
 <AddIcon style={{color:"#b3b4b7", fontSize:"30px"}}/>
  {data.length?( <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{data.length}</span>):(<></>)}
</button> </Link>

 

</form>
    </div>
   

  </div>
</nav>

  )
}
