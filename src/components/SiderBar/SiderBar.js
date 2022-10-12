import React from 'react'
import { CloseIcon, Icon, MenuSiderBar, SiderBarContainer, Link, SiderBarRoute, SliderBtnWrapper } from './SideBarElements'
import { Link } from 'react-router-dom';

const SiderBar = ({isOpen, toggle}) => {
  return (
    <SiderBarContainer isOpen={isOpen} toggle={toggle}> 
    <Icon onClick={toggle}>
        <CloseIcon/>
    </Icon>
    <MenuSiderBar>
        <Link to = "/action">Action</Link>
        <Link to = "/comedy">Comedy</Link>
        {/* <Link to = "/">Drama</Link> */}
    </MenuSiderBar>
    <SliderBtnWrapper>
        <SiderBarRoute to = "/">uwu</SiderBarRoute>
    </SliderBtnWrapper>
   </SiderBarContainer>
  )
}

export default SiderBar