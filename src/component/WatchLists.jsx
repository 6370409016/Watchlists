import React, { useEffect, useState } from 'react';
import Card2 from './Card2';
import '../styles/WatchLists.css';
import SideNavbar from './SideNavbar';

function WatchLists() {
    const [watchlists, setWatchLists] = useState([]);


    useEffect(() => {
        const savedWatchlists = JSON.parse(localStorage.getItem('watchlist')) || [];
        setWatchLists(savedWatchlists);
    }, []);

    function removeItem(imdbId) {
        const updatedWatchLists = watchlists.filter(movie => movie.imdbId !== imdbId);
        setWatchLists(updatedWatchLists);
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchLists));
    }

    const result =watchlists.map((movie, index) => (
            <Card2 movie={movie} key={index} itemIndex={index} removeItem={removeItem} />));

    return (
        <div className='watchlists-container'>
            <SideNavbar />
            <div className='watchlists-right'>
                <div className='watchlists-heading'>
                    <h1>My WatchLists</h1>
                    <p>Here You can find all Your favourite WatchLists.
                        Click on the poster for more details.
                    </p>
                </div>
                <div className='watchlists-items'>
                    {result.length > 0 ? result : <p>No movies in your watchlist.</p>}
                </div>
            </div>
        </div>
    );
}

export default WatchLists;
