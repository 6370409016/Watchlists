import React from 'react'
import '../styles/MyWatchLists.css'
import { useNavigate } from 'react-router-dom'




function MyWatchLists() {
    const navigate = useNavigate();
    function goToWatchlists() {
        navigate('/mywatchlists');
    }

    return (
        <>
            <div className='watchlist-container'>
                <button onClick={goToWatchlists} className='watchlists-name'>My WatchLists</button>
            </div>
        </>
    )
}

export default MyWatchLists
