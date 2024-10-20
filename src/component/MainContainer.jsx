import React, { useState } from 'react'
import WelcomeHeading from './WelcomeHeading'
import '../styles/MainContainer.css'
import axios from 'axios'
import Card from './Card'

const apikey = import.meta.env.VITE_API_KEY;
function MainContainer() {
    const [movieName, setMovieName] = useState('');
    const [movieDetails, setMovieDetails] = useState({})
    const [isvalidRequest, setIsValidRequest] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const movieRequest = () => {
        let request = `http://www.omdbapi.com/?apikey=${apikey}&t=${movieName}`;
        axios.get(request)
            .then((response) => {
                // console.log(response.data);
                if (response.data.Response === "True") {
                    setMovieDetails({
                        title: response.data.Title,
                        year: response.data.Year,
                        poster: response.data.Poster,
                        plot: response.data.Plot,
                        imdbId: response.data.imdbID
                    });
                    setIsValidRequest(true);
                    setErrorMessage('');
                } else {
                    setIsValidRequest(false);
                    setErrorMessage('Movie not found. Please search a valid movie name.');
                }
            })
            .catch(() => {
                setIsValidRequest(false);
                setErrorMessage('Error fetching movie data.');
            });
    };
    return (
        <>
            <div className='main-container'>
                <div className='welcome-heading'>
                    <WelcomeHeading />
                </div>

                <div className='movie-searchbar'>
                    <input type='text'
                        placeholder='Search Watchlists'
                        style={{ width: '100%' }}
                        value={movieName}
                        onChange={(e) => setMovieName(e.target.value)}
                    />
                    <button onClick={movieRequest}>Search</button>
                </div>
                {isvalidRequest ? (<div className='moviescards'>
                    <Card movieDetails={movieDetails} />
                </div>) : (<h2>{errorMessage}</h2>)}

            </div>
        </>
    )
}

export default MainContainer
