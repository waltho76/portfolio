import React from 'react'
// import { Link } from 'react-router-dom'
import Cocktails101 from './Cocktails101.png'
import Furnituredepot from './Furnituredepot.png'
import Live from './Live.png'

export default function Projects() {
  return (
    <div className='projects'>
        <h1 className='project-title'>Projects</h1> 
        
        <div className='cocktails'>
            <a href='https://fanciful-beijinho-99154d.netlify.app/' target='_blank' rel="noreferrer">
                <img  src={Cocktails101} alt="null" width='70%'/>
            </a>
            <div className='preject-text'>
                <p>This was one of my first projects.
                    This app was coded using React as the framework with an axios call to an external api.</p>
            </div>    
        </div>
        
        <div className='furniture'>
            <img src={Furnituredepot} alt='null' width='70%'/>
            <div className='preject-text'>
                <p>This was my first group project. This was a full stack app with front end and backend created from scratch usings React in the front-end and Sequlize, postgres, Express and Cors on the backend.</p>
            </div>        
        </div>
        <div className='live'>
            <img src={Live} alt='null' width='70%'/>
            <div className='preject-text'>
                <p>This is a full stack project I started in January. This app is coded using React in the frontend and the backend is coded using Python and Django. This project is still under construction.</p>
            </div>
        </div>
    </div>
  )
}
