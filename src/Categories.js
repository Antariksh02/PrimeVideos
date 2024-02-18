import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Filter from './Filter';
import { addFilter } from './Redux/Filters'

export default function Categories() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const links = useSelector((state) => state.link.data);
  const filters = useSelector(state=>state.filters.filterData)
  console.log(links);

  const [media, setMedia] = useState();




  const filteritems = media?.filter((item)=>item.genre_ids.includes(filters))
  console.log(filteritems)

  useEffect(() => {
    const getTrending = async () => {
      
      try {
        const response = await fetch(`https://api.themoviedb.org/3/${links}?api_key=2f2c4aa57989c7ea1f3c178484230bef`);
        const json = await response.json();
        setMedia(json.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    getTrending();
  }, [links]);





  return (
    <main>

<div className="filter">
   
   


   

   <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle py-3 px-5 fs-5 fw-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Filter content
  </button>
  <ul className="dropdown-menu fs-5">
    <li><a className="dropdown-item" href="#"> <button className="filterBtn" value="All">All</button></a></li>
    <li><a className="dropdown-item" href="#"> <button className="filterBtn" onClick={()=>{dispatch(addFilter(12))
console.log(dispatch)}} value="Drama">Drama</button></a></li>
    <li><a className="dropdown-item" href="#">    <button className="filterBtn"  onClick={()=>dispatch(addFilter("Comedy"))}value="Comedy">Comedy</button></a></li>
    <li><a className="dropdown-item" href="#">    <button className="filterBtn" value="Action">Action</button></a></li>
    <li><a className="dropdown-item" href="#"> <button className="filterBtn" value="Adventure">Adventure</button></a></li>
  </ul>
</div>

 
</div>

  
    <section>

      {
        media?.map((data,index)=>{
          return(
            <div className="popularCard"  key={index} onClick={()=>{ navigate(`/SinglePage/${data.title?(data.title):(data.name)}/${data.id}`) }}>
              <div className="popularCardImage"  >
                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}/>
              </div>


              <div className="popularCardInfo">
                <h5>{data.title || data.name }</h5>
                &nbsp;

                

               <div className="popularCardPara">
                <div className="popularCardSubInfo">
                <h6>{data.release_date || data.first_air_date}</h6>
                <div className="adultAndLang">
                  <h5>{data.adult?(<>A</>):(<>U/A</>)}</h5>

                </div>
                </div>
               <p>{data.overview?(data.overview):(<>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum est accusantium sequi autem, dicta corrupti </>)}</p>
               </div>
              
              </div>

            </div>
    
          )
        })
      }


        
    </section>
    </main>
  );
}
