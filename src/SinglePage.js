import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SinglePage.css';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addMovie } from './Redux/WatchListSlice';
import $ from 'jquery';
import RecommendationCarousel from './Carousal/RecommendationCarousel';

export default function SinglePage() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [data, setData] = useState(null);
  



  const [isToggled, setToggled] = useState(false);

  useEffect(() => {
    // Toggle styles based on the 'isToggled' state
    if (isToggled) {
      $('#myElement').css({
        display: '-webkit-box',
        WebkitLineClamp: '5', // Note the capital 'W' in WebkitLineClamp
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      });
    } else {
      // Reset styles if not toggled
      $('#myElement').css({
        height: 'auto',
        display: '-webkit-box',
        WebkitLineClamp: 'initial', // Reset to default
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      });
    }
  }, [isToggled]);

  const handleToggle = () => {
    // Toggle the state
    setToggled(!isToggled);
  };


  

  useEffect(() => {
    const setaa = async () => {
   

     
          try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2f2c4aa57989c7ea1f3c178484230bef`|| `https://api.themoviedb.org/3/tv/${id}?api_key=2f2c4aa57989c7ea1f3c178484230bef`);
            const json = await response.json();
            setData(json);
          
            console.log("==========>"+json);
          } catch (error) {
            console.error("Error fetching movie details:", error);
          }

    };

    setaa();
  }, [id]);







  function convertToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }


  return (
    <div>
      {/* Render your component based on the fetched data */}
      {data && (
      <div className="Page"  style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})` }}>
        <div className="infoPage">
          <div className="ImageSide">
          <div className="ImageSideContainer">
          <img width="100%" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
          </div>
    
          </div>
          <div className="infoSide">
                <h2>{data.title}</h2>
                

                <div className="subInfo">
                    <div className="date">
                        <h6>{data.release_date}  </h6> &nbsp;
                             {

                               data.production_countries.map((country, index) => (
                                   <h6 key={index}>{country.iso_3166_1}</h6>
                               ))}
                
                      </div>

                                   <div className="generes">
                                        {data.genres.map((genre, index) => (
                                             <h6 key={index}>{genre.name}</h6>
                                                 ))}
                                    </div>

                                                   <div className="runTime">
                                                        <h6>{convertToHoursAndMinutes(data.runtime)}</h6>
                                                    </div>

                </div>

<div className="trailer">
  <div className="Trailer">
<svg class="fbl-icon _30dE3d _1a_Ljt" viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true"><title>Trailer</title><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.503 3.042 C 3.487 3.214,2.556 3.976,2.202 4.925 C 1.994 5.481,2.001 5.233,2.001 11.992 C 2.000 18.878,1.989 18.550,2.234 19.151 C 2.521 19.857,3.143 20.479,3.849 20.766 C 4.453 21.012,4.024 21.000,12.000 21.000 C 19.974 21.000,19.547 21.012,20.150 20.767 C 20.850 20.482,21.482 19.850,21.767 19.150 C 22.011 18.551,22.000 18.876,22.000 12.000 C 22.000 5.123,22.011 5.449,21.766 4.849 C 21.499 4.193,20.964 3.633,20.296 3.312 C 19.636 2.994,20.412 3.023,12.120 3.015 C 8.039 3.012,4.611 3.024,4.503 3.042 M19.340 5.066 C 19.455 5.105,19.603 5.201,19.701 5.299 C 20.023 5.621,20.000 5.097,20.000 12.000 C 20.000 18.903,20.023 18.379,19.701 18.701 C 19.377 19.025,20.023 19.000,12.000 19.000 C 3.977 19.000,4.623 19.025,4.299 18.701 C 3.977 18.379,4.000 18.903,4.000 12.000 C 4.000 5.096,3.976 5.621,4.300 5.298 C 4.616 4.982,3.975 5.007,11.983 5.003 C 18.550 5.000,19.162 5.006,19.340 5.066 M5.660 6.652 C 5.495 6.817,5.467 6.980,5.486 7.649 C 5.501 8.185,5.537 8.291,5.749 8.429 C 5.840 8.489,5.953 8.500,6.500 8.500 C 7.047 8.500,7.160 8.489,7.251 8.429 C 7.463 8.291,7.499 8.185,7.514 7.649 C 7.533 6.980,7.505 6.817,7.340 6.652 L 7.208 6.520 6.500 6.520 L 5.792 6.520 5.660 6.652 M16.660 6.652 C 16.495 6.817,16.467 6.980,16.486 7.649 C 16.501 8.185,16.537 8.291,16.749 8.429 C 16.840 8.489,16.953 8.500,17.500 8.500 C 18.047 8.500,18.160 8.489,18.251 8.429 C 18.463 8.291,18.499 8.185,18.514 7.649 C 18.533 6.980,18.505 6.817,18.340 6.652 L 18.208 6.520 17.500 6.520 L 16.792 6.520 16.660 6.652 M10.208 9.081 C 9.955 9.235,9.960 9.175,9.960 12.000 C 9.960 14.825,9.955 14.763,10.208 14.921 C 10.473 15.088,10.486 15.081,12.720 13.687 C 14.134 12.806,14.808 12.363,14.870 12.276 C 14.974 12.128,14.986 11.927,14.901 11.761 C 14.856 11.675,14.332 11.328,12.831 10.389 C 11.725 9.698,10.762 9.103,10.692 9.066 C 10.522 8.978,10.369 8.983,10.208 9.081 M5.768 11.067 C 5.534 11.182,5.500 11.301,5.500 12.000 C 5.500 12.952,5.548 13.000,6.500 13.000 C 7.452 13.000,7.500 12.952,7.500 12.000 C 7.500 11.047,7.452 10.999,6.494 11.001 C 6.028 11.002,5.872 11.016,5.768 11.067 M16.768 11.067 C 16.534 11.182,16.500 11.301,16.500 12.000 C 16.500 12.952,16.548 13.000,17.500 13.000 C 18.452 13.000,18.500 12.952,18.500 12.000 C 18.500 11.047,18.452 10.999,17.494 11.001 C 17.028 11.002,16.872 11.016,16.768 11.067 M5.660 15.652 C 5.495 15.817,5.467 15.980,5.486 16.649 C 5.501 17.185,5.537 17.291,5.749 17.429 C 5.840 17.489,5.953 17.500,6.500 17.500 C 7.047 17.500,7.160 17.489,7.251 17.429 C 7.463 17.291,7.499 17.185,7.514 16.649 C 7.533 15.980,7.505 15.817,7.340 15.652 L 7.208 15.520 6.500 15.520 L 5.792 15.520 5.660 15.652 M16.660 15.652 C 16.495 15.817,16.467 15.980,16.486 16.649 C 16.501 17.185,16.537 17.291,16.749 17.429 C 16.840 17.489,16.953 17.500,17.500 17.500 C 18.047 17.500,18.160 17.489,18.251 17.429 C 18.463 17.291,18.499 17.185,18.514 16.649 C 18.533 15.980,18.505 15.817,18.340 15.652 L 18.208 15.520 17.500 15.520 L 16.792 15.520 16.660 15.652 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></svg></svg>

<h6>Trailer</h6>

  </div>
  <button onClick={()=>dispatch(addMovie(data))} style={{border:"none",borderRadius:"50%",padding:"5px", background:"black",color:"white",marginLeft:"10px"}}><AddIcon/></button>


</div>

<div className="subsubInfo">


                <div className="tagLine">

                  <h6>{data.tagline?(data.tagline):(<h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, laudantium.</h6>)}</h6>
                </div>


                <div className="overView">
      
      <p id="myElement" onClick={handleToggle}>{data.overview?(data.overview):(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum expedita, earum vero eaque nesciunt eveniet alias nisi fugit eum optio explicabo quibusdam quia. Atque suscipit dolores nostrum sequi itaque vero saepe ea quae harum, doloremque quam cupiditate similique animi voluptatibus commodi? Distinctio voluptatibus nobis ab nemo recusandae, ullam ipsam. Repellat.</p>)}</p>

</div>
</div>

              

          </div>
        </div>

      </div>
       
      )}
     
      <div>
                                          <RecommendationCarousel id={id}/>
      </div>
  

    </div>
  );
}
