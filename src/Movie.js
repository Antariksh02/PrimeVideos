import React, { useEffect, useState } from 'react'
import './Movie.css'
import AllCaraousal from './Carousal/AllCaraousal'
import { useNavigate } from 'react-router-dom'
export default function Movie() {
  
  const navigate = useNavigate()




  

  const [trending, setTrending] = useState([])
  const getTrending = async()=>{
   await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=2f2c4aa57989c7ea1f3c178484230bef")
    .then(rs => rs.json())
    .then(json => setTrending(json.results))
    .then(json => console.log(json))
  }

   
    const [topRated, setTopRated] = useState([])
    const getTopRated = async()=>{
     await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=2f2c4aa57989c7ea1f3c178484230bef")
      .then(rs => rs.json())
      .then(json => setTopRated(json.results))
      .then(json => console.log(json))
    }


  const [movies, setMovies] = useState([])
const getMovies = async()=>{
 await fetch("https://api.themoviedb.org/3/discover/movie?api_key=2f2c4aa57989c7ea1f3c178484230bef")
  .then(rs => rs.json())
  .then(json => setMovies(json.results))
  .then(json => console.log(json))
}

useEffect(() => {
  getMovies();
  getTrending();
  getTopRated();

}, []);

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
                {movies?.slice(0,3).map((movie, index) => (
                  
                  <div key={index} className="carouselInsideSlide"  style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }} >
                  
                   
                    <div className="movieDetails">
                      <div className="movieDetail">
                      <h1>{movie.title}</h1>
                          <h4>{movie.tagline}</h4>
                      <div className="popularCardSubInfo">
                      <p>{movie.release_date || movie.first_air_date}</p>
                     
                      <h5>{movie.adult?(<>A</>):(<>U/A</>)}</h5>
    </div>
    
    <div className="moreDetails">
      <button  onClick={() => navigate(`/SinglePage/${movie.title ? movie.title : movie.name}/${movie.id}`)}>More Details</button>
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
    
    
    
    <AllCaraousal urlName="trending/all/day" title="Trending Movies" data={trending}/>
    
    <AllCaraousal urlName="discover/movie" title="Movies" data={movies}/>
    
    <AllCaraousal urlName="movie/top_rated" title="Top Rated Movies" data={topRated}/>
    
  
    
    
    
    
    
            </div>
  )
}
