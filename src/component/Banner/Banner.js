import React, { useEffect, useState} from 'react'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import axios from '../../axios'

import './Banner.css'

function Banner() {
  const [movie, setMovie] =  useState()
    useEffect(()=>{
axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results[0])
setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)])
})
    }, [])

    function truncate(str,n){
        return str ?.length > n?str.substr(0,n-1) + "..." : str
    }
  return (

      
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'> My List</button>
                </div>
                <h1 className='description'>{truncate(movie ? movie.overview : "",150)} </h1>
            </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
