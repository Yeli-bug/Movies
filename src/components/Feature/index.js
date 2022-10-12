import React from 'react'
import { FeatureButton, FeatureContainer } from './FeatureElements'

const Feature = () => {
  return (
    <FeatureContainer>
        <h1>My favorite Movie</h1>
        <p>An adventurous girl walks through a secret door in her new home and discovers a strangely idealized version of her frustrating home, but it has sinister secrets.</p>
        <FeatureButton>Watch</FeatureButton>
    </FeatureContainer>
  )
}

export default Feature