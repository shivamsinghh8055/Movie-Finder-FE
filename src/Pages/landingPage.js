import React, { useState } from 'react'
import Sidebar from '../Components/sidebar'
import Candidates from './candidates'
import Dashboard from './dashboard'
import "./landingPage.css"

export default function LandingPage() {
    const [pageName, setPageName] = useState("")
  return (
    <>
    <div className='leftSide'>
    <Sidebar setPageName={setPageName}/>
    </div>
    <div className='rightSide'>
        {pageName}
        {pageName === "Dashboard" ? <Dashboard /> : pageName === "Candidates" ? <Candidates />  : null}
    </div>
    </>
  )
}
