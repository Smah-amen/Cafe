import React, { useEffect, useState } from 'react'
import axios from "axios";


const CardComponent = () => {
 const [data ,setData] =useState()

 const fetchData = async () => {
  try { 
   const response = await axios.get("https://api.sampleapis.com/coffee/hot")
    console.log(response.data)  
   setData(response.data)

    
  } catch (error) {
    console.error(error)  
  }
 }
useEffect(() => {
  fetchData()
}, [])



  return (
    <div>
      {data && data.map((item, id) => (
        <div key={id}>
          <img src={item.image} alt={item.name} className='w-52' />
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      ))}
      
    </div>
  )
}

export default CardComponent
