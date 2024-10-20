import React from 'react'
import '../styles/WelcomeHeading.css'
import { Link } from 'react-router-dom'

export default function WelcomeHeading() {
    return (
        <>
            <div className='heading-container'>
                <h1>Welcome to WatchLists</h1>
                <p>Browse movies, add them to your watchlists. <br />
                    Just click the plus sign to add a movie.</p>
                <div className='signIn-details'>
                    <p>Please Sign In to Add Movies in Your WatchLists.</p>
                    <Link to='/signin' className='signIn-link'>Sign In</Link>
                </div>
            </div>
        </>
    )
}
