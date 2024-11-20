import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Beneficios from './components/Beneficios/Beneficios';
import HeaderMessage from './components/HeaderMessage/HeaderMessage';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Router, Route, } from 'react-router-dom';


function App() {
  const [valor, setValor] = useState(0);

  return (
      <>
          <NavBar />
          <HeaderMessage />
          <div>
              {/* Otro contenido o componentes si necesitas */}
          </div>
          <ItemListContainer mensaje="agrega al carrito" fn={setValor} />
          <Beneficios /> {/* Componente de beneficios al final */}
          <Footer />
          
      </>
  );
}

export default App;

