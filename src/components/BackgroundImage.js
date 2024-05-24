import React from 'react'
import styled from 'styled-components'

const BackgroundImage = () => {
  return (
   <BackgroundContainer>
    <img src='https://img.freepik.com/free-photo/movie-background-collage_23-2149876005.jpg'
    alt='no internet connection'
    />
   </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
       height: 100vh;
       width: 100vw;
       img{
        height: 100vh;
        width: 100vw;
       }
`

export default BackgroundImage

// 'https://hips.hearstapps.com/hmg-prod/images/best-spring-movies-1677000068.jpg?resize=1200:*'