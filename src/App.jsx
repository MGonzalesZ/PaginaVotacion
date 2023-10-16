import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const mensaje="aaaaa"
  const colorFondo='#3386FF'
  const estilo={
    backgroundColor: 'lightblue'
  }
  return (
    <>
      <Fondo estilo={estilo} mensaje={mensaje}/>
    </>
  )
}

export default App
