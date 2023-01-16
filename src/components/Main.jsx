import React from 'react'
import Home from './Home'
// import Resume from './Resume'
import Projects from './Projects'
import { Routes, Route } from 'react-router-dom'

export default function Main() {
  return (
    <div>
        <Routes>
            <Route path = '' element = {<Home/>}/>
            {/* <Route path = '/resume' element = {<Resume/>}/> */}
            <Route path = '/projects' element = {<Projects/>}/>
        </Routes>
    </div>
  )
}
