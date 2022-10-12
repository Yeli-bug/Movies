import React, {useState}from 'react'
import NavBar from '../NavBar/NavBar'
import SiderBar from '../SiderBar/SiderBar'
import { HeroBtn, HeroContainers, HeroConteint, HeroH1, HeroItems, HeroP } from './HeroElements'

const Hero = () => {

  //Hooks/ incorporacion de estados
  //Declara una const de estado
  //llamada isOpen, contiene el valor del estado
  //setIsOpen, es la funcion que se ocupa para actualizar el estado
  //useState(false), inicializamos el estado con un valor
const [isOpen, setisOpen] = useState(false);


//funcion que cambia el valor del estado
const toggle = () => {
setisOpen(!isOpen);
}

  return (
    <HeroContainers>
      <NavBar toggle={toggle}/>            {/* para ABRIR las categorias */}
      <SiderBar isOpen={isOpen} toggle={toggle}/>    {/* para CERRAR las categorias */}
      <HeroConteint>
        <HeroItems>
          <HeroH1>Movies</HeroH1>
          <HeroP>Best movies of the year</HeroP>
          <HeroBtn>Click here</HeroBtn>
        </HeroItems>
      </HeroConteint>
    </HeroContainers>


    
  )
}

export default Hero