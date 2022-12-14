import styled from "styled-components";
import {NavLink as Link} from "react-router-dom"
import { FaBars } from "react-icons/fa";



export const NavBarContainers = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
font-weight: 700;
border-radius: 20px;
box-shadow: rgba(0,0,0,20),
(0,0,0,40),
(0,0,0,50);
`;

export const NavLink = styled(Link)`
color: #ffff;
font-size:2rem;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
@media screen  and (max-width: 400px){
    position: absolute;
    top:10px;
    left: 25px;
}
`;


export const NavBarBars = styled(FaBars)`
position: fixed;
font-size: 2rem;
transform: translate(-50%, 15%);
`;

export const NavBarCategories = styled.div`
display: block;
position: absolute;
top:0;
right: 0;
cursor: pointer;
color: #ffff;
p{
    transform: translate(-175%, 100%);
    font-weight: bold;
}
`;