import React, { FunctionComponent } from 'react'
import Head from 'next/head'
// import { useSpring, animated, interpolate } from 'react-spring'

import makeCarousel from 'react-reveal/makeCarousel'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'
import styled, { css } from 'styled-components'

import { CardContainer } from '../components/style'

const width = '300px',
  height = '150px'
const Container = styled.div`
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  width: ${width};
`
const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${(props) =>
    props.right
      ? css`
          left: 90%;
        `
      : css`
          left: 0%;
        `}
`
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`

const About: FunctionComponent = () => {
  // const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  const CarouselUI = ({ position, total, handleClick, children }) => (
    <Container>
      <Children>
        {children}
        <Arrow onClick={handleClick} data-position={position - 1}>
          {'<'}
        </Arrow>
        <Arrow right onClick={handleClick} data-position={position + 1}>
          {'>'}
        </Arrow>
      </Children>
      <Dots>
        {Array(...Array(total)).map((val, index) => (
          <Dot key={index} onClick={handleClick} data-position={index}>
            {index === position ? '● ' : '○ '}
          </Dot>
        ))}
      </Dots>
    </Container>
  )
  const Carousel = makeCarousel(CarouselUI)

  return (
    <>
      <Head>
        <title>Webbtech - About</title>
        <meta name='description' content='About Webbtech' />
      </Head>

      <main>
        <Carousel>
          <Slide right>
            <div>
              <h1>Slide 1</h1>
              <p>Slide Description</p>
            </div>
          </Slide>
          <Slide right>
            <div>
              <h1>Slide 2</h1>
              <p>Slide Description</p>
              <Zoom>
                <img src='home-img/idea.jpg' className='img-responsive' />
              </Zoom>
            </div>
          </Slide>
          <Slide right>
            <div>
              <h1>Slide 3</h1>
              <p>Slide Description</p>
            </div>
          </Slide>
        </Carousel>
      </main>
    </>
  )
}

export default About
