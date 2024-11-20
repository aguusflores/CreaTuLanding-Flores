import React from 'react'

const Item = ({elemento}) => {
  return (
    <div className={pruducto-eco.className}>
     <h3>
        Nombre: {elemento.nombre}
     </h3>
       <p>Precio: ${elemento.precio}</p>
         <img src={elemento.img} alt="elemento"/>
       <p>Clasificacion:{elemento.clasificacion}</p>

    </div>
  )
}

export default Item

