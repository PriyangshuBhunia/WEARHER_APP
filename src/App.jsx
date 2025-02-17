import { useState } from 'react'
import React, { useEffect } from 'react';

import './App.css'
import search from './assets/icons/search_icon.svg'
import { useStateContext } from './context';
import { BackgroundLayout,MiniCard,WeatherCard } from './Components';

function App() {

  const [input, setInput]= useState('');
  const{weather, thisLocattion ,values, place, setPlace}= useStateContext()
  // console.log(weather);
  const submitCity =() =>{
    setPlace(input);
    setInput('');
  }


  return (
    <div className= 'w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center' >
       <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>
       <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2 '>
        <img src={search} alt="Search" className='w-[1.5rem] h-[1.5rem] ' />
        <input onKeyUp={(e)=>{
          if(e.key==='Enter'){
            //submit the form 
            submitCity()
          }
        }} type="text"  placeholder='Search city ' className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value) }/>
        </div> 

      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className='w-full flek flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <WeatherCard
        place={place}
        windspeed={weather.wspd}
        humidity={weather.humidity}
        temperature={weather.temp}
        heatIndex={weather.heatIndex}
        iconString={weather.conditions}
        conditions={weather.conditions}

        />
        <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
          {
            values?.slice(1,7).map(curr =>{
             return(
              <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.iconString}  

              />
             )
            })
          }
        </div>
      </main>
    </div>
  )
}

export default App
