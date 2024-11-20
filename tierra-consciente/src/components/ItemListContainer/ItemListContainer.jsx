import Button from '../Button/Button'
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';  
import { getProducts, getProductsbyCategory } from '../../data/backend-fake';



const ItemListContainer = ({mensaje, fn}) => {
  const [products,setProducts] = useState([])
  const [categoria, setCategoria] = useState("")
  const [cargando, setCargando] = useState(false)
  const [clasificacion, setClasificacion] = useState(null);


useEffect(() => {
  setCargando(true)

if (clasificacion) {
  getProductsbyCategory(clasificacion)
  .then((res) => setProducts(res))
  .catch(e => console.log(e))
  .finally(console.log("setCargando(false)"))

} else{
  getProducts()
  .then((res) => setProducts(res))
  .catch(e => console.log(e))
  .finally(console.log("setCargando(false)"))
  }
}, [clasificacion] )


  const changeCategory = (clasificacion) => {
    setCategoria(clasificacion)
  }
  console.log("clasificacion: ", cargando)

  return (
    <>
    <div>
         <div>{mensaje}</div>
        <Button fn={fn} text="Añadir al carrito"/>
         </div>

    <div>
        <div>
            <button onClick={ () => changeCategory ("higiene bucal")} text="Higiene Bucal"></button>
            <button fn={ () =>changeCategory("higiene personal")} text="Higiene personal"></button>
            <button fn={ () => changeCategory ("hogar")} text="Hogar"></button>
            <button fn={ () => changeCategory ("")} text="Todos los productos"></button>
        </div>
       <ItemList products={products}/>
    </div>
    </>
  )
}

export default ItemListContainer