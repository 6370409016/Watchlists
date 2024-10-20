import React from 'react'
import '../styles/Card2.css'
import { Link } from 'react-router-dom'
import deletImg from '../assets/bin.png'
import noPhotoAvailable from '../assets/No_Image_Available.jpg'

function Card2({ movie, removeItem }) {

    const isPosterAvailable = movie.poster !== 'N/A';

    return (
        <>
            <div className='card2'>
                <div className='poster2'>
                    <Link to={`/details/${movie.imdbId}`}>
                        <img src={isPosterAvailable ? movie.poster : noPhotoAvailable} alt={movie.title} />
                    </Link>
                </div>
                <div className='details2'>
                    <div className='details2-content'>
                        <div className='details2-title'>
                            <h3>{movie.title}</h3>
                            <div className='removeWatchList'>
                                <button onClick={() => removeItem(movie.imdbId)}>
                                    <img src={deletImg} />
                                </button>
                            </div>
                        </div>

                        <h3>({movie.year})</h3>

                        <div className='details2-plot'>
                            <p>{movie.plot}</p>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card2
