import React from 'react'
import { RiShoppingCartLine } from "react-icons/ri";

const CarWidget = ({valor}) => {
  return (
    <div> 
      <RiShoppingCartLine />
        <span>{valor}</span>
    </div>
    
  )
}

export default CarWidget