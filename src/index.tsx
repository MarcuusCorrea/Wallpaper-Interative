import React from 'react'; // Importa a biblioteca React
import ReactDOM from 'react-dom'; // Importa o ReactDOM para manipulação do DOM
import './index.css'; // Importa o arquivo de estilo para index
import App from './App'; // Importa o componente App
import reportWebVitals from './reportWebVitals'; // Importa o módulo para relatórios de performance

// Renderiza o componente App dentro do elemento com id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); // Chama a função para medir a performance da aplicação
