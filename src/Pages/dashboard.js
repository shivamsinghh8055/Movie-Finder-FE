import React from 'react'
import Sidebar from '../Components/sidebar'
import "./dashboard.css"

export default function Dashboard() {
  return (
    <>
    <div className='blueCards'>
        <div className='blueCardsWrapper'>
            <div className='text'>Total Jobs</div>
            <div className='number'>2</div>
        </div>
        <div className='blueCardsWrapper'>
            <div className='text'>Total Applicants</div>
            <div className='number'>4</div>
        </div>
        <div className='blueCardsWrapper'>
            <div className='text'>Shortlisted</div>
            <div className='number'>0</div>
        </div>
        <div className='blueCardsWrapper'>
            <div className='text'>Rejected</div>
            <div className='number'>0</div>
        </div>
    </div>
    <div className='threeWhiteCardWrapper'>
    <div className='whiteCardWrapper'>
        <div className='whiteCardTextWrapper'>Career Page</div>
        <div className='whiteCardIconWrapper'>
            <button>My Career Page</button>
        </div>
    </div>
    <div className='whiteCardWrapper'>
        <div className='whiteCardTextWrapper'>Published Jobs</div>
        <div className='whiteCardIconWrapper'>
            <button>My Published Jobs</button>
        </div>
    </div>
    <div className='whiteCardWrapper'>
        <div className='whiteCardTextWrapper'>Post a Job</div>
        <div className='whiteCardIconWrapper'>
            <button>Post a Job</button>
        </div>
    </div>
    </div>
    <div className='threeWhiteCardWrapper'>
    <div className='whiteCardWrapper'>
        <div className='whiteCardTextWrapper'>Messages</div>
        <div className='whiteCardIconWrapper'>
            <button>Messages</button>
        </div>
    </div>
    <div className='whiteCardWrapper'>
        <div className='whiteCardTextWrapper'>Calendar</div>
        <div className='whiteCardIconWrapper'>
            <button>Calendar</button>
        </div>
    </div>
    <div className='whiteCardWrapper'>
        <div className='whiteCardTextWrapper'>Assessment</div>
        <div className='whiteCardIconWrapper'>
            <button>Assessment</button>
        </div>
    </div>
    </div>
    </>
  )
}
