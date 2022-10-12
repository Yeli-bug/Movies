import styled from "styled-components";

export const MoviesContainer= styled.div`
width: 100vw;
min-height: 100vh;
padding: 5rem calc((100vw - 1300px) /2);
background: #150f0f;
color: #fff;
`

export const MoviesWeadding = styled.div`
font-size: clamp(2rem, 2.5vw, 3rem);
text-align: center;
margin-bottom: 5rem;
`
export const MoviesWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
`
export const MovieCard = styled.div`
margin: 0 2rem;
line-height: 2;
width: 300px
`

export const MovieImg = styled.img`
height: 300px;
min-width: 300px;
max-width: 100%;
box-shadow: 8px 8px red;
`

export const MovieInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
text-align: center;
`
export const MovieTitle = styled.h2`
font-weight: 400;
font-size: 1.5rem;
`
export const MovieDesc = styled.p`
margin-bottom: 1rem;
`
export const MovieCategory = styled.p`
margin-bottom: 1rem;
font-size: 2rem;
`
export const MovieBottom = styled.button`
font-size: 1rem;
padding: 1rem 4rem;
border: none;
background:#e31837;
color: #fff;
transition: 0.2 ease-out;
border-radius: 20px;
&:hover{
    background:#ffc500;
    transition: 0.2 ease-out;
    cursor: pointer;
    color: #000;
}
`