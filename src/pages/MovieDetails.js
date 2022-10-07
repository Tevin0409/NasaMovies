import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useApi from "../helpers/useApi";
import "./MovieDetails.css";
const MovieDetails = () => {
  let { id } = useParams();
  const getMovieDetails = () =>
    axios.get(`https://api.themoviedb.org/3/movie/${id}?`, {
      params: {
        api_key: process.env.REACT_APP_MOVIEDB_API_KEY,
      },
    });
  const getMovieDetailsApi = useApi(getMovieDetails);

  useEffect(() => {
    getMovieDetailsApi.request();
  }, []);
  return (
    <React.Fragment>
      <main className="main">
        <section className="movie-banner">
          {getMovieDetailsApi.data && (
            <>
              {getMovieDetailsApi.data?.poster_path !== null ? (
                <img
                  src={
                    process.env.REACT_APP_IMAGE_BASE_URL +
                    getMovieDetailsApi.data?.poster_path
                  }
                  alt="Movie Poster"
                  className="img-movie-banner"
                />
              ) : (
                <img
                  src="https://dummyimage.com/720x600"
                  alt="Movie Poster"
                  className="img-movie-banner"
                />
              )}

              <h2>Title: {getMovieDetailsApi.data.title}</h2>
              <h2>Tagline: {getMovieDetailsApi.data.tagline}</h2>
              <h2>Overview: {getMovieDetailsApi.data.overview}</h2>
              <h2>Vote Average: {getMovieDetailsApi.data.vote_average}</h2>
              <h2>Total Votes: {getMovieDetailsApi.data.vote_count}</h2>
              <h2>Status: {getMovieDetailsApi.data.status}</h2>
              <h2>
                IMDB Link:{" "}
                <a
                  href={`https://www.imdb.com/title/${getMovieDetailsApi.data.imdb_id}`}
                >
                  {getMovieDetailsApi.data.imdb_id}
                </a>
              </h2>
              <h2>
                Budget:{" "}
                {getMovieDetailsApi.data?.budget === 0
                  ? "Unknown budget costs"
                  : getMovieDetailsApi.data?.budget}
              </h2>
              <h2>Production Countries:</h2>
              <ul>
                {getMovieDetailsApi.data.production_countries?.map(
                  (country) => (
                    <li key={country.name}>{country.name}</li>
                  )
                )}
              </ul>
              <h2>Genres</h2>
              <ul>
                {getMovieDetailsApi.data.genres?.map((genre) => (
                  <li key={genre.name}>{genre.name}</li>
                ))}
              </ul>
              <h2>Languages</h2>
              <ul>
                {getMovieDetailsApi.data.spoken_languages?.map((language) => (
                  <li key={language.name}>{language.name}</li>
                ))}
              </ul>
            </>
          )}
        </section>
      </main>
    </React.Fragment>
  );
};

export default MovieDetails;
