import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Fondo from './components/Fondo';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const mensaje = 'aaaaabbbbccccc';
  const colorFondo = '#3386FF';
  const estilo = {
    backgroundColor: 'lightblue',
    height: '100%',
    width: '100%',
  };
  const parestilo = {
    color: '#3185FF',
    display: 'block',
  };

  useEffect(() => {
    axios
      .get('URL_DE_LA_API')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="fondo">
      <Fondo
        className="fondo"
        estilo={estilo}
        mensaje={mensaje}
        parestilo={parestilo}
      />
    </div>
  );
}

export default App;
