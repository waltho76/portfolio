import React from 'react'
import {Link} from 'react-router-dom'
import Profile from './Profile2.png'
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container'


export default function Header() {
  return (
    <div className='header'>
        {/* 
            <h1 >Walter Thomas</h1>
            <h2 >Software Engineer</h2>
         */}
        <div className='nav'>
            <h5 className='logo'>Walter Thomas</h5>
            <Link className='nav-link' to='/'>Home</Link>                
            <a className='nav-link' href='https://docs.google.com/document/d/1i_pMeIcrj5op49ppujUrTcVhVhkuhjwLSkIo3dcSoNw/edit?usp=sharing' target="_blank" rel="noreferrer">Resume</a>
            <a className='nav-link' href='https://github.com/waltho76' target='_blank' rel="noreferrer">Github</a>
            <Link className='nav-link' to='/projects'>Projects</Link>
           
        </div> 
        
        <div classname='hero'>
            <div className='title'>
                {/* <div className='picdiv'> */}
                    <img className='profilepic' src={Profile} alt='null' width='40%'/> 
                {/* </div> */}
                <div className='headtext'>
                    <div className='hi'>    
                        <h1>Hi, I'm Walter Thomas.</h1>
                    </div>
                    <div className='role'>
                        <h2> I'm a Full Stack Software Engineer and motorcycle enthusiast.</h2>
                    </div>
                    <div>
                        <p>I enjoy bringing exceptional attention to detail and problem 
                            soliving skills to any development project I'm working on. I've had the 
                            oppertunity to work with diverse teams on interesting projects. Currently,                  
                            I'm focused on building digital experiences that prioritize clean code 
                            and accessibility, on a freelance basis.</p>
                    </div>     
                </div>                
            </div>
        </div>
    </div>
  )
}
