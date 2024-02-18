import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addLink } from '../Redux/CreateSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Caraousel.css';

export default function AllCarousel({ data, title, urlName }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    slidesToScroll: 1,
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
        <h1 className='prime'>
          <span>Prime</span> {title}
        </h1>
        <h1 className='seemore' onClick={() => { navigate(`/Category`); dispatch(addLink(urlName)); }}>See more &#8250;</h1>
      </div>

      <div className="movie-carousel">
        <Slider {...settings}>
          {data?.map((movie, index) => (
            <div key={index} className="carousel-inside-slide" onClick={() => navigate(`/SinglePage/${movie.title ? movie.title : movie.name}/${movie.id}`)}>
              <div className="carousel-inside-slideImg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` && `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
