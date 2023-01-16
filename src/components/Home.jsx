import React from 'react'
import CarouselBootstrap from './CarouselBootstrap'

export default function home() {
  return (
    <div className='home'>
        {/* <div className='about'>
            <p>I am a software engineer with a back ground in logistics. I am 
                known for being detail oriented and i can learn how to use new
                languages and frameworks very fast.   </p>
        </div> */}
        <div className='skill-container'>
            <div className='skills-title'>
                <h2>Skills</h2>
            </div>
            <div className='skills'>    
                <div className='languages'>
                    <h4>languages</h4>
                    <p>HTML, CSS, Javascript, SQL, Python</p>
                </div>
                <div className='frameworks'>
                    <h4>Frameworks & Libraries</h4>
                    <p>React, Express, Sequelize, Django</p>
                </div>
                <div className='tools'>
                    <h4>Developer Tools & Systems</h4>
                    <p>Postgres, Node.js, Git, VSCode, Wordpress</p>
                </div>
            </div>
        </div>
    <div className='home-carousel'>
        <CarouselBootstrap />       
    </div>
    
    </div>
  )
}
