
import React, { useEffect, useState } from 'react'

import { useStateContext } from '../context'

// weather_image

import Clear from '../assets/weather_img/Clear_weather.jpg' 
import Fog  from '../assets/weather_img/fog_weather.jpg' 
import Cloudy from '../assets/weather_img/Cloudy_weather.jpg' 
import Rainy from '../assets/weather_img/Rainy_weather.jpg' 
import Snow from '../assets/weather_img/Snow_weather.jpg' 
import Storm from '../assets/weather_img/storm_weather.jpg' 
import Sunny from '../assets/weather_img/Sunny_weather.jpg' 


const BackgroundLayout =()=> {
  const {weather} =useStateContext()
  const [image, setImage] = useState(Clear)

  useEffect(()=>{
    if(weather.condition){
      let imageString= weather.condition
      if(imageString.toLowrCase().includs('clear')){
        setImage(Clear)
      } else if (imageString.toLowrCase().includs('cloud')){
        setImage(Cloudy)
      } else if (imageString.toLowrCase().includs('rain')||imageString.toLowrCase().includs('shower')){
        setImage(Rainy)
      } else if (imageString.toLowrCase().includs('snow')){
        setImage(Snow)
      } else if (imageString.toLowrCase().includs('fog')){
        setImage(Fog)
      } else if (imageString.toLowrCase().includs('thunder') || imageString.toLowrCase().includs('storm')){
        setImage(Storm)
      } else if (imageString.toLowrCase().includs('sunny')){
        setImage(Sunny)
      }

    }

  },[weather])

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}


export default BackgroundLayout

