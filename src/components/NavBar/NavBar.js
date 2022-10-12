import React from 'react'
import { NavBarBars, NavBarCategories, NavBarContainers, NavLink } from './NavBarElements'


const NavBar = ({toggle}) => {

  return (
    <NavBarContainers>
        <NavLink to = "/" >Great Movies</NavLink>
          <NavBarCategories onClick={toggle}>
            <p>Categories</p>
          <NavBarBars/>  
          </NavBarCategories>
        
    </NavBarContainers>
  )
}

export default NavBar