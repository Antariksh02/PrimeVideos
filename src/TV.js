import React, { useEffect, useState } from 'react';
import './Movie.css';
import AllCaraousal from './Carousal/AllCaraousal';
export default function TV() {


  const [tv, setTv] = useState([])
  const getTv = async()=>{
   await fetch("https://api.themoviedb.org/3/discover/tv?api_key=2f2c4aa57989c7ea1f3c178484230bef")
    .then(rs => rs.json())
    .then(json => setTv(json.results))
    .then(json => console.log(json))
  }
  
  
  const [tvTopRated, setTvTopRated] = useState([])
  const getTvTopRated = async()=>{
   await fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=2f2c4aa57989c7ea1f3c178484230bef")
    .then(rs => rs.json())
    .then(json => setTvTopRated(json.results))
    .then(json => console.log(json))
  }

   
  const [airing, setAiring] = useState([])
  const getAiring = async()=>{
   await fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=2f2c4aa57989c7ea1f3c178484230bef")
    .then(rs => rs.json())
    .then(json => setAiring(json.results))
    .then(json => console.log(json))
  }

  const [onairing, setOnairing] = useState([])
  const getOnairing = async()=>{
   await fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=2f2c4aa57989c7ea1f3c178484230bef")
    .then(rs => rs.json())
    .then(json => setOnairing(json.results))
    .then(json => console.log(json))
  }
    useEffect(()=>{
      getTv()
        getTvTopRated()
        getAiring()
        getOnairing()
    },[])

    

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    };
    
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3
      );
    };
    
 

    return (
      <div className="homePage">

    <div className="homeHeader">
    <div className="homeMovieCarousel">
              <div className="carouselInside" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {tv?.slice(0,3).map((tv, index) => (
                  
                  <div key={index} className="carouselInsideSlide"  style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${tv.backdrop_path})` }} >
                  
                   
                    <div className="movieDetails">
                      <div className="movieDetail">
                      <h1>{tv.original_name||tv.name}</h1>
                          <h4>{tv.tagline}</h4>
                      <div className="popularCardSubInfo">
                      <p>{tv.release_date || tv.first_air_date}</p>
                     
                      <h5>{tv.adult?(<>A</>):(<>U/A</>)}</h5>
    </div>
    
    <div className="moreDetails">
      <button>More Details</button>
    </div>
                 
                      {/* Add more movie details as needed */}
                      </div>
                   
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-button previous" onClick={prevSlide}>&#8249;</button>
              <button className="carousel-button nextPage" onClick={nextSlide}>&#8250;</button>
            </div>
        </div>
    
    
        <AllCaraousal urlName="discover/tv" title="Tv Shows" data={tv}/>
    
    <AllCaraousal urlName="tv/top_rated" title="Top Rated Tv Shows" data={tvTopRated}/>
    
    <AllCaraousal urlName="tv/airing_today" title="TV Shows Airing Today" data={airing}/>
    
    <AllCaraousal urlName="tv/on_the_air" title="Currently Airing TV Shows" data={onairing}/>
    
    
    
    
    
            </div>
      )
    }
    
