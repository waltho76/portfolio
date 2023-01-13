import React from 'react'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import { Routes, Route } from 'react-router-dom'

export default function Main() {
  return (
    <div>
        <Routes>
            <Route path = '' element = {<Home/>}/>
            <Route path = '/skills' element = {<Skills/>}/>
            <Route path = '/projects' element = {<Projects/>}/>
        </Routes>
    </div>
  )
}
