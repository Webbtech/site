import React, { FunctionComponent } from 'react'
import Bounce from 'react-reveal/Bounce'
import Zoom from 'react-reveal/Zoom'
import Flip from 'react-reveal/Flip'
import Rotate from 'react-reveal/Rotate'
import Slide from 'react-reveal/Slide'


import { CardContainer } from '../components/style'

const Index: FunctionComponent = () => {
  return (
    <>
      <main>
        <br />

        <CardContainer>
          <div className='card'>
            <div className='card-header'>
              <div className='card-title h5'>
                <Bounce left cascade>
                  For that next great idea
                </Bounce>
              </div>
            </div>
            <div className='card-image'>
              <Zoom>
                <img src='home-img/idea.jpg' className='img-responsive' />
              </Zoom>
            </div>
          </div>
        </CardContainer>
        <br />

        <CardContainer>
          <div className='card'>
            <div className='card-header'>
              <div className='card-title h5'>
                <Flip left cascade>
                  To help you create that awesome site and/or app
                </Flip>
              </div>
            </div>
            <div className='card-image'>
              <Zoom>
                <img src='home-img/site-app.jpg' className='img-responsive' />
              </Zoom>
            </div>
          </div>
        </CardContainer>

        <br />

        <Zoom>
          <div className='card'>
            <div className='card-header'>
              <div className='card-title h5'>We provide the consulting</div>
            </div>
            <div className='card-image'>
              <img src='home-img/consulting.jpg' className='img-responsive' />
            </div>
          </div>
        </Zoom>
        <br />

        <Slide left cascade>
          <div className='card'>
            <div className='card-header'>
              <div className='card-title h5'>And the development services</div>
            </div>
            <div className='card-image'>
              <img src='home-img/coding.jpg' className='img-responsive' />
            </div>
          </div>
        </Slide>
        <br />

        <Slide bottom cascade>
        <div className='card'>
          <div className='card-header'>
            <div className='card-title h5'>To help you realize your dreams</div>
          </div>
          <div className='card-image'>
            <img src='home-img/dreams.jpg' className='img-responsive' />
          </div>
        </div>
        </Slide>

        
      </main>
    </>
  )
}

export default Index
