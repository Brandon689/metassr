import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const SplashContainer = styled.div`
  text-align: center;
  animation: ${fadeIn} 2s ease-in;
`

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
`

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
`

function SplashScreen() {
  return (
    <SplashContainer>
      <Title>Welcome to Our App</Title>
      <Subtitle>Discover amazing features and possibilities</Subtitle>
    </SplashContainer>
  )
}

export default SplashScreen
