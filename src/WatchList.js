import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeMovie } from './Redux/WatchListSlice';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useNavigate } from 'react-router-dom';
import './WatchList.css'
export default function WatchList() {
    const data = useSelector((state)=>state.movies.mymovie);
    const[mydata,setMydata] = useState(data)
    console.log(data)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (

    <section>

     { 
       data.length<=0 ? (<section style={{height:"100vh",textAlign:"center"}}>
        <h1 className='text-white'>ADD MOVIES OR TV SHOW...</h1>
       </section>):(

        
          data.map((data,index)=>{
            return(
              <section>
              <div className="popularCard"  key={index}>
                  <div className="removeCard">
                  <button onClick={()=>{dispatch(removeMovie(data))}}><RemoveCircleIcon/></button>
                      </div>
                <div className="popularCardImage"  onClick={()=>{ navigate(`/SinglePage/${data.title?(data.title):(data.name)}/${data.id}`) }}>
                  <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}/>
                </div>
    
    
                <div className="popularCardInfo">
                  <h5>{data.title}</h5>
                  &nbsp;
    
                  
    
                 <div className="popularCardPara">
                  <div className="popularCardSubInfo">
                  <h6>{data.release_date}</h6>
                  <div className="adultAndLang">
                    <h5>{data.adult?(<>A</>):(<>U/A</>)}</h5>
    
                  </div>
                  </div>
                 <p>{data.overview}</p>
                 </div>
                
                </div>
    
              </div>
              </section>
            )
          })
        
        )
      
    }
        
    </section>
  )
}
