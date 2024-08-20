
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'

const MiniCard = (time, temp , iconString ) => {

  const[icon, setIcon]= useState()



  useState(() =>{
    if(iconString){
      if(iconString.toLowerCase().includs('cloud')){
        setIcon(cloud)
      } else if(iconString.toLowerCase().includs('rain')){
        setIcon(rain)
      } else if(iconString.toLowerCase().includs('clear')){
        setIcon(sun)
      } else if(iconString.toLowerCase().includs('thunder')){ 
        setIcon(storm)
      } else if(iconString.toLowerCase().includs('fog')){
        setIcon(fog)
      } else if(iconString.toLowerCase().includs('snow')){
        setIcon(snow)
      } else if(iconString.toLowerCase().includs('wind')){
        setIcon(wind)
      }
    }
  }, [iconString])
  return (
    <div className='glassCard w-[10rem] h-[10erm] p-4 flex flex-col'>
      <p className='text-center'>
        {new Date(time).toLocaleTimeString('en',{ weekday: 'long' }).split(" ")[0]}
      </p>
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt='icon' className='w-[4rem] h-[4rem] ' />
      </div>
      <p className=' text-center font-bold'>{temp}&deg;C</p>
      
    </div>
  )
}

export default MiniCard
