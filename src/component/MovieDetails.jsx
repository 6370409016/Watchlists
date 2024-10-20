import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/MovieDetails.css'
import nophotoAvaiable from '../assets/No_Image_Available.jpg'

export default function MovieDetails() {
    const [movieDetails, setMovieDetails] = useState({});
    const [isPoster, setIsPoster] = useState(false);

    const { imdbId } = useParams();
    const apikey = import.meta.env.VITE_API_KEY;
    let request = `http://www.omdbapi.com/?apikey=${apikey}&i=${imdbId}`;
    useEffect(
        () => {
            axios.get(request).then(
                (response) => {
                    if (movieDetails.poster == 'N/A') {
                        setIsPoster(false)
                    } else {
                        setIsPoster(true);
                    }

                    setMovieDetails({
                        title: response.data.Title,
                        released: response.data.Released,
                        poster: response.data.Poster,
                        plot: response.data.Plot,
                        rated: response.data.Rated,
                        totalTime: response.data.Runtime,
                        rating: response.data.Ratings[0].Value,
                        language: response.data.Language,
                        actors: response.data.Actors,

                    })
                }
            )
        }, [imdbId]
    )
    return (
        <>
            <div className='details-container'>
                <div className='details-poster'>
                    {isPoster ? (<img src={movieDetails.poster} />) : (<img src={nophotoAvaiable} />)}

                </div>
                <div className='movie-details'>
                    <h2>Title: {movieDetails.title}</h2>
                    <p>Released : {movieDetails.released}</p>
                    <p>Total Time: {movieDetails.totalTime}</p>
                    <p>Imdb: {movieDetails.rating} </p>
                    <p>Language: {movieDetails.language}</p>
                    <p>Actors : {movieDetails.actors}</p>
                    <p>Plot: {movieDetails.plot}</p>
                </div>
            </div>
        </>
    )
}
