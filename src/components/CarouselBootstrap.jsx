import React from 'react'
// import { useState, useEffect, useContext } from 'react'
import { Carousel } from "react-bootstrap"
// import {useNavigate} from 'react-router-dom'
import Cocktails101 from './Cocktails101.png'
import Furnituredepot from './Furnituredepot.png'
import Live from './Live.png'

export default function CarouselBootstrap () {

    return  (
        <div className='carousel-all'>
            <h3>projects</h3>
        <div className='carousel-container'> 
            <div className='carousel'>
        <Carousel>
          <Carousel.Item>            
             <img 
              className="d-block w-100"
              src={Cocktails101}
              alt="first slide"
            />                            
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src={Furnituredepot}
              alt="Second slide"
            />
            <div className='carouselCaption'>
            
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src={Live} 
              alt="Third slide"
            />
            
          </Carousel.Item>          
        </Carousel>
        </div>
        </div>
        </div>
      )
    
    
}
