import React,{useEffect, useState} from 'react'
import {RES_MENU} from "../utils/constants"
import Shimmer from "./Shimmer"
import { useParams } from 'react-router-dom'
const RestuarantMenu = () => {
  const [resMenu, setResMenu]= useState(null)
  const {resId}=useParams()
  console.log("resIdParams resIdParams", resId)
  useEffect(()=>{
getResMenuDetails()
  },[])
  const getResMenuDetails=async()=>{
    const res=await fetch(RES_MENU+resId)
    const resJson= await res.json()
    console.log(resJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
setResMenu(resJson?.data)
  }
    if (resMenu===null) return <Shimmer/>
const nameOfRes=resMenu?.cards[0]?.card?.card?.text
const menu=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards
console.log("menu", menu)


  return (
    <div className="res-menu">
      <h1>{nameOfRes}</h1>
      <h2>Menu:</h2>
      {menu.map((item)=>{
        const itemInside= item?.card?.info
        return(
          <div key={itemInside?.id}>
              <h3>{itemInside?.name} - Rs. {itemInside?.price/100}</h3>
              </div>
        )
      })}
  
    </div>
  )
}

export default RestuarantMenu