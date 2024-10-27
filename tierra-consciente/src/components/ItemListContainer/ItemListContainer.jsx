import Button from '../Button/Button'
import React, { useState } from 'react';
import ItemList from './ItemList';  



const ItemListContainer = ({mensaje, fn}) => {
  const [products,setProducts] = useState([])

  return (
    <>
    <div>
    <div>{mensaje}</div>
    <Button fn={fn} text="añadir al carrito"/>
    </div>
    <div>
    
    </div>
    </>
  )
}

export default ItemListContainer