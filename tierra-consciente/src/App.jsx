import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [valor, setValor] = useState(0)

  return (
    <>
      <NavBar/>
      <div>

      </div>
      <ItemListContainer mensaje="agrega al carrito" fn={setValor}/>
      </>
    )
    }

export default App
