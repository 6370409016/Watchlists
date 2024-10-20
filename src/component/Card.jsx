import React, { useContext } from 'react';
import '../styles/Card.css';
import { Link, useNavigate } from 'react-router-dom';
import watchlistImage from '../assets/bookmark.png';
import { AuthContext } from './Aunthentication';

function Card({ movieDetails }) {
    const { isSigned } = useContext(AuthContext);
    const navigate = useNavigate();
    function saveToWatchList(movie) {

        if (isSigned) {
            const existingWatchLists = JSON.parse(localStorage.getItem('watchlist')) || [];
            const isAlreadyInWatchList = existingWatchLists.some((item) => item.imdbId === movie.imdbId);

            if (!isAlreadyInWatchList) {
                const updatedWatchLists = [...existingWatchLists, movie];
                localStorage.setItem('watchlist', JSON.stringify(updatedWatchLists));
                alert('Movie added to MyWatchLists');
            } else {
                alert('Movie is already in your watchlist');
            }
        } else {
            alert('You are not signed In yet, Please sign in first');
            setTimeout(() => {
                navigate('/signin');
            }, 1000);
        }

    }

    return (
        <>
            <div className='card'>
                <div className='poster'>
                    <Link to={`/details/${movieDetails.imdbId}`}>
                        <img src={movieDetails.poster} alt={movieDetails.title} />
                    </Link>
                </div>
                <div className='details'>
                    <div className='details-content'>
                        <div className='details-title'>
                            <h3>{movieDetails.title}</h3>
                            <div className='addtowatchlist'>
                                <button onClick={() => saveToWatchList(movieDetails)}>
                                    <img src={watchlistImage} alt="Add to Watchlist" />
                                </button>
                            </div>
                        </div>

                        <h3>({movieDetails.year})</h3>
                        <div className='details-plot'>
                            <p>{movieDetails.plot}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Card;
