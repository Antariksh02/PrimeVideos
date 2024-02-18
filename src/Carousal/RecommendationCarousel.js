import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { addLink } from '../Redux/CreateSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function RecommendationCarousel({id}) {

const [mydata,mysetdata]=useState(null)
const [trending, setTrending] = useState(null);
  const navigate = useNavigate()
 const dispatch = useDispatch()
 
 useEffect(() => {
  const fetchRecommendations = async () => {
  
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=2f2c4aa57989c7ea1f3c178484230bef`  || `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=2f2c4aa57989c7ea1f3c178484230bef` );
          const json = await response.json();
          console.log(json.results)
          mysetdata(json.results);
       
        } catch (error) {
          console.error("Error fetching trending movies:", error);
        }
      
      
  };

  fetchRecommendations();
},[id]);
useEffect(()=>{
  mysetdata([])
},[])
/*------------------------------------------------------------------------------------------------ */
useEffect(() => {
  const getTrending = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=2f2c4aa57989c7ea1f3c178484230bef" );
      const json = await response.json();
      setTrending(json.results);
      console.log("12345678",JSON.stringify(json.results, null, 2))
    
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  };

  getTrending();
}, []); // Empty dependency array to run the effect only once on mount


const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

// Dynamically set slidesToShow based on window width
const slidesToShow = windowWidth > 1200 ? 4 : windowWidth > 900 ? 4 : windowWidth > 600 ? 3 : 2;
// Custom previous arrow component
const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-prev-arrow"  onClick={onClick}>
    &#8249;
  </div>
);

// Custom next arrow component
const CustomNextArrow = ({ onClick }) => (
  <div className="custom-next-arrow"  onClick={onClick}>
    &#8250;
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 2,
  slidesToShow: slidesToShow,
  prevArrow: <CustomPrevArrow />, // Use a custom component for the previous arrow
  nextArrow: <CustomNextArrow />, // Use a custom component for the next arrow
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

  return (
 
<div className="movieSection">
<div className="movieSectionHeading">
  <h1>
    <span>Customers also watched</span> 
  </h1>

</div>

{mydata && mydata.length > 0 ?(<div className="movie-carousel">

<Slider {...settings}  >

  {mydata?.map((movie, index) => (
    <div key={index} className="carousel-inside-slide"  onClick={()=>{ navigate(`/SinglePage/${movie.title?(movie.title):(movie.name)}/${movie.id}`) }} >
      <div className="carousel-inside-slideImg" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }} >
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
    
    </div>
  ))}

</Slider>
</div>):(<div className="movie-carousel">

<Slider {...settings}  >

  {trending?.map((movie, index) => (
    <div key={index} className="carousel-inside-slide"  onClick={()=>{ navigate(`/SinglePage/${movie.title?(movie.title):(movie.name)}/${movie.id}`) }} >
      <div className="carousel-inside-slideImg" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }} >
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
    
    </div>
  ))}

</Slider>
</div>)}



</div>
  )
}



