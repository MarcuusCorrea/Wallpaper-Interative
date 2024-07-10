import React, { useState } from 'react'; // Importa a biblioteca React
import HomePage from './pages/HomePage/HomePage'; // Importa o componente HomePage
import './App.css'; // Importa o arquivo de estilo para App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaFiltro from './pages/TelaFiltro/TelaFiltro';

function App() {
  const [getTituloFiltro, setTituloFiltro] = useState('');
  const [getFiltro, setFiltro] = useState('');

  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={
            <HomePage 
              getTitulo={getTituloFiltro} 
              setTitulo={setTituloFiltro} 

              getFiltro={getFiltro} 
              setFiltro={setFiltro}
            />
          }/>
          
          <Route path='/tela-filtro' element={
            <TelaFiltro 
              getTitulo={getTituloFiltro} 
              setTitulo={setTituloFiltro} 

              getFiltro={getFiltro} 
              setFiltro={setFiltro}
            />} 
          />

          {/* <HomePage /> Renderiza o componente HomePage */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App; // Exporta o componente App
