import React from 'react'
import { MovieCard, MoviesContainer, MoviesWeadding, MoviesWrapper, MovieImg, MovieInfo, MovieTitle, MovieDesc, MovieCategory, MovieBottom } from './MoviesElements'

const Movies = ({heading, data}) => {
  return (
    <MoviesContainer>
        <MoviesWeadding>{heading}</MoviesWeadding>
        <MoviesWrapper>
            {data.map((movie, index) => {
              return (
                <MovieCard key={index}>
                <MovieImg src={movie.img} alt={movie.alt}/>
                <MovieInfo>
                  <MovieTitle>{movie.name}</MovieTitle>
                  <MovieDesc>{movie.desc}</MovieDesc>
                  <MovieCategory>{movie.category}</MovieCategory>
                  <MovieBottom>{movie.button}</MovieBottom>
                </MovieInfo>
                </MovieCard>
              )
            })}
        </MoviesWrapper>
    </MoviesContainer>
  )
}

export default Movies

//destructuring