import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <h1>working</h1>
        <div className='nav'>
            
                <Link className='nav-link' to='/'>Home</Link>                
                <Link className='nav-link' to='/skills'>Skills</Link>
                <Link className='nav-link' to='/projects'>Projects</Link>

            </div> 
    </div>
  )
}
